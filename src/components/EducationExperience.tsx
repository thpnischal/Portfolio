import React, { useState } from 'react'
import { motion } from 'framer-motion'

const allEducation = [
  {
    degree: "Bachelor of Technology in Mechanical Engineering",
    institution: 'Manav Rachna International Institute of Research & Studies',
    location: 'Faridabad, Haryana, India',
    dates: '2018 - 2022',
    year: '',
    gpa: undefined,
    relevantCourses: undefined,
    achievements: [
      'Courses: Fluid Mechanics, Thermodynamic, Heat Transfer, Strength of Materials, Machine Design, Calculus, Manufacturing Techniques',
    ]
  },
  {
    degree: '+2 Level, Science',
    institution: 'Kathmandu Model Secondary School',
    location: 'Kathmandu, Nepal',
    dates: '2015 - 2017',
    year: '',
    gpa: undefined,
    relevantCourses: undefined,
    achievements: [
      'Courses- Mathematics, Physics, Chemistry, Literature, Computer Science'
    ]
  },
  // {
  //   degree: 'School Leaving Certificate (SLC)',
  //   institution: 'Ever Vision School',
  //   location: 'Kathmandu, Nepal',
  //   dates: undefined,
  //   year: '',
  //   gpa: undefined,
  //   relevantCourses: undefined,
  //   achievements: [
  //     'School Captain - organized events, provided guidance, participated in decision-making'
  //   ]
  // }
]

const allExperience = [
  {
    title: 'Country Service Manager',
    company: 'International Tractors Limited',
    location: 'New Delhi, India',
    dates: 'Apr 2022 - Present · 3 yr 9 mos',
    year: '',
    responsibilities: [
      'Handling After Sales Service for Sonalika Tractor in Nepal market',
      'Leading product improvement initiatives, optimizing service deliveries, training technical work force of dealers in Nepal and maintaining customer satisfaction',
      'Monitoring and analyzing the Spare Parts Business and developing effective service strategies for expanding the network of after sales services',
      'Collaborating and coordinating with cross-functional teams for product testing, product performance improvement and feedback surveys'
    ]
  },
  {
    title: 'Engineering Intern',
    company: 'Nebico Private Limited',
    location: 'Kathmandu, Nepal',
    dates: 'Jan 2022 - Mar 2022 · 3 mos',
    year: '',
    responsibilities: [
      'Conducted routine supervision, maintenance, and troubleshooting of production machinery, ensuring compliance with industry standards and protocols',
      'Led the installation and trial operations of new equipment, addressing all engineering issues to optimize production efficiency',
    ]
  },
  {
    title: 'Undergraduate Research Assistant',
    company: 'Manav Rachna International Institute of Research and Studies',
    location: 'Faridabad, India',
    dates: 'Aug 2020 - Dec 2021 · 5 mos',
    year: '',
    responsibilities: [
      'Performed comprehensive literature reviews to identify research gaps and gather relevant data, while conducting laboratory experiments for data collection and analysis',
      'Assisted in drafting research reports, manuscripts, and presentations, contributing to scientific publications and conference presentations based on research outcomes',
    ]
  }
]

export default function EducationExperience() {
  const [selectedEducation, setSelectedEducation] = useState<number>(0)
  const [selectedExperience, setSelectedExperience] = useState<number>(0)

  return (
    <section id="education-experience" className="py-8 sm:py-12 space-y-12 sm:space-y-16">
      {/* Education Section */}
      <div>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8"
        >
          Education
        </motion.h3>
        
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Left: Selectable Education Titles */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="relative pl-6 sm:pl-8">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400/50 via-orange-400/30 to-transparent" />
              
              <div className="space-y-3 sm:space-y-4">
                {allEducation.map((edu, index) => {
                  const isActive = selectedEducation === index
                  return (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedEducation(index)}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`relative w-full text-left p-3 sm:p-4 rounded-lg transition-all ${
                        isActive
                          ? 'bg-white/5 border border-orange-400/50 shadow-[0_0_20px_rgba(251,146,60,0.2)]'
                          : 'bg-white/3 border border-white/10 hover:bg-white/4 hover:border-orange-400/30'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Timeline dot */}
                      <div className={`absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all ${
                        isActive
                          ? 'bg-orange-400 border-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.5)]'
                          : 'bg-[#1a1a1a] border-orange-400/50'
                      }`} />
                      
                      <div className="text-sm font-semibold text-gray-100">
                        {edu.degree}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {edu.year}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: Education Details */}
          <motion.div
            key={selectedEducation}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 bg-white/3 p-4 sm:p-6 rounded-lg glass border border-white/10"
          >
            {allEducation[selectedEducation] && (
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="font-semibold text-base sm:text-lg text-orange-400 mb-1">
                    {allEducation[selectedEducation].degree}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">
                    {allEducation[selectedEducation].institution}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {allEducation[selectedEducation].location}
                  </div>
                  {allEducation[selectedEducation].dates && (
                    <div className="text-xs text-gray-400 mt-1">
                      {allEducation[selectedEducation].dates}
                      {allEducation[selectedEducation].gpa && ` · GPA: ${allEducation[selectedEducation].gpa}`}
                    </div>
                  )}
                </div>
                
                {allEducation[selectedEducation].relevantCourses && (
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs font-semibold text-gray-300 mb-2">
                      Relevant Courses:
                    </div>
                    <div className="text-xs text-gray-400">
                      {allEducation[selectedEducation].relevantCourses.join(', ')}
                    </div>
                  </div>
                )}

                {allEducation[selectedEducation].achievements && allEducation[selectedEducation].achievements.length > 0 && (
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs text-gray-300 leading-relaxed space-y-1">
                      {allEducation[selectedEducation].achievements.map((achievement, idx) => (
                        <div key={idx}>{achievement}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8"
        >
          Experience
        </motion.h3>
        
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Left: Selectable Experience Titles */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="relative pl-6 sm:pl-8">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400/50 via-orange-400/30 to-transparent" />
              
              <div className="space-y-3 sm:space-y-4">
                {allExperience.map((exp, index) => {
                  const isActive = selectedExperience === index
                  return (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedExperience(index)}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`relative w-full text-left p-3 sm:p-4 rounded-lg transition-all ${
                        isActive
                          ? 'bg-white/5 border border-orange-400/50 shadow-[0_0_20px_rgba(251,146,60,0.2)]'
                          : 'bg-white/3 border border-white/10 hover:bg-white/4 hover:border-orange-400/30'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Timeline dot */}
                      <div className={`absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all ${
                        isActive
                          ? 'bg-orange-400 border-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.5)]'
                          : 'bg-[#1a1a1a] border-orange-400/50'
                      }`} />
                      
                      <div className="text-sm font-semibold text-gray-100">
                        {exp.title}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {exp.year}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: Experience Details */}
          <motion.div
            key={selectedExperience}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 bg-white/3 p-4 sm:p-6 rounded-lg glass border border-white/10"
          >
            {allExperience[selectedExperience] && (
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="font-semibold text-base sm:text-lg text-orange-400 mb-1">
                    {allExperience[selectedExperience].title}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">
                    {allExperience[selectedExperience].company}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {allExperience[selectedExperience].location}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {allExperience[selectedExperience].dates}
                  </div>
                </div>
                
                {allExperience[selectedExperience].responsibilities && allExperience[selectedExperience].responsibilities.length > 0 && (
                  <div className="pt-3 sm:pt-4 border-t border-white/10 space-y-2">
                    {allExperience[selectedExperience].responsibilities.map((resp, idx) => (
                      <div key={idx} className="text-sm text-gray-100 leading-relaxed">
                        • {resp}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
