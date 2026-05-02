import Animate from "./ui/Animate";

const links = ["Links", "About Us", "Pricing", "Terms"];

export default function Footer() {
  return (
    <Animate>
      <footer
        className="relative z-10 flex justify-between items-center"
        style={{ padding: "22px 48px", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div>
          {links.map(l => (
            <a key={l} href="#" style={{ fontSize: 13, color: "#334155", textDecoration: "none", marginRight: 20 }}>{l}</a>
          ))}
        </div>
        <span style={{ fontSize: 13, color: "#1e293b" }}>Copyright © 2022 »</span>
      </footer>
    </Animate>
  );
}