# Pliegue

Pliegue es una librería ficticia creada para el ejercicio de React y TypeScript de DWEC. Este primer commit configura el proyecto y muestra la página de bienvenida.

## Instalación y ejecución

1. Instala [Node.js](https://nodejs.org/) 22 o posterior. La instalación oficial incluye npm. Comprueba que estén disponibles con `node --version` y `npm --version`.
2. Clona el repositorio privado con una cuenta que tenga acceso o extrae una copia del proyecto. Abre una terminal en la carpeta que contiene `package.json`.
3. Ejecuta `npm ci` para instalar las dependencias del proyecto.
4. Ejecuta `npm run dev` y abre [http://127.0.0.1:3000](http://127.0.0.1:3000) en el navegador. Detén el servidor con Ctrl+C.

`npm run build` compila TypeScript y reúne los archivos de la aplicación en `dist/`. Si ya has compilado, puedes servir esa carpeta con `npm start`. Si cambias el código o los archivos del catálogo, detén el servidor y vuelve a ejecutar `npm run dev`.

El servidor escucha únicamente en el equipo local. Para cambiar el puerto, usa `$env:PORT = "3001"` en PowerShell o `export PORT=3001` en bash y luego ejecuta `npm run dev`. Abre la dirección que indica la terminal.

Se usa React para la interfaz, React DOM para montarla, TypeScript para compilar y CSS propio para el diseño. El servidor local usa módulos incorporados en Node.js. La aplicación sirve React y los recursos desde el propio proyecto.
