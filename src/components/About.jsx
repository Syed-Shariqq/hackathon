import { useEffect, useRef } from 'react';
import studentsLibrary from '../assets/student-library.jpeg';

const bullets = [
  'NAAC A++ Accredited Institution',
  'Partnerships with 80+ Global Universities',
  '₹120Cr+ Annual Research Funding',
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    const els = ref.current?.querySelectorAll('.fade-up');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="bg-[#F9F9FB] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image with gold border offset */}
        <div className="relative fade-up">
          <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#C9A84C] rounded-2xl" />
          <img
            src={studentsLibrary}
            alt="Students in library"
            className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
          />
        </div>

        {/* Text */}
        <div className="fade-up" style={{ transitionDelay: '0.15s' }}>
          <p className="text-[#C9A84C] text-xs tracking-widest font-bold uppercase mb-3">
            Who We Are
          </p>
          <h2 className="text-[#1B1F3B] text-3xl md:text-4xl font-bold leading-snug mb-5">
            A Legacy of Knowledge,<br />A Future of Possibility
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Horizon University stands at the intersection of tradition and innovation. With over
            three decades of academic excellence, we have shaped leaders across industries,
            borders, and disciplines.
          </p>

          <ul className="space-y-3 mb-8">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="text-[#C9A84C] text-lg font-black leading-none mt-0.5">✦</span>
                <span className="text-gray-700 text-sm font-medium">{b}</span>
              </li>
            ))}
          </ul>

          <a
            href="#programs"
            className="text-[#C9A84C] font-semibold hover:underline underline-offset-4 transition"
          >
            Learn More About Us →
          </a>
        </div>
      </div>
    </section>
  );
}
