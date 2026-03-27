import { useEffect, useRef } from 'react';

const testimonials = [
  {
    quote:
      "Horizon didn't just give me a degree — it gave me direction and purpose.",
    initials: 'PS',
    name: 'Priya Sharma',
    role: 'B.Tech CSE, 2022 · Now at Google',
  },
  {
    quote:
      'The research culture here is unmatched. My PhD opened doors I never imagined.',
    initials: 'AM',
    name: 'Dr. Arjun Mehta',
    role: 'Ph.D Biotech · Now at Stanford Labs',
  },
  {
    quote:
      'From zero coding to ₹24LPA — Horizon\'s placement cell made it real.',
    initials: 'RV',
    name: 'Rohan Verma',
    role: 'MBA Tech, 2023 · Now at Microsoft',
  },
];

export default function Testimonials() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.fade-up');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={ref} className="bg-[#1B1F3B] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="fade-up text-white text-4xl font-bold text-center mb-16">
          Voices of Horizon
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="fade-up bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/10 flex flex-col"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <p className="text-[#C9A84C] text-5xl font-black opacity-40 mb-2 leading-none">"</p>
              <p className="text-white/90 text-base italic leading-relaxed mb-6 flex-1">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C] flex items-center justify-center text-[#1B1F3B] font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#C9A84C] font-bold text-sm">{t.name}</p>
                  <p className="text-white/60 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
