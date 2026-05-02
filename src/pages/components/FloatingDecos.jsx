export default function FloatingDecos() {
  return (
    <>
      <div className="absolute pointer-events-none opacity-65"
        style={{ top: 75, right: 68, animation: "bob 5s ease-in-out infinite" }}>
        <svg width="48" height="56" viewBox="0 0 48 56" fill="none">
          <rect x="2" y="2" width="34" height="44" rx="5" fill="#1a2420" stroke="rgba(74,222,128,0.18)" strokeWidth="1.2" />
          <rect x="8" y="13" width="18" height="2" rx="1" fill="rgba(74,222,128,0.25)" />
          <rect x="8" y="19" width="13" height="2" rx="1" fill="rgba(74,222,128,0.15)" />
          <rect x="8" y="25" width="15" height="2" rx="1" fill="rgba(74,222,128,0.15)" />
          <path d="M28 2 L38 12" stroke="rgba(74,222,128,0.18)" strokeWidth="1.2" />
          <path d="M28 2 L28 12 L38 12" fill="#1a2420" stroke="rgba(74,222,128,0.18)" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="absolute pointer-events-none opacity-65"
        style={{ top: 405, left: 44, animation: "bob2 6.5s ease-in-out infinite 1s" }}>
        <svg width="40" height="46" viewBox="0 0 40 46" fill="none">
          <rect x="2" y="2" width="30" height="40" rx="5" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.2)" strokeWidth="1.2" />
          <rect x="7" y="12" width="16" height="2" rx="1" fill="rgba(34,197,94,0.28)" />
          <rect x="7" y="18" width="11" height="2" rx="1" fill="rgba(34,197,94,0.18)" />
          <rect x="7" y="24" width="14" height="2" rx="1" fill="rgba(34,197,94,0.18)" />
        </svg>
      </div>

      <div className="absolute pointer-events-none opacity-65"
        style={{ top: 510, left: 80, animation: "bob 7s ease-in-out infinite 0.5s" }}>
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
          <rect x="1" y="1" width="36" height="36" rx="8" fill="rgba(234,179,8,0.06)" stroke="rgba(234,179,8,0.18)" strokeWidth="1.2" />
          <circle cx="12" cy="14" r="3" fill="rgba(234,179,8,0.25)" />
          <path d="M1 27 L10 18 L18 26 L25 16 L37 27" stroke="rgba(234,179,8,0.25)" strokeWidth="1.3" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute pointer-events-none opacity-65"
        style={{ top: 335, right: 50, animation: "bob2 5.5s ease-in-out infinite 1.5s" }}>
        <svg width="42" height="32" viewBox="0 0 42 32" fill="none">
          <rect x="1" y="1" width="30" height="24" rx="6" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.18)" strokeWidth="1.2" />
          <path d="M31 8 L41 3 L41 22 L31 17 Z" fill="rgba(239,68,68,0.18)" />
        </svg>
      </div>
    </>
  );
}