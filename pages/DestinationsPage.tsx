import React from 'react';
import { DestinationSlug } from '../App';

interface DestinationsPageProps {
  onSelectDestination: (slug: DestinationSlug) => void;
}

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

const DestinationsPage: React.FC<DestinationsPageProps> = ({ onSelectDestination }) => {
  return (
    <div className="bg-slate-50">
      <section className="bg-slate-900 text-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 uppercase tracking-tighter text-white">Choose Your Destination</h1>
          <p className="text-sm md:text-xl text-blue-100/80 max-w-2xl mx-auto font-medium">Explore the best countries to build your academic career. Our experts are ready to guide you through every step.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 grid gap-8 lg:gap-12 lg:grid-cols-2">
          {destinations.map((dest, i) => (
            <div 
              key={i} 
              onClick={() => onSelectDestination(dest.slug)}
              className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col sm:flex-row hover:shadow-2xl transition-all group cursor-pointer active:scale-[0.98]"
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;