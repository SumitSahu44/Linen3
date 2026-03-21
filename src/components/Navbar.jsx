import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Products', 
      href: '/products', 
      hasDropdown: true, 
      subLinks: [
        { name: 'All Products', path: '/products' },
        { name: 'Photo Gallery', path: '/media' }
      ] 
    },
    { 
      name: 'Corporate', 
      href: '#', 
      hasDropdown: true, 
      subLinks: [
        { name: 'e-Auction', path: '/e-auction' },
        { name: 'Tender & Contract', path: '/tender-contract' },
        { name: 'Circular', path: '/media' }
      ] 
    },
    { name: 'Media', href: '/media' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'top-0 py-2' : 'top-0 py-4'
    }`}>
      {/* Main Container: 
          - bg-slate-900/80 (Transparent Black) hamesha rahega.
          - backdrop-blur-md (Glass effect) piche ke white content ko blur kar dega.
      */}
      <div className={`mx-auto max-w-[96%] transition-all duration-500 border border-white/10 shadow-2xl rounded-2xl px-6 md:px-10 py-4 text-white
        ${isScrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-blue-900/10' : 'bg-slate-900/80 backdrop-blur-md'}
      `}>
        
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center font-black text-2xl text-blue-600 transition-transform group-hover:scale-110 shadow-lg shadow-white/10">
              P
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-2xl tracking-tighter uppercase text-white">
                PAREKH<span className="text-blue-400">LINEN</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/60">
                Kolkata • WB
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                <NavLink 
                  to={link.href}
                  className={({ isActive }) => `text-[13px] font-bold uppercase tracking-widest flex items-center gap-1 transition-all active:scale-95 hover:text-blue-400 ${
                    isActive && link.href !== '#' ? 'text-blue-400' : 'text-white/90'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform opacity-50" />}
                </NavLink>
                
                {/* DROPDOWN */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900 rounded-2xl shadow-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                    <div className="p-2 flex flex-col">
                      {link.subLinks.map(sub => (
                        <Link 
                          key={sub.name} 
                          to={sub.path} 
                          className="px-5 py-3 text-sm font-bold text-white/80 hover:bg-blue-600 hover:text-white rounded-xl transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="flex items-center gap-2 px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-wider transition-all bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20">
              <Calendar size={15} className="text-blue-400" />
              Visit
            </Link>
            
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-wider transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-center">
              Enquiry
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden p-2 transition-transform active:scale-75 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU (Dark Theme) */}
      <div className={`lg:hidden fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 z-[60] ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`} onClick={() => setIsMobileMenuOpen(false)}>
        
        <div className={`absolute right-0 top-0 h-full w-[80%] bg-slate-900 shadow-2xl transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`} onClick={e => e.stopPropagation()}>
          <div className="p-8 flex flex-col h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-4 text-white">
              <span className="font-black text-xl uppercase tracking-tighter ">Navigation</span>
              <X className="cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-3">
                  <Link to={link.href} className="text-xl font-black text-white hover:text-blue-400">{link.name}</Link>
                  {link.hasDropdown && (
                    <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                      {link.subLinks.map(sub => (
                        <Link key={sub.name} to={sub.path} className="text-white/50 font-bold text-sm hover:text-white">{sub.name}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-3 pb-8">
              <Link to="/contact" className="block w-full py-4 bg-blue-600 text-white text-center rounded-2xl font-black uppercase tracking-widest text-xs">
                Trade Enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;