const contenedor=document.querySelector("#menu");
menu.forEach(plato=>{
    contenedor.innerHTML+=
    `<div class="menu-item">${plato.nombre}
    - $${plato.precio}</div>`;
});

const inputNombre = document.getElementById("nombre");
const selectPlato = document.getElementById("plato");
const inputCantidad = document.getElementById("cantidad");

const btnAgregar = document.getElementById("btn-agregar");
const tablaPedidos = document.getElementById("tabla-pedidos")

// para agregar los platos
menu.forEach(plato => {
    const opcion = document.createElement("option");
    opcion.value = plato.nombre;
    opcion.textContent = `${plato.nombre} - $${plato.precio}`;
    selectPlato.appendChild(opcion);
});

function agregarPedido(){
    const nombre = inputNombre.value;
    const plato = selectPlato.value;
    const cantidad = inputCantidad.value;

    if (nombre === ""){
        alert("Ingresa el nombre del cliente");
        return;
    }

    const fila = document.createElement("tr");
    fila.innerHTML =
    `
    <td>${nombre}</td>
    <td>${plato}</td>
    <td>${cantidad}</td>
    `;

    tablaPedidos.appendChild(fila);

    // Limpiar los pedidos
    inputNombre.value = "";
    selectPlato.value = "";
    inputCantidad.value = "1";
    inputNombre.focus();
}

btnAgregar.addEventListener("click", agregarPedido);
