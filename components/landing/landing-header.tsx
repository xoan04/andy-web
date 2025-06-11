"use client"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function LandingHeader() {
  const router = useRouter()
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-md px-6 py-3 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl font-extrabold text-[#1E3A8A] tracking-tight">Futura<span className="text-[#10B981]">Academy</span></span>
      </div>
      <button
        onClick={() => router.push("/login")}
        className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] hover:from-[#1E3A8A] hover:to-[#10B981] text-white font-semibold px-6 py-2 rounded-full shadow transition-all duration-200 text-base"
      >
        Iniciar sesión
      </button>
    </motion.header>
  )
} 