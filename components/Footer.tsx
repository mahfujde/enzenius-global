import React from 'react';
import { Page } from '../App';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const facebookUrl = "https://www.facebook.com/Enzeniousltd";
  const linkedinUrl = "https://www.linkedin.com/company/enzenious-consultancy-services-ltd/";
  const partnerUrl = "https://mediabrust.com/";

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
              <Logo className="h-16" light={true} />
            </div>
            <p className="text-slate-400 leading-relaxed text-sm font-medium">
              Enzenius Consultancy Services Limited (Enzenius Global) is your trusted gateway to global education. Providing unparalleled commitment to student success since 2015.
            </p>
            <div className="flex gap-4">
               <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm hover:bg-brandCTA hover:border-brandCTA transition-all">
                 <i className="fab fa-facebook-f"></i>
               </a>
               <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm hover:bg-brandCTA hover:border-brandCTA transition-all">
                 <i className="fab fa-linkedin-in"></i>
               </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-8 border-b border-white/10 pb-4 inline-block">Explore</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
              <li><button onClick={() => onNavigate('home')} className="hover:text-brandCTA transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-brandCTA transition-colors">Our Legacy</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brandCTA transition-colors">Expertise</button></li>
              <li><button onClick={() => onNavigate('blogs')} className="hover:text-brandCTA transition-colors">Insights & Blogs</button></li>
              <li><button onClick={() => onNavigate('destinations')} className="hover:text-brandCTA transition-colors">Destinations</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-brandCTA transition-colors">Contact</button></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
             <h4 className="text-xs font-black uppercase tracking-widest mb-8 border-b border-white/10 pb-4 inline-block">Study Abroad</h4>
             <div className="grid grid-cols-1 gap-y-4 text-slate-400 font-bold text-xs uppercase tracking-widest text-left">
              <button onClick={() => onNavigate('new-zealand')} className="hover:text-brandCTA transition-colors text-left">New Zealand</button>
              <button onClick={() => onNavigate('malaysia')} className="hover:text-brandCTA transition-colors text-left">Malaysia</button>
              <button onClick={() => onNavigate('indonesia')} className="hover:text-brandCTA transition-colors text-left">Indonesia</button>
              <button onClick={() => onNavigate('australia')} className="hover:text-brandCTA transition-colors text-left">Australia</button>
              <button onClick={() => onNavigate('uk')} className="hover:text-brandCTA transition-colors text-left">United Kingdom</button>
              <button onClick={() => onNavigate('usa')} className="hover:text-brandCTA transition-colors text-left">United States</button>
              <button onClick={() => onNavigate('canada')} className="hover:text-brandCTA transition-colors text-left">Canada</button>
              <button onClick={() => onNavigate('europe')} className="hover:text-brandCTA transition-colors text-left">Europe</button>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-8 border-b border-white/10 pb-4 inline-block">Global Helpdesk</h4>
            <ul className="space-y-6 text-slate-400 text-xs font-bold">
              <li className="flex gap-4 text-left">
                <i className="fas fa-map-marker-alt text-brandCTA text-lg"></i>
                <span className="uppercase tracking-wide">Desa Kiara Condominium,<br/>Jalan Damansara, Kuala Lumpur</span>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fas fa-phone-alt text-brandCTA text-lg"></i>
                <span>+60 11-6116 9434</span>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fas fa-envelope-open text-brandCTA text-lg"></i>
                <span>info@enzeniusglobal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Enzenius Consultancy Services Limited. All Rights Reserved.</p>
            <div className="flex gap-8">
              <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy</button>
              <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Terms</button>
            </div>
          </div>
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
            Technology & Marketing Partner: <a href={partnerUrl} target="_blank" rel="noopener noreferrer" className="text-brandCTA hover:text-white transition-colors">Mediabrust</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;