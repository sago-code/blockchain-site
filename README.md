# 🌐 Proyecto Blockchain Web – Fullstack (React + Node.js + TypeScript)

Este proyecto es una **aplicación web educativa** que explica de forma profesional el concepto de **Blockchain**, con ejemplos visuales, formularios, login dinámico (sin base de datos) y arquitectura moderna **frontend-backend**.

Incluye:
- **Frontend:** React + TypeScript + React Router + Bootstrap + Swiper.
- **Backend:** Node.js + Express.js.
- **Estándares modernos:** HTML5, CSS3, ES8.
- **Extras:** Manejo de excepciones, concurrencia y ejemplos prácticos.

---

## 📂 Estructura del Proyecto
blockchain-project/
│── frontend/ # Aplicación React + TypeScript
│ ├── src/
│ │ ├── components/ # Header, Footer, Menu, Slider, Formularios
│ │ ├── pages/ # Home, Login, Ejemplos de Blockchain
│ │ ├── App.tsx
│ │ └── main.tsx
│ ├── public/
│ ├── package.json
│ └── tsconfig.json
│
│── backend/ # Servidor Node + Express
│ ├── src/
│ │ ├── routes/ # Rutas Express
│ │ ├── controllers/ # Controladores
│ │ ├── middlewares/ # Manejo de errores y concurrencia
│ │ └── server.js
│ ├── package.json
│
│── README.md

---

## ⚙️ Instalación y Configuración

### 1. Clonar el repositorio
git clone https://github.com/usuario/blockchain-project.git
cd blockchain-project

### 2. Clonar el repositorio
cd frontend
npm create vite@latest . -- --template react-ts
npm install
npm install react-router-dom bootstrap react-bootstrap swiper

Levantar el frontend:
npm run dev

### 3. Configuración del Backend:
cd ../backend
npm init -y
npm install express cors nodemon

Levantar el backend:
npm run dev

### 4. Añade en package.json:
"scripts": {
  "dev": "nodemon src/server.js"
}


🖼️ Características Frontend

✔️ Diseño profesional con Bootstrap
✔️ Header, Footer y Menú responsivo
✔️ Slider interactivo con Swiper
✔️ Login visual (sin DB)
✔️ Formularios dinámicos con validación básica
✔️ Rutas con React Router


⚡ Características Backend

✔️ Servidor Express modular
✔️ Rutas REST simuladas
✔️ Middlewares de manejo de errores
✔️ Ejemplo de concurrencia (async/await, Promise.allSettled)
✔️ Simulación de endpoints para login y blockchain
