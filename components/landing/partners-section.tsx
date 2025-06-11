"use client"
import { motion } from "framer-motion"

const partners = [
  { name: "TechCorp", logo: "/placeholder-logo.png" },
  { name: "InnovaAI", logo: "/placeholder-logo.png" },
  { name: "DataSoft", logo: "/placeholder-logo.png" },
  { name: "Cloudify", logo: "/placeholder-logo.png" },
  { name: "NextGen", logo: "/placeholder-logo.png" }
]

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#374151] text-center mb-8">
          Empresas y aliados que confían en nosotros
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.12, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.13, boxShadow: "0 0 32px #3B82F6aa" }}
              className="bg-[#F3F4F6] rounded-xl p-4 flex items-center justify-center shadow w-40 h-20 transition-transform"
            >
              <img src={p.logo} alt={p.name} className="max-h-12 mx-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 