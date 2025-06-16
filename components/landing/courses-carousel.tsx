"use client"
import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton, Container } from "@mui/material"
import { motion } from "framer-motion"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from "react"

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

const VISIBLE_CARDS = 3

export default function CoursesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % courses.length)
  }

  const getVisibleCourses = () => {
    const visible = []
    for (let i = 0; i < VISIBLE_CARDS; i++) {
      const index = (currentIndex + i) % courses.length
      visible.push({ ...courses[index], relativeIndex: i - 1 })
    }
    return visible
  }

  const visibleCourses = getVisibleCourses()

  return (
    <Box sx={{ py: 12, bgcolor: "white" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 10,
            color: "#374151",
            fontWeight: "bold"
          }}
        >
          Cursos destacados
        </Typography>

        <Box sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: '100%',
          mx: "auto",
          px: { xs: 2, md: 4 }
        }}>
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { xs: -20, md: -40 },
              zIndex: 2,
              bgcolor: "#F3F4F6",
              '&:hover': { bgcolor: "#E0E7EF" },
              '&.Mui-disabled': { opacity: 0.5 }
            }}
          >
            <NavigateBeforeIcon fontSize="large" />
          </IconButton>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              overflow: 'hidden',
              position: 'relative',
              minHeight: { xs: 400, md: 500 }
            }}
          >
            {visibleCourses.map((course, idx) => {
              const isCenter = course.relativeIndex === 0
              const scale = isCenter ? 1 : 0.85
              const opacity = isCenter ? 1 : 0.7
              const zIndex = isCenter ? 2 : 1

              // Calculate initial position based on direction
              const initialX = direction === 1 ? 1000 : -1000
              const targetX = course.relativeIndex * 380

              const cardSx = isCenter
                ? {
                    width: { xs: 260, md: 320 },
                    minHeight: { xs: 360, md: 400 },
                    boxShadow: 6,
                    bgcolor: "#F3F4F6",
                    borderRadius: 4,
                    transition: 'all 1.2s ease-in-out'
                  }
                : {
                    width: { xs: 260, md: 320 },
                    minHeight: { xs: 300, md: 360 },
                    opacity,
                    boxShadow: 2,
                    bgcolor: "#F3F4F6",
                    borderRadius: 4,
                    transition: 'all 1.2s ease-in-out'
                  }

              return (
                <motion.div
                  key={course.id}
                  initial={{ 
                    x: initialX, 
                    scale: 0.85, 
                    opacity: 0,
                    y: 50,
                    rotateY: direction === 1 ? 45 : -45,
                    height: isCenter ? 'auto' : '80%'
                  }}
                  animate={{ 
                    x: targetX, 
                    scale: scale,
                    opacity: opacity,
                    y: 0,
                    rotateY: 0,
                    height: isCenter ? 'auto' : '80%'
                  }}
                  transition={{ 
                    type: "spring", 
                    damping: 12, 
                    stiffness: 30, 
                    mass: 2,
                    duration: 1.5,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 40,
                      mass: 1.5,
                      duration: 1.2
                    },
                    y: {
                      type: "spring",
                      damping: 15,
                      stiffness: 40,
                      duration: 1.2
                    },
                    rotateY: {
                      type: "spring",
                      damping: 15,
                      stiffness: 40,
                      duration: 1.2
                    },
                    height: {
                      type: "spring",
                      damping: 15,
                      stiffness: 40,
                      duration: 1.2
                    }
                  }}
                  style={{
                    position: 'absolute',
                    zIndex,
                    transformOrigin: 'center center',
                    willChange: 'transform',
                    perspective: '1000px',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    ...cardSx,
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    transition: 'all 1.2s ease-in-out'
                  }}>
                    <CardMedia
                      component="img"
                      image={course.image}
                      alt={course.title}
                      sx={{
                        height: isCenter ? { xs: 160, md: 200 } : { xs: 140, md: 160 },
                        objectFit: "cover",
                        borderRadius: "16px 16px 0 0",
                        transform: 'translateZ(0)'
                      }}
                    />
                    <CardContent sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                      justifyContent: "space-between",
                      p: { xs: 2, md: 3 },
                      transform: 'translateZ(0)'
                    }}>
                      <Typography
                        variant={isCenter ? "h5" : "h6"}
                        sx={{
                          color: "#374151",
                          fontWeight: 700,
                          mb: 1.5,
                          fontSize: isCenter ? { xs: 18, md: 20 } : { xs: 14, md: 16 }
                        }}
                      >
                        {course.title}
                      </Typography>
                      <Typography sx={{
                        color: "#374151",
                        mb: 2,
                        fontSize: isCenter ? { xs: 13, md: 14 } : { xs: 12, md: 13 },
                        lineHeight: 1.5
                      }}>
                        {course.description}
                      </Typography>
                      <Box sx={{
                        display: 'flex',
                        gap: 1.5,
                        mb: 2,
                        flexWrap: 'wrap'
                      }}>
                        <Box sx={{
                          bgcolor: "#4B5563",
                          color: "white",
                          px: 2,
                          py: 0.5,
                          borderRadius: 2,
                          fontSize: isCenter ? { xs: 12, md: 13 } : { xs: 11, md: 12 },
                          fontWeight: 600
                        }}>
                          {course.level}
                        </Box>
                        <Box sx={{
                          border: "1px solid #000",
                          bgcolor: "transparent",
                          color: "#000",
                          px: 2,
                          py: 0.5,
                          borderRadius: 2,
                          fontSize: isCenter ? { xs: 12, md: 13 } : { xs: 11, md: 12 },
                          fontWeight: 600
                        }}>
                          {course.duration}
                        </Box>
                      </Box>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: '#374151',
                          '&:hover': { bgcolor: '#4B5563' },
                          borderRadius: 2,
                          fontWeight: 600,
                          mt: "auto",
                          fontSize: isCenter ? { xs: 13, md: 14 } : { xs: 12, md: 13 },
                          py: isCenter ? 1 : 0.8,
                          px: 3
                        }}
                      >
                        Ver curso
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </Box>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: -20, md: -40 },
              zIndex: 2,
              bgcolor: "#F3F4F6",
              '&:hover': { bgcolor: "#E0E7EF" },
              '&.Mui-disabled': { opacity: 0.5 }
            }}
          >
            <NavigateNextIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}
