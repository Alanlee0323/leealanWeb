import { Project, Experience } from '../types';

export const projects: Project[] = [
  {
    id: "p1",
    systemId: "SYS-AIGO-22",
    title: "Marine Eco-Monitor AI",
    description: "AIGO National Competition Excellence Award Winner. Advanced Image Recognition models deployed on TWCC cloud platform for monitoring marine ecosystems.",
    tech: ["PyTorch", "TWCC Cloud", "Computer Vision"],
    subdomainUrl: "#",
    github: "https://github.com/Alanlee0323/Coral_Reef_Restoration_Indicator_Fish_Species---Based_on_YOLOv5",
    status: "online",
    version: "v1.0.0",
    type: "application",
    size: "large",
    imageUrl: "https://picsum.photos/800/600?grayscale" 
  },
  {
    id: "p2",
    systemId: "SYS-GOOD-23",
    title: "Meteo-Marine Predictor",
    description: "AI GOOD Competition Excellence Award. Time-series analysis of complex marine and meteorological datasets using advanced ML libraries.",
    tech: ["Scikit-learn", "Weka", "Time-Series"],
    subdomainUrl: "#",
    status: "online",
    version: "v1.0.0",
    type: "application",
    size: "medium",
    imageUrl: "https://picsum.photos/800/600?grayscale&blur=2"
  },
  {
    id: "p3",
    systemId: "SYS-THESIS-25",
    title: "Ocean Internal Wave Detection",
    description: "Master's Thesis system. Deep Learning network for monitoring ocean internal waves via visible-light satellite imagery.",
    tech: ["Deep Learning", "Satellite Imagery", "TensorRT"],
    subdomainUrl: "#",
    github: "https://github.com/Alanlee0323/ISWM",
    status: "beta",
    version: "Research",
    type: "infrastructure",
    size: "large",
    imageUrl: "https://picsum.photos/400/200?grayscale"
  }
];

export const experiences: Experience[] = [
  {
    id: "e0",
    role: "AI Engineer",
    company: "Radiant Opto-Electronics",
    period: "2025 - Present",
    description: "Smart Manufacture System Development. Focusing on AI integration and process optimization.",
    tech: ["AI", "Smart Manufacturing", "System Dev"]
  },
  {
    id: "e1",
    role: "M.S. Electrical Engineering",
    company: "National Taiwan Ocean University",
    period: "2024 - 2025",
    description: "Focus on Ocean Internal Wave Monitoring System via Deep Learning. Oral presenter at JpGU 2025 (Makuhari Messe, Session A-TT35).",
    tech: ["Deep Learning", "TensorRT", "ONNX"]
  },
  {
    id: "e2",
    role: "B.S. Electrical Engineering",
    company: "National Taiwan Ocean University",
    period: "2020 - 2024",
    description: "Lead of Teaching Department, Pop Music Club. Specialized in AI deployment on embedded devices.",
    tech: ["Python", "Docker", "Linux"]
  },
];