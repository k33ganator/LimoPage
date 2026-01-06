"use client";
import { useState } from "react";

export default function Reserve() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    pickup: "",
    dropoff: "",
    packageType: "",
  });

  const sendReservation = async (e) => {
    e.preventDefault();

    await fetch("/api/reserve", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Reservation Sent! Our team will confirm with you shortly.");
  };

  return (
    <div className="pt-32 px-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Make a Reservation</h1>

      <form onSubmit={sendReservation} className="space-y-6">
        {Object.keys(form).map((field) => (
          <input
            key={field}
            required
            type="text"
            placeholder={field.toUpperCase()}
            className="w-full p-4 rounded-xl bg-white text-black"
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          />
        ))}

        <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition">
          Submit Reservation
        </button>
      </form>
    </div>
  );
}
