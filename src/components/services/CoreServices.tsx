import React from 'react';
import { Globe, Smartphone, Code2, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
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
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom websites, interactive UI, high-performance, SEO-ready design.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Android & iOS apps using modern tech, scalable and feature-rich.'
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'End-to-end software tailored for your unique workflows and goals.'
  },
  {
    icon: Laptop,
    title: 'Progressive Web Apps',
    description: 'Web apps that work offline, feel native, and are lightning-fast.'
  }
];

const CoreServices = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-20 text-white"
          variants={cardVariants}
        >
          Core Development Services
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const sectionId = index === 0 ? 'website' : index === 1 ? 'mobile' : '';
            return (
            <motion.div
              key={index}
              id={sectionId}
              variants={cardVariants}
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
                  <service.icon
                    size={40}
                    className="text-accent group-hover:text-accent-glow transition-colors duration-500"
                  />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-accent-glow transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )})}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoreServices;