import ModuleScreen from "@/features/home/screens/ModuleScreen"

interface ModulePageProps {
  params: Promise<{
    modulo: string
  }>
}

export default async function ModulePage({params}: ModulePageProps) {
  const {modulo} = await params

  return <ModuleScreen moduloSlug={modulo}/>
}