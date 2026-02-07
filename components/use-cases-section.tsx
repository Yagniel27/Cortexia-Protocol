"use client"

import { useState, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import Image from "next/image"

const useCases = [
  {
    id: "compute",
    image: "/images/compute-to-earn.png",
    title: "Compute-to-Earn",
    shortDescription: "Monetiza tu poder de cómputo GPU/CPU no utilizado",
    sections: [
      {
        title: "Para Proveedores",
        items: [
          "Conecta cualquier GPU (RTX 3090, A100, etc.)",
          "Gana CTX por hora de computación",
          "Sistema de reputación basado en uptime y calidad",
        ],
      },
      {
        title: "Para Desarrolladores",
        items: [
          "Acceso a GPU descentralizadas 80% más baratas que AWS",
          "Escalado automático según demanda",
          "Pagos por uso con CTX",
        ],
      },
      {
        title: "Casos Reales",
        items: [
          "Fine-tuning de LLMs (Llama, Mistral)",
          "Entrenamiento de modelos Stable Diffusion",
          "Inferencia en tiempo real para apps",
        ],
      },
    ],
  },
  {
    id: "train",
    image: "/images/train-to-earn.png",
    title: "Train-to-Earn",
    shortDescription: "Gana recompensas mejorando inteligencia artificial colectiva",
    sections: [
      {
        title: "Tareas Disponibles",
        items: [
          "Labeling de datasets (imágenes, texto, audio)",
          "Fine-tuning de modelos existentes",
          "Validación de outputs de IA",
          "Corrección de sesgos en modelos",
        ],
      },
      {
        title: "Sistema de Calidad",
        items: [
          "Proof-of-Quality: Múltiples validadores por tarea",
          "Staking para aumentar recompensas",
          "Reputación on-chain verificable",
        ],
      },
      {
        title: "Ejemplos",
        items: [
          "Mejora el modelo de traducción español-inglés",
          "Etiqueta datasets médicos para diagnóstico IA",
          "Entrena modelo de detección de deepfakes",
        ],
      },
    ],
  },
  {
    id: "marketplace",
    image: "/images/ia-marquetplace.png",
    title: "Marketplace de Datasets & Modelos",
    shortDescription: "Tokeniza y comercializa tus activos de IA",
    sections: [
      {
        title: "Para Creadores",
        items: [
          "Sube datasets → Recibe tokens de royalty",
          "Modelos entrenados como NFTs con regalías",
          "Licencias flexibles (comercial, research)",
        ],
      },
      {
        title: "Para Compradores",
        items: [
          "Datasets verificados y con procedencia",
          "Modelos pre-entrenados listos para usar",
          "Rating system y reviews comunitarias",
        ],
      },
      {
        title: "Ejemplos",
        items: [
          "Dataset de radiografías médicas: 50K CTX",
          "Modelo fine-tuned GPT español: NFT + 5% regalías",
          "Dataset voces latinas: Streaming royalties",
        ],
      },
    ],
  },
  {
    id: "infra",
    image: "/images/infraestructura-desentralizada.png",
    title: "Infraestructura Descentralizada",
    shortDescription: "Red global resistente a censura y fallos",
    sections: [
      {
        title: "Arquitectura",
        items: ["Nodos distribuidos worldwide", "Redundancia automática de datos", "Zero-trust security model"],
      },
      {
        title: "Ventajas",
        items: [
          "Sin single point of failure",
          "Precios 60-80% menores que cloud",
          "Acceso global sin restricciones geopolíticas",
          "Transparencia total en algoritmos",
        ],
      },
      {
        title: "Para Empresas",
        items: ["Compliance con regulaciones de datos", "Audits públicos de modelos", "Resistente a ataques DDoS"],
      },
    ],
  },
]

export function UseCasesSection() {
  const [openId, setOpenId] = useState<string | null>("compute")
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section id="use-cases" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00D4FF]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="holographic-text">Casos de Uso</span>
          </h2>
          <p className="text-lg text-gray-400">Explora las múltiples formas de participar en el ecosistema</p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className={cn(
                "transition-all duration-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  "rounded-2xl overflow-hidden transition-all duration-500",
                  openId === useCase.id
                    ? "glass-card border-[#00D4FF]/30 shadow-[0_0_30px_rgba(0,212,255,0.1)]"
                    : "glass-card",
                )}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenId(openId === useCase.id ? null : useCase.id)}
                  className="w-full p-6 flex items-center gap-4 text-left group"
                >
                  <div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 overflow-hidden",
                      openId === useCase.id
                        ? "bg-gradient-to-br from-[#0066FF]/20 to-[#00D4FF]/20 ring-2 ring-[#00D4FF]/50"
                        : "bg-[#1A1A2E] group-hover:bg-[#0066FF]/20",
                    )}
                  >
                    <Image
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-gray-400">{useCase.shortDescription}</p>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 text-gray-400 transition-transform duration-300",
                      openId === useCase.id && "rotate-180 text-[#00D4FF]",
                    )}
                  />
                </button>

                {/* Accordion Content */}
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-out",
                    openId === useCase.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                      {useCase.sections.map((section) => (
                        <div key={section.title} className="space-y-3">
                          <h4 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider">
                            {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Active indicator line */}
                {openId === useCase.id && (
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
