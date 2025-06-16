"use client"
import { FaChalkboardTeacher, FaUsers, FaRocket, FaLaptopCode } from "react-icons/fa"
import { Box, Container, Typography } from "@mui/material"
import { motion } from "framer-motion"

const features = [
  {
    icon: <FaChalkboardTeacher style={{ fontSize: "2rem", color: "#3B82F6" }} />,
    title: "Expertos como instructores",
    description: "Aprende de profesionales líderes en la industria con experiencia real."
  },
  {
    icon: <FaLaptopCode style={{ fontSize: "2rem", color: "#3B82F6" }} />,
    title: "Contenido actualizado",
    description: "Cursos siempre al día con las últimas tendencias y tecnologías."
  },
  {
    icon: <FaUsers style={{ fontSize: "2rem", color: "#3B82F6" }} />,
    title: "Comunidad activa",
    description: "Conecta, pregunta y colabora con miles de estudiantes y expertos."
  },
  {
    icon: <FaRocket style={{ fontSize: "2rem", color: "#3B82F6" }} />,
    title: "Aprende a tu ritmo",
    description: "Accede a los cursos cuando quieras, desde cualquier dispositivo."
  }
]

export default function FeaturesSection() {
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
          ¿Por qué elegir nuestra plataforma?
        </Typography>
        <Box sx={{ 
          display: "grid", 
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)"
          },
          gap: 4
        }}>
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.18, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 2,
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
                    transform: "translateX(-100%)",
                    transition: "transform 0.6s ease-in-out"
                  },
                  "&:hover": {
                    "&::before": {
                      transform: "translateX(100%)"
                    },
                    "& .icon": {
                      transform: "scale(1.1) rotate(5deg)",
                      color: "#2563EB"
                    }
                  }
                }}
              >
                <Box 
                  className="icon"
                  sx={{ 
                    mb: 2,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: "#1E3A8A",
                    fontWeight: 600,
                    mb: 1
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: "#374151",
                    flex: 1,
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
} 