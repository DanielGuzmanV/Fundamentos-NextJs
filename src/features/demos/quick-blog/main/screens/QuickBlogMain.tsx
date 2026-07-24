import { Suspense } from "react";
import { getArticles } from "../services/blogServices"
import { Article } from "../types/blog";

// Componente auxiliar
async function ArticleGrid({articles}: {articles: Article[]}) {
  if(articles.length === 0) {
    return <p className="text-gray-600 text-lg">No hay articulos disponibles en este momento.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
      {articles.map((article) => (
        <div key={article.id} className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{article.title}</h2>
          <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
          <p className="text-sm text-gray-500">Por: {article.author.name}</p>
        </div>
      ))}
    </div>
  );
}

async function ArticleGridWithData() {
  const articles = await getArticles({start: 0, end: 50});

  return <ArticleGrid articles={articles}/>
}

export default async function QuickBlogMain () {
  return (
    <div className="flex min-h-screen flex-col items-center p-4 bg-zinc-50 font-sans">
      <h2 className="text-4xl text-center font-bold text-gray-900 mb-8 mt-4">Ultimos Articulos</h2>

      <Suspense fallback={
        <div className="text-gray-600 text-lg p-6">
          <p className="text-center font-medium mb-6">Cargando articulos...</p>
          {/* Podemos agregar un skeleton mas elaborado */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="bg-gray-400 rounded-lg shadow-md p-6 animate-pulse">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-500 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      }>
        <ArticleGridWithData/>
      </Suspense>
    </div>
  )
}
