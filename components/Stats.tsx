import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Successful Placements', value: '5000+', icon: 'fa-user-graduate' },
    { label: 'Partner Universities', value: '600+', icon: 'fa-university' },
    { label: 'Strategic Hubs', value: '2', icon: 'fa-globe' },
    { label: 'Years Experience', value: '10+', icon: 'fa-award' },
  ];

  return (
    <section className="py-12 bg-white relative -mt-10 mx-6 md:mx-12 rounded-xl shadow-xl z-20 border border-brandSoft/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl md:text-4xl text-brandGrowth mb-2 transition-transform duration-300 group-hover:scale-110">
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <div className="text-3xl font-extrabold text-brandDeep mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;