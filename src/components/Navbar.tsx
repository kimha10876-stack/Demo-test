import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAutoHideNavbar, useScrolled } from '../hooks/useScrollAnimation'
import { imgLogo } from '../assets/figmaAssets'

const navLinks = [
  { label: 'Applications', href: '#applications' },
  { label: 'Products', href: '#products' },
  { label: 'Maintenance', href: '#maintenance' },
  { label: 'Resources', href: '#resources' },
  { label: 'About Us', href: '#about' },
  { label: 'Careers', href: '#careers' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

const topBarLinks = [
  { label: 'Shop Now', href: '#', color: 'bg-teal' },
  { label: 'Find an Installer', href: '#', color: 'bg-primary' },
  { label: 'Document Portal', href: '#', color: 'bg-primary-dark' },
  { label: 'Pay My Invoice', href: '#', color: 'bg-primary-darkest' },
]

export default function Navbar() {
  const scrolled = useScrolled(40)
  const autoHidden = useAutoHideNavbar(140, 10)
  const [menuOpen, setMenuOpen] = useState(false)
  const shouldHide = autoHidden && !menuOpen

  return (
    <motion.header
      animate={{ y: shouldHide ? '-105%' : '0%' }}
      transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center"
    >
      {/* Top action bar */}
      <div
        className="w-full border-b border-[rgba(118,119,125,0.1)] bg-white transition-all duration-300"
        style={{ height: scrolled ? 0 : undefined, overflow: 'hidden' }}
      >
        <div className="max-w-screen-xl mx-auto px-6 py-2 flex items-center justify-end gap-3 flex-wrap">
          {topBarLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`btn-hover ${link.color === 'bg-teal' ? 'bg-[#5cb1cc]' : link.color === 'bg-primary' ? 'bg-[#1e73be]' : link.color === 'bg-primary-dark' ? 'bg-[#004c6e]' : 'bg-[#001e2f]'} text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-[9px] whitespace-nowrap`}
            >
              {link.label}
            </a>
          ))}
          <span className="font-bold text-base text-black ml-1 whitespace-nowrap" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            1-866-366-4329
          </span>
        </div>
      </div>

      {/* Main glass nav pill */}
      <div className="w-full flex justify-center px-4 mt-3">
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-[1216px] backdrop-blur-[12px] bg-white/75 border border-white/20 rounded-full shadow-[0px_10px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-between px-8 py-3"
        >
          {/* Logo */}
          <a href="#" className="shrink-0">
            <img
              src={imgLogo}
              alt="Waterloo Biofilter"
              className="h-6 w-auto object-contain"
              loading="eager"
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-[rgba(25,28,30,0.8)] hover:text-[#1e73be] transition-colors duration-200 whitespace-nowrap"
                style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="#contact"
            className="btn-hover hidden lg:flex items-center gap-2 bg-[#1e73be] text-white text-[11px] font-bold tracking-[1.1px] uppercase px-6 py-2.5 rounded-full hover:bg-[#1660a0] transition-colors duration-200 whitespace-nowrap"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            Talk with an expert
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <path d="M1 7L7 1M7 1H3M7 1V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            className="btn-hover lg:hidden p-2 text-[#1b1c1c]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </motion.nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden w-full max-w-[1216px] mx-auto mt-2 mx-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-[rgba(25,28,30,0.8)] hover:text-[#1e73be] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-hover mt-2 inline-flex items-center justify-center bg-[#1e73be] text-white text-sm font-bold tracking-wider uppercase px-6 py-3 rounded-full"
              >
                Talk with an expert
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
