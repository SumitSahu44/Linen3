import React from 'react';

const EnquiryForm = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left: Info Text */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Partner With Us</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Looking for bulk supply or want to visit our manufacturing unit in Kolkata? 
            Fill out the form and our management team will reach out within 24 hours.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0  font-bold">@</div>
              <div>
                <h4 className="font-bold text-slate-900">Email Enquiries</h4>
                <p className="text-slate-500 text-sm ">sales@parekhlinen.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Actual Form */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl relative overflow-hidden">
            {/* Design Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            
            <form className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="Your Name" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
                <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
              </div>
              <input type="text" placeholder="Company Name" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
              <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition bg-white appearance-none text-slate-500">
                <option>Enquiry Type</option>
                <option>Trade Enquiry</option>
                <option>Factory Visit Appointment</option>
                <option>Quotation Request</option>
              </select>
              <textarea placeholder="Tell us about your requirements..." rows="4" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"></textarea>
              <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all transform active:scale-95">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EnquiryForm;