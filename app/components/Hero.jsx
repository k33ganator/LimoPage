export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <img 
        src="/hero.jpg" 
        alt="Top Hat Limo Services" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 bg-black bg-opacity-50 px-6 py-10 rounded-xl text-center">
        <h1 className="text-white text-5xl font-bold drop-shadow-lg">
          Top Hat Limo Services
        </h1>
        <p className="text-white text-lg mt-4 drop-shadow-lg">
          Luxury Rides • Professional Chauffeurs • 24/7 Reservations
        </p>

        <a
          href="/reserve"
          className="inline-block mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Book Your Ride
        </a>
      </div>

      <div className="absolute inset-0 bg-black opacity-40"></div>
    </section>
  );
}
