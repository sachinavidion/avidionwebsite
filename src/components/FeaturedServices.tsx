import React from 'react';
import { Brain, Cuboid, Code, Smartphone } from 'lucide-react';
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
  hidden: { opacity: 0, y: 30 },
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

const services = [
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Enhance your applications with cutting-edge artificial intelligence capabilities.'
  },
  {
    icon: Cuboid,
    title: '3D & Animated Websites',
    description: 'Create immersive web experiences with stunning 3D elements and animations.'
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Build scalable, custom software solutions tailored to your business needs.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Develop powerful, user-friendly mobile applications for iOS and Android.'
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-transparent" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-20 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8 }}
        >
          What We Do
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group glass-card p-8 rounded-3xl transition-all duration-500 hover:shadow-glow-lg"
            >
              <motion.div 
                className="mb-6"
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
      </div>
    </section>
  );
};

export default FeaturedServices;