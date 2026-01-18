import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SEO from './components/SEO';
import { useSEOConfig } from './utils/seoConfig';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DestinationsPage from './pages/DestinationsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiesPage from './pages/CookiesPage';

export type DestinationSlug = 'new-zealand' | 'malaysia' | 'indonesia' | 'australia' | 'uk' | 'usa' | 'canada' | 'europe';
export type Page = 'home' | 'about' | 'services' | 'destinations' | 'contact' | 'blogs' | 'privacy' | 'terms' | 'cookies' | DestinationSlug;

// Scroll to top component
const ScrollToTop: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};

const AppContent: React.FC = () => {
  const seoConfig = useSEOConfig();
  const location = useLocation();
  const baseUrl = 'https://enzeniusglobal.com';
  const canonical = `${baseUrl}${location.pathname}`;

  // Handle structured data - keep as array for multiple schemas
  const structuredData = seoConfig.structuredData;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        image={seoConfig.image}
        type={seoConfig.type}
        noindex={seoConfig.noindex}
        canonical={canonical}
        structuredData={structuredData}
      />
      <Navbar />
      <ScrollToTop />
      {/* 
        Standardized top padding ensures no overlap with fixed header.
        Mobile Header is approx 84px, Desktop with top bar is approx 132px.
      */}
      <main className="flex-grow pt-[84px] lg:pt-[132px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destination/:slug" element={<DestinationDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:postId" element={<BlogPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;