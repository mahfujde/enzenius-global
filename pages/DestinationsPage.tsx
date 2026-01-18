import React from 'react';
import { Link } from 'react-router-dom';
import { DestinationSlug } from '../App';

const destinations: { name: string; slug: DestinationSlug; title: string; desc: string; img: string; highlights: string[] }[] = [
  { 
    name: 'New Zealand', 
    slug: 'new-zealand',
    title: 'Innovation & Excellence', 
    desc: 'New Zealand offers world-class education with a focus on practical skills and personal growth in a safe, stunning environment.',
    highlights: ['3 Year Post Study Work', 'Global Top 3% Unis', 'Work Rights for Spouses'],
    img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Malaysia', 
    slug: 'malaysia',
    title: 'Regional Education Hub', 
    desc: 'Access global degrees via twinning programs with UK and Australian universities at significantly lower tuition costs.',
    highlights: ['Twinning Programs', 'Low Cost of Living', 'English-Speaking Environment'],
    img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Indonesia', 
    slug: 'indonesia',
    title: 'Emerging Academic Destination', 
    desc: 'Rapidly developing institutions offering unique cultural insights and specialized research programs in the heart of SE Asia.',
    highlights: ['Strategic Location', 'Vibrant Local Economy', 'Cultural Immersive Learning'],
    img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Australia', 
    slug: 'australia',
    title: 'Global Career Gateway', 
    desc: 'Home to several of the world\'s top-ranked universities, Australia provides an exceptional lifestyle and robust career pathways.',
    highlights: ['PR Pathways', 'Excellent Work Rights', 'Diverse Student Community'],
    img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'United Kingdom', 
    slug: 'uk',
    title: 'Centuries of Academic Prestige', 
    desc: 'The UK is synonymous with high standards and research excellence, offering fast-track degrees recognized globally.',
    highlights: ['2-Year Graduate Visa', 'Intensive 1-Year Master\'s', 'Prestigious Russell Group'],
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'USA', 
    slug: 'usa',
    title: 'The World\'s Leading Innovation Center', 
    desc: 'From Ivy League excellence to massive research grants, the US offers the most diverse range of academic opportunities.',
    highlights: ['STEM OPT (3 Years)', 'Unmatched Research Funding', 'Flexible Academic System'],
    img: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Canada', 
    slug: 'canada',
    title: 'The Preferred Study Destination', 
    desc: 'Consistently ranked as the best country for quality of life, Canada offers clear pathways to permanent residency for graduates.',
    highlights: ['PGWP Eligibility', 'Pathways to PR', 'Affordable Public Education'],
    img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Europe', 
    slug: 'europe',
    title: 'Cultural Heritage & Modern Learning', 
    desc: 'Study across the Schengen zone in countries like Germany, France, and Hungary, often with zero or low tuition fees.',
    highlights: ['Low/No Tuition Fees', 'Schengen Mobility', 'Deep Research Roots'],
    img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800'
  }
];

interface University {
  name: string;
  country: string;
  logo: string;
}

