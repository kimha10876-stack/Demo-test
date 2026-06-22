import { motion } from 'framer-motion'

const heroVideoSrc = '/src/assets/images/15620228_3840_2160_60fps.mp4'

export default function Hero() {

  return (
    <section
      id="hero"
      className="relative w-full h-[250svh]"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.1)_45%,rgba(0,0,0,0.72)_100%)]" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <h1
              className="font-extrabold text-center whitespace-pre-wrap leading-[1.05] tracking-[-0.04em] text-white"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(2.8rem, 7vw, 6.8rem)',
              }}
            >
              Onsite Wastewater{'\n'}Treatment
            </h1>
            <p
              className="text-center whitespace-pre-wrap max-w-2xl text-base md:text-[1.65rem] leading-relaxed text-[rgba(255,255,255,0.9)]"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              Over 30 years of experience designing and{'\n'}
              manufacturing advanced septic systems
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/80">
          <span className="text-lg tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
