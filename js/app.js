const contenedor=document.querySelector("#menu");
menu.forEach(plato=>{
    contenedor.innerHTML+=
    `<div class="menu-item">${plato.nombre}
    - $${plato.precio}</div>`;
});