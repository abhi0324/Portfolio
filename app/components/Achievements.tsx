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
          title: 'Codeforces',
          details: 'Specialist (1435) rated and solved 700+ problems',
          profile: 'abhi_0324',
          icon: <FaCode className="w-6 h-6" />,
          color: 'from-blue-500 to-blue-600'
        },
        {
          title: 'CodeChef',
          details: '3 star (1665) rated and solved 200+ problems',
          profile: 'abhi0324',
          icon: <FaStar className="w-6 h-6" />,
          color: 'from-red-500 to-red-600'
        },
        {
          title: 'Leetcode',
          details: '1800 rated (Top 8.88%) and solved 550+ problems',
          profile: 'abhi_0324',
          icon: <FaCode className="w-6 h-6" />,
          color: 'from-yellow-500 to-yellow-600'
        }
      ]
    },
    {
      category: 'Competitions & Awards',
      items: [
        {
          title: 'AlgoScholar\'24',
          details: 'Selected among top 70 out of 20,000+ applicants after clearing two coding rounds and one personal interview, receiving a scholarship worth 1 lakh from AlgoUniversity.',
          icon: <FaTrophy className="w-6 h-6" />,
          color: 'from-yellow-500 to-yellow-600'
        },
        {
          title: 'Engineers\' Ring of Honor 2025',
          details: 'Secured AIR 112 and College Rank 2 out of thousands of participants; awarded Rs. 15,000 prize by Naukri Campus.',
          icon: <FaMedal className="w-6 h-6" />,
          color: 'from-gray-400 to-gray-500'
        },
        {
          title: 'Notable Contest Rankings',
          details: [
            '97 in STARTERS142 (CodeChef, Div 3)',
            '103 in STARTERS155 (CodeChef, Div 2)',
            '595/16837 in CodeRush 2023 (Newton School)',
            '1268/1.4L in CodeKaze\'24 (Coding Ninjas)',
            '1777 in Codeforces Round 1008 (Div 2)',
            '2536 in Meta Hacker Cup 2024 Round 1; 3636 in Round 2'
          ],
          icon: <FaAward className="w-6 h-6" />,
          color: 'from-yellow-700 to-yellow-800'
        }
      ]
    },
    {
      category: 'Open Source',
      items: [
        {
          title: 'CNCF Projects',
          details: 'Contributed 7+ merged pull requests across CNCF projects (including OpenKruise).',
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