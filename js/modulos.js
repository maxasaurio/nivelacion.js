document.addEventListener("DOMContentLoaded", () => {
  
  const header = document.querySelector("#header");
  header.innerHTML = `
    <h2>Mi Sitio Web</h2>
  `;

  const nav = document.querySelector("#nav");
  nav.innerHTML = `
    <ul>
      <li><a href="index.html">INICIO</a></li>
      <li><a href="Productos.html">PRODUCTOS</a></li>
      <li><a href="servicios.html">SERVICIOS</a></li>
    </ul>
  `;

  const footer = document.querySelector("#footer");
  footer.innerHTML = `
    <p>&copy; 2026 Mi Sitio Web - Todos los derechos reservados</p>
  `;
});
