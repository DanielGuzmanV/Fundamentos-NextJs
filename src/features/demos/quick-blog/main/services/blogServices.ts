import { notFound } from "next/navigation";
import { JSON_PLACEHOLDER_BASE_URL } from "../config/apiConfig";
import { 
  getEstimatedReadTime, 
  getExcerpt, getRandomImageUrl, 
  getRandomPublishedDate
} from "../utils/format";
import { slugify } from "../utils/slug";
import { Article, Comment } from "../types/blog";
import { JsonPlaceholderPost } from "../types/post";
import { fetchAndMapAuthors } from "../api/authorClient";
import { fetchAndMapComments } from "../api/commentClient";

interface GetArticlesOptions {
  start?: number;
  end?: number;
}

let allProcesssedArticlesCache: Article[] | null = null;

// Funciones principales del servicio
// Obtener todos los articulos combinados
export async function getArticles(options?: GetArticlesOptions): Promise<Article[]> {
  try {

    if(allProcesssedArticlesCache === null) {
      const [postsResponse, authors, allComments] = await Promise.all([
        fetch(`${JSON_PLACEHOLDER_BASE_URL}/posts`, { next: { revalidate: 3600 } }),
        fetchAndMapAuthors(),
        fetchAndMapComments(),
      ]);

      if (!postsResponse.ok) throw new Error('Failed to fetch posts');
      const posts: JsonPlaceholderPost[] = await postsResponse.json();
    
      allProcesssedArticlesCache = posts.map((post) => {
        const randomAuthorIndex = Math.floor(Math.random() * authors.length)
        const author = authors[randomAuthorIndex] || authors[0];
        
        const postComments: Comment[] = allComments
          .filter((comment) => comment.postId === post.id)
          .map((comment) => ({
            id: comment.id,
            postId: comment.postId,
            name: comment.name,
            email: comment.email,
            body: comment.body,
          }));
  
        return {
          id: post.id,
          slug: slugify(`${post.title}-${post.id}`),
          title: post.title,
          body: post.body,
          excerpt: getExcerpt(post.body),
          imageUrl: getRandomImageUrl(post.id),
          author,
          comments: postComments,
          publishedAt: getRandomPublishedDate(),
          readTime: getEstimatedReadTime(post.body),
        };
      });
    }

    const articlesToReturn = allProcesssedArticlesCache || [];

    if(options?.start !== undefined || options?.end !== undefined) {
      return articlesToReturn.slice(options.start, options.end);
    }

    return articlesToReturn;
  } catch (error) {
    console.error('Error in getArticles:', error);
    allProcesssedArticlesCache = null;
    return [];
  }
}

// Obtener un articulo por su slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getArticles();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound(); // Lanza el comportamiento nativo de Next.js
  }
  return article;
}
