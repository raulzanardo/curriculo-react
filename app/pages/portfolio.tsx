interface PortfolioTabProps {
  isDark: boolean;
}

export default function PortfolioTab({ isDark }: PortfolioTabProps) {
  const textColor = isDark ? "text-gray-100" : "text-gray-900";
  const bgColor = isDark ? "bg-gray-800" : "bg-white";
  const borderColor = isDark ? "border-gray-700" : "border-gray-200";

  const projects = [
    {
      image: "assets/images/portfolio/myorbit_logo.png",
      bgColor: isDark ? "#1e293b" : "#ffffff",
      title: "MyOrbit",
      description:
        "Aplicativo focado na gestão de relacionamentos e organização de círculos sociais",
      url: "https://www.myorbit.chat",
    },
    {
      image: "assets/images/portfolio/petplace_logo.png",
      bgColor: isDark ? "#1e293b" : "#ffffff",
      title: "24Pet Shelter",
      description:
        "Plataforma SaaS para gestão de abrigos e ONGs de proteção animal",
      url: "https://www.24pet.com/products/24petshelter",
    },
    {
      image: "assets/images/portfolio/copal_logo.png",
      bgColor: isDark ? "#1e293b" : "#617e8b",
      title: "CoPal",
      description:
        "Aplicativo utilizado para parametrizar e controlar robôs de Paletização",
      url: "https://apps.apple.com/br/app/copal/id1660752505/",
    },
  ];

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
              <div className="text-6xl">🎯</div>
            </div>
            <div className="p-4">
              <h3 className={`text-lg font-bold ${textColor} mb-2`}>
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
