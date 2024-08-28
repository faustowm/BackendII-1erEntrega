🎉 Proyecto Backend - Tercer Entrega 🎉
Este proyecto es una continuación de la primera entrega para el curso de Backend en la academia Coderhouse. Si deseas revisar la primera parte del trabajo, puedes encontrarla en el repositorio correspondiente.

🚀 Descripción del Proyecto
En esta entrega final, hemos ampliado el proyecto para incluir funcionalidades avanzadas de frontend y backend, integrando una base de datos MongoDB para la gestión de productos y usuarios, mejorando la interactividad en tiempo real, y optimizando la arquitectura del sistema.

🛠️ Características Principales
⚙️ Backend
🗂️ Gestión de Productos y Usuarios con MongoDB
Operaciones CRUD: Realiza operaciones de Crear, Leer, Actualizar y Eliminar tanto productos como usuarios mediante una API RESTful utilizando MongoDB.

MongoDB Avanzado:

Agregaciones: Realiza consultas complejas para obtener estadísticas y resúmenes de datos.
Indexación: Mejora el rendimiento de las consultas mediante la creación de índices en los campos más utilizados.
Validación de Esquemas: Utiliza Mongoose para definir esquemas y validar los datos antes de guardarlos en la base de datos.

Endpoints Disponibles:

GET /api/products: Lista todos los productos.
GET /api/products/:pid: Obtiene un producto por su ID.
POST /api/products: Crea un nuevo producto.
PUT /api/products/:pid: Actualiza un producto existente.
DELETE /api/products/:pid: Elimina un producto por su ID.
GET /api/users: Lista todos los usuarios.
GET /api/users/:uid: Obtiene un usuario por su ID.
POST /api/users: Crea un nuevo usuario.
PUT /api/users/:uid: Actualiza un usuario existente.
DELETE /api/users/:uid: Elimina un usuario por su ID.

🌐 Manejo de Rutas
Configuración de Rutas: Las rutas están configuradas para manejar operaciones tanto de productos como de usuarios, incluyendo vistas para mostrar, agregar y gestionar estos recursos en tiempo real.

💻 Frontend
⚡ Interactividad en Tiempo Real
Socket.io: Actualiza la lista de productos y usuarios en tiempo real en la interfaz de usuario, sin necesidad de refrescar la página.
Configuración de Eventos: Emisión de eventos de WebSocket dentro de las peticiones POST para la creación y eliminación de productos y usuarios.

🖼️ Plantillas Web y Vistas
Handlebars: Motor de plantillas para renderizar vistas en el frontend.
Vistas Implementadas:
🏠 Página de Inicio: http://localhost:8080 - Acceso a las vistas de productos, productos en tiempo real, y agregar productos.
🛍️ Página de Productos: http://localhost:8080/products - Muestra una lista de productos con opción para comprar.
⏱️ Página de Productos en Tiempo Real: http://localhost:8080/realtimeproducts - Actualización en tiempo real de los productos.
➕ Formulario de Agregar Productos: http://localhost:8080/products/add - Permite añadir nuevos productos manualmente o importando un backup de stock.
👥 Página de Usuarios: http://localhost:8080/users - Gestiona la lista de usuarios.

🎨 Estilos Personalizados
CSS: Estilización de la interfaz con un diseño responsivo y un footer personalizado.
Fuente Personalizada: Inclusión de una fuente llamada Dienasty.

💡 Tecnologías Utilizadas

## 💡 Tecnologías Utilizadas

- [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
- [![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
- [![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
- [![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)
- [![Handlebars](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)](https://handlebarsjs.com/)
- [![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://socket.io/)
- [![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/)


🛠️ Ejecución del Proyecto
Clonar el repositorio.
Instalar las dependencias con npm install.
Configurar la base de datos: Asegúrate de tener MongoDB instalado y en ejecución. Modifica el archivo .env para incluir tu URI de conexión a MongoDB.
Ejecutar el servidor con node app.js.
Acceder a la interfaz web en http://localhost:8080.
Utilizar Postman u otro cliente API para probar los diferentes endpoints.

