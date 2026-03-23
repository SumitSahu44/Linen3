import React from 'react';
import { Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Management = () => {
  const leaders = [
    {
      name: "Rajesh Parekh",
      role: "Founder & Chairman",
      desc: "25+ years of experience in textile innovation and global supply chain management.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80"
    },
    {
      name: "Ananya Sharma",
      role: "Operations Director",
      desc: "Expert in lean manufacturing and sustainable production optimization across all units.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
    },
    {
      name: "Vikram Mehta",
      role: "Head of Global Export",
      desc: "Leading our international presence and maintaining high-thread-count quality standards.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-32 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section - Matching your Style */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-24">
          <div>
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">The Visionaries</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] mt-4 uppercase tracking-tighter">
              Guiding <br/> <span className="text-blue-600">Our Excellence.</span>
            </h2>
          </div>
          <div className="border-l-4 border-blue-600 pl-8">
            <p className="text-slate-600 text-lg font-medium max-w-md leading-relaxed">
              Meet the minds behind Parekh Linen's global success. Our Management is committed to ethical manufacturing and textile innovation.
            </p>
          </div>
        </div>

        {/* Management Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {leaders.map((member, index) => (
            <div key={index} className="group">
              {/* Image with Decorative Element Style */}
              <div className="relative mb-8">
                <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={member.image} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    alt={member.name}
                  />
                </div>
                {/* Decorative Box matching your image composition */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-[2.5rem] -z-0 opacity-10 group-hover:opacity-20 transition-opacity"></div>
              </div>

              {/* Info Area */}
              <div className="space-y-3 px-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                    {member.name}
                  </h4>
                  <div className="flex gap-3 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    <Linkedin size={18} className="cursor-pointer" />
                    <Mail size={18} className="cursor-pointer" />
                  </div>
                </div>
                <span className="inline-block text-blue-600 font-black uppercase tracking-[0.2em] text-[10px]">
                  {member.role}
                </span>
                <p className="text-slate-500 text-sm font-medium leading-relaxed pr-4">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
           <h5 className="font-black text-slate-900 uppercase text-sm tracking-widest">Want to join our team?</h5>
           <Link to="/careers" className="bg-blue-600 text-white font-black py-4 px-10 rounded-2xl shadow-xl hover:bg-slate-900 transition-all uppercase tracking-widest text-[11px]">
             View Open Positions
           </Link>
        </div>

      </div>
    </div>
  );
};

export default Management;