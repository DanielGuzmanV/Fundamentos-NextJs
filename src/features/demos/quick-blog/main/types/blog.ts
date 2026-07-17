// Tipos normalizados de nuestro blog
// Este tipo de usara despues de combinar lo datos

export interface Author {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface Article {
  id: number;
  slug: string; // Título "slugificado" para la URL (ej. "mi-gran-articulo")
  title: string;
  body: string; // Contenido completo del artículo
  excerpt: string; // Breve extracto para tarjetas de listado
  imageUrl: string; // URL de la imagen de Lorem Picsum
  author: Author; // Datos del autor combinados
  comments: Comment[]; // Comentarios asociados al artículo
  publishedAt: string; // Fecha de publicación simulada
  readTime: string; // Tiempo de lectura estimado
}
