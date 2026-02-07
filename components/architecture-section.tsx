"use client"

import { useRef } from "react"
import { Blocks, Database, Plug, ShieldCheck } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const architectureItems = [
  {
    icon: Blocks,
    label: "Blockchain",
    value: "BNB Smart Chain",
  },
  {
    icon: Database,
    label: "Almacenamiento",
    value: "Arweave + Filecoin",
  },
  {
    icon: Plug,
    label: "Integraciones",
    value: "Render, Akash, Chainlink",
  },
  {
    icon: ShieldCheck,
    label: "Consenso",
    value: "PoCI – Proof of Compute Integrity",
  },
]

export function ArchitectureSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })

  return (
    <section id="architecture" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,102,255,0.1)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="holographic-text">Arquitectura Técnica</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Infraestructura robusta y escalable para la IA descentralizada
          </p>
        </div>

        {/* Architecture Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureItems.map((item, index) => (
            <div
              key={item.label}
              className={cn(
                "group relative p-6 rounded-2xl glass-card text-center transition-all duration-500 hover:scale-105",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Floating particles effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-[#00D4FF]/30 rounded-full animate-float"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 20}%`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>

              {/* 3D Isometric Icon */}
              <div className="relative mb-4 mx-auto w-20 h-20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/30 to-[#00D4FF]/30 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 to-[#00D4FF]/20 rounded-xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300" />
                <div className="relative w-full h-full bg-[#1A1A2E] rounded-xl flex items-center justify-center border border-[#0066FF]/20">
                  <item.icon className="w-8 h-8 text-[#00D4FF]" />
                </div>
              </div>

              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">{item.label}</h3>
              <p className="text-lg font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
