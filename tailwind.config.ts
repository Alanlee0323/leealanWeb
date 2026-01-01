import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050505",      // True Void
          secondary: "#0A0A0A",    // Offset Black
          glass: "rgba(10, 10, 10, 0.8)",
          panel: "rgba(20, 20, 20, 0.4)",
        },
        text: {
          primary: "#EDEDED",
          secondary: "#A1A1AA",
          muted: "#52525B",
          code: "#0070F3",         // Tech Blue
        },
        border: {
          subtle: "#27272A",
          highlight: "rgba(0, 112, 243, 0.2)",
        },
        accent: {
          primary: "#0070F3",      // Electric Blue
          secondary: "#7928CA",    // Neon Purple
          success: "#10B981",      // System Online
          warning: "#F59E0B",      // System Beta
          offline: "#3F3F46",      // System Offline
        },
        // S33 Style Tokens
        metal: {
          bg: "#000000",
          surface: "#111111",
          highlight: "#E0E0E0",
          accent: "#A0A0A0",
          border: "#333333",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        orbitron: ["Orbitron", "sans-serif"],
        audiowide: ["Audiowide", "sans-serif"],
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at 50% 0%, #1a1a1a 0%, #050505 80%)',
        'grid-pattern': 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
        'metal-gradient': 'linear-gradient(135deg, #333 0%, #000 50%, #333 100%)',
        'chrome-gradient': 'linear-gradient(to bottom, #eeeeee 0%, #999999 50%, #eeeeee 100%)',
      },
      boxShadow: {
        'metal': 'inset 2px 2px 5px rgba(255,255,255,0.1), inset -2px -2px 5px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.05)',
        'metal-hover': 'inset 2px 2px 8px rgba(255,255,255,0.2), inset -2px -2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(255,255,255,0.15)',
        'glow-silver': '0 0 20px rgba(224, 224, 224, 0.3)',
      },
      borderRadius: {
        'fluid': '50% 30% 60% 40% / 40% 60% 40% 60%',
      },
      animation: {
        'liquid': 'liquid 8s ease-in-out infinite',
      },
      keyframes: {
        liquid: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        }
      }
    },
  },
  plugins: [],
};
export default config;