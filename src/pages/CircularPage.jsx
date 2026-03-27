import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar as CalIcon } from 'lucide-react';

const circulars = [
  { id: 1, title: "Revision of Minimum Support Price (MSP) for Raw Jute", date: "Oct 15, 2026", type: "Govt. Notification" },
  { id: 2, title: "Updated e-Auction Registration Guidelines", date: "Sep 28, 2026", type: "Internal Policy" },
  { id: 3, title: "Holiday Schedule for Manufacturing Units Q4", date: "Sep 10, 2026", type: "General Notice" },
  { id: 4, title: "Updates on Export Tariffs and Compliance", date: "Aug 22, 2026", type: "Trade Notice" },
];

const CircularPage = () => {
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
            Official Notices & Updates
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 uppercase"
          >
            Company <span className="text-blue-500 font-light">Circulars.</span>
          </motion.h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            Stay updated with the latest policies, government notifications, and internal directives regarding trade and manufacturing.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto relative z-20 -mt-16">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
           <div className="p-8 md:p-12">
               <div className="flex flex-col gap-4">
                  {circulars.map((circular) => (
                    <motion.div 
                      key={circular.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl border border-slate-100 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group cursor-pointer bg-slate-50 hover:bg-white"
                    >
                       <div className="flex items-start gap-4 mb-4 md:mb-0">
                          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                             <FileText size={20} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{circular.title}</h3>
                            <div className="flex items-center gap-4 mt-2">
                               <span className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-200/50 px-2 py-1 rounded-md">
                                 <CalIcon size={12} /> {circular.date}
                               </span>
                               <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{circular.type}</span>
                            </div>
                          </div>
                       </div>
                       
                       <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-widest hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all self-start md:self-auto">
                          Download <Download size={14} />
                       </button>
                    </motion.div>
                  ))}
               </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default CircularPage;
