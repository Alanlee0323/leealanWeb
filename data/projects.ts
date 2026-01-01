import { Project, Experience } from '../types';

export const projects: Project[] = [
  {
    id: "p1",
    systemId: "SYS-AIGO-22",
    title: "Coral Reef Eco-Monitor AI",
    description: "AIGO National Excellence Award. Developed fish species identification using 25,000+ underwater images and 126,000+ annotations, achieving 85%+ detection accuracy.",
    tech: ["PyTorch", "YOLOv5", "TWCC Cloud", "CUDA"],
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
    systemId: "SYS-AIGOOD-23",
    title: "Turbidity Prediction System",
    description: "AI GOOD Excellence Award. Implemented ML-based prediction using time-series data and probability estimation for marine turbidity forecasting.",
    tech: ["Scikit-learn", "Weka", "Python", "Time-Series"],
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
    description: "Master's Thesis research. Deep Learning network for monitoring ocean internal waves via visible-light satellite imagery, optimized with TensorRT.",
    tech: ["Deep Learning", "TensorRT", "ONNX", "Satellite Imagery"],
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
    period: "Nov 2025 - Present",
    description: "• Smart Manufacturing & HBR: Developed CV models for human behavior recognition, enhancing production safety.\n• Cost Reduction: Optimized inference pipelines to maximize hardware throughput and reduce costs.\n• MLOps: Implemented workflows for sustainable model lifecycle management.\n• Monitoring: Deployed real-time Grafana dashboards for system health visualization.",
    tech: ["Computer Vision", "MLOps", "Grafana", "Docker", "PyTorch"]
  },
  {
    id: "e1",
    role: "Student Researcher / TA",
    company: "NTOU SLTLab",
    period: "2023 - 2025",
    description: "Conducted research on ML-based prediction systems and satellite imagery analysis. Served as Python TA, mentoring 15+ students and conducting code reviews.",
    tech: ["Python", "Machine Learning", "Teaching"]
  },
  {
    id: "e2",
    role: "M.S. Electrical Engineering",
    company: "National Taiwan Ocean University",
    period: "2024 - 2025",
    description: "Specialized in Deep Learning and Data Mining. Presented research at international conferences and participated in multiple national AI competitions.",
    tech: ["PyTorch", "Data Mining", "TensorRT"]
  },
];