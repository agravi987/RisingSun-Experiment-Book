// Hero.tsx
"use client";

import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import "@/styles/Hero.css";
import Loader from "./Loader";

export default function Hero() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loader content={"Loading..."} />;
  }

  return (
    <section className="hero">
      {session ? (
        <p className="hero-welcome">
          Welcome, {session.user.name || "User"} 👋
        </p>
      ) : (
        <></>
      )}
      <img src="/hero.jpg" alt="Hero Image" className="hero-image" />
      <h1 className="hero-title">RisingSun Experiment Book</h1>
      <p className="hero-subtitle">Track. Manage. Innovate.</p>

      {session ? (
        <>
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
        </>
      ) : (
        <div className="hero-actions">
          <button className="hero-btn" onClick={() => router.push("/login")}>
            🔐 Login to Continue
          </button>
        </div>
      )}
    </section>
  );
}
