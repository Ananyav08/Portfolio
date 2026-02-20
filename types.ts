// export interface Project {
//   id: string;
//   title: string;
//   category: string;
//   imageUrl?: string;
//   videoUrl?: string;
// }
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl?: string; // The '?' is critical here!
}
export enum Section {
  HOME = 'HOME',
  PORTFOLIO = 'PORTFOLIO',
  ABOUT = 'ABOUT',
  HIRE_ME = 'HIRE ME'
}