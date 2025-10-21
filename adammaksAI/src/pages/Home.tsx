import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import './Home.scss';

const heroVariants = {
  hidden: { opacity: 0, y: 42 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 1.1, ease: 'anticipate' }
  })
};

const Home = () => (
  <section className="home-hero glass">
    <div className="hero-content">
      <motion.div initial="hidden" animate="visible" variants={heroVariants} custom={0}>
        <Logo size={68} />
      </motion.div>
      <motion.h1 initial="hidden" animate="visible" variants={heroVariants} custom={1}>
        adammaksAI
      </motion.h1>
      <motion.p className="tagline" initial="hidden" animate="visible" variants={heroVariants} custom={2}>
        Искусство создавать будущее вместе с ИИ.<br/>
        Я – Адам, эксперт по генеративным возможностям, визуалу и масштабным IT-проектам.
      </motion.p>
      <motion.p className="subtitle" initial="hidden" animate="visible" variants={heroVariants} custom={3}>
        От фото и видео генерации до больших интернет-платформ.<br/>
        Ваш заказ — моя инновация и стиль.
      </motion.p>
    </div>
    {/* Здесь будут интерактивные анимационные блоки/портфолио */}
  </section>
);

export default Home;
