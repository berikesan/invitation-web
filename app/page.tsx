import Link from "next/link";

export default function HomePage() {
  const templates = [
    { id: "template-1", name: "Template 1", description: "Elegant Balinese wedding style" },
  ];

  return (
    <main className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-serif text-stone-800 mb-4">Invitation Templates</h1>
        <p className="text-sm text-stone-500 tracking-widest uppercase">berikesan.com/invitation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {templates.map((t) => (
          <Link
            key={t.id}
            href={`/${t.id}`}
            className="group bg-white rounded-2xl border border-stone-100 shadow-md p-8 flex flex-col gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-xs text-stone-400 uppercase tracking-widest font-bold">{t.id}</span>
            <h2 className="text-2xl font-serif text-stone-800 group-hover:text-[#8B5E3C] transition-colors">{t.name}</h2>
            <p className="text-sm text-stone-500">{t.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
