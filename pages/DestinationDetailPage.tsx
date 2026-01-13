import React from 'react';
import { DestinationSlug, Page } from '../App';

interface DestinationDetail {
  name: string;
  heroImg: string;
  intro: string;
  admissionSteps: { title: string; desc: string; icon: string }[];
  visaRequirements: string[];
  approxCosts: { category: string; cost: string }[];
  whyThisCountry: string[];
}

const destinationData: Record<DestinationSlug, DestinationDetail> = {
  uk: {
    name: 'United Kingdom',
    heroImg: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1600',
    intro: 'The United Kingdom is a global leader in higher education. Boasting centuries-old universities like Oxford and Cambridge alongside modern research powerhouses, the UK offers a vibrant, multicultural environment for international students.',
    admissionSteps: [
      { title: 'Research & Shortlist', desc: 'Identify courses and universities that match your profile (UCAS for Bachelor\'s, direct for Master\'s).', icon: 'fa-magnifying-glass' },
      { title: 'Submit Application', desc: 'Prepare your SOP, LORs, and academic transcripts for submission.', icon: 'fa-file-arrow-up' },
      { title: 'Receive Offer Letter', desc: 'Conditional or Unconditional offers are issued within 2-6 weeks.', icon: 'fa-envelope-open-text' },
      { title: 'CAS Issuance', desc: 'Confirmation of Acceptance for Studies (CAS) is required for the visa application.', icon: 'fa-stamp' }
    ],
    visaRequirements: ['Valid Passport', 'CAS Document', 'TB Test Results', 'IHS (Immigration Health Surcharge) Payment', 'Financial Evidence of Funds'],
    approxCosts: [
      { category: 'Tuition Fees', cost: '£12,000 - £25,000 per year' },
      { category: 'Living Costs', cost: '£1,000 - £1,300 per month' },
      { category: 'Visa Fees', cost: '£490 (Student Visa)' }
    ],
    whyThisCountry: ['1-Year Master\'s Programs', 'Post-Study Work Visa (2 Years)', 'High Employability Rates', 'Global Academic Recognition']
  },
  usa: {
    name: 'USA',
    heroImg: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1600',
    intro: 'The United States remains the top destination for international education, offering unparalleled resources, diverse campus cultures, and the world\'s leading innovation ecosystem.',
    admissionSteps: [
      { title: 'I-20 Form', desc: 'Secure admission and receive your I-20 certificate of eligibility.', icon: 'fa-certificate' },
      { title: 'SEVIS Fee', desc: 'Pay the mandatory SEVIS I-901 fee before your interview.', icon: 'fa-credit-card' },
      { title: 'DS-160 Form', desc: 'Complete the non-immigrant visa application online.', icon: 'fa-id-card' },
      { title: 'Visa Interview', desc: 'Attend the F-1 visa interview at your local US Embassy.', icon: 'fa-user-tie' }
    ],
    visaRequirements: ['I-20 Certificate', 'SEVIS Receipt', 'DS-160 Confirmation', 'Financial Solvency Proof', 'Academic Transcripts'],
    approxCosts: [
      { category: 'Tuition Fees', cost: '$25,000 - $60,000 per year' },
      { category: 'Living Costs', cost: '$1,200 - $2,500 per month' },
      { category: 'Visa Fees', cost: '$185' }
    ],
    whyThisCountry: ['3-Year STEM OPT', 'Unrivaled Funding & Research', 'Cultural Diversity', 'Flexible Curriculum']
  },
  canada: {
    name: 'Canada',
    heroImg: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=1600',
    intro: 'Canada is globally admired for its inclusive society, high safety standards, and clear pathways to permanent residency for international graduates.',
    admissionSteps: [
      { title: 'LOA (Letter of Acceptance)', desc: 'Obtain an official LOA from a Designated Learning Institution (DLI).', icon: 'fa-file-circle-check' },
      { title: 'GIC Account', desc: 'Deposit funds into a Canadian bank to secure living expense proof (SDS Stream).', icon: 'fa-piggy-bank' },
      { title: 'Medical Exam', desc: 'Complete an upfront medical exam with an IRCC-approved panel physician.', icon: 'fa-stethoscope' },
      { title: 'Study Permit Filing', desc: 'Apply online through the IRCC portal.', icon: 'fa-passport' }
    ],
    visaRequirements: ['Letter of Acceptance', 'GIC Certificate', 'IELTS/PTE Score', 'Statement of Purpose', 'Police Clearance'],
    approxCosts: [
      { category: 'Tuition Fees', cost: 'CAD 15,000 - 45,000 per year' },
      { category: 'Living Costs', cost: 'CAD 20,635 per year (Min GIC)' },
      { category: 'Visa Fees', cost: 'CAD 150' }
    ],
    whyThisCountry: ['PGWP (Post-Grad Work Permit)', 'PR Pathways', 'Affordable High-Quality Ed', 'Natural Beauty']
  },
  australia: {
    name: 'Australia',
    heroImg: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1600',
    intro: 'Australia offers a world-class lifestyle and a research-led education system. It is a major hub for international students seeking career opportunities in APAC.',
    admissionSteps: [
      { title: 'Course Offer', desc: 'Apply to Australian unis to get a conditional offer.', icon: 'fa-graduation-cap' },
      { title: 'GTE Assessment', desc: 'Demonstrate your Genuine Student (GS) status through thorough documentation.', icon: 'fa-user-shield' },
      { title: 'Fee Payment', desc: 'Pay the first semester fees to receive your COE.', icon: 'fa-wallet' },
      { title: 'OSHC Purchase', desc: 'Secure Overseas Student Health Cover for your entire duration.', icon: 'fa-hand-holding-medical' }
    ],
    visaRequirements: ['COE (Confirmation of Enrolment)', 'OSHC Proof', 'English Proficiency', 'GS Questionnaire', 'Financial Records'],
    approxCosts: [
      { category: 'Tuition Fees', cost: 'AUD 30,000 - 55,000 per year' },
      { category: 'Living Costs', cost: 'AUD 2,000 - 2,500 per month' },
      { category: 'Visa Fees', cost: 'AUD 710' }
    ],
    whyThisCountry: ['Long Post-Study Work Rights', 'Multicultural Experience', 'Global Top 100 Universities', 'Great Climate']
  },
  'new-zealand': {
    name: 'New Zealand',
    heroImg: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600',
    intro: 'New Zealand is known for its innovation-focused education and incredibly safe environment. All 8 of its universities are ranked in the top 3% globally.',
    admissionSteps: [
      { title: 'Uni Application', desc: 'Apply for your chosen program and receive a formal offer.', icon: 'fa-paper-plane' },
      { title: 'AIP (Approval in Principle)', desc: 'Apply for visa; INZ reviews and gives a preliminary approval.', icon: 'fa-thumbs-up' },
      { title: 'Tuition Transfer', desc: 'Transfer tuition fees only after receiving the AIP.', icon: 'fa-money-bill-transfer' },
      { title: 'E-Visa Issuance', desc: 'Final visa is issued once fee receipt is submitted.', icon: 'fa-qrcode' }
    ],
    visaRequirements: ['Offer Letter', 'Financial Capacity Proof', 'Medical & X-Ray', 'Police Certificates', 'SOP'],
    approxCosts: [
      { category: 'Tuition Fees', cost: 'NZD 25,000 - 40,000 per year' },
      { category: 'Living Costs', cost: 'NZD 20,000 per year (Required)' },
      { category: 'Visa Fees', cost: 'NZD 430' }
    ],
    whyThisCountry: ['Safety & Peace', 'Quality Education', '1-3 Year Work Rights', 'Beautiful Outdoors']
  },
  malaysia: {
    name: 'Malaysia',
    heroImg: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=1600',
    intro: 'Malaysia offers high-quality international degrees at a fraction of the cost, often through twinning programs with top UK and Australian universities.',
    admissionSteps: [
      { title: 'Uni Offer', desc: 'Secure admission from a private or public university.', icon: 'fa-school' },
      { title: 'EMGS Processing', desc: 'Apply for your Visa Approval Letter (VAL) via EMGS portal.', icon: 'fa-gears' },
      { title: 'Single Entry Visa', desc: 'Apply for an SEV at your local embassy using the VAL.', icon: 'fa-ticket' },
      { title: 'Student Pass', desc: 'Medical checkup in Malaysia to convert VAL into a Student Pass.', icon: 'fa-id-badge' }
    ],
    visaRequirements: ['Offer Letter', 'VAL (Visa Approval Letter)', 'Passport Copies', 'Health Declaration', 'Financial Proof'],
    approxCosts: [
      { category: 'Tuition Fees', cost: 'MYR 15,000 - 35,000 per year' },
      { category: 'Living Costs', cost: 'MYR 1,500 - 2,500 per month' },
      { category: 'Visa Fees', cost: 'MYR 1,000 - 2,500 (EMGS Fees)' }
    ],
    whyThisCountry: ['Low Cost of Living', 'Multicultural Experience', 'Western Twinning Degrees', 'Fast Processing']
  },
  indonesia: {
    name: 'Indonesia',
    heroImg: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=1600',
    intro: 'Indonesia is becoming an attractive destination for students interested in Southeast Asian studies, environmental science, and business in an emerging economy.',
    admissionSteps: [
      { title: 'Study Permit', desc: 'The host university applies for your study permit via Ministry of Education.', icon: 'fa-building-columns' },
      { title: 'Telex Visa (E-Visa)', desc: 'Ministry of Law & Human Rights issues the VITAS telex.', icon: 'fa-file-invoice' },
      { title: 'KITAS Conversion', desc: 'Convert your VITAS into a KITAS (Temporary Stay Permit) in Indonesia.', icon: 'fa-repeat' },
      { title: 'Reporting', desc: 'Report to local police and civil registry upon arrival.', icon: 'fa-handshake' }
    ],
    visaRequirements: ['University Sponsorship', 'Study Permit', 'Financial Proof', 'Vaccination Proof', 'Health Insurance'],
    approxCosts: [
      { category: 'Tuition Fees', cost: 'IDR 30M - 100M per year' },
      { category: 'Living Costs', cost: 'IDR 5M - 12M per month' },
      { category: 'Visa Fees', cost: 'USD 150 (VITAS)' }
    ],
    whyThisCountry: ['Unique Cultural Experience', 'Low Costs', 'Strategic Emerging Market', 'Hospitality Excellence']
  },
  europe: {
    name: 'Europe (General)',
    heroImg: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1600',
    intro: 'Studying in Europe offers access to world-class research, deep history, and unique cultural experiences across the Schengen zone.',
    admissionSteps: [
      { title: 'Country Choice', desc: 'Select between Germany, France, Hungary, etc. based on language and tuition.', icon: 'fa-earth-europe' },
      { title: 'Direct Application', desc: 'Apply through national portals (like Uni-Assist for Germany).', icon: 'fa-list-check' },
      { title: 'Blocked Account', desc: 'Many EU countries require a blocked bank account for living funds.', icon: 'fa-vault' },
      { title: 'National D Visa', desc: 'Apply for a long-stay student visa at the relevant consulate.', icon: 'fa-passport' }
    ],
    visaRequirements: ['University Admission', 'Blocked Account/Sponsorship', 'Health Insurance', 'SOP & Motivation Letter', 'Passport'],
    approxCosts: [
      { category: 'Tuition Fees', cost: '€0 - €15,000 per year' },
      { category: 'Living Costs', cost: '€800 - €1,200 per month' },
      { category: 'Visa Fees', cost: '€75 - €100' }
    ],
    whyThisCountry: ['Low/No Tuition (Germany)', 'Schengen Mobility', 'Deep Cultural Heritage', 'Research Innovation']
  }
};

