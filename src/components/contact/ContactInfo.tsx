import React from 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const ContactInfo = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="glass-card p-8 sm:p-12 rounded-3xl shadow-glow-md hover:shadow-glow-lg transition-all duration-500"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div className="space-y-8">
            {/* Email */}
            <motion.div 
              className="flex items-start gap-6"
              variants={itemVariants}
            >
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                >
                  <Mail size={24} className="text-accent" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a 
                  href="mailto:avidionsoftwares@gmail.com"
                  className="text-gray-300 hover:text-accent-glow transition-colors duration-300"
                >
                  avidionsoftwares@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div 
              className="flex items-start gap-6"
              variants={itemVariants}
            >
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                >
                  <MapPin size={24} className="text-accent" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Office Address</h3>
                <p className="text-gray-300 mb-4">
                  676, Sector-42, Gurugram,<br />
                  Haryana, India – 122011
                </p>
                <a 
                  href="https://g.co/kgs/Ek6BAV4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-glow transition-colors duration-300"
                >
                  View on Google Maps
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Follow us for updates:</h3>
            <div className="flex justify-center gap-4 text-xl text-gray-300">
              <a href="https://www.linkedin.com/company/avidion" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><FaLinkedin /></a>
              <a href="https://www.facebook.com/avidionai" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><FaFacebook /></a>
              <a href="https://www.instagram.com/avidion.ai" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><FaInstagram /></a>
              <a href="https://maps.app.goo.gl/63vbJf5DTtpBCK5w8" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><FiMapPin /></a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactInfo;
