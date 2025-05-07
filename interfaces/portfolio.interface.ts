export interface SocialLink {
  name: string;
  url: string;
}

export interface EmergencyContact {
  name: string;
  relation: string;
  phone: string;
  email: string;
}

export interface Contact {
  name: string;
  description: String; 
  surname: string;
  email: string;
  phone: string;
  social: SocialLink[];
  dateOfBirth: string;
  emergencyContact: EmergencyContact;
}

export interface Project {
  name: string;
  description: String; 
  image:String;
  tools: string[];
  startDate: string;
  endDate: string;
}

export interface Tool {
  name: string;
  description: string;
  category: string;
  icon: string;
}

export interface Technology {
  name: string;
  description: string;
  category: string;
}

export interface Technologies {
  languages: Technology[];
  frameworks: Technology[];
  databases: Technology[];
  cloudServices: Technology[];
  runtimes: Technology[];
  versionControl: Technology[];
}

export interface AcademyEntry {
  name: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface Certification {
  name: string;
  description: string;
  date: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Hobby {
  name: string;
  description: string;
}

export interface Achievement {
  name: string;
  description: string;
  date: string;
}

export interface ReferenceContact {
  email: string;
  phone: string;
}

export interface Reference {
  name: string;
  relation: string;
  contact: ReferenceContact;
}

export interface Portfolio {
  contact: Contact;
  projects: Project[];
  tools: Tool[];
  technologies: Technologies;
  academy: AcademyEntry[];
  certifications: Certification[];
  languages: Language[];
  hobbies: Hobby[];
  achievements: Achievement[];
  references: Reference[];
}
