

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { tokenStore } from "../auth/tokenStore";

export default function OAuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const code = params.get("code");
    const verifier = sessionStorage.getItem("code_verifier");

    console.log("CODE:", code);
    console.log("VERIFIER:", verifier);

    if (!code || !verifier) {
      console.error("Missing code or verifier");
      return;
    }

    // MOCK token exchange
    console.log("SETTING TOKEN...");
    tokenStore.setTokens("mock_access_token");

    console.log("TOKEN NOW:", tokenStore.getAccessToken());

    sessionStorage.removeItem("code_verifier");

    // IMPORTANT: SPA navigation (no reload)
    navigate("/profile");
  }, []);

  return <h1>Processing login...</h1>;
}