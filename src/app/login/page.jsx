"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/auth.css";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      ...form,
      redirect: false,
    });
    if (res.ok) router.push("/");
    else alert("Login failed");
  };

  return (
    <>
      <form onSubmit={handleLogin} className="auth-form">
        <h2>Login</h2>
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
        <button type="submit">Login</button>
        <div className="auth-link">
          Don’t have an account? <a href="/register">Register</a>
        </div>
      </form>
      <p style={{ textAlign: "center", margin: "0.5rem 0" }}>or</p>

      <div className="alt-auth">
        <button onClick={() => signIn("github", { callbackUrl: "/" })}>
          Sign in with GitHub
        </button>
      </div>
    </>
  );
}
