import React from 'react';

const offices = [
  {
    country: 'Malaysia',
    city: 'Kuala Lumpur',
    address: '691-09-01, Desa Kiara Condominium, Jalan Damansara, Kuala Lumpur-60000',
    phone: '+60 11 6116 9434',
    rawPhone: '601161169434',
    email: 'my@enzeniusglobal.com'
  },
  {
    country: 'Indonesia',
    city: 'Jakarta',
    address: 'Perumahan Nusantara Gang V, Rt.010 Rw.007 No.48 Cilincing, Jakarta Utara, Dki Jakarta - 14140',
    phone: '+62 852 8384 1815',
    rawPhone: '6285283841815',
    email: 'id@enzeniusglobal.com'
  }
];

interface OfficeLocationsProps {
  priorityCountry?: string;
}

const OfficeLocations: React.FC<OfficeLocationsProps> = ({ priorityCountry = 'Global' }) => {
  // Sort offices so the priority country appears first
  const sortedOffices = [...offices].sort((a, b) => {
    if (a.country === priorityCountry) return -1;
    if (b.country === priorityCountry) return 1;
    return 0;
  });

  const handleWhatsAppContact = (rawPhone: string) => {
    const message = encodeURIComponent("Hello Enzenius Global, I am contacting you regarding your consultancy services.");
    window.open(`https://wa.me/${rawPhone}?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">Our Regional Presence</h2>
          <div className="w-24 h-1 bg-brandCTA mx-auto rounded-full mb-6"></div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Direct localized expertise through our primary operational hubs in Southeast Asia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto gap-8">
          {sortedOffices.map((office, idx) => (
            <div 
              key={idx} 
              className={`backdrop-blur-md p-8 rounded-[2rem] border transition-all group relative overflow-hidden flex flex-col ${
                office.country === priorityCountry 
                  ? 'bg-white/15 border-brandCTA ring-2 ring-brandCTA shadow-[0_0_30px_rgba(243,112,33,0.3)]' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              {office.country === priorityCountry && (
                <div className="absolute top-0 right-0 bg-brandCTA text-white text-[8px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl">
                  Local Hub
                </div>
              )}
              
              <div className="flex justify-between items-start mb-6">
                <div className="text-brandCTA text-3xl group-hover:scale-110 transition-transform">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              
              <h3 className="text-xl font-black mb-1 uppercase tracking-tighter">{office.city}</h3>
              <p className="text-[10px] font-black text-blue-300 mb-6 uppercase tracking-[0.3em]">{office.country}</p>
              
              <div className="space-y-4 text-xs text-blue-50/70 font-medium leading-relaxed mb-8 flex-grow">
                <p className="flex items-start gap-3"><i className="fas fa-building text-brandCTA mt-1 shrink-0"></i>{office.address}</p>
                <p className="flex items-center gap-3"><i className="fas fa-phone-alt text-brandCTA shrink-0"></i>{office.phone}</p>
                <p className="flex items-center gap-3"><i className="fas fa-envelope text-brandCTA shrink-0"></i>{office.email}</p>
              </div>
              
              <button 
                onClick={() => handleWhatsAppContact(office.rawPhone)}
                className={`w-full py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all mt-auto ${
                  office.country === priorityCountry 
                    ? 'bg-brandCTA text-white shadow-lg' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Contact Support <i className="fab fa-whatsapp ml-2 text-[10px]"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;