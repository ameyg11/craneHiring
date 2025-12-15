import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Users, Target, Clock, Trophy, MapPin, CheckCircle2 } from 'lucide-react';

const About = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-neutral-900 text-white min-h-screen selection:bg-yellow-500 selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed-background"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Dark Overlay */}
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 text-center px-6"
        >
          <div className="inline-block bg-yellow-500 text-black px-4 py-1 font-bold tracking-widest text-sm mb-6">
            EST. 1998
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">We Build Tomorrow</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            For over two decades, ARM Cranes has been the silent partner behind the nation's most ambitious skylines.
          </p>
        </motion.div>
      </div>

      {/* --- OUR STORY SECTION --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-yellow-500 font-mono mb-2">THE JOURNEY</h3>
            <h2 className="text-4xl font-bold mb-6">From a Single Unit to a National Fleet</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                Founded in 1998, ARM Cranes began with a solitary mobile crane and a vision: to bring military-grade precision to the civilian construction sector. 
              </p>
              <p>
                What started in a small depot has grown into the region's largest privately-owned heavy lift fleet. We didn't just buy more cranes; we invested in people, technology, and safety protocols that set new industry benchmarks.
              </p>
              <p>
                Today, we don't just rent equipment. We engineer solutions for complex lifts that others deem impossible.
              </p>
            </div>
          </motion.div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1590059535359-56b1df3df0e2?q=80&w=1000&auto=format&fit=crop" 
              className="rounded-lg h-64 w-full object-cover translate-y-8" 
              alt="Construction Site"
            />
            <img 
              src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=997&auto=format&fit=crop" 
              className="rounded-lg h-64 w-full object-cover" 
              alt="Crane Operator"
            />
          </div>
        </div>
      </section>

      {/* --- CORE VALUES (Grid) --- */}
      <section className="py-24 bg-neutral-800/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Shield className="w-10 h-10" />} 
              title="Uncompromising Safety" 
              desc="We hold a 0.0% incident rate. If it's not safe, we don't lift. Period." 
            />
            <ValueCard 
              icon={<Target className="w-10 h-10" />} 
              title="Precision Engineering" 
              desc="We measure twice, cut once. Every lift is planned with CAD simulations." 
            />
            <ValueCard 
              icon={<Clock className="w-10 h-10" />} 
              title="Reliability" 
              desc="Construction schedules are tight. We guarantee on-time deployment." 
            />
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-20 bg-yellow-500 text-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years Active", val: "25+" },
              { label: "Projects Done", val: "1,200+" },
              { label: "Fleet Size", val: "85" },
              { label: "Team Members", val: "150+" },
            ].map((stat, i) => (
              <div key={i} className="border-r border-black/10 last:border-0">
                <div className="text-5xl font-bold mb-2">{stat.val}</div>
                <div className="font-medium text-black/70 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP / TEAM --- */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet The Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Robert Fox", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" },
            { name: "Sarah Jenkins", role: "Head of Safety", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" },
            { name: "Michael Ross", role: "Fleet Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop" },
          ].map((person, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-neutral-800 rounded-lg overflow-hidden group"
            >
              <div className="h-80 overflow-hidden">
                <img 
                  src={person.img} 
                  alt={person.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6 border-b-4 border-transparent group-hover:border-yellow-500 transition-colors">
                <h3 className="text-xl font-bold">{person.name}</h3>
                <p className="text-yellow-500 text-sm font-mono mt-1">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold mb-6">Ready to work with the best?</h2>
        <Link 
          to="/contact" 
          className="inline-block border border-yellow-500 text-yellow-500 px-10 py-4 font-bold hover:bg-yellow-500 hover:text-black transition-colors"
        >
          CONTACT OUR TEAM
        </Link>
      </section>

    </div>
  );
};

// Helper Component for Values
const ValueCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-neutral-900 p-8 rounded-xl border border-white/5 shadow-lg text-center"
  >
    <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{desc}</p>
  </motion.div>
);

export default About;