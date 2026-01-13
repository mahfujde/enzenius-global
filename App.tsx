import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

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

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedPostId]);

  const handleBlogNavigation = (postId: number) => {
    if (postId === 0) {
      setSelectedPostId(null);
      setCurrentPage('blogs');
    } else {
      setSelectedPostId(postId);
      setCurrentPage('blogs');
    }
  };

  const renderPage = () => {
    const slugs: DestinationSlug[] = ['new-zealand', 'malaysia', 'indonesia', 'australia', 'uk', 'usa', 'canada', 'europe'];
    
    if (slugs.includes(currentPage as DestinationSlug)) {
      return <DestinationDetailPage slug={currentPage as DestinationSlug} onNavigate={setCurrentPage} />;
    }

    switch (currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'destinations': return <DestinationsPage onSelectDestination={setCurrentPage} />;
      case 'contact': return <ContactPage />;
      case 'blogs': return <BlogPage onPostSelect={handleBlogNavigation} selectedPostId={selectedPostId} />;
      case 'privacy': return <PrivacyPolicyPage />;
      case 'terms': return <TermsOfServicePage />;
      case 'cookies': return <CookiesPage />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={(p) => { setCurrentPage(p); setSelectedPostId(null); }} />
      {/* 
        Standardized top padding ensures no overlap with fixed header.
        Mobile Header is approx 84px, Desktop with top bar is approx 132px.
      */}
      <main className="flex-grow pt-[84px] lg:pt-[132px]">
        {renderPage()}
      </main>
      <Footer onNavigate={(p) => { setCurrentPage(p); setSelectedPostId(null); }} />
      <WhatsAppButton />
    </div>
  );
};

export default App;