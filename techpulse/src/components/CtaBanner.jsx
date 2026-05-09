import { useReveal } from "../hooks/useReveal";
import "./CtaBanner.css";

export default function CtaBanner() {
  const ref = useReveal();

  return (
    <section className="cta-banner">
      <div className="cta-banner__glow" />
      <div className="cta-banner__inner reveal" ref={ref}>
        <div className="section-label" style={{ textAlign: "center" }}>Get Started</div>
        <h2 className="section-title">Ready to fix or upgrade?</h2>
        <p className="section-sub">
          Walk in, call, or fill the form below — we'll get back to you within the hour during business hours.
        </p>
        <div className="cta-banner__actions">
          <a href="tel:+919790167110" className="btn-primary">
            📞 Call Now
          </a>
          <a href="#contact" className="btn-ghost">
            Send a Message →
          </a>
        </div>
      </div>
    </section>
  );
}
