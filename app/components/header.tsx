import { Sun, Moon, Globe } from "lucide-react";

interface HeaderProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  language: "pt" | "en";
  setLanguage: (lang: "pt" | "en") => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  isDark,
  setIsDark,
  language,
  setLanguage,
}: HeaderProps) {
  return (
    <div
      className={`sticky top-0 z-50 ${isDark ? "bg-surface-dark" : "bg-surface"} shadow-md`}
    >
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Tabs */}
          <div className="flex space-x-1">
            {(language === "pt"
              ? ["Currículo", "Portfólio", "Sobre"]
              : ["Resume", "Portfolio", "About"]
            ).map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === index
                    ? `${isDark ? "text-primary-dark border-b-2 border-primary-dark" : "text-primary border-b-2 border-primary"}`
                    : `${isDark ? "text-text-primary-dark hover:text-primary-dark" : "text-text-secondary hover:text-primary"}`
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
              className={`p-2 rounded-full ${isDark ? "hover:bg-surface-dark" : "hover:bg-surface"}`}
              title="Alternar idioma"
            >
              <Globe
                size={20}
                className={
                  isDark ? "text-text-primary-dark" : "text-text-primary"
                }
              />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full ${isDark ? "hover:bg-surface-dark" : "hover:bg-surface"}`}
              title="Alternar tema"
            >
              {isDark ? (
                <Moon size={20} color="white" fill="white" />
              ) : (
                <Sun size={20} color="black" fill="black" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
