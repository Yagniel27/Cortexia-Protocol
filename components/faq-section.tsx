"use client"

import { useState, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const faqCategories = [
  {
    name: "General",
    questions: [
      {
        q: "¿Qué es CORTEXIA Protocol?",
        a: "CORTEXIA es una red neuronal descentralizada que permite entrenar, validar y monetizar inteligencia artificial de forma distribuida sobre BNB Smart Chain.",
      },
      {
        q: "¿Cómo funciona la red?",
        a: "Los usuarios contribuyen con poder de cómputo (GPU/CPU), datos o trabajo de entrenamiento, y reciben recompensas en CTX por sus contribuciones.",
      },
    ],
  },
  {
    name: "Token & Economía",
    questions: [
      {
        q: "¿Qué es CTX?",
        a: "CTX es el token nativo del ecosistema, utilizado para pagos, recompensas, gobernanza y staking dentro de la plataforma.",
      },
      {
        q: "¿Cuál es el supply total?",
        a: "El supply total es de 1,000,000,000 (mil millones) de tokens CTX, con una emisión decreciente a lo largo del tiempo.",
      },
    ],
  },
  {
    name: "Tecnología & Plataforma",
    questions: [
      {
        q: "¿Qué blockchain utiliza CORTEXIA?",
        a: "CORTEXIA opera sobre BNB Smart Chain, aprovechando su velocidad y bajos costos de transacción.",
      },
      {
        q: "¿Cómo garantizan la calidad del entrenamiento?",
        a: "Utilizamos Proof of Compute Integrity (PoCI) y múltiples validadores por tarea para asegurar resultados de alta calidad.",
      },
    ],
  },
  {
    name: "Preventa & Inversión",
    questions: [
      {
        q: "¿Cómo participo en la preventa?",
        a: "Conecta tu wallet compatible con BNB Chain y adquiere tokens durante cualquiera de las tres fases de preventa.",
      },
      {
        q: "¿Cuál es el precio de preventa?",
        a: "La Fase 1 comienza en $0.001, la Fase 2 en $0.002, y la Fase 3 en $0.003 por CTX.",
      },
    ],
  },
  {
    name: "Seguridad & Gobernanza",
    questions: [
      {
        q: "¿Los contratos están auditados?",
        a: "Sí, todos nuestros smart contracts serán auditados por firmas reconocidas antes del lanzamiento de la mainnet.",
      },
      {
        q: "¿Cómo funciona la DAO?",
        a: "Los holders de CTX pueden votar propuestas on-chain, participar en decisiones de treasury y delegar su poder de voto.",
      },
    ],
  },
  {
    name: "Adopción & Futuro",
    questions: [
      {
        q: "¿Qué empresas pueden usar CORTEXIA?",
        a: "Cualquier empresa que necesite computación de IA, desde startups hasta corporaciones, puede beneficiarse de nuestra infraestructura descentralizada.",
      },
      {
        q: "¿Cuáles son los planes de expansión?",
        a: "Planeamos integración multi-chain, partnerships estratégicos con proyectos DeFi, y expansión a mercados enterprise.",
      },
    ],
  },
]

export function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("General")
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  const currentQuestions = faqCategories.find((c) => c.name === activeCategory)?.questions || []

  return (
    <section id="faq" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-12 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="holographic-text">Preguntas Frecuentes</span>
          </h2>
          <p className="text-lg text-gray-400">Todo lo que necesitas saber sobre CORTEXIA</p>
        </div>

        {/* Category Tabs */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-2 mb-8 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {faqCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setActiveCategory(category.name)
                setOpenQuestion(null)
              }}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                activeCategory === category.name
                  ? "bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white"
                  : "bg-[#1A1A2E] text-gray-400 hover:text-white hover:bg-[#1A1A2E]/80",
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="space-y-3">
          {currentQuestions.map((item, index) => (
            <div
              key={item.q}
              className={cn(
                "transition-all duration-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  "rounded-xl overflow-hidden transition-all duration-300",
                  openQuestion === item.q ? "glass-card border-[#00D4FF]/30" : "glass-card",
                )}
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === item.q ? null : item.q)}
                  className="w-full p-5 flex items-center justify-between text-left group"
                >
                  <span className="font-medium text-white group-hover:text-[#00D4FF] transition-colors pr-4">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-gray-400 flex-shrink-0 transition-all duration-300",
                      openQuestion === item.q && "rotate-180 text-[#00D4FF]",
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    openQuestion === item.q ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-400 leading-relaxed">{item.a}</p>
                  </div>
                </div>

                {/* Glowing underline */}
                {openQuestion === item.q && (
                  <div className="h-0.5 bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#0066FF] animate-gradient bg-[length:200%_auto]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
