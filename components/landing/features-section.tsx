"use client"
import { FaChalkboardTeacher, FaUsers, FaRocket, FaLaptopCode } from "react-icons/fa"
import { motion } from "framer-motion"

const features = [
  {
    icon: <FaChalkboardTeacher className="text-3xl text-[#3B82F6]" />,
    title: "Expertos como instructores",
    description: "Aprende de profesionales líderes en la industria con experiencia real."
  },
  {
    icon: <FaLaptopCode className="text-3xl text-[#3B82F6]" />,
    title: "Contenido actualizado",
    description: "Cursos siempre al día con las últimas tendencias y tecnologías."
  },
  {
    icon: <FaUsers className="text-3xl text-[#3B82F6]" />,
    title: "Comunidad activa",
    description: "Conecta, pregunta y colabora con miles de estudiantes y expertos."
  },
  {
    icon: <FaRocket className="text-3xl text-[#3B82F6]" />,
    title: "Aprende a tu ritmo",
    description: "Accede a los cursos cuando quieras, desde cualquier dispositivo."
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#374151] text-center mb-16">
          ¿Por qué elegir nuestra plataforma?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.18, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#374151] text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 