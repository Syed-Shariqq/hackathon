import { useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, FlaskConical, Globe } from 'lucide-react';

const cards = [
  {
    icon: GraduationCap,
    title: 'World-Class Faculty',
    body: 'Learn from PhD holders and industry veterans with decades of experience',
  },
  {
    icon: Briefcase,
    title: '100% Placement Support',
    body: 'Dedicated career cell with 500+ recruiting partners',
  },
  {
    icon: FlaskConical,
    title: 'Research & Innovation',
    body: 'State-of-the-art labs, funded research, and 300+ patents filed',
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    body: 'Semester abroad, international internships, and global alumni network',
  },
];

export default function WhyUs() {
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
    <section id="why-us" ref={ref} className="bg-[#F3F4F6] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="fade-up text-center text-4xl font-bold text-[#1B1F3B] mb-16">
          Why Students Choose Horizon
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="fade-up bg-white rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-5 bg-[#C9A84C]/10 rounded-full flex items-center justify-center">
                  <Icon size={26} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-bold text-[#1B1F3B] text-lg mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
