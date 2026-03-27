import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { id: 1, name: "Rahul Sharma", company: "Elite Fabrics", rating: 5, text: "Exceptional quality of linen and highly professional team. They always deliver bulk orders on time." },
  { id: 2, name: "Anita Desai", company: "Desai Textiles", rating: 5, text: "We have been sourcing from Parekh Linen for over 5 years. Their e-Auction platform is seamless." },
  { id: 3, name: "Vikram Singh", company: "Singh & Co.", rating: 4, text: "Great variety of products. Highly recommend for institutional linen needs." },
];

const CustomerReview = () => {
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
            Client Testimonials
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 uppercase"
          >
            Customer <span className="text-blue-500 font-light">Reviews.</span>
          </motion.h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            See what our valued partners and clients have to say about our premium textile solutions.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto relative z-20 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col gap-6 group hover:border-blue-500 transition-all duration-500"
            >
              <div className="flex justify-between items-start">
                 <Quote size={40} className="text-blue-100 group-hover:text-blue-200 transition-colors" />
                 <div className="flex gap-1 text-blue-500">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                 </div>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed flex-grow">"{review.text}"</p>
              <div className="border-t border-slate-100 pt-6 mt-2">
                <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest">{review.name}</h4>
                <p className="text-blue-500 text-xs font-bold tracking-widest uppercase mt-1">{review.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CustomerReview;
