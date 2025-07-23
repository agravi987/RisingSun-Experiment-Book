// components/Hero.jsx
"use client";

import { useRouter } from "next/navigation";
import "@/styles/Hero.css";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="hero">
      {/* <div className="image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1581093458790-88b6fa1c00a1"
          alt="Experiment Illustration"
          className="hero-image"
        />
      </div> */}
      <h1 className="hero-title">RisingSun Experiment Book</h1>
      <p className="hero-subtitle">Track. Manage. Innovate.</p>

      <div className="hero-actions">
        <button
          className="hero-btn"
          onClick={() => router.push("/add-experiment")}
        >
          ➕ Add Experiment
        </button>
        <button
          className="hero-btn"
          onClick={() => router.push("/experiments")}
        >
          📚 View Experiments
        </button>
      </div>
    </section>
  );
}
