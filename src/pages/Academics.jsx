import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Programs from '../components/Programs';
import { useApplyModal } from '../context/ApplyModalContext';
import { Briefcase, Users, GraduationCap } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Academics() {
  const { openApply } = useApplyModal();

  return (
    <>
      <ScrollToTop />
      
      {/* 1. HERO SECTION */}
      <section className="bg-gray-50 pt-28 pb-16 px-6 relative border-b border-gray-100 overflow-hidden">
        {/* subtle background glow */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 ">
          <h1 className="text-5xl md:text-6xl font-black text-blue-950 mb-6 tracking-tight">
            Academic Excellence at <span className="gradient-text">Horizon</span>
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Delivering industry-ready education, pioneering research, and a diverse culture of continuous innovation.
          </p>

          {/* 3 Stat Highlights */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-950/5 border border-blue-950/10 flex items-center justify-center text-yellow-600">
                <Briefcase size={22} />
              </div>
              <div className="text-left">
                <p className="font-bold text-blue-950 text-xl leading-none mb-1">95%</p>
                <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Placement Rate</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-950/5 border border-blue-950/10 flex items-center justify-center text-yellow-600">
                <Users size={22} />
              </div>
              <div className="text-left">
                <p className="font-bold text-blue-950 text-xl leading-none mb-1">40+</p>
                <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Expert Faculty</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-950/5 border border-blue-950/10 flex items-center justify-center text-yellow-600">
                <GraduationCap size={22} />
              </div>
              <div className="text-left">
                <p className="font-bold text-blue-950 text-xl leading-none mb-1">20+</p>
                <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Programs Offered</p>
              </div>
            </div>
          </div>

          {/* Accreditations Row */}
          <div className="flex flex-wrap justify-center gap-3">
            {['NAAC A++ Accredited', 'NBA Approved', 'NIRF Ranked', 'UGC Recognized'].map((badge) => (
              <span key={badge} className="bg-blue-950 border border-yellow-500/50 text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm shadow-yellow-500/10">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Programs
        onApply={openApply}
        showAllPrograms={true}
        enableDepartmentNav={true}
        isAcademicsPage={true}
      />
    </>
  );
}
