import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  'SolidWorks', 'Siemens NX', 'UG NX', 'AutoCAD', 'Autodesk Fusion 360', 'PTC Creo',
  'Computer-Aided Design (CAD)', '3D Design', 'Modeling and Simulation',
  'Engineering', 'Maintenance & Repair', 'Supervisory Skills',
  'Leadership', 'Team Coordination', 'Research',
  'Data Collection', 'Data Analysis', 'Literature Reviews',
  'Import/Export Operations', 'International Business',
  'Microsoft Excel', 'Final Draft'
]

export default function Skills(){
  return (
    <section id="skills" className="py-8 sm:py-12">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-lg sm:text-xl font-semibold mb-4"
      >
        Skills
      </motion.h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {skills.map((s, index) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 122, 24, 0.1)' }}
            className="px-3 py-1 bg-white/5 rounded-md text-sm cursor-default border border-white/5 hover:border-orange-400/30 transition-all"
          >
            {s}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
