import { useEffect } from 'react';
import { useApplyModal } from '../context/ApplyModalContext';
import {
  FileText,
  UploadCloud,
  UserCheck,
  MailPlus,
  CheckCircle,
  CalendarDays,
  Award,
  BookOpen,
  CheckSquare,
  ArrowRight,
  GraduationCap,
  Sparkles,
  ChevronDown,
  Clock
} from 'lucide-react';

const ADMISSION_STEPS = [
  {
    id: 1,
    title: 'Submit Application',
    desc: 'Fill out the online form with your basic details and academic preferences.',
    icon: FileText
  },
  {
    id: 2,
    title: 'Upload Documents',
    desc: 'Provide necessary academic transcripts, ID proofs, and recent photographs.',
    icon: UploadCloud
  },
  {
    id: 3,
    title: 'Entrance / Interview',
    desc: 'Appear for the Horizon Entrance Test (HET) or personal interview round.',
    icon: UserCheck
  },
  {
    id: 4,
    title: 'Receive Offer Letter',
    desc: 'If selected, you will receive a conditional or unconditional offer letter.',
    icon: MailPlus
  },
  {
    id: 5,
    title: 'Confirm Enrollment',
    desc: 'Pay the admission fee to secure your seat and receive your student ID.',
    icon: CheckCircle
  }
];

const ELIGIBILITY = [
  {
    course: 'B.Tech Programs',
    academic: 'Minimum 60% aggregate in 10+2 (PCM)',
    exam: 'JEE Main or Horizon Entrance Test (HET)',
    skills: 'Strong analytical and problem-solving skills'
  },
  {
    course: 'MBA Programs',
    academic: 'Minimum 50% in any recognized Bachelor’s Degree',
    exam: 'CAT / MAT / XAT or HET',
    skills: 'Leadership potential and communication'
  },
  {
    course: 'Law (B.A. LL.B)',
    academic: 'Minimum 50% aggregate in 10+2',
    exam: 'CLAT or LSAT-India',
    skills: 'Critical reading and logical reasoning'
  }
];

const IMPORTANT_DATES = [
  { label: 'Applications Open', date: 'March 15, 2025' },
  { label: 'Early Bird Deadline', date: 'April 30, 2025' },
  { label: 'Entrance Exams (HET)', date: 'May 10 - May 15, 2025' },
  { label: 'Result Announcement', date: 'May 25, 2025' },
  { label: 'Session Commences', date: 'August 1, 2025' }
];

const SCHOLARSHIPS = [
  {
    name: 'Merit Excellence Scholarship',
    criteria: '90%+ in 10+2 or Top 5% in HET',
    amount: 'Up to 50% Tuition Waiver'
  },
  {
    name: 'Women in Tech Scholarship',
    criteria: 'Female applicants in STEM programs',
    amount: '25% Tuition Waiver + Mentorship'
  },
  {
    name: 'Sports Achiever Grant',
    criteria: 'National/State level sports certificate',
    amount: 'Varies based on achievement level'
  }
];

const DOCUMENTS = [
  '10th and 12th Mark Sheets',
  'Bachelor’s Degree Transcript (for PG courses)',
  'Valid Entrance Exam Scorecard',
  'Government ID Proof (Aadhaar / Passport)',
  'Recent Passport-Size Photographs',
  'Statement of Purpose (MBA / Ph.D)'
];

