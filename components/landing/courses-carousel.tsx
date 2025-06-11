"use client"
import { Carousel } from "../ui/carousel"
import Image from "next/image"
import { motion } from "framer-motion"

const courses = [
  {
    id: 1,
    title: "Desarrollo Web Full Stack",
    description: "Domina el desarrollo web moderno con las últimas tecnologías.",
    image: "/placeholder.jpg",
    level: "Intermedio",
    duration: "6 meses"
  },
  {
    id: 2,
    title: "Inteligencia Artificial Avanzada",
    description: "Aprende IA y Machine Learning con proyectos reales.",
    image: "/placeholder.jpg",
    level: "Avanzado",
    duration: "8 meses"
  },
  {
    id: 3,
    title: "Blockchain y Web3",
    description: "Construye el futuro de la web descentralizada.",
    image: "/placeholder.jpg",
    level: "Intermedio",
    duration: "4 meses"
  },
  {
    id: 4,
    title: "Ciberseguridad",
    description: "Protege sistemas y datos en la era digital.",
    image: "/placeholder.jpg",
    level: "Avanzado",
    duration: "5 meses"
  },
  {
    id: 5,
    title: "DevOps y Cloud",
    description: "Automatiza y escala tus aplicaciones en la nube.",
    image: "/placeholder.jpg",
    level: "Intermedio",
    duration: "6 meses"
  }
]

export default function CoursesCarousel() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#374151] text-center mb-12">
          Cursos destacados
        </h2>
        <Carousel className="max-w-4xl mx-auto">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, boxShadow: "0 4px 32px #3B82F633" }}
              className="bg-[#F3F4F6] rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center transition-transform"
            >
              <div className="w-full md:w-48 flex-shrink-0">
                <Image src={course.image} alt={course.title} width={192} height={192} className="rounded-lg object-cover w-full h-32 md:h-48" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">{course.title}</h3>
                <p className="text-[#374151] mb-2">{course.description}</p>
                <div className="flex gap-4 mb-4">
                  <span className="bg-[#3B82F6]/10 text-[#3B82F6] px-3 py-1 rounded-full text-sm font-semibold">{course.level}</span>
                  <span className="bg-[#1E3A8A]/10 text-[#1E3A8A] px-3 py-1 rounded-full text-sm font-semibold">{course.duration}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.08, boxShadow: "0 0 16px #3B82F6" }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-[#3B82F6] hover:bg-[#1E3A8A] text-white px-6 py-2 rounded-full font-semibold transition"
                >
                  Ver curso
                </motion.button>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  )
} 