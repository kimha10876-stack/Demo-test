import { useRef, useState, type MouseEvent } from 'react'
import { AnimatePresence, motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

import residentialCardImage from '../assets/images/waterloo-residential.jpg'
import commercialCardImage from '../assets/images/Waterloo-Commercial.jpg'
import maintenanceCardImage from '../assets/images/home-maintenance.jpg'
import additionalSubdivisionsImage from '../assets/images/Home_Slide2_SubdivisionsNEW_2x-073c9397-3ac0-4472-9797-0f29d4ef2673.png'
import additionalNutrientImage from '../assets/images/Home_Slide2_NutrientsNEW_2x-8bc65471-2665-4cd4-b025-b99fa6a3981f.png'

const REVEAL_END = 0.72
const SEGMENT = REVEAL_END / 3

const solutions = [
  {
    title: 'Maintenance',
    description:
      'Waterloo Biofilter provides regular maintenance for our systems to protect the environment and the value of your investment.',
    image: maintenanceCardImage,
    segment: [SEGMENT * 2, SEGMENT * 3] as const,
    columnClass: 'md:mt-28',
    rotateFrom: -4,
  },
  {
    title: 'Commercial',
    description:
      'Our range of treatment units and add-ons give you the flexibility to design an advanced septic system suited to your needs.',
    image: commercialCardImage,
    segment: [SEGMENT, SEGMENT * 2] as const,
    columnClass: 'md:mt-12',
    rotateFrom: 2.5,
  },
  {
    title: 'Residential',
    description:
      'A Waterloo Biofilter is discrete, minimizes tree removal, and saves you room for what is important.',
    image: residentialCardImage,
    segment: [0, SEGMENT] as const,
    columnClass: 'md:mt-0',
    rotateFrom: 5.5,
  },
]

const additionalServices = [
  {
    title: 'Communal & Subdivision',
    image: additionalSubdivisionsImage,
    href: 'https://waterloo-biofilter.com/communal-subdivisions/',
  },
  {
    title: 'Nutrient Removal',
    image: additionalNutrientImage,
    href: 'https://waterloo-biofilter.com/nutrient-removal/',
  },
]

type SolutionCardProps = {
  sol: (typeof solutions)[number]
  progress: MotionValue<number>
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

function SolutionCard({ sol, progress, isHovered, onMouseEnter, onMouseLeave }: SolutionCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, active: false })
  const phase = useTransform(progress, [sol.segment[0], sol.segment[1]], [0, 1], { clamp: true })
  const y = useTransform(phase, [0, 1], [780, 0])
  const opacity = useTransform(phase, [0, 0.2, 1], [0, 0.45, 1])
  const rotate = useTransform(phase, [0, 1], [sol.rotateFrom, 0])
  const scale = useTransform(phase, [0, 1], [0.94, 1])

  const updateCursorFromEvent = (event: MouseEvent<HTMLDivElement>, active = true) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return

    const cursorRadius = 48
    const rawX = event.clientX - rect.left
    const rawY = event.clientY - rect.top
    const x = Math.max(cursorRadius, Math.min(rect.width - cursorRadius, rawX))
    const y = Math.max(cursorRadius, Math.min(rect.height - cursorRadius, rawY))

    setCursorPos({ x, y, active })
  }

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    onMouseEnter()
    updateCursorFromEvent(event, true)
  }

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    updateCursorFromEvent(event, true)
  }

  const handleMouseLeave = () => {
    onMouseLeave()
    setCursorPos((prev) => ({ ...prev, active: false }))
  }

  return (
    <motion.div className={sol.columnClass} style={{ y, opacity, rotate, scale, transformOrigin: '50% 50%' }}>
      <motion.div
        ref={cardRef}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
        className={`group relative isolate overflow-hidden rounded-[24px] bg-[#2e312d] aspect-[0.8/1] ${isHovered ? 'cursor-none' : 'cursor-default'}`}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={sol.image}
          alt={sol.title}
          className="absolute inset-0 h-full w-full object-cover opacity-78 group-hover:scale-[1.02] transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

        <AnimatePresence>
          {isHovered && cursorPos.active && (
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.78, x: cursorPos.x, y: cursorPos.y }}
              animate={{ opacity: 1, scale: 1, x: cursorPos.x, y: cursorPos.y }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
              className="pointer-events-none absolute left-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <span
                className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/45 bg-white/20 text-[11px] font-semibold uppercase tracking-[0.75px] text-white backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Learn More
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <h3
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 text-center text-white font-bold leading-tight"
          style={{
            fontFamily: 'Hanken Grotesk, sans-serif',
            fontSize: 'clamp(1.55rem, 2.5vw, 2.3rem)',
          }}
        >
          {sol.title}
        </h3>
      </motion.div>

      <div className="relative px-1 pt-4 min-h-[8.75rem]">
        <p
          className={`text-[#191c1e] text-[clamp(1rem,1.05vw,1.35rem)] leading-[1.45] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          {sol.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [videoAudioOn, setVideoAudioOn] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  const videoFrameRef = useRef<HTMLIFrameElement | null>(null)
  const videoPinRef = useRef<HTMLElement | null>(null)

  // Pin when section hits top; user scroll drives progress 0->1 during pinned distance.
  const { scrollYProgress: pinnedProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const { scrollYProgress: videoPinProgress } = useScroll({
    target: videoPinRef,
    offset: ['start start', 'end start'],
  })

  const isHovered = (title: string) => hoveredCard === title
  const videoScale = useTransform(videoPinProgress, [0, 1], [1, 1.01])
  const youtubeEmbed =
    'https://www.youtube.com/embed/u-ByoblEBXU?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&loop=1&playlist=u-ByoblEBXU'

  const toggleVideoAudio = () => {
    const iframe = videoFrameRef.current
    if (!iframe?.contentWindow) return

    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: 'command',
        func: videoAudioOn ? 'mute' : 'unMute',
        args: [],
      }),
      '*',
    )
    setVideoAudioOn((prev) => !prev)
  }

  return (
    <>
      <section ref={sectionRef} id="solutions" className="relative h-[400svh] bg-white">
        <div className="sticky top-0 h-[100svh] bg-white">
          <div className="max-w-screen-xl mx-auto h-full px-6 md:px-12">
          <div className="mb-9 border-t border-[rgba(118,119,125,0.25)] pt-12">
            <div className="flex flex-col items-start gap-7">
              <h2
                className="font-bold text-[#191c18] leading-tight tracking-tight"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(1.6rem, 3vw, 2.75rem)',
                }}
              >
                The Right Solution for Every Site
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="btn-hover inline-flex items-center gap-2.5 bg-[#184f91] text-white text-[13px] font-semibold tracking-[0.15px] px-8 py-2.5 rounded-full hover:bg-[#123d70] transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Start a Project
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="https://waterloo-biofilter.com/authorized-installers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hover inline-flex items-center bg-white border border-[rgba(116,120,120,0.22)] text-black text-[13px] font-semibold tracking-[0.15px] px-7 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Find an Installer
                </a>
              </div>
            </div>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
              {solutions.map((sol) => (
                <SolutionCard
                  key={sol.title}
                  sol={sol}
                  progress={pinnedProgress}
                  isHovered={isHovered(sol.title)}
                  onMouseEnter={() => setHoveredCard(sol.title)}
                  onMouseLeave={() => setHoveredCard(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white min-h-screen flex items-center pt-14 md:pt-20 pb-24 md:pb-30">
        <div className="max-w-screen-xl mx-auto w-full px-6 md:px-12">
          <h3
            className="mb-12 md:mb-14 text-center font-bold text-[#191c1e]"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(1.6rem, 2.6vw, 2.3rem)' }}
          >
            Additional Services
          </h3>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:gap-10 md:grid-cols-2">
            {additionalServices.map((service) => (
              <a key={service.title} href={service.href} target="_blank" rel="noopener noreferrer" className="group">
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[210px] md:h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <p
                  className="mt-4 text-center text-[clamp(1.2rem,1.8vw,1.6rem)] font-bold text-[#184f91] transition-colors group-hover:text-[#123d70]"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {service.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section ref={videoPinRef} className="relative h-[175svh] bg-black">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div className="absolute inset-0 cursor-pointer" style={{ scale: videoScale }} onClick={toggleVideoAudio}>
            <iframe
              ref={videoFrameRef}
              className="absolute inset-0 h-full w-full"
              src={youtubeEmbed}
              title="Waterloo Biofilter video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}
