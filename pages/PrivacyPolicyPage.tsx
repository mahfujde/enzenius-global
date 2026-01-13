
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Privacy Policy</h1>
          <p className="text-blue-100 max-w-2xl font-medium">Last Updated: January 2024</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-10">
            <div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">1. Introduction</h2>
              <p>
                Enzenius Consultancy Services Limited ("Enzenius Global," "we," "our," or "us") is committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, use, and share information about you when you visit our website, use our consultancy services, or interact with us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Identity Data:</strong> Name, date of birth, gender, nationality, and passport details.</li>
                <li><strong>Contact Data:</strong> Email address, phone number, and residential address.</li>
                <li><strong>Academic Data:</strong> Educational history, transcripts, certificates, and English proficiency test scores.</li>
                <li><strong>Professional Data:</strong> Employment history, resumes, and references.</li>
                <li><strong>Financial Data:</strong> Information required for visa processing and scholarship applications.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">3. How We Use Your Information</h2>
              <p>We process your data for the following purposes:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To provide counseling and admission services.</li>
                <li>To facilitate applications to partner universities and colleges.</li>
                <li>To assist with visa applications and legal documentation.</li>
                <li>To communicate updates regarding your application status.</li>
                <li>To comply with legal and regulatory obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">4. Global Compliance</h2>
              <p>
                As a global agency, we adhere to the data protection laws of the jurisdictions in which we operate, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Europe:</strong> General Data Protection Regulation (GDPR).</li>
                <li><strong>Malaysia:</strong> Personal Data Protection Act (PDPA).</li>
                <li><strong>Indonesia:</strong> Law on Personal Data Protection.</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-black text-primary uppercase text-sm mb-4">Contact Our Data Officer</h3>
              <p className="text-sm">For any privacy-related concerns or to exercise your right to be forgotten, please contact us at:</p>
              <p className="text-sm font-bold mt-2">info@enzeniusglobal.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