export default function Admissions() {
  const { openApply } = useApplyModal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => fadeElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="bg-[#0F1224] min-h-screen text-white w-full overflow-x-hidden selection:bg-[#C9A84C]/30 selection:text-[#C9A84C]">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-6">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0F1224]/80 via-[#1B1F3B]/60 to-[#0F1224]" />
        
        {/* Glowing Accents */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#C9A84C]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#C9A84C]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center fade-up mt-12">
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-md">
            <Sparkles size={14} />
            Admissions for 2025-26
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            Begin Your Journey at<br/>
            <span className="gradient-text">Horizon University</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed font-light">
            Secure your future with world-class education, 95% guaranteed placement rates, and access to top global hiring partners.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <button 
              onClick={() => openApply()}
              className="w-full sm:w-auto bg-[#C9A84C] text-[#0F1224] font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 glow-gold"
            >
              Apply Now <ArrowRight size={18} />
            </button>
            <a 
              href="#process" 
              className="w-full sm:w-auto glass text-white font-medium px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        <a href="#process" className="absolute bottom-8 text-[#C9A84C]/50 hover:text-[#C9A84C] transition-colors animate-bounce">
          <ChevronDown size={32} />
        </a>
      </section>

      {/* 2. ADMISSION PROCESS */}
      <section id="process" className="py-24 px-6 relative z-10 bg-[#0F1224]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Path to <span className="text-[#C9A84C]">Admission</span></h2>
            <p className="text-white/60 max-w-2xl mx-auto">Follow these five simple steps to secure your enrollment at Horizon University.</p>
          </div>

          <div className="relative flex flex-col md:flex-row items-start justify-between gap-8 pt-8">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[44px] left-[5%] right-[5%] h-0.5 bg-linear-to-r from-[#C9A84C]/10 via-[#C9A84C]/50 to-[#C9A84C]/10 z-0" />
            
            {ADMISSION_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative z-10 flex flex-col items-center flex-1 text-center fade-up group" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#C9A84C]/50 transition-all duration-300 relative bg-[#1B1F3B]">
                    <Icon className="text-[#C9A84C]" size={28} />
                    <div className="absolute -top-2 -right-2 bg-[#C9A84C] text-[#0F1224] text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-lg">
                      {step.id}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#C9A84C] transition-colors">{step.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed px-2">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ELIGIBILITY CRITERIA */}
      <section className="py-20 px-6 bg-[#1B1F3B]/30 relative border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligibility <span className="text-[#C9A84C]">Criteria</span></h2>
            <p className="text-white/60 max-w-2xl mx-auto">Review the basic requirements for our most popular programs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ELIGIBILITY.map((item, index) => (
              <div key={index} className="glass p-8 rounded-2xl card-glow fade-up flex flex-col h-full bg-[#1B1F3B]/50 hover:bg-[#1B1F3B]/80 transition-colors" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                  <GraduationCap className="text-[#C9A84C]" size={32} />
                  <h3 className="text-xl font-bold">{item.course}</h3>
                </div>
                <div className="space-y-4 grow text-sm">
                  <div>
                    <strong className="block text-white mb-1">Academic Requirement</strong>
                    <p className="text-white/70">{item.academic}</p>
                  </div>
                  <div>
                    <strong className="block text-white mb-1">Accepted Exams</strong>
                    <p className="text-white/70">{item.exam}</p>
                  </div>
                  <div>
                    <strong className="block text-white mb-1">Traits Expected</strong>
                    <p className="text-white/70">{item.skills}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMPORTANT DATES & 6. REQUIRED DOCUMENTS (Split Layout) */}
      <section className="py-24 px-6 relative bg-[#0F1224]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* Important Dates Timeline */}
          <div className="fade-up">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <CalendarDays className="text-[#C9A84C]" size={32} />
              Important Dates
            </h2>
            <div className="relative border-l-2 border-[#C9A84C]/20 pl-8 space-y-8 ml-4">
              {IMPORTANT_DATES.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#1B1F3B] border-2 border-[#C9A84C] rounded-full group-hover:scale-125 group-hover:bg-[#C9A84C] transition-all duration-300" />
                  <h3 className="text-lg font-semibold group-hover:text-[#C9A84C] transition-colors">{item.label}</h3>
                  <p className="text-[#C9A84C]/80 mt-1 font-medium bg-[#C9A84C]/10 inline-block px-3 py-1 rounded-md text-sm">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div className="fade-up">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="text-[#C9A84C]" size={32} />
              Required Documents
            </h2>
            <div className="glass rounded-2xl p-8 bg-[#1B1F3B]/50">
              <p className="text-white/60 mb-6 text-sm">Ensure you have scanned copies of the following documents before starting your application:</p>
              <ul className="space-y-4">
                {DOCUMENTS.map((doc, index) => (
                  <li key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                    <CheckSquare className="text-[#C9A84C] shrink-0 mt-0.5" size={20} />
                    <span className="text-white/80 group-hover:text-white transition-colors">{doc}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => openApply()}
                className="w-full cursor-pointer mt-8 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0F1224] py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Upload Documents Now
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FEES & SCHOLARSHIPS */}
      <section className="py-24 px-6 bg-[#1B1F3B]/30 border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fees & <span className="text-[#C9A84C]">Scholarships</span></h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We believe in rewarding merit and ensuring education is accessible. 
              Explore our transparent fee structure and varied financial aid options.
            </p>
          </div>

          {/* Tuition Range Banner */}
          <div className="glass bg-linear-to-r from-[#1B1F3B] to-[#1B1F3B]/80 rounded-2xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 fade-up card-glow">
            <div>
              <h3 className="text-2xl font-bold mb-2">Estimated Tuition Fees</h3>
              <p className="text-white/60 text-sm">Varies by program. Payable per semester.</p>
            </div>
            <div className="text-right flex items-center gap-4">
              <div className="text-4xl md:text-5xl font-black text-[#C9A84C] shimmer-gold">
                ₹1.5L - ₹4L
              </div>
              <span className="text-white/40 text-sm font-medium uppercase tracking-widest mt-2">/year</span>
            </div>
          </div>

          {/* Scholarship Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {SCHOLARSHIPS.map((scholarship, index) => (
              <div key={index} className="glass card-glow rounded-xl p-6 bg-[#0F1224]/80 flex flex-col border border-white/10 hover:border-yellow-500 hover:border-2 transition-all duration-300 hover:-translate-y-1" >
                <Award className="text-[#C9A84C] mb-4" size={36} />
                <h4 className="text-lg font-bold mb-3">{scholarship.name}</h4>
                <div className="space-y-2 mb-6 grow text-sm">
                  <p className="text-white/80"><span className="text-white/50 block text-xs uppercase mb-0.5">Eligibility</span> {scholarship.criteria}</p>
                  <p className="text-[#C9A84C] font-semibold"><span className="text-white/50 block text-xs uppercase mb-0.5 mt-2">Benefit</span> {scholarship.amount}</p>
                </div>
                <button 
                  onClick={() => openApply()}
                  className="w-full cursor-pointer bg-[#C9A84C]/10 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0F1224] py-2 rounded-lg font-medium transition-colors"
                >
                  Check Eligibility
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 px-6 relative flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0F1224]">
          <div className="absolute inset-0 bg-linear-to-t from-[#C9A84C]/10 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-3xl fade-up">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Your Future <span className="gradient-text">Starts Here</span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
            Take the first step towards a transformative career. Seats are limited for the upcoming batch—start your application today.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={() => openApply()}
              className="bg-[#C9A84C] text-[#0F1224] text-lg font-bold px-12 py-5 rounded-full hover:scale-105 transition-all duration-300 glow-gold shadow-2xl flex items-center gap-2"
            >
              Start Your Application <ArrowRight size={20} />
            </button>
            <p className="text-sm text-[#C9A84C] font-medium flex items-center gap-2 mt-2">
              <Clock size={16} /> Deadline approaching: April 30, 2025
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
