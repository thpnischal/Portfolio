import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-8 sm:py-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-lg sm:text-xl md:text-2xl font-semibold mb-4"
      >
        About Me
      </motion.h2>
      <div className="text-sm sm:text-base text-gray-100 space-y-3 sm:space-y-4">
        <p>An enthusiastic, and motivated professional who is passionate about thriving in the fast-paced world of technological growth. Currently working as a Country Service Manager for Sonalika Tractors in Nepal Market.</p>
        
        <p>I'm someone who's always up for a challenge and loves diving into new things. Whether it's learning a new skill or tackling a fresh project, I'm all in. Music and nature are my go-to sources of inspiration. I've had my experiences that have helped me grow and thrive in engineering while still finding time to recharge in nature.</p>
        
        <p>My passion for learning keep me motivated to push boundaries and explore new possibilities. One can also find me hearing people's experiences, meditating, enjoying nature, listening to music, studying about life and human minds.</p>
      </div>
    </section>
  )
}
