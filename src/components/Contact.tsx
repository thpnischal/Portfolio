import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail, Phone, Instagram } from 'lucide-react'

const VSCOIcon = ({ className = '' }: { className?: string }) => {
  const center = 12
  const outerRadius = 10
  const middleRadius = 7
  const innerRadius = 3
  
  // Create 16 radial lines
  const radialLines = []
  for (let i = 0; i < 16; i++) {
    const angle = (i * Math.PI * 2) / 16
    const x1 = center + Math.cos(angle) * outerRadius
    const y1 = center + Math.sin(angle) * outerRadius
    const x2 = center + Math.cos(angle) * innerRadius
    const y2 = center + Math.sin(angle) * innerRadius
    radialLines.push(
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.8" />
    )
  }
  
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
    >
      <circle cx={center} cy={center} r={outerRadius} stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx={center} cy={center} r={middleRadius} stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx={center} cy={center} r={innerRadius} fill="currentColor" />
      {radialLines}
    </svg>
  )
}

export default function Contact(){
  return (
    <section id="contact" className="py-8 sm:py-12">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <motion.a
          href="https://www.linkedin.com/in/nischalthp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.1, y: -4 }}
          className="group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-500/10 flex items-center justify-center hover:bg-orange-500/20 border border-white/20 hover:border-orange-400/50 transition-all"
        >
          <Linkedin size={24} className="sm:w-7 sm:h-7 text-orange-400" />
        </motion.a>

        <motion.a
          href="mailto:nischal.thapa04@outlook.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.1, y: -4 }}
          className="group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-500/10 flex items-center justify-center hover:bg-orange-500/20 border border-white/20 hover:border-orange-400/50 transition-all"
        >
          <Mail size={24} className="sm:w-7 sm:h-7 text-orange-400" />
        </motion.a>

        {/* <motion.a
          href="tel:+9779858070886"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.1, y: -4 }}
          className="group w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center hover:bg-orange-500/20 border border-white/20 hover:border-orange-400/50 transition-all"
        >
          <Phone size={28} className="text-orange-400" />
        </motion.a> */}

        <motion.a
          href="https://www.instagram.com/nischal_thp/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.1, y: -4 }}
          className="group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-500/10 flex items-center justify-center hover:bg-orange-500/20 border border-white/20 hover:border-orange-400/50 transition-all"
        >
          <Instagram size={24} className="sm:w-7 sm:h-7 text-orange-400" />
        </motion.a>

        <motion.a
          href="https://vsco.co/nischalthp"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.1, y: -4 }}
          className="group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-500/10 flex items-center justify-center hover:bg-orange-500/20 border border-white/20 hover:border-orange-400/50 transition-all"
        >
          <VSCOIcon className="text-orange-400" />
        </motion.a>
      </div>
    </section>
  )
}
