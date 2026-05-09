import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

const contactItems = [
  { icon: "📍", label: "Store Address", value: "118/A, Balakrishnapuram Main Road,\nGummidipundi, Tamil Nadu 601201" },
  { icon: "📞", label: "Phone / WhatsApp", value: "+91 97901 67110" },
  { icon: "✉️", label: "Email", value: "support@techpulse.in" },
  { icon: "🕘", label: "Working Hours", value: "Mon–Sat: 9:00 AM – 7:30 PM" },
];

const serviceOptions = [
  "Laptop / Desktop Repair",
  "Custom PC Build",
  "Hardware Upgrade",
  "Software / OS Install",
  "Virus Removal",
  "Data Recovery",
  "Network Setup",
  "Purchase Inquiry",
  "Other",
];

export default function Contact() {
  const leftRef = useReveal();
  const rightRef = useReveal({ rootMargin: "0px 0px -40px 0px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const handleReset = () => {
    setSent(false);
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__grid">
        {/* Info */}
        <div className="contact__info reveal" ref={leftRef}>
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let's Talk</h2>
          <p className="contact__sub">
            Drop by the store, call us, or send a message and we'll reach you shortly.
          </p>

          <div className="contact__items">
            {contactItems.map((item) => (
              <div key={item.label} className="contact-item">
                <div className="contact-item__icon">{item.icon}</div>
                <div>
                  <strong className="contact-item__label">{item.label}</strong>
                  <p className="contact-item__value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="contact__form-wrap reveal" ref={rightRef}>
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>We'll get back to you within the hour during business hours.</p>
              <button className="btn-ghost" onClick={handleReset} style={{ marginTop: "1.2rem" }}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />
              <select name="service" value={form.service} onChange={handleChange} required>
                <option value="" disabled>Service Required</option>
                {serviceOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Describe your issue or requirement..."
                value={form.message}
                onChange={handleChange}
                rows={4}
              />
              <button type="submit" className="btn-primary" style={{ justifyContent: "center" }}>
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
