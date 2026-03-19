import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import OAuthCallback from "./pages/OAuthCallback";
import XSSDemo from "./pages/XSSDemo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/oauth/callback" element={<OAuthCallback />} />
        <Route path="/xss-demo" element={<XSSDemo />} />
      </Routes>
    </BrowserRouter>
  );
}