import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div
      className="
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
    "
    >
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

function HiringGrid({ maxLogos }) {
  const base = typeof maxLogos === 'number' ? HIRING_LOGOS.slice(0, maxLogos) : HIRING_LOGOS;
  const track = [...base, ...base];

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

export default function HiringPartners({
  variant = 'full',
  maxLogos,
  viewMoreTo = '/academics',
  showViewMore = true,
  delay = '0.35s',
}) {
  const isPreview = variant === 'preview';
  const max = typeof maxLogos === 'number' ? maxLogos : isPreview ? 8 : undefined;

  return (
    <div className="fade-up" style={{ transitionDelay: delay }}>
      <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-5">
        500+ Hiring Partners include
      </p>
      <HiringGrid maxLogos={max} />

      {showViewMore && (
        <div className="flex justify-center -mt-4 mb-8">
          <Link
            to={viewMoreTo}
            className="inline-flex items-center gap-2 bg-[#1B1F3B] text-white px-10 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            View More <span aria-hidden>→</span>
          </Link>
        </div>
      )}
    </div>
  );
}

