

import { tokenStore } from "../auth/tokenStore";

export default function Profile() {
  const handleLogout = () => {
    tokenStore.clear(); // token remove
    window.location.href = "/login"; // redirect
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 data-testid="profile-page">Profile Page</h1>

      <button
        data-testid="logout-button"
        onClick={handleLogout}
        style={{ marginTop: "20px", padding: "10px" }}
      >
        Logout
      </button>
    </div>
  );
}