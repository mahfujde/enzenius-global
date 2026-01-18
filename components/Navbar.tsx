
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const applyFormUrl = "https://forms.zohopublic.com/pumasolutionsglobalgm1/form/StudentAssessment/formperma/Zgn5DTfvr31olMyn3d5sKFnEbSv9HALS4_wOnGR5AQE";
  const facebookUrl = "https://www.facebook.com/Enzeniousltd";
  const linkedinUrl = "https://www.linkedin.com/company/enzenious-consultancy-services-ltd/";

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-lg border-b border-slate-100/50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-primary/95 text-white py-3 px-4 md:px-12 hidden lg:flex justify-between items-center text-xs font-semibold tracking-wide uppercase">
        <div className="flex gap-8">
          <span className="flex items-center gap-2.5 hover:text-brandCTA transition-colors duration-300"><i className="fas fa-envelope text-brandCTA text-sm"></i> <span className="hidden xl:inline">info@enzeniusglobal.com</span></span>
          <span className="flex items-center gap-2.5 hover:text-brandCTA transition-colors duration-300"><i className="fas fa-phone text-brandCTA text-sm"></i> +60 11-6116 9434</span>
          <span className="flex items-center gap-2.5 hover:text-brandCTA transition-colors duration-300"><i className="fas fa-clock text-brandCTA text-sm"></i> Mon-Fri: 10AM - 6PM</span>
        </div>
        <div className="flex gap-6">
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brandCTA transition-colors duration-300"><i className="fab fa-facebook-f text-sm"></i></a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brandCTA transition-colors duration-300"><i className="fab fa-linkedin-in text-sm"></i></a>
          <a href="#" className="hover:text-brandCTA transition-colors duration-300"><i className="fab fa-instagram text-sm"></i></a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex items-center justify-between px-4 md:px-12 py-3 md:py-4">
        <NavLink to="/" className="flex flex-col items-start group">
          <Logo className="h-16 md:h-20 lg:h-24" />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={`nav-link font-bold text-xs lg:text-sm uppercase tracking-wider transition-colors duration-300 ${
                isActive(item.path) ? 'text-brandCTA' : 'text-slate-700 hover:text-brandCTA'
              }`}
            >
              {item.label}
            </NavLink>
          ))}
          <a 
            href={applyFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brandCTA hover:bg-orange-600 text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 ml-4"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-700 text-lg hover:text-brandCTA transition-colors duration-300 border border-slate-200 hover:border-brandCTA rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-[60] transition-all duration-300 flex flex-col p-8 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <Logo className="h-16" />
          <button onClick={() => setIsOpen(false)} className="text-2xl text-slate-400">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="flex flex-col gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-black text-left uppercase tracking-tighter ${
                isActive(item.path) ? 'text-brandCTA' : 'text-primary'
              }`}
            >
              {item.label}
            </NavLink>
          ))}
          <a 
            href={applyFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-black text-brandCTA text-left uppercase tracking-tighter"
          >
            Apply Online <i className="fas fa-external-link-alt text-sm"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
