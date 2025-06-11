"use client"
import { useAuth } from "@/components/auth/auth-provider"
import Image from "next/image"
import { motion } from "framer-motion"

const cursos = [
  { id: "curso-1", titulo: "Desarrollo Web Full Stack", progreso: 72 },
  { id: "curso-2", titulo: "Inteligencia Artificial desde Cero", progreso: 40 },
  { id: "curso-3", titulo: "Data Science y Python", progreso: 100 },
]

const completados = cursos.filter(c => c.progreso === 100).length

export default function PerfilEstudiante() {
  const { user } = useAuth()
  return (
    <section className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center mb-8">
        <Image src={user?.avatar || "/placeholder-user.jpg"} alt="avatar" width={96} height={96} className="rounded-full mb-4" />
        <h1 className="text-2xl font-bold text-[#1E3A8A] mb-1">{user?.name || "Estudiante"}</h1>
        <div className="text-[#3B82F6] font-medium uppercase text-xs mb-2">{user?.role || "estudiante"}</div>
        <div className="text-neutral-600 text-sm mb-2">{user?.email}</div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        className="bg-white rounded-xl shadow p-6 flex flex-col gap-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="text-lg font-semibold text-[#1E3A8A]">Cursos completados</div>
            <div className="text-3xl font-bold text-[#10B981]">{completados}</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-[#1E3A8A]">Cursos activos</div>
            <div className="text-3xl font-bold text-[#3B82F6]">{cursos.length - completados}</div>
          </div>
        </div>
        <div className="mt-6">
          <div className="text-base font-semibold text-[#374151] mb-2">Progreso por curso</div>
          <div className="space-y-3">
            {cursos.map((c, idx) => (
              <div key={c.id} className="flex flex-col gap-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-[#1E3A8A]">{c.titulo}</span>
                  <span className="font-semibold text-[#3B82F6]">{c.progreso}%</span>
                </div>
                <div className="w-full bg-[#F3F4F6] rounded-full h-3">
                  <div
                    className="bg-[#3B82F6] h-3 rounded-full transition-all"
                    style={{ width: `${c.progreso}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
} 