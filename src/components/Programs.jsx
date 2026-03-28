import { useState, useEffect, useRef } from 'react';
import {
  BookOpen, BarChart2, FlaskConical, BookText, Scale, Microscope,
  Plus, Check, Star, Clock, Users, X, TrendingUp, DollarSign, Award, GitCompare, Trash2,
} from 'lucide-react';
import { PROGRAM_REGISTRY } from './ComparePrograms';

/* ─── Static data ─── */
const categories = ['All', 'Engineering', 'Management', 'Sciences', 'Arts', 'Law'];

const HIRING_PARTNERS = [
  'Google', 'Microsoft', 'Amazon', 'Deloitte', 'Goldman Sachs',
  'ISRO', 'McKinsey', 'Infosys', 'Flipkart', 'HDFC', 'Biocon', 'Times Group',
];

const COMPARE_ROWS = [
  { label: 'Fees / year',   key: 'fees',           icon: DollarSign },
  { label: 'Avg. Salary',   key: 'avgSalary',      icon: TrendingUp },
  { label: 'Duration',      key: 'duration',       icon: Clock },
  { label: 'Seats',         key: 'seats',          icon: Users },
  { label: 'Level',         key: 'level',          icon: Award },
  { label: 'Outcomes',      key: 'outcomes',       icon: Award },
  { label: 'Accreditation', key: 'accreditation',  icon: Award },
  { label: 'Highlight',     key: 'highlight',      icon: Award },
];

const programs = [
  { icon: BookOpen,    name: 'B.Tech Computer Science', duration: '4 Years', description: 'Master algorithms, AI, and systems design',          category: 'Engineering', rating: 4.9 },
  { icon: BarChart2,   name: 'MBA Business Analytics',  duration: '2 Years', description: 'Data-driven leadership for modern business',         category: 'Management',  rating: 4.8 },
  { icon: FlaskConical,name: 'B.Sc Biotechnology',      duration: '3 Years', description: 'Explore life sciences and biomedical research',      category: 'Sciences',    rating: 4.6 },
  { icon: BookText,    name: 'BA English Literature',   duration: '3 Years', description: 'Develop critical thinking through great writing',    category: 'Arts',        rating: 4.4 },
  { icon: Scale,       name: 'LLB Corporate Law',       duration: '5 Years', description: 'Shape policy and lead legal innovation',             category: 'Law',         rating: 4.7 },
  { icon: Microscope,  name: 'Ph.D Research Programs',  duration: '3-5 Years', description: 'Push boundaries with funded doctoral research', category: 'Sciences',    rating: 4.9 },
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
function CompareModal({ selected, onClose }) {
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
              <a
                href="#cta"
                onClick={onClose}
                className="inline-block bg-[#1B1F3B] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#C9A84C] hover:text-[#1B1F3B] transition-all duration-200"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Program Card ─── */
function ProgramCard({ prog, isSelected, onCompare, canAdd }) {
  const [hovered, setHovered] = useState(false);
  const Icon = prog.icon;
  const data = PROGRAM_REGISTRY[prog.name];

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 card-glow
        ${isSelected ? 'ring-2 ring-[#C9A84C] shadow-[0_0_0_6px_rgba(201,168,76,0.10)]' : ''}
        ${data?.badge ? 'border-t-4 border-[#C9A84C]' : 'border border-gray-100'}
        hover:-translate-y-1.5 hover:shadow-xl`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      {data?.badge && (
        <div className="absolute top-3 right-3 bg-[#1B1F3B] text-[#C9A84C] text-xs font-bold px-2.5 py-1 rounded-full z-10">
          {data.badge}
        </div>
      )}

      <div className="p-6">
        {/* Icon + Rating */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center">
            <Icon size={22} className="text-[#C9A84C]" />
          </div>
          <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
            <Star size={11} fill="currentColor" />
            {prog.rating}
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
        <p className="text-sm text-gray-500 mb-4 leading-relaxed">{prog.description}</p>

        {/* Salary / Outcomes / Fees mini-bar */}
        {data && (
          <div className="flex gap-2 mb-4 p-3 bg-[#F9F9FB] rounded-xl">
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

        {/* Hover: top recruiters */}
        <div
          className={`overflow-hidden transition-all duration-300 ${hovered && data?.topRecruiters ? 'max-h-24 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'}`}
        >
          <p className="text-xs text-gray-400 mb-2 font-medium">Top Recruiters</p>
          <div className="flex flex-wrap gap-1.5">
            {data?.topRecruiters?.map((r) => (
              <span key={r} className="text-xs bg-[#1B1F3B]/5 text-[#1B1F3B] px-2.5 py-1 rounded-full font-medium">
                {r}
              </span>
            ))}
          </div>
        </div>

        {/* Footer: Apply + Compare */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <a href="#cta" className="text-[#C9A84C] font-semibold text-sm hover:underline underline-offset-4">
            Apply Now →
          </a>
          <button
            onClick={(e) => { e.stopPropagation(); onCompare(prog); }}
            disabled={!isSelected && !canAdd}
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200
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
  );
}

/* ─── Main Component ─── */
export default function Programs() {
  const [activeTab, setActiveTab] = useState('All');
  const [compareList, setCompareList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.fade-up');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  const filtered = activeTab === 'All' ? programs : programs.filter((p) => p.category === activeTab);

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
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === cat
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {filtered.map((prog, i) => (
              <div key={prog.name} className="fade-up" style={{ transitionDelay: `${0.05 + i * 0.06}s` }}>
                <ProgramCard
                  prog={prog}
                  isSelected={!!compareList.find((p) => p.name === prog.name)}
                  onCompare={toggleCompare}
                  canAdd={compareList.length < 3}
                />
              </div>
            ))}
          </div>

          {/* Hiring Partners Strip */}
          <div className="fade-up" style={{ transitionDelay: '0.35s' }}>
            <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-5">
              500+ Hiring Partners include
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {HIRING_PARTNERS.map((company) => (
                <span
                  key={company}
                  className="text-sm text-gray-600 font-semibold bg-white border border-gray-200 px-4 py-2 rounded-full hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-200"
                >
                  {company}
                </span>
              ))}
            </div>
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
        />
      )}
    </>
  );
}