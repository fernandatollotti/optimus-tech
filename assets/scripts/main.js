const btnToggle = document.querySelector('[btn-toggle]');
const sidebarMenu = document.querySelector('[sidebar-open]');
const body = document.body;
const btnTheme = document.querySelector('[data-theme-btn]');
let isDarkTheme = window.matchMedia('prefers-color-theme: dark').matches;
let savedTheme = localStorage.getItem('theme');

// Aplica o tema salvo ou o tema padrão (claro ou escuro)
if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
} else {
  body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
}

// Função para alternar o tema entre claro e escuro
const changeTheme = () => {
  const currentTheme = body.getAttribute('data-theme');
  const themeIcon = btnTheme.children[0];
  let newTheme = 'light';

  if (currentTheme === 'light')
    newTheme = 'dark';

  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeIcon.classList.toggle('ph-sun');
  themeIcon.classList.toggle('ph-moon');
}

btnTheme.addEventListener('click', changeTheme);

btnToggle.addEventListener('click', () => {
  // Alterna a visibilidade do menu (abre/fecha)
  sidebarMenu.classList.toggle('active');
});