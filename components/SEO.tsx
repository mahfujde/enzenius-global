import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
  canonical?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Enzenius Global | Premier Overseas Education & Visa Experts',
  description = 'Enzenius Global is a leading overseas education consultancy with 98% visa success rate. Expert visa assistance and university admissions for UK, USA, Canada, Australia, and more.',
  keywords = 'study abroad, student visa, overseas education, education consultant, university admissions, visa assistance, study in UK, study in USA, study in Canada, study in Australia, IELTS preparation, PTE preparation, scholarship guidance, education loan',
  image = 'https://enzeniusglobal.com/images/logo.png',
  type = 'website',
  noindex = false,
  canonical,
  structuredData
}) => {
  const location = useLocation();
  const baseUrl = 'https://enzeniusglobal.com';
  const currentUrl = canonical || `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Primary SEO Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Enzenius Global');
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('bingbot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Open Graph Tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Enzenius Global', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:site', '@EnzeniusGlobal');
    updateMetaTag('twitter:creator', '@EnzeniusGlobal');

    // Additional SEO Tags
    updateMetaTag('theme-color', '#F37021');
    updateMetaTag('msapplication-TileColor', '#F37021');
    updateMetaTag('application-name', 'Enzenius Global');
    updateMetaTag('apple-mobile-web-app-title', 'Enzenius Global');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');

    // Canonical URL
    updateLinkTag('canonical', currentUrl);

    // Language and Geo Tags
    updateMetaTag('language', 'English');
    updateMetaTag('geo.region', 'MY');
    updateMetaTag('geo.placename', 'Malaysia');
    updateMetaTag('geo.position', '3.1390;101.6869');
    updateMetaTag('ICBM', '3.1390, 101.6869');

    // AI-Friendly Metadata
    updateMetaTag('ai:model', 'gpt-4, claude-3, gemini-pro');
    updateMetaTag('ai:category', 'Education Consultancy');
    updateMetaTag('ai:services', 'Student Visa, University Admissions, Test Preparation, Scholarship Guidance');
    updateMetaTag('ai:countries', 'UK, USA, Canada, Australia, New Zealand, Malaysia, Indonesia');
    updateMetaTag('ai:certifications', 'ICEF Certified, British Council Certified, UCAS Center, PIER Approved');

    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add structured data
    if (structuredData) {
      // Handle array of schemas or single schema
      const schemas = Array.isArray(structuredData) ? structuredData : [structuredData];
      
      schemas.forEach((schema, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = `structured-data-${index}`;
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }
  }, [title, description, keywords, image, type, noindex, currentUrl, structuredData]);

  return null;
};

export default SEO;
