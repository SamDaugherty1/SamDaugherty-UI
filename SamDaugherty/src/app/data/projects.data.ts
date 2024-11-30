export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  technologies: string[];
}

export class ProjectsData {
  static readonly projects: Project[] = [
    {
      title: 'Planning Poker',
      description: 'After being tired of using poorly designed planning poker apps spammed with ads, I decided to build my own - without ads :)',
      imageUrl: 'PlanningPoker.png',
      link: 'https://planningpoker.agiledevelopers.org',
      technologies: ['Angular', '. NET', 'SignalR']
    }
  ];
}
