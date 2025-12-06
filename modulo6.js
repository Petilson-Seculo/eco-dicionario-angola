const modulo6 = {
  aulas: {
    1: {
      titulo: "Aula 1 — Separação de Resíduos",
      texto: `
        <p>A <strong>separação de resíduos</strong> é uma das práticas mais simples e importantes para reduzir impactos ambientais.</p>

        <p>Tipos de resíduos:</p>
        <ul>
          <li><strong>Orgânicos:</strong> restos de alimentos e materiais biodegradáveis.</li>
          <li><strong>Recicláveis:</strong> papel, plástico, vidro e metal.</li>
          <li><strong>Perigosos:</strong> pilhas, baterias, medicamentos.</li>
        </ul>

        <p>Separar o lixo corretamente facilita a reciclagem e reduz a poluição.</p>
      `
    },

    2: {
      titulo: "Aula 2 — Compostagem",
      texto: `
        <p><strong>Compostagem</strong> é o processo de transformar resíduos orgânicos em adubo natural.</p>

        <p>Vantagens:</p>
        <ul>
          <li>Diminui a quantidade de lixo enviado aos aterros</li>
          <li>Melhora a fertilidade do solo</li>
          <li>Reduz a emissão de gases poluentes</li>
        </ul>
      `
    },

    3: {
      titulo: "Aula 3 — Jardinagem Sustentável",
      texto: `
        <p>A <strong>jardinagem sustentável</strong> utiliza técnicas que protegem o solo e a biodiversidade.</p>

        <p>Boas práticas:</p>
        <ul>
          <li>Uso de compostagem</li>
          <li>Plantar espécies nativas</li>
          <li>Evitar pesticidas</li>
        </ul>
      `
    },

    4: {
      titulo: "Aula 4 — Reutilização e Reciclagem",
      texto: `
        <p><strong>Reutilizar</strong> significa usar algo mais de uma vez.  
        <strong>Reciclar</strong> significa transformar materiais usados em novos produtos.</p>

        <p>Exemplos:</p>
        <ul>
          <li>Garrafas transformadas em vasos</li>
          <li>Papel reciclado</li>
          <li>Plásticos derretidos e reutilizados</li>
        </ul>
      `
    },

    5: {
      titulo: "Aula 5 — Consumo Consciente",
      texto: `
        <p><strong>Consumo consciente</strong> é comprar apenas o necessário, evitando desperdício.</p>

        <p>Dicas:</p>
        <ul>
          <li>Evitar produtos descartáveis</li>
          <li>Comprar local</li>
          <li>Preferir produtos recicláveis</li>
        </ul>
      `
    },

    6: {
      titulo: "Aula 6 — Economia Circular",
      texto: `
        <p>A <strong>economia circular</strong> promove um ciclo contínuo de uso de recursos, reduzindo o lixo ao mínimo.</p>

        <p>Princípios:</p>
        <ul>
          <li>Reduzir</li>
          <li>Reutilizar</li>
          <li>Reciclar</li>
          <li>Reproduzir</li>
        </ul>
      `
    },

    7: {
      titulo: "Aula 7 — Projetos Ambientais Escolares",
      texto: `
        <p>Escolas podem desenvolver projetos que promovam a educação ambiental.</p>

        <p>Exemplos de projetos:</p>
        <ul>
          <li>Hortas escolares</li>
          <li>Campanhas de reciclagem</li>
          <li>Limpeza de praças e rios</li>
        </ul>
      `
    },

    8: {
      titulo: "Aula 8 — Oficinas Práticas",
      texto: `
        <p><strong>Oficinas práticas</strong> ensinam atividades sustentáveis de forma direta.</p>

        <p>Oficinas comuns:</p>
        <ul>
          <li>Artesanato com recicláveis</li>
          <li>Plantio de mudas</li>
          <li>Produção de sabão ecológico</li>
        </ul>
      `
    },

    9: {
      titulo: "Aula 9 — Atividades de Campo",
      texto: `
        <p>As <strong>atividades de campo</strong> aproximam os alunos da natureza e desenvolvem senso ambiental.</p>

        <p>Atividades possíveis:</p>
        <ul>
          <li>Visitas a reservas naturais</li>
          <li>Monitorização de rios</li>
          <li>Exploração de trilhas ecológicas</li>
        </ul>
      `
    },

    10: {
      titulo: "Aula 10 — Boas Práticas na Comunidade",
      texto: `
        <p>Boas práticas ambientais podem ser aplicadas na comunidade para melhorar a qualidade de vida.</p>

        <p>Exemplos:</p>
        <ul>
          <li>Campanhas de separação de resíduos</li>
          <li>Mutirões de limpeza</li>
          <li>Proteção de áreas verdes</li>
        </ul>

        <p>Pequenas ações geram grandes mudanças.</p>
      `
    }
  }
};

if (typeof module !== "undefined") {
  module.exports = modulo6;
} else {
  window.modulo6 = modulo6;
}
