import DetalleCursoEstudiante from "@/components/estudiante/detalle-curso-estudiante"

export default function Page({ params }: { params: { id: string } }) {
  return <DetalleCursoEstudiante cursoId={params.id} />
} 