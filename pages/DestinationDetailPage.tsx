import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { DestinationSlug } from '../App';

interface University {
  name: string;
  logo: string;
}

interface DestinationDetail {
  name: string;
  heroImg: string;
  intro: string;
  admissionSteps: { title: string; desc: string; icon: string }[];
  visaRequirements: string[];
  approxCosts: { category: string; cost: string }[];
  whyThisCountry: string[];
  universities: University[];
}

const destinationData: Record<DestinationSlug, DestinationDetail> = {
  uk: {
    name: 'United Kingdom',
    heroImg: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2000&auto=format&fit=crop',
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
    whyThisCountry: ['1-Year Master\'s Programs', 'Post-Study Work Visa (2 Years)', 'High Employability Rates', 'Global Academic Recognition'],
    universities: [
      { name: 'University of Oxford', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png' },
      { name: 'University of Cambridge', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/University_of_Cambridge_crest.svg/1200px-University_of_Cambridge_crest.svg.png' },
      { name: 'Imperial College London', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Imperial_College_London_crest.svg/1200px-Imperial_College_London_crest.svg.png' },
      { name: 'UCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/University_College_London_logo.svg/1200px-University_College_London_logo.svg.png' },
      { name: 'University of Edinburgh', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Edinburgh_University_coat_of_arms.svg/1200px-Edinburgh_University_coat_of_arms.svg.png' },
      { name: 'University of Manchester', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/The_University_of_Manchester_logo.svg/1200px-The_University_of_Manchester_logo.svg.png' },
      { name: 'King\'s College London', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/King%27s_College_London_logo.svg/1200px-King%27s_College_London_logo.svg.png' },
      { name: 'London School of Economics', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/LSE_logo.svg/1200px-LSE_logo.svg.png' },
      { name: 'University of Warwick', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/University_of_Warwick_logo.svg/1200px-University_of_Warwick_logo.svg.png' },
      { name: 'University of Bristol', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/University_of_Bristol_logo.svg/1200px-University_of_Bristol_logo.svg.png' }
    ]
  },
  usa: {
    name: 'USA',
    heroImg: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2000&auto=format&fit=crop',
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
    whyThisCountry: ['3-Year STEM OPT', 'Unrivaled Funding & Research', 'Cultural Diversity', 'Flexible Curriculum'],
    universities: [
      { name: 'Harvard University', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png' },
      { name: 'Stanford University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/1200px-Seal_of_Leland_Stanford_Junior_University.svg.png' },
      { name: 'MIT', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png' },
      { name: 'Yale University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/1200px-Yale_University_Shield_1.svg.png' },
      { name: 'Princeton University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/1200px-Princeton_seal.svg.png' },
      { name: 'Columbia University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Columbia_University_Coat_of_Arms.svg/1200px-Columbia_University_Coat_of_Arms.svg.png' },
      { name: 'University of Chicago', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/79/University_of_Chicago_shield.svg/1200px-University_of_Chicago_shield.svg.png' },
      { name: 'UC Berkeley', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png' },
      { name: 'University of Pennsylvania', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_banner.svg/1200px-UPenn_shield_with_banner.svg.png' },
      { name: 'Cornell University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/1200px-Cornell_University_seal.svg.png' }
    ]
  },
  canada: {
    name: 'Canada',
    heroImg: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2000&auto=format&fit=crop',
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
    whyThisCountry: ['PGWP (Post-Grad Work Permit)', 'PR Pathways', 'Affordable High-Quality Ed', 'Natural Beauty'],
    universities: [
      { name: 'University of Toronto', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/University_of_Toronto_coat_of_arms.svg/1200px-University_of_Toronto_coat_of_arms.svg.png' },
      { name: 'University of British Columbia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/UBC_coat_of_arms.svg/1200px-UBC_coat_of_arms.svg.png' },
      { name: 'McGill University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/McGill_University_CoA.svg/1200px-McGill_University_CoA.svg.png' },
      { name: 'McMaster University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/McMaster_University_coat_of_arms.svg/1200px-McMaster_University_coat_of_arms.svg.png' },
      { name: 'University of Alberta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/University_of_Alberta_seal.svg/1200px-University_of_Alberta_seal.svg.png' },
      { name: 'University of Waterloo', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/1200px-University_of_Waterloo_seal.svg.png' },
      { name: 'Western University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Western_University_seal.svg/1200px-Western_University_seal.svg.png' },
      { name: 'Queen\'s University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Queen%27s_University_coat_of_arms.svg/1200px-Queen%27s_University_coat_of_arms.svg.png' },
      { name: 'University of Montreal', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Coat_of_arms_of_the_Universit%C3%A9_de_Montr%C3%A9al.svg/1200px-Coat_of_arms_of_the_Universit%C3%A9_de_Montr%C3%A9al.svg.png' },
      { name: 'Simon Fraser University', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Simon_Fraser_University_seal.svg/1200px-Simon_Fraser_University_seal.svg.png' }
    ]
  },
  australia: {
    name: 'Australia',
    heroImg: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2000&auto=format&fit=crop',
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
    whyThisCountry: ['Long Post-Study Work Rights', 'Multicultural Experience', 'Global Top 100 Universities', 'Great Climate'],
    universities: [
      { name: 'Australian National University', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Australian_National_University_logo.svg/1200px-Australian_National_University_logo.svg.png' },
      { name: 'University of Melbourne', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/University_of_Melbourne_logo.svg/1200px-University_of_Melbourne_logo.svg.png' },
      { name: 'University of Sydney', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sydney_Uni_Arms.png/1200px-Sydney_Uni_Arms.png' },
      { name: 'University of Queensland', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/14/University_of_Queensland_logo.svg/1200px-University_of_Queensland_logo.svg.png' },
      { name: 'Monash University', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Monash_University_logo.svg/1200px-Monash_University_logo.svg.png' },
      { name: 'UNSW Sydney', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/UNSW_Sydney_logo.svg/1200px-UNSW_Sydney_logo.svg.png' },
      { name: 'University of Western Australia', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/59/University_of_Western_Australia.svg/1200px-University_of_Western_Australia.svg.png' },
      { name: 'University of Adelaide', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/University_of_Adelaide_coat_of_arms.svg/1200px-University_of_Adelaide_coat_of_arms.svg.png' },
      { name: 'University of Technology Sydney', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/University_of_Technology_Sydney_logo.svg/1200px-University_of_Technology_Sydney_logo.svg.png' },
      { name: 'Macquarie University', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Macquarie_University_Logo.svg/1200px-Macquarie_University_Logo.svg.png' }
    ]
  },
  'new-zealand': {
    name: 'New Zealand',
    heroImg: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2000&auto=format&fit=crop',
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
    whyThisCountry: ['Safety & Peace', 'Quality Education', '1-3 Year Work Rights', 'Beautiful Outdoors'],
    universities: [
      { name: 'University of Auckland', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/The_University_of_Auckland_Coat_of_Arms.svg/1200px-The_University_of_Auckland_Coat_of_Arms.svg.png' },
      { name: 'University of Otago', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Coat_of_arms_of_the_University_of_Otago.svg/1200px-Coat_of_arms_of_the_University_of_Otago.svg.png' },
      { name: 'Victoria University of Wellington', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Victoria_University_of_Wellington_coat_of_arms.svg/1200px-Victoria_University_of_Wellington_coat_of_arms.svg.png' },
      { name: 'University of Canterbury', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/University_of_Canterbury_Arms.svg/1200px-University_of_Canterbury_Arms.svg.png' },
      { name: 'Massey University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Massey_University_logo.svg/1200px-Massey_University_logo.svg.png' },
      { name: 'Lincoln University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Lincoln_University_New_Zealand_logo.svg/1200px-Lincoln_University_New_Zealand_logo.svg.png' },
      { name: 'University of Waikato', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/32/University_of_Waikato_logo.svg/1200px-University_of_Waikato_logo.svg.png' },
      { name: 'Auckland University of Technology', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Auckland_University_of_Technology_logo.svg/1200px-Auckland_University_of_Technology_logo.svg.png' },
      { name: 'University of Auckland Business School', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/The_University_of_Auckland_Coat_of_Arms.svg/1200px-The_University_of_Auckland_Coat_of_Arms.svg.png' },
      { name: 'Otago Polytechnic', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Otago_Polytechnic_logo.svg/1200px-Otago_Polytechnic_logo.svg.png' }
    ]
  },
  malaysia: {
    name: 'Malaysia',
    heroImg: 'https://images.unsplash.com/photo-1508062878650-88b52897f298?q=80&w=2000&auto=format&fit=crop',
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
    whyThisCountry: ['Low Cost of Living', 'Multicultural Experience', 'Western Twinning Degrees', 'Fast Processing'],
    universities: [
      { name: 'University of Malaya', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/University_of_Malaya_Coat_Of_Arms.svg/1200px-University_of_Malaya_Coat_Of_Arms.svg.png' },
      { name: 'Universiti Putra Malaysia', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Universiti_Putra_Malaysia_logo.svg/1200px-Universiti_Putra_Malaysia_logo.svg.png' },
      { name: 'Universiti Kebangsaan Malaysia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/National_University_of_Malaysia_logo.svg/1200px-National_University_of_Malaysia_logo.svg.png' },
      { name: 'Universiti Sains Malaysia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Universiti_Sains_Malaysia_logo.svg/1200px-Universiti_Sains_Malaysia_logo.svg.png' },
      { name: 'Universiti Teknologi Malaysia', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Universiti_Teknologi_Malaysia.svg/1200px-Universiti_Teknologi_Malaysia.svg.png' },
      { name: 'Taylor\'s University', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Taylor%27s_University_Logo.svg/1200px-Taylor%27s_University_Logo.svg.png' },
      { name: 'Monash University Malaysia', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Monash_University_logo.svg/1200px-Monash_University_logo.svg.png' },
      { name: 'Sunway University', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Sunway_University_Logo.svg/1200px-Sunway_University_Logo.svg.png' },
      { name: 'UCSI University', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/UCSI_University_logo.svg/1200px-UCSI_University_logo.svg.png' },
      { name: 'Nottingham University Malaysia', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/University_of_Nottingham_logo.svg/1200px-University_of_Nottingham_logo.svg.png' }
    ]
  },
  indonesia: {
    name: 'Indonesia',
    heroImg: 'https://images.unsplash.com/photo-1555400082-f48e48a6e098?q=80&w=2000&auto=format&fit=crop',
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
    whyThisCountry: ['Unique Cultural Experience', 'Low Costs', 'Strategic Emerging Market', 'Hospitality Excellence'],
    universities: [
      { name: 'University of Indonesia', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Universitas_Indonesia_logo.svg/1200px-Universitas_Indonesia_logo.svg.png' },
      { name: 'Gadjah Mada University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emblem_of_Universitas_Gadjah_Mada.svg/1200px-Emblem_of_Universitas_Gadjah_Mada.svg.png' },
      { name: 'Bandung Institute of Technology', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Logo_Institut_Teknologi_Bandung.png/1200px-Logo_Institut_Teknologi_Bandung.png' },
      { name: 'Bogor Agricultural University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Logo_IPB_University.png/1200px-Logo_IPB_University.png' },
      { name: 'Airlangga University', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Universitas_Airlangga_logo.svg/1200px-Universitas_Airlangga_logo.svg.png' },
      { name: 'Diponegoro University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Lambang_Universitas_Diponegoro.png/1200px-Lambang_Universitas_Diponegoro.png' },
      { name: 'Sepuluh Nopember Institute of Technology', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Institut_Teknologi_Sepuluh_Nopember_Logo.png/1200px-Institut_Teknologi_Sepuluh_Nopember_Logo.png' },
      { name: 'Brawijaya University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Lambang_Universitas_Brawijaya.png/1200px-Lambang_Universitas_Brawijaya.png' },
      { name: 'Padjadjaran University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Logo_Unpad.png/1200px-Logo_Unpad.png' },
      { name: 'Hasanuddin University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/UNHAS_LAMBANG.png/1200px-UNHAS_LAMBANG.png' }
    ]
  },
  europe: {
    name: 'Europe (General)',
    heroImg: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=2000&auto=format&fit=crop',
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
    whyThisCountry: ['Low/No Tuition (Germany)', 'Schengen Mobility', 'Deep Cultural Heritage', 'Research Innovation'],
    universities: [
      { name: 'Technical University of Munich', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/TU_M%C3%BCnchen_Logo.svg/1200px-TU_M%C3%BCnchen_Logo.svg.png' },
      { name: 'ETH Zurich', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/ETH_Z%C3%BCrich_Logo_black.svg/1200px-ETH_Z%C3%BCrich_Logo_black.svg.png' },
      { name: 'University of Amsterdam', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/University_of_Amsterdam_logo.svg/1200px-University_of_Amsterdam_logo.svg.png' },
      { name: 'Sorbonne University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Sorbonne_University_logo.svg/1200px-Sorbonne_University_logo.svg.png' },
      { name: 'University of Copenhagen', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/University_of_Copenhagen_logo.svg/1200px-University_of_Copenhagen_logo.svg.png' },
      { name: 'KU Leuven', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Logo_KU_Leuven.svg/1200px-Logo_KU_Leuven.svg.png' },
      { name: 'TU Delft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Delft_University_of_Technology_logo.svg/1200px-Delft_University_of_Technology_logo.svg.png' },
      { name: 'Heidelberg University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Ruprecht-Karls-Universit%C3%A4t_Heidelberg_seal.svg/1200px-Ruprecht-Karls-Universit%C3%A4t_Heidelberg_seal.svg.png' },
      { name: 'University of Bologna', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Seal_of_the_University_of_Bologna.svg/1200px-Seal_of_the_University_of_Bologna.svg.png' },
      { name: 'Ludwig Maximilian University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/LMU_Siegel.svg/1200px-LMU_Siegel.svg.png' }
    ]
  }
};

const DestinationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: DestinationSlug }>();
  const navigate = useNavigate();
  const data = slug ? destinationData[slug as DestinationSlug] : null;
  
  if (!data) return <div className="p-20 text-center text-primary font-bold">Destination not found.</div>;

  return (
    <div className="bg-white">
      <section className="relative h-[60vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={data.heroImg} alt={data.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
          <Link to="/destinations" className="mb-6 flex items-center gap-2 text-blue-300 font-bold uppercase tracking-widest text-xs hover:-translate-x-1 transition-transform">
            <i className="fas fa-arrow-left"></i> All Destinations
          </Link>
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
                onClick={() => window.open("https://forms.zohopublic.com/pumasolutionsglobalgm1/form/StudentAssessment/formperma/Zgn5DTfvr31olMyn3d5sKFnEbSv9HALS4_wOnGR5AQE", "_blank")}
                className="w-full bg-primary text-white font-black py-4 rounded-xl uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg active:scale-95"
              >
                Apply for {data.name}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnered Universities Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-12 uppercase tracking-tighter">
            Top Partnered Universities in {data.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
            {data.universities.map((university, index) => (
              <div key={index} className="flex flex-col items-center justify-center group">
                <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center bg-white rounded-2xl p-4 md:p-5 transition-all group-hover:shadow-xl group-hover:scale-105 border border-slate-100">
                  <img 
                    src={university.logo} 
                    alt={university.name} 
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="mt-4 text-[10px] md:text-xs font-bold text-center text-slate-700 px-2 leading-tight">
                  {university.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetailPage;