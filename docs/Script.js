const boton = document.getElementById('Dark-mode');

boton.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');

  if (document.body.classList.contains('modo-oscuro')) {
    boton.textContent = 'Modo claro';
  } else {
    boton.textContent = 'Modo oscuro';
  }
});