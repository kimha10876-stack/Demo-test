import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../styles/animations'
import testimonialPortrait1 from '../assets/images/57be1796-81a2-4eba-a426-5c6f081c6993.png'
import testimonialPortrait2 from '../assets/images/49746bed-6547-43e6-a929-5232458dff37.jpeg'

const testimonials = [
  {
    quote: '"It\'s easy to tuck wastewater management away, but the Waterloo Smart Panel is just genius. Not to mention the easy to use maintenance tools! So glad we partnered with them."',
    author: 'KEKEKOLA',
    role: 'PROJECT MANAGER',
    image: testimonialPortrait1,
  },
  {
    quote: '"The system has been running flawlessly for three years. Waterloo Biofilter\u2019s support team is responsive and the technology truly delivers on its promises."',
    author: 'SARAH M.',
    role: 'PROPERTY DEVELOPER',
    image: testimonialPortrait2,
  },
  {
    quote: '"Installing a Waterloo Biofilter system was the best decision for our resort. Zero odor, zero hassle, and the environmental performance exceeded our expectations."',
    author: 'JAMES T.',
    role: 'RESORT OWNER',
    image: testimonialPortrait1,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [cardWidth, setCardWidth] = useState(680)
  const CARD_WIDTH = cardWidth
  const CARD_GAP = 36
  const STEP = CARD_WIDTH + CARD_GAP

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const centeredTrackX = `calc(50% - ${CARD_WIDTH / 2}px - ${current * STEP}px)`

  useEffect(() => {
    const updateCardWidth = () => {
      const responsiveWidth = Math.max(300, Math.min(680, window.innerWidth * 0.9))
      setCardWidth(Math.round(responsiveWidth))
    }

    updateCardWidth()
    window.addEventListener('resize', updateCardWidth)
    return () => window.removeEventListener('resize', updateCardWidth)
  }, [])

  return (
    <section
      id="testimonials"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-white py-20 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(65% 52% at 50% 72%, rgba(76,132,255,0.22) 0%, rgba(76,132,255,0.1) 32%, rgba(255,255,255,0) 72%)',
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-screen-2xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 flex flex-col items-center gap-5 text-center"
        >
          <motion.h2
            variants={staggerItem}
            className="font-bold leading-[0.98] tracking-[-0.032em] text-[#16181d]"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(2rem, 4.8vw, 3.9rem)',
            }}
          >
            Real Stories,<br />Real Impact
          </motion.h2>

          <motion.div variants={staggerItem} className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="btn-hover flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/55 text-[#1b1c1c] backdrop-blur-md transition-colors duration-200 hover:bg-white/70"
            >
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
                <path d="M8 1L2 7L8 13" stroke="#1b1c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="btn-hover flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/55 text-[#1b1c1c] backdrop-blur-md transition-colors duration-200 hover:bg-white/70"
            >
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
                <path d="M2 1L8 7L2 13" stroke="#1b1c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </motion.div>

        <div className="overflow-hidden px-4 md:px-0">
          <motion.div
            className="flex items-stretch gap-8 will-change-transform"
            animate={{ x: centeredTrackX }}
            transition={{ type: 'spring', stiffness: 120, damping: 22, mass: 0.7 }}
          >
            {testimonials.map((item, i) => {
              const isActive = i === current
              return (
                <motion.article
                  key={item.author}
                  animate={{ opacity: isActive ? 1 : 0.52, scale: isActive ? 1 : 0.965 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex min-h-[220px] shrink-0 items-center gap-5 rounded-[20px] border border-white/65 bg-white/48 p-5 md:p-6 shadow-[0px_24px_55px_-34px_rgba(30,115,190,0.6)] backdrop-blur-xl"
                  style={{ width: CARD_WIDTH }}
                >
                  <div className="h-[136px] w-[136px] shrink-0 overflow-hidden rounded-[14px] bg-[#ebccb0]">
                    <img
                      src={item.image}
                      alt={item.author}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col gap-4 pr-1">
                    <p
                      className="max-w-[350px] text-[clamp(0.88rem,1.15vw,1.48rem)] font-medium leading-[1.24] tracking-[-0.012em] text-[#262a31]"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {item.quote}
                    </p>
                    <div>
                      <p
                        className="text-[10px] font-semibold tracking-[0.9px] text-[#2f343f]"
                        style={{ fontFamily: 'Geist, sans-serif' }}
                      >
                        {item.author}
                      </p>
                      <p
                        className="mt-0.5 text-[9px] tracking-[0.9px] text-[#7c818d]"
                        style={{ fontFamily: 'Geist, sans-serif' }}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((item, i) => (
            <button
              key={item.author}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`btn-hover rounded-full transition-all duration-300 ${
                i === current ? 'h-1.5 w-5 bg-[#184f91]' : 'h-1.5 w-1.5 bg-[#b9c0d3]'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
