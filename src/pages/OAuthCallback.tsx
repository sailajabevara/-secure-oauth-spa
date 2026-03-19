

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

    // SET TOKEN
    tokenStore.setTokens("mock_access_token");

    console.log("TOKEN SET:", tokenStore.getAccessToken());

    sessionStorage.removeItem("code_verifier");

    navigate("/profile"); // IMPORTANT
  }, []);

  return <h1>Processing login...</h1>;
}