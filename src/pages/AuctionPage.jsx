import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gavel, FileText, Clock, Download, Search, AlertCircle, ChevronRight, CheckCircle2 } from 'lucide-react';

const AuctionPage = () => {
  const [activeTab, setActiveTab] = useState('Active');
  const [searchTerm, setSearchTerm] = useState('');

  const tenders = [
    { id: 'TND-2026-001', title: 'Bulk Cotton Yarn Procurement', category: 'Raw Material', status: 'Active', deadline: '25 March 2026', value: 'High' },
    { id: 'AUC-2026-042', title: 'Industrial Grade Loom Machinery', category: 'Machinery', status: 'Closed', deadline: '10 March 2026', value: 'Medium' },
    { id: 'TND-2026-005', title: 'Hospital Linen Annual Contract', category: 'Institutional', status: 'Active', deadline: '05 April 2026', value: 'High' },
    { id: 'AUC-2026-012', title: 'Surplus Fabric Scrap Sale', category: 'Scrap', status: 'Upcoming', deadline: '12 April 2026', value: 'Low' },
    { id: 'TND-2026-009', title: 'Hotel Chain Bedding Supply', category: 'Linen', status: 'Active', deadline: '28 March 2026', value: 'High' },
  ];

  const filteredTenders = tenders.filter(t => {
    const matchesTab = activeTab === 'All' ? true : t.status === activeTab;
    const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase()) || t.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    /* Removed pt-24 so it starts from the very top of the screen */
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* 1. Dashboard Header - Now Starts at Y=0 */}
      <section className="bg-slate-900 pt-32 pb-40 px-6 relative overflow-hidden">
        {/* Background Decorative Blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        
        {/* TEXT PROTECTION: Navbar safety gradient */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl"
            >
              <span className="text-blue-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block ">Official Procurement Portal</span>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 uppercase ">
                e-Auction & <br/> <span className="text-blue-500">Tender Board</span>
              </h1>
              <p className="text-slate-400 font-medium text-lg">
                Real-time access to active tenders, auctions, and corporate contracts for Parekh Linen Kolkata.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 hidden lg:block shadow-2xl"
            >
              <div className="flex items-center gap-5 text-white">
                <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-400 animate-pulse border border-green-500/30">
                  <CheckCircle2 size={28}/>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Portal Status</p>
                  <p className="font-black text-xl  tracking-tight uppercase">Live & Secure</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Control Bar (Search & Filter) - Overlapping the Header */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white p-5 rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center gap-2">
            {['Active', 'Upcoming', 'Closed', 'All'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all active:scale-95 ${
                  activeTab === tab ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search Tender ID or Title..." 
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* 3. Tender Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredTenders.length > 0 ? (
              filteredTenders.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={item.id}
                  className="bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all flex flex-col lg:flex-row items-center justify-between gap-8 group"
                >
                  <div className="flex items-center gap-8 w-full lg:w-auto">
                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:rotate-6 ${
                      item.status === 'Active' ? 'bg-blue-50 text-blue-600 shadow-inner' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {item.type === 'Auction' ? <Gavel size={32} /> : <FileText size={32} />}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">{item.id}</span>
                        <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                          item.status === 'Active' ? 'bg-green-100 text-green-600' : 
                          item.status === 'Upcoming' ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors  tracking-tight">{item.title}</h4>
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">{item.category}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-12 w-full lg:w-auto border-t lg:border-t-0 pt-8 lg:pt-0">
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3">Bid Deadline</span>
                      <div className="flex items-center gap-2 text-slate-900 font-black ">
                        <Clock size={18} className="text-blue-600"/> {item.deadline}
                      </div>
                    </div>
                    
                    <div className="flex gap-4 w-full md:w-auto">
                      <button className="flex-1 md:flex-none px-8 py-5 bg-slate-50 text-slate-900 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95">
                        <Download size={18}/> DOCUMENTS
                      </button>
                      <button className={`flex-1 md:flex-none px-10 py-5 rounded-2xl text-white font-black text-[11px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-xl active:scale-95 ${
                        item.status === 'Active' ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-200' : 'bg-slate-300 cursor-not-allowed'
                      }`}>
                        APPLY NOW <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="py-24 text-center bg-white rounded-[4rem] border-2 border-dashed border-slate-200 shadow-inner">
                <AlertCircle size={64} className="mx-auto text-slate-200 mb-6" />
                <h3 className="text-2xl font-black text-slate-900  uppercase">No Tenders Found</h3>
                <p className="text-slate-400 font-medium">Try changing the filter or search term.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Help Section */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-slate-900 p-12 md:p-16 rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-10 border border-white/5 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full -ml-20 -mt-20"></div>
          <div className="flex items-center gap-8 relative z-10">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-2xl rotate-3">
                <AlertCircle size={36} />
              </div>
              <div>
                <h5 className="text-white text-3xl font-black  uppercase tracking-tighter">First Time Bidding?</h5>
                <p className="text-slate-400 text-lg font-medium">Download our e-Auction guide to understand the process.</p>
              </div>
          </div>
          <button className="px-10 py-5 bg-white text-slate-900 font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-50 transition-all shadow-xl active:scale-95 relative z-10">
            DOWNLOAD USER GUIDE
          </button>
        </div>
      </section>
    </div>
  );
};

export default AuctionPage;