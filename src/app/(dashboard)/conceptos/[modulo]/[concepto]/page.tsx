import ConceptDetailScreen from "@/features/home/screens/ConceptDetailScreen";

interface ConceptDetailPageProps {
  params: Promise<{
    modulo: string;
    concepto: string;
  }>
}

export default async function ConceptDetailPage({params}: ConceptDetailPageProps)  {
  const {modulo, concepto} = await params;

  return <ConceptDetailScreen moduloSlug={modulo} conceptoSlug={concepto}/>
}