const partneredUniversities: University[] = [
  // UK Universities
  { name: 'Oxford', country: 'UK', logo: '/images/universities-logos/uk-oxford.png' },
  { name: 'Cambridge', country: 'UK', logo: '/images/universities-logos/uk-cambridge.png' },
  { name: 'Imperial College', country: 'UK', logo: '/images/universities-logos/uk-imperial.png' },
  { name: 'UCL', country: 'UK', logo: '/images/universities-logos/uk-ucl.png' },
  { name: 'Edinburgh', country: 'UK', logo: '/images/universities-logos/uk-edinburgh.png' },
  { name: 'Manchester', country: 'UK', logo: '/images/universities-logos/uk-manchester.png' },
  { name: 'King\'s College', country: 'UK', logo: '/images/universities-logos/uk-kings-college.png' },
  { name: 'LSE', country: 'UK', logo: '/images/universities-logos/uk-lse.png' },
  { name: 'Warwick', country: 'UK', logo: '/images/universities-logos/uk-warwick.png' },
  { name: 'Bristol', country: 'UK', logo: '/images/universities-logos/uk-bristol.png' },
  
  // USA Universities
  { name: 'Harvard', country: 'USA', logo: '/images/universities-logos/usa-harvard.png' },
  { name: 'Stanford', country: 'USA', logo: '/images/universities-logos/usa-stanford.png' },
  { name: 'MIT', country: 'USA', logo: '/images/universities-logos/usa-mit.png' },
  { name: 'Yale', country: 'USA', logo: '/images/universities-logos/usa-yale.png' },
  { name: 'Princeton', country: 'USA', logo: '/images/universities-logos/usa-princeton.png' },
  { name: 'Columbia', country: 'USA', logo: '/images/universities-logos/usa-columbia.png' },
  { name: 'UChicago', country: 'USA', logo: '/images/universities-logos/usa-uchicago.png' },
  { name: 'UC Berkeley', country: 'USA', logo: '/images/universities-logos/usa-berkeley.png' },
  { name: 'UPenn', country: 'USA', logo: '/images/universities-logos/usa-upenn.png' },
  { name: 'Cornell', country: 'USA', logo: '/images/universities-logos/usa-cornell.png' },
  
  // Canada Universities
  { name: 'Toronto', country: 'Canada', logo: '/images/universities-logos/canada-toronto.png' },
  { name: 'UBC', country: 'Canada', logo: '/images/universities-logos/canada-ubc.png' },
  { name: 'McGill', country: 'Canada', logo: '/images/universities-logos/canada-mcgill.png' },
  { name: 'McMaster', country: 'Canada', logo: '/images/universities-logos/canada-mcmaster.png' },
  { name: 'Alberta', country: 'Canada', logo: '/images/universities-logos/canada-alberta.png' },
  { name: 'Waterloo', country: 'Canada', logo: '/images/universities-logos/canada-waterloo.png' },
  { name: 'Western', country: 'Canada', logo: '/images/universities-logos/canada-western.png' },
  { name: 'Queen\'s', country: 'Canada', logo: '/images/universities-logos/canada-queens.png' },
  { name: 'Montreal', country: 'Canada', logo: '/images/universities-logos/canada-montreal.png' },
  { name: 'Simon Fraser', country: 'Canada', logo: '/images/universities-logos/canada-simon-fraser.png' },
  
  // Australia Universities
  { name: 'ANU', country: 'Australia', logo: '/images/universities-logos/australia-anu.png' },
  { name: 'Melbourne', country: 'Australia', logo: '/images/universities-logos/australia-melbourne.png' },
  { name: 'Sydney', country: 'Australia', logo: '/images/universities-logos/australia-sydney.png' },
  { name: 'Queensland', country: 'Australia', logo: '/images/universities-logos/australia-queensland.png' },
  { name: 'Monash', country: 'Australia', logo: '/images/universities-logos/australia-monash.png' },
  { name: 'UNSW', country: 'Australia', logo: '/images/universities-logos/australia-unsw.png' },
  { name: 'UWA', country: 'Australia', logo: '/images/universities-logos/australia-uwa.png' },
  { name: 'Adelaide', country: 'Australia', logo: '/images/universities-logos/australia-adelaide.png' },
  { name: 'UTS', country: 'Australia', logo: '/images/universities-logos/australia-uts.png' },
  { name: 'Macquarie', country: 'Australia', logo: '/images/universities-logos/australia-macquarie.png' },
  
  // New Zealand Universities
  { name: 'Auckland', country: 'New Zealand', logo: '/images/universities-logos/newzealand-auckland.png' },
  { name: 'Otago', country: 'New Zealand', logo: '/images/universities-logos/newzealand-otago.png' },
  { name: 'Victoria Wellington', country: 'New Zealand', logo: '/images/universities-logos/newzealand-victoria-wellington.png' },
  { name: 'Canterbury', country: 'New Zealand', logo: '/images/universities-logos/newzealand-canterbury.png' },
  { name: 'Massey', country: 'New Zealand', logo: '/images/universities-logos/newzealand-massey.png' },
  { name: 'Lincoln', country: 'New Zealand', logo: '/images/universities-logos/newzealand-lincoln.png' },
  { name: 'Waikato', country: 'New Zealand', logo: '/images/universities-logos/newzealand-waikato.png' },
  { name: 'AUT', country: 'New Zealand', logo: '/images/universities-logos/newzealand-aut.png' },
  
  // Malaysia Universities
  { name: 'Malaya', country: 'Malaysia', logo: '/images/universities-logos/malaysia-malaya.png' },
  { name: 'Putra', country: 'Malaysia', logo: '/images/universities-logos/malaysia-putra.png' },
  { name: 'Kebangsaan', country: 'Malaysia', logo: '/images/universities-logos/malaysia-kebangsaan.png' },
  { name: 'Sains', country: 'Malaysia', logo: '/images/universities-logos/malaysia-sains.png' },
  { name: 'Teknologi', country: 'Malaysia', logo: '/images/universities-logos/malaysia-teknologi.png' },
  { name: 'Taylor\'s', country: 'Malaysia', logo: '/images/universities-logos/malaysia-taylors.png' },
  { name: 'Monash Malaysia', country: 'Malaysia', logo: '/images/universities-logos/malaysia-monash.png' },
  { name: 'Sunway', country: 'Malaysia', logo: '/images/universities-logos/malaysia-sunway.png' },
  { name: 'UCSI', country: 'Malaysia', logo: '/images/universities-logos/malaysia-ucsi.png' },
  { name: 'Nottingham Malaysia', country: 'Malaysia', logo: '/images/universities-logos/malaysia-nottingham.png' },
  
  // Indonesia Universities
  { name: 'UI', country: 'Indonesia', logo: '/images/universities-logos/indonesia-ui.png' },
  { name: 'Gadjah Mada', country: 'Indonesia', logo: '/images/universities-logos/indonesia-gadjah-mada.png' },
  { name: 'ITB', country: 'Indonesia', logo: '/images/universities-logos/indonesia-itb.png' },
  { name: 'IPB', country: 'Indonesia', logo: '/images/universities-logos/indonesia-ipb.png' },
  { name: 'Airlangga', country: 'Indonesia', logo: '/images/universities-logos/indonesia-airlangga.png' },
  { name: 'Diponegoro', country: 'Indonesia', logo: '/images/universities-logos/indonesia-diponegoro.png' },
  { name: 'ITS', country: 'Indonesia', logo: '/images/universities-logos/indonesia-its.png' },
  { name: 'Brawijaya', country: 'Indonesia', logo: '/images/universities-logos/indonesia-brawijaya.png' },
  { name: 'Padjadjaran', country: 'Indonesia', logo: '/images/universities-logos/indonesia-padjadjaran.png' },
  { name: 'Hasanuddin', country: 'Indonesia', logo: '/images/universities-logos/indonesia-hasanuddin.png' },
  
  // Europe Universities
  { name: 'TUM', country: 'Europe', logo: '/images/universities-logos/europe-tum.png' },
  { name: 'ETH Zurich', country: 'Europe', logo: '/images/universities-logos/europe-eth-zurich.png' },
  { name: 'Amsterdam', country: 'Europe', logo: '/images/universities-logos/europe-amsterdam.png' },
  { name: 'Sorbonne', country: 'Europe', logo: '/images/universities-logos/europe-sorbonne.png' },
  { name: 'Copenhagen', country: 'Europe', logo: '/images/universities-logos/europe-copenhagen.png' },
  { name: 'KU Leuven', country: 'Europe', logo: '/images/universities-logos/europe-ku-leuven.png' },
  { name: 'TU Delft', country: 'Europe', logo: '/images/universities-logos/europe-tu-delft.png' },
  { name: 'Heidelberg', country: 'Europe', logo: '/images/universities-logos/europe-heidelberg.png' },
  { name: 'Bologna', country: 'Europe', logo: '/images/universities-logos/europe-bologna.png' },
  { name: 'LMU', country: 'Europe', logo: '/images/universities-logos/europe-lmu.png' },
];

