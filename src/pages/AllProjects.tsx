import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from '../components/ui/Card'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { allProjects, Project } from '../data/projects'

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const categories = ['All', ...Array.from(new Set(allProjects.map(p => p.category)))]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen font-sans bg-[#1a1a1a] text-gray-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">All Projects</h1>
          <p className="text-sm sm:text-base text-gray-400">Explore all my mechanical engineering projects and designs</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-orange-500 text-black font-semibold'
                  : 'bg-white/10 text-gray-100 hover:bg-white/15 border border-white/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
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
                {p.category && (
                  <div className="text-xs text-orange-400 mb-2 font-medium">{p.category}</div>
                )}
                <div className="font-semibold text-base sm:text-lg mb-2">{p.title}</div>
                <div className="text-sm sm:text-base text-gray-100 my-2 flex-grow">{p.desc}</div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tools.map(t => (
                    <span key={t} className="text-xs bg-white/6 px-2 py-1 rounded border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                <motion.a 
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors" 
                  href="#"
                >
                  View Project →
                </motion.a>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-gray-400"
          >
            No projects found in this category.
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  )
}

