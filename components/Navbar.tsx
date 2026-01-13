
import React, { useState } from 'react';
import { Page } from '../App';
import Logo from './Logo';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const applyFormUrl = "https://forms.zohopublic.com/aucklandenzgm1/form/Primaryinformationform/formperma/5h49y5YaIsrzFQCsSgmcUpnW93PH_2Pq5nM1Us0EC8Y";
  const facebookUrl = "https://www.facebook.com/Enzeniousltd";
  const linkedinUrl = "https://www.linkedin.com/company/enzenious-consultancy-services-ltd/";

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'Destinations', value: 'destinations' },
    { label: 'Blogs', value: 'blogs' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNav = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md border-b border-slate-100">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 md:px-12 hidden lg:flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
        <div className="flex gap-8">
          <span className="flex items-center gap-2"><i className="fas fa-envelope text-brandCTA"></i> info@enzeniusglobal.com</span>
          <span className="flex items-center gap-2"><i className="fas fa-phone text-brandCTA"></i> +60 11-6116 9434</span>
          <span className="flex items-center gap-2"><i className="fas fa-clock text-brandCTA"></i> Mon-Fri: 10AM - 6PM</span>
        </div>
        <div className="flex gap-5">
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brandCTA transition-colors"><i className="fab fa-facebook-f"></i></a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brandCTA transition-colors"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="hover:text-brandCTA transition-colors"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-1 md:py-2">
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={() => handleNav('home')}
        >
          <Logo className="h-20 md:h-24" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNav(item.value)}
              className={`nav-link font-black text-xs uppercase tracking-[0.2em] transition-colors ${
                currentPage === item.value ? 'text-brandCTA' : 'text-slate-600 hover:text-brandCTA'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a 
            href={applyFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brandCTA text-white px-8 py-3 rounded-md font-black text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-lg active:scale-95 ml-4"
          >
            Apply Online
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center text-primary text-xl border border-slate-200 rounded-md"
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
            <button
              key={item.value}
              onClick={() => handleNav(item.value)}
              className={`text-2xl font-black text-left uppercase tracking-tighter ${
                currentPage === item.value ? 'text-brandCTA' : 'text-primary'
              }`}
            >
              {item.label}
            </button>
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
