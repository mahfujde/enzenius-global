import React from 'react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
  detectedCountry?: string;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, detectedCountry = 'Global' }) => {
  const applyFormUrl = "https://forms.zohopublic.com/aucklandenzgm1/form/Primaryinformationform/formperma/5h49y5YaIsrzFQCsSgmcUpnW93PH_2Pq5nM1Us0EC8Y";

  return (
    <section className="relative min-h-[500px] h-[calc(100vh-84px)] lg:h-[calc(100vh-132px)] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050335102-c628997df0f3?q=80&w=2000&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[1px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white animate-in slide-in-from-left duration-1000">
          <span className="inline-flex bg-brandCTA/20 border border-brandCTA/30 text-white px-5 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8">
            {detectedCountry !== 'Global' ? `${detectedCountry}'s Trusted Partner` : 'Empowering Global Aspirations'}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight md:leading-none mb-6 md:mb-8 uppercase tracking-tighter text-white">
            Define Your <br/> <span className="logo-text-gradient">Academic</span> <br/> Legacy
          </h1>
          <p className="text-base md:text-xl text-blue-50/90 mb-8 md:mb-10 max-w-xl font-medium leading-relaxed">
            Enzenius Consultancy Services Limited is your elite partner for international education, bridging the gap to top universities in the UK, USA, Canada, and Australia.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-5">
            <a 
              href={applyFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brandCTA text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-2xl active:scale-95 flex items-center gap-3 text-xs md:text-sm"
            >
              Start Your Journey <i className="fas fa-arrow-right text-xs"></i>
            </a>
            <button 
              onClick={() => onNavigate('destinations')}
              className="bg-transparent border-2 border-white/30 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95 text-xs md:text-sm"
            >
              Explore Countries
            </button>
          </div>
        </div>
        
        {/* Floating Success Metrics Card - Hidden on small mobile to avoid overcrowding */}
        <div className="hidden lg:flex justify-end animate-in slide-in-from-right duration-1000">
          <div className="bg-white/95 backdrop-blur-md p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md border-t border-white/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brandGrowth/10 blur-3xl rounded-full"></div>
            <div className="w-16 h-16 bg-brandCTA/10 rounded-full flex items-center justify-center mb-6 text-brandCTA">
              <i className="fas fa-award text-2xl"></i>
            </div>
            <h3 className="text-2xl font-black text-primary mb-2 uppercase tracking-tighter">Certified Excellence</h3>
            <p className="text-slate-500 text-[10px] mb-8 font-black uppercase tracking-widest">ICEF & British Council Certified Counselors</p>
            
            <div className="space-y-4 mb-8">
               <div className="flex items-center gap-4 text-slate-700 font-black uppercase text-[10px] tracking-widest">
                 <i className="fas fa-check-circle text-brandGrowth"></i> 98% Visa Success Rate
               </div>
               <div className="flex items-center gap-4 text-slate-700 font-black uppercase text-[10px] tracking-widest">
                 <i className="fas fa-check-circle text-brandGrowth"></i> 600+ Partner Universities
               </div>
               <div className="flex items-center gap-4 text-slate-700 font-black uppercase text-[10px] tracking-widest">
                 <i className="fas fa-check-circle text-brandGrowth"></i> Official GTE Cell
               </div>
            </div>

            <a 
              href={applyFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary hover:bg-brandCTA text-white font-black py-4 md:py-5 rounded-xl text-center transition-all shadow-xl uppercase tracking-widest active:scale-[0.98] text-xs"
            >
              Free Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;