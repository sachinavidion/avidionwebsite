import React from 'react';
import { Brain, Cloud, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const services = [
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Chatbots, automation, predictive analytics, and smart assistants to enhance business workflows.'
  },
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Move your infrastructure to the cloud with minimal downtime and maximum scalability.'
  },
  {
    icon: BarChart3,
    title: 'Digital Transformation',
    description: 'Upgrade legacy systems, automate processes, and modernize tech infrastructure.'
  }
];

const AIServices = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30 scroll-mt-24" id="ai">
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-20 text-white"
          variants={cardVariants}
        >
          AI & Digital Transformation
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-3xl transition-all duration-500 group hover:shadow-glow-lg"
            >
              <motion.div 
                className="mb-8"
                whileHover={{ 
                  y: [-2, 2, -2],
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 1,
                      ease: "easeInOut"
                    },
                  }
                }}
              >
                <service.icon
                  size={40}
                  className="text-accent group-hover:text-accent-glow transition-all duration-500 transform group-hover:scale-110"
                />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-accent-glow transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AIServices;