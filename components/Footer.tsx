import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const facebookUrl = "https://www.facebook.com/Enzeniousltd";
  const linkedinUrl = "https://www.linkedin.com/company/enzenious-consultancy-services-ltd/";
  const partnerUrl = "https://mediabrust.com/";

  return (
    <footer className="bg-slate-950 text-white pt-20 md:pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 lg:gap-16 mb-16 md:mb-20">
          <div className="space-y-6 md:space-y-8">
            <Link to="/" className="flex items-center group">
              <Logo className="h-14 md:h-16" light={true} />
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base font-medium">
              Enzenius Global is your trusted gateway to global education. Providing unparalleled commitment to student success since 2015.
            </p>
            <div className="flex gap-4">
               <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-700 hover:border-brandCTA flex items-center justify-center text-sm hover:bg-brandCTA transition-all duration-300">
                 <i className="fab fa-facebook-f"></i>
               </a>
               <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-700 hover:border-brandCTA flex items-center justify-center text-sm hover:bg-brandCTA transition-all duration-300">
                 <i className="fab fa-linkedin-in"></i>
               </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider mb-6 md:mb-8 border-b border-slate-700/50 pb-3 inline-block">Explore</h4>
            <ul className="space-y-3 md:space-y-4 text-slate-400 font-semibold text-xs md:text-sm uppercase tracking-wide">
              <li><Link to="/" className="hover:text-brandCTA transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-brandCTA transition-colors duration-300">Our Legacy</Link></li>
              <li><Link to="/services" className="hover:text-brandCTA transition-colors duration-300">Expertise</Link></li>
              <li><Link to="/blogs" className="hover:text-brandCTA transition-colors duration-300">Insights & Blogs</Link></li>
              <li><Link to="/destinations" className="hover:text-brandCTA transition-colors duration-300">Destinations</Link></li>
              <li><Link to="/contact" className="hover:text-brandCTA transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
             <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider mb-6 md:mb-8 border-b border-slate-700/50 pb-3 inline-block">Study Destinations</h4>
             <div className="grid grid-cols-1 gap-3 md:gap-4 text-slate-400 font-semibold text-xs md:text-sm uppercase tracking-wide text-left">
              <Link to="/destination/new-zealand" className="hover:text-brandCTA transition-colors duration-300">New Zealand</Link>
              <Link to="/destination/malaysia" className="hover:text-brandCTA transition-colors duration-300">Malaysia</Link>
              <Link to="/destination/indonesia" className="hover:text-brandCTA transition-colors duration-300">Indonesia</Link>
              <Link to="/destination/australia" className="hover:text-brandCTA transition-colors duration-300">Australia</Link>
              <Link to="/destination/uk" className="hover:text-brandCTA transition-colors duration-300">United Kingdom</Link>
              <Link to="/destination/usa" className="hover:text-brandCTA transition-colors duration-300">United States</Link>
              <Link to="/destination/canada" className="hover:text-brandCTA transition-colors duration-300">Canada</Link>
              <Link to="/destination/europe" className="hover:text-brandCTA transition-colors duration-300">Europe</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider mb-6 md:mb-8 border-b border-slate-700/50 pb-3 inline-block">Contact</h4>
            <ul className="space-y-5 md:space-y-6 text-slate-400 text-xs md:text-sm font-semibold">
              <li className="flex gap-3 text-left">
                <i className="fas fa-map-marker-alt text-brandCTA text-base md:text-lg flex-shrink-0 mt-0.5"></i>
                <span className="uppercase tracking-wide leading-snug">Desa Kiara Condominium,<br/>Jalan Damansara, Kuala Lumpur</span>
              </li>
              <li className="flex gap-3 items-start">
                <i className="fas fa-phone-alt text-brandCTA text-base md:text-lg flex-shrink-0"></i>
                <span>+60 11-6116 9434</span>
              </li>
              <li className="flex gap-3 items-start">
                <i className="fas fa-envelope-open text-brandCTA text-base md:text-lg flex-shrink-0"></i>
                <span>info@enzeniusglobal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-700/30 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-wide">
            <p>© {new Date().getFullYear()} Enzenius Global. All Rights Reserved.</p>
            <div className="flex gap-8">
              <Link to="/privacy" className="hover:text-white transition-colors duration-300">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-300">Terms</Link>
            </div>
          </div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
            Technology Partner: <a href={partnerUrl} target="_blank" rel="noopener noreferrer" className="text-brandCTA hover:text-white transition-colors duration-300">Mediabrust</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;