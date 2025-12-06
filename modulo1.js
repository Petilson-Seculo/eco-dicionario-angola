
const modulo1 = {
  aulas: {
    1: {
      titulo: "Aula 1 — O que é Meio Ambiente",
      texto: `
        <p>O <strong>meio ambiente</strong> é o conjunto de elementos naturais, sociais, culturais e construídos que permitem a existência da vida na Terra.</p>
        <p>Inclui:</p>
        <ul>
          <li>Ar</li>
          <li>Água</li>
          <li>Solo</li>
          <li>Plantas e animais</li>
          <li>Sociedade humana</li>
          <li>Infraestruturas criadas pelo ser humano</li>
        </ul>
        <p>O meio ambiente é um sistema interligado: tudo o que acontece numa parte dele afeta o restante.</p>
      `
    },

    2: {
      titulo: "Aula 2 — O que é Educação Ambiental",
      texto: `
        <p><strong>Educação Ambiental</strong> é o processo contínuo de aprendizagem que:</p>
        <ul>
          <li>Desenvolve consciência ecológica</li>
          <li>Promove valores sustentáveis</li>
          <li>Incentiva ações responsáveis</li>
          <li>Ensina a proteger e conservar o ambiente</li>
        </ul>
        <p>O objetivo principal é ajudar as pessoas a entender como suas escolhas impactam o planeta, incentivando decisões mais conscientes.</p>
      `
    },

    3: {
      titulo: "Aula 3 — Desenvolvimento Sustentável",
      texto: `
        <p><strong>Desenvolvimento sustentável</strong> é o modelo que procura atender às necessidades atuais sem comprometer a capacidade das gerações futuras, equilibrando meio ambiente, economia e sociedade.</p>
        <p>É baseado em três pilares:</p>
        <ol>
          <li>Ambiental – preservar a natureza</li>
          <li>Social – garantir qualidade de vida</li>
          <li>Económico – crescimento responsável</li>
        </ol>
      `
    },

    4: {
      titulo: "Aula 4 — Conceitos Básicos de Ecologia",
      texto: `
        <p>Conceitos fundamentais da ecologia:</p>
        <ul>
          <li><strong>Espécie:</strong> grupo de organismos semelhantes que conseguem se reproduzir entre si.</li>
          <li><strong>População:</strong> conjunto de indivíduos da mesma espécie vivendo no mesmo lugar.</li>
          <li><strong>Comunidade:</strong> populações diferentes que convivem num mesmo ambiente.</li>
          <li><strong>Ecossistema:</strong> conjunto da comunidade + fatores físicos (solo, água, clima).</li>
          <li><strong>Biosfera:</strong> todo o conjunto de ecossistemas que formam a vida na Terra.</li>
        </ul>
      `
    },

    5: {
      titulo: "Aula 5 — Relação Ser Humano – Natureza",
      texto: `
        <p>O ser humano depende da natureza para:</p>
        <ul>
          <li>Água</li>
          <li>Alimentos</li>
          <li>Energia</li>
          <li>Materiais</li>
          <li>Clima equilibrado</li>
        </ul>
        <p>Mas também causa impactos negativos, como:</p>
        <ul>
          <li>Poluição</li>
          <li>Desmatamento</li>
          <li>Extinção de espécies</li>
          <li>Mudanças climáticas</li>
        </ul>
        <p>Educar para o ambiente é essencial para restaurar e manter o equilíbrio entre sociedade e natureza.</p>
      `
    },

    6: {
      titulo: "Aula 6 — Problemas Ambientais Globais e Locais",
      texto: `
        <p>Problemas ambientais globais:</p>
        <ul>
          <li>Aquecimento global</li>
          <li>Derretimento dos polos</li>
          <li>Perda de biodiversidade</li>
          <li>Poluição dos oceanos</li>
        </ul>

        <p>Problemas ambientais locais (Angola):</p>
        <ul>
          <li>Acumulação de resíduos</li>
          <li>Poluição hídrica</li>
          <li>Queimadas</li>
          <li>Erosão e desertificação</li>
          <li>Gestão inadequada de resíduos urbanos</li>
        </ul>
      `
    },

    7: {
      titulo: "Aula 7 — Princípios da Sustentabilidade",
      texto: `
        <p>Princípios fundamentais da sustentabilidade:</p>
        <ul>
          <li>Uso racional dos recursos</li>
          <li>Preservação das espécies</li>
          <li>Redução do desperdício</li>
          <li>Adoção de energia limpa</li>
          <li>Responsabilidade social</li>
          <li>Justiça ambiental</li>
        </ul>
      `
    },

    8: {
      titulo: "Aula 8 — Consumo Consciente",
      texto: `
        <p>Consumir de forma responsável significa:</p>
        <ul>
          <li>Comprar apenas o necessário</li>
          <li>Preferir produtos duráveis</li>
          <li>Escolher embalagens recicláveis</li>
          <li>Evitar desperdício de água e energia</li>
          <li>Apoiar empresas sustentáveis</li>
        </ul>
      `
    },

    9: {
      titulo: "Aula 9 — Os 3R/5R da Sustentabilidade",
      texto: `
        <p>Os 3R tradicionais:</p>
        <ol>
          <li><strong>Reduzir</strong> – evitar gerar lixo</li>
          <li><strong>Reutilizar</strong> – aproveitar materiais</li>
          <li><strong>Reciclar</strong> – transformar resíduos</li>
        </ol>
        <p>E os 5R modernos acrescentam:</p>
        <ol start="4">
          <li><strong>Recusar</strong> – evitar produtos descartáveis</li>
          <li><strong>Repensar</strong> – rever hábitos que geram impacto ambiental</li>
        </ol>
      `
    },

    10: {
      titulo: "Aula 10 — Ética Ambiental",
      texto: `
        <p><strong>Ética Ambiental</strong> é a forma como cada pessoa:</p>
        <ul>
          <li>Respeita a natureza</li>
          <li>Entende o seu papel no ambiente</li>
          <li>Assume responsabilidade pelos impactos que causa</li>
          <li>Colabora para o bem comum</li>
        </ul>
        <p>É a base para uma sociedade sustentável e para a formação de cidadãos conscientes.</p>
      `
    }
  }
};

// Export for use in browser modules or scripts (optional)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = modulo1;
} else {
  window.modulo1 = modulo1;
}

    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleSidebar");

    toggleBtn.onclick = () => {
        sidebar.classList.toggle("collapsed");
    };
