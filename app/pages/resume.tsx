interface ResumeTabProps {
  isDark: boolean;
  language: "pt" | "en";
}

export default function ResumeTab({ isDark, language }: ResumeTabProps) {
  const textColor = isDark ? "text-text-primary-dark" : "text-text-primary";
  const subtleColor = isDark
    ? "text-text-secondary-dark"
    : "text-text-secondary";
  const linkColor = isDark ? "text-primary-dark" : "text-primary";

  return (
    <div className="space-y-6">
      {/* Photo and Info */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Photo */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/curriculo-react/photo.png"
            className="w-48 h-48 rounded-full object-cover"
          />
          <div className="mt-5 text-center md:text-left">
            <p className={`text-lg font-bold ${textColor}`}>Raul Zanardo</p>
            <a
              href="mailto:raulzanardo@gmail.com"
              className={`${linkColor} hover:underline`}
            >
              raulzanardo@gmail.com
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="flex-1">
          <h2 className={`text-lg font-bold mb-3 ${textColor}`}>
            {language === "pt" ? "Resumo Profissional" : "Professional Summary"}
          </h2>
          <p className={`${subtleColor} leading-relaxed text-justify`}>
            {language === "pt"
              ? "Desenvolvedor Frontend, Mobile e Backend com mais de 5 anos de experiência na criação de produtos digitais para web e mobile. Especialista em Flutter, React e NestJS, com forte foco em UX/UI, performance e qualidade de código."
              : "Frontend, Mobile, and Backend Developer with over 5 years of experience creating digital products for web and mobile. Specialist in Flutter, React, and NestJS, with strong focus on UX/UI, performance, and code quality."}
          </p>
          <p className={`${subtleColor} leading-relaxed mt-3 text-justify`}>
            {language === "pt"
              ? "Atuação em produtos SaaS e aplicativos em produção, participando ativamente de decisões técnicas, arquitetura e evolução de produto. Experiência em desenvolvimento full-stack, desde interfaces responsivas até APIs REST escaláveis com Node.js e NestJS. Possui background em automação industrial e eletrônica, trazendo visão sistêmica, confiabilidade e engenharia de alto nível para o desenvolvimento de software moderno."
              : "Working on SaaS products and production applications, actively participating in technical decisions, architecture, and product evolution. Experience in full-stack development, from responsive interfaces to scalable REST APIs with Node.js and NestJS. Background in industrial automation and electronics, bringing systemic vision, reliability, and high-level engineering to modern software development."}
          </p>
          <p className={`${subtleColor} leading-relaxed mt-3 text-justify`}>
            {language === "pt"
              ? "Experiência em AI-assisted development, utilizando ferramentas como GitHub Copilot, Cursor e Windsurf para acelerar desenvolvimento e otimizar produtividade. Proficiente em prompt engineering para maximizar eficiência com AI agents no ciclo de desenvolvimento."
              : "Experience in AI-assisted development, using tools such as GitHub Copilot, Cursor, and Windsurf to accelerate development and optimize productivity. Proficient in prompt engineering to maximize efficiency with AI agents in the development cycle."}
          </p>

          <div className="flex gap-3 mt-4 justify-center md:justify-start">
            <a
              href="https://github.com/raulzanardo"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDark ? "hover:bg-surface-dark" : "hover:bg-surface"} p-2 rounded-full`}
            >
              <svg
                className={`w-6 h-6 ${textColor}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/raulzanardo/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDark ? "hover:bg-surface-dark" : "hover:bg-surface"} p-2 rounded-full`}
            >
              <svg
                className={`w-6 h-6 ${textColor}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <hr className={isDark ? "border-gray-700" : "border-gray-300"} />

      {/* Professional Experience */}
      <div>
        <h2 className={`text-lg font-bold mb-4 ${textColor}`}>
          {language === "pt"
            ? "Experiência Profissional"
            : "Professional Experience"}
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className={`text-base font-bold ${textColor}`}>
              {language === "pt"
                ? "Desenvolvedor Frontend | Petplace"
                : "Frontend Developer | Petplace"}
            </h3>
            <p className={`${subtleColor} text-justify leading-relaxed`}>
              {language === "pt"
                ? "Atuação no desenvolvimento do 24Pet Shelter, plataforma SaaS para gestão de abrigos e ONGs de proteção animal. Desenvolvimento e evolução do frontend utilizando React e TypeScript. Implementação de interfaces acessíveis, responsivas e performáticas. Otimização de fluxos críticos para usuários não técnicos, melhorando a usabilidade do sistema. Colaboração próxima com times de produto, QA e DevOps em ambiente ágil. Integração com pipelines de CI/CD no Microsoft Azure. Participação ativa em code reviews e definição de padrões de frontend."
                : "Working on the development of 24Pet Shelter, a SaaS platform for managing animal shelters and protection NGOs. Frontend development and evolution using React and TypeScript. Implementation of accessible, responsive, and performant interfaces. Optimization of critical flows for non-technical users, improving system usability. Close collaboration with product, QA, and DevOps teams in an agile environment. Integration with CI/CD pipelines on Microsoft Azure. Active participation in code reviews and definition of frontend standards."}
            </p>
            <p className={`${subtleColor} mt-2`}>
              {language === "pt"
                ? "Maio de 2024 – Dezembro de 2025"
                : "May 2024 – December 2025"}
            </p>
          </div>

          <div>
            <h3 className={`text-base font-bold ${textColor}`}>
              {language === "pt"
                ? "Desenvolvedor Flutter | MyOrbit"
                : "Flutter Developer | MyOrbit"}
            </h3>
            <p className={`${subtleColor} text-justify leading-relaxed`}>
              {language === "pt"
                ? "Desenvolvimento do aplicativo MyOrbit, focado na gestão de relacionamentos e organização de círculos sociais com forte ênfase em privacidade. Desenvolvimento mobile com Flutter/Dart para Android e iOS. Participação direta na concepção do produto e decisões técnicas. Implementação de fluxos complexos de UX/UI em colaboração com design. Desenvolvimento backend com NestJS/TypeScript, criando APIs REST escaláveis. Design e implementação de modelos de banco de dados e lógica de negócio. Autenticação, autorização e boas práticas de segurança. Aplicação de clean architecture e design patterns para escalabilidade. Atuação estratégica na evolução do produto."
                : "Development of the MyOrbit application, focused on relationship management and social circle organization with strong emphasis on privacy. Mobile development with Flutter/Dart for Android and iOS. Direct participation in product conception and technical decisions. Implementation of complex UX/UI flows in collaboration with design. Backend development with NestJS/TypeScript, creating scalable REST APIs. Design and implementation of database models and business logic. Authentication, authorization, and security best practices. Application of clean architecture and design patterns for scalability. Strategic involvement in product evolution."}
            </p>
            <p className={`${subtleColor} mt-2`}>
              {language === "pt"
                ? "Maio de 2024 – Dezembro de 2025"
                : "May 2024 – December 2025"}
            </p>
          </div>

          <div>
            <h3 className={`text-base font-bold ${textColor}`}>
              {language === "pt"
                ? "Desenvolvedor Flutter | Pensenova"
                : "Flutter Developer | Pensenova"}
            </h3>
            <p className={`${subtleColor} text-justify leading-relaxed`}>
              {language === "pt"
                ? "Liderança técnica no desenvolvimento de aplicativos móveis voltados à automação industrial. Desenvolvimento completo de aplicações Flutter, da concepção à publicação. Criação do aplicativo CoPal, utilizado para parametrização e controle de robôs industriais. Design e implementação da UX/UI focada em ambientes industriais. Garantia de alta performance e confiabilidade em sistemas críticos. Integração entre software mobile e hardware de automação (IoT). Colaboração próxima a equipes de engenharia e automação."
                : "Technical leadership in the development of mobile applications for industrial automation. Complete development of Flutter applications, from conception to publication. Creation of the CoPal application, used for parameterization and control of industrial robots. Design and implementation of UX/UI focused on industrial environments. Ensuring high performance and reliability in critical systems. Integration between mobile software and automation hardware (IoT). Close collaboration with engineering and automation teams."}
            </p>
            <p className={`${subtleColor} mt-2`}>
              {language === "pt"
                ? "Outubro de 2020 – Maio de 2024"
                : "October 2020 – May 2024"}
            </p>
          </div>

          <div>
            <h3 className={`text-base font-bold ${textColor}`}>
              {language === "pt"
                ? "Desenvolvedor de Automação | Nova Tecnologia"
                : "Automation Developer | Nova Tecnologia"}
            </h3>
            <p className={`${subtleColor} text-justify leading-relaxed`}>
              {language === "pt"
                ? "Desenvolvimento de sistemas de automação industrial com SCADA. Programação de robôs industriais para processos de pintura. Elaboração de projetos elétricos e quadros de comando (EPLAN). Otimização e controle de processos industriais."
                : "Development of industrial automation systems with SCADA. Programming of industrial robots for painting processes. Electrical project design and control panels (EPLAN). Optimization and control of industrial processes."}
            </p>
            <p className={`${subtleColor} mt-2`}>
              {language === "pt"
                ? "Outubro de 2014 – Abril de 2018"
                : "October 2014 – April 2018"}
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className={`text-lg font-bold mb-4 ${textColor}`}>
          {language === "pt" ? "Formação Acadêmica" : "Education"}
        </h2>
        <div className="space-y-2">
          <p className={`font-bold ${textColor}`}>
            {language === "pt"
              ? "Engenharia de Controle e Automação"
              : "Control and Automation Engineering"}
          </p>
          <p className={subtleColor}>
            {language === "pt"
              ? "IFSP – Instituto Federal de São Paulo - 2009 – 2019"
              : "IFSP – Federal Institute of São Paulo - 2009 – 2019"}
          </p>
          <p className={`font-bold ${textColor} mt-4`}>
            {language === "pt"
              ? "Técnico em Eletrônica"
              : "Electronics Technician"}
          </p>
          <p className={subtleColor}>
            {language === "pt"
              ? "ETEC Professor Aprígio Gonzaga - 2007 – 2008"
              : "ETEC Professor Aprígio Gonzaga - 2007 – 2008"}
          </p>
        </div>
      </div>

      {/* Courses */}
      <div>
        <h2 className={`text-lg font-bold mb-3 ${textColor}`}>
          {language === "pt"
            ? "Cursos e Certificações"
            : "Courses and Certifications"}
        </h2>
        <p className={subtleColor}>
          Google UX Design Certificate – Coursera (2024)
        </p>
        <p className={subtleColor}>
          Flutter Provider Essential Course – Udemy (2024)
        </p>
      </div>

      {/* Technologies */}
      <div>
        <h2 className={`text-lg font-bold mb-3 ${textColor}`}>
          {language === "pt" ? "Tecnologias" : "Technologies"}
        </h2>
        <p className={subtleColor}>
          <span className="font-semibold">
            {language === "pt" ? "Mobile:" : "Mobile:"}
          </span>{" "}
          Flutter • Dart • Android • iOS • Provider
        </p>
        <p className={subtleColor}>
          <span className="font-semibold">
            {language === "pt" ? "Web & Backend:" : "Web & Backend:"}
          </span>{" "}
          React • TypeScript • JavaScript • HTML • CSS • Node.js • NestJS • REST
          APIs
        </p>
        <p className={subtleColor}>
          <span className="font-semibold">
            {language === "pt" ? "Cloud & DevOps:" : "Cloud & DevOps:"}
          </span>{" "}
          Microsoft Azure • CI/CD • Git • GitHub • Docker
        </p>
        <p className={subtleColor}>
          <span className="font-semibold">
            {language === "pt" ? "Outras Tecnologias:" : "Other Technologies:"}
          </span>{" "}
          Python • C/C++ • Bash • Arduino • PlatformIO • Linux
        </p>
        <p className={subtleColor}>
          <span className="font-semibold">
            {language === "pt" ? "Ferramentas:" : "Tools:"}
          </span>{" "}
          VS Code • Android Studio • Xcode • Figma • EPLAN
        </p>
        <p className={subtleColor}>
          <span className="font-semibold">
            {language === "pt" ? "AI & Produtividade:" : "AI & Productivity:"}
          </span>{" "}
          GitHub Copilot • Cursor • Windsurf • Prompt Engineering • AI-Assisted
          Development
        </p>
      </div>
    </div>
  );
}
