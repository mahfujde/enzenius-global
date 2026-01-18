
import React from 'react';

const CookiesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
        </div>
        <div className="relative h-full flex items-center px-6 md:px-12">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">
              Cookies Policy
            </h1>
            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl">
              Understand how we use cookies to enhance your experience and protect your privacy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-10">
            <p>
              This Cookies Policy explains how Enzenius Global uses cookies and similar technologies to recognize you when you visit our website.
            </p>

            <div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">1. What are Cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. They help us provide a better browsing experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">2. Why do we use Cookies?</h2>
              <p>We use cookies for several reasons:</p>
              <ul className="list-disc pl-6 mt-4 space-y-4">
                <li>
                  <strong>Essential Cookies:</strong> Strictly necessary for the website to function.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;
