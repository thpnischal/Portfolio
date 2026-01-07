import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/profile-image.jpeg'

export default function Hero(){
  return (
    <section id="home" className="py-6 pt-20 sm:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 sm:space-y-4"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-gray-200"
          >
            Mechanical Engineer
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent leading-tight"
          >
            Nischal Thapa
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-100"
          >
            Matatirtha, Chandragiri 08, Kathmandu
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-gray-100 max-w-2xl"
          >
            " Mechanical Engineering | International Business | Export | After Sales Support | Sustainability "
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end items-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-400/10 rounded-2xl blur-xl"></div>
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={profileImage} 
              alt="Nischal Thapa - Mechanical Engineer" 
              className="relative w-full h-auto rounded-2xl border-2 border-white/20 shadow-card-lg object-cover" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
