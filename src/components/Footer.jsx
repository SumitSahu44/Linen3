import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-b border-white/5 pb-20">
          
          {/* 1. Brand Section */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-black text-xl text-white">P</div>
              <span className="font-black text-2xl tracking-tighter uppercase">
                PAREKH<span className="text-blue-500">LINEN</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Leading the textile legacy of Kolkata since 1998. Manufacturers & exporters of premium industrial fabrics and luxury linens.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-white/10 shadow-lg">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Navigation (Internal Links) */}
          <div className="space-y-8">
            <h5 className="font-black text-sm uppercase tracking-[0.3em] text-blue-500 ">Navigation</h5>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Legacy', path: '/about' },
                { name: 'Product Catalog', path: '/products' },
                { name: 'e-Auction Board', path: '/e-auction' },
                { name: 'Media Channel', path: '/media' },
                { name: 'Career Openings', path: '/careers' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 text-[13px] font-bold  tracking-widest hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact & HQ Details */}
          <div className="space-y-8">
            <h5 className="font-black text-sm uppercase tracking-[0.3em] text-blue-500 ">Headquarters</h5>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="text-blue-500 shrink-0" size={20} />
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  123, Textile Market Estate, Kolkata, West Bengal - 700001
                </p>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors border border-white/10">
                  <Phone size={14} className="text-blue-500 group-hover:text-white" />
                </div>
                <p className="text-slate-400 text-sm font-bold">+91 33 2211 0099</p>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors border border-white/10">
                  <Mail size={14} className="text-blue-500 group-hover:text-white" />
                </div>
                <p className="text-slate-400 text-sm font-bold">sales@parekhlinen.com</p>
              </div>
            </div>
          </div>

          {/* 4. Google Map Mini View */}
          <div className="space-y-8">
            <h5 className="font-black text-sm uppercase tracking-[0.3em] text-blue-500 ">Our Location</h5>
            <div className="rounded-[2.5rem] overflow-hidden h-48 bg-slate-900 border-4 border-white/5 shadow-2xl relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35221276189!2d88.26495022131971!3d22.53540647467614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cb2!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1710123456789!5m2!1sen!2sin" 
                width="100%" height="100%" style={{border:0, filter: 'grayscale(100%) invert(90%)'}} allowFullScreen loading="lazy" title="Location Map">
               </iframe>
               <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2.5rem]"></div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
            <p>© {currentYear} PAREKH LINEN PRIVATE LIMITED</p>
            <span className="hidden md:block opacity-20 text-white">|</span>
            <p className="hover:text-blue-500 transition-colors cursor-pointer">Privacy Policy</p>
            <p className="hover:text-blue-500 transition-colors cursor-pointer">Terms of Service</p>
          </div>
          
          <div className="text-center md:text-right">
             <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
                Engineered with <span className="text-blue-600">Precision</span> in Kolkata
             </p>
          </div>
        </div>
      </div>
   </footer>
  );
};

export default Footer;