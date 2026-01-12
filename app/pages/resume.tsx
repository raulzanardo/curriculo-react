interface ResumeTabProps {
  isDark: boolean;
}

export default function ResumeTab({ isDark }: ResumeTabProps) {
  const textColor = isDark ? "text-gray-100" : "text-gray-900";
  const subtleColor = isDark ? "text-gray-400" : "text-gray-600";
  const linkColor = isDark ? "text-blue-400" : "text-blue-600";

  return (
    <div className="space-y-6">
      {/* Photo and Info */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Photo */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/photo.png"
            className="w-48 h-48 rounded-full object-cover"
          />
          <div className="mt-5 text-center md:text-left">
            <p className={`text-xl font-bold ${textColor}`}>Raul Zanardo</p>
            <a
              href="mailto:raulzanardo@gmail.com"
              className={`${linkColor} hover:underline`}
            >
              raulzanardo@gmail.com
            </a>
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              <a
                href="https://github.com/raulzanardo"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"} p-2 rounded-full`}
              >
                <svg
                  className="w-6 h-6"
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
                className={`${isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"} p-2 rounded-full`}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="flex-1">
          <h2 className={`text-2xl font-bold mb-3 ${textColor}`}>
            Resumo Profissional
          </h2>
          <p className={`${subtleColor} leading-relaxed text-justify`}>
            Desenvolvedor Frontend e Mobile com mais de 5 anos de experiência na
            criação de produtos digitais para web e mobile. Especialista em
            Flutter e React, com forte foco em UX/UI, performance e qualidade de
            código.
          </p>
          <p className={`${subtleColor} leading-relaxed mt-3 text-justify`}>
            Atuação em produtos SaaS e aplicativos em produção, participando
            ativamente de decisões técnicas, arquitetura e evolução de produto.
            Possui background em automação industrial e eletrônica, trazendo
            visão sistêmica, confiabilidade e engenharia de alto nível para o
            desenvolvimento de software moderno.
          </p>
          <p className={`${subtleColor} leading-relaxed mt-3 text-justify`}>
            Experiência em AI-assisted development, utilizando ferramentas como
            GitHub Copilot, Cursor e Windsurf para acelerar desenvolvimento e
            otimizar produtividade. Proficiente em prompt engineering para
            maximizar eficiência com AI agents no ciclo de desenvolvimento.
          </p>
        </div>
      </div>

      <hr className={isDark ? "border-gray-700" : "border-gray-300"} />

      {/* Professional Experience */}
      <div>
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
          Experiência Profissional
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className={`text-lg font-bold ${textColor}`}>
              Desenvolvedor Frontend na Petplace
            </h3>
            <p className={`${subtleColor} text-justify leading-relaxed`}>
              Atuação no desenvolvimento do 24Pet Shelter, plataforma SaaS para
              gestão de abrigos e ONGs de proteção animal. Desenvolvimento e
              evolução do frontend utilizando React e TypeScript, implementação
              de interfaces acessíveis, responsivas e performáticas. Otimização
              de fluxos críticos para usuários não técnicos, melhorando a
              usabilidade do sistema. Colaboração próxima com times de produto,
              QA e DevOps em ambiente ágil. Integração com pipelines de CI/CD no
              Microsoft Azure. - Maio de 2024 até Dezembro de 2025
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-bold ${textColor}`}>
              Desenvolvedor Flutter na MyOrbit
            </h3>
            <p className={`${subtleColor} text-justify leading-relaxed`}>
              Desenvolvimento do aplicativo MyOrbit, focado na gestão de
              relacionamentos e organização de círculos sociais com forte ênfase
              em privacidade. Desenvolvimento mobile com Flutter/Dart para
              Android e iOS, participação direta na concepção do produto e
              decisões técnicas. Implementação de fluxos complexos de UX/UI em
              colaboração com design. Contribuição no backend, implementando
              APIs e regras de negócio. Aplicação de clean architecture e design
              patterns para escalabilidade. - Maio de 2024 até Dezembro de 2025
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-bold ${textColor}`}>
              Desenvolvedor Flutter na Pensenova
            </h3>
            <p className={`${subtleColor} text-justify leading-relaxed`}>
              Liderança técnica no desenvolvimento de aplicativos móveis
              voltados à automação industrial. Desenvolvimento completo de
              aplicações Flutter, da concepção à publicação. Criação do
              aplicativo CoPal, utilizado para parametrização e controle de
              robôs industriais. Design e implementação da UX/UI focada em
              ambientes industriais. Garantia de alta performance e
              confiabilidade em sistemas críticos. Integração entre software
              mobile e hardware de automação (IoT). - Outubro de 2020 até Maio
              de 2024
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-bold ${textColor}`}>
              Desenvolvedor de Automação na Nova Tecnologia
            </h3>
            <p className={`${subtleColor} text-justify leading-relaxed`}>
              Desenvolvimento de sistemas de automação industrial com SCADA.
              Programação de robôs industriais para processos de pintura.
              Elaboração de projetos elétricos e quadros de comando (EPLAN).
              Otimização e controle de processos industriais. - Outubro de 2014
              até Abril de 2018
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
          Formação Acadêmica
        </h2>
        <div className="space-y-2">
          <p className={`font-bold ${textColor}`}>
            Engenharia de Controle e Automação
          </p>
          <p className={subtleColor}>
            IFSP – Instituto Federal de São Paulo - 2009 – 2019
          </p>
          <p className={`font-bold ${textColor} mt-4`}>Técnico em Eletrônica</p>
          <p className={subtleColor}>
            ETEC Professor Aprígio Gonzaga - 2007 – 2008
          </p>
        </div>
      </div>

      {/* Courses */}
      <div>
        <h2 className={`text-xl font-bold mb-3 ${textColor}`}>
          Cursos e Certificações
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
        <h2 className={`text-xl font-bold mb-3 ${textColor}`}>Tecnologias</h2>
        <p className={subtleColor}>
          <span className="font-semibold">Mobile:</span> Flutter • Dart •
          Android • iOS • Provider
        </p>
        <p className={subtleColor}>
          <span className="font-semibold">Web:</span> React • TypeScript •
          JavaScript • HTML • CSS
        </p>
        <p className={subtleColor}>
          <span className="font-semibold">Backend:</span> Node.js • APIs RESTful
          • Firebase
        </p>
        <p className={subtleColor}>
          <span className="font-semibold">Ferramentas:</span> Git • GitHub • VS
          Code • Azure DevOps • CI/CD
        </p>
        <p className={subtleColor}>
          <span className="font-semibold">Design:</span> Figma • Adobe XD •
          Material Design
        </p>
      </div>
    </div>
  );
}
