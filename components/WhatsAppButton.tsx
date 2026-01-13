
import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "601161169434";
  const message = encodeURIComponent("Hello Enzenius Global, I am interested in your consultancy services. Could you please guide me?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100] group">
      {/* Label Badge */}
      <div className="absolute right-20 bottom-3 bg-white text-primary px-4 py-2 rounded-xl shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0 whitespace-nowrap hidden md:block">
        <p className="text-xs font-black uppercase tracking-widest">Chat with an Expert</p>
      </div>

      {/* Floating Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center text-white text-3xl hover:bg-[#20ba5a] transition-all hover:scale-110 active:scale-95 border-4 border-white relative overflow-hidden group/btn"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
        <i className="fab fa-whatsapp relative z-10"></i>
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20"></span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
