import React from 'react';
import { Send, FileText, CheckCircle2, Globe } from 'lucide-react';

const EQuotation = () => {
  return (
    <div className="py-32 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section - Same as Engineering Section */}
        <div className="grid lg:grid-cols-2 gap-24 items-end mb-20">
          <div className="space-y-6">
            <span className="text-blue-600 font-black uppercase  text-[12px]"><span className="lowercase">e-</span>Quotation System</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900  mt-4 uppercase">
              Request A <br/> <span className="text-blue-600">Global Quote.</span>
            </h2>
          </div>
          <div className="border-l-4 border-blue-600 pl-8">
            <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-md">
  Request an instant quotation for custom bulk orders and export inquiries. Our team will respond within 24 hours.
</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Order Summary / Guidelines */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-10 rounded-[3.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
               {/* Decorative Element matching your style */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-[4rem] -z-0 opacity-5"></div>
               
               <h3 className="text-2xl font-black text-slate-900 uppercase mb-8">Order Guidelines</h3>
               
               <div className="space-y-8 relative z-10">
                 <div className="flex gap-6 items-start">
                    <div className="bg-blue-600/10 p-3 rounded-2xl text-blue-600">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest">Minimum Order Quantity</h4>
                      <p className="text-slate-500 text-xs mt-1 font-medium italic">Domestic: 500 Meters | Export: 2000 Meters</p>
                    </div>
                 </div>

                 <div className="flex gap-6 items-start">
                    <div className="bg-blue-600/10 p-3 rounded-2xl text-blue-600">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest">Global Shipping</h4>
                      <p className="text-slate-500 text-xs mt-1 font-medium italic">FOB, CIF & door-to-door delivery available worldwide.</p>
                    </div>
                 </div>

                 <div className="flex gap-6 items-start">
                    <div className="bg-blue-600/10 p-3 rounded-2xl text-blue-600">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest">Customization</h4>
                      <p className="text-slate-500 text-xs mt-1 font-medium italic">Thread count selection from 200TC to 1000TC.</p>
                    </div>
                 </div>
               </div>
            </div>

            {/* Note Section */}
            <div className="bg-blue-600 p-10 rounded-[3.5rem] text-white">
               <h4 className="font-black uppercase tracking-widest text-xs mb-4">Fast Track Support</h4>
               <p className="text-2xl font-black leading-tight uppercase">Bulk Order Hotline: <br/> +91 98765 43210</p>
            </div>
          </div>

          {/* RIGHT: High-End Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-slate-50">
              <form className="space-y-10">
                
                {/* Section 1: Business Info */}
                <div className="space-y-6">
                  <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[12px]">01. Business Details</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input type="text" placeholder="COMPANY NAME" className="w-full bg-slate-50 p-5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600 font-bold text-xs tracking-widest uppercase placeholder:text-slate-300 transition-all" />
                    <input type="text" placeholder="CONTACT PERSON" className="w-full bg-slate-50 p-5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600 font-bold text-xs tracking-widest uppercase placeholder:text-slate-300 transition-all" />
                  </div>
                </div>

                {/* Section 2: Product Info */}
                <div className="space-y-6">
                  <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[12px]">02. Product Selection</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <select className="w-full bg-slate-50 p-5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600 font-bold text-xs tracking-widest uppercase text-slate-400 appearance-none">
                      <option>SELECT FABRIC TYPE</option>
                      <option>PREMIUM LINEN</option>
                      <option>EGYPTIAN COTTON</option>
                      <option>POLY-SILK BLEND</option>
                    </select>
                    <input type="number" placeholder="QUANTITY (METERS)" className="w-full bg-slate-50 p-5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600 font-bold text-xs tracking-widest uppercase placeholder:text-slate-300 transition-all" />
                  </div>
                </div>

                {/* Section 3: Message */}
                <div className="space-y-6">
                  <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[12px]">03. Additional Specs</span>
                  <textarea rows="4" placeholder="ANY SPECIFIC THREAD COUNT OR COLOR REQUIREMENTS?" className="w-full bg-slate-50 p-6 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600 font-bold text-xs tracking-widest uppercase placeholder:text-slate-300 transition-all"></textarea>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-blue-600 text-white font-black py-6 rounded-2xl shadow-[0_20px_40px_rgba(37,99,235,0.2)] hover:bg-slate-900 hover:scale-[1.02] transition-all uppercase  text-[11px] flex items-center justify-center gap-4">
                  Request Quotation <Send size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EQuotation;