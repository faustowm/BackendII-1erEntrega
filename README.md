InzaraAromas - Backend2 (1er Entrega) 🌟
Descripción del Proyecto 📜
Este proyecto es la continuación y cuarta entrega del curso de Backend, ahora para Backend 2. InzaraAromas es una aplicación de comercio electrónico especializada en la venta de Velas Aromáticas. Esta versión incorpora funcionalidades avanzadas de autenticación, manejo de sesiones y gestión de carritos de compra.

Características Principales ✨

Modelo de Usuario Mejorado 👤:
Campos: first_name, last_name, email, age, password, cart, role.
Generación automática de carrito al registrarse.

Seguridad Mejorada 🔒:
Encriptación de contraseñas utilizando bcrypt.
Autenticación Avanzada 🛡️:

Implementación de estrategias de Passport.
Sistema de login con JWT (JSON Web Tokens).
Manejo de Sesiones 📅:

Estrategia "current" para extraer y validar tokens de cookies.
Rutas separadas para validación de usuarios en web y API.
Gestión de Carritos 🛒:

Modelo de carrito con campos id y productos.
Funcionalidades para agregar, eliminar y obtener productos del carrito de un usuario.

Endpoints 🔗
Sesiones y Autenticación
POST /api/sessions/register: Registro de nuevos usuarios.
POST /api/sessions/login: Inicio de sesión.
POST /api/sessions/logout: Cierre de sesión.
GET /api/sessions/current: Obtener información del usuario actual (versión web).
GET /api/sessions/current-api: Obtener información del usuario actual (para Postman, requiere bearer token).

Carritos
GET /api/carts/:cid: Obtener un carrito específico (requiere bearer token).
GET /api/carts: Listar todos los carritos (requiere bearer token).
DELETE /api/carts/:cid: Eliminar un carrito (requiere bearer token).
POST /api/carts/:cid/products/:pid: Agregar un producto a un carrito (requiere bearer token).
DELETE /api/carts/:cid/products/:pid: Eliminar un producto de un carrito (requiere bearer token).

Productos
GET /api/products: Listar todos los productos.
GET /api/products/:pid: Obtener un producto específico.
PUT /api/products/:pid: Actualizar un producto (requiere bearer token).

Usuarios
DELETE /api/users/: Eliminar un usuario (requiere bearer token).

Tecnologías Utilizadas 💻
Node.js
Express.js
MongoDB con Mongoose
Passport.js
JWT para autenticación
bcrypt para encriptación
Handlebars para vistas
Socket.io para comunicación en tiempo real
dotenv para manejo de variables de entorno
cookie-parser para manejo de cookies
express-session para manejo de sesiones

