import { RANDOM_USER_BLOG_AUTHORS_URL } from "../config/apiConfig";
import { Author } from "../types/blog";
import { RandomUser } from "../types/user";

// Operacion de fetching y Mapeo de datos
export async function fetchAndMapAuthors(): Promise<Author[]> {
  try {
    const response = await fetch(RANDOM_USER_BLOG_AUTHORS_URL, {
      next: {revalidate: 3600},
    });
    if(!response.ok) throw new Error('Failed to fetch authors')
    const data: {results: RandomUser[]} = await response.json();

    // Mapear los usuarios de randomUser a los userId de JSONPlaceholder
    return data.results.map((user, index) => ({
      id: index + 1,
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      avatar: user.picture.medium,
    }));

  } catch (error) {
    console.error(error);
    return [{ id: 0, name: 'Autor Anónimo', email: 'anon@example.com', avatar: 'https://via.placeholder.com/150' }];
  }
}