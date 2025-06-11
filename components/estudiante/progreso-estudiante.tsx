"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const cursos = [
  {
    id: "curso-1",
    titulo: "Desarrollo Web Full Stack",
    imagen: "/placeholder.jpg",
    progreso: 72,
  },
  {
    id: "curso-2",
    titulo: "Inteligencia Artificial desde Cero",
    imagen: "/placeholder.jpg",
    progreso: 40,
  },
  {
    id: "curso-3",
    titulo: "Data Science y Python",
    imagen: "/placeholder.jpg",
    progreso: 100,
  },
]

const progresoGlobal = Math.round(
  cursos.reduce((acc, c) => acc + c.progreso, 0) / cursos.length
)

export default function ProgresoEstudiante() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-[#1E3A8A] mb-8">Progreso general</h1>
      <div className="mb-10 flex flex-col md:flex-row gap-8 items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center w-full md:w-72"
        >
          <span className="text-lg text-[#3B82F6] font-semibold mb-2">Progreso global</span>
          <div className="relative w-32 h-32 flex items-center justify-center mb-2">
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#F3F4F6" strokeWidth="10" />
              <motion.circle
                cx="50" cy="50" r="45" fill="none" stroke="#10B981" strokeWidth="10"
                strokeDasharray={2 * Math.PI * 45}
                strokeDashoffset={2 * Math.PI * 45 * (1 - progresoGlobal / 100)}
                initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - progresoGlobal / 100) }}
                transition={{ duration: 1 }}
                strokeLinecap="round"
              />
            </svg>
            <span className="text-3xl font-bold text-[#10B981]">{progresoGlobal}%</span>
          </div>
          <span className="text-sm text-[#374151]">Completado en todos tus cursos</span>
        </motion.div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {cursos.map((curso, idx) => (
            <motion.div
              key={curso.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.12, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-xl shadow p-4 flex items-center gap-4"
            >
              <Image src={curso.imagen} alt={curso.titulo} width={64} height={64} className="rounded-lg" />
              <div className="flex-1">
                <div className="font-semibold text-[#1E3A8A] mb-1">{curso.titulo}</div>
                <div className="w-full bg-[#F3F4F6] rounded-full h-3 mb-1">
                  <div
                    className="bg-[#3B82F6] h-3 rounded-full transition-all"
                    style={{ width: `${curso.progreso}%` }}
                  ></div>
                </div>
                <span className="text-xs font-semibold text-[#3B82F6]">{curso.progreso}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 