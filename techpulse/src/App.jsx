import { useEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Services from "./components/Services";
import Products from "./components/Products";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CtaBanner from "./components/CtaBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/globals.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Nav activeSection={activeSection} />
      <Hero />
      <Ticker />
      <Services />
      <Products />
      <Process />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  );
}
