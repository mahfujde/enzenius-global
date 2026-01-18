import React from 'react';
import { Link } from 'react-router-dom';

const destinations = [
  { name: 'New Zealand', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800', slug: 'new-zealand' },
  { name: 'Malaysia', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800', slug: 'malaysia' },
  { name: 'Indonesia', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800', slug: 'indonesia' },
  { name: 'Australia', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800', slug: 'australia' },
  { name: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800', slug: 'uk' },
  { name: 'USA', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800', slug: 'usa' },
  { name: 'Canada', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800', slug: 'canada' },
  { name: 'Europe', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800', slug: 'europe' }
];

const Destinations: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Study Destinations</h2>
            <p className="text-slate-600">Choose from prestigious institutions across the globe. We help you find the perfect match for your academic background.</p>
          </div>
          <Link 
            to="/destinations"
            className="text-primary font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-3 transition-all"
          >
            View Detailed Countries <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <Link 
              key={index} 
              to={`/destination/${dest.slug}`}
              className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-lg block"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-black mb-1 uppercase tracking-tighter text-white">{dest.name}</h3>
                <p className="text-sm text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity font-bold uppercase tracking-widest">Explore Opportunities</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;