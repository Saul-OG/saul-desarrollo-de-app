document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const agregarBtn = document.getElementById('AgregarBtn');
  const lista = document.getElementById('lista');

  agregarBtn.addEventListener('click', () => {
    const texto = input.value.trim();
    if (!texto) return;

    // Crear <li>
    const li = document.createElement('li');
    li.textContent = texto + " ";

    // Crear botón eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "❌";
    btnEliminar.style.marginLeft = "10px";
    btnEliminar.addEventListener('click', () => {
      li.remove(); // elimina solo este li
    });

    // Agregar botón al li y li a la lista
    li.appendChild(btnEliminar);
    lista.appendChild(li);

    // Limpiar input
    input.value = '';
    input.focus();
  });
});

