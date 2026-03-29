import { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Academics', href: '#programs' },
  { label: 'Admissions', href: '#cta' },
  { label: 'Campus Life', href: '#campus-life' },
  { label: 'Research', href: '#why-us' },
  { label: 'Contact', href: '#footer' },
];

export default function Navbar({ onApply }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(top > 20);
      setScrollPct(docH > 0 ? Math.min(100, (top / docH) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollPct}%` }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'shadow-md shadow-black/5' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center font-black text-[#1B1F3B] text-lg select-none shadow-sm">
              HU
            </div>
            <span className="font-bold text-[#1B1F3B] text-lg leading-tight hidden sm:block">
              Horizon University
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#C9A84C] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: badge + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Applications Open badge */}
            <div className="flex items-center gap-1.5 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold px-3 py-1.5 rounded-full">
              <Flame size={11} />
              Applications Open
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            </div>
            <a
              href="#cta"
              className="bg-[#C9A84C] text-[#1B1F3B] font-bold px-5 py-2 rounded-full hover:scale-105 transition-transform duration-300 text-sm glow-gold shadow-md"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[#1B1F3B] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } bg-white/95 backdrop-blur-md`}
        >
          <ul className="flex flex-col px-6 pb-6 pt-2 gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-[#C9A84C] transition-colors duration-200 block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => { setMenuOpen(false); onApply?.(); }}
                className="inline-flex items-center bg-[#C9A84C] text-[#1B1F3B] font-bold px-5 py-2 rounded-full text-sm mt-2 cursor-pointer"
              >
                Apply Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
