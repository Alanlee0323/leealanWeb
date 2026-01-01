# Alan Lee - Personal Portfolio Website

This is the source code for my personal portfolio website, built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. 
The project is designed to showcase my dual identity as a **Full-Cycle AI Engineer** and a **Percussionist**.

## 📂 Project Structure Guide

Understanding where things are will help you modify the site easily.

### 1. 核心邏輯與頁面架構 (Core Logic)
*   **`App.tsx`**: The main entry point. It handles the **state management** for switching between modes (`Gateway` -> `Engineer` or `Drummer`).
    *   *Where to change:* Global layout, state logic, and high-level component composition.
*   **`index.tsx`**: The React DOM root rendering file.
*   **`types.ts`**: TypeScript definitions for data structures like `Project`, `Experience`, etc.

### 2. 頁面內容數據 (Data Layer)
Most of the text and data are separated from the code for easier updates. **Look here first if you just want to change text.**
*   **`data/projects.ts`**: Contains the data for the **Engineering** section.
    *   `projects`: List of your portfolio projects (AIGO, Thesis, etc.).
    *   `experiences`: Your work and education history (Radiant, NTOU).
*   **`data/content.ts`**: General static content (mostly legacy or placeholder text, check before using).
*   **`data/drumming.ts`**: (If applicable) Data specific to the Drummer section.

### 3. UI 組件 (Components)
Located in the `components/` folder.

#### 🏗️ Engineer Mode Components
*   **`Hero.tsx`**: The landing section for the Engineer mode. Contains the "Full-Cycle AI Engineer" title and summary.
*   **`TechMarquee.tsx`**: The scrolling banner showing your tech stack (PyTorch, Docker, etc.).
*   **`BentoGrid.tsx`**: The "System Registry" section that displays your projects in a grid layout.
*   **`Timeline.tsx`**: The "Experience Log" section showing your career history.
*   **`ProjectCard.tsx`**: The individual card component used inside `BentoGrid`.
*   **`Footer.tsx`**: The site footer with your contact links (Email, GitHub, LinkedIn).

#### 🥁 Drummer Mode Components
*   **`DrummerLanding.tsx`**: The main landing page for the Drummer side.
*   **`DrumModule.tsx`**: Components related to interactive drumming features.

#### 🧩 Shared & UI Elements (`components/ui/`)
*   **`Gateway.tsx`**: The initial "Choose Your Character" screen (Engineer vs. Drummer).
*   **`SystemNav.tsx`**: The navigation bar that appears after you enter the site.
*   **`MagneticButton.tsx`**: A custom button component with a magnetic hover effect.
*   **`ShaderAnimation.tsx`**: The background visual effects (Three.js/WebGL).

### 4. 設定檔 (Configuration)
*   **`tailwind.config.ts`**: Design tokens, colors, and custom theme settings (e.g., `accent-primary`, `bg-primary`).
*   **`vite.config.ts`**: Vite build configuration.
*   **`package.json`**: Dependencies and build scripts.

---

## 🚀 How to Run Locally

**Prerequisites:** Node.js (v18+ recommended)

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Access the site at `http://localhost:5173` (or the port shown in your terminal).

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This generates the static files in the `dist/` folder, ready for deployment.

## 🛠️ Common Customization Tasks

*   **Change Profile Text:** Edit `components/Hero.tsx` or `data/projects.ts` (for the resume part).
*   **Update Projects:** Add or modify objects in `data/projects.ts`.
*   **Change Colors:** Edit the `extend.colors` section in `tailwind.config.ts`.
*   **Update Skills:** Edit the `TECH_STACK` array in `components/TechMarquee.tsx`.

## 📦 Deployment

This project is optimized for **Cloudflare Pages**.
*   **Build Command:** `npm run build`
*   **Output Directory:** `dist`