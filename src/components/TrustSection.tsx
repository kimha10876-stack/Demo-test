import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../styles/animations'
import proofUsepaLogo from '../assets/images/Home_Slide3_USEPA@2x.png'
import proofBnqLogo from '../assets/images/BNQ-testing.png'
import proofNsfLogo from '../assets/images/Home_Slide3_NSF@2x.png'

export default function TrustSection() {
  return (
    <section className="bg-[#f5f6f8] py-24 md:py-28">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-[960px]"
        >
          <motion.h2
            variants={staggerItem}
            className="max-w-[840px] font-bold leading-[1.08] tracking-[-0.03em] text-black"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(2.05rem, 4.8vw, 4rem)',
            }}
          >
            Since 1993, The Waterloo Biofilter has been proven in thousands of installations across North America.
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="mt-9 max-w-[640px] text-black/85"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1.05rem, 1.6vw, 2rem)',
              lineHeight: '1.3',
            }}
          >
            Our system has been thoroughly tested and proven effective by third-party verification programs.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-16 grid grid-cols-1 items-center gap-10 md:grid-cols-3 md:gap-16"
          >
            <div className="mx-auto flex h-[180px] w-[220px] items-center justify-center md:h-[210px] md:w-[250px]">
              <img
                src={proofUsepaLogo}
                alt="United States Environmental Protection Agency"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="mx-auto flex h-[120px] w-[300px] items-center justify-center md:h-[140px] md:w-[340px]">
              <img
                src={proofBnqLogo}
                alt="BNQ verification mark"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="mx-auto flex h-[165px] w-[165px] items-center justify-center md:h-[190px] md:w-[190px]">
              <img
                src={proofNsfLogo}
                alt="NSF certification mark"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="mt-16 flex justify-center">
            <a
              href="#"
              className="btn-hover inline-flex items-center justify-center rounded-full bg-[#184f91] px-10 py-4 text-[0.95rem] font-semibold uppercase tracking-[1.6px] text-white transition-colors hover:bg-[#123d70] md:px-14"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              Learn More About Testing Verification
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
