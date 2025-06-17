"use client"
import { Box, Container, Typography, Avatar } from "@mui/material"
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
    <Box sx={{ py: 10, bgcolor: "#F3F4F6" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 8,
            color: "#374151",
            fontWeight: "bold"
          }}
        >
          Lo que dicen nuestros estudiantes
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: `repeat(${testimonials.length}, 1fr)`
            },
            gap: 4
          }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.18, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.04, boxShadow: "0 4px 32px #1E3A8A33" }}
              style={{ background: "white", borderRadius: 16, boxShadow: "0 2px 8px #0001", padding: 32, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", transition: "box-shadow 0.3s" }}
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: -6 }}
                style={{ marginBottom: 16, borderRadius: "50%", overflow: "hidden" }}
              >
                <Avatar src={t.image} alt={t.name} sx={{ width: 80, height: 80 }} />
              </motion.div>
              <Typography sx={{ color: "#374151", mb: 2, fontStyle: "italic" }}>
                “{t.text}”
              </Typography>
              <Typography sx={{ fontWeight: 600, color: "#1E3A8A" }}>{t.name}</Typography>
              <Typography sx={{ fontSize: 14, color: "#3B82F6" }}>{t.role}</Typography>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
} 