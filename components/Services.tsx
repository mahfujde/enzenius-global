
import React from 'react';

const services = [
  {
    title: 'Student Counseling',
    description: 'Expert guidance on selecting the right courses and universities based on your profile and career goals.',
    icon: 'fa-comments'
  },
  {
    title: 'University Admission',
    description: 'Complete assistance with application forms, SOPs, and LORs to ensure maximum chance of acceptance.',
    icon: 'fa-file-signature'
  },
  {
    title: 'Visa Assistance',
    description: 'Specialized visa guidance to help you navigate documentation and interview preparation smoothly.',
    icon: 'fa-passport'
  },
  {
    title: 'Scholarship Support',
    description: 'Helping students identify and apply for various merit-based and financial-need scholarships.',
    icon: 'fa-award'
  },
  {
    title: 'Pre-Departure Briefing',
    description: 'Guidance on what to expect, cultural adjustment, and travel arrangements before you fly.',
    icon: 'fa-plane-departure'
  },
  {
    title: 'Career Coaching',
    description: 'Long-term advice on how to turn your international degree into a successful global career.',
    icon: 'fa-briefcase'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-brandSoft/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brandDeep mb-4 uppercase tracking-tighter">Our Premium Services</h2>
          <div className="w-24 h-1 bg-brandGrowth mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From your first consultation to your first day on campus, Enzenius Global is your dedicated partner in every step of your study abroad journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-brandSoft/30 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-brandSoft/20 text-brandGrowth rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-brandGrowth group-hover:text-white transition-colors">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-black text-brandDeep mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
