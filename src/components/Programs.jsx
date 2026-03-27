import { useState, useEffect, useRef } from 'react';
import { BookOpen, BarChart2, FlaskConical, BookText, Scale, Microscope } from 'lucide-react';

const categories = ['All', 'Engineering', 'Management', 'Sciences', 'Arts', 'Law'];

const programs = [
  {
    icon: BookOpen,
    name: 'B.Tech Computer Science',
    duration: '4 Years',
    description: 'Master algorithms, AI, and systems design',
    category: 'Engineering',
  },
  {
    icon: BarChart2,
    name: 'MBA Business Analytics',
    duration: '2 Years',
    description: 'Data-driven leadership for modern business',
    category: 'Management',
  },
  {
    icon: FlaskConical,
    name: 'B.Sc Biotechnology',
    duration: '3 Years',
    description: 'Explore life sciences and biomedical research',
    category: 'Sciences',
  },
  {
    icon: BookText,
    name: 'BA English Literature',
    duration: '3 Years',
    description: 'Develop critical thinking through great writing',
    category: 'Arts',
  },
  {
    icon: Scale,
    name: 'LLB Corporate Law',
    duration: '5 Years',
    description: 'Shape policy and lead legal innovation',
    category: 'Law',
  },
  {
    icon: Microscope,
    name: 'Ph.D Research Programs',
    duration: '3-5 Years',
    description: 'Push boundaries with funded doctoral research',
    category: 'Sciences',
  },
];

export default function Programs() {
  const [activeTab, setActiveTab] = useState('All');
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

  const filtered =
    activeTab === 'All' ? programs : programs.filter((p) => p.category === activeTab);

  return (
    <section id="programs" ref={ref} className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-up text-center mb-10">
          <h2 className="text-[#1B1F3B] text-4xl font-bold mb-3">Explore Our Programs</h2>
          <p className="text-gray-500">From undergraduate to doctoral — find your path</p>
        </div>

        {/* Filter Tabs */}
        <div className="fade-up flex gap-3 justify-center flex-wrap mb-12" style={{ transitionDelay: '0.1s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === cat
                  ? 'bg-[#1B1F3B] text-white'
                  : 'border border-gray-300 text-gray-600 hover:border-[#C9A84C] hover:text-[#C9A84C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.name}
                className=" bg-white rounded-2xl shadow-sm p-6 border-l-4 border-transparent hover:border-[#C9A84C] hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-bold text-[#1B1F3B] text-base mb-1">{prog.name}</h3>
                <p className="text-xs text-gray-400 mb-2">{prog.duration}</p>
                <p className="text-sm text-gray-500 mb-4">{prog.description}</p>
                <a href="#cta" className="text-[#C9A84C] font-medium text-sm hover:underline">
                  View Details →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
