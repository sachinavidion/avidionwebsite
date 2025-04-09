import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { BsWhatsapp } from 'react-icons/bs';

const ServiceLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isServicesPage = location.pathname === '/services';
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isServicesPage) {
      const element = document.getElementById(to);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/services#${to}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a
      href={`/services#${to}`}
      onClick={handleClick}
      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
    >
      {children}
    </a>
  );
};

const Footer = () => {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="glass-card text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300 max-w-6xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold mb-8">Avidion</h3>
          <div className="space-y-4">
            <a 
              href="mailto:info@avidion.ai"
              className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <Mail size={20} />
              info@avidion.ai
            </a>
            <a
  href="https://wa.me/919896584099" 
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors duration-300"
>
  <BsWhatsapp size={20} />
  +91 9896584099
</a>

            <a
              href="https://maps.app.goo.gl/63vbJf5DTtpBCK5w8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <MapPin size={20} />
              676, Sector-42, Gurugram, Haryana, India
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-3">
            <li><Link to="/" onClick={handleNavClick} className="block mb-2 text-gray-300 hover:text-purple-400 transition">Home</Link></li>
            <li><Link to="/about" onClick={handleNavClick} className="block mb-2 text-gray-300 hover:text-purple-400 transition">About</Link></li>
            <li><Link to="/services" onClick={handleNavClick} className="block mb-2 text-gray-300 hover:text-purple-400 transition">Services</Link></li>
            <li><Link to="/contact" onClick={handleNavClick} className="block mb-2 text-gray-300 hover:text-purple-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-3">
            <li><ServiceLink to="website">Website Development</ServiceLink></li>
            <li><ServiceLink to="mobile">Mobile Apps</ServiceLink></li>
            <li><ServiceLink to="custom">Custom Software</ServiceLink></li>
            <li><ServiceLink to="ai">AI Integration</ServiceLink></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
        <div className="flex flex-col items-center gap-2 mt-6">
          <span className="text-sm text-gray-400">Connect with us</span>
          <div className="flex gap-4 text-xl text-gray-300">
            <a href="https://www.linkedin.com/company/avidion" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><FaLinkedin /></a>
            <a href="https://www.facebook.com/avidionai" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><FaFacebook /></a>
            <a href="https://www.instagram.com/avidion.ai" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><FaInstagram /></a>
            <a href="https://maps.app.goo.gl/63vbJf5DTtpBCK5w8" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><FiMapPin /></a>
          </div>
        </div>
        <p className="mt-6">&copy; {new Date().getFullYear()} Avidion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
