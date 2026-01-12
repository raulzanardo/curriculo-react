import { useState } from "react";
import type { Route } from "./+types/home";
import Header from "../components/header";
import ResumeTab from "../pages/resume";
import PortfolioTab from "../pages/portfolio";
import AboutTab from "../pages/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Raul Zanardo" },
    { name: "description", content: "Portfólio e Currículo de Raul Zanardo" },
  ];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`min-h-screen ${isDark ? "dark bg-gray-900" : "bg-gray-50"}`}
    >
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <div className="max-w-3xl mx-auto px-5 py-5">
        {activeTab === 0 && <ResumeTab isDark={isDark} />}
        {activeTab === 1 && <PortfolioTab isDark={isDark} />}
        {activeTab === 2 && <AboutTab isDark={isDark} />}
      </div>
    </div>
  );
}
