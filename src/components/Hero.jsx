import { ChevronDown } from 'lucide-react';
import heroCampus from '../assets/college.jpeg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${heroCampus})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1B1F3B]/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-32 pb-20 max-w-5xl mx-auto">
        <p className="text-[#C9A84C] text-sm tracking-widest font-semibold uppercase mb-4">
          Welcome to Horizon University
        </p>
        <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Shape Your Future.<br />Lead The World.
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          A world-class institution nurturing innovation, leadership, and excellence since 1987.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#programs"
            className="bg-[#C9A84C] text-[#1B1F3B] font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300"
          >
            Explore Programs
          </a>
          <a
            href="#campus-life"
            className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1F3B] transition-all duration-300 font-semibold"
          >
            Campus Tour
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C9A84C] animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} strokeWidth={2.5} />
      </a>
    </section>
  );
}
