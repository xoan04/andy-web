"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

const cursos = [
  {
    id: "curso-1",
    titulo: "Desarrollo Web Full Stack",
    imagen: "/placeholder.jpg",
    progreso: 72,
    descripcion: "Aprende a crear aplicaciones web modernas con las tecnologías más demandadas.",
  },
  {
    id: "curso-2",
    titulo: "Inteligencia Artificial desde Cero",
    imagen: "/placeholder.jpg",
    progreso: 40,
    descripcion: "Domina los fundamentos de la IA y el machine learning con proyectos reales.",
  },
  {
    id: "curso-3",
    titulo: "Data Science y Python",
    imagen: "/placeholder.jpg",
    progreso: 100,
    descripcion: "Analiza datos y crea modelos predictivos usando Python y librerías de ciencia de datos.",
  },
]

export default function MisCursosEstudiante() {
  const router = useRouter()
  return (
    <section>
      <h1 className="text-3xl font-bold text-[#1E3A8A] mb-8">Mis cursos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {cursos.map((curso, idx) => (
          <motion.div
            key={curso.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.15, type: "spring", bounce: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03, boxShadow: "0 4px 32px #3B82F633" }}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-xl transition-transform cursor-pointer"
            onClick={() => router.push(`/estudiante/curso/${curso.id}`)}
          >
            <div className="w-full h-40 relative rounded-lg overflow-hidden">
              <Image src={curso.imagen} alt={curso.titulo} fill className="object-cover" />
            </div>
            <h2 className="text-xl font-bold text-[#1E3A8A]">{curso.titulo}</h2>
            <p className="text-[#374151] text-sm flex-1">{curso.descripcion}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-full bg-[#F3F4F6] rounded-full h-3">
                <div
                  className="bg-[#10B981] h-3 rounded-full transition-all"
                  style={{ width: `${curso.progreso}%` }}
                ></div>
              </div>
              <span className="text-xs font-semibold text-[#10B981] min-w-[32px] text-right">{curso.progreso}%</span>
            </div>
            <button
              className="mt-4 bg-[#3B82F6] hover:bg-[#1E3A8A] text-white px-4 py-2 rounded-full font-semibold transition"
              onClick={e => { e.stopPropagation(); router.push(`/estudiante/curso/${curso.id}`) }}
            >
              Ver curso
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 