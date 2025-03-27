import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-all duration-300 text-sm font-medium relative";
    const isActive = location.pathname === path;
    
    return `${baseClasses} ${
      isActive 
        ? "text-purple-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-purple-500 after:rounded-full" 
        : "text-gray-300 hover:text-accent-glow"
    }`;
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-full px-6 py-4 border border-white/10 shadow-lg shadow-purple-500/10">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="block"
              >
                <span 
                  className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-400 animate-[shimmer_4s_linear_infinite] drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-all duration-300"
                >
                Avidion
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <Link to="/" className={getLinkClasses("/")}>
                Home
              </Link>
              <Link to="/about" className={getLinkClasses("/about")}>
                About
              </Link>
              <Link to="/services" className={getLinkClasses("/services")}>
                Services
              </Link>
              <Link 
                to="/contact" 
                className="inline-block px-6 py-2 text-white bg-accent hover:bg-accent-glow rounded-full transition-all duration-300 shadow-glow-sm hover:shadow-glow-md hover:scale-105"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-accent-glow focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={`${getLinkClasses("/")} px-3 py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`${getLinkClasses("/about")} px-3 py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/services" 
                  className={`${getLinkClasses("/services")} px-3 py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="mx-3 px-6 py-2 text-white bg-accent hover:bg-accent-glow rounded-full transition-all duration-300 shadow-glow-sm hover:shadow-glow-md hover:scale-105 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;