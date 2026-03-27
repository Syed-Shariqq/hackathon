import { useEffect, useRef } from 'react';
import labStudents from '../assets/lab-students.jpeg';
import ground from '../assets/ground.jpeg';
import classroom from '../assets/herocampus.jpeg';
import outdoor from '../assets/outdoor.jpeg';
import fest from '../assets/fest.jpeg';

const pills = [
  '🎭 60+ Student Clubs',
  '🏆 National Sports Teams',
  '🎵 Annual Fest — "Horizons"',
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

        {/* Header */}
        <div className="fade-up text-center mb-14">
          <p className="text-[#C9A84C] text-xs tracking-widest font-bold 
            uppercase mb-3">
            CAMPUS EXPERIENCE
          </p>
          <h2 className="text-[#1B1F3B] text-4xl font-bold mb-3">
            Life at Horizon
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Beyond classrooms — a campus that thrives with energy, 
            culture, and opportunity
          </p>
        </div>

        {/* Bento Grid */}
        <div
          className="fade-up grid grid-cols-2 md:grid-cols-3 gap-4"
          style={{ transitionDelay: '0.1s' }}
        >
          {/* Large feature image - spans 2 cols, 2 rows */}
          <div className="col-span-2 md:col-span-2 row-span-2 
            rounded-2xl overflow-hidden h-[400px] group">
            <img
              src={ground}
              alt="Sports ground"
              className="w-full h-full object-cover 
              group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Top right */}
          <div className="rounded-2xl overflow-hidden h-[190px] group">
            <img
              src={labStudents}
              alt="Students in lab"
              className="w-full h-full object-cover 
              group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Bottom right */}
          <div className="rounded-2xl overflow-hidden h-[190px] group">
            <img
              src={classroom}
              alt="Classroom"
              className="w-full h-full object-cover 
              group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Bottom row - 3 equal */}
          <div className="rounded-2xl overflow-hidden h-[180px] group">
            <img
              src={outdoor}
              alt="Outdoor campus"
              className="w-full h-full object-cover 
              group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="rounded-2xl overflow-hidden h-[180px] group">
            <img
              src={fest}
              alt="Cultural fest"
              className="w-full h-full object-cover 
              group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Stats card replacing last picsum */}
          <div className="rounded-2xl bg-[#1B1F3B] h-[180px] 
            flex flex-col items-center justify-center gap-2 p-6">
            <p className="text-[#C9A84C] text-4xl font-black">500+</p>
            <p className="text-white text-sm font-medium text-center">
              Acres of Green Campus
            </p>
            <div className="w-8 h-0.5 bg-[#C9A84C] mt-1" />
            <p className="text-white/60 text-xs text-center">
              World-class infrastructure
            </p>
          </div>
        </div>

        {/* Pills */}
        <div
          className="fade-up flex flex-wrap justify-center gap-4 mt-10"
          style={{ transitionDelay: '0.2s' }}
        >
          {pills.map((pill) => (
            <span
              key={pill}
              className="bg-[#1B1F3B] text-white px-6 py-3 
              rounded-full text-sm font-medium hover:bg-[#C9A84C] 
              hover:text-[#1B1F3B] transition-colors duration-300 
              cursor-default"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}