import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Weight, CheckCircle2, ChevronRight, Calculator, Truck, HardHat } from 'lucide-react';

// --- DATA: CORE SERVICES ---
const coreServices = [
  {
    id: 1,
    title: "Heavy Lift Rental",
    icon: <Weight className="w-8 h-8" />,
    desc: "Wet and dry hire options for short-term lifts or long-term infrastructure projects. Includes certified operator.",
    features: ["24/7 Support", "Fuel Included", "Insurance Coverage"]
  },
  {
    id: 2,
    title: "3D Lift Planning",
    icon: <Calculator className="w-8 h-8" />,
    desc: "CAD-engineered lift plans to ensure safety and precision before a single piece of equipment arrives on site.",
    features: ["Site Analysis", "Load Calculations", "Risk Assessment"]
  },
  {
    id: 3,
    title: "Heavy Haulage",
    icon: <Truck className="w-8 h-8" />,
    desc: "Specialized logistics to transport massive crane components and industrial machinery across the country.",
    features: ["Permit Handling", "Route Planning", "Pilot Cars"]
  }
];

// --- DATA: CRANE FLEET ---
const craneFleet = [
  {
    id: 101,
    name: "Liebherr LTM 11200",
    category: "All Terrain",
    load: "1,200 Ton",
    boom: "100m",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop",
    desc: "The most powerful telescopic mobile crane in the market. Ideal for wind turbine erection."
  },
  {
    id: 102,
    name: "Demag AC 700-9",
    category: "All Terrain",
    load: "700 Ton",
    boom: "60m",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    desc: "Compact chassis with massive lifting capacity. Perfect for bridge construction and city work."
  },
  {
    id: 201,
    name: "Potain MDT 389",
    category: "Tower",
    load: "16 Ton",
    boom: "75m",
    image: "https://images.unsplash.com/photo-1563286307-e4313b2c1f4e?q=80&w=1587&auto=format&fit=crop",
    desc: "Top-slewing tower crane optimized for high-rise commercial construction sites."
  },
  {
    id: 202,
    name: "Wolff 7534",
    category: "Tower",
    load: "20 Ton",
    boom: "80m",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1974&auto=format&fit=crop",
    desc: "High-performance clear top crane designed for tight urban environments."
  },
  {
    id: 301,
    name: "Manitowoc 16000",
    category: "Crawler",
    load: "400 Ton",
    boom: "96m",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    desc: "Exceptional stability for soft ground conditions. The workhorse of industrial projects."
  }
];

const Services = () => {
  const [filter, setFilter] = useState("All");

  const filteredCranes = filter === "All" 
    ? craneFleet 
    : craneFleet.filter(crane => crane.category.includes(filter));

  return (
    <div className="bg-neutral-900 text-white min-h-screen pb-20 selection:bg-yellow-500 selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <div className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
             {/* Tech Grid Background */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-yellow-500 font-mono tracking-widest mb-4">OUR CAPABILITIES</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">World-Class <br/> Engineering Fleet</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From hydraulic mobile cranes to massive lattice crawlers, we possess the machinery to handle any load, anywhere.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- CORE SERVICES SECTION --- */}
      <div className="container mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-800/50 border border-white/5 p-8 rounded-lg hover:bg-neutral-800 transition-colors group"
            >
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-yellow-500" /> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- FLEET CATALOG SECTION --- */}
      <div className="container mx-auto px-6" id="fleet">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-4xl font-bold mb-2">The Fleet</h2>
            <p className="text-gray-400">Select a category to view specifications.</p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
            {["All", "All Terrain", "Tower", "Crawler"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`
                  px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap
                  ${filter === cat 
                    ? 'bg-yellow-500 text-black' 
                    : 'bg-neutral-800 text-gray-400 hover:text-white hover:bg-neutral-700'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Crane Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCranes.map((crane) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={crane.id}
                className="group bg-neutral-800 rounded-xl overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-colors"
              >
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-xs font-mono text-yellow-500 border border-yellow-500/30">
                    {crane.category.toUpperCase()}
                  </div>
                  <img 
                    src={crane.image} 
                    alt={crane.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-80" />
                  
                  {/* Tech Overlay on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
                     <Link to="/contact" className="bg-yellow-500 text-black px-6 py-3 rounded font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Check Availability
                     </Link>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">{crane.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{crane.desc}</p>
                  
                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-wider mb-1">
                        <Weight className="w-4 h-4" /> Max Load
                      </div>
                      <div className="font-mono text-lg">{crane.load}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-wider mb-1">
                        <Ruler className="w-4 h-4" /> Max Boom
                      </div>
                      <div className="font-mono text-lg">{crane.boom}</div>
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    className="w-full flex items-center justify-between text-sm font-bold text-gray-300 group-hover:text-white transition-colors"
                  >
                    REQUEST DATASHEET <ChevronRight className="w-4 h-4 text-yellow-500" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- CTA BANNER --- */}
      <div className="container mx-auto px-6 mt-32">
        <div className="bg-yellow-500 rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Need a Custom Lift Plan?</h2>
            <p className="text-black/80 text-xl max-w-2xl mx-auto mb-10 font-medium">
              Our engineers use state-of-the-art 3D software to simulate your lift before we deploy, ensuring 100% safety and efficiency.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-neutral-800 transition-transform hover:scale-105"
            >
              Talk to an Engineer
            </Link>
          </div>
          
          {/* Decorative Background Pattern */}
          <HardHat className="absolute -bottom-10 -right-10 w-96 h-96 text-black/5 rotate-[-15deg]" />
        </div>
      </div>

    </div>
  );
};

export default Services;