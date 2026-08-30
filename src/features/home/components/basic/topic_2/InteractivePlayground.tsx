"use client"
import { SAMPLE_PRODUCTS } from "@/features/home/constants/sampleProducts"
import { Play } from "lucide-react"
import { useState } from "react";

export const InteractivePlayground = () => {
  const [selectedProduct, setSelectedProduct] = useState("laptop-pro");

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <Play className="h-4 w-4 text-primary" />
        <h3 className="text-lg font-bold">Simulador de Params</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Selector de Ruta */}
        <div className="rounded-xl border border-border bg-card p-4 space-y-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase">
            1. Selecciona un producto
          </p>
          <div className="space-y-2">
            {SAMPLE_PRODUCTS.map((prod) => (
              <button
                key={prod.slug}
                onClick={() => setSelectedProduct(prod.slug)}
                className={`w-full cursor-pointer hover:scale-[1.02] text-left p-3 rounded-lg border text-xs font-medium transition-all flex items-center justify-between ${
                  selectedProduct === prod.slug
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:bg-blue-300 text-muted-foreground"
                }`}
              >
                <span>{prod.name}</span>
                <code className="text-[10px] opacity-75">/productos/{prod.slug}</code>
              </button>
            ))}
          </div>
        </div>

        {/* Resultado de Params */}
        <div className="rounded-xl border border-border bg-card p-4 space-y-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase">
            2. Objeto `params` recibido en `page.tsx`
          </p>
          <pre className="rounded-lg bg-zinc-950 p-4 text-emerald-400 font-mono text-xs overflow-x-auto">
{`// app/productos/[slug]/page.tsx

interface Props {
params: { slug: string };
}

export default function Page({ params }: Props) {
// params.slug === "${selectedProduct}"
return <h1>Producto: ${selectedProduct}</h1>;
}`}
          </pre>
        </div>
      </div>
    </section>
  )
}