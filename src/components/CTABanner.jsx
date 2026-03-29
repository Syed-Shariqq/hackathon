export default function CTABanner({ onApply }) {
  return (
    <section id="cta" className="bg-linear-to-r from-[#C9A84C] to-[#E8C96A] py-20 px-6 text-center">
      <h2 className="text-[#1B1F3B] text-4xl font-black mb-4">Your Journey Starts Here</h2>
      <p className="text-[#1B1F3B]/70 text-lg mb-10">
        Applications open for 2025-26. Limited seats available.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => onApply?.()}
          className="bg-[#1B1F3B] text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          Apply Now
        </button>
        <a
          href="#"
          className="border-2 border-[#1B1F3B] text-[#1B1F3B] px-10 py-4 rounded-full font-bold hover:bg-[#1B1F3B] hover:text-white transition-all duration-300"
        >
          Download Brochure
        </a>
      </div>
    </section>
  );
}
