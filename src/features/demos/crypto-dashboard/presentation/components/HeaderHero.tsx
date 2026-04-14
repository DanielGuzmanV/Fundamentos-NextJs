export const HeaderHero = () => {
  return (
    <header className="text-center mb-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4 border border-indigo-100">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        Demo #1 - Proyecto Frontend
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 from-slate-900 via-indigo-950 to-slate-900 bg-clip-text text-transparent">
        Crypto Dashboard <br /> <span className="text-indigo-600 font-black">Real-Time Data</span>
      </h1>
      <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Explora una interfaz diseñada para el monitoreo de criptomonedas con datos vivos, gráficas interactivas y una experiencia de usuario optimizada.
      </p>
    </header>
  )
}