'use client'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const education = [
    {
      school: 'Indian Institute of Information Technology, Agartala',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      period: '2023 – 2027',
      details: 'CGPA: 8.87'
    },
    {
      school: 'Shri Ram Public School, Basti',
      degree: 'Senior Secondary (XII)',
      period: '2021 – 2022',
      details: 'Percentage: 90'
    },
    {
      school: 'Shri Ram Public School, Basti',
      degree: 'Secondary (X)',
      period: '2019 – 2020',
      details: 'Percentage: 93.8'
    }
  ]

  const responsibilities = [
    {
      role: 'Mentor, Developers and Coders Club (DCC), NIT-A',
      period: 'Feb 2025 – Present',
      details: [
        'Mentored 10+ members, designing personalized DSA roadmaps and improving their problem-solving efficiency.',
        'Led 5+ mentorship sessions on contest strategies, optimization techniques, and problem-solving approaches.'
      ]
    },
    {
      role: 'Core Member, CODE Club, IIIT-A',
      period: 'Sep 2024 – Present',
      details: [
        'Managed 10+ club activities and organized 5+ events, fostering a dynamic and engaging coding community.'
      ]
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {edu.school}
                  </h4>
                  <p className="text-primary font-medium">{edu.degree}</p>
                  <p className="text-gray-600 dark:text-gray-300">{edu.period}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Positions of Responsibility */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Positions of Responsibility
            </h3>
            <div className="space-y-6">
              {responsibilities.map((role, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {role.role}
                  </h4>
                  <p className="text-primary font-medium">{role.period}</p>
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    {role.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 