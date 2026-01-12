import { Mail } from "lucide-react";

interface AboutTabProps {
  isDark: boolean;
  language: "pt" | "en";
  setLanguage: (lang: "pt" | "en") => void;
}

export default function AboutTab({
  isDark,
  language,
  setLanguage,
}: AboutTabProps) {
  const textColor = isDark ? "text-text-primary-dark" : "text-text-primary";
  const subtleColor = isDark
    ? "text-text-secondary-dark"
    : "text-text-secondary";
  const linkColor = isDark ? "text-primary-dark" : "text-primary";

  return (
    <div className="space-y-5">
      <div>
        <h2 className={`text-lg font-bold mb-3 ${textColor}`}>
          {language === "pt"
            ? "Oi, meu nome é Raul!"
            : "Hello, my name is Raul!"}
        </h2>
        <p className={`${subtleColor} text-justify leading-relaxed`}>
          {language === "pt"
            ? "Sou desenvolvedor Flutter há mais de 5 anos e também trabalho com desenvolvimento web utilizando React e backend com NestJS. Com formação em Engenharia de Controle e Automação, especializo-me no desenvolvimento de aplicativos mobile e web para o setor industrial, atuando em todo o ciclo de desenvolvimento: desde a concepção e design de interfaces até testes, otimização e publicação de soluções robustas e escaláveis."
            : "I've been a Flutter developer for over 5 years and also work with web development using React and backend with NestJS. With a degree in Control and Automation Engineering, I specialize in developing mobile and web applications for the industrial sector, working throughout the entire development cycle: from concept and interface design to testing, optimization, and publishing robust and scalable solutions."}
        </p>
      </div>

      <p className={`${subtleColor} text-justify leading-relaxed`}>
        {language === "pt"
          ? "Nascido e criado em São Paulo, sou apaixonado por tecnologia e inovação. Nos meus momentos livres, exercito minha criatividade através da programação, design de interfaces, desenvolvimento de projetos eletrônicos e produção musical."
          : "Born and raised in São Paulo, I'm passionate about technology and innovation. In my free time, I exercise my creativity through programming, interface design, electronic projects, and music production."}
      </p>

      <p className={`${subtleColor} text-justify leading-relaxed`}>
        {language === "pt"
          ? "Reconhecido pela minha abordagem criativa na resolução de problemas e paixão por inovação, valorizo a experimentação e não tenho receio de explorar novas tecnologias. Acredito em metas bem definidas, comunicação clara e processos estruturados. Família e amigos são fundamentais na minha vida, proporcionando equilíbrio entre vida pessoal e profissional."
          : "Known for my creative approach to problem-solving and passion for innovation, I value experimentation and embrace exploring new technologies. I believe in well-defined goals, clear communication, and structured processes. Family and friends are fundamental in my life, providing balance between personal and professional life."}
      </p>

      <p className={`${subtleColor} text-justify leading-relaxed`}>
        {language === "pt"
          ? "Minha experiência inclui desenvolvimento web com React, desenvolvimento de APIs backend com NestJS, programação de CLPs (Controladores Lógicos Programáveis), desenvolvimento de sistemas para robótica industrial (pintura e paletização), e criação de soluções completas de IoT para monitoramento e análise de dados em plantas industriais. Também possuo experiência diversificada no setor de áudio e música, atuando como produtor musical, engenheiro de som e técnico de palco."
          : "My experience includes web development with React, backend API development with NestJS, PLC (Programmable Logic Controllers) programming, industrial robotics systems development (painting and palletizing), and creating complete IoT solutions for monitoring and data analysis in industrial plants. I also have diverse experience in the audio and music sector, working as a music producer, sound engineer, and stage technician."}
      </p>

      <div className="space-y-2 mt-6">
        <div className="flex items-center gap-2">
          <Mail className={`w-5 h-5 ${textColor}`} />
          <a
            href="mailto:raulzanardo@gmail.com"
            className={`${linkColor} hover:underline`}
          >
            raulzanardo@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <svg
            className={`w-5 h-5 ${textColor}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <a
            href="https://github.com/raulzanardo"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkColor} hover:underline`}
          >
            github.com/raulzanardo
          </a>
        </div>
        <div className="flex items-center gap-2">
          <svg
            className={`w-5 h-5 ${textColor}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <a
            href="https://www.linkedin.com/in/raulzanardo/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkColor} hover:underline`}
          >
            linkedin.com/in/raulzanardo/
          </a>
        </div>
      </div>

      {/* Photo */}
      <div className="mt-6 rounded-2xl overflow-hidden max-w-full">
        <img
          src="/curriculo-react/photo_about.png"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
