import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, title: 'Industrial Fabrics', category: 'Raw Materials', img: 'https://images.unsplash.com/photo-1590566996911-2d82c6b7e585?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpbmVufGVufDB8fDB8fHww' },
  { id: 2, title: 'Premium Bedsheets', category: 'Linen', img: 'https://images.unsplash.com/photo-1601276174812-63280a55656e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpbmVufGVufDB8fDB8fHww' },
  { id: 3, title: 'Hotel Collection', category: 'Hospitality', img: 'https://media.istockphoto.com/id/528908529/photo/colored-cloth.webp?a=1&b=1&s=612x612&w=0&k=20&c=VxBdS90v9gSWUrtRKMVhdz47785_auSF5K1NBWwVGKk=' },
];

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Our Collection</h2>
            <h3 className="text-4xl font-bold text-slate-900">Premium Textile Solutions</h3>
          </div>
          <button className="text-slate-900 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition">View All Products</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <motion.div 
              key={p.id}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-slate-100 aspect-[4/5]"
            >
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-blue-400 text-sm font-medium mb-1">{p.category}</span>
                <h4 className="text-white text-2xl font-bold">{p.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;