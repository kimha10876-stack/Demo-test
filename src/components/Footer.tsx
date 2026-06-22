import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../styles/animations'
import { imgLogo } from '../assets/figmaAssets'

const footerLinks = [
  {
    heading: 'Applications',
    links: ['Residential', 'Commercial', 'Maintenance', 'Communal & Subdivision', 'Nutrient Removal'],
  },
  {
    heading: 'Company',
    links: ['About Us', 'Careers', 'News', 'Partners'],
  },
  {
    heading: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookies'],
  },
  {
    heading: 'Contact',
    links: ['65 Massey Road,', 'Suite C', 'Guelph ON N1H 7M6', '1-866-366-4329'],
    isAddress: true,
  },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    bg: 'bg-[#3b5998]',
  },
  {
    label: 'Twitter/X',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    bg: 'bg-black',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="17.5" cy="6.5" r="1" fill="white"/>
      </svg>
    ),
    bg: 'bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2" fill="white"/>
      </svg>
    ),
    bg: 'bg-[#0077b5]',
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer className="bg-[#f7f9fb] pt-20 pb-10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Newsletter block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-[#003767] rounded-[47px] p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
        >
          <div className="max-w-lg">
            <h3
              className="text-white font-semibold mb-4"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(1.5rem, 3vw, 2.375rem)',
              }}
            >
              Subscribe our newsletter
            </h3>
            <p
              className="text-white/70 text-base leading-relaxed"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              Subscribe to our newsletter and be the first to receive insights, updates, and expert tips on optimizing your wastewater management.
            </p>
          </div>

          <div className="flex flex-col gap-4 min-w-0 md:min-w-[380px]">
            <p
              className="text-white/60 text-xs tracking-[1.4px] uppercase"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              Stay up to date
            </p>
            {subscribed ? (
              <p className="text-[#d2e3f2] font-medium">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-3 flex-wrap">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 min-w-[200px] bg-white/10 border border-white/20 rounded-full px-8 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors text-base"
                  style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
                />
                <button
                  type="submit"
                  className="btn-hover bg-[#d2e3f2] text-black font-bold rounded-full px-8 py-4 hover:bg-[#bdd3e8] transition-colors whitespace-nowrap text-base"
                  style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
                >
                  Subscribe
                </button>
              </form>
            )}
            <p
              className="text-white/40 text-xs"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              By subscribing you agree to our{' '}
              <a href="#" className="underline hover:text-white/70 transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>
        </motion.div>

        {/* Main footer grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10"
        >
          {/* Branding */}
          <motion.div variants={staggerItem} className="md:col-span-4 flex flex-col gap-5">
            <img
              src={imgLogo}
              alt="Waterloo Biofilter"
              className="h-10 w-auto object-contain self-start"
              loading="lazy"
            />
            <p
              className="text-[#45464d] text-lg leading-relaxed"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              Waterloo Biofilter Advanced Septic Systems
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`${social.bg} w-8 h-8 flex items-center justify-center rounded-sm`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {footerLinks.map((col) => (
              <div key={col.heading} className="flex flex-col gap-5">
                <h4
                  className="text-[#191c1e] text-xs font-semibold tracking-[1.4px] uppercase"
                  style={{ fontFamily: 'Geist, sans-serif' }}
                >
                  {col.heading}
                </h4>
                <ul className="flex flex-col gap-4">
                  {col.links.map((link) => (
                    <li key={link}>
                      {col.isAddress ? (
                        <span
                          className="text-[#45464d] text-base leading-relaxed"
                          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
                        >
                          {link}
                        </span>
                      ) : (
                        <a
                          href="#"
                          className="text-[#45464d] text-base hover:text-[#1e73be] transition-colors"
                          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
                        >
                          {link}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(118,119,125,0.1)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[rgba(25,28,30,0.4)] text-sm"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
          >
            © 2024 Waterloo Biofilter Systems Inc. Advanced Septic Systems.
          </p>
          <div className="flex items-center gap-8">
            {['Privacy Policy', 'Terms of Use'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[rgba(25,28,30,0.4)] text-xs tracking-[1.2px] uppercase hover:text-[#1e73be] transition-colors"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
