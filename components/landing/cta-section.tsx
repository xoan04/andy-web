"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function CtaSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04])
  const y = useTransform(scrollYProgress, [0, 1], [0, -20])

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#E5E7EB',
        color: '#1F2937',
        textAlign: 'center',
        overflow: 'hidden',
        px: 2,
      }}
    >
      <motion.div
        style={{ scale, y }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.2rem', md: '3.2rem', lg: '3.5rem' },
              color: '#1F2937',
              lineHeight: 1.1,
            }}
          >
            Transforma tu<br />
            futuro con cursos<br />
            online
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 5,
              color: '#4B5563',
              fontWeight: 400,
              maxWidth: 500,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.15rem' },
            }}
          >
            Aprende de los mejores, a tu ritmo y desde cualquier lugar. Accede a una comunidad activa y a contenido actualizado constantemente.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mt: 2 }}>
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
                  color: '#1F2937',
                  borderColor: 'rgba(31, 41, 55, 0.3)',
                  '&:hover': { 
                    borderColor: 'rgba(31, 41, 55, 0.5)',
                    bgcolor: 'rgba(31, 41, 55, 0.05)'
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
        </Box>
      </motion.div>
    </Box>
  )
} 