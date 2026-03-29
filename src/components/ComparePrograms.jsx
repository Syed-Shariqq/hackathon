/* Program data registry — imported by Programs.jsx */
export const PROGRAM_REGISTRY = {
  'B.Tech Computer Science': {
    fees: '₹1.8L / year',
    avgSalary: '₹18 LPA',
    topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Flipkart'],
    duration: '4 Years',
    seats: 120,
    level: 'UG',
    outcomes: '95% placed',
    accreditation: 'NAAC A++',
    highlight: 'AI, ML & Systems Design specialisation',
    badge: '🔥 Most Popular',
  },
  'MBA Business Analytics': {
    fees: '₹2.2L / year',
    avgSalary: '₹22 LPA',
    topRecruiters: ['McKinsey', 'Deloitte', 'Goldman Sachs', 'Meta'],
    duration: '2 Years',
    seats: 60,
    level: 'PG',
    outcomes: '100% placed',
    accreditation: 'AACSB',
    highlight: 'Live capstone with Fortune 500',
    badge: '⭐ Top Ranked',
  },
  'B.Sc Biotechnology': {
    fees: '₹1.1L / year',
    avgSalary: '₹9 LPA',
    topRecruiters: ["Dr. Reddy's", 'Biocon', 'Sun Pharma'],
    duration: '3 Years',
    seats: 80,
    level: 'UG',
    outcomes: '88% placed',
    accreditation: 'NAAC A++',
    highlight: 'CSIR-funded research labs',
    badge: '🧬 Research Focus',
  },
  'BA English Literature': {
    fees: '₹65K / year',
    avgSalary: '₹6 LPA',
    topRecruiters: ['HarperCollins', 'NDTV', 'Times Group'],
    duration: '3 Years',
    seats: 50,
    level: 'UG',
    outcomes: '82% placed',
    accreditation: 'NAAC A++',
    highlight: 'Creative writing + media track',
    badge: null,
  },
  'LLB Corporate Law': {
    fees: '₹1.5L / year',
    avgSalary: '₹14 LPA',
    topRecruiters: ['Khaitan & Co', 'AZB Partners', 'Shardul Amarchand'],
    duration: '5 Years',
    seats: 60,
    level: 'Integrated',
    outcomes: '91% placed',
    accreditation: 'BCI Approved',
    highlight: 'Moot court + corporate clinic',
    badge: '⚖️ Bar Council Approved',
  },
  'Ph.D Research Programs': {
    fees: '₹80K / year',
    avgSalary: '₹16 LPA',
    topRecruiters: ['ISRO', 'IITs', 'Stanford', 'MIT'],
    duration: '3–5 Years',
    seats: 30,
    level: 'Doctoral',
    outcomes: '100% fellowship',
    accreditation: 'UGC',
    highlight: '₹120Cr annual research grants',
    badge: '🔬 Fully Funded',
  },
};

/** Back-of-card flip content: placement ring %, pitch lines, hiring logos (Clearbit domain optional) */
export const PROGRAM_BACK_DETAILS = {
  'B.Tech Computer Science': {
    placementPct: 95,
    pitch: [
      'Industry-aligned CS with depth in algorithms, AI, and systems at scale.',
      'Strong internship pipelines into global product and cloud teams.',
    ],
    companies: [
      { name: 'Google', domain: 'google.com', blurb: 'Search, AI, and cloud products' },
      { name: 'Microsoft', domain: 'microsoft.com', blurb: 'Enterprise software and Azure cloud' },
      { name: 'Amazon', domain: 'amazon.com', blurb: 'E-commerce and AWS infrastructure' },
    ],
  },
  'MBA Business Analytics': {
    placementPct: 98,
    pitch: [
      'Data-driven leadership with live cases from Fortune 500 partners.',
      'Capstones in strategy, forecasting, and analytics consulting delivery.',
    ],
    companies: [
      { name: 'Goldman Sachs', domain: 'goldmansachs.com', blurb: 'Investment banking and securities' },
      { name: 'Deloitte', domain: 'deloitte.com', blurb: 'Management consulting and advisory' },
      { name: 'McKinsey', domain: 'mckinsey.com', blurb: 'Global strategy consulting' },
    ],
  },
  'B.Sc Biotechnology': {
    placementPct: 88,
    pitch: [
      'Hands-on life sciences with CSIR-linked labs and GMP exposure.',
      'Paths into pharma R&D, bioinformatics, and public-sector science.',
    ],
    companies: [
      { name: 'Biocon', domain: 'biocon.com', blurb: 'Biopharmaceutical research and manufacturing' },
      { name: 'ISRO', domain: null, blurb: 'Space biology and life sciences research' },
      { name: 'Infosys', domain: 'infosys.com', blurb: 'Healthcare IT and bioinformatics' },
    ],
  },
  'BA English Literature': {
    placementPct: 82,
    pitch: [
      'Critical reading, creative writing, and media literacy in one rigorous track.',
      'Alumni work in publishing, journalism, communications, and research.',
    ],
    companies: [
      { name: 'Times Group', domain: 'timesgroup.com', blurb: 'Journalism, media, and publishing' },
      { name: 'Deloitte', domain: 'deloitte.com', blurb: 'Communications and content strategy' },
      { name: 'McKinsey', domain: 'mckinsey.com', blurb: 'Research writing and knowledge' },
    ],
  },
  'LLB Corporate Law': {
    placementPct: 91,
    pitch: [
      'Integrated corporate law with moot courts and in-house legal clinics.',
      'Prepare for firm roles in banking, compliance, and advisory.',
    ],
    companies: [
      { name: 'Goldman Sachs', domain: 'goldmansachs.com', blurb: 'Legal compliance and regulatory affairs' },
      { name: 'HDFC', domain: 'hdfcbank.com', blurb: 'Banking law and financial regulation' },
      { name: 'Deloitte', domain: 'deloitte.com', blurb: 'Legal advisory and risk consulting' },
    ],
  },
  'Ph.D Research Programs': {
    placementPct: 100,
    pitch: [
      'Fully funded research across sciences with dedicated faculty mentors.',
      'Publish, patent, and place into national labs and global research groups.',
    ],
    companies: [
      { name: 'ISRO', domain: null, blurb: 'Funded doctoral research programs' },
      { name: 'Biocon', domain: 'biocon.com', blurb: 'Pharmaceutical R&D fellowships' },
      { name: 'Microsoft', domain: 'microsoft.com', blurb: 'Research internships and grants' },
    ],
  },
};
