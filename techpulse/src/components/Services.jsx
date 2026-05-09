import { useRevealGroup } from "../hooks/useReveal";
import "./Services.css";

import hardwareWebp from "../assets/services/hardware.webp";
import customPcWebp from "../assets/services/pc_build.webp";
import upgradesWebp from "../assets/services/upgrades.webp";
import securityWebp from "../assets/services/security.webp";
import softwareWebp from "../assets/services/software.webp";
import networkWebp from "../assets/services/network.webp";
import dataRecoveryWebp from "../assets/services/data-recovery.webp";
import printerWebp from "../assets/services/printer.webp";

const services = [
  { img: hardwareWebp, title: "Hardware Repair", desc: "Laptops, desktops, printers — diagnosed and repaired by certified technicians. Most repairs completed same day." },
  { img: customPcWebp, title: "Custom PC Builds", desc: "Gaming rigs, workstations, servers — hand-picked components assembled and tested for peak performance." },
  { img: upgradesWebp, title: "Hardware Upgrades", desc: "RAM, SSD, GPU, cooling — breathe new life into your existing machine at a fraction of replacement cost." },
  { img: securityWebp, title: "Virus & Security", desc: "Malware removal, antivirus setup, firewall configuration, and ongoing monitoring to keep you protected." },
  { img: softwareWebp, title: "Software Licensing", desc: "Genuine Windows, Office, Adobe, and enterprise software at competitive prices. Full activation guaranteed." },
  { img: networkWebp, title: "Network & Servers", desc: "Wi-Fi setup, LAN cabling, NAS, cloud integration, and managed IT for homes and businesses alike." },
  { img: dataRecoveryWebp, title: "Data Recovery", desc: "Accidentally deleted files, failed drives, corrupted partitions — we recover what others can't." },
  { img: printerWebp, title: "Printer & Peripherals", desc: "Sales, setup, ink & toner supply, and repair for all major printer brands and office peripherals." },
];

export default function Services() {
  const groupRef = useRevealGroup();

  return (
    <section id="services" className="services">
      <div className="services__header">
        <div className="section-label">What We Do</div>
        <h2 className="section-title">Complete Tech Solutions</h2>
        <p className="section-sub">
          From hardware procurement to software deployment, we handle every layer of your technology stack.
        </p>
      </div>

      <div className="services__grid reveal-group" ref={groupRef}>
        {services.map((s) => (
          <div key={s.title} className="service-card reveal">
            <div className="service-card__icon">
              <img src={s.img} alt={s.title} className="service-card__img" />
            </div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
