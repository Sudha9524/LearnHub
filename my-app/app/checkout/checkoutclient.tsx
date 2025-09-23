// app/checkout/CheckoutClient.tsx
"use client";

import { useState } from "react";

interface Props {
  courseId?: string;
  price?: string;
  title: string;
}

export default function CheckoutClient({ courseId, price, title }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !cardNumber || !expiry || !cvc) {
      return setError("Please fill in all fields.");
    }

    setLoading(true);

    // fake payment
    const res = await fetch("/api/mock-pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, cardNumber, expiry, cvc, courseId }),
    });

    const data = await res.json();

    if (data.success) {
      await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId }),
      });

      window.location.href = "/checkout/success";
    } else {
      setError("Payment failed");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-2">Checkout</h1>
      <p className="mb-4 text-gray-600">
        You are enrolling in <b>{title}</b> for ₹{price}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Card Number"
          className="w-full p-2 border rounded"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="MM/YY"
            className="w-1/2 p-2 border rounded"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
          <input
            type="text"
            placeholder="CVC"
            className="w-1/2 p-2 border rounded"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Processing..." : "Purchase"}
        </button>
      </form>
    </div>
  );
}
