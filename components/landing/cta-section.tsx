"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function CtaSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const y = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white text-center overflow-hidden">
      <motion.div style={{ scale, y }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-6 drop-shadow-[0_2px_16px_rgba(59,130,246,0.5)]">
          ¡Empieza a aprender hoy!
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Únete a miles de estudiantes y accede a cursos de alta calidad, comunidad activa y recursos exclusivos.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 24px #fff" }}
            whileTap={{ scale: 0.96 }}
            className="bg-white text-[#1E3A8A] hover:bg-[#F3F4F6] px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
          >
            Explorar Cursos
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 24px #F43F5E" }}
            whileTap={{ scale: 0.96 }}
            className="bg-[#F43F5E] hover:bg-[#be185d] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
          >
            Registrarse
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
} 