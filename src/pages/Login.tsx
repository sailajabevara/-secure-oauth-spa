// export default function Login() {
//   return (
//     <div>
//       <h1>Login Page</h1>

//       <button data-testid="login-button">
//         Login with OAuth
//       </button>
//     </div>
//   );
// }

import { generateCodeVerifier, generateCodeChallenge } from "../auth/pkce";

export default function Login() {
  const handleLogin = async () => {
    // 1️⃣ generate verifier
    const verifier = generateCodeVerifier();

    // 2️⃣ generate challenge
    const challenge = await generateCodeChallenge(verifier);

    // 3️⃣ store verifier
    sessionStorage.setItem("code_verifier", verifier);

    // 4️⃣ build auth URL
    const authUrl = `${import.meta.env.VITE_AUTH_URL}?client_id=${import.meta.env.VITE_OAUTH_CLIENT_ID}
&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}
&response_type=code
&scope=${import.meta.env.VITE_SCOPE}
&code_challenge=${challenge}
&code_challenge_method=S256`;

    // 5️⃣ redirect
    window.location.href = authUrl;
  };

  return (
    <div>
      <h1>Login Page</h1>

      <button data-testid="login-button" onClick={handleLogin}>
        Login with OAuth
      </button>
    </div>
  );
}