
import React from 'react';

const ServicesPage: React.FC = () => {
  const detailedServices = [
    {
      title: 'Global University Admissions',
      tag: 'Core Service',
      description: 'Navigating university entry requirements can be daunting. We provide a tailored list of institutions that match your academic history, budget, and location preferences.',
      features: ['Direct Application Processing', 'SOP & Resume Editing', 'LOR Guidance', 'Application Tracking'],
      img: '/images/globaladmisison.jpg'
    },
    {
      title: 'Student Visa Masterclass',
      tag: '98% Success',
      description: 'A rejected visa can derail your dreams. Our visa cell is led by expert counselors and legal advisors who ensure your file is impeccable.',
      features: ['GTE Financial Documentation', 'Mock Interviews', 'SOP for Visa Approval', 'Health Check Guidance'],
      img: '/images/masterclass.jpg'
    },
    {
      title: 'Scholarship Procurement',
      tag: 'Merit-Based',
      description: 'International education is an investment. We help you reduce costs by identifying merit, diversity, and country-specific scholarships.',
      features: ['Early Application Strategy', 'Scholarship Essay Review', 'Bursary Identification', 'External Grant Advisory'],
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  const steps = [
    { num: '01', title: 'Consultation', desc: 'Initial meeting to understand your goals, background, and financial capacity.' },
    { num: '02', title: 'University Selection', desc: 'Shortlisting universities that best fit your profile and career aspirations.' },
    { num: '03', title: 'Application', desc: 'Submitting meticulously prepared applications to your chosen institutions.' },
    { num: '04', title: 'Offer Letter', desc: 'Receiving conditional or unconditional offers from the universities.' },
    { num: '05', title: 'Visa Processing', desc: 'Guided documentation and interview prep for a seamless visa approval.' },
    { num: '06', title: 'Departure', desc: 'Final briefings on flights, accommodation, and life in your new country.' }
  ];

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <section className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-2 md:mb-4">
              Our Comprehensive Services
            </h1>
            <p className="text-blue-100/95 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed px-2">
              From early counseling to settling into your dorm, we provide end-to-end support for your international education journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 space-y-32">
          {detailedServices.map((service, i) => (
            <div key={i} className={`flex flex-col lg:items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              <div className="flex-1">
                <span className="bg-blue-100 text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">{service.tag}</span>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">{service.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">{service.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                      <i className="fas fa-check-circle text-primary"></i>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <img src={service.img} alt={service.title} className="rounded-3xl shadow-2xl border-8 border-slate-50" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Process */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Our Success Process</h2>
            <p className="text-slate-500 max-w-lg mx-auto">A structured 6-step roadmap that has helped over 5,000 students reach their dream universities.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group overflow-hidden">
                <div className="text-6xl font-black text-slate-100 absolute -top-2 -right-2 group-hover:text-primary/10 transition-colors">{step.num}</div>
                <h3 className="text-xl font-black mb-4 relative z-10">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ for SEO */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tighter">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: 'What are the consultation fees?', a: 'Enzenius Global provides the first general counseling session absolutely free. Our processing fees vary by destination and service package.' },
              { q: 'How long does the admission process take?', a: 'Typically, it takes 2-6 weeks for UK/USA universities to issue an offer letter, depending on the course and level of study.' },
              { q: 'Do you help with IELTS preparation?', a: 'Yes! We have in-house English language experts providing guidance for IELTS, PTE, and Duolingo English Tests.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-blue-400">Q.</span> {faq.q}
                </h4>
                <p className="text-blue-100/60 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
