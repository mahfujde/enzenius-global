export interface OrganizationData {
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
  };
  sameAs?: string[];
}

export const getOrganizationSchema = (): object => {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Enzenius Global',
    alternateName: 'Enzenius Global Education Consultancy',
    url: 'https://enzeniusglobal.com',
    logo: 'https://enzeniusglobal.com/images/logo.png',
    description: 'Enzenius Global is a premier educational consultancy specializing in world-class overseas education support, university admissions, and visa expertise. With 98% visa success rate and 600+ partner universities.',
    foundingDate: '2015',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MY',
      addressLocality: 'Kuala Lumpur',
      addressRegion: 'Kuala Lumpur'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+60-11-6116-9434',
        contactType: 'Customer Service',
        email: 'info@enzeniusglobal.com',
        availableLanguage: ['English', 'Malay', 'Indonesian']
      }
    ],
    sameAs: [
      'https://www.facebook.com/Enzeniousltd',
      'https://www.linkedin.com/company/enzenious-consultancy-services-ltd/'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500+',
      bestRating: '5',
      worstRating: '1'
    },
    areaServed: [
      { '@type': 'Country', name: 'Malaysia' },
      { '@type': 'Country', name: 'Indonesia' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'New Zealand' }
    ],
    serviceType: [
      'Student Visa Assistance',
      'University Admissions',
      'IELTS Preparation',
      'PTE Preparation',
      'Scholarship Guidance',
      'Education Loan Assistance',
      'Pre-Departure Services',
      'Post-Arrival Support'
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'ICEF Certified Agent',
        recognizedBy: { '@type': 'Organization', name: 'ICEF' }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'British Council Certified Agent',
        recognizedBy: { '@type': 'Organization', name: 'British Council' }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'UCAS Center',
        recognizedBy: { '@type': 'Organization', name: 'UCAS' }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'PIER Approved',
        recognizedBy: { '@type': 'Organization', name: 'PIER' }
      }
    ]
  };
};

export const getLocalBusinessSchema = (): object => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://enzeniusglobal.com/#organization',
    name: 'Enzenius Global',
    image: 'https://enzeniusglobal.com/images/logo.png',
    description: 'Premier overseas education consultancy with 98% visa success rate. Expert guidance for studying in UK, USA, Canada, Australia, and more.',
    url: 'https://enzeniusglobal.com',
    telephone: '+60-11-6116-9434',
    email: 'info@enzeniusglobal.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MY',
      addressLocality: 'Kuala Lumpur',
      addressRegion: 'Kuala Lumpur'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '3.1390',
      longitude: '101.6869'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '18:00'
      }
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500+'
    }
  };
};

export const getWebSiteSchema = (): object => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Enzenius Global',
    url: 'https://enzeniusglobal.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://enzeniusglobal.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };
};

export const getServiceSchema = (serviceName: string, description: string): object => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Enzenius Global',
      url: 'https://enzeniusglobal.com'
    },
    areaServed: 'Worldwide',
    serviceType: 'Education Consultancy'
  };
};

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>): object => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};

export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>): object => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

export const getArticleSchema = (title: string, description: string, image: string, datePublished: string, dateModified?: string): object => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: 'Enzenius Global',
      url: 'https://enzeniusglobal.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Enzenius Global',
      logo: {
        '@type': 'ImageObject',
        url: 'https://enzeniusglobal.com/images/logo.png'
      }
    }
  };
};
