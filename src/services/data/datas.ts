import { Experience, Language, Project, Service } from "../types/dataTypes";

export const Languages = [
  {
    language: "JavaScript",
    languageIcon: "/icons/javascript.svg",
  },
  {
    language: "TypeScript",
    languageIcon: "/icons/typescript.svg",
  },
  {
    language: "GraphQl",
    languageIcon: "/icons/graphql.svg",
  },
  {
    language: "VueJs",
    languageIcon: "/icons/vue.svg",
  },
  {
    language: "ReactJs",
    languageIcon: "/icons/react_ts.svg",
  },
  {
    language: "NodeJS",
    languageIcon: "/icons/nodejs.svg",
  },
  {
    language: "ExpressJs",
    languageIcon: "/icons/express-js.svg",
  },
  {
    language: "NestJs",
    languageIcon: "/icons/nest.svg",
  },
  {
    language: "Java",
    languageIcon: "/icons/java.svg",
  },
  {
    language: "J2EE",
    languageIcon: "/icons/j2ee.png",
  },
  {
    language: "SpringBoot",
    languageIcon: "/icons/spring-boot.svg",
  },
  {
    language: "PHP",
    languageIcon: "/icons/php.svg",
  },
  {
    language: "Symfony",
    languageIcon: "/icons/symfony.svg",
  },
  {
    language: "Python",
    languageIcon: "/icons/python.svg",
  },
] as Language[];

export const Experiences = [
  {
    from: "Oct. 2022",
    to: "Jan. 2023",
    poste: "Stagiaire développeur Odoo",
    entreprise: "CIRDOMA Avaradrano",
    location: "Antananarivo, Madagascar",
    entrepriseLogo: "/icons/cirdoma.png",
    logobg: "#cca675",
    projectDetails: {
      projectDescription: [
        "Conception et réalisation d' un module personnalisés pour la gestion et suivis de dossier des usagers de la CIRDOMA sous Odoo 15.",
      ],
      languages: [
        {
          language: "ReactJs",
          languageIcon: "/icons/react_ts.svg",
        },
      ],
    },
  },
  {
    from: "Mar. 2021",
    to: "Juin. 2021",
    poste: "Stagiaire en ingénieur d'étude et développement",
    entreprise: "Pulse",
    location: "Antananarivo, Madagascar",
    entrepriseLogo: "/icons/logo-pulse.png",
    logobg: "#fff",
    projectDetails: {
      projectDescription: [
        "Participation au développement d'une nouvelle fonctionnalité pour une application interne de l'entreprise avec le framework PHP Jelix.",
        "Participation au développement de l'application IT-SelfcareTelma avec le framework PHP Symfony.",
        "Participation à la conception et au développement du projet OGC Pulse avec le framework PHP Symfony.",
      ],
      languages: [
        {
          language: "ReactJs",
          languageIcon: "/icons/react_ts.svg",
        },
      ],
    },
  },
] as Experience[];

export const Services = [
  {
    serviceName: "Développement Web",
    serviceImg: "/images/webdevelopment.jpg",
  },
  {
    serviceName: "UX/UI",
    serviceImg: "/images/ui_ux.jpg",
  },
  {
    serviceName: "Développement de Logiciels",
    serviceImg: "/images/softwaredevelopment.jpg",
  },
] as Service[];

export const Projects = [
  {
    projectName: "ABDA Project",
    projectScreen: "/images/projectScreenShoot/ABDA_MONITORING_PROJECT.png",
    projectDescription:
      "Il s'agit d'un projet de surveillance compact visant à tracer les actions effectuées par un utilisateur sur une base de données d'étudiants.",
    linktoGitHub: "",
    languages: [
      {
        language: "ReactJs",
        languageIcon: "/icons/react_ts.svg",
      },
      {
        language: "TypeScript",
        languageIcon: "/icons/typescript.svg",
      },
      {
        language: "SpringBoot",
        languageIcon: "/icons/spring-boot.svg",
      },
    ],
  },
  {
    projectName: "ENI-BackOffice",
    projectScreen: "/images/projectScreenShoot/eni.jpg",
    projectDescription:
      "Une plateforme web élaborée dans le but de faciliter le suivi des étudiants de l'École Nationale d'Informatique. Elle permet de surveiller leur présence aux séances de cours afin de vérifier leur assiduité.",
    linktoGitHub: "",
    languages: [
      {
        language: "ReactJs",
        languageIcon: "/icons/react_ts.svg",
      },
      {
        language: "TypeScript",
        languageIcon: "/icons/typescript.svg",
      },
      {
        language: "Express",
        languageIcon: "/icons/express-js.svg",
      },
    ],
  },
  {
    projectName: "Go-Travel",
    projectScreen: "/images/projectScreenShoot/Go-Travel.png",
    projectDescription:
      "Amateurs de voyages et d'aventures ? Avec Go-Travel, partez à la découverte des sites touristiques emblématiques de Madagascar en toute simplicité. Réservez vos visites en quelques clics pour découvrir les trésors cachés de cette magnifique île.",
    linktoGitHub: "",
    languages: [
      {
        language: "VueJs",
        languageIcon: "/icons/vue.svg",
      },
    ],
  },
  {
    projectName: "e-Fandray",
    projectScreen: "/images/projectScreenShoot/eFandray.png",
    projectDescription:
      "eFandray est une application web de chat. Simple, intuitive et pratique, elle permet de rester en contact avec vos proches, collègues et amies en toute simplicité.",
    linktoGitHub: "",
    languages: [
      {
        language: "ReactJs",
        languageIcon: "/icons/react_ts.svg",
      },
      {
        language: "TypeScript",
        languageIcon: "/icons/typescript.svg",
      },
      {
        language: "GraphQl",
        languageIcon: "/icons/graphql.svg",
      },
    ],
  },
] as Project[];
