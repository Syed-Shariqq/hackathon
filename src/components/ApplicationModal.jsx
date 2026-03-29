import { useState, useEffect, useRef, useCallback } from 'react';
import { X, ArrowRight, ArrowLeft, FileText, CheckCircle } from 'lucide-react';

const inputClass =
  'w-full min-h-[48px] bg-[#0D1B2A] border border-white/15 text-white rounded-[10px] px-4 py-3 text-sm placeholder:text-white/35 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/35 transition-[border-color,box-shadow]';

const textareaClass =
  'w-full min-h-[120px] bg-[#0D1B2A] border border-white/15 text-white rounded-[10px] px-4 py-3 text-sm placeholder:text-white/35 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/35 resize-y';

export default function ApplicationModal({ course, onClose }) {
  const [step, setStep] = useState(1);
  const [successPhase, setSuccessPhase] = useState('idle'); // idle | draw | burst | done
  const [confettiSeed, setConfettiSeed] = useState(0);
  const refNumberRef = useRef('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    grade10: '',
    grade12: '',
    entranceScore: '',
    sop: '',
    resumeName: '',
  });

  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const sopWords = formData.sop.trim() ? formData.sop.trim().split(/\s+/).length : 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resumeName: e.target.files[0].name }));
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const progressPct = step === 1 ? 33.33 : step === 2 ? 66.66 : 100;
  const modalTitle = course ? `Apply for ${course}` : 'Apply to Horizon University';
  const firstName = (formData.fullName.trim().split(/\s+/)[0] || 'Student').replace(/,$/, '');

  const startSuccessSequence = useCallback(() => {
    refNumberRef.current = String(Math.floor(100000 + Math.random() * 900000));
    if (reduceMotion) {
      setSuccessPhase('done');
      return;
    }
    setSuccessPhase('draw');
  }, [reduceMotion]);

  useEffect(() => {
    if (successPhase !== 'draw') return undefined;
    const t = setTimeout(() => {
      setConfettiSeed((s) => s + 1);
      setSuccessPhase('burst');
    }, 800);
    return () => clearTimeout(t);
  }, [successPhase]);

  useEffect(() => {
    if (successPhase !== 'burst') return undefined;
    const t = setTimeout(() => setSuccessPhase('done'), 650);
    return () => clearTimeout(t);
  }, [successPhase]);

  const validateStep = (s) => {
    if (s === 1) {
      if (!formData.fullName || !formData.email || !formData.phone || !formData.city) {
        alert('Please fill in all personal details.');
        return false;
      }
    }
    if (s === 2) {
      if (!formData.grade10 || !formData.grade12 || !formData.sop || !formData.resumeName) {
        alert('Please complete academic details and upload your resume.');
        return false;
      }
      if (sopWords > 300) {
        alert('Statement of Purpose must be 300 words or less.');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep(step)) return;
    nextStep();
  };

  const handleSubmitClick = () => {
    if (step !== 3) return;
    if (sopWords > 300 || !formData.resumeName || !formData.fullName) {
      alert('Please review your application — some required fields are missing.');
      setStep(formData.fullName ? 2 : 1);
      return;
    }
    startSuccessSequence();
  };

  const downloadReceipt = () => {
    const refNumber = refNumberRef.current || String(Math.floor(100000 + Math.random() * 900000));
    const date = new Date().toLocaleString();
    const text = `
======================================
     HORIZON UNIVERSITY ADMISSIONS
======================================
Application Receipt
--------------------------------------
Reference Number : ${refNumber}
Date             : ${date}

APPLICANT DETAILS:
Name             : ${formData.fullName}
Email            : ${formData.email}
Phone            : ${formData.phone}
City             : ${formData.city}
Course Applied   : ${course || 'General Admission'}

Status           : Received

Our admissions team will contact you within 48 hours.
======================================
`.trim();

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Horizon_Application_${refNumber}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const inSuccess = successPhase !== 'idle';

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-[12px] animate-fade-in"
      onClick={handleBackdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-modal-title"
    >
      <div
        className="relative flex flex-col w-full max-w-[560px] max-h-[90vh] overflow-hidden rounded-[20px] bg-[#0D1B2A] border border-[#C9A84C]/30 shadow-2xl font-[Plus_Jakarta_Sans] animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {!inSuccess && (
          <>
            {/* Sticky header */}
            <div className="shrink-0 px-6 pt-5 pb-4 border-b border-white/10 bg-[#0D1B2A] z-10">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="min-w-0">
                  <h2 id="apply-modal-title" className="text-xl sm:text-2xl font-bold text-white font-['Playfair_Display',serif] leading-snug">
                    {modalTitle}
                  </h2>
                  <p className="text-[#C9A84C] text-sm font-semibold mt-1">
                    Step {step} of 3
                    {step === 1 ? ' — Personal Details' : step === 2 ? ' — Academic Details' : ' — Review & Submit'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#C9A84C] transition-[width] duration-500 ease-out"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            {/* Scrollable steps */}
            <form
              className="flex-1 min-h-0 overflow-y-auto px-6 py-5 [scrollbar-width:thin] [scrollbar-color:#C9A84C_#0D1B2A]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className={step === 1 ? 'block' : 'hidden'}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-white/55 text-xs font-semibold uppercase tracking-wider mb-1.5">Full Name *</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className={inputClass} placeholder="Full name" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-white/55 text-xs font-semibold uppercase tracking-wider mb-1.5">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-white/55 text-xs font-semibold uppercase tracking-wider mb-1.5">Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} placeholder="+91…" />
                  </div>
                  <div>
                    <label className="block text-white/55 text-xs font-semibold uppercase tracking-wider mb-1.5">City *</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required className={inputClass} placeholder="City" />
                  </div>
                </div>
              </div>

              <div className={step === 2 ? 'block' : 'hidden'}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/55 text-xs font-semibold uppercase tracking-wider mb-1.5">10th % *</label>
                    <input type="number" step="0.1" name="grade10" value={formData.grade10} onChange={handleChange} required className={inputClass} placeholder="85.5" />
                  </div>
                  <div>
                    <label className="block text-white/55 text-xs font-semibold uppercase tracking-wider mb-1.5">12th % *</label>
                    <input type="number" step="0.1" name="grade12" value={formData.grade12} onChange={handleChange} required className={inputClass} placeholder="90.2" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-white/55 text-xs font-semibold uppercase tracking-wider mb-1.5">Entrance score (optional)</label>
                  <input type="text" name="entranceScore" value={formData.entranceScore} onChange={handleChange} className={inputClass} placeholder="e.g. JEE Main 98%ile" />
                </div>
                <div className="mt-4">
                  <label className="block text-white/55 text-xs font-semibold uppercase tracking-wider mb-1.5">Statement of purpose *</label>
                  <textarea name="sop" value={formData.sop} onChange={handleChange} required rows={4} className={textareaClass} placeholder="Why this program?" />
                  <p className={`text-xs mt-1 ${sopWords > 300 ? 'text-red-400' : 'text-white/45'}`}>{sopWords}/300 words</p>
                </div>
                <div className="mt-4">
                  <label className="block text-white/55 text-xs font-semibold uppercase tracking-wider mb-1.5">Resume upload *</label>
                  <div className="relative">
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required id="resume-upload-modal" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-[1]" />
                    <div className={`min-h-[48px] flex items-center justify-center gap-2 rounded-[10px] border-2 border-dashed px-4 py-3 transition-colors ${formData.resumeName ? 'border-[#C9A84C] bg-[#C9A84C]/10' : 'border-white/25 bg-[#0D1B2A]'}`}>
                      <FileText size={18} className={formData.resumeName ? 'text-[#C9A84C]' : 'text-white/40'} />
                      <span className={`text-sm truncate ${formData.resumeName ? 'text-[#C9A84C] font-medium' : 'text-white/45'}`}>
                        {formData.resumeName || 'Click to upload (PDF / DOC)'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={step === 3 ? 'block' : 'hidden'}>
                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-5 space-y-4">
                  <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                    <span className="text-white/50 text-sm">Course</span>
                    <strong className="text-white text-sm text-right">{course || 'General Admission'}</strong>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/50 text-xs block mb-0.5">Name</span>
                      <strong className="text-white">{formData.fullName || '—'}</strong>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs block mb-0.5">Email</span>
                      <strong className="text-white truncate block">{formData.email || '—'}</strong>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs block mb-0.5">Phone</span>
                      <strong className="text-white">{formData.phone || '—'}</strong>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs block mb-0.5">City</span>
                      <strong className="text-white">{formData.city || '—'}</strong>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs block mb-0.5">10th / 12th %</span>
                      <strong className="text-white">{formData.grade10 || '—'} / {formData.grade12 || '—'}</strong>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs block mb-0.5">Entrance</span>
                      <strong className="text-white">{formData.entranceScore || '—'}</strong>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <span className="text-white/50 text-xs block mb-1">Statement (preview)</span>
                    <p className="text-white/80 text-xs leading-relaxed line-clamp-4">{formData.sop || '—'}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#C9A84C] text-sm">
                    <CheckCircle size={16} />
                    <span className="truncate">{formData.resumeName}</span>
                  </div>
                </div>
              </div>
            </form>

            {/* Sticky footer */}
            <div className="shrink-0 flex items-center justify-between gap-3 px-6 py-4 border-t border-white/10 bg-[#0D1B2A]">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 text-white/65 hover:text-white font-semibold py-2.5 px-3 rounded-full hover:bg-white/5 transition-colors"
                >
                  <ArrowLeft size={18} /> Back
                </button>
              ) : (
                <span />
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-[#C9A84C] text-[#0D1B2A] font-bold py-3 px-6 rounded-full hover:brightness-110 transition-all glow-gold"
                >
                  Next <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmitClick}
                  className="flex items-center gap-2 bg-[#C9A84C] text-[#0D1B2A] font-bold py-3 px-6 rounded-full hover:brightness-110 transition-all glow-gold ml-auto"
                >
                  Submit Application
                </button>
              )}
            </div>
          </>
        )}

        {inSuccess && (
          <div className="relative flex flex-col items-center justify-center min-h-[320px] px-6 py-10 overflow-hidden">
            {(successPhase === 'burst' || successPhase === 'done') && (
              <div className="confetti-layer pointer-events-none absolute inset-0 overflow-hidden" key={confettiSeed}>
                {Array.from({ length: 48 }).map((_, i) => (
                  <span
                    key={i}
                    className="confetti-bit"
                    style={{
                      left: `${(i * 7 + 13) % 100}%`,
                      '--cb': ['#C9A84C', '#E8C96A', '#ffffff', '#7eb8da'][i % 4],
                      '--cd': `${0.8 + (i % 5) * 0.15}s`,
                      '--cx': `${-40 + (i * 11) % 80}px`,
                    }}
                  />
                ))}
              </div>
            )}

            {(successPhase === 'draw' || successPhase === 'burst') && (
              <div className="relative z-[1] mb-6">
                <svg className="w-24 h-24 text-[#C9A84C]" viewBox="0 0 52 52" fill="none" aria-hidden>
                  <circle cx="26" cy="26" r="24" className="stroke-[#C9A84C]/25" strokeWidth="2" />
                  <path
                    className={reduceMotion ? '' : 'check-stroke-anim'}
                    d="M15 27l8 8 14-14"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}

            {successPhase === 'done' && (
              <div className="relative z-[1] text-center max-w-md">
                <div className="mb-5 flex justify-center">
                  <svg className="w-16 h-16 text-[#C9A84C]" viewBox="0 0 52 52" fill="none" aria-hidden>
                    <circle cx="26" cy="26" r="24" className="stroke-[#C9A84C]/35" strokeWidth="2" />
                    <path d="M15 27l8 8 14-14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Playfair_Display',serif] mb-2">
                  🎓 Application Received, {firstName}!
                </h3>
                <p className="text-white/75 text-sm mb-3">Our admissions team will contact you within 48 hours.</p>
                <p className="text-[#C9A84C] font-semibold text-lg mb-8">{course || 'General Admission'}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={downloadReceipt}
                    className="w-full sm:w-auto bg-[#0D1B2A] border-2 border-[#C9A84C] text-[#C9A84C] font-bold px-6 py-3 rounded-full hover:bg-[#C9A84C]/15 transition-colors"
                  >
                    Download Confirmation
                  </button>
                  <button type="button" onClick={onClose} className="text-white/55 hover:text-white font-medium py-2 px-4">
                    Close
                  </button>
                </div>
              </div>
            )}

            {successPhase !== 'done' && (
              <button type="button" onClick={onClose} className="absolute top-4 right-4 z-[2] w-10 h-10 rounded-full bg-white/10 text-white/70 hover:text-white flex items-center justify-center" aria-label="Close">
                <X size={20} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
