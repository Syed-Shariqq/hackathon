import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen, BarChart2, FlaskConical, BookText, Scale, Microscope,
  Zap, Building2, Wallet, Database,
  Plus, Check, Star, Clock, Users, X, TrendingUp, DollarSign, Award, GitCompare, Trash2,
} from 'lucide-react';
import { PROGRAM_REGISTRY, PROGRAM_BACK_DETAILS } from './ComparePrograms';
import { Link } from 'react-router-dom'

/* ─── Static data ─── */
const categories = ['All', 'Engineering', 'Management', 'Sciences', 'Arts', 'Law'];

const HIRING_LOGOS = [
  { name: 'Google', domain: 'google.com' },
  { name: 'Microsoft', domain: 'microsoft.com' },
  { name: 'Amazon', domain: 'amazon.com' },
  { name: 'Deloitte', domain: 'deloitte.com' },
  { name: 'Goldman Sachs', domain: 'goldmansachs.com' },
  { name: 'McKinsey', domain: 'mckinsey.com' },
  { name: 'Infosys', domain: 'infosys.com' },
  { name: 'Flipkart', domain: 'flipkart.com' },
  { name: 'HDFC Bank', domain: 'hdfcbank.com' },
  { name: 'Biocon', domain: 'biocon.com' },
  { name: 'Times Group', domain: 'timesgroup.com' },
  { name: 'ISRO', isro: true },
];

