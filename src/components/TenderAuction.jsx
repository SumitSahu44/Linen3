import React from 'react';
import { Gavel, Clock, FileText, Download, ArrowRight } from 'lucide-react';

const TenderAuction = () => {
  const tenders = [
    { id: 'TND/2026/042', title: 'Hospital Linen Bulk Supply', type: 'Tender', status: 'Live', date: '25 Mar 2026' },
    { id: 'AUC/2026/009', title: 'Industrial Cotton Scrap Sale', type: 'Auction', status: 'Upcoming', date: '02 Apr 2026' },
    { id: 'TND/2026/038', title: 'Hotel Chain Annual Contract', type: 'Tender', status: 'Closed', date: '15 Mar 2026' },
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-black uppercase tracking-[0.4em] text-xs mb-4">Corporate Procurement</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">e-Auction & Tenders</h3>
        </div>

        <div className="grid gap-6">
          {tenders.map((item, i) => (
            <div key={i} className="group bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 transition-all hover:bg-white/10 hover:border-white/20">
              
              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors shadow-2xl ${
                  item.status === 'Live' ? 'bg-green-500/20 text-green-400' : 'bg-slate-800 text-slate-400'
                }`}>
                  {item.type === 'Auction' ? <Gavel size={28} /> : <FileText size={28} />}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">{item.id}</span>
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      item.status === 'Live' ? 'bg-green-500 text-white animate-pulse' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-white">{item.title}</h4>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-8 w-full md:w-auto">
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Closing Date</span>
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Clock size={16} className="text-blue-400"/> {item.date}
                  </div>
                </div>
                
                <div className="flex gap-4 w-full md:w-auto">
                  <button className="flex-1 md:flex-none px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-black text-xs hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    <Download size={16}/> DOCUMENTS
                  </button>
                  <button className="flex-1 md:flex-none px-6 py-4 bg-blue-600 rounded-2xl text-white font-black text-xs hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group/btn">
                    APPLY NOW <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform"/>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
            Need help with bidding? <a href="#" className="text-blue-400 border-b border-blue-400 pb-0.5 ml-2 hover:text-blue-300">Contact Support</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TenderAuction;