"use client"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "¿Puedo acceder a los cursos en cualquier momento?",
    answer: "Sí, todos los cursos son 100% online y puedes acceder a ellos cuando quieras."
  },
  {
    question: "¿Recibo un certificado al finalizar un curso?",
    answer: "Sí, al completar cada curso obtendrás un certificado digital verificable."
  },
  {
    question: "¿Hay cursos para principiantes?",
    answer: "Por supuesto, tenemos cursos para todos los niveles, desde principiante hasta avanzado."
  },
  {
    question: "¿Puedo interactuar con otros estudiantes?",
    answer: "Sí, contamos con foros y grupos de estudio para que puedas conectar y aprender en comunidad."
  }
]

export default function FaqSection() {
  return (
    <section className="py-20 bg-[#F3F4F6]">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-[#374151] text-center mb-10">
          Preguntas frecuentes
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <AccordionItem value={String(idx)}>
                <AccordionTrigger className="text-lg font-semibold text-[#1E3A8A] hover:text-[#3B82F6] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#374151] bg-white rounded-b-xl p-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
} 