import React from 'react'
import { motion } from 'framer-motion'
import Card from './ui/Card'

const publications = [
  {
    title: 'Parametric Study of Abrasive Jet Machining on Zirconia',
    publisher: 'Elsevier Publication, MaterialsToday Proceedings',
    date: 'Jan 23, 2023',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S2214785323001980'
  },
  {
    title: 'All Electric Aircraft : A Reality on its Way',
    publisher: 'Elsevier Publication, MaterialsToday Proceedings',
    date: 'Jan 19, 2021',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S2214785320392853'
  },
  {
    title: 'Electric Vehicle: An Approach Towards Sustainability',
    publisher: 'International Journal of Science, Engineering and Technology',
    date: 'Dec 30, 2020',
    url: 'https://www.ijset.in/wp-content/uploads/IJSET_V8_issue5_297.pdf'
  }
]

export default function Publications(){
  return (
    <section id="publications" className="py-8 sm:py-12">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6"
      >
        Publications
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:translate-y-[-6px] transition-all duration-300 hover:shadow-card-lg h-full flex flex-col">
              <div className="font-semibold text-base sm:text-lg mb-2">{pub.title}</div>
              <div className="text-sm sm:text-base text-gray-100 my-2 flex-grow">{pub.publisher}</div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-white/6 px-2 py-1 rounded border border-white/5">
                  {pub.date}
                </span>
              </div>
              <motion.a 
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors" 
              >
                View Publication →
              </motion.a>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

