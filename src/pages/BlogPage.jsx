import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "How to Choose the Right Thread Count for Hotel Linen",
      excerpt: "Understanding the balance between durability and comfort is key for hospitality success in the modern era.",
      author: "Rajesh Parekh",
      date: "March 15, 2026",
      category: "Guide",
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800"
    },
    {
      id: 2,
      title: "The Rise of Sustainable Fabrics in 2026",
      excerpt: "Eco-friendly manufacturing is no longer an option, it's a necessity for the future of the textile industry.",
      author: "Admin",
      date: "March 10, 2026",
      category: "Industry",
      img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800"
    },
    {
      id: 3,
      title: "Maintenance Tips for Industrial Grade Bedsheets",
      excerpt: "Extend the life of your linen with these professional washing and care techniques used by top experts.",
      author: "Technical Team",
      date: "March 05, 2026",
      category: "Tips",
      img: "https://images.unsplash.com/photo-1584132867693-c3191b784f3e?q=80&w=800"
    }
  ];

  return (
    /* pt-24 removed for seamless look */
    <div className="bg-white min-h-screen">
      
      {/* 1. Simple Hero Header (Navbar ke piche se start) */}
      <section className="bg-slate-900 pt-40 pb-24 px-6 relative">
        {/* Navbar safety gradient */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[11px] mb-4 block"
          >
            Insights & Updates
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase"
          >
            Our <span className="font-light ">Blog</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. Content Area */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Articles List (Simpler Layout) */}
          <div className="lg:col-span-8 space-y-24">
            {posts.map((post) => (
              <motion.article 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                key={post.id} 
                className="group"
              >
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8 shadow-sm border border-slate-100">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                
                <div className="flex items-center gap-6 mb-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md">{post.category}</span>
                  <span className="flex items-center gap-2"><Calendar size={14}/> {post.date}</span>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-6 max-w-2xl">
                  {post.excerpt}
                </p>
                <Link to={'#'} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-widest border-b-2 border-blue-600 pb-1 hover:text-slate-900 hover:border-slate-900 transition-all">
                  Read Article <ArrowRight size={16} />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Right: Clean Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 pb-4 border-b border-slate-200">Categories</h4>
              <ul className="space-y-4">
                {['Industry News', 'Fabric Care', 'Hospitality', 'Sustainability'].map(cat => (
                  <li key={cat} className="flex justify-between items-center group cursor-pointer">
                    <span className="text-slate-600 font-medium text-sm group-hover:text-blue-600 transition-colors">{cat}</span>
                    <ArrowRight size={14} className="text-slate-300 group-hover:translate-x-1 transition-all" />
                  </li>
                ))}
              </ul>
            </div>

          
          </aside>

        </div>
      </section>

      {/* 3. Bottom CTA (Simple) */}
      <section className="py-24 px-6 text-center border-t border-slate-100">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight uppercase">Need Expert Advice?</h3>
        <p className="text-slate-500 font-medium mb-8">Our specialists are ready to help with your institutional textile requirements.</p>
        <Link to="/contact" className="px-10 py-4 bg-slate-900 text-white font-bold rounded-xl uppercase tracking-widest text-[11px] hover:bg-blue-600 transition-all shadow-xl">
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default BlogPage;