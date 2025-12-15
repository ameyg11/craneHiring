import React from 'react';
import { HardHat, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <HardHat className="h-8 w-8 text-yellow-500" />
              <span className="text-2xl font-bold tracking-wide">
                ARM<span className="text-yellow-500">CRANES</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Empowering the nation's infrastructure with precision heavy-lifting solutions. 
              Safety, reliability, and engineering excellence since 1998.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-500">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Fleet</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Company</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-500">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Heavy Lift Rental</li>
              <li>3D Lift Planning</li>
              <li>Heavy Haulage</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 ARM Technologies. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;