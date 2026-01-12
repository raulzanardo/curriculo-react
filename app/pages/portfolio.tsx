import { useState } from "react";
import { X, ExternalLink } from "lucide-react";

interface PortfolioTabProps {
  isDark: boolean;
  language: "pt" | "en";
}

export default function PortfolioTab({ isDark, language }: PortfolioTabProps) {
  const textColor = isDark ? "text-text-primary-dark" : "text-text-primary";
  const bgColor = isDark ? "bg-surface-dark" : "bg-surface";
  const borderColor = isDark ? "border-surface-dark" : "border-surface";
  const modalBgColor = isDark ? "bg-surface-dark" : "bg-background";
  const modalBorderColor = isDark ? "border-surface-dark" : "border-surface";

  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const projects = [
    {
      image: "/curriculo-react/myorbit_logo.png",
      bgColor: "#f5f5f5",
      title: "MyOrbit",
      description:
        language === "pt"
          ? "Aplicativo focado na gestão de relacionamentos e organização de círculos sociais"
          : "Application focused on relationship management and social circle organization",
      url: "https://www.myorbit.chat",
      detailedDescription:
        language === "pt"
          ? "MyOrbit é um aplicativo inovador focado na gestão de relacionamentos pessoais e organização de círculos sociais, com forte ênfase em privacidade e controle de dados pelo usuário. O aplicativo permite aos usuários mapear e organizar seus relacionamentos em diferentes órbitas (círculos sociais), facilitando a gestão de conexões pessoais e profissionais de forma privada e segura."
          : "MyOrbit is an innovative application focused on personal relationship management and social circle organization, with strong emphasis on privacy and user data control. The application allows users to map and organize their relationships in different orbits (social circles), facilitating the management of personal and professional connections in a private and secure way.",
      features:
        language === "pt"
          ? [
              "Desenvolvido em Flutter para Android e iOS",
              "Arquitetura limpa e design patterns modernos",
              "APIs RESTful e regras de negócio no backend",
              "Forte ênfase em privacidade e controle de dados",
            ]
          : [
              "Developed in Flutter for Android and iOS",
              "Clean architecture and modern design patterns",
              "RESTful APIs and business rules in backend",
              "Strong emphasis on privacy and data control",
            ],
      technologies: [
        "Flutter & Dart",
        "Clean Architecture",
        "Provider (State Management)",
        "RESTful APIs",
        "Git & GitHub",
      ],
    },
    {
      image: "/curriculo-react/petplace_logo.png",
      bgColor: "#f5f5f5",
      title: "24Pet Shelter",
      description:
        language === "pt"
          ? "Plataforma SaaS para gestão de abrigos e ONGs de proteção animal"
          : "SaaS platform for managing animal shelters and protection NGOs",
      url: "https://www.24pet.com/products/24petshelter",
      detailedDescription:
        language === "pt"
          ? "24Pet Shelter é uma plataforma SaaS completa desenvolvida para otimizar a gestão de abrigos de animais e ONGs de proteção animal. A plataforma oferece funcionalidades completas para cadastro de animais, controle de adoções, gestão de voluntários, controle veterinário, e muito mais, tudo em uma interface moderna e intuitiva."
          : "24Pet Shelter is a comprehensive SaaS platform developed to optimize the management of animal shelters and animal protection NGOs. The platform offers complete functionalities for animal registration, adoption control, volunteer management, veterinary control, and much more, all in a modern and intuitive interface.",
      features:
        language === "pt"
          ? [
              "Desenvolvimento frontend com React e TypeScript",
              "Interfaces acessíveis, responsivas e performáticas",
              "Otimização de fluxos para usuários não técnicos",
              "Integração com pipelines de CI/CD no Microsoft Azure",
            ]
          : [
              "Frontend development with React and TypeScript",
              "Accessible, responsive, and performant interfaces",
              "Optimization of flows for non-technical users",
              "Integration with CI/CD pipelines on Microsoft Azure",
            ],
      technologies: [
        "React & TypeScript",
        "HTML5 & CSS3",
        "RESTful APIs",
        "Microsoft Azure",
        "CI/CD Pipelines",
        "Git & GitHub",
      ],
    },
    {
      image: "/curriculo-react/copal_logo.png",
      bgColor: "#617e8b",
      title: "CoPal",
      description:
        language === "pt"
          ? "Aplicativo utilizado para parametrizar e controlar robôs de Paletização"
          : "Application used to parameterize and control palletizing robots",
      url: "https://apps.apple.com/br/app/copal/id1660752505/",
      detailedDescription:
        language === "pt"
          ? "Copal vem de 'Cooperative Palletization', trata-se de um ecossistema integrado voltado à paletização inteligente utilizando robôs industriais em uma linha de produção. O papel do aplicativo de parametrização e controle CoPal é facilitar as trocas de produtos e da maneira que os produtos são dispostos no palete, chamadas de 'amarras'."
          : "Copal comes from 'Cooperative Palletization', it is an integrated ecosystem focused on intelligent palletization using industrial robots on a production line. The role of the CoPal parameterization and control application is to facilitate product changes and the way products are arranged on the pallet, called 'tie-downs'.",
      features:
        language === "pt"
          ? [
              "Desenvolvido em Flutter para Android e iOS",
              "Interface de usuário simples com fluxo de assistente",
              "Controle remoto do robô industrial",
              "Integração com sistemas de automação industrial",
            ]
          : [
              "Developed in Flutter for Android and iOS",
              "Simple user interface with wizard flow",
              "Remote control of industrial robot",
              "Integration with industrial automation systems",
            ],
      technologies: [
        "Flutter & Dart",
        "Android & iOS",
        "Provider (State Management)",
        "IoT Integration",
        "Industrial Automation",
        "Remote Control Systems",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${bgColor} border ${borderColor} rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer`}
            onClick={() => setSelectedProject(projects[index])}
          >
            <div
              className="h-48 flex items-center justify-center p-4"
              style={{ backgroundColor: project.bgColor }}
            >
              <img
                src={project.image}
                alt={`${project.title} logo`}
                className="max-h-full max-w-full object-contain"
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

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            className={`${modalBgColor} border ${modalBorderColor} rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} logo`}
                    className="w-8 h-8 object-contain"
                  />

                  <h2 className={`text-xl font-bold ${textColor}`}>
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <X size={20} className={textColor} />
                </button>
              </div>

              {/* Project Image */}
              <div
                className={`h-48 flex items-center justify-center p-4 rounded-lg mb-6 bg-white`}
                style={{ backgroundColor: selectedProject.bgColor }}
              >
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <p
                  className={`${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}
                >
                  {selectedProject.detailedDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-3 ${textColor}`}>
                  {language === "pt"
                    ? "Características Principais"
                    : "Key Features"}
                </h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack */}
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-3 ${textColor}`}>
                  {language === "pt" ? "Stack Tecnológico" : "Technology Stack"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm ${isDark ? "bg-surface-dark text-gray-300" : "bg-gray-100 text-gray-700"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visit Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => window.open(selectedProject.url, "_blank")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${isDark ? "bg-primary-dark hover:bg-opacity-80 text-white" : "bg-primary hover:bg-opacity-90 text-white"}`}
                >
                  <ExternalLink size={18} />
                  {language === "pt" ? "Visitar Projeto" : "Visit Project"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