interface DestinationDetailPageProps {
  slug: DestinationSlug;
  onNavigate: (page: Page) => void;
}

const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({ slug, onNavigate }) => {
  const data = destinationData[slug];
  if (!data) return <div className="p-20 text-center text-primary font-bold">Destination not found.</div>;

  return (
    <div className="bg-white">
      <section className="relative h-[60vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={data.heroImg} alt={data.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
          <button onClick={() => onNavigate('destinations')} className="mb-6 flex items-center gap-2 text-blue-300 font-bold uppercase tracking-widest text-xs hover:-translate-x-1 transition-transform">
            <i className="fas fa-arrow-left"></i> All Destinations
          </button>
          <div className="flex items-center gap-6 mb-4">
             <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">Study in {data.name}</h1>
          </div>
          <p className="text-blue-100 max-w-2xl text-lg md:text-xl font-medium leading-relaxed">{data.intro}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-20">
            <div>
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter border-b-4 border-primary inline-block">Key Advantages</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {data.whyThisCountry.map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 items-start">
                    <i className="fas fa-circle-check text-primary mt-1"></i>
                    <span className="font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter border-b-4 border-primary inline-block">Step-by-Step Procedure</h2>
              <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/20 before:to-transparent">
                {data.admissionSteps.map((step, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors">
                      <span className="font-black text-xs">{i+1}</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-primary/50 transition-colors group/card">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center group-hover/card:bg-primary group-hover/card:text-white transition-colors">
                          <i className={`fas ${step.icon}`}></i>
                        </div>
                        <h4 className="font-black text-primary uppercase text-sm">{step.title}</h4>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter border-b-4 border-primary inline-block">Cost Estimations</h2>
              <div className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl">
                <table className="w-full text-left">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      <th className="p-6 text-xs font-black uppercase text-blue-300 tracking-widest">Category</th>
                      <th className="p-6 text-xs font-black uppercase text-blue-300 tracking-widest">Estimated Cost</th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    {data.approxCosts.map((c, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-6 font-bold">{c.category}</td>
                        <td className="p-6 text-blue-100">{c.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 sticky top-32 shadow-sm">
              <h3 className="text-xl font-black mb-6 uppercase tracking-tighter">Visa Requirements</h3>
              <ul className="space-y-4 mb-8">
                {data.visaRequirements.map((req, i) => (
                  <li key={i} className="flex gap-3 text-sm font-bold text-slate-600">
                    <i className="fas fa-check-circle text-green-500 mt-0.5"></i>
                    {req}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => window.open("https://forms.zohopublic.com/aucklandenzgm1/form/Primaryinformationform/formperma/5h49y5YaIsrzFQCsSgmcUpnW93PH_2Pq5nM1Us0EC8Y", "_blank")}
                className="w-full bg-primary text-white font-black py-4 rounded-xl uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg active:scale-95"
              >
                Apply for {data.name}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetailPage;