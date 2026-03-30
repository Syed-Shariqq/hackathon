import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDepartmentBySlug } from '../data/academicsData';

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-[#C9A84C]/25 bg-white/5 backdrop-blur-sm px-4 py-3">
      <p className="text-[#C9A84C] font-black text-xl">{value}</p>
      <p className="text-black/60 text-xs mt-0.5">{label}</p>
    </div>
  );
}

function Tag({ text }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#C9A84C]/30 bg-[#1B1F3B] px-3 py-1 text-white text-xs">
      {text}
    </span>
  );
}

function FacultyCard({ member, index }) {
  const initials = member.name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const avatarUrl = member.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0D1B2A&color=C9A84C&size=256`;

  const bio = member.bio || `Dedicated to advancing research in ${member.specialization} and guiding students to achieve both academic and practical excellence.`;

  const isImageLeft = index % 2 === 0;

  return (
    <div className="rounded-3xl border border-[#C9A84C]/30  p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300">
      <div className={`flex flex-col md:flex-row items-center gap-8 ${isImageLeft ? '' : 'md:flex-row-reverse'}`}>
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[#C9A84C]/50 bg-[#0D1B2A] shrink-0 flex items-center justify-center shadow-lg">
          <img
            src={avatarUrl}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const p = e.currentTarget.parentElement;
              if (p) p.textContent = initials;
            }}
          />
        </div>
        <div className={`flex-1 text-center ${isImageLeft ? 'md:text-left' : 'md:text-right'} w-full`}>
          <h4 className="text-black text-2xl font-bold">{member.name}</h4>
          <p className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider mt-1">{member.designation}</p>
          
          <div className={`mt-4 flex flex-col gap-1.5 ${isImageLeft ? 'items-center md:items-start' : 'items-center md:items-end'}`}>
            <p className="text-black/80 text-sm">
              <span className="text-black/40 uppercase text-xs font-bold tracking-wider mr-2">Specialization:</span> 
              {member.specialization}
            </p>
            <p className="text-black/80 text-sm">
              <span className="text-black/40 uppercase text-xs font-bold tracking-wider mr-2">Qualification:</span> 
              {member.qualification}
            </p>
          </div>

          <div className={`mt-5 w-full max-w-2xl ${isImageLeft ? 'mx-auto md:ml-0 md:mr-auto' : 'mx-auto md:mr-0 md:ml-auto'}`}>
            <p className={`text-black/70 text-sm leading-relaxed border-[#C9A84C]/50 py-1 italic ${isImageLeft ? 'border-l-2 pl-4 text-left' : 'border-r-2 pr-4 text-right'}`}>
              "{bio}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AcademicsDepartment() {
  const { department } = useParams();

  const dept = useMemo(() => getDepartmentBySlug(department), [department]);

  if (!dept) {
    return (
      <main className="bg-[#F9F9FB] min-h-screen pt-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[#1B1F3B] text-3xl font-bold mb-3">Department not found</h1>
          <p className="text-gray-500">Try selecting a program from the Academics page.</p>
          <div className="mt-6">
            <Link to="/academics" className="text-[#C9A84C] font-bold hover:underline">
              Back to Academics
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const hodAvatarUrl = dept.hod.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(dept.hod.name)}&background=0D1B2A&color=C9A84C&size=256`;

  return (
    <main className="bg-[#F9F9FB] min-h-screen pt-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* A. Hero */}
        <section className="rounded-3xl border border-[#C9A84C]/25 bg-linear-to-r from-[#C9A84C]/20 via-white/3 to-[#0D1B2A] p-6 md:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">
                  Department
                </p>
              </div>

              <h1 className="text-black text-4xl md:text-5xl font-black mb-3">
                {dept.name}
              </h1>
              <p className="text-black/90 text-sm md:text-base max-w-2xl">
                {dept.tagline}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
              <StatCard value={`${dept.stats.placementPct}%`} label="Placement" />
              <StatCard value={dept.stats.avgSalary} label="Avg Salary" />
              <StatCard value={`${dept.stats.studentsEnrolled}+`} label="Students" />
              <StatCard value={dept.stats.researchPapers} label="Research Papers" />
            </div>
          </div>
        </section>

        {/* B. HOD */}
        <section className="mt-10">
          <div className="max-w-5xl mx-auto rounded-3xl border border-[#C9A84C]/25 bg-[#1B1F3B] shadow-sm p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl overflow-hidden border border-[#C9A84C]/30 bg-[#0D1B2A] flex items-center justify-center shrink-0">
                <img
                  src={hodAvatarUrl}
                  alt={dept.hod.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">
                  Head of Department
                </p>
                <h2 className="text-white text-2xl md:text-3xl font-black mt-2 mb-2">
                  {`Dr. ${dept.hod.name.replace(/^Dr\\.\\s*/i, '')}`}
                </h2>
                <p className="text-[#C9A84C] text-sm font-semibold mb-3">{dept.hod.qualification}</p>

                <div className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
                  {dept.hod.bio}
                </div>

                <div className="mt-5 border-l-2 border-[#C9A84C] pl-4">
                  <p className="italic text-white/80 text-sm leading-relaxed">
                    {dept.hod.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* C. Faculty */}
        <section className="mt-16 max-w-5xl mx-auto">
          <div className="mb-8 text-center md:text-left">
            <p className="text-[#C9A84C] text-xs tracking-widest font-bold uppercase mb-2">
              Faculty
            </p>
            <h3 className="text-[#1B1F3B] text-3xl font-black">Meet Our Mentors</h3>
          </div>

          <div className="flex flex-col gap-8">
            {dept.faculty.map((member, index) => (
              <FacultyCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </section>

        {/* D. Highlights / Stats */}
        <section className="mt-10">
          <div className="mb-6">
            <p className="text-[#C9A84C] text-xs tracking-widest font-bold uppercase mb-2">
              Department Highlights
            </p>
            <h3 className="text-[#1B1F3B] text-3xl font-black">Performance Snapshot</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard value={`${dept.stats.placementPct}%`} label="Placement %" />
            <StatCard value={dept.stats.avgSalary} label="Avg Salary" />
            <StatCard value={`${dept.stats.studentsEnrolled}+`} label="Students Enrolled" />
            <StatCard value={dept.stats.researchPapers} label="Research Papers" />
          </div>
        </section>

        {/* E. Curriculum / Subjects */}
        <section className="mt-10 pb-16">
          <div className="mb-6 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-[#C9A84C] text-xs tracking-widest font-bold uppercase mb-2">
                Curriculum
              </p>
              <h3 className="text-[#1B1F3B] text-3xl font-black">Core Subjects</h3>
            </div>
            <div>
              <Link to="/academics" className="text-[#C9A84C] font-bold hover:underline">
                ← Back to Academics
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {dept.subjects.map((s) => (
              <Tag key={s} text={s} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

