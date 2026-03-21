import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Clock, Download, ChevronRight, Briefcase, Building2, UserCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const TenderPage = () => {
  const activeContracts = [
    { 
      id: 'PL-TND-2026-08', 
      title: 'Annual Maintenance Contract - Spinning Unit', 
      dept: 'Operations', 
      deadline: 'April 15, 2026',
      status: 'Open'
    },
    { 
      id: 'PL-TND-2026-12', 
      title: 'Supply of Premium Long-Staple Cotton', 
      dept: 'Procurement', 
      deadline: 'March 30, 2026',
      status: 'Critical'
    },
    { 
      id: 'PL-CON-2026-03', 
      title: 'Logistics & Distribution Partner - Pan India', 
      dept: 'Supply Chain', 
      deadline: 'May 10, 2026',
      status: 'Open'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. RESPONSIVE SEAMLESS HERO */}
      <section className="relative min-h-[65vh] md:h-[70vh] flex items-center bg-slate-950 overflow-hidden pt-24 pb-20 md:py-0">
        {/* Background Image & Gradients */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600')] bg-cover bg-center opacity-30 grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-slate-950 via-slate-950/90 md:via-slate-950/70 to-transparent"></div>
        
        {/* Navbar Safety Layer */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-4 block ">Corporate Procurement</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight uppercase leading-[1.1]">
              Tenders & <br className="hidden sm:block" /> 
              <span className="font-light  text-blue-400">Contracts</span>
            </h1>
            <p className="mt-6 text-slate-400 text-base md:text-lg font-medium leading-relaxed max-w-xl">
              Transparent bidding and long-term partnership opportunities with Parekh Linen's manufacturing and supply network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS OVERLAP (Mobile Responsive) */}
      <section className="relative z-20 -mt-12 md:-mt-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {[
            { label: 'Active Opportunities', val: '14+', icon: <FileText className="text-blue-600"/> },
            { label: 'Vendor Partners', val: '250+', icon: <Building2 className="text-blue-600"/> },
            { label: 'Compliance Rate', val: '100%', icon: <ShieldCheck className="text-blue-600"/> },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-6 group hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 leading-none">{item.val}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ACTIVE LISTINGS (Responsive Table/Cards) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-slate-100 pb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">Open Solicitations</h2>
            <p className="text-slate-500 mt-2 font-medium">Review current requirements and submit your proposal online.</p>
          </div>
          <button className="px-6 py-3 bg-slate-50 text-slate-900 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all border border-slate-200 shadow-sm active:scale-95">
            Archive Tenders
          </button>
        </div>

        <div className="space-y-6">
          {activeContracts.map((tender, i) => (
            <motion.div 
              whileHover={{ scale: 1.01 }}
              key={i} 
              className="group bg-white p-6 md:p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
            >
              <div className="flex items-center gap-6 w-full lg:w-auto">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                  <FileText size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-bold text-blue-600 tracking-widest">{tender.id}</span>
                    <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase ${tender.status === 'Critical' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                      {tender.status}
                    </span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">{tender.title}</h4>
                  <p className="text-slate-400 text-[10px] font-bold uppercase mt-2 tracking-widest">{tender.dept}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-8 md:gap-12 w-full lg:w-auto border-t lg:border-t-0 pt-6 lg:pt-0">
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-2">Submission Deadline</span>
                  <div className="flex items-center gap-2 text-slate-700 font-bold text-sm ">
                    <Clock size={16} className="text-blue-600"/> {tender.deadline}
                  </div>
                </div>
                
                <div className="flex gap-4 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none p-4 bg-slate-50 rounded-xl text-slate-400 hover:bg-blue-600 hover:text-white transition-all border border-slate-100">
                    <Download size={20} />
                  </button>
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white text-sm font-bold rounded-xl uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 shadow-lg">
                    Details <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. VENDOR ENROLLMENT (Call to Action) */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-10 text-white">
            <UserCheck size={200} />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6 ">Empanel as a Vendor</h3>
            <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-base md:text-lg font-medium leading-relaxed">
              We are constantly looking for high-quality partners in raw materials, logistics, and machinery. Join our verified vendor database today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl text-[11px] uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                Register Firm Now
              </Link>
              <button className="px-12 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-2xl text-[11px] uppercase tracking-widest hover:bg-white/20 transition-all active:scale-95">
                Download Guidelines
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCUREMENT PILLARS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {[
            { t: 'Zero Bias', d: 'Automated bidding system to ensure fair selection for all vendors.', i: <ShieldCheck size={24}/> },
            { t: 'Compliance', d: 'Strict adherence to Oeko-Tex and ISO standards in all procurement.', i: <Award size={24}/> },
            { t: 'Fast Settlement', d: 'Fast-track payment cycles for our verified contract partners.', i: <Clock size={24}/> },
          ].map((val, i) => (
            <div key={i} className="space-y-4 group">
              <div className="text-slate-900 group-hover:text-blue-600 transition-colors">{val.i}</div>
              <h4 className="text-sm font-bold uppercase tracking-widest">{val.t}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{val.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TenderPage;