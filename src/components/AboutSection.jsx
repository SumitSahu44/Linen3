import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Factory, Globe, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* 1. Image Side with Unique Stack Effect */}
          <div className="relative group">
            {/* Main Large Image */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1558444479-c848267a1a62?q=80&w=1200" 
                alt="Our Manufacturing Unit" 
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </div>
            
            {/* 2. Floating Experience Badge */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -right-6 -bottom-6 z-20 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-[260px] hidden md:block"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-200">
                <Award size={24} />
              </div>
              <h4 className="font-black text-slate-900 text-xl mb-2 ">25+ Years</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
                Of Textile Excellence in West Bengal.
              </p>
            </motion.div>
            
            {/* Decorative background blur element */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-50 rounded-full -z-0 blur-3xl opacity-60"></div>
          </div>

          {/* 3. Content Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Heritage</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase ">
                Weaving comfort <br/> into every <span className="text-blue-600">fiber.</span>
              </h2>
            </motion.div>
            
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Parekh Linen isn't just a manufacturer; we are a legacy from the heart of Kolkata. Since 1998, we've blended traditional craftsmanship with high-tech automation to supply premium bedsheets, fabrics, and institutional linens across the globe.
            </p>

            {/* Features Mini-Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Modern Manufacturing', icon: <Factory size={18}/> },
                { title: 'Eco-friendly Fabrics', icon: <CheckCircle2 size={18}/> },
                { title: 'Global Standards', icon: <Globe size={18}/> },
                { title: 'Quality Assurance', icon: <Award size={18}/> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-300 hover:bg-white transition-all duration-300">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="font-black text-slate-800 uppercase tracking-widest text-[10px]">{item.title}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link 
                to="/about" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-black rounded-2xl text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl active:scale-95 group"
              >
                Learn More About Us 
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;