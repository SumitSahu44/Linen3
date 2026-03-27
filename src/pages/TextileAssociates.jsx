import React from 'react';
import { motion } from 'framer-motion';
import MapPointerPolished from '../components/Map';

const TextileAssociates = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-950 pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-24 -mt-24"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block"
          >
            Pan-India Presence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 uppercase"
          >
            Our Textile <span className="text-blue-500 font-light">Associates.</span>
          </motion.h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            Explore our vast network of manufacturing plants, trade centres, and corporate offices across India.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto relative z-20 -mt-16">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 flex justify-center items-center"
        >
            <div className="w-full max-w-4xl">
               <MapPointerPolished />
            </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TextileAssociates;
