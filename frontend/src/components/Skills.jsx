import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGlobe,
  FaCode,
  FaDatabase,
  FaCloud,
  FaBrain,
  FaShieldAlt,
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      icon: <FaGlobe />,
      title: 'Web Development',
      tags: ['MERN Stack', 'RESTful APIs', 'Responsive UI', 'React', 'Node.js', 'Express'],
      level: 90,
    },
    {
      icon: <FaCode />,
      title: 'Programming',
      tags: ['Java', 'Python', 'C', 'TypeScript', 'Data Structures', 'Algorithms'],
      level: 85,
    },
    {
      icon: <FaDatabase />,
      title: 'Databases',
      tags: [ 'MySQL', 'CRUD Operations', 'Indexing', 'Data Modeling'],
      level: 80,
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Computing',
      tags: ['AWS EC2', 'S3', 'IAM', 'RDS', 'Lambda', 'VPC'],
      level: 75,
    },
    {
      icon: <FaBrain />,
      title: 'AI & Data Science',
      tags: ['Machine Learning', 'TensorFlow', 'NLP', 'Data Mining', 'Agent Training'],
      level: 88,
    },
    {
      icon: <FaShieldAlt />,
      title: 'Networking & Security',
      tags: ['Cisco Packet Tracer', 'Cryptography', 'CCNA', 'Network Security'],
      level: 82,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What I Work With
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Technical Skills
        </motion.h2>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="skill-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {skill.icon}
              </motion.div>
              <h3>{skill.title}</h3>
              <div className="skill-level-container">
                <div className="skill-level-bar">
                  <motion.div
                    className="skill-level-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2, ease: 'easeOut' }}
                  />
                </div>
                <span className="skill-level-text">{skill.level}%</span>
              </div>
              <div className="skill-tags">
                {skill.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

