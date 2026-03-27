import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const VisitAppointment = () => {
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
            Factory & Office Visits
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 uppercase"
          >
            Book An <span className="text-blue-500 font-light">Appointment.</span>
          </motion.h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            Schedule a visit to our state-of-the-art facilities or arrange a meeting with our management team for bulk inquiries.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto relative z-20 -mt-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden group hover:border-blue-500 transition-all duration-500"
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Schedule Visit</h2>
              <p className="text-slate-500 font-medium mb-10">Request a specific date and time for your appointment.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all outline-none" />
                  <input type="text" placeholder="Company Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all outline-none" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                     <Calendar className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                     <input type="date" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all text-slate-500 outline-none" />
                  </div>
                  <div className="relative">
                     <Clock className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                     <input type="time" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all text-slate-500 outline-none" />
                  </div>
                </div>
                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all text-slate-500 outline-none">
                  <option>Purpose of Visit</option>
                  <option>Factory Tour</option>
                  <option>Bulk Order Meeting</option>
                  <option>Partner Onboarding</option>
                </select>
                <textarea rows="4" placeholder="Additional Details..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 text-sm font-bold transition-all outline-none resize-none"></textarea>
                
                <button className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all uppercase tracking-widest text-[11px] active:scale-95">
                  Request Appointment
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info Side */}
          <div className="flex flex-col gap-8">
            <div className="bg-slate-900 p-10 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[60px] rounded-full"></div>
              <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">Visit Guidelines</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0 text-blue-400">
                     <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Punctuality</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Please arrive 15 minutes prior to your scheduled time for seamless entry processing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0 text-blue-400">
                     <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Location Details</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">All appointments must be confirmed before visiting the Kolkata headquarters or factories.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitAppointment;
