import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-screen relative bg-white overflow-hidden">

      {/* Cyan-teal gradient — top right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(170, 235, 228, 0.45) 0%, transparent 50%)",
        }}
      />

      {/* Lime gradient — bottom right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(204, 224, 158, 0.5) 0%, transparent 55%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">

        {/* Navbar */}
        <nav className="flex justify-between px-10 py-4">
          <h1 className="text-xl font-bold">Sendly</h1>
          <div className="flex gap-6">
            <a href="#">Features</a>
            <a href="#">How it Works</a>
            <button className="bg-teal-600 text-white px-3 py-1 rounded-md">
              Generate Code
            </button>
          </div>
        </nav>

        {/* Hero */}
        <div className="text-center mt-5 px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block">Instant, Session-Based</span>
            <span className="block">File Transfer.</span>
          </h1>

          <p className="mt-4 text-gray-600">
            No login. No setup. Fast, clean, and real-time device-to-device sharing.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Home;