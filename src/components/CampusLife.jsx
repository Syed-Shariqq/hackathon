import { useEffect, useRef } from 'react';
import studentsLibrary from '../assets/student-library.jpeg';
import labStudents from '../assets/lab-students.jpeg';

const pills = [
  '🎭 60+ Student Clubs',
  '🏆 National Sports Teams',
  '🎵 Annual Fest — "Horizons"',
];

const picsum = [
  'https://picsum.photos/seed/sports/600/400',
  'https://picsum.photos/seed/campus/600/400',
  'https://picsum.photos/seed/fest/600/400',
];

export default function CampusLife() {
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
    <section id="campus-life" ref={ref} className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-up text-center mb-14">
          <h2 className="text-[#1B1F3B] text-4xl font-bold mb-3">Life at Horizon</h2>
          <p className="text-gray-500">Beyond classrooms — a campus that thrives</p>
        </div>

        {/* Bento Grid */}
        <div className="fade-up grid grid-cols-1 md:grid-cols-3 gap-4" style={{ transitionDelay: '0.1s' }}>
          {/* Row 1 */}
          <div className="md:col-span-2 h-72 rounded-2xl overflow-hidden">
            <img src={studentsLibrary} alt="Students in library" className="w-full h-full object-cover" />
          </div>
          <div className="h-72 rounded-2xl overflow-hidden">
            <img src={labStudents} alt="Students in lab" className="w-full h-full object-cover" />
          </div>

          {/* Row 2 */}
          {picsum.map((url, i) => (
            <div key={i} className="h-48 rounded-2xl overflow-hidden">
              <img
                src={url}
                alt={`Campus life ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Pills */}
        <div className="fade-up flex flex-wrap justify-center gap-4 mt-10" style={{ transitionDelay: '0.2s' }}>
          {pills.map((pill) => (
            <span
              key={pill}
              className="bg-[#1B1F3B] text-white px-6 py-3 rounded-full text-sm font-medium"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
