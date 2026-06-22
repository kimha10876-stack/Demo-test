import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../styles/animations'
import contactBackgroundImage from '../assets/images/68d2ab8d-89e0-4aac-aa69-95a76905234e.jpeg'

type FormData = {
  fullName: string
  email: string
  company: string
  phone: string
  facilityName: string
  location: string
  facilityType: string
  peakFlow: string
  message: string
  file: File | null
}

const initialForm: FormData = {
  fullName: '', email: '', company: '', phone: '',
  facilityName: '', location: '', facilityType: '', peakFlow: '',
  message: '', file: null,
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, file: e.target.files?.[0] ?? null }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = "w-full bg-white border border-[rgba(118,119,125,0.2)] rounded-[9px] px-5 py-3.5 text-[#1b1c1c] placeholder-[#6b7280] focus:outline-none focus:border-[#1e73be] transition-colors text-[0.95rem]"
  const labelClass = "text-xs font-normal text-[#45464d] tracking-[0.65px] uppercase"

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background image */}
      <img
        src={contactBackgroundImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-white/15" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: heading */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <motion.h2
              variants={staggerItem}
              className="font-bold text-[#191c1e] leading-snug tracking-tight"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(1.6rem, 2.8vw, 2.55rem)',
              }}
            >
              Thank you for your interest in Waterloo Biofilter
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-[#45464d] text-base leading-relaxed"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              Please use this form to provide us with information about your project. We respond to inquiries within two business days.
            </motion.p>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 lg:col-start-6 bg-[rgba(242,244,246,0.83)] rounded-[26px] p-8 md:p-9 shadow-[0px_12px_35px_-12px_rgba(0,0,0,0.05)]"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 gap-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#1e73be] flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <path d="M5 14L11 20L23 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold text-[#191c1e]"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Message Sent!
                </h3>
                <p className="text-[#45464d]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
                  We'll be in touch within two business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
                {/* Contact info section */}
                <div className="flex flex-col gap-5">
                  <div className="border-b border-[rgba(118,119,125,0.2)] pb-3">
                    <h3
                      className="text-sm font-semibold text-black tracking-[1.4px] uppercase"
                      style={{ fontFamily: 'Geist, sans-serif' }}
                    >
                      Contact Information
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { name: 'fullName', label: 'Full Name*', placeholder: 'Your full name', type: 'text', required: true },
                      { name: 'email', label: 'Email*', placeholder: 'Your email address', type: 'email', required: true },
                      { name: 'company', label: 'Company*', placeholder: 'Company Name', type: 'text', required: true },
                      { name: 'phone', label: 'Phone*', placeholder: '+1 (555) 000-0000', type: 'tel', required: true },
                    ].map(field => (
                      <div key={field.name} className="flex flex-col gap-3">
                        <label htmlFor={field.name} className={labelClass} style={{ fontFamily: 'Geist, sans-serif' }}>
                          {field.label}
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          value={form[field.name as keyof FormData] as string}
                          onChange={handleChange}
                          className={inputClass}
                          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project details section */}
                <div className="flex flex-col gap-5">
                  <div className="border-b border-[rgba(118,119,125,0.2)] pb-3">
                    <h3
                      className="text-sm font-semibold text-black tracking-[1.4px] uppercase"
                      style={{ fontFamily: 'Geist, sans-serif' }}
                    >
                      Project Details
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { name: 'facilityName', label: 'Facility Name', placeholder: '', type: 'text' },
                      { name: 'location', label: 'Location', placeholder: '', type: 'text' },
                      { name: 'facilityType', label: 'Facility Type', placeholder: '', type: 'text' },
                      { name: 'peakFlow', label: 'Peak Daily Sewage Flow (L/Day)', placeholder: '', type: 'number' },
                    ].map(field => (
                      <div key={field.name} className="flex flex-col gap-3">
                        <label htmlFor={field.name} className={labelClass} style={{ fontFamily: 'Geist, sans-serif' }}>
                          {field.label}
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={form[field.name as keyof FormData] as string}
                          onChange={handleChange}
                          className={inputClass}
                          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-4">
                  <label htmlFor="message" className={labelClass} style={{ fontFamily: 'Geist, sans-serif' }}>
                    Your Messages
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your messages here"
                    value={form.message}
                    onChange={handleChange}
                    className={inputClass + ' min-h-[120px] resize-none'}
                    style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
                  />
                </div>

                {/* File upload */}
                <div className="flex flex-col gap-4">
                  <label className={labelClass} style={{ fontFamily: 'Geist, sans-serif' }}>
                    Relevant Documentation (10MB Max / PDF Only)
                  </label>
                  <div className="flex items-center gap-4">
                    <label
                      htmlFor="file-upload"
                      className="btn-hover cursor-pointer inline-flex items-center gap-3 bg-white border border-[rgba(118,119,125,0.2)] rounded-full px-6 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
                        <path d="M6 1V10M6 1L2 5M6 1L10 5M1 13H11" stroke="#191c1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span
                        className="text-xs font-normal text-[#191c1e] tracking-[1.3px] uppercase"
                        style={{ fontFamily: 'Geist, sans-serif' }}
                      >
                        Choose File
                      </span>
                      <input
                        id="file-upload"
                        type="file"
                        accept=".pdf"
                        className="sr-only"
                        onChange={handleFile}
                      />
                    </label>
                    <span
                      className="text-[#45464d] text-[0.95rem]"
                      style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
                    >
                      {form.file ? form.file.name : 'No file chosen'}
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-hover w-full bg-black text-white text-sm font-bold tracking-[2.6px] uppercase py-5 rounded-[9px] hover:bg-[#1b1c1c] active:scale-[0.99] transition-all duration-200"
                  style={{ fontFamily: 'Geist, sans-serif' }}
                >
                  Submit
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
