# 🧩 Minecraft-style Game Landing Page

🎮 **Live Demo:** [alexrapin.github.io/game-landing](https://alexrapin.github.io/game-landing/)

A modern, responsive landing page for a browser-based puzzle game inspired by Minecraft. Built using **React**, **TypeScript**, **Sass**, and **Vite**.

---

## 🚀 Features

- ✅ Pixel-style aesthetic with Minecraft-inspired design
- ✅ Responsive layout for mobile and desktop
- ✅ Four unique puzzle game previews
- ✅ Animated transitions and hover effects
- ✅ Modular SCSS and component structure
- ✅ Fast build with Vite

---

## 📦 Tech Stack

- ⚛️ React + TypeScript
- 🎨 Sass (SCSS modules)
- ⚡️ Vite
- 🧱 BEM naming for SCSS
- 📁 Assets loaded via imports (`src/assets/...`)

---

## 📁 Folder Structure

```
src/
├── assets/            # All images, icons, and media files
├── components/        # Reusable UI blocks like Header, Footer, PuzzleSelector, etc.
├── shared/            # Shared UI elements like LineWithCircles
├── styles/            # Global SCSS, variables, and mixins
├── App.tsx
└── main.tsx
```

---

## 🛠️ Setup & Development

```bash
# 1. Clone the repo
git clone https://github.com/alexrapin/game-landing.git
cd game-landing

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

App will be available at `http://localhost:5173`

---

## 🧪 Build for Production

```bash
npm run build
```

Then deploy the contents of the `dist/` folder (e.g., to GitHub Pages).

---

## 🌐 Deployment

Deployed via GitHub Pages:  
🔗 https://alexrapin.github.io/game-landing/

To redeploy after changes:

```bash
npm run build
# then push `dist/` using your deployment method
```

Or use [`vite-plugin-gh-pages`](https://www.npmjs.com/package/vite-plugin-gh-pages) for automation.

---

## 📸 Screenshots

> *(You can insert real screenshots later)*

---

## 📄 License

MIT © 2025 [Alex R.](https://github.com/alexrapin)
