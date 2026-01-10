"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signup() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to dashboard after signup
      window.location.href = "/dashboard";
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Create Account</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "1rem" }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: "1rem" }}
      />
      <button onClick={signup}>Sign Up</button>
    </main>
  );
}
