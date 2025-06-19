# Frontend - Plataforma SkyLogistics

Este frontend es la interfaz de usuario para un sistema básico de gestión de entregas. Permite visualizar clientes y entregas, agregar nuevos clientes, agregar entregas asociadas y consultar el total de entregas por cliente. El enfoque está en la simplicidad y funcionalidad visual, conectándose directamente al backend desarrollado con Spring Boot.

La aplicacion se basa en la arquitectura SPA (Single Page Application)

## Tecnologías utilizadas

- **React (Vite + JSX)**

- **CSS personalizado**

- **Fetch API para comunicación con el backend**

## Vistas principales

/	Listado de clientes disponibles con sus respectivos datos de entregas.

## Instrucciones para correr el proyecto

1. Tener instalado Git en tu maquina local 
2. Elegir una carpeta en donde guardes tu proyecto
3. abrir la terminal de GIT --> mediante el clik derecho seleccionas Git bash here
4. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/ChristianDuarteR/Prueba-Tecnica-SalesForce-FrontEnd.git
   ```
5. Abre el proyecto con tu IDE favorito o navega hasta el directorio del proyecto 
6. Desde la terminal  para compilar el proyecto ejecuta:

   ```bash
   npm install
   ```
7. Corra el proyecto 

   ```bash
    npm run dev
   ```

- **La aplicación estará disponible en: http://localhost:5173**

## Funcionalidades implementadas

Vista de clientes

Seleccion y busqueda de clientes por coincidencias

Estilos responsivos y UI accesible

## Conexión con el backend 

Este frontend se conecta a un backend Spring Boot disponible en http://localhost:8080.
Las rutas utilizadas incluyen:


### 🧍 Clientes  
Operaciones relacionadas con la gestión de clientes.

- **GET** `/api/v1/clientes`  
  Listar todos los clientes.

- **GET** `/api/v1/clientes/{email}`  
  Obtener cliente por email.

- **POST** `/api/v1/clientes`  
  Crear un nuevo cliente.

- **PUT** `/api/v1/clientes`  
  Actualizar cliente existente.

---

### 📦 Entregas  
Operaciones relacionadas con la gestión de entregas.

- **GET** `/api/v1/entregas/clientes/{clienteId}`  
  Obtener entregas por ID de cliente.

- **POST** `/api/v1/entregas/clientes/{clienteId}`  
  Crear entrega para un cliente.

- **PUT** `/api/v1/entregas/{entregaId}`  
  Actualizar entrega existente.

- **DELETE** `/api/v1/entregas/{entregaId}`  
  Eliminar entrega por ID.

## Authors

* **Christian Javier Duarte Rojas** - 
* **@ChristianDuarteR** - 

## Licencia

Este proyecto fue desarrollado con fines académicos/técnicos como parte de una prueba. El uso es libre y educativo.

