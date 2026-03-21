import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Camera, Play, ArrowUpRight } from 'lucide-react';

const MediaEvents = () => {
  const [filter, setFilter] = useState('All');

  const mediaData = [
    {
      id: 1,
      title: "International Textile Expo 2026",
      category: "Events",
      date: "Feb 15, 2026",
      location: "Pragati Maidan, Delhi",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
      description: "Parekh Linen showcased its latest sustainable fabric collection."
    },
    {
      id: 2,
      title: "New Automated Looms Installation",
      category: "Factory",
      date: "Jan 10, 2026",
      location: "Kolkata Plant",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
      description: "Upgrading our production capacity with high-speed Japanese machinery."
    },
    {
      id: 3,
      title: "Annual Management Meet",
      category: "Corporate",
      date: "Dec 20, 2025",
      location: "The Oberoi, Kolkata",
      image: "https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?q=80&w=800",
      description: "Strategic planning for the upcoming 2026-27 fiscal year."
    },
    {
      id: 4,
      title: "Best Manufacturer Award",
      category: "Awards",
      date: "Nov 05, 2025",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800",
      description: "Recognized for excellence in industrial linen supply."
    }
  ];

  const categories = ['All', 'Events', 'Factory', 'Corporate', 'Awards'];

  const filteredData = filter === 'All' 
    ? mediaData 
    : mediaData.filter(item => item.category === filter);

  return (
    <section id="media" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">Inside Parekh Linen</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter">
              Media & <span className="text-blue-600">Event Highlights</span>
            </h2>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Media Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredData.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Wrapper */}
                <div className="relative h-[350px] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-lg">
                      {item.category}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                    <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <Camera size={24} />
                    </button>
                  </div>
                </div>

                {/* Content Wrapper */}
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-6 mb-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-blue-500" />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-blue-500" />
                      {item.location}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <button className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-900 group/btn">
                    Read Report 
                    <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Video Gallery Call-to-action */}
        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h4 className="text-white text-3xl font-black mb-2 tracking-tighter">Experience Our Manufacturing Process</h4>
              <p className="text-slate-400 font-medium">Watch high-definition videos of our Kolkata plant and textile testing.</p>
            </div>
            <button className="px-8 py-4 bg-white text-slate-950 font-black rounded-2xl flex items-center gap-3 hover:bg-blue-50 transition-all active:scale-95">
              <Play size={20} fill="currentColor" /> WATCH MEDIA CHANNEL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaEvents;