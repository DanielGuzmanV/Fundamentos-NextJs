import { LOREM_PICSUM_BASE_URL } from "../config/apiConfig";

// Obtener una URL de imagen de Lorem Picsum con un ID como "seed"
export function getRandomImageUrl(id: number, width = 800, height = 450): string {
  return `${LOREM_PICSUM_BASE_URL}/${id}/${width}/${height}`;
}

// Generar una fecha de publicacion aleatoria reciente
export function getRandomPublishedDate(): string {
  const now = new Date();
  const randomDaysAgo = Math.floor(Math.random() * 60); // Últimos 60 días
  now.setDate(now.getDate() - randomDaysAgo);
  return now.toISOString().split('T')[0]; // Formato YYYY-MM-DD
}

// Generar un tiempo de lectura estimado
export function getEstimatedReadTime(body: string): string {
  const wordsPerMinute = 200;
  const wordCount = body.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min de lectura`;
}

// Generar un extracto corto
export function getExcerpt(body: string, maxLength = 150): string {
  if(body.length <= maxLength) return body;
  return body.substring(0, body.lastIndexOf(' ',maxLength)) + '...';
}
