import { Feature, PricingTier, FAQItem, NavItem } from '../types';
import { Zap, Shield, Cpu, Globe, BarChart, Layers } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const FEATURES: Feature[] = [
  {
    id: "f1",
    title: "Hyper-Speed Processing",
    description: "Our engine processes data at the speed of light, ensuring your workflows never lag.",
    icon: Zap
  },
  {
    id: "f2",
    title: "Neon-Grade Security",
    description: "Military-grade encryption wrapped in a retro-futuristic shell.",
    icon: Shield
  },
  {
    id: "f3",
    title: "AI Integration",
    description: "Plug directly into neural networks to automate decision making.",
    icon: Cpu
  },
  {
    id: "f4",
    title: "Global Grid Access",
    description: "Deploy from anywhere on the grid. Low latency worldwide.",
    icon: Globe
  },
  {
    id: "f5",
    title: "Holographic Analytics",
    description: "Visualize your metrics with our 3D dashboard interface.",
    icon: BarChart
  },
  {
    id: "f6",
    title: "Multi-Layer Stack",
    description: "Built for scalability across all dimensions of your infrastructure.",
    icon: Layers
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Rookie",
    price: { monthly: 29, annual: 290 },
    features: ["5 Users", "Basic Analytics", "10GB Storage", "Community Support"],
    recommended: false
  },
  {
    id: "pro",
    name: "Cyber Punk",
    price: { monthly: 79, annual: 790 },
    features: ["Unlimited Users", "Holographic Analytics", "1TB Storage", "24/7 Priority Support", "AI Modules"],
    recommended: true
  },
  {
    id: "enterprise",
    name: "Grid Master",
    price: { monthly: 199, annual: 1990 },
    features: ["Custom Infrastructure", "Dedicated Neural Net", "Unlimited Storage", "White Glove Service"],
    recommended: false
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "q1",
    question: "Is this compatible with legacy systems?",
    answer: "Yes, our API bridges the gap between the 80s and the future. We support REST, GraphQL, and even SOAP if you're feeling nostalgic."
  },
  {
    id: "q2",
    question: "Can I cancel my subscription?",
    answer: "You can jack out of the matrix at any time. No hidden fees, no hard feelings."
  },
  {
    id: "q3",
    question: "Do you offer on-premise deployment?",
    answer: "For Enterprise 'Grid Master' plans, we offer full on-premise deployment options."
  },
  {
    id: "q4",
    question: "How secure is my data?",
    answer: "We use quantum-resistant encryption protocols. Your data is safer here than in a subterranean vault."
  }
];