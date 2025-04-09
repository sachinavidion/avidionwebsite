import React from 'react';
import { motion } from 'framer-motion';

const ServicesHero = () => {
  return (
    <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/serviceshero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay with Blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 backdrop-blur-[2px] z-0" />
      <div className="absolute inset-0 hero-gradient z-0"></div>

      {/* Content */}
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8 animate-float text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-emerald-400 via-purple-500 to-emerald-400 animate-[shimmerServices_0.5s_linear_infinite] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.8)] transition-all duration-300">
          Our Services
        </h1>
        <motion.p 
          className="text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We design and develop intelligent digital solutions that blend AI, 
          performance, and aesthetic excellence — tailored for startups and enterprises.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default ServicesHero;
