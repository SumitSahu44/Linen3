import React from 'react';

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/919876543210" // Apna sahi number yahan daalein
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] p-4 rounded-full text-white shadow-2xl hover:scale-110 transition-all animate-bounce flex items-center justify-center"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.403 0 6.556-5.332 11.891-11.891 11.891-2.093 0-4.141-.544-5.946-1.587l-6.05 1.605zm6.426-3.702l.33.196c1.589.945 3.429 1.443 5.313 1.443 5.475 0 9.927-4.451 9.927-9.927 0-2.654-1.034-5.148-2.911-7.025-1.878-1.877-4.373-2.912-7.016-2.912-5.475 0-9.927 9.927 0 2.183.711 4.307 2.056 6.057l.243.315-.909 3.32 3.403-.903z"/>
      </svg>
    </a>
  );
};

export default WhatsAppFloat;