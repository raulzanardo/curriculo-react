import { useState, useEffect } from "react";
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
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDark(true);
    }
  }, []);

  return (
    <div
      className={`min-h-screen ${isDark ? "dark bg-background-dark" : "bg-background"}`}
    >
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDark={isDark}
        setIsDark={setIsDark}
        language={language}
        setLanguage={setLanguage}
      />

      <div className="max-w-3xl mx-auto px-5 py-5">
        {activeTab === 0 && <ResumeTab isDark={isDark} language={language} />}
        {activeTab === 1 && (
          <PortfolioTab isDark={isDark} language={language} />
        )}
        {activeTab === 2 && (
          <AboutTab
            isDark={isDark}
            language={language}
            setLanguage={setLanguage}
          />
        )}
      </div>
    </div>
  );
}
