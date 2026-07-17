import { JSON_PLACEHOLDER_BASE_URL } from "../config/apiConfig";
import { JsonPlaceholderComment } from "../types/comment";

// Operacion de fetching y Mapeo de datos
export async function fetchAndMapComments(): Promise<JsonPlaceholderComment[]> {
  try {
    const response = await fetch(`${JSON_PLACEHOLDER_BASE_URL}/comments`, {
      next: {revalidate: 3600},
    })
    if (!response.ok) throw new Error('Failed to fetch comments');
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
