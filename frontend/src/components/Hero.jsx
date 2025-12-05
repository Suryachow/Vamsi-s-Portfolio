import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import Typed from 'typed.js';
import './Hero.css';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Aspiring Software Engineer',
        'Full-Stack Developer',
        'AI/ML Enthusiast',
        'Problem Solver',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-text"
        >
          <motion.p className="greeting" variants={itemVariants}>
            Hello, I'm
          </motion.p>
          
          <motion.h1 className="name gradient-text glow-effect" variants={itemVariants}>
            Vamsi Patibandla
          </motion.h1>
          
          <motion.div className="title-container" variants={itemVariants}>
            <h2 className="title">
              <span ref={typedRef}></span>
            </h2>
          </motion.div>

          <motion.p className="description" variants={itemVariants}>
            Skilled in <strong>Java</strong>, <strong>Python</strong>, and the{' '}
            <strong>MERN stack</strong>, with hands-on experience in full-stack
            development, distributed computing, and machine-learning-based
            applications. Passionate about building scalable solutions and
            solving real-world problems.
          </motion.p>

          <motion.div
            className="contact-info"
            variants={itemVariants}
          >
            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="contact-icon" />
              <span>patibandlasurya9989@gmail.com</span>
            </motion.div>
            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone className="contact-icon" />
              <span>+91 9989313989</span>
            </motion.div>
            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaMapMarkerAlt className="contact-icon" />
              <span>Guntur, Andhra Pradesh</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="social-links"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTelegram />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

