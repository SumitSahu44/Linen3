import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Quote, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Components Import
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import AboutSection from '../components/AboutSection';
import MapSection from '../components/MapSection';
import TenderAuction from '../components/TenderAuction';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Brief About Section (Heritage) */}
      <AboutSection />

      {/* 3. Featured Products Showcase */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-end mb-12">
          <div>
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">Top Collections</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2 ">Trending Fabrics</h2>
          </div>
          <Link to="/products" className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-blue-600 pb-1">
            View All Catalog <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <ProductShowcase />
      </div>

      {/* 4. Unique Section: India Map (Textile Associates) */}
      <MapSection />

      {/* 5. Live Tender Snapshot (Dashboard Style) */}
      {/* <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase ">Live Procurement</h2>
          <p className="text-slate-500 font-medium mt-4">Current open tenders and e-auctions from our Kolkata headquarters.</p>
        </div>
        <TenderAuction />
        <div className="text-center mt-12">
           <Link to="/e-auction" className="px-10 py-4 bg-slate-900 text-white font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">
             Explore All Tenders
           </Link>
        </div>
      </div> */}

      {/* 6. Unique Section: Customer Reviews (Testimonials) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">Testimonials</span>
              <h3 className="text-4xl font-black text-slate-900 mt-4 leading-tight ">What Our <br/> Clients Say</h3>
              <p className="text-slate-500 mt-6 font-medium leading-relaxed">
                Trusted by 500+ hotel chains, hospitals, and retail distributors across India for over two decades.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {[
                { name: 'Rajiv Mehra', role: 'Purchase Head, Grand Hyatt', text: 'The fabric quality of Parekh Linen is unmatched. Their bulk supply for our Kolkata unit was seamless.' },
                { name: 'Dr. Anita Roy', role: 'Operations, AMRI Hospitals', text: 'Highly durable hospital linens. Their institutional grade bedsheets withstand industrial washing perfectly.' }
              ].map((rev, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 relative"
                >
                  <Quote className="absolute top-8 right-8 text-blue-100" size={60} />
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-blue-600 text-blue-600" />)}
                  </div>
                  <p className="text-slate-600  font-medium leading-relaxed mb-8 relative z-10">"{rev.text}"</p>
                  <div>
                    <h5 className="font-black text-slate-900 uppercase text-sm">{rev.name}</h5>
                    <p className="text-blue-600 text-[10px] font-bold uppercase tracking-widest">{rev.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA (Final Push) */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -mr-20 -mt-20"></div>
           <h4 className="text-white text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-none">Ready to start <br/> a project?</h4>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact" className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-xs">
                Request e-Quotation
             </Link>
             <Link to="/contact" className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-xs border border-slate-800">
                Book Factory Visit
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;