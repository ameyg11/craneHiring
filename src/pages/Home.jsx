import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Award, ChevronDown, CheckCircle2, Cog, Anchor } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);
  
  // Global Scroll Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax Transforms
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  // Gear Rotation based on scroll
  const rotateGear = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const moveHook = useTransform(scrollYProgress, [0.1, 0.4], [-100, 0]);

  return (
    <div ref={containerRef} className="bg-neutral-900 text-white selection:bg-yellow-500 selection:text-black overflow-x-hidden">
      
      {/* ==================== HERO SECTION ==================== */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567662591248-865b3397d4ae?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-neutral-900" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div initial={{ width: 0 }} animate={{ width: 60 }} transition={{ duration: 1 }} className="h-1 bg-yellow-500" />
              <span className="text-yellow-500 font-mono tracking-widest uppercase">Heavy Infrastructure</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-none mb-8">
              LIFTING THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">
                IMPOSSIBLE
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mb-10 font-light leading-relaxed">
              We provide the backbone for the nation's largest construction projects. 
              Precision engineering meets heavy-duty performance.
            </p>
            
            <Link to="/contact" className="inline-flex items-center gap-2 bg-yellow-500 text-black px-8 py-4 font-bold hover:bg-white transition-colors">
              Get Project Estimate <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Moving Gear Decoration */}
        <motion.div style={{ rotate: rotateGear }} className="absolute -right-20 bottom-20 opacity-10 pointer-events-none">
          <Cog className="w-96 h-96 text-white" />
        </motion.div>
      </div>


      {/* ==================== STATS RIBBON ==================== */}
      <div className="relative z-20 container mx-auto px-6 -mt-20">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-neutral-800/80 backdrop-blur-md border border-white/10 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-2xl"
        >
          {[
            { num: "500+", text: "Active Projects" },
            { num: "100%", text: "ISO Certified" },
            { num: "50+", text: "Mega Cranes" },
            { num: "24/7", text: "Emergency Response" },
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{item.num}</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>


      {/* ==================== MOVING CRANE PARALLAX SECTION ==================== */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
          
          <div className="md:w-1/2">
            <h3 className="text-yellow-500 font-mono mb-4">OUR FLEET CAPABILITIES</h3>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Engineered for <br/> Extreme Heights</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              From tight urban spaces to massive industrial complexes, our fleet adapts to your environment. 
              Our crawler cranes offer exceptional stability, while our tower cranes dominate the skyline.
            </p>
            <Link to="/services" className="text-white border-b border-yellow-500 pb-1 hover:text-yellow-500 transition-colors">
              Explore Crane Types
            </Link>
          </div>

          {/* The Moving Image Parallax */}
          <div className="md:w-1/2 relative h-[600px] w-full">
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dp" 
              alt="Tower Crane"
              speed={0.2} // Moves slower than scroll
            />
            {/* Overlay Hook Animation */}
            <motion.div 
              style={{ y: moveHook }}
              className="absolute -top-20 -left-20 z-20 hidden md:block"
            >
              <div className="bg-yellow-500 p-4 rounded-full shadow-xl">
                 <Anchor className="w-12 h-12 text-black" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ==================== PROCESS SECTION (Horizontal Feeling) ==================== */}
      <section className="py-32 bg-white text-black relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The ARM Workflow</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-0" />

            {[
              { title: "Consultation", desc: "We analyze your site blueprints and load requirements." },
              { title: "Deployment", desc: "Our logistics team handles permits and heavy transport." },
              { title: "Execution", desc: "Certified operators ensure a safe and precise lift." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 bg-white p-8 border border-gray-100 shadow-xl"
              >
                <div className="w-24 h-24 bg-black text-yellow-500 flex items-center justify-center text-3xl font-bold mb-6 rounded-none mx-auto">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ==================== DARK GRID FEATURES ==================== */}
      <section className="py-32 bg-neutral-900 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="text-4xl font-bold">Why Industry Leaders <br/> Trust Us</h2>
            <Link to="/about" className="text-yellow-500 font-bold hover:text-white transition-colors mt-4 md:mt-0">
              Read our story &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-black" />}
              title="100% Safety Record"
              desc="Rigorous maintenance protocols and daily inspections ensure zero downtime."
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-black" />}
              title="Rapid Mobilization"
              desc="Strategic depots allow us to deploy to your site within 24 hours."
            />
            <FeatureCard 
              icon={<Award className="w-8 h-8 text-black" />}
              title="Certified Operators"
              desc="NCCCO certified professionals with minimum 5 years field experience."
            />
          </div>
        </div>
      </section>


      {/* ==================== GIANT CTA ==================== */}
      <section className="relative py-32 bg-yellow-500 text-black overflow-hidden">
        {/* Animated Background Text */}
        <motion.div 
          style={{ x: useTransform(scrollYProgress, [0.5, 1], ["0%", "-50%"]) }}
          className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap opacity-10 font-black text-[20rem] pointer-events-none select-none"
        >
          BUILD HIGHER BUILD STRONGER
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">READY TO START?</h2>
          <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
            Don't let equipment delays stall your project. Contact our dispatch team now.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/contact" 
              className="bg-black text-white px-12 py-6 text-xl font-bold shadow-2xl hover:bg-neutral-800 transition-colors inline-block"
            >
              Get Your Quote Now
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

// --- SUB-COMPONENTS ---

// 1. Feature Card
const FeatureCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-neutral-800 p-8 border border-white/5 group hover:bg-neutral-700 transition-colors"
  >
    <div className="bg-yellow-500 w-16 h-16 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{desc}</p>
  </motion.div>
);

// 2. Parallax Image Component (The "Moving Crane")
const ParallaxImage = ({ src, alt, speed = 0.5 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Creates the "moving" effect relative to the frame
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="overflow-hidden h-full w-full rounded-sm relative">
      <motion.img 
        style={{ y }}
        src={src} 
        alt={alt}
        className="object-cover w-full h-[120%] absolute -top-[10%]" 
      />
    </div>
  );
};

export default Home;