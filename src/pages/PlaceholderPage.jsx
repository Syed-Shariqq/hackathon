export default function PlaceholderPage({ title, description }) {
  return (
    <main className="min-h-[60vh] pt-28 pb-16 px-6 bg-[#F9F9FB]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-3">Horizon University</p>
        <h1 className="text-[#1B1F3B] text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-500 text-lg">{description}</p>
      </div>
    </main>
  );
}
