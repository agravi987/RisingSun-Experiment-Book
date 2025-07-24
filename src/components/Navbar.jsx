"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import "@/styles/Navbar.css";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => router.push("/")}>
        🔬 RisingSun
      </div>

      <div className="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/experiments">Experiments</Link>

        {session ? (
          <>
            <Link href="/myexperiments">My Experiments</Link>
            <Link href="/add-experiment">Add Experiment</Link>

            {/* ✅ Mini Profile Section */}
            <div className="navbar-profile">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt="profile"
                  className="profile-image"
                />
              )}
              <span className="profile-name">
                {session.user?.name || "User"}
              </span>
              <button className="btn btn-logout" onClick={() => signOut()}>
                🚪 Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link className="btn btn-login" href="/login">
              Login
            </Link>
            <Link className="btn btn-register" href="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
