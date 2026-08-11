'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaAward, FaCode, FaStar } from 'react-icons/fa'

interface AchievementItem {
  title: string
  details: string | string[]
  profile?: string
  icon: React.ReactNode
  color: string
}

interface AchievementCategory {
  category: string
  items: AchievementItem[]
}

const Achievements = () => {
  const achievements: AchievementCategory[] = [
    {
      category: 'Competitive Programming',
      items: [
        {
          title: 'ICPC Regionalist (2025)',
          details: 'Qualified for ICPC Amritapuri Regionals, ranking in the top performing teams nationwide.',
          icon: <FaTrophy className="w-6 h-6" />,
          color: 'from-amber-500 to-amber-600'
        },
        {
          title: 'Codeforces Specialist',
          details: 'Specialist rated (1435) in Codeforces competitive programming contests.',
          profile: 'abhi_0324',
          icon: <FaCode className="w-6 h-6" />,
          color: 'from-blue-500 to-blue-600'
        },
        {
          title: 'CodeChef 3★',
          details: '3 star rated (1665) in CodeChef competitive programming contests.',
          profile: 'abhi0324',
          icon: <FaStar className="w-6 h-6" />,
          color: 'from-red-500 to-red-600'
        },
        {
          title: 'LeetCode Knight',
          details: 'Knight badge holder rated 1895 on LeetCode.',
          profile: 'abhi_0324',
          icon: <FaCode className="w-6 h-6" />,
          color: 'from-yellow-500 to-yellow-600'
        }
      ]
    },
    {
      category: 'Competitions & Hackathons',
      items: [
        {
          title: 'Engineers\' Ring of Honor 2025',
          details: 'Secured All India Rank 1 (AIR 1) among thousands of participants; awarded Rs. 20,000 cash prize by Naukri Campus.',
          icon: <FaMedal className="w-6 h-6" />,
          color: 'from-purple-500 to-purple-600'
        },
        {
          title: 'Flipkart GRiD 7.0 (2025)',
          details: 'National Semi-Finalist in Flipkart GRiD 7.0 flagship engineering competition.',
          icon: <FaTrophy className="w-6 h-6" />,
          color: 'from-blue-600 to-indigo-600'
        },
        {
          title: 'Adobe India Hackathon 2025',
          details: 'Advanced to Round 2, placing in the top 1.5% out of 260,000+ participants nationwide.',
          icon: <FaAward className="w-6 h-6" />,
          color: 'from-red-600 to-pink-600'
        },
        {
          title: 'Innovate-A-Thon 3.0 (BIT Mesra)',
          details: 'Finalist in East India\'s biggest Web3 hackathon (2025).',
          icon: <FaAward className="w-6 h-6" />,
          color: 'from-cyan-500 to-teal-600'
        },
        {
          title: 'AlgoScholar\'24',
          details: 'Selected among top 70 out of 100,000+ applicants, receiving a scholarship worth Rs. 1,00,000 by AlgoUniversity.',
          icon: <FaTrophy className="w-6 h-6" />,
          color: 'from-yellow-500 to-yellow-600'
        }
      ]
    },
    {
      category: 'Open Source',
      items: [
        {
          title: 'Open Source Contribution',
          details: 'Merged 20+ pull requests across Cloud Native Computing Foundation (CNCF) and other open-source projects.',
          icon: <FaCode className="w-6 h-6" />,
          color: 'from-green-600 to-emerald-700'
        }
      ]
    }
  ]

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {achievements.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className={`text-white p-3 rounded-lg bg-gradient-to-r ${item.color} mb-4 inline-block`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    {Array.isArray(item.details) ? (
                      <ul className="list-disc list-inside space-y-2">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="text-gray-600 dark:text-gray-300">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.details}
                      </p>
                    )}
                    {item.profile && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Profile: {item.profile}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements 