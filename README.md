# 🚀 My Portfolio | Nuxt 4 

Welcome to my personal portfolio. This project is built using **Nuxt 4**, leveraging the latest features in Vue.js to create a high-performance, accessible, and adaptive web experience.

## 🏗️ The Nuxt 4 Architecture

This project follows the modern Nuxt 4 directory structure, moving the core application logic into the `app/` folder to separate concerns from configuration and server-side logic.

* **`app/`**: Contains the heart of the frontend (Pages, Components, Layouts).
* **`server/`**: Handles API routes and server-side middleware.
* **`public/`**: Static assets like my resume and profile photos.

---

## 🛠️ Tech Stack

* **Framework:** [Nuxt 4](https://nuxt.com/) (Vue 3 + Vite)
* **Styling:** Tailwind CSS (Utility-first design)
* **Detection:** `@nuxtjs/device` for environment-aware UI.
* **Deployment:** Optimized for Vercel/Netlify with **Edge Rendering**.

---

## ✨ Key Technical Features

### 📱 Adaptive Navigation (Device-Specific)
Unlike standard responsive design that simply hides elements, this portfolio uses **Conditional Component Rendering** based on the user's device.
* **`NavbarDesktop`**: Features hover-based menus and rich transitions.
* **`NavbarMobile`**: A lightweight, touch-optimized drawer that reduces DOM weight for mobile users.

### 🚄 Performance & DX
* **Disabled Mobile Transitions:** Page transitions are programmatically disabled on mobile to provide an instantaneous, app-like feel.
* **Smart Layouts:** Using the Nuxt 4 layout system to maintain state across page navigations while swapping navigation components seamlessly.
* **Type Safety:** Fully written in TypeScript for robust component interfaces.

---

## 🚀 Getting Started

Ensure you have [Node.js](https://nodejs.org/) (v18.10+) installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/DaGitFella/portfolio
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run in development mode:**
    ```bash
    npm run dev
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```

---

## 📁 Project Overview

```text
.
├── app/
│   ├── components/      # UI Elements (TechBadge.vue, Navbar components)
│   ├── layouts/         # Layout Switcher (default.vue)
│   ├── pages/           # File-based routing
│   └── app.vue          # Main Entry point
├── server/              # Server-side logic/API
├── public/              # Static assets (Resume, Favicon)
└── nuxt.config.ts       # Nuxt 4 configuration
