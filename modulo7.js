const modulo7 = {
  aulas: {
    1: {
      titulo: "Aula 1 — Geopolítica Ambiental",
      texto: `
        <p>A <strong>geopolítica ambiental</strong> estuda como questões ambientais influenciam relações entre países.</p>

        <p>Principais temas:</p>
        <ul>
          <li>Disputas por recursos naturais</li>
          <li>Mudanças climáticas e tratados internacionais</li>
          <li>Soberania sobre florestas e rios</li>
        </ul>

        <p>Os desafios ambientais são também desafios políticos globais.</p>
      `
    },

    2: {
      titulo: "Aula 2 — Economia Verde",
      texto: `
        <p>A <strong>economia verde</strong> é um modelo económico que promove o crescimento sustentável.</p>

        <p>Seus pilares:</p>
        <ul>
          <li>Baixas emissões de carbono</li>
          <li>Uso eficiente de recursos</li>
          <li>Inclusão social</li>
        </ul>

        <p>É uma alternativa ao modelo económico tradicional.</p>
      `
    },

    3: {
      titulo: "Aula 3 — Tecnologias Limpas",
      texto: `
        <p><strong>Tecnologias limpas</strong> reduzem impactos ambientais e aumentam a eficiência energética.</p>

        <p>Exemplos:</p>
        <ul>
          <li>Painéis solares</li>
          <li>Carros elétricos</li>
          <li>Filtros de poluição</li>
          <li>Energia eólica</li>
        </ul>
      `
    },

    4: {
      titulo: "Aula 4 — Biodiversidade Global",
      texto: `
        <p>A <strong>biodiversidade global</strong> refere-se à diversidade de espécies no planeta.</p>

        <p>Ameaças principais:</p>
        <ul>
          <li>Desmatamento</li>
          <li>Caça ilegal</li>
          <li>Poluição</li>
          <li>Mudanças climáticas</li>
        </ul>

        <p>Proteger a biodiversidade é proteger a vida na Terra.</p>
      `
    },

    5: {
      titulo: "Aula 5 — Mudanças Climáticas Avançadas",
      texto: `
        <p>As <strong>mudanças climáticas</strong> afetam oceanos, clima, ecossistemas e sociedades.</p>

        <p>Tópicos avançados:</p>
        <ul>
          <li>Aumento do nível do mar</li>
          <li>Derretimento do Ártico</li>
          <li>Eventos climáticos extremos</li>
          <li>Migrações climáticas</li>
        </ul>
      `
    },

    6: {
      titulo: "Aula 6 — Modelos de Sustentabilidade",
      texto: `
        <p>Os <strong>modelos de sustentabilidade</strong> buscam equilibrar ambiente, economia e sociedade.</p>

        <p>Modelos mais utilizados:</p>
        <ul>
          <li>Triple Bottom Line</li>
          <li>Economia Circular</li>
          <li>Desenvolvimento Sustentável</li>
        </ul>
      `
    },

    7: {
      titulo: "Aula 7 — Gestão Integrada de Recursos Naturais",
      texto: `
        <p>A <strong>gestão integrada</strong> leva em conta todos os elementos de um ecossistema ao mesmo tempo.</p>

        <p>Inclui:</p>
        <ul>
          <li>Solo</li>
          <li>Água</li>
          <li>Florestas</li>
          <li>Clima</li>
        </ul>

        <p>É usada para reduzir conflitos e garantir sustentabilidade.</p>
      `
    },

    8: {
      titulo: "Aula 8 — Inovações Ambientais",
      texto: `
        <p><strong>Inovações ambientais</strong> são novas tecnologias ou práticas que ajudam a reduzir impactos ambientais.</p>

        <p>Exemplos:</p>
        <ul>
          <li>Plásticos biodegradáveis</li>
          <li>Arquitetura sustentável</li>
          <li>Agricultura de precisão</li>
        </ul>
      `
    },

    9: {
      titulo: "Aula 9 — Justiça Ambiental",
      texto: `
        <p>A <strong>justiça ambiental</strong> busca garantir que nenhuma comunidade seja mais afetada pela poluição.</p>

        <p>Defende:</p>
        <ul>
          <li>Igualdade no acesso a recursos</li>
          <li>Distribuição justa dos impactos ambientais</li>
          <li>Proteção de comunidades vulneráveis</li>
        </ul>
      `
    },

    10: {
      titulo: "Aula 10 — Futuro do Meio Ambiente",
      texto: `
        <p>O futuro do meio ambiente depende das decisões tomadas hoje.</p>

        <p>Prioridades globais:</p>
        <ul>
          <li>Redução de carbono</li>
          <li>Conservação da biodiversidade</li>
          <li>Cidades inteligentes</li>
          <li>Economia circular</li>
        </ul>

        <p>Construir um futuro sustentável é responsabilidade de todos.</p>
      `
    }
  }
};

if (typeof module !== "undefined") {
  module.exports = modulo7;
} else {
  window.modulo7 = modulo7;
}
