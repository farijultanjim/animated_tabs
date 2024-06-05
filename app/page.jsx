"use client";

import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "roadmap", label: "Roadmap" },
  { id: "gallery", label: "Gallery" },
  { id: "projects", label: "Projects" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <main className="h-screen flex items-center justify-center">
      <div>
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "" : "hover:opacity-50"
              } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-white focus-visible:outline transition`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-pill"
                  transition={{ duration: 0.5, type: "spring" }}
                  className="bg-white absolute inset-0"
                  style={{ borderRadius: 9999}}
                  />
              )}
              <span className="relative z-10 mix-blend-exclusion">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
