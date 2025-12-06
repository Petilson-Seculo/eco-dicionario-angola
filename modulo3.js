const modulo3 = {
  aulas: {
    1: {
      titulo: "Aula 1 — Introdução aos Problemas Ambientais",
      texto: `
        <p>Os <strong>problemas ambientais</strong> são alterações negativas causadas no meio ambiente,
        resultantes principalmente da ação humana.</p>

        <p>Entre as principais causas estão:</p>
        <ul>
          <li>Urbanização desordenada</li>
          <li>Crescimento populacional</li>
          <li>Uso excessivo de recursos naturais</li>
          <li>Má gestão de resíduos</li>
          <li>Atividades industriais poluentes</li>
        </ul>

        <p>Compreender esses problemas é o primeiro passo para construir soluções sustentáveis.</p>
      `
    },

    2: {
      titulo: "Aula 2 — Poluição do Ar",
      texto: `
        <p>A <strong>poluição do ar</strong> ocorre quando gases e partículas tóxicas são lançados
        na atmosfera em concentrações prejudiciais.</p>

        <p>Principais fontes:</p>
        <ul>
          <li>Queima de combustíveis fósseis</li>
          <li>Indústrias</li>
          <li>Veículos automóveis</li>
          <li>Queimadas</li>
        </ul>

        <p>Consequências:</p>
        <ul>
          <li>Doenças respiratórias</li>
          <li>Chuvas ácidas</li>
          <li>Aquecimento global</li>
        </ul>
      `
    },

    3: {
      titulo: "Aula 3 — Poluição da Água",
      texto: `
        <p>A <strong>poluição da água</strong> ocorre quando substâncias contaminantes são
        lançadas em rios, lagos, aquíferos e oceanos.</p>

        <p>Fontes comuns:</p>
        <ul>
          <li>Descarga de esgoto sem tratamento</li>
          <li>Resíduos industriais</li>
          <li>Derrames de petróleo</li>
          <li>Lixo plástico</li>
        </ul>

        <p>Impactos:</p>
        <ul>
          <li>Morte de peixes e plantas aquáticas</li>
          <li>Doenças em seres humanos</li>
          <li>Escassez de água potável</li>
        </ul>
      `
    },

    4: {
      titulo: "Aula 4 — Degradação do Solo",
      texto: `
        <p>A <strong>degradação do solo</strong> é o processo de perda da fertilidade e qualidade
        do solo, tornando-o improdutivo.</p>

        <p>Causas principais:</p>
        <ul>
          <li>Desmatamento</li>
          <li>Uso excessivo de agroquímicos</li>
          <li>Erosão</li>
          <li>Construções irregulares</li>
        </ul>

        <p>Isso afeta diretamente a agricultura e a segurança alimentar.</p>
      `
    },

    5: {
      titulo: "Aula 5 — Desmatamento",
      texto: `
        <p><strong>Desmatamento</strong> é o corte ou remoção total da vegetação de uma área.</p>

        <p>Motivos frequentes:</p>
        <ul>
          <li>Expansão agrícola</li>
          <li>Extração de madeira</li>
          <li>Construções urbanas</li>
          <li>Queimadas</li>
        </ul>

        <p>Consequências:</p>
        <ul>
          <li>Perda de biodiversidade</li>
          <li>Erosão do solo</li>
          <li>Mudanças climáticas</li>
        </ul>
      `
    },

    6: {
      titulo: "Aula 6 — Perda de Biodiversidade",
      texto: `
        <p>A <strong>biodiversidade</strong> é o conjunto de todas as formas de vida existentes na Terra.</p>

        <p>A perda de biodiversidade ocorre por:</p>
        <ul>
          <li>Desmatamento</li>
          <li>Caça ilegal</li>
          <li>Poluição</li>
          <li>Mudanças climáticas</li>
        </ul>

        <p>Isso ameaça o equilíbrio natural e coloca espécies em risco de extinção.</p>
      `
    },

    7: {
      titulo: "Aula 7 — Mudanças Climáticas, Efeito Estufa e Aquecimento Global",
      texto: `
        <p>As <strong>mudanças climáticas</strong> referem-se às alterações no clima da Terra ao longo do tempo,
        agravadas pela ação humana.</p>

        <p>O <strong>efeito estufa</strong> é natural, mas o excesso de gases estufa — CO₂, metano e outros —
        intensifica-o, causando o <strong>aquecimento global</strong>.</p>

        <p>Impactos:</p>
        <ul>
          <li>Aumento da temperatura média</li>
          <li>Eventos climáticos extremos</li>
          <li>Derretimento dos gelos polares</li>
          <li>Elevação do nível do mar</li>
        </ul>
      `
    },

    8: {
      titulo: "Aula 8 — Desertificação",
      texto: `
        <p><strong>Desertificação</strong> é o processo de transformação de áreas férteis em desertos.</p>

        <p>Principais causas:</p>
        <ul>
          <li>Desmatamento</li>
          <li>Manejo inadequado do solo</li>
          <li>Sobrepastoreio</li>
          <li>Mudanças climáticas</li>
        </ul>

        <p>Em Angola, o sul do país é uma zona altamente vulnerável à desertificação.</p>
      `
    },

    9: {
      titulo: "Aula 9 — Lixo Marinho e Plásticos",
      texto: `
        <p>O <strong>lixo marinho</strong>, especialmente o plástico, é um dos maiores problemas ambientais do mundo.</p>

        <p>Consequências:</p>
        <ul>
          <li>Envenenamento e morte de animais marinhos</li>
          <li>Contaminação da cadeia alimentar</li>
          <li>Poluição visual e degradação de praias</li>
        </ul>

        <p>O microplástico já foi encontrado até na água potável e em alimentos consumidos pelo ser humano.</p>
      `
    },

    10: {
      titulo: "Aula 10 — Problemas Ambientais em Angola",
      texto: `
        <p>Principais problemas ambientais que afetam Angola:</p>
        <ul>
          <li>Gestão inadequada de resíduos sólidos</li>
          <li>Queimadas descontroladas</li>
          <li>Poluição da água em áreas urbanas</li>
          <li>Erosão acelerada em várias províncias</li>
          <li>Desertificação no Sul (Namibe, Cunene, Cuando-Cubango)</li>
          <li>Perda de habitats e espécies endémicas</li>
        </ul>

        <p>O fortalecimento da educação ambiental é essencial para enfrentar esses desafios.</p>
      `
    }
  }
};

if (typeof module !== "undefined") {
  module.exports = modulo3;
} else {
  window.modulo3 = modulo3;
}
