"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Ana Torres",
    role: "Desarrolladora Frontend",
    image: "/placeholder-user.jpg",
    text: "Gracias a esta plataforma conseguí mi primer trabajo remoto. Los cursos son prácticos y la comunidad es increíble."
  },
  {
    name: "Carlos Méndez",
    role: "Ingeniero de Datos",
    image: "/placeholder-user.jpg",
    text: "El contenido siempre está actualizado y los profesores explican con ejemplos reales. ¡Muy recomendado!"
  },
  {
    name: "Lucía Fernández",
    role: "Emprendedora Tech",
    image: "/placeholder-user.jpg",
    text: "Pude lanzar mi startup gracias a los cursos de blockchain y a la red de contactos que hice aquí."
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#374151] text-center mb-12">
          Lo que dicen nuestros estudiantes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.18, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.04, boxShadow: "0 4px 32px #1E3A8A33" }}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow group"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: -6 }}
                className="mb-4 rounded-full overflow-hidden"
              >
                <Image src={t.image} alt={t.name} width={80} height={80} className="rounded-full" />
              </motion.div>
              <p className="text-[#374151] mb-4">“{t.text}”</p>
              <div className="font-semibold text-[#1E3A8A]">{t.name}</div>
              <div className="text-sm text-[#3B82F6]">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 