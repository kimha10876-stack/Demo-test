import { useEffect, useState } from 'react'

export function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let rafId: number

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > threshold)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [threshold])

  return scrolled
}

export function useAutoHideNavbar(threshold = 120, delta = 8) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let rafId: number | null = null
    let lastY = window.scrollY

    const update = () => {
      const currentY = window.scrollY
      const diff = currentY - lastY

      if (currentY <= threshold) {
        setHidden(false)
      } else if (Math.abs(diff) > delta) {
        setHidden(diff > 0)
      }

      lastY = currentY
      rafId = null
    }

    const handleScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [threshold, delta])

  return hidden
}
