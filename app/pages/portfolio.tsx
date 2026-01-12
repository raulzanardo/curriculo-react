import { Users, Heart, Cog } from "lucide-react";

interface PortfolioTabProps {
  isDark: boolean;
  language: "pt" | "en";
}

export default function PortfolioTab({ isDark, language }: PortfolioTabProps) {
  const textColor = isDark ? "text-text-primary-dark" : "text-text-primary";
  const bgColor = isDark ? "bg-surface-dark" : "bg-surface";
  const borderColor = isDark ? "border-surface-dark" : "border-surface";

  const projects = [
    {
      image: "assets/images/portfolio/myorbit_logo.png",
      bgColor: isDark ? "#2a2a2a" : "#f5f5f5",
      title: "MyOrbit",
      description:
        language === "pt"
          ? "Aplicativo focado na gestão de relacionamentos e organização de círculos sociais"
          : "Application focused on relationship management and social circle organization",
      url: "https://www.myorbit.chat",
      icon: Users,
    },
    {
      image: "assets/images/portfolio/petplace_logo.png",
      bgColor: isDark ? "#2a2a2a" : "#f5f5f5",
      title: "24Pet Shelter",
      description:
        language === "pt"
          ? "Plataforma SaaS para gestão de abrigos e ONGs de proteção animal"
          : "SaaS platform for managing animal shelters and protection NGOs",
      url: "https://www.24pet.com/products/24petshelter",
      icon: Heart,
    },
    {
      image: "assets/images/portfolio/copal_logo.png",
      bgColor: "#617e8b",
      title: "CoPal",
      description:
        language === "pt"
          ? "Aplicativo utilizado para parametrizar e controlar robôs de Paletização"
          : "Application used to parameterize and control palletizing robots",
      url: "https://apps.apple.com/br/app/copal/id1660752505/",
      icon: Cog,
    },
  ];

  const getIconColor = (bgColor: string) => {
    // For dark blue backgrounds, use white text for contrast
    if (bgColor === "#617e8b") return "text-white";
    // For other backgrounds, use theme-appropriate text color
    return isDark ? "text-text-primary-dark" : "text-text-primary";
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${bgColor} border ${borderColor} rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer`}
            onClick={() => window.open(project.url, "_blank")}
          >
            <div
              className="h-48 flex items-center justify-center p-4"
              style={{ backgroundColor: project.bgColor }}
            >
              <project.icon
                size={64}
                className={getIconColor(project.bgColor)}
              />
            </div>
            <div className="p-4">
              <h3 className={`text-base font-bold ${textColor} mb-2`}>
                {project.title}
              </h3>
              <p
                className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
