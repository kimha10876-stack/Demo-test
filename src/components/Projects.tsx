import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { staggerContainer, staggerItem } from '../styles/animations'
import projectImage1 from '../assets/images/Photo4_425px_corners-83eab3df-4aaf-42bb-af52-7bee7ca4dbc3.png'
import projectImage2 from '../assets/images/Photo3_425px_corners-4dc5ad41-82aa-4775-a28b-098f72da9a12.png'
import projectImage3 from '../assets/images/subdivision-applications-e091fc2b-c414-4364-bffb-915a74c85f9e.png'
import projectImage4 from '../assets/images/communal-application-2-f0336d5a-cdee-4732-88df-21784c772552.png'

const projects = [
  {
    name: 'Project 1',
    tags: ['Residential System', 'Nitrogen Removal', 'Subsurface Disposal'],
    image: projectImage1,
  },
  {
    name: 'Project 2',
    tags: ['Eco-Friendly', 'Low Impact'],
    image: projectImage2,
  },
  {
    name: 'Project 3',
    tags: ['Commercial Grade', 'High Flow', 'Seasonal Load'],
    image: projectImage3,
  },
  {
    name: 'Project 4',
    tags: ['Industrial Chic', 'Advanced Filtration'],
    image: projectImage4,
  },
]

export default function Projects() {
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null)
  const listRef = useRef<HTMLDivElement | null>(null)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const previewX = useSpring(cursorX, { stiffness: 280, damping: 34, mass: 0.34 })
  const previewY = useSpring(cursorY, { stiffness: 280, damping: 34, mass: 0.34 })

  const updatePreviewPosition = (e: React.MouseEvent<HTMLElement>) => {
    const rect = listRef.current?.getBoundingClientRect()
    if (!rect) return

    // Keep image slightly offset from pointer for readability.
    const localX = e.clientX - rect.left + 18
    const localY = e.clientY - rect.top - 120
    cursorX.set(localX)
    cursorY.set(localY)
  }

  return (
    <section id="projects" className="bg-white pt-36 md:pt-44 pb-24 md:pb-28">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 flex flex-col gap-9"
        >
          <motion.h2
            variants={staggerItem}
            className="font-extrabold text-black leading-[1.08] tracking-[-0.02em] max-w-[860px]"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(2rem, 3.8vw, 3.55rem)',
            }}
          >
            <span className="block md:whitespace-nowrap">Each project tells its own</span>
            <span className="block md:whitespace-nowrap">story of collaboration</span>
            <span className="block">and precision.</span>
          </motion.h2>

          <motion.a
            variants={staggerItem}
            href="#"
            className="btn-hover inline-flex items-center gap-3 self-start rounded-full bg-[#184f91] text-white text-[12px] font-semibold tracking-[1.2px] uppercase px-8 py-3.5 hover:bg-[#123d70] transition-colors"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
              <path d="M1 4.5H10M10 4.5L7 1M10 4.5L7 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            View Projects
          </motion.a>
        </motion.div>

        {/* Project list */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative border-t border-[rgba(118,119,125,0.17)]"
          ref={listRef}
          onMouseLeave={() => setHoveredProjectIndex(null)}
          onMouseMove={updatePreviewPosition}
        >
          {/* Floating hover preview (desktop only) */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute hidden md:block z-20"
            style={{ x: previewX, y: previewY }}
            animate={{
              opacity: hoveredProjectIndex !== null ? 1 : 0,
              scale: hoveredProjectIndex !== null ? 1 : 0.8,
            }}
            transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="h-[190px] w-[155px] overflow-hidden rounded-[8px] bg-[#eef4f9] shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
              <AnimatePresence mode="wait">
                {hoveredProjectIndex !== null && (
                  <motion.img
                    key={projects[hoveredProjectIndex].name}
                    src={projects[hoveredProjectIndex].image}
                    alt={`${projects[hoveredProjectIndex].name} preview`}
                    className="h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
                    loading="lazy"
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={staggerItem}
              className="group grid grid-cols-1 md:grid-cols-[240px_1fr_auto] items-start md:items-center gap-5 border-b border-[rgba(118,119,125,0.17)] py-9 px-4 cursor-pointer hover:bg-[#f7f9fb] transition-colors duration-200"
              onMouseEnter={(e) => {
                setHoveredProjectIndex(index)
                updatePreviewPosition(e)
              }}
            >
              <span
                className="font-normal text-[rgba(25,28,30,0.58)] group-hover:text-[rgba(25,28,30,0.72)] transition-colors"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(1.8rem, 2.3vw, 2.35rem)',
                }}
              >
                {project.name}
              </span>

              <div className="min-w-0 flex items-center gap-3 flex-wrap justify-start">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#d6e5f4] text-[#60656d] text-[11px] tracking-[0.75px] uppercase px-4 py-1.5 rounded-full font-medium"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="hidden md:block shrink-0 text-[rgba(25,28,30,0.32)] group-hover:text-[rgba(25,28,30,0.5)] transition-colors"
              >
                <path d="M4 12L12 4M12 4H7M12 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
