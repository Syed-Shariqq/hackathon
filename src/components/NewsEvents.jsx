import { useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';

const news = [
  {
    date: 'Mar 2025',
    headline: 'Ranked #4 in National University Rankings 2025',
    desc: 'Recognized for research output and industry placements',
  },
  {
    date: 'Feb 2025',
    headline: 'MoU Signed with MIT for Joint Research Program',
    desc: 'Collaboration across AI, biotech, and climate science',
  },
  {
    date: 'Jan 2025',
    headline: 'Research Grant of ₹40Cr Awarded by DST',
    desc: 'Funds to accelerate lab infrastructure and PhD programs',
  },
];

const events = [
  { name: 'Open Day & Campus Tour', date: 'April 5', location: 'Main Campus, 10AM onwards' },
  { name: 'National Tech Symposium', date: 'April 18', location: 'Auditorium Block A' },
  { name: 'Annual Cultural Fest "Horizons"', date: 'May 2', location: 'Open Grounds, All Day' },
];

export default function NewsEvents() {
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
    <section id="news" ref={ref} className="bg-[#F9F9FB] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Latest News */}
        <div className="fade-up">
          <h3 className="font-bold text-2xl text-[#1B1F3B] mb-8">Latest News</h3>
          <div className="space-y-0">
            {news.map((item, i) => (
              <div key={item.headline}>
                <div className="py-5">
                  <span className="text-xs bg-[#C9A84C]/10 text-[#C9A84C] px-3 py-1 rounded-full font-medium">
                    {item.date}
                  </span>
                  <h4 className="font-semibold text-[#1B1F3B] mt-3 mb-1 leading-snug">{item.headline}</h4>
                  <p className="text-gray-500 text-sm mb-2">{item.desc}</p>
                  <a href="#" className="text-[#C9A84C] text-sm font-medium hover:underline">
                    Read More →
                  </a>
                </div>
                {i < news.length - 1 && <div className="border-b border-gray-200" />}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="fade-up" style={{ transitionDelay: '0.15s' }}>
          <h3 className="font-bold text-2xl text-[#1B1F3B] mb-8">Upcoming Events</h3>
          <div className="space-y-6">
            {events.map((ev) => (
              <div key={ev.name} className="flex gap-4 items-start border-l-2 border-[#C9A84C] pl-4">
                <Calendar size={18} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#1B1F3B]">{ev.name}</h4>
                  <p className="text-gray-500 text-sm">{ev.date} · {ev.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
