import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaPlay, FaExternalLinkAlt, FaGithub, FaFilter } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      featured: true,
      date: 'Nov 2024 - Feb 2025',
      title: 'HirePro - Agentic AI Job Application Pipeline',
      description:
        'End-to-end AI pipeline automating job search-to-selection workflows including resume analysis, JD matching, skill-gap feedback, mock-testing and interview simulation.',
      tech: ['Python', 'NLP', 'TensorFlow', 'LangChain', 'React', 'MongoDB', 'AWS'],
      category: 'AI',
      features: [
        'Automated resume analysis and JD matching',
        'Real-time evaluation and candidate feedback',
        'Integrated dashboards for analytics',
      ],
      github: '#',
      live: '#',
    },
    {
      featured: true,
      date: '2024',
      title: 'Fraud Detection Using Deep Learning',
      description:
        'Real-time fraud detection system processing 6.3M+ transactions using Spark with ensemble deep learning models achieving 97% accuracy.',
      tech: ['Apache Spark', 'TensorFlow', 'Python', 'PCA', 'SMOTE'],
      category: 'AI',
      features: [
        'Processed 6.3M+ transactions',
        '97% accuracy, ROC-AUC 0.99',
        'CNN-LSTM + Transformer ensemble',
      ],
      github: '#',
      live: '#',
    },
    {
      featured: false,
      date: 'Jun 2024 - Dec 2024',
      title: 'Lane Marking Estimation',
      description:
        'Computer vision system for lane detection and tracking optimized for real-time autonomous vehicle simulation.',
      tech: ['Python', 'OpenCV', 'Computer Vision'],
      category: 'AI',
      features: [
        'Evaluated on 500+ real-world images',
        'Optimized for real-time processing',
      ],
      github: '#',
      live: '#',
    },
    {
      featured: false,
      date: 'Jan 2025 – Apr 2025',
      title: 'Task Manager System',
      description:
        'Role-based task management tool built with Java and Spring for team collaboration and task monitoring.',
      tech: ['Java', 'Spring', 'REST API'],
      category: 'Web',
      features: [
        'Role-based access control',
        '50+ active users',
        'Increased on-time delivery',
      ],
      github: '#',
      live: '#',
    },
  ];

  const categories = ['all', 'AI', 'Web'];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What I've Built
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="filter-search">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-buttons">
            <FaFilter className="filter-icon" />
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-header">
                {project.featured && (
                  <span className="featured-badge">
                    <FaStar /> Featured
                  </span>
                )}
                <span className="project-date">{project.date}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <ul className="project-features">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <FaPlay className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="project-links">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub /> Code
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaExternalLinkAlt /> Live
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

