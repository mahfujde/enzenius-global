import React, { useMemo } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import OfficeLocations from '../components/OfficeLocations';
import Certifications from '../components/Certifications';
import { Page } from '../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const testimonials = [
  { 
    name: 'Siti Nurhaliza', 
    country: 'Indonesia', 
    destination: 'U. of Melbourne', 
    status: 'Scholarship', 
    time: '4 hours ago', 
    text: 'The scholarship support was incredible. I secured a merit grant thanks to my dedicated counselor.', 
    img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=400&auto=format&fit=crop',
    id: 'EG-8842'
  },
  { 
    name: 'Lee Ming', 
    country: 'Malaysia', 
    destination: 'U. of Toronto', 
    status: 'Placed', 
    time: 'Today', 
    text: 'The pre-departure briefing prepared me perfectly for my new life in Canada.', 
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
    id: 'EG-7731'
  },
  { 
    name: 'Sarah Ahmed', 
    country: 'International', 
    destination: 'King\'s College', 
    status: 'Visa Approved', 
    time: 'Today', 
    text: 'They simplified the complex UK visa process. I am now heading to London with confidence.', 
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    id: 'EG-6610'
  },
  { 
    name: 'Budi Santoso', 
    country: 'Indonesia', 
    destination: 'Taylor\'s University', 
    status: 'Enrollment Finalized', 
    time: 'Yesterday', 
    text: 'Found the perfect twinning program. Affordable and high-quality education.', 
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    id: 'EG-5529'
  }
];

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const applyFormUrl = "https://forms.zohopublic.com/aucklandenzgm1/form/Primaryinformationform/formperma/5h49y5YaIsrzFQCsSgmcUpnW93PH_2Pq5nM1Us0EC8Y";
  const userCountry = useMemo(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz.includes('Kuala_Lumpur')) return 'Malaysia';
    if (tz.includes('Jakarta')) return 'Indonesia';
    return 'Global';
  }, []);

  return (
    <div className="space-y-0">
      <Hero onNavigate={onNavigate} detectedCountry={userCountry} />
      
      <section className="py-20 bg-white">
        <article className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-8 leading-tight uppercase tracking-tighter">
            Enzenius Global: {userCountry !== 'Global' ? `${userCountry}'s` : 'Your'} Gateway to Elite Higher Education
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">
            Since <strong>2015</strong>, Enzenius Consultancy Services Limited has been a dominant force in the international education sector. Operating across <strong>Malaysia</strong> and <strong>Indonesia</strong>, we represent over <strong>600+ partner universities</strong> globally.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => onNavigate('about')}
              className="text-brandCTA font-black flex items-center gap-3 hover:translate-x-1 transition-transform uppercase tracking-[0.2em] text-xs"
            >
              Learn Our Story <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </article>
      </section>

      <Stats />
      <Certifications />
      
      <div id="services">
        <Services />
      </div>

      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-4 bg-brandCTA/10 rounded-[3rem] blur-2xl group-hover:bg-brandCTA/20 transition-all duration-700"></div>
            <img 
              src="/images/professinalcounsellor.jpg" 
              alt="Professional Education Consultant at Enzenius Global" 
              className="relative z-10 rounded-[2.5rem] shadow-2xl border-4 border-white object-cover aspect-[4/3] w-full"
            />
            <div className="absolute -bottom-8 -right-8 z-20 bg-primary text-white p-6 rounded-2xl shadow-xl hidden md:block border-l-4 border-brandCTA">
              <p className="text-[10px] font-black text-brandCTA uppercase tracking-[0.3em] mb-1">Accredited Expert</p>
              <p className="text-lg font-black tracking-tight uppercase">Professional Counselor</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-brandCTA font-black uppercase tracking-widest text-xs block mb-4">Excellence in Consulting</span>
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-8 uppercase tracking-tighter leading-none">Global Education <br/>Consultancy Specialists</h2>
            <div className="space-y-6">
              {[
                { title: 'ICEF Certified Agency', desc: 'Our advisors meet the highest global standards for education counseling.', icon: 'fa-certificate' },
                { title: 'Elite University Portfolio', desc: 'Direct access to admissions for 600+ top-ranked global institutions.', icon: 'fa-network-wired' },
                { title: 'Comprehensive Visa Cell', desc: 'Expert GTE documentation and visa strategy for a 98% success rate.', icon: 'fa-passport' },
                { title: 'Tailored Student Roadmap', desc: 'Personalized guidance from course selection to post-landing support.', icon: 'fa-map-location-dot' }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-brandCTA text-2xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="font-black text-primary text-lg uppercase tracking-tight mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="destinations">
        <Destinations onNavigate={onNavigate} />
      </div>

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <span className="text-brandCTA font-black uppercase tracking-widest text-xs block mb-4">Student Stories</span>
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">Voices of Success</h2>
              <p className="text-slate-500 max-w-2xl mt-4">Real success stories from students who achieved their dreams with Enzenius Global.</p>
            </div>
            <div className="hidden md:flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-full border border-slate-200">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandGrowth opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brandGrowth"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Active Monitoring</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((student, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <img src={student.img} alt={student.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-50" />
                  <div>
                    <h4 className="font-black text-primary uppercase tracking-tight text-xs">{student.name}</h4>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{student.country}</p>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-slate-600 text-xs leading-relaxed font-medium italic mb-4">"{student.text}"</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    <span className="bg-primary/5 text-primary px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">{student.destination}</span>
                    <span className="bg-brandGrowth/10 text-brandGrowth px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">{student.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="offices">
        <OfficeLocations priorityCountry={userCountry} />
      </div>
      
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brandCTA/10 blur-[120px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Your Global Future Starts Here</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg font-medium">Connect with an Enzenius Global specialist for a personalized evaluation of your study abroad profile.</p>
          <a href={applyFormUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-brandCTA text-white px-12 py-5 rounded-md font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-2xl active:scale-95">Book Free Consultation</a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;