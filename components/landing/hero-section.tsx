"use client"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollY } = useScroll({ target: ref })
  // Parallax para la imagen
  const y = useTransform(scrollY, [0, 300], [0, 60])
  const router = useRouter()

  return (
    <section ref={ref} className="min-h-[80vh] bg-gradient-to-br from-[#1E3A8A] to-[#0f172a] flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Columna Izquierda: Texto */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-[0_2px_16px_rgba(59,130,246,0.5)]"
          >
            Transforma tu futuro con <span className="text-[#3B82F6]">cursos online</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="text-lg text-gray-200 mb-8"
          >
            Aprende de los mejores, a tu ritmo y desde cualquier lugar. Accede a una comunidad activa y a contenido actualizado constantemente.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="flex gap-4 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 0 24px #F43F5E" }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#F43F5E] hover:bg-[#be185d] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-[#F43F5E] focus:ring-offset-2"
            >
              Explora cursos
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 0 24px #3B82F6" }}
              whileTap={{ scale: 0.96 }}
              className="bg-white text-[#1e293b] px-8 py-3 rounded-full font-semibold text-lg border border-gray-300 hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2"
            >
              Únete ahora
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 0 24px #10B981" }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2"
              onClick={() => router.push("/dashboard")}
            >
              Iniciar sesión
            </motion.button>
          </motion.div>
        </div>
        {/* Columna Derecha: Imagen Placeholder animada */}
        <motion.div style={{ y }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-full max-w-md aspect-square bg-[#1E293B] rounded-3xl flex items-center justify-center shadow-2xl border-4 border-[#3B82F6]/30 animate-glow">
            <Image src="/placeholder.svg" alt="Futuristic AI" width={320} height={320} className="opacity-80" />
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        .animate-glow {
          box-shadow: 0 0 32px 8px #3B82F6aa, 0 0 0 0 #fff0;
          animation: glow 2.5s ease-in-out infinite alternate;
        }
        @keyframes glow {
          0% { box-shadow: 0 0 32px 8px #3B82F6aa, 0 0 0 0 #fff0; }
          100% { box-shadow: 0 0 64px 16px #3B82F6cc, 0 0 0 0 #fff0; }
        }
      `}</style>
    </section>
  )
} 