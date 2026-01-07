import React from 'react'
import { motion } from 'framer-motion'

const honors = [
  {
    title: 'Academic Proficiency Medal',
    issuer: 'Manav Rachna Educational Institutions',
    date: 'Apr 2023',
    associated: 'Manav Rachna International Institute of Research & Studies'
  },
  {
    title: 'Vice Chancellor Medal',
    issuer: 'Manav Rachna Educational Institutions',
    date: 'Apr 2023',
    associated: 'Manav Rachna International Institute of Research & Studies'
  },
  {
    title: 'SLC Excellence Award',
    issuer: 'Private School Association, Western Region, Kathmandu',
    date: 'Jun 2015',
    associated: 'Ever Vision School'
  }
]

export default function Honors(){
  return (
    <section id="honors" className="py-8 sm:py-12">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6"
      >
        Honors & Awards
      </motion.h3>
      <div className="space-y-3 sm:space-y-4">
        {honors.map((honor, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ x: 5 }}
            className="bg-white/3 p-3 sm:p-4 rounded-lg glass hover:bg-white/4 transition-all"
          >
            <div className="font-semibold text-sm sm:text-base text-orange-400">{honor.title}</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">{honor.issuer}</div>
            <div className="text-xs text-gray-400 mt-1">{honor.date}</div>
            <div className="text-xs text-gray-400 mt-2">Associated with {honor.associated}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

