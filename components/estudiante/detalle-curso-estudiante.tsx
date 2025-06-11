"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { FileText, Link2, PlayCircle } from "lucide-react"

const cursos = [
  {
    id: "curso-1",
    titulo: "Desarrollo Web Full Stack",
    imagen: "/placeholder.jpg",
    progreso: 72,
    descripcion: "Aprende a crear aplicaciones web modernas con las tecnologías más demandadas.",
    lecciones: [
      {
        id: "l1",
        titulo: "Bienvenida al curso",
        tipo: "video",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        completado: true,
      },
      {
        id: "l2",
        titulo: "Guía de Proyecto (PDF)",
        tipo: "archivo",
        url: "/mock/guia-proyecto.pdf",
        completado: false,
      },
      {
        id: "l3",
        titulo: "Recursos útiles",
        tipo: "enlace",
        url: "https://platzi.com/blog/recursos-web/",
        completado: false,
      },
    ],
  },
  {
    id: "curso-2",
    titulo: "Inteligencia Artificial desde Cero",
    imagen: "/placeholder.jpg",
    progreso: 40,
    descripcion: "Domina los fundamentos de la IA y el machine learning con proyectos reales.",
    lecciones: [
      {
        id: "l1",
        titulo: "¿Qué es la IA? (Video)",
        tipo: "video",
        url: "https://www.w3schools.com/html/movie.mp4",
        completado: true,
      },
      {
        id: "l2",
        titulo: "Datasets (CSV)",
        tipo: "archivo",
        url: "/mock/datasets.csv",
        completado: false,
      },
      {
        id: "l3",
        titulo: "Artículo recomendado",
        tipo: "enlace",
        url: "https://es.wikipedia.org/wiki/Inteligencia_artificial",
        completado: false,
      },
    ],
  },
  {
    id: "curso-3",
    titulo: "Data Science y Python",
    imagen: "/placeholder.jpg",
    progreso: 100,
    descripcion: "Analiza datos y crea modelos predictivos usando Python y librerías de ciencia de datos.",
    lecciones: [
      {
        id: "l1",
        titulo: "Python Básico (Video)",
        tipo: "video",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        completado: true,
      },
      {
        id: "l2",
        titulo: "Ejercicios Python (PDF)",
        tipo: "archivo",
        url: "/mock/ejercicios-python.pdf",
        completado: true,
      },
      {
        id: "l3",
        titulo: "Repositorio de código",
        tipo: "enlace",
        url: "https://github.com/platzi/ejemplo-python",
        completado: true,
      },
    ],
  },
]

const iconByType = {
  video: PlayCircle,
  archivo: FileText,
  enlace: Link2,
} as const

type TipoLeccion = keyof typeof iconByType

export default function DetalleCursoEstudiante({ cursoId }: { cursoId: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const curso = useMemo(() => cursos.find(c => c.id === cursoId), [cursoId])
  const [leccionActiva, setLeccionActiva] = useState(
    curso?.lecciones[0]?.id || ""
  )
  const leccion = curso?.lecciones.find(l => l.id === leccionActiva)

  if (!curso) return <div className="text-center py-20 text-xl">Curso no encontrado</div>

  return (
    <section className="max-w-5xl mx-auto">
      <button className="mb-6 text-[#3B82F6] hover:underline" onClick={() => router.back()}>&larr; Volver a mis cursos</button>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Lecciones tipo Platzi */}
        <aside className="w-full md:w-64 flex-shrink-0 mb-4 md:mb-0">
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold text-[#1E3A8A] mb-4">Lecciones</h3>
            <ul className="space-y-2">
              {curso.lecciones.map((l, idx) => {
                const Icon = iconByType[l.tipo as TipoLeccion]
                return (
                  <li key={l.id}>
                    <button
                      className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg transition-colors font-medium
                        ${leccionActiva === l.id ? "bg-[#3B82F6]/10 text-[#1E3A8A]" : "hover:bg-[#F3F4F6] text-[#374151]"}`}
                      onClick={() => setLeccionActiva(l.id)}
                    >
                      <Icon className={`w-5 h-5 ${l.tipo === "video" ? "text-[#3B82F6]" : l.tipo === "archivo" ? "text-[#10B981]" : "text-[#FACC15]"}`} />
                      <span>{l.titulo}</span>
                      {l.completado && <span className="ml-auto text-xs text-[#10B981] font-bold">✓</span>}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>
        {/* Contenido de la lección */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-[#1E3A8A] mb-2">{curso.titulo}</h1>
          <p className="text-[#374151] mb-4">{curso.descripcion}</p>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-full bg-[#F3F4F6] rounded-full h-3">
              <div className="bg-[#10B981] h-3 rounded-full transition-all" style={{ width: `${curso.progreso}%` }}></div>
            </div>
            <span className="text-xs font-semibold text-[#10B981] min-w-[32px] text-right">{curso.progreso}%</span>
          </div>
          <motion.div
            key={leccion?.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow p-6 min-h-[320px] flex flex-col items-center justify-center"
          >
            {leccion?.tipo === "video" && (
              <video controls className="w-full max-w-2xl rounded-xl shadow-lg">
                <source src={leccion.url} type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
            )}
            {leccion?.tipo === "archivo" && (
              <iframe
                src={leccion.url}
                className="w-full max-w-2xl h-[400px] rounded-xl border"
                title={leccion.titulo}
                allow="autoplay"
              ></iframe>
            )}
            {leccion?.tipo === "enlace" && (
              <div className="flex flex-col items-center justify-center w-full">
                <a
                  href={leccion.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3B82F6] underline text-lg font-semibold mb-2"
                >
                  Ir al recurso externo
                </a>
                <iframe
                  src={leccion.url}
                  className="w-full max-w-2xl h-[400px] rounded-xl border"
                  title={leccion.titulo}
                  allow="autoplay"
                ></iframe>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 