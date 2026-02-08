"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const tokenomicsData = [
  { name: "Preventa (3 fases)", percentage: 30, color: "#0066FF", details: "F1 5% • F2 10% • F3 15%" },
  { name: "Recompensas/Nodos", percentage: 30, color: "#00D4FF", details: "Incentivos para la red" },
  { name: "Ecosistema", percentage: 15, color: "#0099FF", details: "Desarrollo y partnerships" },
  { name: "DAO Treasury", percentage: 10, color: "#3399FF", details: "Gobernanza comunitaria" },
  { name: "Equipo", percentage: 10, color: "#6699FF", details: "Vesting 24 meses" },
  { name: "Airdrop", percentage: 5, color: "#99CCFF", details: "Comunidad early adopters" },
]

export function TokenomicsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })

  // Calculate SVG paths for pie chart
  const total = tokenomicsData.reduce((sum, item) => sum + item.percentage, 0)
  let currentAngle = -90 // Start from top

  const segments = tokenomicsData.map((item, index) => {
    const angle = (item.percentage / total) * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + angle
    currentAngle = endAngle

    const startRad = (startAngle * Math.PI) / 180
    const endRad = (endAngle * Math.PI) / 180

    const x1 = Math.round((100 + 80 * Math.cos(startRad)) * 100) / 100
    const y1 = Math.round((100 + 80 * Math.sin(startRad)) * 100) / 100
    const x2 = Math.round((100 + 80 * Math.cos(endRad)) * 100) / 100
    const y2 = Math.round((100 + 80 * Math.sin(endRad)) * 100) / 100

    const largeArcFlag = angle > 180 ? 1 : 0

    return {
      ...item,
      path: `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`,
      index,
    }
  })

  return (
    <section id="tokenomics" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.05)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="holographic-text">Tokenomics Interactivo</span>
          </h2>
          <p className="text-lg text-gray-400 mb-2">
            Supply Total: <span className="text-[#00D4FF] font-bold">1,000,000,000 CTX</span>
          </p>
          <p className="text-sm text-gray-500">Hover sobre cada segmento para ver detalles</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <div
            className={cn(
              "relative transition-all duration-1000",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
            )}
          >
            <div className="relative mx-auto w-[280px] h-[280px] sm:w-[350px] sm:h-[350px]">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#0066FF]/20 rounded-full blur-[60px] animate-glow-pulse" />

              {/* Rotating light sweep */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  style={{
                    animation: "spin 12s linear infinite",
                  }}
                />
              </div>

              <svg
                viewBox="0 0 200 200"
                className="w-full h-full transform rotate-1"
                style={{ filter: "drop-shadow(0 0 20px rgba(0, 102, 255, 0.3))" }}
              >
                {segments.map((segment) => (
                  <path
                    key={segment.index}
                    d={segment.path}
                    fill={segment.color}
                    className="transition-all duration-300 cursor-pointer"
                    style={{
                      opacity: hoveredIndex === null || hoveredIndex === segment.index ? 1 : 0.3,
                      transform: hoveredIndex === segment.index ? "scale(1.05)" : "scale(1)",
                      transformOrigin: "center",
                      filter: hoveredIndex === segment.index ? `drop-shadow(0 0 15px ${segment.color})` : "none",
                    }}
                    onMouseEnter={() => setHoveredIndex(segment.index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                ))}

                {/* Center circle */}
                <circle cx="100" cy="100" r="45" fill="#0A0A0A" />
                <circle
                  cx="100"
                  cy="100"
                  r="45"
                  fill="none"
                  stroke="url(#centerGradient)"
                  strokeWidth="2"
                  className="animate-border-glow"
                />

                {/* Center text */}
                <text x="100" y="95" textAnchor="middle" className="fill-white text-[10px] font-bold">
                  1B
                </text>
                <text x="100" y="110" textAnchor="middle" className="fill-[#00D4FF] text-[8px]">
                  CTX
                </text>

                <defs>
                  <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0066FF" />
                    <stop offset="100%" stopColor="#00D4FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Legend */}
          <div
            className={cn(
              "space-y-3 transition-all duration-1000",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
            )}
          >
            {tokenomicsData.map((item, index) => (
              <div
                key={item.name}
                className={cn(
                  "group p-4 rounded-xl glass-card cursor-pointer transition-all duration-300",
                  hoveredIndex === index && "border-[#00D4FF]/50 shadow-[0_0_20px_rgba(0,212,255,0.2)]",
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                    style={{
                      backgroundColor: item.color,
                      boxShadow: hoveredIndex === index ? `0 0 15px ${item.color}` : "none",
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-white">{item.name}</span>
                      <span className="text-[#00D4FF] font-bold">{item.percentage}%</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
