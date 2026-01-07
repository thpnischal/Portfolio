import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from './ui/Card'
import { allProjects } from '../data/projects'

const featuredProjects = allProjects.slice(0, 2)

export default function Projects(){
  return (
    <section id="projects" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6"
      >
        <h3 className="text-lg sm:text-xl font-semibold">Selected Projects</h3>
        <Link to="/projects" className="w-full sm:w-auto">
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto text-sm text-orange-400 hover:text-orange-300 border border-orange-400/30 hover:border-orange-400/50 px-4 py-2 rounded-lg transition-all"
          >
            View More Projects →
          </motion.button> */}
        </Link>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:translate-y-[-6px] transition-all duration-300 hover:shadow-card-lg h-full flex flex-col group">
              <div className="h-44 bg-gradient-to-br from-gray-700 to-gray-600 rounded mb-4 flex items-center justify-center text-sm relative overflow-hidden">
                {p.image ? (
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover rounded"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:to-orange-500/10 transition-all duration-300" />
                    <span className="relative z-10 text-gray-400">[Diagram]</span>
                  </>
                )}
              </div>
              <div className="font-semibold text-base sm:text-lg mb-2">{p.title}</div>
              <div className="text-sm sm:text-base text-gray-100 my-2 flex-grow">{p.desc}</div>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tools.map(t => (
                  <span key={t} className="text-xs bg-white/6 px-2 py-1 rounded border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
              {/* <motion.a 
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors" 
                href="#"
              >
                View Project →
              </motion.a> */}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
