export default function Pricing() {
  const packages = [
    {
      title: "Limo Rental",
      price: "$95/hr",
      desc: "White Luxurious Limo • Chauffeur",
    },
  ];

  return (
    <div className="pt-32 px-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Pricing</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {packages.map((p) => (
          <div key={p.title} className="bg-white text-black rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold">{p.title}</h2>
            <p className="text-5xl font-extrabold mt-4">{p.price}</p>
            <p className="mt-4">{p.desc}</p>
            <a
              href="/reserve"
              className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