const DestinationsPage: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Banner Section */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
        </div>
        <div className="relative h-full flex items-center px-6 md:px-12">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">
              Choose Your Destination
            </h1>
            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Explore the best countries to build your academic career. Our experts are ready to guide you through every step.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 grid gap-8 lg:gap-12 lg:grid-cols-2">
          {destinations.map((dest, i) => (
            <Link 
              key={i} 
              to={`/destination/${dest.slug}`}
              className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col sm:flex-row hover:shadow-2xl transition-all group cursor-pointer active:scale-[0.98] block"
            >
              <div className="sm:w-1/3 relative h-48 sm:h-auto overflow-hidden">
                <img src={dest.img} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-primary/20"></div>
              </div>
              <div className="p-6 md:p-8 sm:w-2/3 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-primary mb-1 uppercase tracking-tighter">{dest.name}</h2>
                    <p className="text-slate-400 font-bold uppercase text-[9px] md:text-[10px] tracking-[0.2em]">{dest.title}</p>
                  </div>
                  <i className="fas fa-chevron-right text-primary opacity-20 group-hover:opacity-100 transition-opacity"></i>
                </div>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3 font-medium">{dest.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {dest.highlights.slice(0, 2).map((h, idx) => (
                    <span key={idx} className="bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-wide border border-slate-100">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Partnered Universities Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-4 uppercase tracking-tighter">
            Partnered Universities Worldwide
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            We proudly partner with {partneredUniversities.length}+ prestigious universities across the globe to bring you world-class education opportunities.
          </p>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-4 md:gap-6">
            {partneredUniversities.map((university, index) => (
              <div key={index} className="flex flex-col items-center justify-center group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center bg-slate-50 rounded-xl p-3 md:p-4 transition-all group-hover:shadow-xl group-hover:scale-105 border border-slate-200">
                  <img 
                    src={university.logo} 
                    alt={`${university.name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-text')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-text text-primary font-black text-xs text-center';
                        fallback.textContent = university.name.substring(0, 3).toUpperCase();
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <p className="mt-2 text-[8px] sm:text-[9px] md:text-[10px] font-bold text-center text-slate-700 leading-tight px-1">
                  {university.name}
                </p>
                <span className="text-[7px] text-slate-400 font-semibold uppercase">{university.country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;