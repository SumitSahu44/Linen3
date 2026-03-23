import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Users, Globe, Award, Target, ShieldCheck, Zap, Heart } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: 'Founded In', value: '1998', icon: <Zap size={20}/> },
    { label: 'Production Units', value: '03', icon: <Factory size={20}/> },
    { label: 'Global Exports', value: '12+', icon: <Globe size={20}/> },
    { label: 'Awards Won', value: '25+', icon: <Award size={20}/> },
  ];

  return (
    <div className="bg-white">
      
      {/* 1. SEAMLESS HERO SECTION (Starts from Y=0) */}
      <section className="relative h-[70vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1558444479-c848267a1a62?q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 hover:scale-100 transition-transform duration-[10s]"
          alt="About Us Banner"
        />
        
        {/* Navbar Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950/90"></div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 block">Kolkata's Textile Legacy</span>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase  leading-none">
              Our <span className="text-blue-600">Legacy</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERLAPPING STATS (The Professional Touch) */}
      <section className="relative z-20 -mt-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-[3rem] shadow-2xl border border-white/20 text-center group hover:bg-blue-600 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-slate-900 group-hover:text-white tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-bold text-slate-400 group-hover:text-blue-100 uppercase tracking-widest mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CORPORATE STORY SECTION */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div>
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">Since 1998</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] mt-4 uppercase  tracking-tighter">
                Engineering <br/> <span className="text-blue-600">Perfect Fabrics.</span>
              </h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed font-medium border-l-4 border-blue-600 pl-8">
              Founded in the heart of Kolkata, Parekh Linen has evolved from a local weaving unit to a global export house. Our commitment to high-thread-count durability and ethical manufacturing defines our 25-year journey.
            </p>

            <div className="grid grid-cols-2 gap-8">
               <div className="space-y-2">
                  <ShieldCheck className="text-blue-600" size={32} />
                  <h4 className="font-black text-slate-900 uppercase  text-sm">Quality First</h4>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">ISO 9001:2015 certified production lines.</p>
               </div>
               <div className="space-y-2">
                  <Heart className="text-blue-600" size={32} />
                  <h4 className="font-black text-slate-900 uppercase  text-sm">Eco Friendly</h4>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">Optimized water & energy recycling plants.</p>
               </div>
            </div>
          </div>

          {/* Image Composition */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
              <img src="https://images.unsplash.com/photo-1596433904500-97b901c5d274?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxpbmVufGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="Fabric Detail"/>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600 rounded-[4rem] -z-0 opacity-10"></div>
          </div>
        </div>
      </section>

      {/* 4. MANAGEMENT (Clean & Minimal) */}
      <section className="py-32 bg-slate-50 rounded-[5rem] mx-4 md:mx-10 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase ">The Board</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: 'Rajesh Parekh', role: 'Managing Director', initial: 'RP' },
              { name: 'Sunil Parekh', role: 'Head of Operations', initial: 'SP' }
            ].map((leader, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[4rem] shadow-sm flex items-center gap-8 border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center text-white font-black text-2xl group-hover:bg-blue-600 transition-colors">
                  {leader.initial}
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900  uppercase tracking-tighter">{leader.name}</h4>
                  <p className="text-blue-600 font-black uppercase text-[10px] tracking-widest mt-1">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES (Final Touch) */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <div className="grid md:grid-cols-3 gap-16">
          {[
            { t: 'Innovation', d: 'Japanese machinery for high-precision weaving.', i: <Zap/> },
            { t: 'Heritage', d: 'Rooted in Kolkata since 1998.', i: <Award/> },
            { t: 'Global', d: 'Trusted by international hotel chains.', i: <Globe/> },
          ].map((val, i) => (
            <div key={i} className="space-y-4">
              <div className="text-blue-600 flex justify-center">{val.i}</div>
              <h4 className="text-xl font-black text-slate-900 uppercase ">{val.t}</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{val.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;