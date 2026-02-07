"use client"

import { useRef } from "react"
import { Coins, Percent, TrendingDown, Sparkles } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const benefits = [
  {
    icon: Coins,
    label: "Token",
    value: "CTX",
  },
  {
    icon: Percent,
    label: "Preventa",
    value: "30% del supply",
  },
  {
    icon: TrendingDown,
    label: "Emisión",
    value: "Decreciente",
  },
  {
    icon: Sparkles,
    label: "Recompensas",
    value: "Real Yield",
  },
]

export function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="holographic-text">Beneficios para Inversores</span>
          </h2>
          <p className="text-lg text-gray-400">Equipo técnico con background en IA + blockchain</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.label}
              className={cn(
                "group relative p-6 rounded-2xl glass-card text-center transition-all duration-500 hover:scale-105",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Pulsing glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0066FF]/10 to-[#00D4FF]/10 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity" />

              <div className="relative mb-4 mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066FF]/20 to-[#00D4FF]/20 flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-[#00D4FF] animate-pulse" style={{ animationDuration: "8s" }} />
              </div>

              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">{benefit.label}</h3>
              <p className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                {benefit.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
