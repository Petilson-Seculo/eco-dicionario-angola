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


(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  const saved = localStorage.getItem('eco_theme'); 
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme){
    if(theme === 'dark'){
      root.setAttribute('data-theme', 'dark');

      // 🔥 Atualizar switch visualmente
      if (toggle) toggle.checked = true;

    } else {
      root.removeAttribute('data-theme');

      // 🔥 Atualizar switch visualmente
      if (toggle) toggle.checked = false;
    }
  }

  // Inicialização — aplica o tema guardado
  if(saved === 'dark' || (!saved && prefersDark)){
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  // Evento de clique do switch
  if(toggle){
    toggle.addEventListener('change', () => {
      const newTheme = toggle.checked ? 'dark' : 'light';
      applyTheme(newTheme);
      localStorage.setItem('eco_theme', newTheme);
    });
  }
})();
