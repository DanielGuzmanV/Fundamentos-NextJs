export const QuickBlogHeaderHero = () => {
  return (
    <div className="max-w-4xl text-center mx-auto mb-16">
      <div className="inline-flex items-center px-4 py-1 mb-4 text-xs font-bold tracking-wider text-green-600 uppercase bg-green-100 rounded-full">
        <span className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
        Next.js Performance Demo
      </div>
      <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
        <span className="text-green-600">QuickBlog:</span> Noticias al Instante. Rendimiento 100%.
      </h1>
      <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
        Un blog dinámico optimizado para una carga ultrarrápida, SEO perfecto y la mejor experiencia de usuario, potenciado por Next.js App Router.
      </p>
    </div>
  );
};