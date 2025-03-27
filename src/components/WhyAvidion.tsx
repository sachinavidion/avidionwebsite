import React from 'react';
import { Brain, Palette, TrendingUp, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
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

const features = [
  {
    icon: Brain,
    title: 'AI-First Mindset',
    description: 'Leveraging artificial intelligence to create smarter solutions'
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description: 'Creating beautiful, intuitive user experiences'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Tech',
    description: 'Building solutions that grow with your business'
  },
  {
    icon: Building2,
    title: 'Industry Versatility',
    description: 'Expertise across healthtech, edtech, and logistics'
  }
];

const WhyAvidion = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-20 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Why Avidion
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="text-center group glass-card p-8 rounded-3xl hover:shadow-glow-lg transition-shadow duration-500"
            >
              <motion.div 
                className="mb-8 flex justify-center"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    duration: 0.8
                  }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <feature.icon size={40} className="text-accent group-hover:text-accent-glow transition-colors duration-500" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-accent-glow transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAvidion;