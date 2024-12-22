let precio = 400000;
let cantidad = 0;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

const btnIncrementar = document.querySelectorAll("button")[0];
const btnDecrementar = document.querySelectorAll("button")[1];

// Mostrar el precio base al cargar la página
precioSpan.innerHTML = precio;

// Función para actualizar la cantidad y el total
function actualizarTotal() {
  cantidadSpan.innerHTML = cantidad;
  totalSpan.innerHTML = precio * cantidad;
}

// Evento para incrementar la cantidad
btnIncrementar.onclick = () => {
  cantidad++;
  actualizarTotal();
};

// Evento para decrementar la cantidad
btnDecrementar.onclick = () => {
  if (cantidad > 0) {
    cantidad--;
  }
  actualizarTotal();
};
