import React from "react";
import myImage from "../assets/lapsvg.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen w-screen relative bg-white overflow-hidden">
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
            No login. No setup. Fast, clean, and real-time device-to-device
            sharing.
          </p>

          <div className="w-full flex justify-center gap-18 mt-6">
            <button className="px-4 py-2 bg-teal-100">Send</button>
            <button className="px-4 py-2 bg-teal-100">Recieve</button>
          </div>
        </div>

        {/* Steps Section */}
        <div className="flex items-center justify-center gap-0 mt-16 px-6">

          {/* Step 1 Card */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 w-[220px] shadow-sm">
            <p className="text-xs text-gray-400 mb-3">
              Step 1: Get your code{" "}
              <span className="text-gray-300">(on laptop)</span>
            </p>
            <div className="flex items-center gap-3 mb-3">
              <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
                <rect x="4" y="2" width="28" height="18" rx="2" stroke="#9ca3af" strokeWidth="1.5" fill="none" />
                <rect x="6" y="4" width="24" height="14" rx="1" fill="#E1F5EE" />
                <rect x="0" y="21" width="36" height="3" rx="1.5" fill="#9ca3af" opacity="0.4" />
              </svg>
              <div className="bg-teal-100 text-teal-700 text-xl font-bold px-3 py-1.5 rounded-lg tracking-wide">
                SN-7341
              </div>
            </div>
            <p className="text-xs text-gray-400">
              Share this code with the other device.
            </p>
          </div>

          {/* Connector left line + animated dot */}
          <div className="relative w-7 h-[2px] bg-teal-200 flex-shrink-0">
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-500"
              animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Phone icon */}
          <div className="w-12 h-20 border-2 border-teal-200 rounded-xl bg-white flex items-center justify-center relative flex-shrink-0">
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-teal-200 rounded-full" />
            <span className="text-xs font-bold text-teal-600 border border-teal-500 rounded px-1">
              ####
            </span>
          </div>

          {/* Connector right line + animated dot */}
          <div className="relative w-7 h-[2px] bg-teal-200 flex-shrink-0">
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-500"
              animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
          </div>

          {/* Step 2 Card */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 w-[220px] shadow-sm">
            <p className="text-xs text-gray-400 mb-3">
              Step 2: Enter code{" "}
              <span className="text-gray-300">(on mobile)</span>
            </p>
            <div className="text-3xl font-bold tracking-widest border-2 border-gray-200 rounded-lg px-3 py-1.5 inline-block mb-3">
              ####
            </div>
            <button className="w-full bg-teal-500 text-white py-2 rounded-lg text-sm font-medium">
              Connect
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;