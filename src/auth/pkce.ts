// src/auth/pkce.ts

// 1️⃣ Generate code_verifier (random string)
export function generateCodeVerifier(): string {
  const array = new Uint8Array(32);
  window.crypto.getRandomValues(array);

  return btoa(String.fromCharCode(...array))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

// 2️⃣ Generate code_challenge (SHA-256 hash)
export async function generateCodeChallenge(verifier: string) {
  const data = new TextEncoder().encode(verifier);

  const digest = await window.crypto.subtle.digest("SHA-256", data);

  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}