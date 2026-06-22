import { motion } from 'framer-motion'
import logoAow from '../assets/images/logo/AOW@2x-300x161.png'
import logoCfib from '../assets/images/logo/CFIB@2x-300x161.png'
import logoCin from '../assets/images/logo/CIN@2x-300x161.png'
import logoCpa from '../assets/images/logo/cpa@2x-300x161.png'
import logoCwwa from '../assets/images/logo/CWWA@2x-300x161.png'
import logoFoca from '../assets/images/logo/FOCA@2x-300x161.png'
import logoNowra from '../assets/images/logo/NOWRA@2x-300x161.png'
import logoOasis from '../assets/images/logo/oasis@2x-300x161.png'
import logoOca from '../assets/images/logo/OCA@2x-300x161.png'
import logoOowa from '../assets/images/logo/oowa@2x-300x161.png'
import logoOpcea from '../assets/images/logo/OPCEA@2x-300x161.png'
import logoRoo from '../assets/images/logo/RoO@2x-300x161.png'
import logoWeao from '../assets/images/logo/WEAO@2x-300x161.png'
import logoWef from '../assets/images/logo/WEF@2x-300x161.png'

const logos = [
  {
    src: logoAow,
    alt: 'Alberta Onsite Wastewater Management Association',
  },
  {
    src: logoCfib,
    alt: 'Canadian Federation of Independent Business',
  },
  {
    src: logoCin,
    alt: 'Camping in Ontario',
  },
  {
    src: logoCwwa,
    alt: 'Canadian Water and Wastewater Association',
  },
  {
    src: logoFoca,
    alt: 'Federation of Ontario Cottagers Associations',
  },
  {
    src: logoCpa,
    alt: 'Cottage Pollutant Association',
  },
  {
    src: logoNowra,
    alt: 'National Onsite Wastewater Recycling Association',
  },
  {
    src: logoOasis,
    alt: 'Ontario Association of Sewage Industry Services',
  },
  {
    src: logoOowa,
    alt: 'Ontario Onsite Wastewater Association',
  },
  {
    src: logoRoo,
    alt: 'Resorts of Ontario',
  },
  {
    src: logoOpcea,
    alt: 'Ontario Pollution Control Equipment Association',
  },
  {
    src: logoOca,
    alt: 'Ontario Camps Association',
  },
  {
    src: logoWeao,
    alt: 'Water Environment Association of Ontario',
  },
  {
    src: logoWef,
    alt: 'Water Environment Federation',
  },
]

export default function Associations() {
  const marqueeLogos = [...logos, ...logos]

  return (
    <section className="border-t border-[rgba(118,119,125,0.1)] bg-white py-16">
      <div className="mx-auto max-w-screen-2xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10 px-6 text-center text-xl font-bold text-[#1e73be] md:text-2xl"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          We are proud members of the following associations
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

          <div className="associations-marquee flex w-max items-center gap-14 py-4 md:gap-20">
            {marqueeLogos.map((logo, index) => (
              <div key={`${logo.alt}-${index}`} className="shrink-0">
                <img
                  src={logo.src}
                  alt={index < logos.length ? logo.alt : ''}
                  aria-hidden={index >= logos.length}
                  className="h-14 w-auto object-contain opacity-70 grayscale md:h-16"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes associations-marquee-right {
          from {
            transform: translate3d(-50%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }

        .associations-marquee {
          animation: associations-marquee-right 38s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  )
}
