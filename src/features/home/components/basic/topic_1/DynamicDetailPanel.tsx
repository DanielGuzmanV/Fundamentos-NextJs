import { FileNode } from "@/features/home/constants/folderTree"

interface Props {
  activeItem: FileNode
}

export const DynamicDetailPanel = ({activeItem}: Props) => {
  return (
    <div className="rounded-lg bg-zinc-950 p-4 text-xs font-mono border border-border/40 overflow-x-auto text-emerald-400">
      {activeItem.id === "layout" && (
        <pre>
{`// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Sidebar /> {/* Mantiene su estado */}
      <main>{children}</main>
    </section>
  );
}`}
        </pre>
      )}

      {activeItem.id === "page" && (
        <pre>
{`// app/dashboard/page.tsx
export default function DashboardPage() {
  return <h1>Vista principal del Dashboard</h1>;
  // Se renderiza como 'children' dentro de layout.tsx
}`}
        </pre>
      )}

      {activeItem.id === "template" && (
        <pre>
{`// app/dashboard/template.tsx
export default function Template({ children }: { children: React.ReactNode }) {
  // Se vuelve a montar completamente en cada cambio de ruta
  return <motion.div animate={{ opacity: 1 }}>{children}</motion.div>;
}`}
        </pre>
      )}

      {activeItem.id === "special-folders" && (
        <pre>
{`app/
├── (auth)/          # Route Group (no afecta la URL)
│   ├── login/
│   └── register/
└── _components/     # Private Folder (ignorado por el router)
    └── Button.tsx`}
        </pre>
      )}

      {!activeItem.id && (
        <p className="text-center">No hay código disponible para este elemento.</p>
      )}
    </div>
  )
}