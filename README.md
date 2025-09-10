# 🌌 3D Portfolio  

An interactive developer portfolio with **3D visuals, smooth animations, and modern UI/UX**. Built to showcase projects and skills using cutting-edge web tech like **React Three Fiber, Drei, Framer Motion, and TailwindCSS**. 🚀  

---

## 🚀 Features  
- Immersive **3D models** (optimized GLB assets)  
- Smooth **animations & transitions** with Framer Motion  
- Realistic **lighting & interactions** using R3F + Drei + Maath  
- Responsive layout for desktop & mobile  
- Lazy loading, Suspense, and adaptive DPR for better performance  
- Preloaded assets for a seamless experience  

---

## 📸 Preview  
<img width="2560" height="1600" alt="firdavs codes_(Nest Hub Max)-min" src="https://github.com/user-attachments/assets/bee2529b-9da8-4807-a7c6-287619453869" />
  

---

## 🛠️ Tech Stack  
- React + TypeScript  
- TailwindCSS  
- React Three Fiber (R3F) + Drei  
- Framer Motion  
- Maath  
- Three.js  

---

## 🌐 Live Demo  
👉 [firdavs.codes](https://firdavs.codes)  

---

## 📦 Installation  

```bash
# Clone the repository
git clone https://github.com/yourusername/3d-portfolio.git

# Navigate to the project folder
cd 3d-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```
---


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
