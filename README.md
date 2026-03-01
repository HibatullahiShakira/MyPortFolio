# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

**Project-specific notes:**

- Place your profile picture in `src/assets` and name it `profile.jpg` (or update the path in `Hero.jsx`). The repo currently uses `Shakirah.JPG`; you can replace that file directly if you prefer.
- Store a downloadable resume PDF at `public/resume.pdf`; the hero section and navbar include links to it.
- Run `npm run optimize-images` after adding assets to compress them (requires `imagemin-cli`).

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
