'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      role: 'LFX Mentee - Cloud Native Computing Foundation (CNCF)',
      org: 'OpenKruise · Best Practices for Karmada/OCM Integration',
      location: 'Remote',
      period: 'June 2025 – Aug 2025',
      details: [
        'Created official technical documentation for integrating OpenKruise advanced workloads (CloneSet, Advanced StatefulSet) with multi-cluster orchestration systems Karmada and Open Cluster Management.',
        'Defined best practices, documented supported features and current limitations, and improved integration guidelines adopted by 300+ community contributors and users.',
        'Partnered with CNCF mentors to identify integration issues, contribute potential code fixes, and validate technical accuracy.',
        'Produced 20+ pages of high-quality Markdown documentation aligned with CNCF open-source contribution and documentation standards.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.org}</p>
                </div>
                <div className="text-gray-600 dark:text-gray-300 md:text-right">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside mt-4 space-y-2">
                {exp.details.map((d, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300">{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

