import React, { useState, useEffect } from 'react';

const ResearchAreas = [
  { title: "Artificial Intelligence", desc: "Advancing neural architectures, deep learning paradigms, and human-computer interactions.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600" },
  { title: "Biotechnology", desc: "Pioneering genetic engineering, molecular diagnostics, and bioprocessing techniques.", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600" },
  { title: "Data Science", desc: "Driving insights through predictive analytics, big data processing, and statistical modeling.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" },
  { title: "Renewable Energy", desc: "Developing sustainable power systems, solar efficiency models, and smart grid tech.", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600" },
  { title: "Cybersecurity", desc: "Securing critical infrastructure, developing zero-trust frameworks, and cryptographic protocols.", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600" }
];

const OngoingProjects = [
  { title: "Quantum-Resistant Cryptography", desc: "Developing new encryption standards resilient to quantum computing attacks.", faculty: "Dr. Arvind Rao", status: "Ongoing", funding: "Funded by DST, Govt. of India", duration: "2023–2026" },
  { title: "AI-Driven Crop Disease Prediction", desc: "Utilizing drone imagery and machine learning to detect early-stage crop diseases.", faculty: "Dr. Meera Sharma", status: "Completed", funding: "Funded by ICAR", duration: "2021–2023" },
  { title: "Next-Gen Solid State Batteries", desc: "Researching high-capacity, safe energy storage solutions for electric vehicles.", faculty: "Dr. Vikram Singh", status: "Ongoing", funding: "Funded by SERB", duration: "2024–2027" }
];

const PublicationsList = [
  { id: 1, title: "Attention Mechanisms in Deep Reinforcement Learning", authors: "Rao, A., & Gupta, S.", venue: "NeurIPS 2023", year: "2023", citations: 45, abstract: "This paper introduces a novel attention mechanism that improves sample efficiency in deep reinforcement learning tasks by 30% compared to baseline models. The results indicate significant improvements across parallel multi-agent environments." },
  { id: 2, title: "CRISPR-Cas9 Mediated Gene Editing in Drought-Resistant Wheat", authors: "Sharma, M., et al.", venue: "Nature Biotechnology", year: "2024", citations: 12, abstract: "We demonstrate the application of CRISPR-Cas9 to knocking out specific genes in wheat varieties, resulting in significantly improved drought tolerance under greenhouse conditions. Crop yields were maintained even at 40% reduced water intake." },
  { id: 3, title: "Zero-Trust Architecture for IoT Networks", authors: "Patel, R., & Kumar, V.", venue: "IEEE Transactions on Information Forensics and Security", year: "2023", citations: 28, abstract: "A robust zero-trust framework designed specifically for resource-constrained IoT devices, mitigating common attack vectors such as botnets and unauthorized data access securely at the edge level." },
  { id: 4, title: "Predictive Modeling of Urban Heat Islands", authors: "Desai, L.", venue: "Journal Climate", year: "2024", citations: 5, abstract: "Utilizing high-resolution satellite data and machine learning regressors to predict the intensity and span of urban heat islands across major metropolitan areas, aiding in climate-resilient urban planning and infrastructure development." }
];

const LabsList = [
  { name: "Artificial Intelligence Lab", desc: "Dedicated to deep learning, robotics, and natural language processing research.", equipment: "NVIDIA A100 GPUs, 40TB NVMe storage", capacity: "24 workstations", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600" },
  { name: "Robotics & Automation Lab", desc: "Focuses on autonomous systems, drone technology, and industrial automation.", equipment: "6-axis robotic arms, Vicon motion capture", capacity: "15 workstations", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600" },
  { name: "Biomedical Engineering Lab", desc: "Conducts advanced research in tissue engineering and medical diagnostics.", equipment: "Next-gen sequencers, Class II biosafety cabinets", capacity: "20 workstations", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600" }
];

const Collaborations = [
  { name: "Infosys", domain: "infosys.com", desc: "Joint research in AI and cloud computing" },
  { name: "TCS", domain: "tcs.com", desc: "Collaborating on quantum systems" },
  { name: "Microsoft", domain: "microsoft.com", desc: "Partnering for accessibility tech" },
  { name: "IBM", domain: "ibm.com", desc: "Enterprise blockchain solutions" },
  { name: "DRDO", domain: "drdo.gov.in", desc: "Defense & materials research", isTextFallback: true }
];

const Stats = [
  { label: "Publications", value: "100+" },
  { label: "Active Projects", value: "20+" },
  { label: "Research Labs", value: "15+" },
  { label: "Faculty Researchers", value: "30+" }
];

const FacultyList = [
  { name: "Dr. Arvind Rao", title: "Professor of AI", hIndex: 34, spec: "Deep Learning, NLP", image: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Dr. Meera Sharma", title: "Associate Professor", hIndex: 28, spec: "Genetic Engineering", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Dr. Vikram Singh", title: "Professor of Energy", hIndex: 42, spec: "Renewable Systems", image: "https://randomuser.me/api/portraits/men/32.jpg" }
];

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative animate-modal-in border border-[#C9A84C]/20" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors bg-slate-50 hover:bg-red-50 rounded-full p-1.5 active:scale-95">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <h3 className="text-2xl font-bold text-slate-900 mb-4 pr-6">{title}</h3>
        <div className="text-slate-600 leading-relaxed text-base">
          {content}
        </div>
        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
          <button onClick={onClose} className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all active:scale-95 shadow-md shadow-slate-900/10">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Toast = ({ message, isVisible }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 backdrop-blur-sm border border-slate-700 text-white px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-3 animate-slide-up">
      <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
      <span className="font-medium tracking-wide text-sm">{message}</span>
    </div>
  );
};

function PublicationItem({ pub, onOpenModal }) {
  return (
    <div className="group border-l-[3px] border-[#C9A84C] pl-6 py-5 hover:bg-slate-50 transition-colors duration-300 rounded-r-xl">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h4 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-[#C9A84C] transition-colors">{pub.title}</h4>
          <p className="text-slate-600 mt-1.5 text-sm">
            {pub.authors} &bull; <span className="italic">{pub.venue}</span> ({pub.year})
          </p>
        </div>
        <span className="shrink-0 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100/80 text-slate-700 border border-slate-200 shadow-sm group-hover:shadow-md group-hover:border-[#C9A84C]/30 transition-all duration-300">
          Cited {pub.citations} times
        </span>
      </div>
      <button
        onClick={() => onOpenModal(pub.title, pub.abstract)}
        className="text-[#C9A84C] cursor-pointer hover:text-[#b08d38] text-sm font-bold mt-4 focus:outline-none transition-all active:scale-95 flex items-center gap-1.5"
      >
        Read Abstract <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
      </button>
    </div>
  );
}

export default function Research() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', content: '' });
  const [toastMsg, setToastMsg] = useState('');
  const [submitted, setSubmitted] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openModal = (title, content) => {
    setModalData({ title, content });
    setModalOpen(true);
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3500);
  };

  const handleScrollToPublications = () => {
    const pubSection = document.getElementById('publications-section');
    if (pubSection) {
      pubSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreOpportunities = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast("Redirecting to Research Opportunities...");
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#C9A84C] selection:text-white pb-20 bg-slate-50">
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalData.title} content={modalData.content} />
      <Toast message={toastMsg} isVisible={!!toastMsg} />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 bg-[#0B1120] overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 fade-up">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Research & Innovation <br className="hidden md:block" /> at Horizon
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Pioneering technological breakthroughs and shaping the future through rigorous academic inquiry, applied science, and strategic industry partnerships.
          </p>
        </div>
      </section>

      {/* 2. RESEARCH AREAS */}
      <section className="py-24 px-6 bg-slate-50 fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest text-[#C9A84C] uppercase mb-3 text-center">Core Disciplines</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Research Areas</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ResearchAreas.map((area, idx) => (
              <div key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-[#C9A84C]/50 transition-all duration-300 flex flex-col cursor-pointer" onClick={() => openModal(`About ${area.title}`, `Detailed exploration of ${area.title}. ${area.desc} We welcome collaborations and funding proposals in this domain.`)}>
                <div className="h-36 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0B1120]/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                  <img src={area.image} alt={area.title} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out" />
                </div>
                <div className="p-8 flex flex-col grow relative">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#C9A84C] transition-colors">{area.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm grow mb-6">{area.desc}</p>
                  <div className="text-slate-900 font-bold text-sm flex items-center opacity-70 group-hover:opacity-100 group-hover:text-[#C9A84C] transition-all mt-auto uppercase tracking-wider">
                    Explore Area <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ONGOING PROJECTS */}
      <section className="py-24 px-6 bg-white border-y border-slate-100 fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl mx-auto text-center">
            <h2 className="text-sm font-bold tracking-widest text-[#C9A84C] uppercase mb-3">Proof of Work</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ongoing Projects</h3>
            <p className="text-slate-600 text-lg">Real-world solutions being developed right now by our faculty and research scholars.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OngoingProjects.map((proj, idx) => (
              <div key={idx} className="group shadow-lg bg-slate-50 border border-slate-200 p-8 rounded-xl flex flex-col hover:shadow-2xl hover:scale-[1.02] hover:bg-white hover:border-slate-300 transition-all duration-300 cursor-pointer" onClick={() => openModal(proj.title, `More details regarding the project "${proj.title}" led by ${proj.faculty}. This project focuses on ${proj.desc.toLowerCase()}`)}>
                <div className="flex justify-between items-start mb-6 gap-2 border-b border-slate-200 pb-5">
                  <h4 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#C9A84C] transition-colors">{proj.title}</h4>
                  <span className={`shrink-0 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm ${proj.status === 'Ongoing' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-blue-100 text-blue-800 border border-blue-200'}`}>
                    {proj.status === 'Ongoing' && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>}
                    {proj.status}
                  </span>
                </div>
                <p className="text-slate-600 mb-8 text-sm leading-relaxed grow">{proj.desc}</p>
                <div className="space-y-4 bg-white p-5 rounded-lg border border-slate-100 shadow-sm group-hover:border-slate-200 transition-colors">
                  <div className="flex items-center text-sm border-b border-slate-50 pb-2">
                    <span className="w-20 font-bold text-slate-800">Faculty:</span>
                    <span className="text-slate-600 text-sm">{proj.faculty}</span>
                  </div>
                  <div className="flex items-center text-sm border-b border-slate-50 pb-2">
                    <span className="w-20 font-bold text-slate-800">Funding:</span>
                    <span className="text-slate-600 text-sm font-medium">{proj.funding}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-20 font-bold text-slate-800">Timeline:</span>
                    <span className="text-slate-600 text-sm">{proj.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PUBLICATIONS */}
      <section id="publications-section" className="py-24 px-6 bg-slate-50 fade-up scroll-mt-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold tracking-widest text-[#C9A84C] uppercase mb-3">Credibility Layer</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Recent Publications</h3>
            <p className="text-slate-600 text-lg">Our researchers consistently publish in top-tier global venues.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow">
            {PublicationsList.map((pub, idx) => (
              <div key={pub.id} className={idx !== PublicationsList.length - 1 ? "border-b border-slate-100 mb-4" : ""}>
                <PublicationItem pub={pub} onOpenModal={openModal} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LABS & FACILITIES */}
      <section className="py-24 px-6 bg-white border-t border-slate-200 fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest text-[#C9A84C] uppercase mb-3">Infrastructure</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Labs & Facilities</h3>
            <p className="text-slate-600 text-lg">Equipped with industry-standard machinery to facilitate cutting-edge exploration.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LabsList.map((lab, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="h-56 overflow-hidden bg-slate-100 relative">
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/80 to-transparent z-10 pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <img src={lab.image} alt={lab.name} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out" />
                  <div className="absolute bottom-4 left-6 right-6 z-20 pointer-events-none">
                    <h4 className="text-xl font-bold text-white drop-shadow-md">{lab.name}</h4>
                  </div>
                </div>
                <div className="p-8 relative">
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">{lab.desc}</p>
                  <div className="space-y-3 text-sm text-slate-500 mb-8 border-t border-slate-100 pt-6">
                    <p className="flex justify-between items-center"><strong className="text-slate-900">Capacity:</strong> <span className="bg-slate-100 px-2.5 py-1 rounded font-semibold text-slate-700">{lab.capacity}</span></p>
                    <p className="leading-relaxed"><strong className="text-slate-900 block mb-1">Key Equipment:</strong> {lab.equipment}</p>
                  </div>
                  <button
                    onClick={() => {
                      showToast(`Request for access to ${lab.name} successfully submitted.`);
                      setSubmitted((prev) => ({
                        ...prev,
                        [idx]: true,
                      }));
                    }}
                    className={`text-sm cursor-pointer font-bold border-2 w-full py-3 rounded-lg transition-colors active:scale-95 shadow-sm ${submitted[idx]
                      ? 'bg-green-700 text-white border-green-700'
                      : 'text-slate-900 border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900'
                      }`}>
                    {submitted[idx] ? 'Submitted' : 'Request Access'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRY COLLABORATIONS */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200 fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-widest text-[#C9A84C] uppercase mb-3">Industry Relevance</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">Strategic Collaborations</h3>

          <div className="flex flex-wrap justify-center items-start gap-12 lg:gap-20">
            {Collaborations.map((collab, idx) => (
              <div key={idx} className="flex flex-col items-center group w-36 cursor-pointer" onClick={() => openModal(`Partnership: ${collab.name}`, collab.desc)}>
                {collab.isTextFallback ? (
                  <div className="h-12 flex items-center justify-center font-extrabold text-2xl tracking-tight text-slate-400 group-hover:text-slate-800 transition-all duration-300 mb-4 select-none group-hover:scale-110">
                    {collab.name}
                  </div>
                ) : (
                  <img
                    src={`https://logo.clearbit.com/${collab.domain}`}
                    alt={collab.name}
                    className="h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 mb-4 drop-shadow-sm group-hover:drop-shadow-md"
                    onError={(e) => {
                      e.target.outerHTML = `<div class="h-12 flex items-center justify-center font-extrabold text-2xl text-slate-400 group-hover:text-slate-800 group-hover:scale-110 transition-all duration-300 mb-4">${collab.name}</div>`
                    }}
                  />
                )}
                <p className="text-xs text-slate-500 font-medium leading-relaxed group-hover:text-[#C9A84C] transition-colors">{collab.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RESEARCH STATS */}
      <section className="py-20 px-6 bg-[#0B1120] text-center fade-up relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {Stats.map((stat, idx) => (
              <div key={idx} className="group cursor-default">
                <div className="text-4xl md:text-6xl font-extrabold text-[#C9A84C] mb-3 group-hover:scale-110 group-hover:text-white transition-all duration-300 drop-shadow-[0_0_15px_rgba(201,168,76,0.2)]">{stat.value}</div>
                <div className="text-sm text-slate-300 font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FACULTY RESEARCHERS */}
      <section className="py-24 px-6 bg-white border-t border-slate-200 fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-widest text-[#C9A84C] uppercase mb-3">The Human Element</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">Faculty Researchers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="group bg-white border border-slate-200 p-8 rounded-xl flex flex-col items-center hover:border-[#C9A84C]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/5 rounded-bl-[100px] -z-10 group-hover:bg-[#C9A84C]/10 transition-colors"></div>
              <div className="relative mb-6">
                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Dr. Arvind Rao" className="w-28 h-28 rounded-full object-cover ring-4 ring-slate-50 group-hover:ring-[#C9A84C]/20 group-hover:scale-105 transition-all duration-500 shadow-sm" />
                <div className="absolute -bottom-2 -right-2 bg-slate-900 border-2 border-white px-2.5 py-1 rounded-md shadow-md text-white text-xs font-bold z-10">
                  34 <span className="font-normal opacity-80">h-idx</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#C9A84C] transition-colors">Dr. Arvind Rao</h4>
              <p className="text-[#C9A84C] font-bold text-sm mb-6 bg-[#C9A84C]/10 px-3 py-1 rounded-full">Professor of AI</p>

              <p className="text-sm w-full text-slate-600 mb-8 border-t border-slate-100 pt-6">
                <span className="font-bold text-slate-800 block mb-1">Focus Areas</span>
                Deep Learning, NLP
              </p>

              <button
                onClick={handleScrollToPublications}
                className="mt-auto cursor-pointer text-sm w-full font-bold text-slate-800 bg-slate-50 border border-slate-200 py-2.5 rounded-lg group-hover:bg-[#C9A84C] group-hover:text-white group-hover:border-[#C9A84C] transition-all duration-300 active:scale-95 shadow-sm uppercase tracking-wide flex justify-center items-center gap-2"
              >
                View Publications <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>

            <div className="group bg-white border border-slate-200 p-8 rounded-xl flex flex-col items-center hover:border-[#C9A84C]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/5 rounded-bl-[100px] -z-10 group-hover:bg-[#C9A84C]/10 transition-colors"></div>
              <div className="relative mb-6">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dr. Meera Sharma" className="w-28 h-28 rounded-full object-cover ring-4 ring-slate-50 group-hover:ring-[#C9A84C]/20 group-hover:scale-105 transition-all duration-500 shadow-sm" />
                <div className="absolute -bottom-2 -right-2 bg-slate-900 border-2 border-white px-2.5 py-1 rounded-md shadow-md text-white text-xs font-bold z-10">
                  28 <span className="font-normal opacity-80">h-idx</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#C9A84C] transition-colors">Dr. Meera Sharma</h4>
              <p className="text-[#C9A84C] font-bold text-sm mb-6 bg-[#C9A84C]/10 px-3 py-1 rounded-full">Associate Professor</p>

              <p className="text-sm w-full text-slate-600 mb-8 border-t border-slate-100 pt-6">
                <span className="font-bold text-slate-800 block mb-1">Focus Areas</span>
                Genetic Engineering
              </p>

              <button
                onClick={handleScrollToPublications}
                className="mt-auto cursor-pointer text-sm w-full font-bold text-slate-800 bg-slate-50 border border-slate-200 py-2.5 rounded-lg group-hover:bg-[#C9A84C] group-hover:text-white group-hover:border-[#C9A84C] transition-all duration-300 active:scale-95 shadow-sm uppercase tracking-wide flex justify-center items-center gap-2"
              >
                View Publications <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>

            <div className="group bg-white border border-slate-200 p-8 rounded-xl flex flex-col items-center hover:border-[#C9A84C]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/5 rounded-bl-[100px] -z-10 group-hover:bg-[#C9A84C]/10 transition-colors"></div>
              <div className="relative mb-6">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. Vikram Singh" className="w-28 h-28 rounded-full object-cover ring-4 ring-slate-50 group-hover:ring-[#C9A84C]/20 group-hover:scale-105 transition-all duration-500 shadow-sm" />
                <div className="absolute -bottom-2 -right-2 bg-slate-900 border-2 border-white px-2.5 py-1 rounded-md shadow-md text-white text-xs font-bold z-10">
                  42 <span className="font-normal opacity-80">h-idx</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#C9A84C] transition-colors">Dr. Vikram Singh</h4>
              <p className="text-[#C9A84C] font-bold text-sm mb-6 bg-[#C9A84C]/10 px-3 py-1 rounded-full">Professor of Energy</p>

              <p className="text-sm w-full text-slate-600 mb-8 border-t border-slate-100 pt-6">
                <span className="font-bold text-slate-800 block mb-1">Focus Areas</span>
                Renewable Systems
              </p>

              <button
                onClick={handleScrollToPublications}
                className="mt-auto cursor-pointer text-sm w-full font-bold text-slate-800 bg-slate-50 border border-slate-200 py-2.5 rounded-lg group-hover:bg-[#C9A84C] group-hover:text-white group-hover:border-[#C9A84C] transition-all duration-300 active:scale-95 shadow-sm uppercase tracking-wide flex justify-center items-center gap-2"
              >
                View Publications <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200 text-center fade-up">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Collaborate With Us</h2>
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            Partner with Horizon University to drive impactful innovation, access state-of-the-art facilities, and work alongside leading academic researchers.
          </p>
          <button
            onClick={handleExploreOpportunities}
            className="group bg-[#0B1120] cursor-pointer hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all active:scale-95 shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto"
          >
            Explore Research Opportunities
            <svg className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>
      </section>

    </div>
  );
}
