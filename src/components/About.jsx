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
        <div className="relative fade-up mt-4 mr-4">
          {/* Gold offset border behind image */}
          <div className="absolute -bottom-4 -right-4 w-full h-full 
            border-[3px] border-[#C9A84C] rounded-2xl z-0" />
          <img
            src={studentsLibrary}
            alt="Students in library"
            className="relative z-10 rounded-2xl shadow-2xl w-full 
            h-[420px] object-cover object-center brightness-105 
            contrast-105"
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
            Horizon University stands at the intersection of tradition and 
            innovation. With over three decades of academic excellence, we 
            have shaped leaders across industries, borders, and disciplines.
          </p>

          <ul className="space-y-4 mb-8">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 
                bg-white px-4 py-3 rounded-xl shadow-sm 
                border border-gray-100">
                <span className="w-8 h-8 rounded-full bg-[#C9A84C]/15 
                  flex items-center justify-center shrink-0">
                  <span className="text-[#C9A84C] text-sm font-black">✦</span>
                </span>
                <span className="text-gray-700 text-sm font-medium">{b}</span>
              </li>
            ))}
          </ul>

          <a
            href="#programs"
            className="inline-flex items-center gap-2 text-[#C9A84C] 
            font-semibold hover:underline underline-offset-4 transition 
            text-base"
          >
            Learn More About Us →
          </a>
        </div>
      </div>
    </section>
  );
}