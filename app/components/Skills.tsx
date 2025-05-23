'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaTools, FaCodeBranch, FaChartLine } from 'react-icons/fa'
import { SiCodeforces, SiCodechef, SiLeetcode, SiGeeksforgeeks, SiLinkedin, SiGithub, SiGo, SiKubernetes } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode className="w-6 h-6" />,
      skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'Go'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Web Development',
      icon: <FaServer className="w-6 h-6" />,
      skills: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Database',
      icon: <FaDatabase className="w-6 h-6" />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools className="w-6 h-6" />,
      skills: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Linux', 'VS Code'],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Competitive Programming',
      icon: <FaCodeBranch className="w-6 h-6" />,
      skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Dynamic Programming'],
      color: 'from-yellow-500 to-yellow-600'
    }
  ]

  const codingProfiles = [
    {
      platform: 'Codeforces',
      icon: <SiCodeforces className="w-8 h-8" />,
      username: 'abhi_0324',
      rating: "Specialist",
      link: 'https://codeforces.com/profile/abhi_0324',
      color: 'from-orange-500 to-orange-600'
    },
    {
      platform: 'CodeChef',
      icon: <SiCodechef className="w-8 h-8" />,
      username: 'abhi0324',
      rating: '3★',
      link: 'https://www.codechef.com/users/abhi0324',
      color: 'from-red-500 to-red-600'
    },
    {
      platform: 'LeetCode',
      icon: <SiLeetcode className="w-8 h-8" />,
      username: 'abhi_0324',
      rating: '500+ Problems',
      link: 'https://leetcode.com/abhi_0324',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      platform: 'GitHub',
      icon: <SiGithub className="w-8 h-8" />,
      username: 'abhi0324',
      rating: '10+ Repositories',
      link: 'https://github.com/abhi0324',
      color: 'from-gray-700 to-gray-900'
    },
    {
      platform: 'Codolio',
      icon: <FaChartLine className="w-8 h-8" />,
      username: 'All-in-One Profile',
      rating: 'Track All Platforms',
      link: 'https://codolio.com/profile/dbZBk44S',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Coding Profiles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {codingProfiles.map((profile, index) => (
              <motion.a
                key={index}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className={`text-white p-3 rounded-lg bg-gradient-to-r ${profile.color} mb-4`}>
                  {profile.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {profile.platform}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  {profile.username}
                </p>
                <p className="text-primary font-medium">
                  {profile.rating}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`p-6 rounded-t-xl bg-gradient-to-r ${category.color}`}>
                <div className="flex items-center space-x-3">
                  <div className="text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 