import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 25000, suffix: '+', label: 'Students Enrolled' },
  { number: 1400, suffix: '+', label: 'Expert Faculty' },
  { number: 200, suffix: '+', label: 'Programs Offered' },
  { number: 38, suffix: ' Years', label: 'Of Excellence' },
];

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const increment = target / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="bg-[#1B1F3B] py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center py-8 md:py-0 px-4">
            <p className="text-[#C9A84C] text-4xl font-black">
              <CountUp target={stat.number} suffix={stat.suffix} active={active} />
            </p>
            <p className="text-white/70 text-sm mt-1 tracking-wide uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
