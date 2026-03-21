import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Clock, MapPin, ArrowRight, Download, Users, Lightbulb } from 'lucide-react';

const CareerPage = () => {
  const jobs = [
    { id: 1, title: 'Senior Textile Engineer', dept: 'Production', loc: 'Kolkata Plant', type: 'Full Time', exp: '5-8 Years' },
    { id: 2, title: 'Quality Assurance Manager', dept: 'Quality Control', loc: 'Kolkata Plant', type: 'Full Time', exp: '4-6 Years' },
    { id: 3, title: 'Sales Executive', dept: 'Institutional Sales', loc: 'Kolkata / WB', type: 'Full Time', exp: '2-4 Years' },
    { id: 4, title: 'Logistics Coordinator', dept: 'Supply Chain', loc: 'Head Office', type: 'Contract', exp: '3-5 Years' },
  ];

  const benefits = [
    { title: 'Modern Environment', desc: 'Work with the latest Japanese and German textile machinery.', icon: <Lightbulb size={24}/> },
    { title: 'Growth Path', desc: 'Clear career progression and internal promotion policies.', icon: <GraduationCap size={24}/> },
    { title: 'Great Culture', desc: 'A diverse and inclusive workplace rooted in Kolkata’s values.', icon: <Users size={24}/> },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen pb-20">
      {/* 1. Career Hero Section */}
      <section className="bg-slate-50 py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block"
            >
              Join the Legacy
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
              Weave Your <br/> <span className="text-blue-600 ">Future</span> With Us.
            </h1>
            <p className="text-slate-500 font-medium text-lg max-w-xl leading-relaxed">
              At Parekh Linen, we don’t just manufacture fabrics; we build careers. Join a team of 500+ professionals dedicated to textile excellence.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800" alt="Team working" className="w-full h-[400px] object-cover"/>
             </div>
             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-full -z-0 blur-3xl opacity-20"></div>
          </div>
        </div>
      </section>

      {/* 2. Why Join Us / Benefits */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {benefits.map((b, i) => (
            <div key={i} className="group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6">
                {b.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 uppercase  mb-4">{b.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Job Openings (The Dashboard View) */}
      <section className="py-24 px-6 bg-slate-950 relative overflow-hidden rounded-[4rem] mx-4 md:mx-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase ">Current Openings</h2>
              <p className="text-slate-400 mt-2 font-medium tracking-wide">Find your next challenge in the textile industry.</p>
            </div>
            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-blue-400 font-bold text-xs uppercase tracking-widest">
              {jobs.length} Positions Available
            </div>
          </div>

          <div className="grid gap-6">
            {jobs.map((job) => (
              <motion.div 
                whileHover={{ scale: 1.01 }}
                key={job.id} 
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 group hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-6 w-full md:w-auto">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-black text-white group-hover:text-blue-400 transition-colors">{job.title}</h4>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-1"><MapPin size={12}/> {job.loc}</span>
                      <span className="flex items-center gap-1"><Clock size={12}/> {job.type}</span>
                      <span className="text-blue-500">Exp: {job.exp}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full md:w-auto px-10 py-4 bg-white text-slate-950 font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 group/btn">
                  APPLY FOR THIS ROLE <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform"/>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HR Circulars / Notices */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-50 p-10 md:p-16 rounded-[3.5rem] border border-slate-200">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                 <h3 className="text-3xl font-black text-slate-900 uppercase  mb-4">HR & Internship Circulars</h3>
                 <p className="text-slate-500 font-medium leading-relaxed">
                   Download the latest recruitment policies, internship guidelines, and employee circulars here.
                 </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
                <button className="p-6 bg-white rounded-3xl border border-slate-200 flex items-center justify-between gap-4 hover:shadow-lg transition group">
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase text-blue-600 mb-1">Download PDF</p>
                    <p className="text-sm font-bold text-slate-900">Internship Policy 2026</p>
                  </div>
                  <Download size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors"/>
                </button>
                <button className="p-6 bg-white rounded-3xl border border-slate-200 flex items-center justify-between gap-4 hover:shadow-lg transition group">
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase text-blue-600 mb-1">Download PDF</p>
                    <p className="text-sm font-bold text-slate-900">Conduct Guidelines</p>
                  </div>
                  <Download size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors"/>
                </button>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Resume Drop (Quick Action) */}
      <section className="py-20 text-center max-w-3xl mx-auto px-6">
        <h3 className="text-2xl font-black text-slate-900  mb-4">Don't see a matching role?</h3>
        <p className="text-slate-500 font-medium mb-8 leading-relaxed">
          Drop your resume at our talent pool. We’ll notify you when a role that matches your expertise opens up.
        </p>
        <button className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] border-b-4 border-blue-600 pb-1 hover:text-blue-700 hover:border-blue-700 transition-all">
          Upload Your Resume
        </button>
      </section>
    </div>
  );
};

export default CareerPage;