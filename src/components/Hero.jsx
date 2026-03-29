import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import heroCampus from '../assets/college.jpeg';

const TYPING_WORDS = ['Engineering', 'Management', 'Biotechnology', 'Law', 'Research', 'Literature'];

const floatingStats = [
  { label: 'Avg. Package', value: '₹18 LPA' },
  { label: 'Placement Rate', value: '95%' },
  { label: 'Global Ranks', value: '#4 India' },
];

export default function Hero({ onApply }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef(null);

  /* Typewriter effect */
  useEffect(() => {
    const word = TYPING_WORDS[typingIndex];
    const speed = isDeleting ? 60 : 110;

    typingRef.current = setTimeout(() => {
      setDisplayed((prev) => {
        if (!isDeleting) {
          if (prev.length < word.length) return word.slice(0, prev.length + 1);
          setTimeout(() => setIsDeleting(true), 1600);
          return prev;
        } else {
          if (prev.length > 0) return prev.slice(0, -1);
          setIsDeleting(false);
          setTypingIndex((i) => (i + 1) % TYPING_WORDS.length);
          return '';
        }
      });
    }, speed);

    return () => clearTimeout(typingRef.current);
  }, [displayed, isDeleting, typingIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroCampus})` }}
      />
      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-[#0F1224]/70" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#1B1F3B]/30 to-[#0F1224]/90" />

      {/* Decorative glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A84C]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#C9A84C]/6 rounded-full blur-2xl pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 pt-28 pb-16 max-w-5xl mx-auto w-full">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <Sparkles size={12} />
          Applications Open for 2025–26
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
        </div>

        {/* Headline */}
        <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight mb-4 tracking-tight">
          Get Admitted.<br />
          <span className="gradient-text">Get Placed.</span><br />
          <span className="text-white/90 text-4xl md:text-5xl font-bold">Get Ahead.</span>
        </h1>

        {/* Typewriter subtext */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-3">
          India's #4 university for{' '}
          <span className="text-[#C9A84C] font-bold cursor-blink">{displayed}</span>
        </p>
        <p className="text-white/50 text-sm max-w-xl mx-auto mb-10">
          38 years · 25,000+ students · ₹120Cr research · 500+ hiring partners
        </p>

        {/* Program search bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:border-[#C9A84C]/50 transition-all duration-300">
            <Search size={18} className="absolute left-4 text-white/50 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any program — B.Tech, MBA, Law..."
              className="w-full bg-transparent text-white placeholder-white/40 text-sm py-4 pl-11 pr-36 focus:outline-none"
            />
            <a
              href={`#programs`}
              className="absolute right-2 bg-[#C9A84C] text-[#1B1F3B] text-sm font-bold px-5 py-2.5 rounded-xl hover:scale-105 transition-transform duration-200 glow-gold"
            >
              Search
            </a>
          </div>
          <p className="text-white/30 text-xs mt-2">
            Popular: B.Tech CSE · MBA Analytics · LLB · Ph.D Research
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            type="button"
            onClick={() => onApply?.()}
            className="group flex items-center gap-2 bg-[#C9A84C] text-[#1B1F3B] font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-all duration-300 glow-gold shadow-lg cursor-pointer"
          >
            Get Admitted in 3 Steps
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <a
            href="#testimonials"
            className="group flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-full hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 backdrop-blur-sm font-semibold"
          >
            <TrendingUp size={16} />
            View Placement Data
          </a>
        </div>

        {/* Floating stat cards row */}
        <div className="flex flex-wrap justify-center gap-4">
          {floatingStats.map((s, i) => (
            <div
              key={s.label}
              className="glass rounded-2xl px-5 py-3 text-center"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <p className="text-[#C9A84C] text-xl font-black">{s.value}</p>
              <p className="text-white/60 text-xs font-medium mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C9A84C] animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ChevronDown size={34} strokeWidth={2.5} />
      </a>
    </section>
  );
}
