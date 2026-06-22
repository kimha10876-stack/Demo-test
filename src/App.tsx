import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const WhyWaterloo = lazy(() => import('./components/WhyWaterloo'))
const Solutions = lazy(() => import('./components/Solutions'))
const Projects = lazy(() => import('./components/Projects'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Associations = lazy(() => import('./components/Associations'))
const News = lazy(() => import('./components/News'))
const TrustSection = lazy(() => import('./components/TrustSection'))
const ContactForm = lazy(() => import('./components/ContactForm'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return <div className="w-full h-32 bg-white" aria-hidden="true" />
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero is above the fold — no lazy load */}
      <main>
        <Hero />

        <div className="relative z-30 -mt-[100svh] bg-white">
          <Suspense fallback={<SectionFallback />}>
            <WhyWaterloo />
          </Suspense>
        </div>

        <Suspense fallback={<SectionFallback />}>
          <Solutions />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Associations />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <News />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <TrustSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ContactForm />
        </Suspense>
      </main>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  )
}
