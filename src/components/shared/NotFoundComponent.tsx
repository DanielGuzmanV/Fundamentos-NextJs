import { FileCode2 } from "lucide-react"

interface Props {
  title?: string;
  description?: string;
}

export const NotFoundComponent = ({
  title = "Seccion en construcción",
  description = "El componente interactivo aún no ha sido creado o no existe."
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <FileCode2 className="h-12 w-12 text-muted-foreground/50 mb-3" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-sm mt-1">
        {description}
      </p>
    </div>
  )
}