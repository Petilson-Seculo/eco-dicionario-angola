(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  // read saved preference
  const saved = localStorage.getItem('eco_theme'); // 'dark' | 'light' | null
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme){
    if(theme === 'dark'){
      root.setAttribute('data-theme', 'dark');
      if(toggle) toggle.textContent = '☀️'; // mostra sol para permitir voltar
    } else {
      root.removeAttribute('data-theme');
      if(toggle) toggle.textContent = '🌙';
    }
  }

  // init
  if(saved === 'dark' || (!saved && prefersDark)){
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  // click handler
  if(toggle){
    toggle.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('eco_theme', newTheme);
    });
  }
})();