# 🎉 Proyecto Backend - Segunda Entrega 🎉

Este proyecto es una continuación de la primera entrega para el curso de Backend en la academia Coderhouse. Si deseas revisar la primera parte del trabajo.

## 🚀 Descripción del Proyecto

En esta segunda entrega, hemos ampliado el proyecto para incluir funcionalidades de frontend, mejorando la gestión de productos con una interfaz de usuario interactiva y en tiempo real.

## 🛠️ Características Principales

### ⚙️ Backend

#### 🗂️ Gestión de Productos
- **Operaciones CRUD**: Realiza operaciones de Crear, Leer, Actualizar y Eliminar productos mediante una API RESTful.
- **Endpoints Disponibles**:
  - `GET /api/products`: Lista todos los productos.
  - `GET /api/products/:pid`: Obtiene un producto por su ID.
  - `POST /api/products`: Crea un nuevo producto.
  - `PUT /api/products/:pid`: Actualiza un producto existente.
  - `DELETE /api/products/:pid`: Elimina un producto por su ID.

#### 🌐 Manejo de Rutas
- **Configuración de Rutas**: Las rutas están configuradas para manejar operaciones de productos, incluyendo vistas para mostrar, agregar y gestionar productos en tiempo real.

### 💻 Frontend

#### ⚡ Interactividad en Tiempo Real
- **Socket.io**: Actualiza la lista de productos en tiempo real en la interfaz de usuario, sin necesidad de refrescar la página.
- **Configuración de Eventos**: Emisión de eventos de WebSocket dentro de las peticiones POST para la creación y eliminación de productos.

#### 🖼️ Plantillas Web y Vistas
- **Handlebars**: Motor de plantillas para renderizar vistas en el frontend.
- **Vistas Implementadas**:
  - **🏠 Página de Inicio**: [http://localhost:8080](http://localhost:8080) - Acceso a las vistas de productos, productos en tiempo real, y agregar productos.
  - **🛍️ Página de Productos**: [http://localhost:8080/products](http://localhost:8080/products) - Muestra una lista de productos con opción para comprar.
  - **⏱️ Página de Productos en Tiempo Real**: [http://localhost:8080/realtimeproducts](http://localhost:8080/realtimeproducts) - Actualización en tiempo real de los productos.
  - **➕ Formulario de Agregar Productos**: [http://localhost:8080/products/add](http://localhost:8080/products/add) - Permite añadir nuevos productos manualmente o importando un backup de stock.

#### 🎨 Estilos Personalizados
- **CSS**: Estilización de la interfaz con un diseño responsivo y un footer personalizado.
- **Fuente Personalizada**: Inclusión de una fuente llamada Dienasty.

## 💡 Tecnologías Utilizadas
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## 🛠️ Ejecución del Proyecto
1. **Clonar el repositorio**.
2. **Instalar las dependencias** con `npm install`.
3. **Ejecutar el servidor** con `node app.js`.
4. **Acceder a la interfaz web** en [http://localhost:8080](http://localhost:8080).
5. **Utilizar Postman** u otro cliente API para probar los diferentes endpoints.

---

