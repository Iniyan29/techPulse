import { useEffect, useState } from "react";
import "./Hero.css";

const codeLines = [
  { text: "// System diagnostics", color: "#64647a" },
  { text: 'status = "optimal"', color: "#00e5ff" },
  { text: "cpu_temp = 42°C", color: "#7c6dfa" },
  { text: "ram_usage = 34%", color: "#7c6dfa" },
  { text: "✓ All systems running", color: "#4ade80" },
];

const stats = [
  { num: "1,000+", label: "Happy Clients" },
  { num: "5 yrs", label: "Experience" },
  { num: "24hr", label: "Turnaround" },
];

const metrics = [
  { val: "RTX 4090", sub: "In stock" },
  { val: "i9-14900K", sub: "Available" },
  { val: "99.8%", sub: "Uptime SLA" },
  { val: "2hr", sub: "Avg repair" },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    codeLines.forEach((_, i) => {
      setTimeout(() => setVisibleLines((prev) => [...prev, i]), 900 + i * 300);
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero__grid-bg" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Sales · Service · Support
        </div>

        <h1 className="hero__title">
          Your Tech,
          <br />
          <em>Perfectly Tuned.</em>
        </h1>

        <p className="hero__sub">
          Premium computer hardware sales, software licensing, repairs, and IT
          support — all under one roof. Fast, reliable, and built to last.
        </p>

        <div className="hero__actions">
          <a href="#products" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l5.5 3.5v7L8 15l-5.5-3.5v-7L8 1z" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            Explore Products
          </a>
          <a href="#contact" className="btn-ghost">
            Book a Service
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="hero__stats">
          {stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <div className="hero__stat-num">{s.num}</div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating device card */}
      <div className="hero__visual">
        <div className="hero__device-card">
          <div className="hero__device-screen">
            {codeLines.map((line, i) => (
              <div
                key={i}
                className="hero__code-line"
                style={{
                  color: line.color,
                  opacity: visibleLines.includes(i) ? 1 : 0,
                  transform: visibleLines.includes(i) ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  fontFamily: "monospace",
                  fontSize: "0.78rem",
                  margin: "4px 0",
                }}
              >
                {line.text}
              </div>
            ))}
          </div>
          <div className="hero__metrics">
            {metrics.map((m) => (
              <div key={m.val} className="hero__metric-pill">
                <strong>{m.val}</strong>
                <span>{m.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
