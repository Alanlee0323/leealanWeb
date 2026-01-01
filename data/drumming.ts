

import { YoutubeVideo, Gig, CareerEvent, TeachingService } from '../types';

export const drumVideos: YoutubeVideo[] = [
  {
    id: "v1",
    videoId: "dQw4w9WgXcQ", // Placeholder: Replace with real ID
    title: "Poly-rhythmic Analysis [Cover]",
    category: "cover",
    views: "12K"
  },
  {
    id: "v2",
    videoId: "dQw4w9WgXcQ", // Placeholder
    title: "Live at The Void - Solo Improvisation",
    category: "performance",
    views: "5.4K"
  },
  {
    id: "v3",
    videoId: "dQw4w9WgXcQ", // Placeholder
    title: "Linear Drumming Concepts v2.0",
    category: "lesson",
    views: "8.1K"
  }
];

export const gigLog: Gig[] = [
  {
    id: "g1",
    date: "2023-12-15",
    venue: "Neon Garden Arena",
    location: "Taipei",
    artist: "Cyber Funk Collective",
    role: "Session Drummer"
  },
  {
    id: "g2",
    date: "2023-10-04",
    venue: "Blue Note",
    location: "Tokyo",
    artist: "Alan Lee Trio",
    role: "Band Leader"
  },
  {
    id: "g3",
    date: "2023-08-20",
    venue: "Summer Sonic",
    location: "Osaka",
    artist: "The Algorithms",
    role: "Backing Percussion"
  }
];

export const biography = `李宇倫，目前於基隆 IF MUSIC STUDIO 及基隆二信高級中學擔任爵士鼓教師（2023年9月至今），是一名鼓手。從國中開始學習爵士鼓至今，在大學期間更是投入大量時間精進技巧並開始從事音樂教學工作，並且於2023年8月取得 Yamaha 音樂能力檢定爵士鼓6級認證。

曾擔任多場重要音樂活動的鼓組技師助理: 河岸留言 Dave Weckl / Tom Kennedy Project（11月）、Yamaha Larnell Lewis 演奏講習會（11月），以及第十一屆臺灣國際打擊樂節川口千里場次（5月），基隆跨年搖滾基隆城鼓組技師(2022)。

演出經歷包括 RIKI 樂團 2023 年 7 月北中南巡演（台北 Revolver、台中迴響、高雄百樂門）專場鼓手，以及 2022 年 10 月基隆好港生活節「引樂人」樂團鼓手。在大學期間曾任國立臺灣海洋大學熱音社樂器教學部幹部（2021年9月），負責爵士鼓教學及活動規劃。`;

export const careerTimeline: CareerEvent[] = [
  {
    id: "c1",
    date: "2023.11",
    title: "Dave Weckl / Tom Kennedy Project",
    location: "河岸留言",
    role: "爵士鼓技師助理",
    category: "technician",
    description: "2023年度爵士薦選"
  },
  {
    id: "c2",
    date: "2023.11",
    title: "Larnell Lewis 演奏講習會 & Workshop",
    location: "台灣 Yamaha",
    role: "爵士鼓技師助理",
    category: "technician"
  },
  {
    id: "c3",
    date: "2023.09 - Present",
    title: "IF MUSIC STUDIO",
    location: "基隆",
    role: "爵士鼓老師",
    category: "teaching",
    description: "熱門音樂指標性音樂教室"
  },
  {
    id: "c4",
    date: "2023.09 - Present",
    title: "二信高級中學",
    location: "基隆",
    role: "爵士鼓社團課老師",
    category: "teaching"
  },
  {
    id: "c5",
    date: "2023.08",
    title: "Yamaha 音樂能力檢定",
    role: "爵士鼓6級通過",
    category: "certification",
    description: "Certification Grade 6"
  },
  {
    id: "c6",
    date: "2023.07",
    title: "RIKI 北中南巡演",
    location: "台北 Revolver / 台中迴響 / 高雄百樂門",
    role: "專場鼓手",
    category: "performance"
  },
  {
    id: "c7",
    date: "2023.05",
    title: "第十一屆臺灣國際打擊樂節 - 川口千里",
    location: "TIPC",
    role: "鼓組技師",
    category: "technician",
    description: "佐藤奏 & 川口千里場次"
  },
  {
    id: "c8",
    date: "2022.12",
    title: "基隆跨年 (搖滾基隆城)",
    location: "基隆",
    role: "鼓組技師",
    category: "technician"
  },
  {
    id: "c9",
    date: "2022.10",
    title: "基隆好港生活節",
    role: "<引樂人> 樂團鼓手",
    category: "performance"
  },
  {
    id: "c10",
    date: "2021.09",
    title: "國立臺灣海洋大學熱音社",
    location: "NTOU",
    role: "樂器教學部幹部 / 爵士鼓教學",
    category: "teaching"
  }
];

export const teachingServices: TeachingService[] = [
  {
    id: "t1",
    title: "Private Lessons",
    level: "All Levels",
    description: "Personalized drum instruction focusing on technique, reading, and musicality.",
    features: ["Custom Curriculum", "Video Review", "Goal Setting"]
  },
  {
    id: "t2",
    title: "Advanced Rhythm Workshop",
    level: "Advanced",
    description: "Deep dive into polyrhythms, metric modulation, and linear drumming.",
    features: ["Polyrhythmic Theory", "Odd Meters", "Independence"]
  }
];