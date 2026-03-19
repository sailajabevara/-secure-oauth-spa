import { tokenStore } from "./tokenStore";
import { refreshToken } from "./refresh";

export async function fetchWithAuth() {
  const token = tokenStore.getAccessToken();

  console.log("Using token:", token);

  if (token === "mock_access_token") {
    console.log("Token expired → refreshing...");

    const newToken = await refreshToken();

    tokenStore.setTokens(newToken);

    console.log("New token:", newToken);

    return newToken;
  }

  return token;
}

(window as any).fetchWithAuth = fetchWithAuth;