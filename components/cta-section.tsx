"use client"

import { useRef } from "react"
import { FileText, Send } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.3 })

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,102,255,0.15)_0%,_transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[120px] animate-glow-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={cn(
            "transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="holographic-text">Explora la red que entrena</span>
            <br />
            <span className="text-white">la inteligencia del futuro</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/whitepaper"
              className="group relative px-8 py-4 border border-[#0066FF]/50 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:border-[#00D4FF] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2 text-gray-300 group-hover:text-white">
                <FileText className="w-5 h-5" />
                Whitepaper
              </span>
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent animate-scan" />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066FF] to-transparent animate-scan"
                    style={{ animationDelay: "1.5s" }}
                  />
                  <div
                    className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-[#00D4FF] to-transparent animate-scan"
                    style={{ animationDelay: "0.75s", animationDirection: "reverse" }}
                  />
                  <div
                    className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-[#0066FF] to-transparent animate-scan"
                    style={{ animationDelay: "2.25s", animationDirection: "reverse" }}
                  />
                </div>
              </div>
            </a>

            <a
              href="#"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,102,255,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Send className="w-5 h-5" />
                Telegram
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-24 text-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent mb-8" />
        <p className="text-gray-500 text-sm">© 2026 CORTEXIA Protocol. Todos los derechos reservados.</p>
      </div>
    </section>
  )
}
