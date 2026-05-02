import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Animate from "./ui/Animate";

function FlowNode({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
      style={{ background: "#161b1e", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "18px 20px", boxShadow: "0 4px 28px rgba(0,0,0,0.45)", ...style }}
    >
      {children}
    </motion.div>
  );
}

function VConn({ delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay }}
        style={{ width: 1.5, height: 36, background: "rgba(34,197,94,0.4)", transformOrigin: "top" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3, delay: delay + 0.4 }}
        style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", marginTop: -1 }}
      />
    </div>
  );
}

function HConn({ delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
      style={{ height: 1.5, width: 40, background: "rgba(34,197,94,0.4)", transformOrigin: "left", flexShrink: 0, alignSelf: "center" }}
    />
  );
}

function GBadge({ children }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.22)", color: "#4ade80", fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 99, letterSpacing: "0.4px" }}>
      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
      {children}
    </span>
  );
}

function Av({ initials, bg = "#7c3aed", color = "#ede9fe" }) {
  return (
    <div style={{ width: 22, height: 22, borderRadius: "50%", background: bg, color, fontSize: 8, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #0e1112", flexShrink: 0 }}>
      {initials}
    </div>
  );
}

function AppIcon({ bg, label }) {
  return (
    <div style={{ width: 22, height: 22, borderRadius: 6, background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", fontWeight: 700, flexShrink: 0 }}>
      {label}
    </div>
  );
}

export default function SendlyFlow() {
  return (
    <section style={{ position: "relative", zIndex: 10, padding: "80px 24px 40px" }}>

      <Animate delay={0}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.18)", color: "#4ade80", fontSize: 12, fontWeight: 600, padding: "5px 14px", borderRadius: 99, marginBottom: 16, letterSpacing: "0.4px" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
            How Sendly Works
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
            From sender to receiver,<br />
            <span style={{ color: "#4ade80" }}>in seconds.</span>
          </h2>
          <p style={{ marginTop: 14, color: "#64748b", fontSize: 15, maxWidth: 400, margin: "14px auto 0", lineHeight: 1.7 }}>
            A seamless session-based flow — no accounts, no friction.
          </p>
        </div>
      </Animate>

      <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>

        {/* Sender Device */}
        <FlowNode delay={0.05} style={{ width: 260, textAlign: "center" }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#475569", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 6 }}>Sender Device</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9" }}>Laptop / Desktop</span>
          </div>
          <div style={{ marginTop: 10 }}><GBadge>No login needed</GBadge></div>
        </FlowNode>

        <VConn delay={0.2} />

        {/* Generate Code */}
        <FlowNode delay={0.25} style={{ width: 300 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#475569", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 6 }}>Step 1</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>Generate Session Code</div>
          <div style={{ fontSize: 12, color: "#475569", marginBottom: 12 }}>A unique 6-char code is created for your session.</div>
          <div style={{ display: "inline-flex", background: "rgba(34,197,94,0.12)", color: "#4ade80", fontSize: 22, fontWeight: 800, padding: "8px 16px", borderRadius: 11, letterSpacing: 3, border: "1px solid rgba(34,197,94,0.2)" }}>
            SN-7341
          </div>
        </FlowNode>

        <VConn delay={0.4} />

        {/* Middle row */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, width: "100%", justifyContent: "center" }}>

          <FlowNode delay={0.5} style={{ width: 210, flexShrink: 0 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: "#475569", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 6 }}>Step 2</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>Share the Code</div>
            <div style={{ fontSize: 11, color: "#475569" }}>Send <span style={{ color: "#4ade80", fontWeight: 600 }}>SN-7341</span> to the other device however you like.</div>
            <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
              <AppIcon bg="#25D366" label="W" />
              <AppIcon bg="#0088cc" label="T" />
              <AppIcon bg="#EA4335" label="M" />
              <AppIcon bg="rgba(255,255,255,0.08)" label="✉" />
            </div>
          </FlowNode>

          <HConn delay={0.65} />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: 54, height: 88, border: "1.5px solid rgba(34,197,94,0.3)", borderRadius: 16, background: "#161b1e", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, flexShrink: 0, boxShadow: "0 0 0 6px rgba(34,197,94,0.04)" }}
          >
            <div style={{ width: 14, height: 2, background: "rgba(34,197,94,0.35)", borderRadius: 99 }} />
            <div style={{ fontSize: 9, fontWeight: 700, color: "#4ade80", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 4, padding: "2px 5px" }}>####</div>
          </motion.div>

          <HConn delay={0.65} />

          <FlowNode delay={0.6} style={{ width: 210, flexShrink: 0 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: "#475569", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 6 }}>Step 3</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>Enter on Receiver</div>
            <div style={{ fontSize: 11, color: "#475569", marginBottom: 10 }}>Receiver types the code on their device to join.</div>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: 4, border: "1.5px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "7px 12px", display: "inline-block", color: "#94a3b8", background: "#1e2428" }}>####</div>
          </FlowNode>
        </div>

        <VConn delay={0.75} />

        {/* Connected */}
        <FlowNode delay={0.8} style={{ width: 320, textAlign: "center" }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#475569", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 6 }}>Step 4</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>Session Connected</div>
          <div style={{ fontSize: 12, color: "#475569", marginBottom: 12 }}>Both devices are now linked in real-time. No server stores your files.</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
            <Av initials="You" bg="#16a34a" color="#dcfce7" />
            <div style={{ height: 1.5, width: 60, background: "rgba(34,197,94,0.5)", alignSelf: "center", position: "relative" }}>
              <motion.div
                animate={{ x: [0, 60, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", width: 7, height: 7, borderRadius: "50%", background: "#22c55e" }}
              />
            </div>
            <Av initials="Rx" bg="#0ea5e9" color="#e0f2fe" />
          </div>
        </FlowNode>

        <VConn delay={0.95} />

        {/* Transfer */}
        <FlowNode delay={1} style={{ width: 380 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#475569", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 8 }}>Step 5 — Transfer</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 12 }}>Drag, Drop &amp; Done.</div>
          {[
            { label: "PDF", name: "Presentation.pdf", pct: 70, bg: "rgba(239,68,68,0.15)", color: "#f87171" },
            { label: "IMG", name: "Photo_01.jpg",     pct: 100, bg: "rgba(167,139,250,0.15)", color: "#a78bfa" },
          ].map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: i === 0 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <div style={{ width: 28, height: 28, borderRadius: 7, background: f.bg, color: f.color, fontSize: 8, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{f.label}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: "#94a3b8", marginBottom: 5 }}>{f.name}</div>
                <div style={{ height: 2.5, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${f.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 1.2 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ height: "100%", background: "linear-gradient(to right,#16a34a,#4ade80)", borderRadius: 99 }}
                  />
                </div>
              </div>
              <span style={{ fontSize: 11, color: f.pct === 100 ? "#4ade80" : "#475569", flexShrink: 0 }}>
                {f.pct === 100 ? "✓" : `${f.pct}%`}
              </span>
            </div>
          ))}
        </FlowNode>

      </div>
    </section>
  );
}