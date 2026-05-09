import { useState, useEffect, useRef } from "react";
import { useRevealGroup } from "../hooks/useReveal";
import "./Products.css";

import desktopImg from "../assets/products/desktop.webp";
import laptopImg from "../assets/products/laptop.webp";
import graphicsImg from "../assets/products/graphics.webp";
import storageImg from "../assets/products/storage.webp";
import officeImg from "../assets/products/office.webp";
import keyboardImg from "../assets/products/keyboard.webp";
import networkingImg from "../assets/products/networking.webp";
import wifiImg from "../assets/products/wifi.webp";

const categories = ["All", "Hardware", "Software", "Peripherals", "Networking"];

const products = [
  { img: desktopImg, name: "Desktop PCs", desc: "Office, gaming & workstation configs", price: "₹18,000", category: "Hardware" },
  { img: laptopImg, name: "Laptops", desc: "All brands — Intel & AMD platforms", price: "₹28,000", category: "Hardware" },
  { img: graphicsImg, name: "GPU / Graphics", desc: "NVIDIA & AMD latest series", price: "₹12,000", category: "Hardware" },
  { img: storageImg, name: "Storage", desc: "SSD, HDD, NVMe & external drives", price: "₹1,500", category: "Hardware" },
  { img: officeImg, name: "Windows & Office", desc: "Genuine Microsoft licenses", price: "₹2,999", category: "Software" },
  { img: keyboardImg, name: "Peripherals", desc: "Keyboards, mice, headsets, webcams", price: "₹350", category: "Peripherals" },
  { img: networkingImg, name: "Networking", desc: "Routers, switches, cables, UPS", price: "₹800", category: "Networking" },
  { img: wifiImg, name: "Wi-Fi Solutions", desc: "Mesh, access points, extenders", price: "₹1,200", category: "Networking" },
];

export default function Products() {
  const [active, setActive] = useState("All");
  const groupRef = useRevealGroup();

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  // Re-trigger reveal animation when filter changes
  useEffect(() => {
    const container = groupRef.current;
    if (!container) return;
    const cards = container.querySelectorAll(".reveal");
    cards.forEach((card, i) => {
      card.classList.remove("visible");
      setTimeout(() => card.classList.add("visible"), i * 60);
    });
  }, [active]);

  return (
    <section id="products" className="products">
      <div className="products__header">
        <div className="section-label">Shop</div>
        <h2 className="section-title">Hardware & Software Sales</h2>
        <p className="section-sub">
          Authorized dealer for all major brands. Every product backed by warranty and after-sales support.
        </p>
      </div>

      <div className="products__filters">
        {categories.map((c) => (
          <button
            key={c}
            className={`filter-btn ${active === c ? "filter-btn--active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="products__grid reveal-group" ref={groupRef} key={active}>
        {filtered.map((p) => (
          <div key={p.name} className="product-card reveal">
            <div className="product-card__thumb">
              <img src={p.img} alt={p.name} className="product-card__img" />
            </div>
            <div className="product-card__info">
              <div className="product-card__name">{p.name}</div>
              <div className="product-card__desc">{p.desc}</div>
              <div className="product-card__price">
                <span className="product-card__from">from </span>
                {p.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
