import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SendlyFlow from "./components/SendlyFlow";
import Footer from "./components/Footer";
import FloatingDecos from "./components/FloatingDecos";

export default function Home() {
  return (
    <div className="relative min-h-screen" style={{ background: "#0e1112" }}>

      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.022, backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 45% at 100% 0%,rgba(34,197,94,0.09) 0%,transparent 60%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 45% 40% at 0% 70%,rgba(22,163,74,0.06) 0%,transparent 55%)" }} />

      <FloatingDecos />
      <Navbar />
      <Hero />
      <SendlyFlow />
      <Footer />
    </div>
  );
}