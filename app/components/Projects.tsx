'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'JudgeX - Online Coding Platform',
      description: 'Full-stack online judge with real-time code execution for C++, Python, and Java in secure Docker sandboxes. Includes problem management, submissions, leaderboard, and AI-assisted code review.',
      features: [
        'Secure, sandboxed code execution with automated cleanup and error handling',
        'Monaco Editor integration, problem dashboard, submissions and leaderboard',
        '15+ REST APIs with JWT auth for user, problems, and evaluation',
        'Integrated Google Gemini API for automated feedback and review'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'JWT', 'Monaco Editor', 'Google Gemini API', 'AWS EC2'],
      github: null,
      live: null,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'File Sharing Web Application',
      description: 'Full-stack file sharing platform with secure uploads/downloads via unique, shareable links and automatic ID generation for each file.',
      features: [
        'Optimized multipart upload APIs using Express.js and Multer, reducing file I/O latency by ~30%',
        'Frontend built with React, Axios, and Vite using MVC structure, improving build time by ~40% over Webpack',
        'Validated across 50+ upload/download sessions'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Multer', 'Axios', 'Vite', 'REST APIs'],
      github: null,
      live: null,
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'ChromaDraw 1.0',
      description: 'A real-time color tracking application using OpenCV, enabling users to draw using color-detecting objects via webcam. Features HSV-based color segmentation with adjustable trackbars and optimized performance.',
      features: [
        'Implemented HSV-based color segmentation with adjustable trackbars, achieving 90%+ detection accuracy',
        'Optimized performance to maintain 30+ FPS, ensuring smooth & lag-free drawing'
      ],
      technologies: ['Python', 'OpenCV', 'NumPy'],
      github: 'https://github.com/abhi0324/ChromaDraw-1.0',
      live: null,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'To-Do List Application',
      description: 'An interactive To-Do List application with a clean and intuitive interface, enabling efficient task management with features like task completion, deletion, and validation.',
      features: [
        'Optimized DOM manipulation for a 50% smoother user experience',
        'Implemented input validation, preventing empty or duplicate tasks'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
      github: 'https://github.com/abhi0324/Todo-List',
      live: 'https://todo-list-six-chi-32.vercel.app/',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Course-Selling Backend',
      description: 'A scalable backend system for an online course-selling platform with optimized performance, security, and database management.',
      features: [
        'Reduced API response time by 30% using Node.js and Express.js',
        'Secured over 95% of API endpoints using JWT-based authentication',
        'Optimized MongoDB queries, achieving a 40% reduction in database load time'
      ],
      technologies: ['Express.js', 'Node.js', 'JavaScript', 'MongoDB', 'JWT'],
      github: 'https://github.com/abhi0324/Course-Selling-Backend-Application',
      live: null,
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-r ${project.color} relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                {project.features && (
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 