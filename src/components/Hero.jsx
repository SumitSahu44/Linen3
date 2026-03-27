import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://media.istockphoto.com/id/2082206908/photo/luxury-mens-fabric-swatches.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vlm1eaSMxCjP4zL-5tsEDop1We4FkESM17JDoYmfwZI=" 
          alt="Linen Texture" 
          className="w-full h-full object-cover opacity-60" // Image thodi dark rakhi hai
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent"></div> 
        {/* Left side ko thoda aur dark kiya hai text ke liye */}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-widest mb-6">
            Kolkata's Finest Textiles
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
            Quality Linen for <br />
            <span className="text-blue-400">Modern Living.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-xl leading-relaxed">
            Manufacturers & Suppliers of premium bedsheets and industrial fabrics. 
            Experience the heritage of Kolkata's textile excellence.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2 group">
              Explore Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/30 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/10 transition-all">
              Trade Enquiry
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};

export default Hero;