import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const allExperience = [
  {
    title: 'Assistant Manager',
    company: 'International Tractors Limited',
    location: 'New Delhi, Delhi, India',
    dates: 'Apr 2024 - Present · 1 yr 9 mos',
    year: '2024',
    responsibilities: [
      'Handling After Sales Service for Sonalika Tractor in Nepal market',
      'Leading product improvement initiatives, optimizing service deliveries, training technical work force of dealers in Nepal and maintaining customer satisfaction',
      'Monitoring and analyzing the Spare Parts Business and developing effective service strategies for expanding the network of after sales services',
      'Collaborating and coordinating with cross-functional teams for product testing, product performance improvement and feedback surveys'
    ],
    additionalDetails: []
  },
  {
    title: 'Senior Engineer',
    company: 'International Tractors Limited',
    location: 'New Delhi, Delhi, India',
    dates: 'Apr 2023 - Mar 2024 · 1 yr',
    year: '2023',
    responsibilities: [
      'Provided After Sales Support for South East Asian Countries (Thailand, Malaysia, Philippines, Myanmar, Indonesia, Vietnam, Cambodia and Sri Lanka)',
      'Worked with Yanmar Thailand and Yanmar Philippines to manage a diverse portfolio of international clients',
      'Streamlined customer and dealer care operations, infrastructure development, manpower training, warranty administration and CSI',
      'Established systems, procedures and streamlined various processes in order to ensure a high degree of customer satisfaction across service centers'
    ],
    additionalDetails: []
  },
  {
    title: 'Graduate Engineering Trainee',
    company: 'International Tractors Limited',
    location: 'Hoshiarpur, Punjab, India',
    dates: 'Apr 2022 - Apr 2023 · 1 yr 1 mo',
    year: '2022',
    responsibilities: [
      'Gained detailed learning on the tractor manufacturing and assembly processes in the world\'s largest integrated tractor manufacturing plant in Hoshiarpur, Punjab, India',
      'Assisted in handing the After Sales Support for Asia Market with coordination with various operation teams',
      'Gained experience in Service Issue Diagnosis, Spare Parts Operations and International Business Operations'
    ],
    additionalDetails: []
  },
  {
    title: 'Engineering Intern',
    company: 'Nebico Pvt. Ltd.',
    location: 'Balaju Industrial District, Balaju, Kathmandu, Nepal',
    dates: 'Jan 2022 - Mar 2022 · 3 mos',
    year: '2022',
    responsibilities: [
      'Optimized installation and trials for new machinery in the production house',
      'Addressed technical and engineering issues and performed regular supervision and maintenance with industry protocols',
      'Designed and manufactured machine components for production improvement'
    ],
    additionalDetails: []
  },
  {
    title: 'Undergraduate Research Assistant',
    company: 'Manav Rachna International Institute of Research & Studies',
    location: 'Faridabad, Haryana, India',
    dates: 'Aug 2020 - Dec 2021 · 1 yr 5 mos',
    year: '2021',
    responsibilities: [
      'Conducted literature reviews and gathered data through reviews and experiments',
      'Performed laboratory experiments and maintained detailed records',
      'Managed references and citations, to create bibliographies and ensure accurate referencing in research publications',
      'Assisted in the preparation of research reports, manuscripts, or presentations, and contributing to scientific papers or conference presentations based on the research findings'
    ],
    additionalDetails: []
  }
]

export default function Experience() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const [visibleCount, setVisibleCount] = useState(5)

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const visibleExperience = allExperience.slice(0, visibleCount)
  const hasMore = allExperience.length > visibleCount

  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-[120px] md:left-[140px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400/50 via-orange-400/30 to-transparent" />
      
      <div className="space-y-8">
        {visibleExperience.map((exp, i) => {
          const isExpanded = expandedItems.includes(i)
          const hasDetails = exp.responsibilities && exp.responsibilities.length > 0
          const hasAdditional = exp.additionalDetails && exp.additionalDetails.length > 0

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex gap-6 md:gap-8 items-start"
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-[120px] md:w-[140px] text-right pr-4">
                  <div className="text-sm font-semibold text-orange-400">
                    {exp.year}
                  </div>
                </div>
                <div className="absolute left-[120px] md:left-[140px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-400 border-4 border-[#1a1a1a] shadow-lg" />
              </div>

              {/* Content card */}
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex-1 bg-white/3 p-5 rounded-lg glass hover:bg-white/4 transition-all border border-white/10"
              >
                <div className="font-semibold text-lg text-orange-400 mb-1">
                  {exp.title}
                </div>
                <div className="text-sm text-gray-300 mt-1">
                  {exp.company}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {exp.location}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {exp.dates}
                </div>
                
                {/* Responsibilities */}
                {hasDetails && (
                  <div className="mt-3 space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="text-sm text-gray-100 leading-relaxed">
                        • {resp}
                      </div>
                    ))}
                  </div>
                )}

                {/* Expandable additional details */}
                {hasAdditional && (
                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                      <div className="text-xs font-semibold text-gray-300 mb-2">
                        Additional Details:
                      </div>
                      {exp.additionalDetails.map((detail, idx) => (
                        <div key={idx} className="text-sm text-gray-100 leading-relaxed">
                          • {detail}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* See More/Less button */}
                {hasAdditional && (
                  <button
                    onClick={() => toggleExpand(i)}
                    className="mt-3 flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <span>See Less</span>
                        <ChevronUp size={14} />
                      </>
                    ) : (
                      <>
                        <span>See More</span>
                        <ChevronDown size={14} />
                      </>
                    )}
                  </button>
                )}
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Load More button */}
      {hasMore && (
        <div className="mt-8 flex justify-center">
          <motion.button
            onClick={() => setVisibleCount(prev => prev + 3)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-orange-400/20 hover:bg-orange-400/30 text-orange-400 rounded-lg border border-orange-400/30 transition-all"
          >
            Load More
          </motion.button>
        </div>
      )}
    </div>
  )
}
