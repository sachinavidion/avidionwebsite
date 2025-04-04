import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import AboutHero from '../components/about/AboutHero';
import Mission from '../components/about/Mission';
import WhoWeAre from '../components/about/WhoWeAre';
import Differentiators from '../components/about/Differentiators';

const About = () => {
  return (
    <div className="min-h-screen bg-primary">
      <main>
        <AboutHero />
        <Mission />
        <WhoWeAre />
        <Differentiators />
        <div className="py-16 text-center">
          <p className="text-gray-400 mb-4">Follow our journey</p>
          <div className="flex justify-center gap-4 text-xl text-gray-300">
            <a href="https://www.linkedin.com/company/avidion" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><FaLinkedin /></a>
            <a href="https://www.facebook.com/avidionai" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><FaFacebook /></a>
            <a href="https://www.instagram.com/avidion.ai" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><FaInstagram /></a>
            <a href="https://maps.app.goo.gl/63vbJf5DTtpBCK5w8" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><FiMapPin /></a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
