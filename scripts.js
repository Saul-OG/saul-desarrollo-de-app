document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const agregarBtn = document.getElementById('AgregarBtn');
  const lista = document.getElementById('lista');

  agregarBtn.addEventListener('click', () => {
    const texto = input.value.trim();
    if (!texto) return;

    
    const li = document.createElement('li');
    li.textContent = texto + " ";

    
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "❌";
    btnEliminar.style.marginLeft = "10px";
    btnEliminar.addEventListener('click', () => {
      li.remove(); 
    });

    
    li.appendChild(btnEliminar);
    lista.appendChild(li);

    
    input.value = '';
    input.focus();
  });
});

