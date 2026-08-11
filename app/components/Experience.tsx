'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      role: 'Software Development Engineer Intern',
      org: 'Clappia | No-Code Platform',
      location: 'Bengaluru, Karnataka',
      period: 'May 2026 – Aug 2026',
      details: [
        'Delivered 10+ full-stack features across a microservices architecture for Clappia’s on-premise deployment, achieving feature parity with the AWS cloud platform.',
        'Architected an on-premises Analytics service from scratch with 20+ REST endpoints backed by Elasticsearch and migrated 25+ legacy Lambda endpoints in the App Definition Service to Express.js, enabling self-serve app design for on-prem customers.',
        'Engineered real-time infrastructure across 7+ microservices: synchronized Workflow Designer node definitions across MySQL and Kestra for live execution, and implemented a WebSocket-based bulk data export pipeline with live progress tracking across concurrent sessions.',
        'Strengthened platform security and reliability by shipping Email OTP authentication and encrypted SMTP/credential handling, while automating Docker image cleanup/log rotation; introducing a shared TypeScript config across 3 client apps.'
      ]
    },
    {
      role: 'LFX Mentee (Open Source Contributor)',
      org: 'Cloud Native Computing Foundation (CNCF) - OpenKruise',
      location: 'Remote',
      period: 'Jun 2025 – Aug 2025',
      details: [
        'Authored official documentation for integrating OpenKruise with multi-cluster systems Karmada and Open Cluster Management, reducing setup time by 40% and improving adoption across 300+ users and contributors.',
        'Collaborated with CNCF mentors to resolve integration issues and contribute optimized code, improving system performance by 25% and accelerating deployment cycles.'
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

