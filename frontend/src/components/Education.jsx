import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      date: '2022 - Present',
      degree: 'B.Tech in Computer Science',
      institution: 'Vignan University',
      grade: 'CGPA: 7.43/10',
      current: true,
    },
    {
      date: '2020 - 2022',
      degree: 'Intermediate',
      institution: 'Vignan Co-operative Junior College',
      grade: '87%',
      current: false,
    },
  ];

  const certifications = [
    { name: 'B2-Level English Certificate', issuer: 'Cambridge Assessment English' },
    {
      name: 'CCNA Enterprise Networking, Security, Routing Wireless',
      issuer: 'Cisco Networking Academy',
    },
    { name: 'Generative AI', issuer: 'Google Cloud Skills Boost' },
    { name: 'Python Essentials 1', issuer: 'Cisco Python Institute' },
    { name: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy' },
    { name: 'Career Edge Young Professional', issuer: 'TCS ION' },
  ];

  return (
    <section id="education" className="education-certifications">
      <div className="container">
        <div className="edu-cert-grid">
          <motion.div
            className="education-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-header">
              <FaGraduationCap className="section-icon" />
              <h2>Education</h2>
            </div>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className={`edu-card ${edu.current ? 'current' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ x: 10 }}
              >
                <div className="edu-timeline"></div>
                <div className="edu-content">
                  <span className="edu-date">{edu.date}</span>
                  <h3>{edu.degree}</h3>
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-grade">{edu.grade}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="certifications-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-header">
              <FaCheckCircle className="section-icon" />
              <h2>Certifications</h2>
            </div>
            <div className="cert-list">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="cert-item"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <FaCheckCircle className="cert-icon" />
                  <div className="cert-content">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

