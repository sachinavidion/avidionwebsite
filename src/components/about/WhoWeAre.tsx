import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      <motion.div 
        className="max-w-3xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
          Who We Are
        </h2>
        <motion.div 
          className="glass-card p-8 sm:p-12 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Avidion is a premium software company crafting intelligent websites, 
            mobile apps, and enterprise solutions. With AI integration at the core, 
            we help businesses scale smarter through sleek design, powerful 
            performance, and future-ready technology.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;