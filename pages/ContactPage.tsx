import React from 'react';
import OfficeLocations from '../components/OfficeLocations';

const ContactPage: React.FC = () => {
  const applyFormUrl = "https://forms.zohopublic.com/pumasolutionsglobalgm1/form/StudentAssessment/formperma/Zgn5DTfvr31olMyn3d5sKFnEbSv9HALS4_wOnGR5AQE";
  const whatsappNumber = "601161169434";
  const whatsappMsg = encodeURIComponent("Hello Enzenius Global, I am looking for a consultation regarding my overseas studies.");

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <section className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000&auto=format&fit=crop')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-2 md:mb-4">
              Get In Touch
            </h1>
            <p className="text-blue-100/95 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed px-2">
              Have questions? Our regional experts are just a message away. Reach out to our specialized hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20">
          {/* Form CTA instead of internal form */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 flex flex-col justify-center text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-edit text-4xl"></i>
              </div>
              <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">Official Application Portal</h2>
              <p className="text-slate-600 mb-10">
                To provide you with the most accurate counseling and support, please fill out our primary information form. It takes less than 5 minutes to get started on your global journey.
              </p>
            </div>
            
            <a 
              href={applyFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-black py-5 rounded-xl uppercase tracking-widest hover:bg-blue-800 transition shadow-lg flex items-center justify-center gap-3 active:scale-95"
            >
              Start Online Application <i className="fas fa-external-link-alt text-sm"></i>
            </a>
            
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div className="text-left">
                <h4 className="text-[10px] font-black uppercase text-slate-400 mb-1">Processing Time</h4>
                <p className="text-sm font-bold">24-48 Hours</p>
              </div>
              <div className="text-left">
                <h4 className="text-[10px] font-black uppercase text-slate-400 mb-1">Privacy Status</h4>
                <p className="text-sm font-bold text-green-600">Secure & Encrypted</p>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h3 className="text-4xl font-black mb-8 text-slate-900 leading-tight uppercase tracking-tighter">Regional Support Network</h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Whether you are in Jakarta or Kuala Lumpur, our localized support ensures you speak to someone who understands your specific context while offering elite global perspectives.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h5 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1">Official Email</h5>
                  <p className="text-lg font-bold text-slate-600">admissions@enzeniusglobal.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center text- head-set text-2xl shadow-sm">
                  <i className="fas fa-headset"></i>
                </div>
                <div>
                  <h5 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1">Kuala Lumpur Helpline</h5>
                  <p className="text-lg font-bold text-slate-600">+60 11 6116 9434</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-primary rounded-3xl text-white">
              <h4 className="text-xl font-bold mb-4">Urgent Consultation?</h4>
              <p className="text-blue-100 mb-6 text-sm">Join our specialized regional network for real-time updates on scholarships and visa regulations.</p>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-black uppercase tracking-widest bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
              >
                <i className="fab fa-whatsapp"></i> Chat with Regional Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section id="offices">
        <OfficeLocations />
      </section>
    </div>
  );
};

export default ContactPage;