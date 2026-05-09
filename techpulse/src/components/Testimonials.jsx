import { useRevealGroup } from "../hooks/useReveal";
import "./Testimonials.css";

const testimonials = [
  {
    stars: 5,
    text: "Had my laptop repaired here — screen replacement done in under 3 hours. Clean work, fair price, no upselling. Highly recommend!",
    name: "Rajesh Kumar",
    role: "Small Business Owner",
    initials: "RK",
    color: "cyan",
  },
  {
    stars: 5,
    text: "Built a custom gaming PC through TechPulse. They guided me on every component choice and delivered a beast of a machine within budget.",
    name: "Arjun",
    role: "Content Creator",
    initials: "AP",
    color: "purple",
  },
  {
    stars: 5,
    text: "Data recovery after a failed SSD — I thought everything was lost. Team recovered 95% of my files. Absolute lifesavers for our office.",
    name: "Sunita",
    role: "Chartered Accountant",
    initials: "SM",
    color: "green",
  },
];

const colorMap = {
  cyan: { bg: "rgba(0,229,255,0.1)", text: "#00e5ff" },
  purple: { bg: "rgba(124,109,250,0.1)", text: "#7c6dfa" },
  green: { bg: "rgba(74,222,128,0.1)", text: "#4ade80" },
};

export default function Testimonials() {
  const groupRef = useRevealGroup();

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__header">
        <div className="section-label">Reviews</div>
        <h2 className="section-title">What Clients Say</h2>
      </div>

      <div className="testimonials__grid reveal-group" ref={groupRef}>
        {testimonials.map((t) => {
          const c = colorMap[t.color];
          return (
            <div key={t.name} className="testimonial-card reveal">
              <div className="testimonial-card__stars">
                {"★".repeat(t.stars)}
              </div>
              <p className="testimonial-card__text">"{t.text}"</p>
              <div className="testimonial-card__author">
                <div
                  className="testimonial-card__avatar"
                  style={{ background: c.bg, color: c.text }}
                >
                  {t.initials}
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
