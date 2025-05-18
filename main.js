// Seleciona o botão pelo ID
const toggleButton = document.getElementById('toggle-dark-mode');

// Adiciona um evento de clique
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');

  // salvo a preferência no localStorage
  localStorage.setItem('darkMode', isDark);
});

// Mantém a preferência ao recarregar
const savedMode = localStorage.getItem('darkMode');

if (savedMode === 'true') {
  document.body.classList.add('dark-mode');
}
