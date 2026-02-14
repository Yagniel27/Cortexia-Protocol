"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const roadmapData = [
  {
    phase: "01",
    quarter: "Q1 2026",
    title: "Kick-off + Preventa + Listing",
    items: ["Preventa oficial", "Whitepaper/Litepaper", "Listado en PancakeSwap/Uniswap", "Pool de liquidez básica"],
  },
  {
    phase: "02",
    quarter: "Q3 2026",
    title: "MVP Testnet",
    items: ["Testnet pública", "Validadores iniciales", "Smart contracts auditados", "Dashboard de monitoreo"],
  },
  {
    phase: "03",
    quarter: "Q1 2027",
    title: "Train-to-Earn",
    items: ["Marketplace de modelos IA", "Sistema Train-to-Earn", "Integración frameworks", "API pública v1.0"],
  },
  {
    phase: "04",
    quarter: "Q3 2027",
    title: "Gobernanza DAO",
    items: ["DAO operativa", "Propuestas on-chain", "Treasury comunitaria", "Staking y delegación"],
  },
  {
    phase: "05",
    quarter: "Q1 2028",
    title: "Mainnet + DeFi + Listing",
    items: ["Lanzamiento mainnet", "Integraciones DeFi", "Pools incentivadas", "Expansión multi-chain"],
  },
]

export function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section id="roadmap" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(0,102,255,0.1)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="holographic-text">Roadmap 2026-2028</span>
          </h2>
          <p className="text-lg text-gray-400">Nuestro camino hacia la IA descentralizada</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - Energy cable */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0066FF] via-[#00D4FF] to-[#0066FF] opacity-30" />
          <div
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-[#00D4FF] to-transparent"
            style={{
              height: isInView ? "100%" : "0%",
              transition: "height 2s ease-out",
            }}
          />

          <div className="space-y-12">
            {roadmapData.map((item, index) => (
              <div
                key={item.phase}
                className={cn(
                  "relative flex flex-col md:flex-row items-start gap-8 transition-all duration-700",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                )}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Phase Number */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#0A0A0A] border-2 border-[#00D4FF] flex items-center justify-center z-10">
                  <span className="text-xs font-bold text-[#00D4FF]">{item.phase}</span>
                </div>

                {/* Content Card */}
                <div
                  className={cn("ml-12 md:ml-0 md:w-[calc(50%-40px)] group", index % 2 === 0 ? "md:pr-8" : "md:pl-8")}
                >
                  <div
                    className="relative p-6 rounded-2xl glass-card transition-all duration-500 hover:scale-[1.02]"
                    style={{ perspective: "1000px" }}
                  >
                    {/* Scan laser effect on phase number */}
                    <div className="absolute -top-3 -left-3 text-6xl font-black text-[#0066FF]/10 select-none overflow-hidden">
                      {item.phase}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent animate-scan" />
                    </div>

                    {/* Micro-glow border effect */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent animate-scan" />
                        <div
                          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066FF] to-transparent animate-scan"
                          style={{ animationDelay: "1.5s" }}
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <span className="text-sm font-medium text-[#00D4FF]">{item.quarter}</span>
                      <h3 className="text-xl font-bold text-white mt-1 mb-4 group-hover:text-[#00D4FF] transition-colors">
                        {item.title}
                      </h3>
                      <ul className="space-y-2">
                        {item.items.map((listItem, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF]" />
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-40px)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
