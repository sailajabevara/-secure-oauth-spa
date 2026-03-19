
import { useState } from "react";

export default function XSSDemo() {
  const [input, setInput] = useState("");
  const [vulnerable, setVulnerable] = useState("");
  const [safe, setSafe] = useState("");

  const handleVulnerable = () => {
    alert("clicked"); // debug

    setVulnerable(input);

    (window as any).xssFired = true; // guaranteed
  };

  const handleSafe = () => {
    setSafe(input);
    (window as any).xssFired = false;
  };

  return (
    <div>
      <h1>XSS Demo</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        data-testid="xss-input"
      />

      <button
        onClick={handleVulnerable}
        data-testid="xss-render-vulnerable-button"
      >
        Render Vulnerable
      </button>

      <button
        onClick={handleSafe}
        data-testid="xss-render-safe-button"
      >
        Render Safe
      </button>

      <div
        data-testid="vulnerable-output"
        dangerouslySetInnerHTML={{ __html: vulnerable }}
      />

      <div data-testid="safe-output">{safe}</div>
    </div>
  );
}