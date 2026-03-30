import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, Lightbulb, MonitorCheck, HelpCircle, ArrowRight } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Admissions Inquiry',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name cannot be empty.';
    if (!formData.email) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }
    if (formData.message.trim().length < 20) {
      tempErrors.message = 'Message must be at least 20 characters long.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      setIsSuccess(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change if they start typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Google Map coords from Campus.jsx
  const mapUrl = `https://maps.google.com/maps?q=12.9337241,77.6921207&t=m&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <ScrollToTop />
      <div className="bg-white min-h-screen font-sans flex flex-col pt-16">
        {/* Thin Announcement Bar */}
        <div className="bg-blue-950 text-yellow-500 py-2.5 text-center px-4 w-full shadow-md z-40">
          <p className="text-sm font-semibold tracking-wide">
            Applications for 2026–27 are now open &middot; Deadline: May 31, 2026
          </p>
        </div>

        {/* 1. HERO SECTION */}
        <section className="bg-gray-50 pt-20 pb-16 px-6 relative border-y border-gray-100 overflow-hidden">
          {/* subtle background glow */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10 fade-up">
            <h1 className="text-5xl md:text-6xl font-black text-blue-950 mb-6 tracking-tight">
              Get in Touch with <span className="gradient-text">Horizon</span>
            </h1>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              We're here to help you with admissions, academics, and campus life. Reach out and our team will get back to you promptly.
            </p>
          </div>
        </section>

        {/* 2. CONTACT INFO CARDS */}
        <section className="py-16 px-6 -mt-10 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-up">
              {[
                { icon: MapPin, label: 'Address', value: '123 Horizon Avenue, Tech District' },
                { icon: Phone, label: 'Phone', value: '+1 (800) 555-0199' },
                { icon: Mail, label: 'Email', value: 'hello@horizon.edu' },
                { icon: Clock, label: 'Office Hours', value: 'Mon-Fri, 9:00 AM - 5:00 PM' }
              ].map((info, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col items-center text-center">
                  <div className="absolute inset-0 bg-linear-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-5 text-yellow-600 border border-gray-100 group-hover:bg-yellow-500/10 transition-colors">
                    <info.icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.label}</h3>
                  <p className="text-gray-600 font-medium">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAIN LAYOUT: Form + Map & Categories */}
        <section className="py-12 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* 3. CONTACT FORM */}
            <div className="lg:col-span-7 fade-up">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
                <h2 className="text-3xl font-bold text-blue-950 mb-2">Send us a Message</h2>
                <p className="text-gray-500 mb-8 font-light">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                {isSuccess && (
                  <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl flex items-center gap-3 animate-fade-in shadow-sm">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <p className="font-medium">Thank you! Your message has been successfully sent. We'll be in touch shortly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        className={`px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-yellow-500 focus:ring-yellow-500/20'} bg-gray-50 hover:bg-gray-100/50 focus:bg-white outline-none transition-all focus:ring-4`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1.5 font-medium animate-fade-in">{errors.name}</p>}
                    </div>

                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        className={`px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-yellow-500 focus:ring-yellow-500/20'} bg-gray-50 hover:bg-gray-100/50 focus:bg-white outline-none transition-all focus:ring-4`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1.5 font-medium animate-fade-in">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <div className="relative">
                      <select 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100/50 focus:bg-white outline-none transition-all focus:ring-4 focus:ring-yellow-500/20 focus:border-yellow-500 appearance-none font-medium text-gray-800"
                      >
                        <option value="Admissions Inquiry">Admissions Inquiry</option>
                        <option value="Academic Support">Academic Support</option>
                        <option value="Technical Issue">Technical Issue</option>
                        <option value="Campus Tour">Campus Tour</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-yellow-500 focus:ring-yellow-500/20'} bg-gray-50 hover:bg-gray-100/50 focus:bg-white outline-none transition-all focus:ring-4 resize-none`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1.5 font-medium animate-fade-in">{errors.message}</p>}
                    <span className="text-xs text-gray-400 mt-2 text-right">Minimum 20 characters</span>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full sm:w-auto px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold rounded-xl transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(234,179,8,0.3)] flex items-center justify-center gap-3 shadow-lg"
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </div>

            {/* MAP & SUPPORT CATEGORIES */}
            <div className="lg:col-span-5 space-y-12 fade-up">
              
              {/* 4. GOOGLE MAP EMBED (Styled exactly as Campus.jsx) */}
              <div>
                <h3 className="text-xl font-bold text-blue-950 mb-6 flex items-center gap-2">
                   <MapPin className="text-yellow-500" /> Find Us Here
                </h3>
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-black/80 aspect-square md:aspect-video w-full bg-blue-900 group">
                  <iframe
                    title="Interactive Campus Map"
                    src={mapUrl}
                    className="w-full h-full border-0 filter contrast-125 saturate-110"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 border-inset border-[6px] border-blue-950/20 rounded-3xl pointer-events-none" />
                </div>
              </div>

              {/* 5. SUPPORT CATEGORIES */}
              <div>
                <h3 className="text-xl font-bold text-blue-950 mb-6 flex items-center gap-2">
                   <HelpCircle className="text-yellow-500" /> Quick Support
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Lightbulb, title: 'Admissions Support', desc: 'Queries related to applications and intake.', email: 'admissions@horizon.edu' },
                    { icon: MonitorCheck, title: 'Academic Queries', desc: 'Course details, faculty, and departments.', email: 'academics@horizon.edu' },
                    { icon: HelpCircle, title: 'Technical Support', desc: 'Student portal login and IT issues.', email: 'tech@horizon.edu' }
                  ].map((cat, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex items-start gap-4 hover:border-yellow-500/30 transition-colors cursor-pointer group">
                      <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-950 shrink-0 border border-gray-100 group-hover:scale-110 transition-transform">
                        <cat.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{cat.title}</h4>
                        <p className="text-sm text-gray-500 mb-2 mt-0.5 leading-relaxed">{cat.desc}</p>
                        <a href={`mailto:${cat.email}`} className="text-sm font-bold text-yellow-600 hover:text-yellow-700 flex items-center gap-1 transition-colors">
                          {cat.email} <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 6. FINAL CTA (Trust) */}
        <section className="py-20 px-6 bg-linear-to-b from-white to-gray-50 border-t border-gray-100 fade-up">
          <div className="max-w-4xl mx-auto rounded-[3rem] bg-blue-950 p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
            {/* abstract shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-yellow-500">
                <Clock size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">We're Always Here For You</h2>
              <p className="text-lg text-blue-200 font-light max-w-2xl text-center">
                Whether you're a prospective student or an alumnus, our team is dedicated to providing prompt assistance. <strong className="text-yellow-500 font-medium">We usually respond within 24 hours.</strong>
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
