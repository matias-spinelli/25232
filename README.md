# ChuleTuTe 🔥

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-En%20desarrollo-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**ChuleTuTe** es una aplicación web desarrollada en **React + Vite**  
con el espíritu del fuego, la parrilla y el buen humor 🔥  
Su objetivo es aprender, experimentar y crear una tienda / catálogo interactivo de productos parrilleros con estilo *modo brasa*.

------------------------------------------------------------------------

## 🚀 Tecnologías utilizadas

-  **React 18+**
-  **Vite**
-  **CSS3 / Flexbox / Grid**
-  **Hooks (useState, useEffect, useParams, etc.)**
-  **React Router DOM**
-  **JSON Data Fetching**
-  **LocalStorage API**

------------------------------------------------------------------------

## ✨ Funcionalidades principales

- 🏠 **Home** con grilla de productos tipo cards.  
- 🛒 **Carrito de compras** con contador y navegación dinámica.  
- 📦 **Detalle de producto** con información completa.  
- 🔥 **Diseño parrillero** con colores, sombras y efecto brasa.  
- 💾 **Datos mockeados** desde `/data/products.json`.  
- 🎨 **Header y Footer personalizados** con logo SVG de ChuleTuTe.  
- 📱 **Diseño responsive**, adaptable a diferentes pantallas.

------------------------------------------------------------------------

## 📸 Screenshots

| Home                                         | 
| <img src="https://github.com/matias-spinelli/matias-spinelli/blob/main/assets/ChuleTuTe/Home.png"/> | 
| Detalle                                         |
| <img src="https://github.com/matias-spinelli/matias-spinelli/blob/main/assets/ChuleTuTe/Detail.png"/> | 
| Cart                                         | 
| <img src="https://github.com/matias-spinelli/matias-spinelli/blob/main/assets/ChuleTuTe/Cart.png"/> | 
| Add Product                                         |
| <img src="https://github.com/matias-spinelli/matias-spinelli/blob/main/assets/ChuleTuTe/AddProduct.png"/> |


<!-- | Home                                         | Detalle                                         |
| -------------------------------------------- | ---------------------------------------------------- |
| <img src="https://github.com/matias-spinelli/matias-spinelli/blob/main/assets/ChuleTuTe/HomeMobile.png" width="260"/> | <img src="https://github.com/matias-spinelli/matias-spinelli/blob/main/assets/ChuleTuTe/DetalleMobile.png" width="260"/> |
| Cart                                         | Add Product                                         |
| -------------------------------------------- | ---------------------------------------------------- |
| <img src="https://github.com/matias-spinelli/matias-spinelli/blob/main/assets/ChuleTuTe/CartMobile.png" width="260"/> | <img src="https://github.com/matias-spinelli/matias-spinelli/blob/main/assets/ChuleTuTe/AddProductMobile.png" width="260"/> | -->

------------------------------------------------------------------------

## 📂 Estructura del proyecto

```
src/
├── assets/                 # Imágenes, íconos y recursos estáticos
├── components/             # Componentes reutilizables
│   ├── Cart/
│   ├── Count/
│   ├── FallbackImage/
│   ├── Footer/
│   ├── Header/
│   ├── Item/
│   ├── ItemDetail/
│   ├── ItemDetailContainer/
│   ├── ItemList/
│   ├── ItemListContainer/
│   ├── Login/
│   ├── Nav/
│   ├── ParrilleroToggle/
│   ├── RutaProtegida/
│   ├── UI/                # Loader, Alert y utilidades UI
│   ├── adminComponents/   # Componentes del panel admin
│   └── boton.jsx
│
├── context/                # Context API (Auth + Cart)
│   ├── AuthContext/
│   └── CartContext/
│
├── layouts/                # Layouts principales (Main y Admin)
│
├── services/               # Llamadas a API y subida de imágenes
│
├── utils/                  # Helpers (priceFormatter, validators)
│
├── App.jsx                 # Root component
├── main.jsx                # Entry point (Vite)
└── index.css               # Estilos globales

```

------------------------------------------------------------------------

## 🔧 Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/matias-spinelli/ChuleTuTe.git

# Entrar al directorio
cd ChuleTuTe

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

------------------------------------------------------------------------

## ☁️ Deploy en Vercel

El proyecto está deployado en Vercel y accesible públicamente en:

👉 https://25232.vercel.app


------------------------------------------------------------------------

## 🌟 Créditos

Proyecto creado por **Matías Spinelli**
([@matias-spinelli](https://github.com/matias-spinelli))\
Desarrollado como parte de un curso de **React**, con fines de
práctica y aprendizaje.

------------------------------------------------------------------------

## 📜 Licencia

MIT License © 2025



