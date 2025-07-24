"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/auth.css";

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) router.push("/login");
    else alert("Registration failed");
  };

  return (
    <form onSubmit={handleRegister} className="auth-form">
      <h2>Register</h2>
      <label>Username</label>
      <input
        type="text"
        required
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <label>Email</label>
      <input
        type="email"
        required
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <label>Password</label>
      <input
        type="password"
        required
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Register</button>

      <div className="auth-link">
        Already have an account? <a href="/login">Login</a>
      </div>
    </form>
  );
}
