import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HardHat, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <nav 
        className={`
          transition-all duration-300 ease-in-out
          ${isOpen ? 'rounded-3xl bg-black/90' : 'rounded-full bg-black/60'}
          backdrop-blur-md border border-white/10 shadow-2xl
          w-full max-w-5xl
        `}
      >
        <div className="px-6 md:px-8 py-3">
          <div className="flex justify-between items-center h-12">

            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-yellow-500 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <HardHat className="h-6 w-6 text-black" />
              </div>
              <span className="text-xl font-bold text-white tracking-wide">
                ARM<span className="text-yellow-500">CRANES</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {links.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    relative px-5 py-2 rounded-full text-sm font-medium transition-all
                    ${isActive(link.path) 
                      ? 'text-white bg-white/10' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'}
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(234,179,8,0.3)]"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-300 hover:text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown (Animated) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="px-6 pb-6 pt-2 space-y-2">
                {links.map(link => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`
                      flex items-center justify-between p-3 rounded-xl transition-colors
                      ${isActive(link.path) 
                        ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' 
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                    `}
                  >
                    <span className="font-medium">{link.name}</span>
                    {isActive(link.path) && <ChevronRight size={16} />}
                  </Link>
                ))}
                
                <div className="pt-4 mt-2 border-t border-white/10">
                  <Link
                    to="/contact"
                    className="flex justify-center w-full bg-yellow-500 text-black py-3 rounded-xl font-bold"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;