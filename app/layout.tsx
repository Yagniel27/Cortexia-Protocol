import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export const metadata: Metadata = {
  title: "CORTEXIA Protocol | Red Neuronal Descentralizada de IA",
  description:
    "La red neuronal descentralizada que entrena, valida y monetiza inteligencia artificial. Compute-to-Earn, Train-to-Earn sobre BNB Smart Chain.",
  keywords: ["AI", "Web3", "DePIN", "Blockchain", "BNB", "Machine Learning", "Descentralizado"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#0A0A0A] text-white overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
