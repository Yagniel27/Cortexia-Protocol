"use client"

import { useRef } from "react"
import { Coins, Brain, DollarSign, Link } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Coins,
    title: "Compute-to-Earn",
    description: "Monetiza tu poder de cómputo GPU/CPU no utilizado",
  },
  {
    icon: Brain,
    title: "Train-to-Earn",
    description: "Gana recompensas mejorando la IA colectiva",
  },
  {
    icon: DollarSign,
    title: "Monetización de datos y modelos",
    description: "Tokeniza y comercializa tus activos de IA",
  },
  {
    icon: Link,
    title: "Infraestructura descentralizada",
    description: "Red global resistente a censura y fallos",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })

  return (
    <section id="about" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="holographic-text">Red DePIN + AI</span>
            <span className="text-white"> sobre BNB Smart Chain</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Construyendo la infraestructura descentralizada del futuro de la IA
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group relative p-6 rounded-2xl glass-card transition-all duration-500 hover:scale-105 hover:-translate-y-2",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0066FF]/20 to-[#00D4FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              {/* Icon */}
              <div className="relative mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066FF]/20 to-[#00D4FF]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-[#00D4FF]" />
                </div>
                {/* Animated stroke effect */}
                <svg className="absolute inset-0 w-14 h-14" viewBox="0 0 56 56">
                  <rect
                    x="2"
                    y="2"
                    width="52"
                    height="52"
                    rx="12"
                    fill="none"
                    stroke="url(#iconGradient)"
                    strokeWidth="2"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    className="group-hover:animate-[draw-stroke_1s_ease-out_forwards]"
                  />
                  <defs>
                    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0066FF" />
                      <stop offset="100%" stopColor="#00D4FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>

              {/* Bottom border glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] group-hover:w-3/4 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
