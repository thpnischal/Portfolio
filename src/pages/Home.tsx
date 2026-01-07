import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import EducationExperience from '../components/EducationExperience'
import Honors from '../components/Honors'
import Publications from '../components/Publications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#1a1a1a] text-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Left column: profile card (sticky) */}
        <aside className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-20 glass p-4 sm:p-6 rounded-xl border border-white/20 shadow-lg hover:shadow-card-lg transition-shadow"
          >
            <div>
              <div className="font-bold text-base sm:text-lg">Nischal Thapa</div>
              <div className="text-sm sm:text-base text-gray-100">Mechanical Engineer</div>
              <div className="text-xs text-gray-400">Matatirtha, Chandragiri 08, Kathmandu, Nepal</div>
            </div>

            <div className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-100">
               Mechanical Engineering | International Business | Export | After Sales Support | Sustainability
            </div>

            <div className="mt-4 sm:mt-6 text-xs text-gray-400">
              <div>SolidWorks · Siemens NX · PTC Creo · Fusion 360 </div>
            </div>
          </motion.div>
        </aside>

        {/* Right column: content */}
        <div className="lg:col-span-8 space-y-8 sm:space-y-12">
          <Hero />
          <About />
          <Skills />
          <EducationExperience />
          <Projects />
          <Publications />
          <Honors />
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  )
}

