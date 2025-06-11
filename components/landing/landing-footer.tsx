"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function LandingFooter() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04])
  const y = useTransform(scrollYProgress, [0, 1], [0, -20])

  return (
    <motion.footer
      ref={ref}
      style={{ scale, y }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.3 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[#1E293B] text-white py-8"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <a href="#" className="hover:underline">Inicio</a>
          <a href="#" className="hover:underline">Cursos</a>
          <a href="#" className="hover:underline">Comunidad</a>
          <a href="#" className="hover:underline">Contacto</a>
        </div>
        <div className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Plataforma de Cursos. Todos los derechos reservados.<br />
          Imagen principal: <a href="#" className="underline">Placeholder</a>
        </div>
      </div>
    </motion.footer>
  )
} 