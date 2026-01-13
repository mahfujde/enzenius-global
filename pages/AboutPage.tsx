import React, { useState } from 'react';
import Certifications from '../components/Certifications';

const AboutPage: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  // Verified High-Resolution Professional Portraits
  const team = [
    {
      name: "Andi Wijaya",
      role: "Senior Admissions Specialist",
      location: "Jakarta, Indonesia",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Siska Pratama",
      role: "Regional Operations Head",
      location: "Jakarta, Indonesia",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Hendra Kusuma",
      role: "Senior Visa Compliance Lead",
      location: "Jakarta, Indonesia",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Nurul Hidayah",
      role: "Senior Education Strategist",
      location: "Kuala Lumpur, Malaysia",
      img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Mohd Ridzuan",
      role: "International Partnerships Liaison",
      location: "Kuala Lumpur, Malaysia",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <article className="animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Brand Header */}
      <section className="bg-primary text-white py-24 relative overflow-hidden" aria-labelledby="about-title">
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brandCTA/20 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h1 id="about-title" className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
            Global Leadership & <br/> Corporate Vision
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl font-medium">
            Bridging aspirations across Malaysia and Indonesia with over a decade of elite excellence in global education.
          </p>
        </div>
      </section>

      {/* Message from Director */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-2/5 relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brandCTA/10 rounded-full blur-3xl"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50 aspect-square bg-slate-100 flex items-center justify-center">
                {!imgError ? (
                  <img 
                    src="/images/Boss.png" 
                    alt="Dwi Putri Iraningsih - Director" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary to-brandRoyal flex flex-col items-center justify-center text-white p-12 text-center">
                    <i className="fas fa-user-tie text-7xl mb-6 text-brandCTA"></i>
                    <p className="font-black text-3xl uppercase tracking-tighter">Dwi Putri Iraningsih</p>
                    <div className="w-12 h-1 bg-brandCTA my-4"></div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-200">Director</p>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-3xl shadow-xl hidden md:block border-t border-white/10">
                <p className="font-black uppercase tracking-widest text-[10px] text-brandCTA mb-1">Executive Board</p>
                <p className="text-lg font-black tracking-tight uppercase">Dwi Putri Iraningsih</p>
                <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Enzenius Global</p>
              </div>
            </div>
            <div className="w-full lg:w-3/5 space-y-8">
              <div className="inline-flex bg-brandCTA/10 border border-brandCTA/20 text-brandCTA px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
                Letter from the Director
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight uppercase tracking-tighter">
                Global Aspirations, <br/> Grounded in Trust.
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-medium italic">
                <p>
                  "Since 2015, my vision for <strong>Enzenius Consultancy Services Limited</strong> has been to create a bridge where local talent meets global opportunity. We believe every student in Indonesia and Malaysia deserves access to the world's finest classrooms."
                </p>
                <p>
                  "Through our strategic synergy with our sister concern, <strong>Pt. Puma Solutions Global</strong>, we have solidified our presence as a regional powerhouse. We are not just a consultancy; we are your lifelong partners in academic and professional success."
                </p>
              </div>
              <div className="pt-8 border-t border-slate-100">
                <div className="flex items-center gap-6">
                  <div className="w-px h-16 bg-brandCTA"></div>
                  <div>
                    <p className="text-2xl font-black text-primary uppercase tracking-tighter">Dwi Putri Iraningsih</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                      Director, Enzenius Consultancy Services Limited <br/> 
                      Director, Pt. Puma Solutions Global
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Certifications />

      {/* Mission & Vision Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brandCTA/5 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brandRoyal/10 blur-[120px]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="bg-white/5 border border-white/10 p-10 lg:p-14 rounded-[3rem] backdrop-blur-md relative group hover:bg-white/10 transition-all duration-500">
              <div className="w-20 h-20 bg-brandCTA rounded-3xl flex items-center justify-center mb-10 shadow-2xl shadow-brandCTA/30 group-hover:scale-110 transition-transform duration-500">
                <i className="fas fa-bullseye text-3xl text-white"></i>
              </div>
              <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter text-white">Our Mission</h3>
              <p className="text-blue-100/70 leading-relaxed text-lg font-medium">
                To empower aspiring students through ethical, transparent, and comprehensive global education consultancy. We are dedicated to bridging the gap between local talent and international excellence by providing meticulous counseling, robust visa support, and life-changing academic pathways.
              </p>
              <div className="absolute top-8 right-8 text-white/5 text-8xl font-black select-none pointer-events-none uppercase">M</div>
            </div>

            {/* Vision Card */}
            <div className="bg-white/5 border border-white/10 p-10 lg:p-14 rounded-[3rem] backdrop-blur-md relative group hover:bg-white/10 transition-all duration-500">
              <div className="w-20 h-20 bg-brandGrowth rounded-3xl flex items-center justify-center mb-10 shadow-2xl shadow-brandGrowth/30 group-hover:scale-110 transition-transform duration-500">
                <i className="fas fa-eye text-3xl text-white"></i>
              </div>
              <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter text-white">Our Vision</h3>
              <p className="text-blue-100/70 leading-relaxed text-lg font-medium">
                To be the world's most trusted gateway for international education, recognized for our unwavering integrity and innovative approach to student recruitment. We aim to transform lives by becoming the primary architect of academic and professional success for students across Southeast Asia and beyond.
              </p>
              <div className="absolute top-8 right-8 text-white/5 text-8xl font-black select-none pointer-events-none uppercase">V</div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Consultant Team */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-brandCTA font-black uppercase tracking-widest text-xs block mb-4">Our Regional Experts</span>
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-6">World-Class Counseling Team</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              A specialized team of 5 senior consultants strategically positioned in our Jakarta and Kuala Lumpur hubs to provide localized expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group flex flex-col items-center text-center">
                <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative shadow-lg group-hover:shadow-2xl transition-all border-4 border-white bg-white">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="font-black text-primary uppercase text-sm tracking-tight mb-1">{member.name}</h4>
                <p className="text-[10px] font-black text-brandCTA uppercase tracking-widest mb-2">{member.role}</p>
                <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  <i className="fas fa-map-marker-alt text-primary/30"></i>
                  {member.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-24 bg-brandSoft/20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="text-brandCTA font-black uppercase tracking-widest text-[10px] block mb-4">Operational Synergy</span>
          <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-12">Strategic Partnership Hub</h2>
          <div className="max-w-4xl mx-auto bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">Mediabrust</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                As our exclusive <strong>Technology and Marketing Partner</strong>, Mediabrust empowers Enzenius Global with state-of-the-art digital infrastructure and innovative student engagement strategies, ensuring our services remain at the forefront of the international education industry.
              </p>
              <a 
                href="https://mediabrust.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brandCTA font-black uppercase tracking-widest text-xs mt-6 hover:translate-x-1 transition-transform"
              >
                Visit Mediabrust <i className="fas fa-external-link-alt text-[10px]"></i>
              </a>
            </div>
            <div className="w-px h-32 bg-slate-100 hidden md:block"></div>
            <div className="flex-shrink-0">
               <div className="w-32 h-32 bg-slate-50 rounded-3xl flex items-center justify-center border border-slate-100 grayscale hover:grayscale-0 transition-all duration-500">
                 <i className="fas fa-rocket text-4xl text-brandCTA"></i>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Narrative */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-primary leading-tight uppercase tracking-tighter">Operational Strength & Integrity</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-medium">
              <p>
                <strong>Enzenius Global</strong> is more than a name; it is a standard of excellence. Our operational backbone is strengthened by our sister concern, <strong>Pt. Puma Solutions Global</strong>, providing us with a robust logistical and corporate infrastructure in Indonesia.
              </p>
              <p>
                Together, we represent over 600+ partner universities across the United Kingdom, USA, Canada, Australia, and New Zealand. Our team ensures that every application meets the most stringent GTE and visa requirements, resulting in our industry-leading 98% success rate.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
              <div className="border-l-4 border-brandCTA pl-6">
                <h4 className="text-4xl font-black text-primary mb-2">98%</h4>
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Visa Success</p>
              </div>
              <div className="border-l-4 border-brandRoyal pl-6">
                <h4 className="text-4xl font-black text-primary mb-2">10+</h4>
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Years of Trust</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" alt="Corporate HQ" className="rounded-3xl mt-8 shadow-xl border border-slate-100" />
             <img src="/images/teamdiscussion.jpg" alt="Team Discussion" className="rounded-3xl shadow-xl border border-slate-100" />
          </div>
        </div>
      </section>
    </article>
  );
};

export default AboutPage;