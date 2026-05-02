import Animate from "./ui/Animate";

export default function Navbar() {
  return (
    <Animate delay={0.05}>
      <nav
        className="relative z-10 flex justify-between items-center"
        style={{ padding: "20px 48px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div
          className="flex items-center gap-2 cursor-pointer"
          style={{ fontSize: 19, fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.3px" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
          Sendly
        </div>

        <div className="flex items-center gap-8">
          <a href="#" style={{ fontSize: 14, fontWeight: 500, color: "#94a3b8", textDecoration: "none" }}>Features</a>
          <a href="#" style={{ fontSize: 14, fontWeight: 500, color: "#94a3b8", textDecoration: "none" }}>How it Works</a>
          <button
            style={{
              background: "transparent", color: "#4ade80",
              border: "1px solid rgba(74,222,128,0.3)", cursor: "pointer",
              padding: "9px 20px", borderRadius: 9, fontSize: 13, fontWeight: 600,
              transition: "background .2s", fontFamily: "inherit",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(34,197,94,0.1)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            Generate Code
          </button>
        </div>
      </nav>
    </Animate>
  );
}