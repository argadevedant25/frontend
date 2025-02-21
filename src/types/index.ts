interface Image {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}
  
  interface Hero {
    title: string;
    subtitle: string;
    description: string;
  }
  
  interface Service {
    title: string;
    description: string;
  }
  
  interface Work {
    title: string;
    category: string;
    year: string;
    image: Image;
  }
  
  export interface HeroProps {
    data: Hero[];
  }
  
  export interface ServicesProps {
    data: Service[];
  }
  
  export interface WorksProps {
    data: Work[];
  }