import Animate from "./ui/Animate";

export default function Hero() {
  return (
    <div className="relative z-10 text-center" style={{ padding: "60px 20px 0" }}>
      <Animate delay={0.05}>
        <div
          className="inline-flex items-center gap-2"
          style={{
            background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.18)",
            color: "#4ade80", fontSize: 12, fontWeight: 600,
            padding: "5px 14px", borderRadius: 99, marginBottom: 24, letterSpacing: "0.4px",
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
          Session-based · No login required
        </div>
      </Animate>

      <Animate delay={0.13}>
        <h1 style={{
          fontSize: "clamp(38px, 5.5vw, 66px)", fontWeight: 800,
          lineHeight: 1.06, color: "#f1f5f9", letterSpacing: "-2px",
        }}>
          Instant, Session-Based<br />
          <span style={{ color: "#4ade80" }}>File Transfer.</span>
        </h1>
      </Animate>

      <Animate delay={0.21}>
        <p style={{
          marginTop: 20, color: "#64748b", fontSize: 16,
          maxWidth: 440, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7,
        }}>
          No login. No setup. Fast, clean, and real-time device‑to‑device sharing.
        </p>
      </Animate>

      <Animate delay={0.29}>
        <div className="flex justify-center gap-3" style={{ marginTop: 32 }}>
          <button
            style={{
              padding: "12px 32px", borderRadius: 10, fontSize: 14, fontWeight: 700,
              cursor: "pointer", border: "none", background: "#16a34a", color: "#fff",
              letterSpacing: "0.2px", transition: "background .2s", fontFamily: "inherit",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#15803d"}
            onMouseLeave={e => e.currentTarget.style.background = "#16a34a"}
          >
            Send
          </button>
          <button
            style={{
              padding: "12px 32px", borderRadius: 10, fontSize: 14, fontWeight: 700,
              cursor: "pointer", border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)", color: "#94a3b8",
              transition: "background .2s", fontFamily: "inherit",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#e2e8f0"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#94a3b8"; }}
          >
            Receive
          </button>
        </div>
      </Animate>
    </div>
  );
}