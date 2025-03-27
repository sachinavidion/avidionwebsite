import React from 'react';
import { Brain, Palette, Scale, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      mass: 1
    }
  }
};

const differentiators = [
  {
    icon: Brain,
    title: 'AI-First Mindset',
    description: 'Smart features built from the ground up with artificial intelligence in mind.'
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description: 'Clean, intuitive, and user-centered design that feels futuristic and premium.'
  },
  {
    icon: Scale,
    title: 'Scalable Tech',
    description: 'Solutions built for long-term growth with robust architecture and flexibility.'
  },
  {
    icon: Building2,
    title: 'Industry Versatility',
    description: 'Experience in diverse industries like HealthTech, EdTech, and Logistics.'
  }
];

const Differentiators = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-20 text-white"
          variants={itemVariants}
        >
          What Sets Us Apart
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-3xl transition-all duration-500 group hover:shadow-glow-lg"
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                >
                  <item.icon
                    size={40}
                    className="text-accent group-hover:text-accent-glow transition-colors duration-500"
                  />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-accent-glow transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Differentiators;