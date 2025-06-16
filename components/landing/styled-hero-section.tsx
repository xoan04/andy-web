"use client"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useRouter } from "next/navigation"
import { Box, Button, Container, Typography, styled } from "@mui/material"

const GlowBox = styled(Box)(({ theme }) => ({
  boxShadow: '0 0 32px 8px rgba(17, 24, 39, 0.3), 0 0 0 0 rgba(255, 255, 255, 0)',
  animation: 'glow 2.5s ease-in-out infinite alternate',
  '@keyframes glow': {
    '0%': {
      boxShadow: '0 0 32px 8px rgba(17, 24, 39, 0.3), 0 0 0 0 rgba(255, 255, 255, 0)'
    },
    '100%': {
      boxShadow: '0 0 64px 16px rgba(17, 24, 39, 0.4), 0 0 0 0 rgba(255, 255, 255, 0)'
    }
  }
}))

const FloatingElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  background: 'rgba(229, 231, 235, 0.05)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(229, 231, 235, 0.1)',
  borderRadius: '12px',
  padding: theme.spacing(2),
  animation: 'float 6s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-20px)',
    },
  },
}))

export default function StyledHeroSection() {
  const ref = useRef(null)
  const { scrollY } = useScroll({ target: ref })
  const y = useTransform(scrollY, [0, 300], [0, 60])
  const router = useRouter()

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(31, 41, 55, 0.4) 0%, rgba(17, 24, 39, 0) 70%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, alignItems: 'center' }}>
          {/* Left Column: Text */}
          <Box>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.75rem' },
                  fontWeight: 800,
                  color: 'white',
                  mb: 3,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(to right, #E5E7EB, #9CA3AF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Transforma tu futuro con <Box component="span" sx={{ color: '#E5E7EB' }}>cursos online</Box>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
            >
              <Typography
                variant="h6"
                sx={{ 
                  color: 'rgba(229, 231, 235, 0.8)', 
                  mb: 4,
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  lineHeight: 1.6
                }}
              >
                Aprende de los mejores, a tu ritmo y desde cualquier lugar. Accede a una comunidad activa y a contenido actualizado constantemente.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, type: "spring" }}
            >
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#374151',
                      '&:hover': { bgcolor: '#4B5563' },
                      px: 4,
                      py: 1.5,
                      borderRadius: '8px',
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                      textTransform: 'none',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    Explora cursos
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: '#E5E7EB',
                      borderColor: 'rgba(229, 231, 235, 0.3)',
                      '&:hover': { 
                        borderColor: 'rgba(229, 231, 235, 0.5)',
                        bgcolor: 'rgba(229, 231, 235, 0.05)'
                      },
                      px: 4,
                      py: 1.5,
                      borderRadius: '8px',
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                      textTransform: 'none'
                    }}
                  >
                    Únete ahora
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Box>

          {/* Right Column: Enhanced Visual Elements */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: { xs: 'center', md: 'flex-end' },
                position: 'relative',
                height: '600px'
              }}
            >
              {/* Main Image Container */}
              <GlowBox
                sx={{
                  width: '100%',
                  maxWidth: 'md',
                  aspectRatio: '1/1',
                  bgcolor: '#1F2937',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(229, 231, 235, 0.1)',
                  backdropFilter: 'blur(8px)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at center, rgba(229, 231, 235, 0.1) 0%, transparent 70%)',
                    pointerEvents: 'none'
                  }
                }}
              >
                <Image 
                  src="/pexels-pavel-danilyuk-5496464.jpg" 
                  alt="Futuristic AI" 
                  width={320} 
                  height={320} 
                  style={{ 
                    opacity: 0.8,
                    filter: 'grayscale(0.2) contrast(1.1)',
                    transform: 'scale(1.1)'
                  }} 
                />
              </GlowBox>

              {/* Floating Elements */}
              <FloatingElement
                sx={{
                  top: '10%',
                  right: '5%',
                  width: '120px',
                  animationDelay: '0s'
                }}
              >
                <Typography variant="body2" sx={{ color: '#E5E7EB', textAlign: 'center' }}>
                  Cursos Actualizados
                </Typography>
              </FloatingElement>

              <FloatingElement
                sx={{
                  bottom: '20%',
                  right: '15%',
                  width: '140px',
                  animationDelay: '1s'
                }}
              >
                <Typography variant="body2" sx={{ color: '#E5E7EB', textAlign: 'center' }}>
                  Comunidad Activa
                </Typography>
              </FloatingElement>

              <FloatingElement
                sx={{
                  top: '40%',
                  right: '-5%',
                  width: '100px',
                  animationDelay: '2s'
                }}
              >
                <Typography variant="body2" sx={{ color: '#E5E7EB', textAlign: 'center' }}>
                  Aprende a tu Ritmo
                </Typography>
              </FloatingElement>

              {/* Decorative Lines */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  pointerEvents: 'none',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '20%',
                    right: '30%',
                    width: '2px',
                    height: '100px',
                    background: 'linear-gradient(to bottom, transparent, rgba(229, 231, 235, 0.2), transparent)',
                    transform: 'rotate(45deg)'
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '30%',
                    left: '20%',
                    width: '2px',
                    height: '150px',
                    background: 'linear-gradient(to bottom, transparent, rgba(229, 231, 235, 0.2), transparent)',
                    transform: 'rotate(-45deg)'
                  }
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
} 