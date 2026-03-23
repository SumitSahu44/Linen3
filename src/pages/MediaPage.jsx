import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Play, Calendar, MapPin, ZoomIn, ArrowRight } from 'lucide-react';

const MediaPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Events', 'Factory', 'Awards', 'Exhibitions'];

  const mediaItems = [
    { id: 1, title: 'International Textile Fair 2026', cat: 'Events', img: 'https://plus.unsplash.com/premium_photo-1748215293471-708798f65be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGV4dGlsZSUyMGIyYiUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D', date: 'Feb 12, 2026', loc: 'New Delhi' },
    { id: 2, title: 'New Weaving Machine Launch', cat: 'Factory', img: 'https://images.unsplash.com/photo-1761682719769-47c76c845d50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGV4dGlsZSUyMGIyYiUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D', date: 'Jan 20, 2026', loc: 'Kolkata Plant' },
    { id: 3, title: 'Best Manufacturer Award', cat: 'Awards', img: 'https://images.unsplash.com/photo-1739195792906-fb5241bf9f82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGV4dGlsZSUyMGIyYiUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D', date: 'Dec 15, 2025', loc: 'Mumbai' },
    { id: 4, title: 'Export Quality Showcase', cat: 'Exhibitions', img: 'https://images.unsplash.com/photo-1659767151200-f2543af40c44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGV4dGlsZSUyMGIyYiUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D', date: 'Nov 10, 2025', loc: 'Dubai, UAE' },
    { id: 5, title: 'Factory Safety Drill', cat: 'Factory', img: 'https://images.unsplash.com/photo-1718049942873-58bd663206dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRleHRpbGUlMjBiMmIlMjBldmVudHN8ZW58MHx8MHx8fDA%3D0', date: 'Oct 05, 2025', loc: 'Kolkata Plant' },
    { id: 6, title: 'Corporate Social Responsibility', cat: 'Events', img: 'https://images.unsplash.com/photo-1659767151200-f2543af40c44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGV4dGlsZSUyMGIyYiUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D', date: 'Sep 22, 2025', loc: 'West Bengal' },
  ];

  const filteredMedia = activeFilter === 'All' 
    ? mediaItems 
    : mediaItems.filter(item => item.cat === activeFilter);

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* 1. Page Header */}
      <section className="bg-slate-50 py-20 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block ">Our Visual Journey</span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              Media <span className="text-blue-600">&</span> Gallery
            </h1>
            <p className="text-slate-500 font-medium text-lg mt-6">
              Capturing the essence of Parekh Linen — from our high-tech factory floors in Kolkata to global textile exhibitions.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 bg-white p-2 rounded-[2rem] shadow-sm border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeFilter === cat 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Media Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredMedia.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                      <ZoomIn size={28} />
                    </div>
                  </div>

                  {/* Date Tag */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[9px] font-black uppercase tracking-widest text-blue-600 shadow-md">
                      {item.cat}
                    </span>
                  </div>
                </div>

                <div className="mt-6 px-2">
                  <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                    <span className="flex items-center gap-1"><Calendar size={12} className="text-blue-500"/> {item.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} className="text-blue-500"/> {item.loc}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 3. Video / Factory Tour Section (Unique Dark Section) */}
      <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl aspect-video group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1558444479-c848267a1a62?q=80&w=1200" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Video Thumbnail"/>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse group-hover:scale-110 transition-transform">
                  <Play size={40} fill="currentColor" />
                </div>
              </div>
            </div>
            {/* Background Decorative Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 blur-[80px] rounded-full"></div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block ">Virtual Tour</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
              Watch Our <br/> <span className="text-blue-500 ">Manufacturing</span> Story
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
              Take a closer look at our automated production lines, quality testing labs, and the craftsmanship that goes into every Parekh Linen product.
            </p>
            <button className="flex items-center gap-3 px-10 py-5 bg-white text-slate-950 font-black rounded-2xl hover:bg-blue-50 transition-all active:scale-95 text-xs uppercase tracking-widest">
              Subscribe to Channel <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Press / Circulars (List Style) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
          <h2 className="text-3xl font-black text-slate-900 uppercase ">Press & Circulars</h2>
          <div className="h-[2px] flex-grow mx-8 bg-slate-100 hidden md:block"></div>
          <button className="text-blue-600 font-black text-xs uppercase tracking-widest border-b-2 border-blue-600 pb-1">View Archive</button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-200 hover:bg-white transition-all group flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Circular #{i}024</span>
                <h4 className="text-lg font-bold text-slate-800 mt-1">New Safety Protocols for Manufacturing Units</h4>
                <p className="text-slate-400 text-xs mt-2">Released: Oct 12, 2025</p>
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors shadow-sm">
                <Camera size={20} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MediaPage;