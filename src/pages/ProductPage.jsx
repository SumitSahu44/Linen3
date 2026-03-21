import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronRight, ShoppingBag, ZoomIn } from 'lucide-react';

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Fabrics', 'Bedsheets', 'Linen'];

  const products = [
    { id: 1, name: 'Premium Cotton Fabric', cat: 'Fabrics', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800', desc: 'High-thread count industrial grade cotton.' },
    { id: 2, name: 'Hotel Luxury Bedsheet', cat: 'Bedsheets', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800', desc: 'Satin-finish white linen for 5-star hospitality.' },
    { id: 3, name: 'Institutional Linen', cat: 'Linen', img: 'https://images.unsplash.com/photo-1584132867693-c3191b784f3e?q=80&w=800', desc: 'Durable and bleached linen for medical use.' },
    { id: 4, name: 'Printed Textile Roll', cat: 'Fabrics', img: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800', desc: 'Custom printed fabrics for retail chains.' },
    { id: 5, name: 'King Size Comforter', cat: 'Bedsheets', img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800', desc: 'Ultra-soft microfiber filled comforters.' },
    { id: 6, name: 'Bath & Face Towels', cat: 'Linen', img: 'https://images.unsplash.com/photo-1560347826-6020c5ad908b?q=80&w=800', desc: 'Highly absorbent Turkish cotton towels.' },
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.cat === activeCategory);

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="bg-slate-50 py-20 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Manufacturing Excellence</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
              Our <span className="text-blue-600">Product Portfolio</span>
            </h1>
            <p className="text-slate-500 font-medium text-lg">
              Explore our wide range of premium textiles, from raw industrial fabrics to finished luxury linens, all crafted in our Kolkata units.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-3 bg-white p-2 rounded-3xl shadow-sm border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-slate-900 text-white shadow-xl' 
                    : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Product Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="group relative"
              >
                {/* Image Card */}
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-sm border border-slate-100">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                    <button className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-colors shadow-2xl">
                      <ZoomIn size={24} />
                    </button>
                    <button className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-colors shadow-2xl">
                      <ShoppingBag size={24} />
                    </button>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[9px] font-black uppercase tracking-[0.2em] text-blue-600 shadow-md">
                      {product.cat}
                    </span>
                  </div>
                </div>

                {/* Content Info */}
                <div className="mt-8 px-4">
                  <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                    {product.desc}
                  </p>
                  <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-900 group-hover:gap-4 transition-all">
                    Technical Specifications <ChevronRight size={16} className="text-blue-600" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 3. Bulk Enquiry Call-to-action */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -mr-20 -mt-20"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="text-white text-4xl md:text-5xl font-black mb-6 tracking-tighter">Request Bulk Quotation</h2>
              <p className="text-blue-100 text-lg font-medium opacity-90 leading-relaxed">
                Need customized fabrics or bulk institutional supply? Connect with our trade experts for a tailored price list and e-quotation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-xl active:scale-95 text-sm uppercase tracking-widest">
                Download Catalog
              </button>
              <button className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl active:scale-95 text-sm uppercase tracking-widest border border-slate-800">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;