interface HeaderProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  isDark,
  setIsDark,
}: HeaderProps) {
  return (
    <div
      className={`sticky top-0 z-50 ${isDark ? "bg-gray-800" : "bg-white"} shadow-md`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Tabs */}
          <div className="flex space-x-1">
            {["Currículo", "Portfólio", "Sobre"].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === index
                    ? `${isDark ? "text-blue-400 border-b-2 border-blue-400" : "text-blue-600 border-b-2 border-blue-600"}`
                    : `${isDark ? "text-gray-300 hover:text-gray-100" : "text-gray-600 hover:text-gray-900"}`
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
            title="Alternar tema"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </div>
  );
}
