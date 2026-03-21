import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Factory, Globe, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Image Side with Floating Badge */}
          <div className="relative group">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1558444479-c848267a1a62?q=80&w=1200" 
                alt="Our Factory" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </div>
            
            {/* Unique Floating Award Card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -right-10 bottom-20 z-20 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 max-w-[280px]"
            >
              <Award className="text-blue-600 mb-4" size={40} />
              <h4 className="font-black text-slate-900 text-xl mb-2">25 Years of Trust</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">Leading the textile industry in West Bengal with premium linen exports.</p>
            </motion.div>
            
            {/* Decorative background shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-50 rounded-full -z-0 blur-3xl opacity-60"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">Our Legacy</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 leading-[1.1]">
                Weaving comfort <br/> into every <span className="text-blue-600">fiber.</span>
              </h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Parekh Linen isn't just a manufacturer; we are a heritage brand from Kolkata. For over two decades, we've blended traditional craftsmanship with high-tech automation to supply premium bedsheets, fabrics, and institutional linens.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Modern Manufacturing', icon: <Factory size={20}/> },
                { title: 'Eco-friendly Fabrics', icon: <CheckCircle2 size={20}/> },
                { title: 'Global Standards', icon: <Globe size={20}/> },
                { title: 'Quality Assurance', icon: <Award size={20}/> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-colors">
                  <div className="text-blue-600">{item.icon}</div>
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;