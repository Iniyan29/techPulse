import { useRevealGroup } from "../hooks/useReveal";
import "./Process.css";

const steps = [
  { num: "01", title: "Diagnose", desc: "Free assessment of your device or requirement — walk-in, call, or online inquiry." },
  { num: "02", title: "Quote", desc: "Clear itemized quote with no hidden charges. You approve before any work begins." },
  { num: "03", title: "Execute", desc: "Expert technicians complete the repair or build with genuine parts and software." },
  { num: "04", title: "Deliver", desc: "Fully tested, cleaned, and delivered on time. 90-day warranty on all work." },
];

export default function Process() {
  const groupRef = useRevealGroup();

  return (
    <section id="how" className="process">
      <div className="process__header">
        <div className="section-label">Our Process</div>
        <h2 className="section-title">From Problem to Solution</h2>
        <p className="section-sub">Simple, transparent, no surprises.</p>
      </div>

      <div className="process__steps reveal-group" ref={groupRef}>
        {steps.map((s, i) => (
          <div key={s.num} className="process-step reveal">
            <div className="process-step__connector" aria-hidden="true" />
            <div className="process-step__num">{s.num}</div>
            <h4 className="process-step__title">{s.title}</h4>
            <p className="process-step__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
