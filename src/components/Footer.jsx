import { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Home', ref: '#home' },
  { label: 'About', ref: '#about' },
  { label: 'Admissions', ref: '#cta' },
  { label: 'Campus Life', ref: '#campus-life' },
  { label: 'Contact', ref: '#footer' },
];

const academics = [
  { label: 'Engineering', ref: '#programs' },
  { label: 'Management', ref: '#programs' },
  { label: 'Sciences', ref: '#programs' },
  { label: 'Arts & Humanities', ref: '#programs' },
  { label: 'Law', ref: '#programs' },
  { label: 'Research', ref: '#programs' },
];

const socials = [
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com' },
];

/* Countdown to a fixed deadline date */
function useCountdown(targetDate) {
  const calc = () => {
    const diff = targetDate - Date.now();
    if (diff <= 0) {
      return { expired: true, d: 0, h: 0, m: 0, s: 0 };
    }
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, [targetDate]);
  return time;
}

function CountdownUnit({ value, label }) {
  return (
    <div className="text-center">
      <div className="bg-white/10 rounded-xl px-3 py-2 min-w-[52px]">
        <p className="text-[#C9A84C] text-2xl font-black leading-none">
          {String(value).padStart(2, '0')}
        </p>
      </div>
      <p className="text-white/40 text-xs mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  // Deadline: May 31, 2025
  const deadline = useRef(
    new Date(new Date().getFullYear() + 1, 4, 31, 23, 59, 59).getTime()
  ).current;
  const { d, h, m, s } = useCountdown(deadline);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes('@')) { setSubmitted(true); setEmail(''); }
  };

  return (
    <footer id="footer" className="bg-[#0F1224]">
      {/* ── Pre-footer Conversion Strip ── */}
      <div className="border-t-2 border-[#C9A84C] bg-linear-to-r from-[#1B1F3B] via-[#0F1224] to-[#1B1F3B] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Countdown */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={14} className="text-[#C9A84C]" />
              <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">
                Applications Close In
              </p>
            </div>
            <div className="flex items-end gap-3">
              <CountdownUnit value={d} label="Days" />
              <span className="text-[#C9A84C] text-2xl font-black mb-5">:</span>
              <CountdownUnit value={h} label="Hours" />
              <span className="text-[#C9A84C] text-2xl font-black mb-5">:</span>
              <CountdownUnit value={m} label="Min" />
              <span className="text-[#C9A84C] text-2xl font-black mb-5">:</span>
              <CountdownUnit value={s} label="Sec" />
            </div>
            <p className="text-white/40 text-xs mt-2">2025–26 Admissions · Limited Seats</p>
          </div>

          {/* Right: Email/Prospectus capture */}
          <div className="w-full md:w-auto md:max-w-md flex-1">
            <p className="text-white font-bold text-lg mb-1">Get Your Free Prospectus</p>
            <p className="text-white/50 text-sm mb-4">Program details, fees, and scholarship info — directly in your inbox.</p>
            {submitted ? (
              <div className="bg-[#C9A84C]/15 border border-[#C9A84C]/30 rounded-xl px-5 py-3">
                <p className="text-[#C9A84C] font-semibold text-sm">
                  ✓ Prospectus on its way! Check your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#C9A84C] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#C9A84C] text-[#1B1F3B] px-5 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-1.5 text-sm glow-gold"
                >
                  <Send size={14} /> Send
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="border-t border-white/10 pt-14 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center font-black text-[#1B1F3B] text-lg select-none">
                HU
              </div>
              <span className="text-white font-bold text-base">Horizon University</span>
            </div>
            <p className="text-white/50 text-sm mb-2">Shaping leaders since 1987</p>
            <p className="text-white/30 text-xs leading-relaxed mb-6 max-w-[200px]">
              NAAC A++ · UGC Recognised · Ranked #4 in India
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-1">
              {quickLinks.map(({ label, ref }) => (
                <li key={label}>
                  <a href={ref} className="text-white/60 hover:text-[#C9A84C] text-sm transition-colors duration-200 leading-8 block">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Academics */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Academics</h4>
            <ul className="space-y-1">
              {academics.map(({ label, ref }) => (
                <li key={label}>
                  <a href={ref} className="text-white/60 hover:text-[#C9A84C] text-sm transition-colors duration-200 leading-8 block">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#C9A84C] shrink-0 mt-0.5" />
                123 University Ave, Knowledge City
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#C9A84C] shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#C9A84C] shrink-0" />
                info@horizonuniversity.edu
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/30 text-xs">
          <p>© 2025 Horizon University. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Use</a>
            <span>·</span>
            <a href="#" className="hover:text-white/60 transition-colors">NAAC Certificate</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
