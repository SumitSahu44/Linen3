import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Users } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. SEAMLESS HERO SECTION (Starts at Y=0) */}
      <section className="bg-slate-950 pt-40 pb-24 px-6 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-24 -mt-24"></div>
        
        {/* Navbar Contrast Overlay */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block "
          >
            Connect With Parekh Linen
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 uppercase "
          >
            Let’s Build a <br/> <span className="text-blue-500 font-light">Partnership.</span>
          </motion.h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            Have a bulk requirement or want to visit our manufacturing unit? Our management team is ready to assist you with customized textile solutions.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CARDS (Overlapping Hero) */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 flex items-start gap-6 group hover:border-blue-500 transition-all duration-500">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="font-black text-slate-900 uppercase text-sm mb-1 tracking-widest ">Email Us</h4>
              <p className="text-slate-500 text-sm font-bold tracking-tight">info@parekhlinen.com</p>
              <p className="text-slate-500 text-sm font-bold tracking-tight">sales@parekhlinen.com</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 flex items-start gap-6 group hover:border-blue-500 transition-all duration-500">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-black text-slate-900 uppercase text-sm mb-1 tracking-widest ">Call Details</h4>
              <p className="text-slate-500 text-sm font-bold tracking-tight">+91 98765 43210</p>
              <p className="text-slate-500 text-sm font-bold tracking-tight">+91 33 2211 0099</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 flex items-start gap-6 group hover:border-blue-500 transition-all duration-500">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-black text-slate-900 uppercase text-sm mb-1 tracking-widest ">Our Location</h4>
              <p className="text-slate-500 text-sm font-bold tracking-tight">123, Textile Hub, Kolkata</p>
              <p className="text-slate-500 text-sm font-bold tracking-tight">West Bengal - 700001</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ENQUIRY FORM & MAP */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 md:p-16 rounded-[4rem] border border-slate-200 shadow-sm relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 uppercase  tracking-tighter">Trade Enquiry</h2>
              <p className="text-slate-500 font-medium mb-10">Fill the form for bulk orders or factory visit appointments.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl bg-white border-none shadow-sm focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all outline-none" />
                  <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-white border-none shadow-sm focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all outline-none" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Company Name" className="w-full px-6 py-4 rounded-2xl bg-white border-none shadow-sm focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all outline-none" />
                  <select className="w-full px-6 py-4 rounded-2xl bg-white border-none shadow-sm focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all text-slate-400 outline-none">
                    <option>Requirement Type</option>
                    <option>Bulk Fabric Supply</option>
                    <option>Institutional Linen</option>
                    <option>Factory Visit Appointment</option>
                  </select>
                </div>
                <textarea rows="5" placeholder="Your Message / Specific Requirements..." className="w-full px-6 py-4 rounded-2xl bg-white border-none shadow-sm focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all outline-none resize-none"></textarea>
                
                <button className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-[11px] active:scale-95">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <div className="bg-slate-900 p-10 rounded-[4rem] text-white relative overflow-hidden flex-grow shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[60px] rounded-full"></div>
              <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter ">Operating Hours</h3>
              <div className="space-y-5">
                <div className="flex justify-between items-center border-b border-white/10 pb-5">
                  <span className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">Monday - Friday</span>
                  <span className="font-black text-blue-400">09:00 AM - 07:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-5">
                  <span className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">Saturday</span>
                  <span className="font-black text-blue-400">10:00 AM - 04:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">Sunday</span>
                  <span className="font-black text-red-400 uppercase ">Closed</span>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Globe size={20}/></div>
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><MessageSquare size={20}/></div>
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Users size={20}/></div>
              </div>
            </div>

            <div className="h-80 rounded-[4rem] overflow-hidden border-8 border-slate-100 shadow-inner grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123!2d88.363!3d22.572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzE5LjIiTiA4OMKwMjEnNDYuOCJF!5e0!3m2!1sen!2sin!4v123456789" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;