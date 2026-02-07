"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, FileText } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Volumetric light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0066FF]/10 rounded-full blur-[120px] animate-glow-pulse"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x * 2}px), calc(-50% + ${mousePosition.y * 2}px))`,
          }}
        />
        <div
          className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[#00D4FF]/10 rounded-full blur-[100px] animate-glow-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title with Parallax */}
        <div
          className="relative"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="block bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#0066FF] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Descentraliza la inteligencia.
            </span>
            <span
              className="block mt-2 bg-gradient-to-r from-[#00D4FF] via-[#0066FF] to-[#00D4FF] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
              style={{ animationDelay: "0.5s" }}
            >
              Democratiza el poder.
            </span>
          </h1>

          {/* Holographic overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl opacity-50 animate-scan pointer-events-none" />
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          La red neuronal descentralizada que entrena, valida y monetiza inteligencia artificial.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <a
            href="#presale"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,102,255,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Únete a la Preventa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="/whitepaper"
            className="group relative px-8 py-4 border border-[#0066FF]/50 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:border-[#00D4FF] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2 text-gray-300 group-hover:text-white">
              <FileText className="w-5 h-5" />
              Whitepaper
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/10 to-[#00D4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#0066FF]/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-[#0066FF] to-[#00D4FF] rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
