import { useState, useEffect } from "react";
import "./Nav.css";

const links = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#how", label: "Process" },
  { href: "#testimonials", label: "Reviews" },
];

export default function Nav({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#" className="nav__logo">
        Tech<span>Pulse</span>
      </a>

      <ul className="nav__links">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`nav__link ${activeSection === l.href.slice(1) ? "nav__link--active" : ""}`}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav__cta">
            Get a Quote
          </a>
        </li>
      </ul>

      <button className="nav__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
      </button>

      {menuOpen && (
        <div className="nav__mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__mobile-link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav__cta" onClick={() => setMenuOpen(false)}>
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
