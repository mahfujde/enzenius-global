
import React from 'react';

const CookiesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Cookies Policy</h1>
          <p className="text-blue-100 max-w-2xl font-medium">How we use tracking technologies</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-10">
            <p>
              This Cookies Policy explains how Enzenius Consultancy Services Limited uses cookies and similar technologies to recognize you when you visit our website.
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
