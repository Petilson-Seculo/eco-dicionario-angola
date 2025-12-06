const modulo5 = {
  aulas: {
    1: {
      titulo: "Aula 1 — Introdução à Gestão Ambiental",
      texto: `
        <p>A <strong>gestão ambiental</strong> consiste no conjunto de práticas usadas para proteger o meio ambiente e promover o uso sustentável dos recursos naturais.</p>

        <p>Ela envolve:</p>
        <ul>
          <li>Planeamento</li>
          <li>Monitorização</li>
          <li>Avaliação de impactos</li>
          <li>Implementação de políticas ambientais</li>
        </ul>

        <p>É fundamental para empresas, governos e comunidades.</p>
      `
    },

    2: {
      titulo: "Aula 2 — Políticas Ambientais",
      texto: `
        <p>As <strong>políticas ambientais</strong> são normas e estratégias criadas para proteger o ambiente.</p>

        <p>Elas orientam ações como:</p>
        <ul>
          <li>Prevenção da poluição</li>
          <li>Uso sustentável dos recursos</li>
          <li>Conservação da biodiversidade</li>
        </ul>

        <p>Angola possui programas e leis importantes para a gestão ambiental.</p>
      `
    },

    3: {
      titulo: "Aula 3 — Educação Ambiental na Gestão",
      texto: `
        <p>A <strong>educação ambiental</strong> é essencial para capacitar cidadãos, empresas e instituições a proteger o meio ambiente.</p>

        <p>Ela ajuda a:</p>
        <ul>
          <li>Promover atitudes sustentáveis</li>
          <li>Reduzir impactos ambientais</li>
          <li>Aumentar a consciência ambiental</li>
        </ul>
      `
    },

    4: {
      titulo: "Aula 4 — Avaliação de Impacto Ambiental (AIA)",
      texto: `
        <p>A <strong>Avaliação de Impacto Ambiental (AIA)</strong> é um estudo que analisa os efeitos ambientais de um projeto antes de sua execução.</p>

        <p>Ela identifica:</p>
        <ul>
          <li>Impactos positivos</li>
          <li>Impactos negativos</li>
          <li>Medidas mitigadoras</li>
        </ul>

        <p>É obrigatória em grandes obras.</p>
      `
    },

    5: {
      titulo: "Aula 5 — Licenciamento Ambiental",
      texto: `
        <p>O <strong>licenciamento ambiental</strong> garante que atividades económicas funcionem de forma sustentável.</p>

        <p>Etapas:</p>
        <ul>
          <li>Licença Prévia</li>
          <li>Licença de Instalação</li>
          <li>Licença de Operação</li>
        </ul>

        <p>Sem licença, atividades podem ser multadas ou encerradas.</p>
      `
    },

    6: {
      titulo: "Aula 6 — Auditoria Ambiental",
      texto: `
        <p>A <strong>auditoria ambiental</strong> é uma avaliação sistemática que verifica se uma organização cumpre leis e boas práticas ambientais.</p>

        <p>Objectivos:</p>
        <ul>
          <li>Reduzir riscos ambientais</li>
          <li>Garantir conformidade</li>
          <li>Aumentar eficiência</li>
        </ul>
      `
    },

    7: {
      titulo: "Aula 7 — Gestão de Resíduos",
      texto: `
        <p>A <strong>gestão de resíduos</strong> inclui coleta, transporte, tratamento e descarte adequado do lixo.</p>

        <p>Passos importantes:</p>
        <ul>
          <li>Reduzir</li>
          <li>Reutilizar</li>
          <li>Reciclar</li>
          <li>Tratamento adequado</li>
        </ul>

        <p>É essencial para evitar poluição.</p>
      `
    },

    8: {
      titulo: "Aula 8 — Ordenamento do Território",
      texto: `
        <p>O <strong>ordenamento do território</strong> organiza o uso do espaço de forma equilibrada.</p>

        <p>Ele define:</p>
        <ul>
          <li>Zonas urbanas</li>
          <li>Zonas agrícolas</li>
          <li>Áreas de preservação</li>
        </ul>

        <p>É fundamental para evitar ocupações irregulares e desastres ambientais.</p>
      `
    },

    9: {
      titulo: "Aula 9 — Monitorização Ambiental",
      texto: `
        <p>A <strong>monitorização ambiental</strong> acompanha a qualidade do meio ambiente ao longo do tempo.</p>

        <p>Permite avaliar:</p>
        <ul>
          <li>Qualidade do ar</li>
          <li>Qualidade da água</li>
          <li>Qualidade do solo</li>
        </ul>

        <p>Ajuda a detectar problemas antes que se tornem graves.</p>
      `
    },

    10: {
      titulo: "Aula 10 — Agenda 2030 e ODS",
      texto: `
        <p>A <strong>Agenda 2030</strong> é um plano global com 17 <strong>Objetivos de Desenvolvimento Sustentável (ODS)</strong>.</p>

        <p>Os ODS incluem:</p>
        <ul>
          <li>Água potável</li>
          <li>Ação Climática</li>
          <li>Vida na Água</li>
          <li>Vida Terrestre</li>
          <li>Cidades Sustentáveis</li>
        </ul>

        <p>São metas essenciais para proteger o planeta e melhorar a vida das pessoas.</p>
      `
    }
  }
};

if (typeof module !== "undefined") {
  module.exports = modulo5;
} else {
  window.modulo5 = modulo5;
}
 