import React, { useState, useEffect } from 'react';
import {
  Building2, BookOpen, FlaskConical, Home, Dumbbell,
  Users, Trophy, MapPin, Navigation, Star, ArrowRight,
  Activity, Cpu, Camera, ChevronRight, Mic
} from 'lucide-react';
import ApplicationModal from '../components/ApplicationModal';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Campus() {
  const [mapMode, setMapMode] = useState('satellite');
  const [openModel, setOpenModel] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Slight delay to allow DOM to paint
    setTimeout(() => {
      document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();


  }, []);

  const mapConfig = {
    map: { type: 'm', zoom: 16 },
    satellite: { type: 'k', zoom: 17 },
    '3d': { type: 'k', zoom: 19 }
  };

  const currentMap = mapConfig[mapMode];
  const mapUrl = `https://maps.google.com/maps?q=12.9337241,77.6921207&t=${currentMap.type}&z=${currentMap.zoom}&ie=UTF8&iwloc=&output=embed`;

  const clubs = [
    { name: 'Coding Club', emoji: '💻', members: '850+' },
    { name: 'Drama Society', emoji: '🎭', members: '240+' },
    { name: 'Robotics Team', emoji: '🤖', members: '320+' },
    { name: 'Literary Guild', emoji: '📚', members: '180+' },
    { name: 'Photography', emoji: '📸', members: '410+' },
    { name: 'E-Cell', emoji: '🚀', members: '600+' },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1562774053-701939374585?w=600',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
    'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800',
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800',
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
    'https://images.unsplash.com/photo-1562774053-701939374585?w=800'
  ];

  return (
    <>
      <ScrollToTop />
      <div className="bg-white min-h-screen font-sans">


        {openModel && (
          <ApplicationModal onClose={() => setOpenModel(false)} />
        )}

        {/* 1. HERO SECTION (Emotional Hook) */}
        <section className="relative h-[90vh] bg-blue-950 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-b from-blue-950/90 via-blue-950/70 to-blue-950/95 mix-blend-multiply z-10" />
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80"
              alt="Campus Aerial"
              className="w-full h-full object-cover opacity-60"
            />
            {/* subtle ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] z-10" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20 fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
              Life at <span className="gradient-text">Horizon University</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-100 mb-10 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              More than just an education. It's a vibrant ecosystem designed for growth, innovation, and lifelong connections.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold rounded-lg transition-transform hover:-translate-y-1 shadow-lg shadow-yellow-500/20 flex items-center gap-2">
                Explore Campus <ArrowRight size={20} />
              </button>
              <button
                onClick={() => setOpenModel(true)}
                className="px-8 cursor-pointer card-glow py-4 glass text-white hover:bg-white/10 font-semibold rounded-lg transition-all border border-white/20">
                Apply Now
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow text-yellow-500">
            <ChevronRight className="rotate-90" size={32} />
          </div>
        </section>

        {/* 6. CAMPUS STATS (Credibility Layer) */}
        <section className="relative z-20 -mt-12 px-6 max-w-7xl mx-auto mb-20 fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: 'Green Campus', value: '200+', suffix: 'Acres', icon: MapPin },
              { label: 'Academic Blocks', value: '40+', suffix: 'Bldgs', icon: Building2 },
              { label: 'Student Housing', value: '3', suffix: 'Hostels', icon: Home },
              { label: 'Sports Complex', value: 'Olympic', suffix: 'Standard', icon: Trophy },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                {/* Glow background effect */}
                <div className="absolute inset-0 bg-linear-to-br from-yellow-500/5 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Icon */}
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 text-yellow-600 border border-gray-100 group-hover:bg-yellow-500/10 transition-all">
                  <stat.icon size={24} />
                </div>

                {/* Value */}
                <h3 className="text-3xl font-black text-gray-900 flex items-baseline gap-2">
                  {stat.value}
                  <span className="text-sm font-semibold text-gray-500 group-hover:text-yellow-600 transition">
                    {stat.suffix}
                  </span>
                </h3>

                {/* Label */}
                <p className="text-gray-600 text-sm font-medium mt-1">
                  {stat.label}
                </p>

                {/* Divider */}
                <div className="mt-4 h-px w-full bg-linear-to-r from-transparent via-gray-200 to-transparent group-hover:via-yellow-400 transition-all" />

                {/* Extra detail */}
                <p className="mt-3 text-xs text-gray-400 group-hover:text-gray-600 transition">
                  {stat.label === "Green Campus" && "Eco-friendly • Open Spaces • Smart Infra"}
                  {stat.label === "Academic Blocks" && "Labs • Classrooms • Research Centers"}
                  {stat.label === "Student Housing" && "Comfort • Security • Community"}
                  {stat.label === "Sports Complex" && "Indoor • Outdoor • Professional Facilities"}
                </p>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-yellow-400/30 transition-all pointer-events-none" />
              </div>
            ))}
          </div>
        </section>

        {/* 2. CAMPUS HIGHLIGHTS (Infrastructure Showcase) */}
        <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">World-Class Infrastructure</h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                Spaces designed to inspire creativity, foster breakthrough research, and build lasting communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
              {[
                { title: 'Central Library', desc: 'Over 500,000 volumes, digital archives, and 24/7 quiet study zones wrapped in brilliant architecture.', icon: BookOpen, img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600' },
                { title: 'Research Labs', desc: 'State-of-the-art equipment for AI, biotech, and material sciences, funded by top industry partners.', icon: FlaskConical, img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600' },
                { title: 'Student Hostels', desc: 'Comfortable, secure, and vibrant living spaces with modern amenities making you feel right at home.', icon: Home, img: 'https://images.unsplash.com/photo-1728803076228-0b6b587dd7c8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, // Fallback to icon only or different img below
                { title: 'Sports Complex', desc: 'Indoor arena, Olympic-sized swimming pool, and extensive outdoor fields for all major sports.', icon: Dumbbell, img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600' },
                { title: 'Innovation Hub', desc: 'Dedicated Makerspace with 3D printers, incubation cells, and collaborative co-working areas to build your startup.', icon: Cpu, img: 'https://plus.unsplash.com/premium_photo-1661962318201-c7faa790617b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { title: 'Auditorium', desc: 'Premium 1500-seater main hall hosting national cultural events, tech fests, and guest lectures.', icon: Mic, img: 'https://images.unsplash.com/photo-1533483996897-a8dde9930141?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
              ].map((facility, i) => (
                <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col relative">
                  {facility.img ? (
                    <div className="h-56 overflow-hidden relative">
                      <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img src={facility.img} alt={facility.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 z-20 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-blue-950 shadow-lg">
                        <facility.icon size={24} />
                      </div>
                    </div>
                  ) : (
                    <div className="h-56 overflow-hidden relative bg-linear-to-br from-blue-900 to-blue-950 flex items-center justify-center group-hover:from-blue-800 transition-colors duration-500">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                      <facility.icon size={64} className="text-yellow-500/80 transform group-hover:scale-110 transition-transform duration-500 opacity-50" />
                      <div className="absolute top-4 left-4 z-20 w-12 h-12 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center text-yellow-500 shadow-lg">
                        <facility.icon size={24} />
                      </div>
                    </div>
                  )}
                  <div className="p-8 flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-light">{facility.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 & 4. STUDENT LIFE & CLUBS (Energy Section) */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center fade-up">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Unmatched Campus Energy</h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
                  Life at Horizon goes way beyond the classroom. It’s about discovering your passions, leading initiatives, and celebrating diversity through year-round fests, hackathons, and vibrant cultural events.
                </p>

                <div className="space-y-8">
                  {[
                    { title: 'Cultural Festivals', desc: '3-day annual fest with 50+ colleges participating in various arts and performances.', icon: Star },
                    { title: 'Global Hackathons', desc: '48-hour coding sprints sponsored by leading tech giants with incredible prizes.', icon: Activity },
                    { title: 'Community Outreach', desc: 'Student-led NGOs and clubs making real-world social impact every single weekend.', icon: Users }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                        <item.icon className="text-yellow-600" size={26} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative fade-up">
                <div className="absolute -inset-4 bg-linear-to-tr from-yellow-500/20 to-blue-500/20 rounded-4xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800"
                  alt="Students collaborating"
                  className="relative rounded-4xl shadow-2xl object-cover h-[550px] w-full border border-gray-100"
                />
              </div>
            </div>

            {/* 4. Horizontal Scroll Student Clubs */}
            <div className="mt-24 pt-16 border-t border-gray-100 fade-up">
              <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-blue-950 mb-2">Student Organizations</h3>
                  <p className="text-gray-500">Find your tribe among our 40+ active student clubs.</p>
                </div>
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full hidden sm:inline-flex items-center gap-2">
                  Swipe to explore <ArrowRight size={14} />
                </span>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory pt-2 scroll-smooth" style={{ scrollbarWidth: 'none' }}>
                {clubs.map((club, i) => (
                  <div key={i} className="snap-start shrink-0 w-[280px] bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-yellow-500/40 transition-all rounded-2xl p-6 group cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -z-10 transition-colors group-hover:bg-yellow-50/50" />
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform origin-left">{club.emoji}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{club.name}</h4>
                    <p className="text-sm text-gray-500 flex items-center gap-1.5 font-medium">
                      <Users size={16} /> {club.members} Active Members
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. INTERACTIVE CAMPUS MAP (CORE FEATURE) */}
        <section className="py-24 bg-blue-950 relative overflow-hidden">
          {/* Subtle grid texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12 fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Explore Our Campus</h2>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto font-light leading-relaxed">
                Get a bird's-eye view of our sprawling 200-acre lush green campus situated in the heart of the tech district.
              </p>
            </div>

            <div className="fade-up">
              {/* Map Controls */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex bg-blue-900/40 p-1.5 rounded-xl border border-white/10 backdrop-blur shadow-2xl">
                  {[
                    { id: 'map', label: 'Map View', icon: MapPin },
                    { id: 'satellite', label: 'Satellite View', icon: Camera },
                    { id: '3d', label: '3D Explore Mode', icon: Navigation }
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setMapMode(btn.id)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${mapMode === btn.id
                        ? 'bg-yellow-500 text-blue-950 shadow-md'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                    >
                      <btn.icon size={18} />
                      <span className="hidden sm:inline">{btn.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Map Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-black/80 aspect-square md:aspect-video max-h-[600px] w-full bg-blue-900 group">
                <div className={`absolute top-6 right-6 z-10 bg-black/70 backdrop-blur text-white px-4 py-2 rounded-full text-xs font-mono border border-white/20 flex items-center gap-3 transition-opacity duration-300 shadow-xl ${mapMode === '3d' ? 'animate-pulse' : ''}`}>
                  <div className={`w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor] ${mapMode === '3d' ? 'bg-red-500 text-red-500' : 'bg-green-500 text-green-500'}`} />
                  {mapMode === '3d' ? '3D SIMULATION ACTIVE' : 'LIVE: 19.1334° N, 72.9133° E'}
                </div>

                <iframe
                  title="Interactive Campus Map"
                  src={mapUrl}
                  className="w-full h-full border-0 filter contrast-125 saturate-110"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Overlay gradient to sink it into the page */}
                <div className="absolute inset-0 border-inset border-[6px] border-blue-950/20 rounded-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* 7. PHOTO GALLERY (Visual Immersion) */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 fade-up flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">A Glimpse of Joy</h2>
                <p className="text-xl text-gray-500 max-w-xl font-light">From quiet library corners to roaring sports arenas, every passing day brings a new unscripted story.</p>
              </div>
              <a href="https://www.google.com/maps/place/New+Horizon+College+of+Engineering/@12.9337241,77.6921207,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgID-u4CNAw!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHVAwep2MLG4_gQ0RfhRP6D8ts4pYiCmKpkAvgH-CMjSkXJjdLGm2-2nw0CrelU-cMiqPxoaEmENsGRWZ3DCREn0t-VBlMmhvr3D67kDMo_Ga5YFvdm180wEhE4T1YJVIhNx-mwSW7vm%3Dw114-h86-k-no!7i4000!8i3000!4m11!1m2!2m1!1shorizon+college!3m7!1s0x3bae13cb00000001:0xab10e26281718cc2!8m2!3d12.9337241!4d77.6921207!10e5!15sCg9ob3Jpem9uIGNvbGxlZ2VaESIPaG9yaXpvbiBjb2xsZWdlkgEHY29sbGVnZeABAA!16s%2Fm%2F04n2p7h?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D">
                <button className="text-blue-600 cursor-pointer font-bold flex items-center gap-2 hover:text-blue-800 transition-colors bg-blue-50 px-6 py-3 rounded-lg hover:bg-blue-100">
                  View Full Gallery <ArrowRight size={20} />
                </button>
              </a>
            </div>

            {/* Masonry Layout via CSS columns */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 fade-up">
              {gallery.map((img, i) => (
                <div key={i} className="break-inside-avoid shadow-md hover:shadow-2xl rounded-2xl overflow-hidden group cursor-pointer border border-gray-100 relative">
                  <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors z-10" />
                  <img src={img} alt={`Campus Life ${i + 1}`} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. STUDENT TESTIMONIALS (Trust Builder) */}
        <section className="py-24 px-6 bg-gray-50 border-t border-gray-100 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20 fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Hear From Our Students</h2>
              <p className="text-lg text-gray-500 font-light max-w-xl mx-auto">Real experiences from the people who call Horizon their second home.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 fade-up">
              {[
                {
                  name: 'Rahul Sharma',
                  course: 'B.Tech Computer Science',
                  quote: "The hackathon culture and 24/7 coding labs gave me the edge I needed for my internships. It's an environment where crazy ideas actually come to life.",
                  img: 'https://randomuser.me/api/portraits/men/32.jpg'
                },
                {
                  name: 'Priya Desai',
                  course: 'MBA Innovation',
                  quote: "Horizon's incubation cell helped me launch my startup right from the dorms. The mentors and peer network are genuinely incredible and always supportive.",
                  img: 'https://randomuser.me/api/portraits/women/44.jpg'
                },
                {
                  name: 'Aisha Khan',
                  course: 'B.Des Interaction Design',
                  quote: "The campus doesn't just look beautiful; the studios and creative spaces are open round-the-clock for us to collaborate, build, and fail safely.",
                  img: 'https://randomuser.me/api/portraits/women/68.jpg'
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white card-glow shadow-lg p-8 md:p-10 rounded-3xl border border-gray-200 relative pt-14 hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute -top-10 left-10">
                    <div className="relative">
                      <img src={testimonial.img} alt={testimonial.name} className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-xl" />
                      <div className="absolute inset-0 rounded-full border border-gray-100" />
                    </div>
                  </div>
                  <div className="text-yellow-500 mb-6 opacity-40">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-8 italic leading-relaxed text-lg">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">{testimonial.course}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA (Conversion) */}
        <section className="py-24 px-6 bg-white fade-up">
          <div className="max-w-6xl mx-auto bg-linear-to-br from-blue-950 via-blue-900 to-blue-950 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative glowing orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Experience Horizon Yourself</h2>
              <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Don't just take our word for it. Walk the campus, feel the dynamic energy, and picture your bright future here.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a href="https://www.google.com/maps/place/New+Horizon+College+of+Engineering/@12.9337241,77.6921207,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgID-u4CNAw!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHVAwep2MLG4_gQ0RfhRP6D8ts4pYiCmKpkAvgH-CMjSkXJjdLGm2-2nw0CrelU-cMiqPxoaEmENsGRWZ3DCREn0t-VBlMmhvr3D67kDMo_Ga5YFvdm180wEhE4T1YJVIhNx-mwSW7vm%3Dw114-h86-k-no!7i4000!8i3000!4m11!1m2!2m1!1shorizon+college!3m7!1s0x3bae13cb00000001:0xab10e26281718cc2!8m2!3d12.9337241!4d77.6921207!10e5!15sCg9ob3Jpem9uIGNvbGxlZ2VaESIPaG9yaXpvbiBjb2xsZWdlkgEHY29sbGVnZeABAA!16s%2Fm%2F04n2p7h?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D">
                  <button
                    className="w-full cursor-pointer sm:w-auto px-10 py-5 bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold rounded-xl transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(234,179,8,0.3)] flex items-center justify-center gap-3 text-lg">
                    Visit Campus <MapPin size={22} />
                  </button>
                </a>
                <button
                  onClick={() => setOpenModel(true)}
                  className="w-full cursor-pointer hover:scale-105 text-gray-200 sm:w-auto px-10 py-5 glass hover:text-white font-semibold rounded-xl transition-all border border-white/20 hover:bg-white/10 text-lg">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
