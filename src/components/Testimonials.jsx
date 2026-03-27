import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, TrendingUp, Users, Award } from 'lucide-react';

const PLACEMENT_STATS = [
  { label: 'Placement Rate', value: '95%', icon: TrendingUp },
  { label: 'Avg. Package', value: '₹18 LPA', icon: Award },
  { label: 'Hiring Partners', value: '500+', icon: Users },
  { label: 'Highest Package', value: '₹54 LPA', icon: Star },
];

const testimonials = [
  {
    quote: "Horizon didn't just give me a degree — it gave me direction, a network, and a ₹24LPA offer from Google before I even graduated.",
    initials: 'PS',
    name: 'Priya Sharma',
    role: 'B.Tech CSE, 2022',
    company: 'Software Engineer @ Google',
    stars: 5,
    color: 'bg-blue-500',
  },
  {
    quote: 'The research culture here is unmatched. My PhD opened doors I never imagined — now I am running a lab at Stanford with DST funding.',
    initials: 'AM',
    name: 'Dr. Arjun Mehta',
    role: 'Ph.D Biotechnology',
    company: 'Research Lead @ Stanford Labs',
    stars: 5,
    color: 'bg-emerald-600',
  },
  {
    quote: "From literally zero coding background to ₹22LPA at Microsoft in 2 years — Horizon's MBA placement cell is in a different league.",
    initials: 'RV',
    name: 'Rohan Verma',
    role: 'MBA Business Analytics, 2023',
    company: 'Product Manager @ Microsoft',
    stars: 5,
    color: 'bg-orange-500',
  },
  {
    quote: "As a first-gen student from a small town, Horizon's scholarship and mentoring program completely changed my trajectory.",
    initials: 'NK',
    name: 'Neha Kulkarni',
    role: 'LLB Corporate Law, 2023',
    company: 'Associate @ Khaitan & Co',
    stars: 5,
    color: 'bg-purple-600',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#C9A84C" className="text-[#C9A84C]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);

  /* Auto-rotate every 4s */
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, [paused]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.fade-up');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const prev = () => { setPaused(true); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setPaused(true); setCurrent((c) => (c + 1) % testimonials.length); };

  return (
    <section id="testimonials" ref={ref} className="bg-[#1B1F3B] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="fade-up text-center mb-12">
          <p className="text-[#C9A84C] text-xs tracking-widest font-bold uppercase mb-3">Alumni Stories</p>
          <h2 className="text-white text-4xl font-bold">Voices of Horizon</h2>
        </div>

        {/* Placement Metrics Banner */}
        <div className="fade-up grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {PLACEMENT_STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="glass rounded-2xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-[#C9A84C]" />
                </div>
                <p className="text-[#C9A84C] text-2xl font-black">{stat.value}</p>
                <p className="text-white/60 text-xs mt-1 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Carousel */}
        <div className="fade-up relative" style={{ transitionDelay: '0.15s' }}>
          {/* Cards (show active + side previews on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {testimonials.map((t, i) => {
              const dist = Math.abs(i - current);
              const isCenter = i === current;
              const isVisible = dist <= 1;
              return (
                <div
                  key={t.name}
                  onClick={() => { setCurrent(i); setPaused(true); }}
                  className={`glass rounded-2xl p-7 flex flex-col cursor-pointer transition-all duration-500
                    ${isCenter ? 'ring-2 ring-[#C9A84C]/50 scale-100 opacity-100' : 'opacity-50 scale-95 hidden md:flex'}
                    ${isVisible ? 'block' : 'hidden md:block'}
                  `}
                >
                  <StarRating count={t.stars} />
                  <p className="text-[#C9A84C] text-5xl font-black opacity-40 mb-1 leading-none">"</p>
                  <p className="text-white/90 text-base italic leading-relaxed mb-6 flex-1">{t.quote}</p>
                  <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                    <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-[#C9A84C] font-bold text-sm">{t.name}</p>
                      <p className="text-white/50 text-xs">{t.role}</p>
                      <p className="text-white/70 text-xs font-medium mt-0.5">{t.company}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setPaused(true); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 h-2 bg-[#C9A84C]' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
