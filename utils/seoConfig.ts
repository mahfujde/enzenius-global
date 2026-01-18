import { useLocation } from 'react-router-dom';
import { getOrganizationSchema, getLocalBusinessSchema, getWebSiteSchema, getBreadcrumbSchema } from './structuredData';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  type?: string;
  noindex?: boolean;
  structuredData?: object | object[];
}

export const useSEOConfig = (): SEOConfig => {
  const location = useLocation();
  const baseUrl = 'https://enzeniusglobal.com';

  const getPageConfig = (pathname: string): SEOConfig => {
    switch (pathname) {
      case '/':
        return {
          title: 'Enzenius Global | Premier Overseas Education & Visa Experts | 98% Visa Success Rate',
          description: 'Enzenius Global is a leading overseas education consultancy with 98% visa success rate since 2015. Expert visa assistance and university admissions for UK, USA, Canada, Australia, New Zealand. 600+ partner universities. ICEF & British Council Certified.',
          keywords: 'study abroad, student visa, overseas education, education consultant, university admissions, visa assistance, study in UK, study in USA, study in Canada, study in Australia, IELTS preparation, PTE preparation, scholarship guidance, education loan, Enzenius Global',
          image: `${baseUrl}/images/logo.png`,
          type: 'website',
          structuredData: [
            getOrganizationSchema(),
            getLocalBusinessSchema(),
            getWebSiteSchema()
          ]
        };

      case '/about':
        return {
          title: 'About Us | Enzenius Global - Your Trusted Education Partner Since 2015',
          description: 'Learn about Enzenius Global, a premier education consultancy with 98% visa success rate. Operating across Malaysia and Indonesia, representing 600+ partner universities globally since 2015.',
          keywords: 'about Enzenius Global, education consultancy Malaysia, education consultancy Indonesia, study abroad consultant, visa experts, university partners',
          image: `${baseUrl}/images/logo.png`,
          type: 'website',
          structuredData: [
            getOrganizationSchema(),
            getBreadcrumbSchema([
              { name: 'Home', url: `${baseUrl}/` },
              { name: 'About Us', url: `${baseUrl}/about` }
            ])
          ]
        };

      case '/services':
        return {
          title: 'Our Services | Student Visa, University Admissions & Test Preparation',
          description: 'Comprehensive study abroad services: Student visa assistance, university application support, IELTS & PTE preparation, scholarship guidance, education loan assistance, pre-departure and post-arrival support.',
          keywords: 'student visa services, university application assistance, IELTS preparation, PTE preparation, scholarship guidance, education loan, visa documentation, study abroad services',
          image: `${baseUrl}/images/logo.png`,
          type: 'website',
          structuredData: [
            getOrganizationSchema(),
            getBreadcrumbSchema([
              { name: 'Home', url: `${baseUrl}/` },
              { name: 'Services', url: `${baseUrl}/services` }
            ])
          ]
        };

      case '/destinations':
        return {
          title: 'Study Abroad Destinations | UK, USA, Canada, Australia & More',
          description: 'Explore top study destinations: UK, USA, Canada, Australia, New Zealand, Malaysia, Indonesia, and Europe. Expert guidance for university selection and visa processing.',
          keywords: 'study in UK, study in USA, study in Canada, study in Australia, study in New Zealand, study in Malaysia, study in Indonesia, study in Europe, overseas education destinations',
          image: `${baseUrl}/images/logo.png`,
          type: 'website',
          structuredData: [
            getOrganizationSchema(),
            getBreadcrumbSchema([
              { name: 'Home', url: `${baseUrl}/` },
              { name: 'Destinations', url: `${baseUrl}/destinations` }
            ])
          ]
        };

      case '/contact':
        return {
          title: 'Contact Us | Get Free Consultation | Enzenius Global',
          description: 'Contact Enzenius Global for free consultation on study abroad opportunities. Phone: +60 11-6116-9434 | Email: info@enzeniusglobal.com | Offices in Malaysia and Indonesia.',
          keywords: 'contact Enzenius Global, study abroad consultation, education consultant contact, visa consultation, free assessment',
          image: `${baseUrl}/images/logo.png`,
          type: 'website',
          structuredData: [
            getLocalBusinessSchema(),
            getBreadcrumbSchema([
              { name: 'Home', url: `${baseUrl}/` },
              { name: 'Contact', url: `${baseUrl}/contact` }
            ])
          ]
        };

      case '/blogs':
        return {
          title: 'Study Abroad Blog | Latest News & Insights | Enzenius Global',
          description: 'Read the latest study abroad news, visa updates, university information, and expert tips from Enzenius Global. Stay informed about international education opportunities.',
          keywords: 'study abroad blog, education news, visa updates, university information, study abroad tips, international education insights',
          image: `${baseUrl}/images/logo.png`,
          type: 'website',
          structuredData: [
            getOrganizationSchema(),
            getBreadcrumbSchema([
              { name: 'Home', url: `${baseUrl}/` },
              { name: 'Blogs', url: `${baseUrl}/blogs` }
            ])
          ]
        };

      case '/privacy':
        return {
          title: 'Privacy Policy | Enzenius Global',
          description: 'Privacy Policy for Enzenius Global. Learn how we collect, use, and protect your personal information.',
          keywords: 'privacy policy, data protection, Enzenius Global privacy',
          image: `${baseUrl}/images/logo.png`,
          type: 'website',
          noindex: true
        };

      case '/terms':
        return {
          title: 'Terms of Service | Enzenius Global',
          description: 'Terms of Service for Enzenius Global. Read our terms and conditions for using our services.',
          keywords: 'terms of service, terms and conditions, Enzenius Global terms',
          image: `${baseUrl}/images/logo.png`,
          type: 'website',
          noindex: true
        };

      case '/cookies':
        return {
          title: 'Cookies Policy | Enzenius Global',
          description: 'Cookies Policy for Enzenius Global. Learn how we use cookies to enhance your experience.',
          keywords: 'cookies policy, cookie usage, Enzenius Global cookies',
          image: `${baseUrl}/images/logo.png`,
          type: 'website',
          noindex: true
        };

      default:
        // Handle destination pages
        if (pathname.startsWith('/destination/')) {
          const slug = pathname.replace('/destination/', '');
          const destinationNames: Record<string, string> = {
            'uk': 'United Kingdom',
            'usa': 'United States',
            'canada': 'Canada',
            'australia': 'Australia',
            'new-zealand': 'New Zealand',
            'malaysia': 'Malaysia',
            'indonesia': 'Indonesia',
            'europe': 'Europe'
          };
          const destinationName = destinationNames[slug] || slug;
          
          return {
            title: `Study in ${destinationName} | University Admissions & Visa Assistance`,
            description: `Study in ${destinationName} with Enzenius Global. Expert guidance for university selection, visa processing, and student support. 98% visa success rate.`,
            keywords: `study in ${destinationName}, ${destinationName} universities, ${destinationName} student visa, study abroad ${destinationName}, ${destinationName} education`,
            image: `${baseUrl}/images/logo.png`,
            type: 'website',
            structuredData: [
              getOrganizationSchema(),
              getBreadcrumbSchema([
                { name: 'Home', url: `${baseUrl}/` },
                { name: 'Destinations', url: `${baseUrl}/destinations` },
                { name: `Study in ${destinationName}`, url: `${baseUrl}${pathname}` }
              ])
            ]
          };
        }

        // Handle blog post pages
        if (pathname.startsWith('/blogs/') && pathname !== '/blogs') {
          return {
            title: 'Blog Post | Enzenius Global',
            description: 'Read our latest blog post about study abroad opportunities, visa updates, and education insights.',
            keywords: 'study abroad blog, education blog, visa news, university updates',
            image: `${baseUrl}/images/logo.png`,
            type: 'article',
            structuredData: [
              getOrganizationSchema(),
              getBreadcrumbSchema([
                { name: 'Home', url: `${baseUrl}/` },
                { name: 'Blogs', url: `${baseUrl}/blogs` },
                { name: 'Blog Post', url: `${baseUrl}${pathname}` }
              ])
            ]
          };
        }

        // Default fallback
        return {
          title: 'Enzenius Global | Premier Overseas Education & Visa Experts',
          description: 'Enzenius Global is a leading overseas education consultancy with 98% visa success rate. Expert visa assistance and university admissions.',
          keywords: 'study abroad, student visa, overseas education, education consultant',
          image: `${baseUrl}/images/logo.png`,
          type: 'website',
          structuredData: [getOrganizationSchema()]
        };
    }
  };

  return getPageConfig(location.pathname);
};
