"use client"

import React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

const tocItems = [
  { id: "intro", number: "01", title: "Introduccion" },
  { id: "problema", number: "02", title: "El Problema" },
  { id: "solucion", number: "03", title: "La Solucion CORTEXIA" },
  { id: "casos-de-uso", number: "04", title: "Casos de Uso" },
  { id: "arquitectura", number: "05", title: "Arquitectura Tecnica" },
  { id: "tokenomics", number: "06", title: "Tokenomics" },
  { id: "roadmap", number: "07", title: "Roadmap" },
  { id: "equipo", number: "08", title: "Beneficios para Inversores" },
  { id: "gobernanza", number: "09", title: "Gobernanza DAO" },
  { id: "seguridad", number: "10", title: "Seguridad y Auditorias" },
  { id: "legal", number: "11", title: "Aviso Legal" },
]

function SectionHeading({ id, number, title }: { id: string; number: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-8 pt-12 first:pt-0">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-sm font-mono text-[#0066FF]/60">{number}</span>
        <div className="h-px flex-1 bg-gradient-to-r from-[#0066FF]/30 to-transparent" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
    </div>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-[#00D4FF] mt-8 mb-3">{children}</h3>
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-400 leading-relaxed mb-4">{children}</p>
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 shrink-0" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function InfoCard({ title, value, subtitle }: { title: string; value: string; subtitle?: string }) {
  return (
    <div className="p-4 rounded-xl bg-[#1A1A2E]/60 border border-[#0066FF]/10">
      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{title}</p>
      <p className="text-lg font-bold text-white">{value}</p>
      {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
    </div>
  )
}

const tokenomicsData = [
  { name: "Preventa (3 fases)", pct: "30%", color: "#0066FF", detail: "F1 5% | F2 10% | F3 15%" },
  { name: "Recompensas / Nodos", pct: "30%", color: "#00D4FF", detail: "Incentivos para la red" },
  { name: "Ecosistema", pct: "15%", color: "#0099FF", detail: "Desarrollo y partnerships" },
  { name: "DAO Treasury", pct: "10%", color: "#3399FF", detail: "Gobernanza comunitaria" },
  { name: "Equipo", pct: "10%", color: "#6699FF", detail: "Vesting 24 meses" },
  { name: "Airdrop", pct: "5%", color: "#99CCFF", detail: "Comunidad early adopters" },
]

const roadmapData = [
  {
    q: "Q4 2025",
    title: "Kick-off + Preventa + Listing",
    items: ["Preventa oficial", "Whitepaper / Litepaper", "Listado en PancakeSwap / Uniswap", "Pool de liquidez basica"],
  },
  {
    q: "Q1 2026",
    title: "MVP Testnet",
    items: ["Testnet publica", "Validadores iniciales", "Smart contracts auditados", "Dashboard de monitoreo"],
  },
  {
    q: "Q3 2026",
    title: "Train-to-Earn",
    items: ["Marketplace de modelos IA", "Sistema Train-to-Earn", "Integracion frameworks", "API publica v1.0"],
  },
  {
    q: "Q1 2027",
    title: "Gobernanza DAO",
    items: ["DAO operativa", "Propuestas on-chain", "Treasury comunitaria", "Staking y delegacion"],
  },
  {
    q: "Q3 2027",
    title: "Mainnet + DeFi + Listing",
    items: ["Lanzamiento mainnet", "Integraciones DeFi", "Pools incentivadas", "Expansion multi-chain"],
  },
]

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Fixed sidebar nav */}
      <nav className="hidden xl:block fixed left-0 top-0 bottom-0 w-64 bg-[#0A0A0A] border-r border-[#0066FF]/10 z-50 overflow-y-auto">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 mb-8 group">
            <Image src="/images/cortexia-icono.png" alt="Cortexia" width={32} height={32} className="group-hover:scale-110 transition-transform" />
            <span className="font-bold text-sm tracking-tight holographic-text">CORTEXIA</span>
          </Link>

          <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-4">Contenido</p>

          <div className="space-y-1">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-white hover:bg-[#1A1A2E] transition-colors group"
              >
                <span className="font-mono text-[10px] text-[#0066FF]/50 group-hover:text-[#0066FF]">{item.number}</span>
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="p-6 mt-auto border-t border-[#0066FF]/10">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Mobile top bar */}
      <div className="xl:hidden fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#0066FF]/10">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 text-gray-400" />
            <Image src="/images/cortexia-icono.png" alt="Cortexia" width={24} height={24} />
            <span className="text-sm font-bold holographic-text">Whitepaper</span>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <main className="xl:ml-64 max-w-3xl mx-auto px-4 sm:px-8 pt-20 xl:pt-12 pb-24">
        {/* Cover */}
        <div className="text-center py-16 sm:py-24 border-b border-[#0066FF]/10 mb-12">
          <div className="flex justify-center mb-6">
            <Image src="/images/cortexia-icono.png" alt="Cortexia Protocol" width={80} height={80} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="holographic-text">CORTEXIA</span>
            <span className="block text-white mt-1">Protocol</span>
          </h1>
          <p className="text-lg text-gray-400 mb-2">Whitepaper v1.0</p>
          <p className="text-sm text-gray-600">Febrero 2026</p>

  <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A2E] border border-[#00D4FF]/20">
  <Image src="/images/cortexia-icono.png" alt="Cortexia" width={18} height={18} />
  <span className="text-xs text-[#00D4FF]">Cortexia Chain</span>
  </div>

          <p className="mt-8 text-base sm:text-lg text-gray-300 max-w-xl mx-auto italic leading-relaxed">
            {'"La red neuronal descentralizada que entrena, valida y monetiza inteligencia artificial."'}
          </p>
        </div>

        {/* Abstract */}
        <div className="mb-12 p-6 rounded-2xl bg-[#1A1A2E]/40 border border-[#0066FF]/10">
          <p className="text-xs uppercase tracking-widest text-[#0066FF] mb-3">Resumen Ejecutivo</p>
          <p className="text-gray-300 leading-relaxed">
            CORTEXIA Protocol es una infraestructura descentralizada de tipo DePIN + AI construida sobre BNB Smart Chain.
            Permite a cualquier persona contribuir con poder de computo, datos de entrenamiento o modelos de inteligencia
            artificial, y recibir recompensas en CTX por sus contribuciones. La red combina mecanismos de
            Compute-to-Earn, Train-to-Earn, un marketplace de datasets y modelos tokenizados, y una infraestructura
            resistente a censura, creando un ecosistema completo para la IA descentralizada.
          </p>
        </div>

        {/* 01 - Introduccion */}
        <SectionHeading id="intro" number="01" title="Introduccion" />
        <Paragraph>
          La inteligencia artificial esta transformando cada industria, pero el acceso a infraestructura de computacion,
          datos de calidad y modelos entrenados sigue concentrado en un punado de corporaciones. CORTEXIA Protocol nace para
          cambiar este paradigma, democratizando el acceso a la IA a traves de una red descentralizada donde cualquier
          participante puede contribuir y beneficiarse.
        </Paragraph>
        <Paragraph>
          Construido sobre BNB Smart Chain por su velocidad, bajos costos de transaccion y amplio ecosistema DeFi,
          CORTEXIA crea una economia circular donde el poder de computo, los datos y la inteligencia colectiva fluyen
          libremente, recompensando a cada participante de forma justa y transparente.
        </Paragraph>

        {/* 02 - El Problema */}
        <SectionHeading id="problema" number="02" title="El Problema" />
        <Paragraph>
          El desarrollo actual de la IA enfrenta multiples barreras que limitan la innovacion y la accesibilidad:
        </Paragraph>
        <BulletList
          items={[
            "Centralizacion extrema: AWS, Google Cloud y Azure controlan mas del 65% de la infraestructura de computacion en la nube, creando dependencia y costos elevados.",
            "Costos prohibitivos: Entrenar un modelo de lenguaje grande puede costar entre $2M y $12M en infraestructura de nube tradicional, excluyendo a startups y investigadores independientes.",
            "Datos aislados: Los datasets de calidad estan atrapados en silos corporativos, impidiendo la colaboracion abierta y la mejora colectiva de modelos.",
            "Falta de transparencia: Los algoritmos de IA operan como cajas negras sin posibilidad de auditoria publica ni verificacion de sesgos.",
            "Restricciones geopoliticas: Regulaciones y sanciones limitan el acceso a servicios de IA en muchas regiones del mundo.",
          ]}
        />

        {/* 03 - La Solucion */}
        <SectionHeading id="solucion" number="03" title="La Solucion CORTEXIA" />
        <Paragraph>
          CORTEXIA Protocol aborda estos problemas mediante cuatro pilares fundamentales que forman un ecosistema completo:
        </Paragraph>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <InfoCard title="Pilar 1" value="Compute-to-Earn" subtitle="Monetiza tu GPU/CPU no utilizado" />
          <InfoCard title="Pilar 2" value="Train-to-Earn" subtitle="Gana mejorando la IA colectiva" />
          <InfoCard title="Pilar 3" value="Marketplace IA" subtitle="Tokeniza datos y modelos" />
          <InfoCard title="Pilar 4" value="Infraestructura DePIN" subtitle="Red global descentralizada" />
        </div>
        <Paragraph>
          Cada pilar se conecta con los demas a traves del token CTX, creando ciclos de valor donde los proveedores de computo
          procesan las tareas de entrenamiento, los datos del marketplace alimentan los modelos, y la infraestructura
          descentralizada garantiza la disponibilidad, seguridad y resistencia a censura de todo el sistema.
        </Paragraph>

        {/* 04 - Casos de Uso */}
        <SectionHeading id="casos-de-uso" number="04" title="Casos de Uso" />

        {/* Compute-to-Earn */}
        <SubHeading>4.1 Compute-to-Earn</SubHeading>
        <Paragraph>
          Monetiza tu poder de computo GPU/CPU no utilizado. Cualquier persona con hardware compatible puede conectarse a la
          red y comenzar a ganar CTX por contribuir capacidad de procesamiento.
        </Paragraph>
        <div className="my-6 p-5 rounded-xl bg-[#1A1A2E]/40 border border-[#0066FF]/10">
          <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">Para Proveedores</p>
          <BulletList
            items={[
              "Conecta cualquier GPU (RTX 3090, A100, etc.)",
              "Gana CTX por hora de computacion",
              "Sistema de reputacion basado en uptime y calidad",
            ]}
          />
          <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">Para Desarrolladores</p>
          <BulletList
            items={[
              "Acceso a GPU descentralizadas 80% mas baratas que AWS",
              "Escalado automatico segun demanda",
              "Pagos por uso con CTX",
            ]}
          />
          <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">Casos Reales</p>
          <BulletList
            items={[
              "Fine-tuning de LLMs (Llama, Mistral)",
              "Entrenamiento de modelos Stable Diffusion",
              "Inferencia en tiempo real para aplicaciones",
            ]}
          />
        </div>

        {/* Train-to-Earn */}
        <SubHeading>4.2 Train-to-Earn</SubHeading>
        <Paragraph>
          Gana recompensas mejorando la inteligencia artificial colectiva. Los participantes contribuyen con trabajo de
          entrenamiento, validacion y correccion de modelos, recibiendo CTX a cambio.
        </Paragraph>
        <div className="my-6 p-5 rounded-xl bg-[#1A1A2E]/40 border border-[#0066FF]/10">
          <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">Tareas Disponibles</p>
          <BulletList
            items={[
              "Labeling de datasets (imagenes, texto, audio)",
              "Fine-tuning de modelos existentes",
              "Validacion de outputs de IA",
              "Correccion de sesgos en modelos",
            ]}
          />
          <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">Sistema de Calidad</p>
          <BulletList
            items={[
              "Proof-of-Quality: Multiples validadores por tarea",
              "Staking para aumentar recompensas",
              "Reputacion on-chain verificable",
            ]}
          />
          <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">Ejemplos</p>
          <BulletList
            items={[
              "Mejora el modelo de traduccion espanol-ingles",
              "Etiqueta datasets medicos para diagnostico IA",
              "Entrena modelo de deteccion de deepfakes",
            ]}
          />
        </div>

        {/* Marketplace */}
        <SubHeading>4.3 Marketplace de Datasets y Modelos</SubHeading>
        <Paragraph>
          Tokeniza y comercializa tus activos de IA. Un mercado descentralizado donde creadores y compradores intercambian
          datasets verificados y modelos pre-entrenados con total transparencia.
        </Paragraph>
        <div className="my-6 p-5 rounded-xl bg-[#1A1A2E]/40 border border-[#0066FF]/10">
          <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">Para Creadores</p>
          <BulletList
            items={[
              "Sube datasets y recibe tokens de royalty",
              "Modelos entrenados como NFTs con regalias",
              "Licencias flexibles (comercial, research)",
            ]}
          />
          <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">Para Compradores</p>
          <BulletList
            items={[
              "Datasets verificados y con procedencia",
              "Modelos pre-entrenados listos para usar",
              "Rating system y reviews comunitarias",
            ]}
          />
          <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">Ejemplos</p>
          <BulletList
            items={[
              "Dataset de radiografias medicas: 50K CTX",
              "Modelo fine-tuned GPT espanol: NFT + 5% regalias",
              "Dataset voces latinas: Streaming royalties",
            ]}
          />
        </div>

        {/* Infraestructura */}
        <SubHeading>4.4 Infraestructura Descentralizada</SubHeading>
        <Paragraph>
          Red global resistente a censura y fallos. Una arquitectura distribuida que garantiza disponibilidad, seguridad y
          acceso sin restricciones geopoliticas.
        </Paragraph>
        <div className="my-6 p-5 rounded-xl bg-[#1A1A2E]/40 border border-[#0066FF]/10">
          <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">Arquitectura</p>
          <BulletList
            items={[
              "Nodos distribuidos worldwide",
              "Redundancia automatica de datos",
              "Zero-trust security model",
            ]}
          />
          <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">Ventajas</p>
          <BulletList
            items={[
              "Sin single point of failure",
              "Precios 60-80% menores que cloud tradicional",
              "Acceso global sin restricciones geopoliticas",
              "Transparencia total en algoritmos",
            ]}
          />
          <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">Para Empresas</p>
          <BulletList
            items={[
              "Compliance con regulaciones de datos",
              "Audits publicos de modelos",
              "Resistente a ataques DDoS",
            ]}
          />
        </div>

        {/* 05 - Arquitectura Tecnica */}
        <SectionHeading id="arquitectura" number="05" title="Arquitectura Tecnica" />
        <Paragraph>
          CORTEXIA esta construido sobre una arquitectura modular y escalable que combina multiples tecnologias probadas:
        </Paragraph>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <InfoCard title="Blockchain" value="BNB Smart Chain" subtitle="Velocidad y bajos costos" />
          <InfoCard title="Almacenamiento" value="Arweave + Filecoin" subtitle="Almacenamiento permanente y distribuido" />
          <InfoCard title="Integraciones" value="Render, Akash, Chainlink" subtitle="Computacion y oracles descentralizados" />
          <InfoCard title="Consenso" value="PoCI" subtitle="Proof of Compute Integrity" />
        </div>

        <SubHeading>Proof of Compute Integrity (PoCI)</SubHeading>
        <Paragraph>
          PoCI es el mecanismo de consenso propio de CORTEXIA que verifica la integridad de las computaciones realizadas
          en la red. A diferencia de Proof of Work tradicional, PoCI valida que las tareas de IA fueron ejecutadas
          correctamente mediante multiples verificadores independientes, garantizando resultados de alta calidad sin
          desperdiciar energia en calculos inutiles.
        </Paragraph>
        <BulletList
          items={[
            "Multiples validadores verifican cada tarea de forma independiente",
            "Sistema de checkpoints para tareas de larga duracion",
            "Penalizaciones automaticas por resultados incorrectos o maliciosos",
            "Recompensas proporcionales a la calidad y complejidad de la computacion",
          ]}
        />

        {/* 06 - Tokenomics */}
        <SectionHeading id="tokenomics" number="06" title="Tokenomics" />
        <div className="p-5 rounded-xl bg-[#1A1A2E]/40 border border-[#0066FF]/10 mb-6">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm text-gray-500">Token</p>
            <p className="text-sm text-gray-500">Red</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-white">CTX</p>
            <p className="text-lg font-semibold text-[#F3BA2F]">BNB Smart Chain</p>
          </div>
          <div className="h-px bg-[#0066FF]/10 my-4" />
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Supply Total</p>
            <p className="text-lg font-bold text-[#00D4FF]">1,000,000,000 CTX</p>
          </div>
        </div>

        <SubHeading>Distribucion del Supply</SubHeading>
        <div className="space-y-3 my-6">
          {tokenomicsData.map((item) => (
            <div key={item.name} className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <span className="text-white font-medium">{item.name}</span>
                  <span className="text-gray-600 text-sm ml-2">{item.detail}</span>
                </div>
                <span className="text-[#00D4FF] font-bold">{item.pct}</span>
              </div>
              <div className="hidden sm:block w-24 h-2 rounded-full bg-[#1A1A2E] overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: item.pct,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <SubHeading>Preventa - 3 Fases</SubHeading>
        <div className="grid sm:grid-cols-3 gap-4 my-6">
          <InfoCard title="Fase 1" value="$0.001" subtitle="5% del supply" />
          <InfoCard title="Fase 2" value="$0.002" subtitle="10% del supply" />
          <InfoCard title="Fase 3" value="$0.003" subtitle="15% del supply" />
        </div>

        <SubHeading>Modelo Economico</SubHeading>
        <BulletList
          items={[
            "Emision decreciente: La cantidad de tokens emitidos como recompensa disminuye progresivamente, creando escasez natural.",
            "Real Yield: Las recompensas provienen de la actividad real de la red (computacion, entrenamiento, transacciones), no de inflacion artificial.",
            "Mecanismo de quema: Un porcentaje de las comisiones del marketplace se quema, reduciendo el supply circulante.",
            "Staking: Los holders pueden hacer staking de CTX para participar en la validacion y recibir recompensas adicionales.",
          ]}
        />

        {/* 07 - Roadmap */}
        <SectionHeading id="roadmap" number="07" title="Roadmap" />
        <Paragraph>
          Nuestro plan de desarrollo abarca desde Q4 2025 hasta Q3 2027, con hitos claros y medibles en cada etapa:
        </Paragraph>
        <div className="space-y-6 my-6">
          {roadmapData.map((phase, index) => (
            <div key={phase.q} className="relative pl-8 pb-6 border-l border-[#0066FF]/20 last:border-l-0 last:pb-0">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-[#0A0A0A] border-2 border-[#00D4FF]" />
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-mono text-[#00D4FF]">{phase.q}</span>
                <div className="h-px flex-1 bg-[#0066FF]/10" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">{phase.title}</h4>
              <BulletList items={phase.items} />
            </div>
          ))}
        </div>

        {/* 08 - Beneficios */}
        <SectionHeading id="equipo" number="08" title="Beneficios para Inversores" />
        <Paragraph>
          CORTEXIA Protocol ofrece una propuesta de valor unica para inversores que buscan exposicion al cruce entre
          IA y blockchain:
        </Paragraph>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <InfoCard title="Token" value="CTX" subtitle="Token nativo del ecosistema" />
          <InfoCard title="Preventa" value="30% del supply" subtitle="Distribuido en 3 fases" />
          <InfoCard title="Emision" value="Decreciente" subtitle="Escasez programada" />
          <InfoCard title="Recompensas" value="Real Yield" subtitle="Basado en actividad real" />
        </div>
        <BulletList
          items={[
            "Equipo tecnico con background en IA y blockchain con experiencia comprobada.",
            "Mercado de IA descentralizada en rapido crecimiento, estimado en $150B para 2028.",
            "Modelo de negocio sostenible con multiples fuentes de ingresos.",
            "Tokenomics disenado para alineacion de incentivos a largo plazo.",
            "Transparencia total: codigo abierto, auditorias publicas y gobernanza comunitaria.",
          ]}
        />

        {/* 09 - Gobernanza */}
        <SectionHeading id="gobernanza" number="09" title="Gobernanza DAO" />
        <Paragraph>
          CORTEXIA evolucionara hacia un modelo de gobernanza completamente descentralizado a traves de una DAO
          (Organizacion Autonoma Descentralizada), donde los holders de CTX tendran voz y voto en las decisiones del protocolo.
        </Paragraph>
        <BulletList
          items={[
            "DAO operativa: Votaciones on-chain vinculantes para decisiones del protocolo.",
            "Propuestas on-chain: Cualquier holder puede presentar propuestas de mejora.",
            "Treasury comunitaria: Los fondos del DAO Treasury se asignan segun votacion comunitaria.",
            "Staking y delegacion: Los holders pueden delegar su poder de voto a representantes de confianza.",
            "Quorum dinamico: El porcentaje necesario para aprobar propuestas se ajusta segun la participacion.",
          ]}
        />

        {/* 10 - Seguridad */}
        <SectionHeading id="seguridad" number="10" title="Seguridad y Auditorias" />
        <Paragraph>
          La seguridad es una prioridad fundamental en CORTEXIA Protocol. Implementamos multiples capas de proteccion:
        </Paragraph>
        <BulletList
          items={[
            "Smart contracts auditados por firmas reconocidas antes del lanzamiento.",
            "Programa de bug bounty para incentivar la deteccion de vulnerabilidades.",
            "Zero-trust security model en toda la infraestructura de la red.",
            "Redundancia automatica de datos distribuida globalmente.",
            "Resistencia a ataques DDoS mediante arquitectura descentralizada.",
            "Proof of Compute Integrity (PoCI) para verificar la integridad de cada computacion.",
            "Compliance con regulaciones de datos internacionales.",
            "Audits publicos de modelos de IA para garantizar ausencia de sesgos.",
          ]}
        />

        {/* 11 - Legal */}
        <SectionHeading id="legal" number="11" title="Aviso Legal" />
        <div className="p-5 rounded-xl bg-[#1A1A2E]/40 border border-[#0066FF]/10 text-sm text-gray-500 leading-relaxed space-y-3">
          <p>
            Este documento es solo para fines informativos y no constituye una oferta de venta ni una solicitud de oferta
            de compra de valores, tokens u otros instrumentos financieros.
          </p>
          <p>
            Los tokens CTX no representan acciones, participaciones, derechos de propiedad ni ningun otro tipo de interes
            en CORTEXIA Protocol ni en ninguna entidad relacionada. La compra de tokens CTX conlleva riesgos significativos
            y los compradores potenciales deben realizar su propia investigacion y consultar con asesores financieros
            independientes antes de participar.
          </p>
          <p>
            Las declaraciones a futuro contenidas en este documento se basan en expectativas actuales y pueden diferir
            materialmente de los resultados reales. CORTEXIA Protocol no garantiza el rendimiento financiero ni la
            rentabilidad de los tokens CTX.
          </p>
          <p>
            Participar en la preventa o adquirir tokens CTX implica la aceptacion total de los terminos y condiciones
            establecidos en los contratos inteligentes del protocolo.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#0066FF]/10 text-center">
          <Image src="/images/cortexia-icono.png" alt="Cortexia" width={40} height={40} className="mx-auto mb-4" />
          <p className="text-sm text-gray-500 mb-2">CORTEXIA Protocol Whitepaper v1.0</p>
          <p className="text-xs text-gray-600">
            {'(c) 2026 CORTEXIA Protocol. Todos los derechos reservados.'}
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#0066FF] hover:text-[#00D4FF] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a la pagina principal
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
