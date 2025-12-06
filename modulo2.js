const modulo2 = {
  aulas: {
    1: {
      titulo: "Aula 1 — Elementos Naturais",
      texto: `
        <p>Os <strong>elementos naturais</strong> são componentes do ambiente que não foram criados pelo ser humano.</p>
        <ul>
          <li>Ar</li>
          <li>Água</li>
          <li>Solo</li>
          <li>Clima</li>
          <li>Plantas e animais</li>
        </ul>
        <p>São fundamentais para a vida e sustentam todos os ecossistemas.</p>
      `
    },

    2: {
      titulo: "Aula 2 — Bióticos e Abióticos",
      texto: `
        <p>O meio ambiente é composto por dois tipos de elementos:</p>
        <ul>
          <li><strong>Bióticos:</strong> todos os seres vivos.</li>
          <li><strong>Abióticos:</strong> água, ar, luz, temperatura, minerais, solo.</li>
        </ul>
        <p>Esses elementos interagem entre si para manter o equilíbrio dos ecossistemas.</p>
      `
    },

    3: {
      titulo: "Aula 3 — O Ar",
      texto: `
        <p>O ar é uma mistura de gases essenciais à vida, como oxigénio e nitrogénio.</p>
        <p>Funções principais:</p>
        <ul>
          <li>Permitir a respiração dos seres vivos</li>
          <li>Regular o clima</li>
          <li>Transportar vapor de água</li>
        </ul>
      `
    },

    4: {
      titulo: "Aula 4 — A Água",
      texto: `
        <p>A água cobre 70% da superfície da Terra e é indispensável para a vida.</p>
        <p>Tipos de água:</p>
        <ul>
          <li>Água doce (rios, lagos, aquíferos)</li>
          <li>Água salgada (mares e oceanos)</li>
        </ul>
        <p>Sem água não há agricultura, indústria nem saúde.</p>
      `
    },

    5: {
      titulo: "Aula 5 — Solo",
      texto: `
        <p>O solo é formado pela decomposição de rochas e matéria orgânica ao longo de milhares de anos.</p>
        <p>Importância:</p>
        <ul>
          <li>Base da agricultura</li>
          <li>Habitat de vários organismos</li>
          <li>Filtragem da água</li>
        </ul>
      `
    },

    6: {
      titulo: "Aula 6 — Clima e Atmosfera",
      texto: `
        <p>O clima resulta da combinação de fatores como temperatura, ventos e humidade.</p>
        <p>A atmosfera protege a Terra dos raios solares e mantém a temperatura adequada para a vida.</p>
      `
    },

    7: {
      titulo: "Aula 7 — Seres Vivos",
      texto: `
        <p>Incluem plantas, animais, fungos e microrganismos.</p>
        <p>Formam cadeias e redes alimentares essenciais ao equilíbrio ecológico.</p>
      `
    },

    8: {
      titulo: "Aula 8 — Ecossistemas Naturais de Angola",
      texto: `
        <p>Angola possui ecossistemas variados:</p>
        <ul>
          <li>Florestas tropicais</li>
          <li>Savana</li>
          <li>Zonas húmidas</li>
          <li>Deserto do Namibe</li>
          <li>Litoral e mangais</li>
        </ul>
      `
    },

    9: {
      titulo: "Aula 9 — Recursos Naturais",
      texto: `
        <p>Recursos naturais são elementos utilizados pelo ser humano:</p>
        <ul>
          <li>Água</li>
          <li>Madeira</li>
          <li>Solo fértil</li>
          <li>Minérios</li>
          <li>Petróleo e gás</li>
        </ul>
      `
    },

    10: {
      titulo: "Aula 10 — Ciclos Naturais",
      texto: `
        <p>Os principais ciclos que mantêm o funcionamento da natureza:</p>
        <ul>
          <li><strong>Ciclo da Água</strong> — evaporação, condensação, precipitação.</li>
          <li><strong>Ciclo do Carbono</strong> — envolve respiração, fotossíntese e combustão.</li>
          <li><strong>Ciclo do Nitrogénio</strong> — fundamental para a formação de proteínas.</li>
        </ul>
      `
    }
  }
};

if (typeof module !== 'undefined') {
  module.exports = modulo2;
} else {
  window.modulo2 = modulo2;
}

    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleSidebar");

    toggleBtn.onclick = () => {
        sidebar.classList.toggle("collapsed");
    };
