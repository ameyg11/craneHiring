import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Send, AlertTriangle, CheckCircle2, 
  Clock, ArrowRight, Loader2, HardHat 
} from 'lucide-react';

const Contact = () => {
  const [isUrgent, setIsUrgent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // React Hook Form setup
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm();

  // Simulate API Submission
  const onSubmit = async (data) => {
    // In a real app, you would send 'data' to your backend here
    await new Promise(resolve => setTimeout(resolve, 2000)); // Fake delay
    console.log(data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className={`min-h-screen text-white transition-colors duration-700 ${isUrgent ? 'bg-red-950/30 selection:bg-red-500' : 'bg-neutral-900 selection:bg-yellow-500'}`}>
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute inset-0 transition-opacity duration-700 ${isUrgent ? 'opacity-20 bg-red-900' : 'opacity-10 bg-neutral-800'}`}>
           {/* Grid Pattern */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className={`h-2 w-2 rounded-full ${isUrgent ? 'bg-red-500 animate-ping' : 'bg-green-500'}`} />
            <span className="font-mono text-sm tracking-widest uppercase text-gray-400">
              {isUrgent ? "EMERGENCY DISPATCH CHANNEL" : "Project Inquiry Portal"}
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Get To <span className={isUrgent ? "text-red-500" : "text-yellow-500"}>Work.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Whether you need a complex lift plan or an emergency crane deployment, 
            our logistics team is ready to mobilize.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* --- LEFT COLUMN: INFO & MAP --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <ContactCard 
                icon={<Phone className={isUrgent ? "text-red-500" : "text-yellow-500"} />}
                title="24/7 Dispatch"
                value="+1 (800) 555-CRANE"
                urgent={isUrgent}
              />
              <ContactCard 
                icon={<Mail className={isUrgent ? "text-red-500" : "text-yellow-500"} />}
                title="Project Quotes"
                value="bids@armcranes.com"
                urgent={isUrgent}
              />
            </div>

            {/* Stylized Map / HQ */}
            <div className="bg-neutral-800 rounded-2xl p-1 overflow-hidden border border-white/5 relative h-80 group">
              <div className="absolute inset-0 bg-neutral-900">
                {/* Fake Map Grid */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                {/* Pulsing HQ Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                   <div className={`w-4 h-4 rounded-full ${isUrgent ? 'bg-red-500 shadow-[0_0_20px_red]' : 'bg-yellow-500 shadow-[0_0_20px_yellow]'} animate-pulse`} />
                   <div className="mt-2 text-xs font-mono bg-black px-2 py-1 rounded border border-white/10">HQ: CENTRAL DEPOT</div>
                </div>

                {/* Animated Routes */}
                <motion.div 
                  animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent origin-left rotate-45"
                />
                 <motion.div 
                  animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                  className="absolute top-1/2 left-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent origin-left -rotate-12"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur p-4 rounded-lg border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="text-gray-400 w-5 h-5" />
                  <div>
                    <div className="text-sm font-bold text-white">Main Headquarters</div>
                    <div className="text-xs text-gray-400">123 Industrial Blvd, Sector 7</div>
                  </div>
                </div>
                <div className="text-green-500 text-xs font-mono border border-green-500/30 px-2 py-1 rounded bg-green-500/10">
                  OPEN
                </div>
              </div>
            </div>

            {/* Emergency Toggle Description */}
            <div className="bg-neutral-800/50 p-6 rounded-xl border border-white/5">
              <h3 className="font-bold flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-gray-400" /> Response Times
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex justify-between">
                  <span>Standard Quote:</span>
                  <span className="text-white">Within 24 Hours</span>
                </li>
                <li className="flex justify-between">
                  <span>Urgent Mobilization:</span>
                  <span className={isUrgent ? "text-red-500 font-bold" : "text-white"}>Within 2 Hours</span>
                </li>
              </ul>
            </div>

          </motion.div>

          {/* --- RIGHT COLUMN: THE FORM --- */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4 }}
             className={`relative bg-neutral-800 p-8 rounded-3xl border transition-colors duration-500 ${isUrgent ? 'border-red-500/50 shadow-[0_0_50px_rgba(239,68,68,0.1)]' : 'border-yellow-500/20 shadow-2xl'}`}
          >
            {/* Emergency Switch */}
            <div className="absolute -top-6 right-8">
              <label className="flex items-center gap-3 bg-black border border-white/10 px-4 py-2 rounded-full cursor-pointer hover:border-white/30 transition-colors shadow-lg">
                <span className={`text-xs font-bold uppercase tracking-wider ${isUrgent ? 'text-red-500' : 'text-gray-400'}`}>
                  {isUrgent ? "Urgent Mode" : "Standard Mode"}
                </span>
                <div 
                  className={`w-10 h-5 rounded-full relative transition-colors ${isUrgent ? 'bg-red-600' : 'bg-gray-600'}`}
                  onClick={() => setIsUrgent(!isUrgent)}
                >
                  <div className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${isUrgent ? 'translate-x-5' : 'translate-x-0'}`} />
                </div>
              </label>
            </div>

            {isSubmitted ? (
              <SuccessState isUrgent={isUrgent} setIsSubmitted={setIsSubmitted} />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
                
                {isUrgent && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="bg-red-500/10 border border-red-500/50 p-4 rounded-lg flex items-start gap-3 text-red-200 text-sm"
                  >
                    <AlertTriangle className="w-5 h-5 shrink-0 text-red-500" />
                    <div>
                      <strong>Priority Status Active.</strong> Your request will be routed directly to the on-call dispatch supervisor.
                    </div>
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <InputGroup 
                    label="Full Name" 
                    id="name" 
                    register={register} 
                    required 
                    error={errors.name}
                    isUrgent={isUrgent}
                  />
                  <InputGroup 
                    label="Company Name" 
                    id="company" 
                    register={register} 
                    isUrgent={isUrgent}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputGroup 
                    label="Email Address" 
                    id="email" 
                    type="email"
                    register={register} 
                    required 
                    error={errors.email}
                    isUrgent={isUrgent}
                  />
                  <InputGroup 
                    label="Phone Number" 
                    id="phone" 
                    type="tel"
                    register={register} 
                    required 
                    error={errors.phone}
                    isUrgent={isUrgent}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
                  <select 
                    {...register("projectType")}
                    className={`w-full bg-neutral-900 border rounded-lg p-3 text-white focus:outline-none transition-colors ${
                      isUrgent ? 'focus:border-red-500 border-neutral-700' : 'focus:border-yellow-500 border-neutral-700'
                    }`}
                  >
                    <option>General Construction</option>
                    <option>Industrial / Plant</option>
                    <option>Wind / Energy</option>
                    <option>Infrastructure / Bridge</option>
                    <option>Emergency Recovery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                  <textarea 
                    {...register("message", { required: true })}
                    rows="4"
                    className={`w-full bg-neutral-900 border rounded-lg p-3 text-white focus:outline-none transition-colors ${
                      errors.message ? 'border-red-500' : 'border-neutral-700'
                    } ${isUrgent ? 'focus:border-red-500' : 'focus:border-yellow-500'}`}
                    placeholder="Describe lift requirements, site conditions, or specific machinery needed..."
                  ></textarea>
                   {errors.message && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className={`w-full py-4 rounded-lg font-bold text-black flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
                    isUrgent 
                      ? 'bg-red-500 hover:bg-red-400 shadow-[0_0_20px_rgba(239,68,68,0.4)]' 
                      : 'bg-yellow-500 hover:bg-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.4)]'
                  } ${isSubmitting ? 'opacity-80 cursor-wait' : ''}`}
                >
                  {isSubmitting ? (
                    <>Processing <Loader2 className="animate-spin" /></>
                  ) : (
                    <>
                      {isUrgent ? "DISPATCH EMERGENCY REQUEST" : "SEND PROJECT INQUIRY"} 
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const ContactCard = ({ icon, title, value, urgent }) => (
  <div className={`p-4 rounded-xl border bg-neutral-800 transition-colors ${urgent ? 'border-red-500/20' : 'border-white/5'}`}>
    <div className="mb-2">{icon}</div>
    <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">{title}</div>
    <div className="font-bold text-lg text-white">{value}</div>
  </div>
);

const InputGroup = ({ label, id, type = "text", register, required, error, isUrgent }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      {...register(id, { required })}
      className={`w-full bg-neutral-900 border rounded-lg p-3 text-white focus:outline-none transition-colors ${
        error ? 'border-red-500' : 'border-neutral-700'
      } ${isUrgent ? 'focus:border-red-500' : 'focus:border-yellow-500'}`}
    />
    {error && <span className="text-red-500 text-xs mt-1">Required</span>}
  </div>
);

const SuccessState = ({ isUrgent, setIsSubmitted }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center py-10"
  >
    <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${isUrgent ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'}`}>
      <CheckCircle2 className="w-12 h-12" />
    </div>
    <h3 className="text-3xl font-bold mb-4">Request Received</h3>
    <p className="text-gray-400 mb-8">
      {isUrgent 
        ? "Emergency dispatch has been notified. A supervisor will call you within 15 minutes." 
        : "Your lift plan inquiry has been logged. Our engineering team will be in touch shortly."}
    </p>
    <button 
      onClick={() => setIsSubmitted(false)}
      className="text-white underline hover:text-gray-300"
    >
      Submit another request
    </button>
  </motion.div>
);

export default Contact;