function MarqueeLogoCard({ name, domain, isro }) {
  const [imgHidden, setImgHidden] = useState(false);

  return (
    <div className="
      flex flex-col items-center justify-center
      w-[140px] h-[90px]
      rounded-2xl
      border border-white/10
      bg-linear-to-b from-white/[0.07] to-white/3
      backdrop-blur-md
      transition-all duration-280ms ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:-translate-y-1
      group-hover:scale-[1.04]
      group-hover:border-[#C9A84C]/60
      group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.08),0_0_20px_rgba(201,168,76,0.15)]
      group-hover:bg-linear-to-b group-hover:from-[#C9A84C]/0.08 group-hover:to-[#C9A84C]/0.02
    ">

      {/* logo */}
      <div className="h-12 flex items-center justify-center w-full mb-1 transition-transform duration-280ms ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
        {isro ? (
          <span className="text-xs font-bold text-white bg-[#FF6B00] px-2 py-1 rounded-md">
            ISRO
          </span>
        ) : !imgHidden ? (
          <img
            src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
            alt={name}
            className="max-h-[48px] max-w-[80px] object-contain"
            onError={() => setImgHidden(true)}
          />
        ) : (
          <span className="text-sm font-black text-[#C9A84C]">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      {/* name */}
      <span className="text-xs text-black/70 text-center font-medium transition-colors duration-280ms ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#1B1F3B] group-hover:font-semibold">
        {name}
      </span>

    </div>
  );
}

function HiringGrid() {
  const track = [...HIRING_LOGOS, ...HIRING_LOGOS];

  return (
    <div className="relative py-12 overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">

      <div className="flex flex-col gap-6 w-full relative z-10">
        {/* Top row: Left to Right */}
        <div
          className="flex w-max gap-5 pr-5 hover:[animation-play-state:paused]"
          style={{ animation: 'scroll-lr 80s linear infinite' }}
        >
          <style>{`
            @keyframes scroll-lr {
              from { transform: translateX(-50%); }
              to { transform: translateX(0%); }
            }
          `}</style>
          {track.map((c, i) => (
            <div key={`${c.name}-t-${i}`} className="group shrink-0">
              <MarqueeLogoCard {...c} />
            </div>
          ))}
        </div>

        {/* Bottom row: Right to Left */}
        <div
          className="flex w-max gap-5 pr-5 hover:[animation-play-state:paused]"
          style={{ animation: 'scroll-rl 90s linear infinite' }}
        >
          <style>{`
            @keyframes scroll-rl {
              from { transform: translateX(0%); }
              to { transform: translateX(-50%); }
            }
          `}</style>
          {[...track].reverse().map((c, i) => (
            <div key={`${c.name}-b-${i}`} className="group shrink-0">
              <MarqueeLogoCard {...c} />
            </div>
          ))}
        </div>
      </div>

      {/* soft bottom gradient blur for depth */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-linear-to-t from-[#F9F9FB] to-transparent z-20" />
    </div>
  );
}

function BackCompanyRow({ name, domain, blurb }) {
  const [fail, setFail] = useState(false);
  const isro = !domain;
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className="flex gap-2.5 items-start">
      <div className="w-8 h-8 shrink-0 rounded-lg overflow-hidden flex items-center justify-center bg-[#C9A84C]/10 border border-[#C9A84C]/25">
        {domain && !fail ? (
          <img
            src={`https://logo.clearbit.com/${domain}`}
            alt=""
            className="w-7 h-7 object-contain"
            onError={() => setFail(true)}
          />
        ) : (
          <span
            className={`text-[8px] font-black w-full h-full flex items-center justify-center ${isro ? 'bg-[#FF6B00] text-white' : 'text-[#C9A84C]'
              }`}
          >
            {initials}
          </span>
        )}
      </div>
      <div className="min-w-0">
        <p className="text-white font-bold text-xs leading-tight">{name}</p>
        <p className="text-white/45 text-[11px] leading-snug">{blurb}</p>
      </div>
    </div>
  );
}

const COMPARE_ROWS = [
  { label: 'Fees / year', key: 'fees', icon: DollarSign },
  { label: 'Avg. Salary', key: 'avgSalary', icon: TrendingUp },
  { label: 'Duration', key: 'duration', icon: Clock },
  { label: 'Seats', key: 'seats', icon: Users },
  { label: 'Level', key: 'level', icon: Award },
  { label: 'Outcomes', key: 'outcomes', icon: Award },
  { label: 'Accreditation', key: 'accreditation', icon: Award },
  { label: 'Highlight', key: 'highlight', icon: Award },
];

const programs = [
  {
    icon: BookOpen,
    name: 'B.Tech Computer Science',
    duration: '4 Years',
    description: 'Master algorithms, AI, and systems design',
    category: 'Engineering',
    rating: 4.9,
    departmentSlug: 'computer-science',
  },
  {
    icon: BarChart2,
    name: 'MBA Business Analytics',
    duration: '2 Years',
    description: 'Data-driven leadership for modern business',
    category: 'Management',
    rating: 4.8,
    departmentSlug: 'business-analytics',
  },
  {
    icon: FlaskConical,
    name: 'B.Sc Biotechnology',
    duration: '3 Years',
    description: 'Explore life sciences and biomedical research',
    category: 'Sciences',
    rating: 4.6,
    departmentSlug: 'biotechnology',
  },
  {
    icon: BookText,
    name: 'BA English Literature',
    duration: '3 Years',
    description: 'Develop critical thinking through great writing',
    category: 'Arts',
    rating: 4.4,
    departmentSlug: 'english-literature',
  },
  {
    icon: Scale,
    name: 'LLB Corporate Law',
    duration: '5 Years',
    description: 'Shape policy and lead legal innovation',
    category: 'Law',
    rating: 4.7,
    departmentSlug: 'corporate-law',
  },
  {
    icon: Microscope,
    name: 'Ph.D Research Programs',
    duration: '3-5 Years',
    description: 'Push boundaries with funded doctoral research',
    category: 'Sciences',
    rating: 4.9,
    departmentSlug: 'research',
  },
  {
    icon: Zap,
    name: 'B.Tech Electrical Engineering',
    duration: '4 Years',
    description: 'Power systems, control, and renewable integration engineering',
    category: 'Engineering',
    rating: 4.5,
    departmentSlug: 'electrical-engineering',
  },
  {
    icon: Building2,
    name: 'B.Tech Civil Engineering',
    duration: '4 Years',
    description: 'Design resilient infrastructure with modern construction methods',
    category: 'Engineering',
    rating: 4.4,
    departmentSlug: 'civil-engineering',
  },
  {
    icon: Wallet,
    name: 'MBA Finance',
    duration: '2 Years',
    description: 'Investment strategy, risk management, and financial decision-making',
    category: 'Management',
    rating: 4.7,
    departmentSlug: 'finance',
  },
  {
    icon: Database,
    name: 'M.Sc Data Science',
    duration: '2 Years',
    description: 'Build scalable pipelines for insights, ML, and deployment at scale',
    category: 'Sciences',
    rating: 4.6,
    departmentSlug: 'data-science',
  },
];

/* ─── Compare Tray (bottom bar) ─── */
function CompareTray({ selected, onRemove, onClear, onOpen }) {
  if (selected.length === 0) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-[#1B1F3B] border-t-2 border-[#C9A84C] shadow-2xl px-5 py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Left: pills */}
          <div className="flex items-center gap-3 flex-wrap flex-1 min-w-0">
            <div className="flex items-center gap-1.5 text-[#C9A84C] shrink-0">
              <GitCompare size={15} />
              <span className="text-white font-bold text-sm">Compare</span>
              <span className="bg-[#C9A84C] text-[#1B1F3B] text-xs font-black px-2 py-0.5 rounded-full">
                {selected.length}/3
              </span>
            </div>
            {selected.map((prog) => {
              const Icon = prog.icon;
              return (
                <span
                  key={prog.name}
                  className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs px-3 py-1.5 rounded-full"
                >
                  <Icon size={11} className="text-[#C9A84C] shrink-0" />
                  <span className="truncate max-w-[120px]">{prog.name}</span>
                  <button
                    onClick={() => onRemove(prog.name)}
                    className="text-white/40 hover:text-red-400 transition-colors ml-0.5"
                  >
                    <X size={11} />
                  </button>
                </span>
              );
            })}
            {selected.length < 3 && (
              <span className="text-white/30 text-xs border border-dashed border-white/20 px-3 py-1.5 rounded-full">
                + Add {3 - selected.length} more
              </span>
            )}
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onClear}
              className="text-white/40 hover:text-red-400 transition-colors"
              title="Clear all"
            >
              <Trash2 size={15} />
            </button>
            <button
              onClick={onOpen}
              disabled={selected.length < 2}
              className="bg-[#C9A84C] text-[#1B1F3B] font-bold text-sm px-5 py-2.5 rounded-xl hover:scale-105 transition-transform duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 glow-gold"
            >
              {selected.length < 2 ? 'Select 1 more →' : 'Compare Side by Side →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Comparison Modal ─── */
function CompareModal({ selected, onClose, onApplyProgram }) {
  const programs = selected.map((prog) => ({
    ...prog,
    ...(PROGRAM_REGISTRY[prog.name] || {}),
  }));

  /* close on backdrop click */
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm animate-fade-in overflow-y-auto py-8 px-4"
      onClick={handleBackdrop}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#1B1F3B] px-8 py-6 flex items-center justify-between">
          <div>
            <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-1">
              Program Comparison
            </p>
            <h2 className="text-white text-xl font-bold">
              {programs.map((p) => p.name.split(' ').slice(0, 2).join(' ')).join(' vs ')}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F9F9FB]">
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider w-36">
                  Criteria
                </th>
                {programs.map((p) => {
                  const Icon = p.icon;
                  const data = PROGRAM_REGISTRY[p.name];
                  return (
                    <th key={p.name} className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1.5 mb-1">
                        <Icon size={14} className="text-[#C9A84C]" />
                        <span className="font-bold text-[#1B1F3B] text-sm">{p.name}</span>
                      </div>
                      {data?.badge && (
                        <span className="text-xs text-[#C9A84C] font-semibold">{data.badge}</span>
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row, ri) => {
                const Icon = row.icon;
                return (
                  <tr key={row.key} className={ri % 2 === 0 ? 'bg-white' : 'bg-[#F9F9FB]/60'}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Icon size={13} className="text-[#C9A84C]" />
                        <span className="text-xs font-semibold">{row.label}</span>
                      </div>
                    </td>
                    {programs.map((p) => {
                      const data = PROGRAM_REGISTRY[p.name] || {};
                      const val = data[row.key];
                      return (
                        <td key={p.name} className="px-6 py-4 text-center">
                          <span className="font-semibold text-[#1B1F3B] text-sm">
                            {row.key === 'seats' && val ? `${val} seats` : (val || '—')}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
              {/* Top Recruiters */}
              <tr className="bg-white">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Award size={13} className="text-[#C9A84C]" />
                    <span className="text-xs font-semibold">Top Recruiters</span>
                  </div>
                </td>
                {programs.map((p) => {
                  const data = PROGRAM_REGISTRY[p.name] || {};
                  return (
                    <td key={p.name} className="px-6 py-4">
                      <div className="flex flex-wrap gap-1.5 justify-center">
                        {(data.topRecruiters || []).map((r) => (
                          <span
                            key={r}
                            className="text-xs bg-[#C9A84C]/10 text-[#C9A84C] px-2 py-0.5 rounded-full font-medium"
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA row */}
        <div
          className="grid gap-px bg-gray-100"
          style={{ gridTemplateColumns: `repeat(${programs.length}, 1fr)` }}
        >
          {programs.map((p) => (
            <div key={p.name} className="bg-white px-6 py-5 text-center">
              <p className="text-xs text-gray-400 mb-3 font-medium">{p.name}</p>
              <button
                type="button"
                onClick={() => {
                  onApplyProgram?.(p.name);
                  onClose();
                }}
                className="inline-block bg-[#1B1F3B] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#C9A84C] hover:text-[#1B1F3B] transition-all duration-200 cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Program Card (3D flip + tilt) ─── */
function ProgramCard({
  prog,
  isSelected,
  onCompare,
  canAdd,
  onApply,
  enableDepartmentNav = false,
  onNavigateDepartment,
}) {
  const [hovered, setHovered] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const wrapRef = useRef(null);
  const Icon = prog.icon;
  const data = PROGRAM_REGISTRY[prog.name];
  const back = PROGRAM_BACK_DETAILS[prog.name];
  const noHoverTilt = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

  const setFlippedAndResetTilt = (next) => {
    setTilt({ rx: 0, ry: 0 });
    setFlipped(next);
  };

  const handleMove = (e) => {
    if (flipped || noHoverTilt || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const ry = ((x / r.width) - 0.5) * 12;
    const rx = -((y / r.height) - 0.5) * 12;
    setTilt({ rx, ry });
  };

  const handleLeave = () => {
    if (flipped || noHoverTilt) return;
    setTilt({ rx: 0, ry: 0 });
  };

  /* Flip uses Y only; tilt applies only when not flipped (avoids transform fight). One transition timing for smooth return. */
  const innerTransform = flipped
    ? 'rotateY(180deg)'
    : `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`;

  const pct = back?.placementPct ?? 90;

  return (
    <div
      className={`rounded-2xl ${isSelected ? 'ring-2 ring-[#C9A84C]' : ''}`}
      onClick={(e) => {
        if (!enableDepartmentNav) return;
        if (!prog?.departmentSlug) return;
        // Avoid hijacking button/link interactions inside the card.
        const t = e.target;
        const closest = t && typeof t.closest === 'function' ? t.closest('button, a, input, textarea, select, label') : null;
        if (closest) return;
        onNavigateDepartment?.(prog.departmentSlug);
      }}
    >
      <div
        ref={wrapRef}
        className="relative w-full rounded-2xl perspective-distant"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div
          className="relative w-full preserve-3d transition-transform duration-300 ease-out"
          style={{ transform: innerTransform }}
        >
          {/* Front — flow height; back absolute inset-0 matches */}
          <div
            className={`backface-hidden relative w-full bg-white rounded-2xl shadow-sm overflow-hidden border ${data?.badge ? 'border-t-4 border-[#C9A84C]' : 'border-gray-100'
              }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {data?.badge && (
              <div className="absolute top-3 right-3 bg-[#1B1F3B] text-[#C9A84C] text-xs font-bold px-2.5 py-1 rounded-full z-10">
                {data.badge}
              </div>
            )}

            <div className="p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center">
                  <Icon size={22} className="text-[#C9A84C]" />
                </div>

                <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                  <Star size={11} fill="currentColor" />
                  <span>{prog.rating}</span>
                </div>
              </div>

              <h3 className="font-bold text-[#1B1F3B] text-base mb-1">{prog.name}</h3>
              <p className="text-xs text-gray-400 mb-2 flex items-center gap-1.5">
                <Clock size={11} />
                {prog.duration}
                {data && (
                  <>
                    <span className="mx-0.5">·</span>
                    <Users size={11} />
                    {data.seats} seats
                  </>
                )}
              </p>
              <p className="text-sm text-gray-500 mb-3 leading-relaxed">{prog.description}</p>

              {data && (
                <div className="flex gap-2 mb-3 p-3 bg-[#F9F9FB] rounded-xl">
                  <div className="text-center flex-1">
                    <p className="text-[#C9A84C] font-black text-sm leading-tight">{data.avgSalary}</p>
                    <p className="text-gray-400 text-xs mt-0.5">Avg. Salary</p>
                  </div>
                  <div className="w-px bg-gray-200" />
                  <div className="text-center flex-1">
                    <p className="text-[#C9A84C] font-black text-sm leading-tight">{data.outcomes}</p>
                    <p className="text-gray-400 text-xs mt-0.5">Outcomes</p>
                  </div>
                  <div className="w-px bg-gray-200" />
                  <div className="text-center flex-1">
                    <p className="text-[#C9A84C] font-black text-sm leading-tight">{data.fees}</p>
                    <p className="text-gray-400 text-xs mt-0.5">Fees/yr</p>
                  </div>
                </div>
              )}

              <div
                className={`overflow-hidden transition-all duration-300 ${hovered && data?.topRecruiters ? 'max-h-24 opacity-100 mb-2' : 'max-h-0 opacity-0 mb-0'}`}
              >
                <p className="text-xs text-gray-400 mb-1.5 font-medium">Top Recruiters</p>
                <div className="flex flex-wrap gap-1.5">
                  {data?.topRecruiters?.map((r) => (
                    <span key={r} className="text-xs bg-[#1B1F3B]/5 text-[#1B1F3B] px-2.5 py-1 rounded-full font-medium">
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto border-t border-gray-100 pt-4 space-y-3">
                <button
                  type="button"
                  onClick={() => setFlippedAndResetTilt(true)}
                  className="block border-2 w-full bg-gray-100 border-gray-400 px-4 py-2 rounded-full text-center text-xs font-medium text-[#1B1F3B]/90 hover:text-blue-950 hover:underline decoration-[#C9A84C]/40 underline-offset-2 transition-colors"
                >
                  Flip for more +
                </button>
                <div className="flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onApply?.(prog.name)}
                    className="text-[#C9A84C] font-semibold text-sm hover:underline underline-offset-4 shrink-0"
                  >
                    Apply Now →
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); onCompare(prog); }}
                    disabled={!isSelected && !canAdd}
                    className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200 shrink-0
                    ${isSelected
                        ? 'bg-[#C9A84C] text-[#1B1F3B]'
                        : canAdd
                          ? 'border border-gray-300 text-gray-500 hover:border-[#C9A84C] hover:text-[#C9A84C] cursor-pointer'
                          : 'border border-gray-200 text-gray-300 cursor-not-allowed'
                      }`}
                  >
                    {isSelected ? <><Check size={11} /> Added</> : <><Plus size={11} /> Compare</>}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Back — same box as front */}
          <div className={`backface-hidden absolute inset-0 w-full rounded-2xl bg-[#0D1B2A] border border-[rgba(201,168,76,0.4)] flex flex-col p-5 transform-[rotateY(180deg)]`}>
            <h4 className="font-['Playfair_Display',serif] text-[#C9A84C] text-lg font-bold mb-2">Why Choose This?</h4>
            {back && (
              <>
                <p className="text-white/80 text-xs leading-relaxed mb-1">{back.pitch[0]}</p>
                <p className="text-white/80 text-xs leading-relaxed mb-3">{back.pitch[1]}</p>

                <div className="flex gap-3 items-center mb-3">
                  <div
                    className="relative w-20 h-20 rounded-full shrink-0 flex items-center justify-center"
                    style={{
                      background: `conic-gradient(#C9A84C ${pct}%, rgba(255,255,255,0.12) 0)`,
                    }}
                  >
                    <div className="absolute inset-1.5 rounded-full bg-[#0D1B2A] flex items-center justify-center">
                      <span className="text-[#C9A84C] text-xs font-black">{pct}%</span>
                    </div>
                  </div>
                  <p className="text-white/50 text-[11px] leading-snug">Placement outcomes for this cohort (representative).</p>
                </div>

                <div className="space-y-2 mb-3 flex-1 min-h-0 overflow-y-auto [scrollbar-width:thin]">
                  {back.companies.map((c) => (
                    <BackCompanyRow key={c.name} name={c.name} domain={c.domain} blurb={c.blurb} />
                  ))}
                </div>
              </>
            )}

            <button
              type="button"
              onClick={() => onApply?.(prog.name)}
              className="w-full bg-[#C9A84C] text-[#0D1B2A] font-bold text-sm py-2.5 rounded-xl hover:brightness-110 transition-all mb-2"
            >
              Apply Now →
            </button>
            <button
              type="button"
              onClick={() => setFlippedAndResetTilt(false)}
              className="text-white/45 text-xs hover:text-white text-left w-fit"
            >
              ← Flip Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function Programs({
  onApply,
  showAllPrograms = false,
  enableDepartmentNav = false,
  isAcademicsPage = false,
}) {
  const [activeTab, setActiveTab] = useState('All');
  const [compareList, setCompareList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.fade-up');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  const programsToShow = showAllPrograms ? programs : programs.slice(0, 6);
  const filtered = activeTab === 'All' ? programsToShow : programsToShow.filter((p) => p.category === activeTab);

  const onNavigateDepartment = (slug) => {
    if (!slug) return;
    navigate(`/academics/${slug}`);
  };

  const toggleCompare = (prog) => {
    const exists = compareList.find((p) => p.name === prog.name);
    if (exists) {
      setCompareList((prev) => prev.filter((p) => p.name !== prog.name));
    } else if (compareList.length < 3) {
      setCompareList((prev) => [...prev, prog]);
    }
  };

  const removeFromCompare = (name) => setCompareList((prev) => prev.filter((p) => p.name !== name));
  const clearCompare = () => setCompareList([]);

  return (
    <>
      <section id="programs" ref={ref} className="bg-[#F9F9FB] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="fade-up text-center mb-10">
            <p className="text-[#C9A84C] text-xs tracking-widest font-bold uppercase mb-3">ACADEMICS</p>
            <h2 className="text-[#1B1F3B] text-4xl font-bold mb-3">Explore Our Programs</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From undergraduate to doctoral — hover any card for details,
              then click <strong>Compare</strong> to see programs side by side
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="fade-up flex gap-3 justify-center flex-wrap mb-10" style={{ transitionDelay: '0.08s' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${activeTab === cat
                  ? 'bg-[#1B1F3B] text-white shadow-md'
                  : 'border border-gray-200 text-gray-600 bg-white hover:border-[#C9A84C] hover:text-[#C9A84C]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Compare hint */}
          {compareList.length === 0 && (
            <div className="fade-up text-center mb-8" style={{ transitionDelay: '0.1s' }}>
              <p className="text-xs text-gray-400 bg-white border border-dashed border-gray-200 rounded-full inline-flex items-center gap-1.5 px-4 py-2">
                <Plus size={11} /> Click <strong className="mx-0.5">"Compare"</strong> on any card to compare up to 3 programs side by side
              </p>
            </div>
          )}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {filtered.map((prog, i) => (
              <div key={prog.name} className="fade-up" style={{ transitionDelay: `${0.05 + i * 0.06}s` }}>
                <ProgramCard
                  prog={prog}
                  isSelected={!!compareList.find((p) => p.name === prog.name)}
                  onCompare={toggleCompare}
                  canAdd={compareList.length < 3}
                  onApply={onApply}
                  enableDepartmentNav={enableDepartmentNav}
                  onNavigateDepartment={onNavigateDepartment}
                />
              </div>
            ))}
          </div>

          {!isAcademicsPage && (
            <Link to="/academics#programs">
              <div className='mt-6 mb-8 w-full text-center fade-up'>
                <button className='px-4 py-2 hover:scale-105 transition-all duration-300 text-sm md:text-md md:px-6 md:py-3 cursor-pointer bg-[#1B1F3B] text-white rounded-full shadow-md font-medium'>
                  View More +
                </button>
              </div>
            </Link>
          )}

          {/* Why Our Academics Stand Out (Academics Page Only) */}
          {isAcademicsPage && (
            <div className="mt-16 fade-up">
              <h3 className="text-3xl font-bold text-[#1B1F3B] mb-8 text-center">Why Our Academics Stand Out</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { num: '01', title: 'Industry-Aligned Curriculum', desc: 'Designed with real-world industry needs' },
                  { num: '02', title: 'Experienced Faculty', desc: 'Learn from experts with academic + industry background' },
                  { num: '03', title: 'Research-Driven Learning', desc: 'Strong focus on innovation and practical exploration' },
                  { num: '04', title: 'Strong Placement Ecosystem', desc: 'Top recruiters and career support system' }
                ].map((item, idx) => (
                  <div key={idx} className="relative bg-white rounded-2xl p-6 border hover:-translate-y-1 border-gray-100 shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
                    {/* Faint number in background */}
                    <div className="absolute top-[-10px] left-[-5px] text-[#C9A84C]/15 font-black text-6xl select-none group-hover:scale-110 group-hover:text-[#C9A84C]/20 transition-transform duration-500">
                      {item.num}
                    </div>
                    <div className="relative z-10 pt-8">
                      <h4 className="font-bold text-[#1B1F3B] text-lg mb-2 leading-tight">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Horizontal Banner (Full Width Breakout) */}
          {isAcademicsPage && (
            <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#1B1F3B] py-3.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] my-16 fade-up">
              <p className="text-[#C9A84C] font-semibold text-sm tracking-wide text-center px-4">
                Next Intake: July 2026 &middot; Applications closing May 31
              </p>
            </div>
          )}

          {/* Hiring Partners — marquee + Clearbit logos */}
          <div className="fade-up" style={{ transitionDelay: '0.35s' }}>
            {isAcademicsPage ? (
              <h3 className="text-center text-3xl font-bold text-[#1B1F3B] mb-8">
                Our Graduates Work At
              </h3>
            ) : (
              <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-5">
                500+ Hiring Partners include
              </p>
            )}
            <HiringGrid />
          </div>
        </div>
      </section>

      {/* Floating compare tray */}
      <CompareTray
        selected={compareList}
        onRemove={removeFromCompare}
        onClear={clearCompare}
        onOpen={() => setModalOpen(true)}
      />

      {/* Comparison modal */}
      {modalOpen && (
        <CompareModal
          selected={compareList}
          onClose={() => setModalOpen(false)}
          onApplyProgram={(name) => onApply?.(name)}
        />
      )}
    </>
  );
}