import React from 'react';

const certifications = [
  {
    name: 'British Council',
    role: 'Certified Agent',
    icon: 'fa-graduation-cap',
    color: 'text-blue-600',
    description: 'Trained & Certified for UK Education'
  },
  {
    name: 'ICEF Certified',
    role: 'Agency ITAC 1243',
    icon: 'fa-certificate',
    color: 'text-brandGrowth',
    description: 'Global Standards in Education'
  },
  {
    name: 'UCAS Center',
    role: 'Registered Centre',
    icon: 'fa-university',
    color: 'text-red-600',
    description: 'Official UK Admissions Partner'
  },
  {
    name: 'PIER Approved',
    role: 'QEAC Certified',
    icon: 'fa-award',
    color: 'text-brandGold',
    description: 'Qualified Australian Education Counselor'
  }
];

const Certifications: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-2">Certified Industry Recognition</h3>
          <div className="w-12 h-0.5 bg-brandCTA mx-auto opacity-30"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {certifications.map((cert, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="flex items-center gap-4 mb-3">
                <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-lg ${cert.color}`}>
                  <i className={`fas ${cert.icon}`}></i>
                </div>
                <div className="text-left">
                  <h4 className="font-black text-primary text-xs uppercase tracking-tight leading-none mb-1">{cert.name}</h4>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">{cert.role}</p>
                </div>
              </div>
              <p className="text-[9px] font-medium text-slate-500 italic opacity-0 group-hover:opacity-100 transition-opacity">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;