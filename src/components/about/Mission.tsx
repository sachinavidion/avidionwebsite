import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
          Our Mission
        </h2>
        <motion.p 
          className="text-lg sm:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          To empower startups and enterprises with intelligent digital experiences 
          by blending AI, modern design, and high-performance technology — built 
          for scale and impact.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Mission;