document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const agregarBtn = document.getElementById('AgregarBtn');
  const lista = document.getElementById('lista');

  // Ayuda a detectar si el id no coincide
  if (!agregarBtn) {
    console.error('No se encontró #AgregarBtn. Revisa el id en el HTML.');
    return;
  }

  agregarBtn.addEventListener('click', () => {
    const texto = input.value.trim();
    if (!texto) return;

    const li = document.createElement('li');
    li.textContent = texto;
    lista.appendChild(li);

    input.value = '';
    input.focus();
  });
});
