import "./Footer.css";

const footerLinks = ["Services", "Products", "Process", "Contact", "Privacy"];

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="#" className="footer__logo">
          Tech<span>Pulse</span>
        </a>
        <p className="footer__copy">© 2025 TechPulse. All rights reserved.</p>
      </div>
      <nav className="footer__links">
        {footerLinks.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="footer__link">
            {l}
          </a>
        ))}
      </nav>
    </footer>
  );
}
