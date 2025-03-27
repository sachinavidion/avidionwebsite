import React from 'react';
import { Stethoscope, GraduationCap, Truck } from 'lucide-react';
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

const industries = [
  {
    icon: Stethoscope,
    title: 'HealthTech',
    description: 'Revolutionizing healthcare delivery through technology'
  },
  {
    icon: GraduationCap,
    title: 'EdTech',
    description: 'Transforming education with innovative digital solutions'
  },
  {
    icon: Truck,
    title: 'Logistics',
    description: 'Optimizing supply chains with smart technology'
  }
];

const Industries = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-20 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Industries We Empower
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card p-8 rounded-3xl transition-shadow duration-500 group hover:shadow-glow-lg"
            >
              <motion.div 
                className="mb-8"
                whileHover={{
                  scale: 1.1,
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
                <industry.icon size={40} className="text-accent group-hover:text-accent-glow transition-colors duration-500" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-accent-glow transition-colors duration-500">
                {industry.title}
              </h3>
              <p className="text-gray-400">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;