import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const allEducation = [
  {
    degree: "Bachelor's degree, Mechanical Engineering",
    institution: 'Manav Rachna International Institute of Research & Studies',
    location: 'Faridabad, Haryana, India',
    dates: '2018 - 2022',
    year: '2018',
    gpa: undefined,
    relevantCourses: undefined,
    description: undefined,
    achievements: [
      'Activities: Innoskill, Wordnerd, Rongoli Competition',
      'Organized Symposiums and Seminars'
    ]
  },
  {
    degree: '+2 Level, Science',
    institution: 'Kathmandu Model Secondary School',
    location: 'Kathmandu, Nepal',
    dates: '2015 - 2017',
    year: '2015',
    gpa: undefined,
    relevantCourses: undefined,
    description: undefined,
    achievements: [
      'Class Representative - liaison between students and administration'
    ]
  },
  {
    degree: 'School Leaving Certificate (SLC)',
    institution: 'Ever Vision School',
    location: 'Kathmandu, Nepal',
    dates: undefined,
    year: '2014',
    gpa: undefined,
    relevantCourses: undefined,
    description: undefined,
    achievements: [
      'School Captain - organized events, provided guidance, participated in decision-making'
    ]
  }
]

export default function Education() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const [visibleCount, setVisibleCount] = useState(3)

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const visibleEducation = allEducation.slice(0, visibleCount)
  const hasMore = allEducation.length > visibleCount

  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-[120px] md:left-[140px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400/50 via-orange-400/30 to-transparent" />
      
      <div className="space-y-8">
        {visibleEducation.map((edu, i) => {
          const isExpanded = expandedItems.includes(i)
          const hasDetails = edu.description

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
                    {edu.year}
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
                  {edu.degree}
                </div>
                <div className="text-sm text-gray-300 mt-1">
                  {edu.institution}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {edu.location}
                </div>
                {edu.dates && (
                  <div className="text-xs text-gray-400 mt-1">
                    {edu.dates}
                    {edu.gpa && ` · GPA: ${edu.gpa}`}
                  </div>
                )}
                {edu.relevantCourses && (
                  <div className="mt-3">
                    <div className="text-xs font-semibold text-gray-300 mb-2">
                      Relevant Courses:
                    </div>
                    <div className="text-xs text-gray-400">
                      {edu.relevantCourses.join(', ')}
                    </div>
                  </div>
                )}

                {/* Activities/Achievements - shown directly */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-3">
                    <div className="text-xs text-gray-300 leading-relaxed">
                      {edu.achievements.map((achievement, idx) => (
                        <div key={idx} className="mb-1">{achievement}</div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expandable details */}
                {hasDetails && (
                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                      {edu.description && (
                        <div>
                          <div className="text-xs font-semibold text-gray-300 mb-1">
                            Description:
                          </div>
                          <div className="text-xs text-gray-400 leading-relaxed">
                            {edu.description}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* See More/Less button */}
                {hasDetails && (
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
            onClick={() => setVisibleCount(prev => prev + 2)}
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

