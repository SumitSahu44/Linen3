import React from 'react';
import { motion } from 'framer-motion';
import { Send, Globe, MessageSquare, Users, CheckCircle2 } from 'lucide-react';

const TradeEnquiry = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. SEAMLESS HERO SECTION */}
      <section className="bg-slate-950 pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-24 -mt-24"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block"
          >
            Bulk & Institutional Orders
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 uppercase"
          >
            Trade <span className="text-blue-500 font-light">Enquiry.</span>
          </motion.h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            Partner with us for premium bulk linen supply, manufacturing contracts, and dealership opportunities right from our Kolkata headquarters.
          </p>
        </div>
      </section>

      {/* 2. ENQUIRY FORM & INFO */}
      <section className="py-24 px-6 max-w-7xl mx-auto -mt-16 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden group hover:border-blue-500 transition-all duration-500"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Request Quote</h2>
              <p className="text-slate-500 font-medium mb-10">Fill the form for bulk orders or partnership details.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all outline-none" />
                  <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all outline-none" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Company Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all outline-none" />
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all text-slate-400 outline-none">
                    <option>Requirement Type</option>
                    <option>Bulk Fabric Supply</option>
                    <option>Institutional Linen</option>
                    <option>Dealership Network</option>
                  </select>
                </div>
                <textarea rows="5" placeholder="Your Message / Specific Requirements..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all outline-none resize-none"></textarea>
                
                <button className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-[11px] active:scale-95">
                  Send Enquiry <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <div className="bg-slate-900 p-10 rounded-[4rem] text-white relative overflow-hidden flex-grow shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[60px] rounded-full"></div>
              <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">Why Partner With Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0 text-blue-400">
                     <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Unmatched Quality</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">We provide 100% genuine industrial-grade textiles with certified thread counts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0 text-blue-400">
                     <Globe size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Pan-India Delivery</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Our logistics network ensures seamless bulk delivery to any location across the country.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0 text-blue-400">
                     <Users size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Dedicated Support</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Get assigned a dedicated relationship manager for all your enterprise needs.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Globe size={20}/></div>
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><MessageSquare size={20}/></div>
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Users size={20}/></div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TradeEnquiry;
