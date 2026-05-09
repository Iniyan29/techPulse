import "./Ticker.css";

const items = [
  "Laptop Repair", "Custom PC Build", "OS Installation", "Virus Removal",
  "RAM Upgrade", "SSD Migration", "Network Setup", "Server Solutions",
  "Software Licensing", "Data Recovery", "CCTV Installation", "AMC Contracts",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {doubled.map((item, i) => (
          <span key={i} className="ticker__item">
            <span className="ticker__dot">●</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
