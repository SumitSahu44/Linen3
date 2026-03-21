import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-20 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 ">Pan India Presence</h2>
          <p className="text-slate-400 text-lg mb-8">
            Our network of textile associates spans across the nation, ensuring timely delivery and premium quality raw materials from every corner of India.
          </p>
          <div className="space-y-4">
            {['Kolkata (HQ)', 'Mumbai', 'Ahmedabad', 'Surat', 'Tiruppur'].map((city) => (
              <div key={city} className="flex items-center gap-3 group cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition"></div>
                <span className="text-slate-300 group-hover:text-white transition">{city}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Placeholder for India Map */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-md aspect-square bg-slate-900 rounded-full flex items-center justify-center border border-slate-800">
             {/* Yahan aap React-Simple-Maps ka SVG dal sakte hain, filhal icon placeholder hai */}
             <MapPin size={80} className="text-blue-600 animate-pulse" />
             <div className="absolute inset-0 border-2 border-dashed border-slate-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;