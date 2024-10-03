# InzaraAromas - Backend2 (1er Entrega) 🌟

## Descripción del Proyecto 📜

InzaraAromas 🕯️ es una encantadora aplicación de comercio electrónico que invita a los usuarios a sumergirse en el mundo de las Velas Aromáticas 🌸. Este proyecto es la cuarta entrega de nuestro viaje en el curso de Backend, evolucionando hacia Backend 2. En esta fragante versión, hemos incorporado características avanzadas que incluyen una autenticación segura 🔒, un manejo delicado de sesiones 📅 y una gestión intuitiva de carritos de compra 🛒, todo para ofrecer una experiencia envolvente y placentera.

---

## Características Principales ✨

### 1. Modelo de Usuario Mejorado 👤
- **Campos**: `first_name`, `last_name`, `email`, `age`, `password`, `cart`, `role`.
- Generación automática de carrito al registrarse.

### 2. Seguridad Mejorada 🔒
- Encriptación de contraseñas utilizando **bcrypt**.

### 3. Autenticación Avanzada 🛡️
- Implementación de estrategias de **Passport**.
- Sistema de login con **JWT** (JSON Web Tokens).

### 4. Manejo de Sesiones 📅
- Estrategia "current" para extraer y validar tokens de cookies.
- Rutas separadas para validación de usuarios en web y API.

### 5. Gestión de Carritos 🛒
- Modelo de carrito con campos `id` y `productos`.
- Funcionalidades para agregar, eliminar y obtener productos del carrito de un usuario.

---

## Endpoints 🔗

### Sesiones y Autenticación
- `POST /api/sessions/register`: Registro de nuevos usuarios.
- `POST /api/sessions/login`: Inicio de sesión.
- `POST /api/sessions/logout`: Cierre de sesión.
- `GET /api/sessions/current`: Obtener información del usuario actual (versión web).
- `GET /api/sessions/current-api`: Obtener información del usuario actual (requiere bearer token).

### Carritos
- `GET /api/carts/:cid`: Obtener un carrito específico (requiere bearer token).
- `GET /api/carts`: Listar todos los carritos (requiere bearer token).
- `DELETE /api/carts/:cid`: Eliminar un carrito (requiere bearer token).
- `POST /api/carts/:cid/products/:pid`: Agregar un producto a un carrito (requiere bearer token).
- `DELETE /api/carts/:cid/products/:pid`: Eliminar un producto de un carrito (requiere bearer token).

### Productos
- `GET /api/products`: Listar todos los productos.
- `GET /api/products/:pid`: Obtener un producto específico.
- `PUT /api/products/:pid`: Actualizar un producto (requiere bearer token).

### Usuarios
- `DELETE /api/users/`: Eliminar un usuario (requiere bearer token).

---

## Tecnologías Utilizadas 💻
- **Node.js**
- **Express.js**
- **MongoDB** con Mongoose
- **Passport.js**
- **JWT** para autenticación
- **bcrypt** para encriptación
- **Handlebars** para vistas
- **Socket.io** para comunicación en tiempo real
- **dotenv** para manejo de variables de entorno
- **cookie-parser** para manejo de cookies
- **express-session** para manejo de sesiones

---
