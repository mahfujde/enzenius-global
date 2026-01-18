
import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
        </div>
        <div className="relative h-full flex items-center px-6 md:px-12">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">
              Terms of Service
            </h1>
            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl">
              Please review our terms before using our services. <span className="block mt-2 text-sm">Last Updated: January 2024</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-10">
            <p>
              Welcome to Enzenius Global. By accessing our website or engaging our services, you agree to be bound by the following terms and conditions.
            </p>

            <div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">1. Scope of Services</h2>
              <p>
                Enzenius Global provides education consultancy, counseling, and admission assistance. We act as an intermediary between students and educational institutions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">2. No Guarantee of Admission or Visa</h2>
              <p className="font-bold text-slate-900">
                While we strive for excellence and provide professional guidance, Enzenius Global does not guarantee:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Admission to any specific university or course.</li>
                <li>The approval of any visa application by any immigration authority.</li>
                <li>The granting of any scholarship or financial aid.</li>
              </ul>
              <p className="mt-4 italic">
                All decisions regarding admissions and visas remain at the sole discretion of the respective institutions and government authorities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">3. Accuracy of Information</h2>
              <p>
                You are responsible for ensuring that all documents and information provided to us are authentic and accurate. Provision of fraudulent documents will result in immediate termination of services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">4. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of Malaysia. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kuala Lumpur, Malaysia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
