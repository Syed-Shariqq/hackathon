import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', ref: '#hero' },
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
  { icon: FaLinkedin, label: 'LinkedIn', ref: 'https://linkedin.com' },
  { icon: FaInstagram, label: 'Instagram', ref: 'https://instagram.com' },
  { icon: FaTwitter, label: 'Twitter', ref: 'https://twitter.com' },
  { icon: FaYoutube, label: 'YouTube', ref: 'https://youtube.com' },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0F1224] border-t-2 border-[#C9A84C] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Col 1 — Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center font-black text-[#1B1F3B] text-lg select-none">
              HU
            </div>
            <span className="text-white font-bold text-base">Horizon University</span>
          </div>
          <p className="text-white/50 text-sm mb-6">Shaping leaders since 1987</p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, label, ref }) => (
              <a
                key={label}
                href={ref}
                aria-label={label}
                rel="noopener noreferrer"
                target="_blank"
                className="w-9 h-9 rounded-full border border-white/20 
                flex items-center justify-center text-white/50 
                hover:text-[#C9A84C] hover:border-[#C9A84C] 
                transition-colors duration-300" >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-1">
            {quickLinks.map(({label, ref}) => (
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
            {academics.map(({label, ref}) => (
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
          <ul className="space-y-3 text-white/60 text-sm">
            <li>📍 123 University Ave, Knowledge City</li>
            <li>📞 +91 98765 43210</li>
            <li>✉ info@horizonuniversity.edu</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/40 text-xs">
        <p>© 2025 Horizon University. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
          <span>·</span>
          <a href="#" className="hover:text-white/70 transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
