import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../styles/animations'
import newsTopGrowingSeal from '../assets/images/8391_CTGC_2025_SEAL_CMYK_EN_EC-768x347.jpg'
import newsRh2oLogo from '../assets/images/rh20-logo-01-scalia-blog-default.png'

const articles = [
  {
    image: newsRh2oLogo,
    title: 'Waterloo Biofilter Expands Technological Portfolio with Acquisition of RH2O',
    href: '#',
  },
  {
    image: newsTopGrowingSeal,
    title: 'Waterloo Biofilter is One of Canada\'s Top Growing Companies',
    href: '#',
  },
]

export default function News() {
  return (
    <section id="news" className="relative overflow-hidden bg-[rgba(210,227,242,0.35)] py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(58% 45% at 50% 72%, rgba(76,132,255,0.2) 0%, rgba(255,255,255,0) 74%)',
        }}
      />
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p
            className="text-xs font-semibold tracking-[1.4px] uppercase text-black mb-3"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            Company Updates
          </p>
          <h2
            className="font-bold text-[#191c1e] leading-tight tracking-tight"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.375rem)',
            }}
          >
            Waterloo Biofilter in the news
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {articles.map((article) => (
            <motion.div
              key={article.title}
              variants={staggerItem}
              className="flex flex-col overflow-hidden rounded-[30px] border border-white/65 bg-white/45 shadow-[0px_26px_55px_-35px_rgba(30,115,190,0.55)] backdrop-blur-xl"
            >
              <div className="flex h-52 items-center justify-center overflow-hidden bg-white/45 px-6 py-5 md:h-56 md:px-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-contain transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col gap-6 flex-1">
                <h3
                  className="text-black font-normal leading-snug flex-1"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: 'clamp(1.25rem, 2vw, 2.0625rem)',
                  }}
                >
                  {article.title}
                </h3>
                <a
                  href={article.href}
                  className="btn-hover inline-flex items-center gap-3 self-start bg-[#184f91] text-white text-sm font-semibold tracking-[0.7px] uppercase px-8 py-4 rounded-full hover:bg-[#123d70] transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Read More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 13L13 3M13 3H7M13 3V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
