import { motion } from 'framer-motion'

const headlineLines = [
  'Trusted across North America,',
  'our proven wastewater solutions',
  'deliver reliable performance,',
  'environmental protection, and',
  'long-term value.',
]

export default function WhyWaterloo() {
  return (
    <section id="about" className="relative z-30 flex min-h-[100svh] items-center bg-white py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.45 }}
          className="mb-8 text-[clamp(1rem,1.2vw,1.75rem)] font-bold uppercase tracking-wide text-[#1e73be]"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          Why Waterloo Biofilter
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.08,
              },
            },
          }}
          className="max-w-[760px] text-[#1b1c1c] leading-[1.25]"
          style={{
            fontFamily: 'Lora, serif',
            fontSize: 'clamp(1.55rem, 2.9vw, 2.7rem)',
          }}
        >
          {headlineLines.map((line) => (
            <motion.span
              key={line}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="btn-hover mt-10 inline-flex items-center gap-3 rounded-full bg-[#184f91] px-7 py-3 text-xs font-semibold uppercase tracking-[1.2px] text-white transition-colors duration-200 hover:bg-[#123d70]"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          Who we are
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f7f4ea]">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M1 5H9M9 5L6 2M9 5L6 8" stroke="#1b1c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </motion.a>
      </div>
    </section>
  )
}
