export type Language = {
  language: string;
  languageIcon: string;
};

export type Experience = {
  from: string;
  to: string;
  poste: string;
  entreprise: string;
  location: string;
  entrepriseLogo: string;
  logobg: string;
  projectDetails: ProjectDetails;
};

type ProjectDetails = {
  projectDescription: string[];
  languages: Language[];
};

export type Service = {
  serviceName: string;
  serviceImg: string;
};

export type Project = {
  projectName: string;
  projectScreen: string;
  projectDescription: string;
  linktoGitHub: string;
  languages: Language[];
};
