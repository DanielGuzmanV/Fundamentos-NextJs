export default async function DetalleVenta({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
        <h2 className="text-black">Detalle de la venta numero: {id}</h2>
      </div>
    </div>
  )
  
}