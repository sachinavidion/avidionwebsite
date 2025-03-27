import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen text-white overflow-hidden flex items-center justify-center text-center px-6">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 backdrop-blur-[1px]" />

      {/* Animated Glow Orb */}
      <motion.div 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-[120vh] h-[120vh] bg-purple-600/10 rounded-full blur-[100px] animate-orb" />
      </motion.div>
      {/* Radial Glow Background */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-purple-600/20 to-transparent opacity-30 blur-2xl animate-pulseGlow pointer-events-none" />

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center opacity-10 z-0 pointer-events-none"
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-center space-y-2 mb-6">
          <motion.div 
            className="text-white drop-shadow-glow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium Software.
          </motion.div>
          <motion.div 
            className="text-white drop-shadow-glow"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Futuristic Vision.
          </motion.div>
          <motion.div 
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 drop-shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            AI at the Core.
          </motion.div>
        </h1>
        
        <motion.p 
          className="text-lg text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Avidion is a premium software development company crafting intelligent websites, 
          mobile apps, and custom software. We blend modern design, AI integration, and 
          high-performance code to build future-ready digital experiences for startups 
          and enterprises worldwide.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Link to="/contact">
          <button className="group inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg shadow-purple-500/30 hover:scale-105 transition-all duration-300">
            Transform Your Idea into Reality
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;