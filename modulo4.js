const modulo4 = {
  aulas: {
    1: {
      titulo: "Aula 1 — Cadeias Alimentares",
      texto: `
        <p>As <strong>cadeias alimentares</strong> representam a transferência de energia entre seres vivos.</p>

        <p>Componentes principais:</p>
        <ul>
          <li><strong>Produtores:</strong> plantas e algas, que produzem seu próprio alimento.</li>
          <li><strong>Consumidores:</strong> animais que se alimentam de outros seres vivos.</li>
          <li><strong>Decompositores:</strong> fungos e bactérias que reciclam nutrientes.</li>
        </ul>

        <p>As cadeias alimentares mantêm o equilíbrio dos ecossistemas.</p>
      `
    },

    2: {
      titulo: "Aula 2 — Redes Alimentares",
      texto: `
        <p>As <strong>redes alimentares</strong> são o conjunto de várias cadeias alimentares interligadas.</p>

        <p>Elas mostram como a energia circula de forma complexa na natureza.</p>

        <p>Uma alteração em uma espécie pode afetar todo o ecossistema.</p>
      `
    },

    3: {
      titulo: "Aula 3 — Ecossistemas e Seus Componentes",
      texto: `
        <p>Um <strong>ecossistema</strong> é formado pelos elementos bióticos (seres vivos) 
        e abióticos (solo, água, clima).</p>

        <p>Tipos de ecossistemas:</p>
        <ul>
          <li>Florestas</li>
          <li>Savanas</li>
          <li>Desertos</li>
          <li>Ecossistemas aquáticos</li>
        </ul>

        <p>Tudo está interligado em um ecossistema.</p>
      `
    },

    4: {
      titulo: "Aula 4 — Relações Ecológicas",
      texto: `
        <p>As <strong>relações ecológicas</strong> descrevem como os seres vivos interagem entre si.</p>

        <p>Relações positivas:</p>
        <ul>
          <li>Mutualismo</li>
          <li>Cooperação</li>
        </ul>

        <p>Relações negativas:</p>
        <ul>
          <li>Predação</li>
          <li>Parasitismo</li>
          <li>Competição</li>
        </ul>
      `
    },

    5: {
      titulo: "Aula 5 — Ciclos Biogeoquímicos",
      texto: `
        <p>Os <strong>ciclos biogeoquímicos</strong> são processos naturais que reciclam elementos na Terra.</p>

        <p>Principais ciclos:</p>
        <ul>
          <li>Ciclo da Água</li>
          <li>Ciclo do Carbono</li>
          <li>Ciclo do Nitrogénio</li>
          <li>Ciclo do Fósforo</li>
        </ul>
      `
    },

    6: {
      titulo: "Aula 6 — Serviços Ecossistêmicos",
      texto: `
        <p><strong>Serviços ecossistêmicos</strong> são benefícios que a natureza fornece à sociedade.</p>

        <p>Tipos:</p>
        <ul>
          <li><strong>Provisão:</strong> alimentos, água, madeira.</li>
          <li><strong>Regulação:</strong> clima, qualidade do ar.</li>
          <li><strong>Culturais:</strong> lazer, paisagem, turismo.</li>
        </ul>
      `
    },

    7: {
      titulo: "Aula 7 — Pegada Ecológica",
      texto: `
        <p>A <strong>pegada ecológica</strong> mede a quantidade de recursos naturais consumidos por uma pessoa,
        comunidade ou país.</p>

        <p>Quanto maior a pegada, maior o impacto ambiental.</p>

        <p>Reduzir a pegada é essencial para a sustentabilidade.</p>
      `
    },

    8: {
      titulo: "Aula 8 — Sustentabilidade Urbana",
      texto: `
        <p><strong>Sustentabilidade urbana</strong> busca criar cidades mais verdes e eficientes.</p>

        <p>Ações importantes:</p>
        <ul>
          <li>Transporte público eficiente</li>
          <li>Reciclagem e gestão de resíduos</li>
          <li>Espaços verdes</li>
          <li>Energia renovável</li>
        </ul>
      `
    },

    9: {
      titulo: "Aula 9 — Agricultura Sustentável",
      texto: `
        <p>A <strong>agricultura sustentável</strong> produz alimentos sem destruir o meio ambiente.</p>

        <p>Práticas recomendadas:</p>
        <ul>
          <li>Rotação de culturas</li>
          <li>Uso racional de água</li>
          <li>Redução de agroquímicos</li>
          <li>Proteção do solo</li>
        </ul>
      `
    },

    10: {
      titulo: "Aula 10 — Energias Renováveis",
      texto: `
        <p><strong>Energias renováveis</strong> são fontes de energia inesgotáveis e limpas.</p>

        <p>Principais tipos:</p>
        <ul>
          <li>Solar</li>
          <li>Eólica</li>
          <li>Hídrica</li>
          <li>Biomassa</li>
        </ul>

        <p>São essenciais para reduzir emissões e combater as mudanças climáticas.</p>
      `
    }
  }
};

if (typeof module !== "undefined") {
  module.exports = modulo4;
} else {
  window.modulo4 = modulo4;
}
