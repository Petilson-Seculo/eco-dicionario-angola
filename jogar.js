        const modules = [
            { id: 1, title: "Fundamentos da Educação Ambiental", emoji: "🌱" },
            { id: 2, title: "Componentes do Meio Ambiente", emoji: "🌍" },
            { id: 3, title: "Problemas Ambientais", emoji: "⚠️" },
            { id: 4, title: "Ecologia e Sustentabilidade", emoji: "♻️" },
            { id: 5, title: "Gestão Ambiental", emoji: "📋" },
            { id: 6, title: "Educação Ambiental Prática", emoji: "🛠️" },
            { id: 7, title: "Temas Ambientais Avançados", emoji: "🎓" },
        { id: 8, title: "Jogo da Forca", emoji: "🔤" }

        ];

        const TOTAL_ROUNDS = 10;
        const QUESTIONS_PER_ROUND = 3;

        const questionsBank = {
            1: {
                easy: [
                    { q: "O que significa educação ambiental?", a: ["Ensinar sobre o meio ambiente", "Estudar matemática", "Aprender idiomas", "Fazer exercícios"], correct: 0 },
                    { q: "Qual é o objetivo da educação ambiental?", a: ["Proteger a natureza", "Ganhar dinheiro", "Construir edifícios", "Vender produtos"], correct: 0 },
                    { q: "Quem deve aprender sobre o meio ambiente?", a: ["Todas as pessoas", "Apenas adultos", "Apenas crianças", "Apenas professores"], correct: 0 },
                    { q: "A educação ambiental é importante para:", a: ["Cuidar do planeta", "Jogar videogames", "Ver televisão", "Dormir mais"], correct: 0 },
                    { q: "Onde podemos aprender educação ambiental?", a: ["Na escola e em casa", "Apenas no cinema", "Só na internet", "Nunca aprendemos"], correct: 0 },
                    { q: "O que devemos fazer com o lixo?", a: ["Separar e reciclar", "Jogar na rua", "Queimar tudo", "Esconder"], correct: 0 },
                    { q: "As plantas são importantes porque:", a: ["Produzem oxigénio", "Fazem barulho", "Comem animais", "Poluem o ar"], correct: 0 },
                    { q: "Poupar água é:", a: ["Muito importante", "Desnecessário", "Impossível", "Proibido"], correct: 0 },
                    { q: "O que é consciência ambiental?", a: ["Cuidar da natureza", "Destruir florestas", "Poluir rios", "Desperdiçar recursos"], correct: 0 },
                    { q: "Reciclar ajuda a:", a: ["Reduzir lixo", "Aumentar poluição", "Gastar mais", "Destruir natureza"], correct: 0 },
                    { q: "Animais precisam de:", a: ["Habitat saudável", "Poluição", "Lixo", "Destruição"], correct: 0 },
                    { q: "Educação ambiental começa:", a: ["Em qualquer idade", "Aos 50 anos", "Nunca", "Só para adultos"], correct: 0 },
                    { q: "Proteger o ambiente é tarefa de:", a: ["Todos nós", "Apenas governo", "Ninguém", "Só cientistas"], correct: 0 },
                    { q: "Florestas são importantes para:", a: ["Vida no planeta", "Fazer fogo", "Construir tudo", "Nada"], correct: 0 },
                    { q: "Desperdício de recursos:", a: ["Deve ser evitado", "É bom", "É necessário", "Não importa"], correct: 0 },
                    { q: "Água limpa é essencial para:", a: ["Saúde e vida", "Poluir", "Desperdiçar", "Contaminar"], correct: 0 },
                    { q: "Ar puro depende de:", a: ["Menos poluição", "Mais fumaça", "Queimadas", "Fábricas sujas"], correct: 0 },
                    { q: "Cuidar da natureza significa:", a: ["Preservar recursos", "Destruir tudo", "Não fazer nada", "Poluir mais"], correct: 0 },
                    { q: "Energias limpas são:", a: ["Melhores para ambiente", "Mais poluentes", "Impossíveis", "Caras demais"], correct: 0 },
                    { q: "Biodiversidade significa:", a: ["Variedade de vida", "Um animal só", "Extinção", "Poluição"], correct: 0 },
                    { q: "Respeitar a natureza é:", a: ["Dever de todos", "Opcional", "Desnecessário", "Impossível"], correct: 0 },
                    { q: "Plantar árvores ajuda:", a: ["O meio ambiente", "A poluir", "A destruir", "Nada"], correct: 0 },
                    { q: "Lixo no mar prejudica:", a: ["Vida marinha", "Nada", "Ajuda peixes", "É bom"], correct: 0 },
                    { q: "Educação ambiental ensina:", a: ["Respeito pela natureza", "Poluir", "Desperdiçar", "Destruir"], correct: 0 },
                    { q: "Consumo consciente é:", a: ["Comprar o necessário", "Comprar tudo", "Desperdiçar", "Gastar sempre"], correct: 0 },
                    { q: "Poluição afeta:", a: ["Todos os seres vivos", "Ninguém", "Só plantas", "Só animais"], correct: 0 },
                    { q: "Natureza precisa de:", a: ["Nossa proteção", "Ser destruída", "Poluição", "Lixo"], correct: 0 },
                    { q: "Futuro do planeta depende:", a: ["De nossas ações hoje", "Não depende", "Só do governo", "Só de empresas"], correct: 0 },
                    { q: "Meio ambiente saudável garante:", a: ["Qualidade de vida", "Doenças", "Poluição", "Destruição"], correct: 0 },
                    { q: "Responsabilidade ambiental é:", a: ["De cada pessoa", "Só de alguns", "Ninguém tem", "Impossível"], correct: 0 }
                ],
                medium: [
                    { q: "Qual documento internacional estabeleceu princípios para educação ambiental?", a: ["Declaração de Tbilisi", "Carta da ONU", "Protocolo de Kyoto", "Acordo de Paris"], correct: 0 },
                    { q: "A educação ambiental deve ser:", a: ["Contínua e interdisciplinar", "Apenas teórica", "Opcional nas escolas", "Focada só em biologia"], correct: 0 },
                    { q: "Qual é um princípio fundamental da educação ambiental?", a: ["Participação ativa da comunidade", "Memorização de conceitos", "Competição entre alunos", "Isolamento de disciplinas"], correct: 0 },
                    { q: "A educação ambiental formal ocorre:", a: ["Em instituições de ensino", "Apenas em casa", "Só na televisão", "Apenas online"], correct: 0 },
                    { q: "Qual metodologia favorece a educação ambiental?", a: ["Aprendizagem participativa", "Decorar conceitos", "Aulas expositivas apenas", "Provas escritas só"], correct: 0 },
                    { q: "Dimensão da educação ambiental:", a: ["Social, ecológica e política", "Apenas económica", "Só tecnológica", "Unicamente científica"], correct: 0 },
                    { q: "Objetivos da educação ambiental incluem:", a: ["Consciência e responsabilidade", "Lucro máximo", "Crescimento ilimitado", "Consumo desenfreado"], correct: 0 },
                    { q: "Educação ambiental não-formal acontece:", a: ["ONGs e movimentos sociais", "Só universidades", "Apenas empresas", "Somente governo"], correct: 0 },
                    { q: "Qual evento marcou o início da EA global?", a: ["Conferência de Estocolmo 1972", "Rio 92", "Protocolo de Montreal", "COP 21"], correct: 0 },
                    { q: "Transversalidade na EA significa:", a: ["Integração entre disciplinas", "Isolamento de matérias", "Apenas uma disciplina", "Sem conexões"], correct: 0 },
                    { q: "Educação ambiental crítica busca:", a: ["Transformação social", "Manter status quo", "Adaptar problemas", "Ignorar conflitos"], correct: 0 },
                    { q: "Qual valor é central na EA?", a: ["Ética ambiental", "Lucro imediato", "Consumismo", "Individualismo"], correct: 0 },
                    { q: "Paulo Freire contribuiu para EA com:", a: ["Pedagogia crítica", "Educação bancária", "Ensino tradicional", "Memorização"], correct: 0 },
                    { q: "EA deve promover:", a: ["Pensamento crítico", "Aceitação passiva", "Conformismo", "Individualismo"], correct: 0 },
                    { q: "Qual abordagem é inadequada para EA?", a: ["Fragmentada e descontextualizada", "Holística", "Interdisciplinar", "Participativa"], correct: 0 },
                    { q: "Carta da Terra propõe:", a: ["Ética global sustentável", "Crescimento sem limites", "Consumo máximo", "Exploração intensiva"], correct: 0 },
                    { q: "EA deve desenvolver:", a: ["Competências socioambientais", "Apenas técnicas", "Só memorização", "Apenas cálculos"], correct: 0 },
                    { q: "Educomunicação ambiental envolve:", a: ["Comunicação e educação", "Apenas palestras", "Só propaganda", "Apenas livros"], correct: 0 },
                    { q: "Qual princípio guia a EA?", a: ["Sustentabilidade", "Lucro máximo", "Crescimento ilimitado", "Consumo intensivo"], correct: 0 },
                    { q: "EA deve ser:", a: ["Permanente e contínua", "Pontual e isolada", "Apenas infantil", "Só para adultos"], correct: 0 },
                    { q: "Qual estratégia fortalece EA?", a: ["Projetos comunitários", "Isolamento social", "Ações individuais só", "Competição"], correct: 0 },
                    { q: "Dimensão política da EA envolve:", a: ["Cidadania e participação", "Neutralidade total", "Omissão política", "Apatia social"], correct: 0 },
                    { q: "EA deve questionar:", a: ["Modelo de desenvolvimento", "Nada", "Apenas técnicas", "Só ciências"], correct: 0 },
                    { q: "Qual é desafio da EA?", a: ["Superar visão antropocêntrica", "Manter consumismo", "Ignorar crises", "Aceitar degradação"], correct: 0 },
                    { q: "EA transformadora busca:", a: ["Mudança de paradigma", "Manter sistema atual", "Adaptar superficialmente", "Conformismo"], correct: 0 },
                    { q: "Interdisciplinaridade na EA:", a: ["Integra saberes diversos", "Isola conhecimentos", "Fragmenta conteúdos", "Separa disciplinas"], correct: 0 },
                    { q: "Qual abordagem favorece EA?", a: ["Problematizadora", "Transmissiva apenas", "Autoritária", "Bancária"], correct: 0 },
                    { q: "EA deve promover:", a: ["Justiça socioambiental", "Desigualdade", "Exploração", "Injustiça"], correct: 0 },
                    { q: "Qual perspetiva enriquece EA?", a: ["Saberes tradicionais", "Apenas ciência ocidental", "Só tecnologia", "Unicamente economia"], correct: 0 },
                    { q: "Objetivo final da EA é:", a: ["Cidadãos ambientalmente responsáveis", "Consumidores passivos", "Observadores neutros", "Espectadores"], correct: 0 }
                ],
                hard: [
                    { q: "Em que ano ocorreu a Conferência de Tbilisi?", a: ["1977", "1972", "1992", "2000"], correct: 0 },
                    { q: "Qual conceito integra educação ambiental formal e não-formal?", a: ["Transversalidade", "Hierarquia", "Fragmentação", "Centralização"], correct: 0 },
                    { q: "Qual abordagem pedagógica é essencial na educação ambiental?", a: ["Construtivismo crítico", "Behaviorismo puro", "Ensino tradicional", "Educação bancária"], correct: 0 },
                    { q: "Quem cunhou o termo 'alfabetização ecológica'?", a: ["Fritjof Capra", "Paulo Freire", "Edgar Morin", "Leonardo Boff"], correct: 0 },
                    { q: "Qual paradigma a EA crítica questiona?", a: ["Antropocentrismo", "Biocentrismo", "Ecocentrismo", "Holismo"], correct: 0 },
                    { q: "Teoria da complexidade na EA foi proposta por:", a: ["Edgar Morin", "Rousseau", "Piaget", "Vigotsky"], correct: 0 },
                    { q: "Qual documento definiu EA na Política Nacional?", a: ["Lei 9.795/1999", "CF/88", "Lei 6.938/81", "Decreto 4.281"], correct: 0 },
                    { q: "Conceito de 'sociedades sustentáveis' surgiu em:", a: ["Tratado de EA - Rio 92", "Estocolmo 72", "Tbilisi 77", "Johannesburgo 02"], correct: 0 },
                    { q: "EA emancipatória se baseia em:", a: ["Teoria crítica", "Positivismo", "Pragmatismo", "Empirismo"], correct: 0 },
                    { q: "Qual corrente de EA enfatiza resolução de problemas?", a: ["Resolutiva", "Conservacionista", "Moral", "Humanista"], correct: 0 },
                    { q: "Conceito de 'pegada ecológica' mede:", a: ["Impacto humano em hectares globais", "Apenas emissões CO2", "Só consumo de água", "Apenas desmatamento"], correct: 0 },
                    { q: "EA fenomenológica valoriza:", a: ["Experiência vivida", "Apenas dados", "Só estatísticas", "Apenas teoria"], correct: 0 },
                    { q: "Qual epistemologia fundamenta EA holística?", a: ["Pensamento sistémico", "Reducionismo", "Mecanicismo", "Dualismo"], correct: 0 },
                    { q: "Conceito de 'biorregionalismo' propõe:", a: ["Gestão baseada em ecossistemas", "Divisão política tradicional", "Centralização administrativa", "Globalização cultural"], correct: 0 },
                    { q: "EA pós-moderna questiona:", a: ["Metanarrativas universais", "Pluralidade de saberes", "Diversidade cultural", "Múltiplas verdades"], correct: 0 },
                    { q: "Qual teórico desenvolveu 'ecologia profunda'?", a: ["Arne Naess", "Rachel Carson", "Al Gore", "Vandana Shiva"], correct: 0 },
                    { q: "EA decolonial critica:", a: ["Eurocentrismo epistemológico", "Saberes locais", "Conhecimento tradicional", "Pluralismo"], correct: 0 },
                    { q: "Qual conceito liga EA e justiça social?", a: ["Racismo ambiental", "Neutralidade política", "Tecnocracia", "Meritocracia"], correct: 0 },
                    { q: "Qual metodologia usa narrativas na EA?", a: ["Storytelling ecológico", "Exposição tradicional", "Memorização", "Exercícios repetitivos"], correct: 0 },
                    { q: "Conceito de 'commons' se refere a:", a: ["Bens comuns da humanidade", "Propriedade privada", "Mercado livre", "Privatização"], correct: 0 },
                    { q: "EA ecofeminista relaciona:", a: ["Dominação de mulheres e natureza", "Apenas questões de género", "Só problemas ambientais", "Isolamento de lutas"], correct: 0 },
                    { q: "Qual abordagem integra EA e arte?", a: ["Ecopedagogia estética", "Cientificismo puro", "Racionalismo técnico", "Positivismo lógico"], correct: 0 },
                    { q: "Conceito de 'dívida ecológica' foi proposto por:", a: ["Movimentos do Sul Global", "Países do Norte", "Corporações", "Bancos mundiais"], correct: 0 },
                    { q: "EA antirracista deve:", a: ["Combater injustiça ambiental", "Ser neutra", "Ignorar desigualdades", "Manter privilégios"], correct: 0 },
                    { q: "Qual paradigma a EA sistémica adota?", a: ["Pensamento complexo", "Linear causal", "Reducionista", "Fragmentado"], correct: 0 },
                    { q: "EA insurgente propõe:", a: ["Resistência a modelos hegemónicos", "Conformidade", "Adaptação passiva", "Aceitação acrítica"], correct: 0 },
                    { q: "Conceito de 'transição ecológica' envolve:", a: ["Mudança civilizatória profunda", "Ajustes superficiais", "Manutenção do sistema", "Crescimento verde"], correct: 0 },
                    { q: "Qual epistemologia valoriza EA indígena?", a: ["Cosmologias relacionais", "Dualismo cartesiano", "Antropocentrismo", "Universalismo"], correct: 0 },
                    { q: "EA para decrescimento questiona:", a: ["Paradigma do crescimento ilimitado", "Economia estacionária", "Limites planetários", "Suficiência"], correct: 0 },
                    { q: "Qual conceito une EA e democracia?", a: ["Cidadania ecológica ativa", "Representação formal", "Voto apenas", "Delegação passiva"], correct: 0 }
                ]
            },

2: {
        easy: [
            { q: "Qual dos seguintes é um **componente abiótico** do meio ambiente?", 
              a: ["A água.", "As plantas.", "Os animais.", "Os microrganismos."], 
              correct: 0 },
            { q: "O que são **componentes bióticos**?", 
              a: ["Os seres vivos (animais, plantas, fungos e microrganismos).", "As rochas e minerais.", "O clima e o vento.", "Os edifícios e as estradas."], 
              correct: 0 },
            { q: "O **ar** que respiramos é um componente de que tipo?", 
              a: ["Abiótico.", "Biótico.", "Antrópico.", "Cultural."], 
              correct: 0 },
            { q: "Qual é o termo para os componentes do ambiente criados ou modificados pelo ser humano (ex: cidades, estradas)?", 
              a: ["Componentes antrópicos (ou culturais).", "Componentes bióticos.", "Componentes abióticos.", "Componentes naturais."], 
              correct: 0 },
            { q: "As **árvores** e a **relva** pertencem a qual componente ambiental?", 
              a: ["Biótico.", "Abiótico.", "Antrópico.", "Social."], 
              correct: 0 },
            { q: "O **clima** (temperatura, chuva) é considerado um componente abiótico, biótico ou antrópico?", 
              a: ["Abiótico.", "Biótico.", "Antrópico.", "Físico-químico."], 
              correct: 0 },
            { q: "Os **animais** de um ecossistema são um exemplo de componente...", 
              a: ["Biótico.", "Abiótico.", "Antrópico.", "Geológico."], 
              correct: 0 },
            { q: "O que é um **ecossistema**?", 
              a: ["Um conjunto de seres vivos e o meio físico onde vivem, interagindo entre si.", "Apenas o conjunto de animais.", "Apenas as rochas e o solo.", "Um tipo de poluição."], 
              correct: 0 },
            { q: "A **luz solar** é essencial para qual processo dos componentes bióticos?", 
              a: ["Fotossíntese.", "Dormir.", "Andar.", "Comunicação."], 
              correct: 0 },
            { q: "Qual camada do planeta é composta pelo ar e gases?", 
              a: ["Atmosfera.", "Litosfera.", "Hidrosfera.", "Biosfera."], 
              correct: 0 },
            { q: "Qual é o componente abiótico que cobre a maior parte da superfície da Terra?", 
              a: ["A água (Hidrosfera).", "O solo.", "O ar.", "O fogo."], 
              correct: 0 },
            { q: "As **rochas** e o **solo** pertencem a qual esfera da Terra?", 
              a: ["Litosfera (ou Geossfera).", "Atmosfera.", "Hidrosfera.", "Biosfera."], 
              correct: 0 },
            { q: "O que são **produtores** num ecossistema (ex: as plantas)?", 
              a: ["Seres vivos que produzem o seu próprio alimento (autotróficos).", "Seres vivos que caçam outros animais.", "Seres vivos que se alimentam de plantas.", "Seres vivos que transformam a matéria morta."], 
              correct: 0 },
            { q: "O que são **consumidores** num ecossistema (ex: a maioria dos animais)?", 
              a: ["Seres vivos que se alimentam de outros seres vivos para obter energia.", "Seres vivos que produzem o seu próprio alimento.", "Seres vivos que vivem debaixo da terra.", "Seres vivos que só comem rochas."], 
              correct: 0 },
            { q: "Qual componente é o principal responsável pela degradação da matéria orgânica num ecossistema?", 
              a: ["Decompositores (fungos e bactérias).", "Produtores.", "Consumidores primários.", "Consumidores terciários."], 
              correct: 0 },
            { q: "A **temperatura** é um fator abiótico que influencia diretamente o quê?", 
              a: ["A distribuição e a atividade dos seres vivos.", "O sabor da comida.", "A cor do céu.", "O som dos pássaros."], 
              correct: 0 },
            { q: "O que é a **biodiversidade**?", 
              a: ["A variedade de vida, incluindo a diversidade de espécies, genes e ecossistemas.", "Apenas a variedade de plantas.", "Apenas o número de animais grandes.", "O número de montanhas num país."], 
              correct: 0 },
            { q: "As **barragens** e as **fábricas** são exemplos de componentes...", 
              a: ["Antrópicos (ou culturais).", "Bióticos.", "Abióticos.", "Naturais."], 
              correct: 0 },
            { q: "Onde se encontram os **ecossistemas aquáticos**?", 
              a: ["Em rios, lagos, oceanos e pântanos.", "Em desertos e savanas.", "Em cidades e vilas.", "Apenas no topo de montanhas."], 
              correct: 0 },
            { q: "Onde se encontram os **ecossistemas terrestres**?", 
              a: ["Em florestas, desertos, savanas e montanhas.", "Em rios e oceanos.", "Apenas no subsolo.", "Apenas nas áreas urbanas."], 
              correct: 0 },
            { q: "Qual componente abiótico é vital para a sobrevivência de todos os seres vivos?", 
              a: ["A água.", "O fogo.", "O vento.", "O ferro."], 
              correct: 0 },
            { q: "A interação entre um leão (biótico) e uma zebra (biótico) é um exemplo de qual tipo de relação?", 
              a: ["Relação biótica (cadeia alimentar).", "Relação abiótica.", "Relação antrópica.", "Relação social."], 
              correct: 0 },
            { q: "Qual dos seguintes é um **fator antrópico** que afeta o meio ambiente?", 
              a: ["A poluição causada por veículos.", "A chuva forte.", "A luz do sol.", "A formação de montanhas."], 
              correct: 0 },
            { q: "O que é um **habitat**?", 
              a: ["O local específico onde um organismo vive e onde encontra as condições necessárias para a sua sobrevivência.", "Um tipo de comida.", "Uma espécie de planta.", "Uma camada da atmosfera."], 
              correct: 0 },
            { q: "A **salinidade** da água é um fator abiótico importante em quais ecossistemas?", 
              a: ["Ecossistemas marinhos e estuários.", "Florestas tropicais.", "Desertos de areia.", "Montanhas geladas."], 
              correct: 0 },
            { q: "O que os seres vivos precisam para realizar o ciclo da **respiração**?", 
              a: ["Oxigénio (componente abiótico).", "Pedras.", "Lama.", "Eletricidade."], 
              correct: 0 },
            { q: "O **dióxido de carbono (CO2)**, embora um gás, é crucial para qual componente biótico?", 
              a: ["As plantas (para a fotossíntese).", "Os animais carnívoros.", "Os fungos.", "Os peixes."], 
              correct: 0 },
            { q: "As **culturas agrícolas** criadas pelo homem (ex: milho) pertencem a qual componente?", 
              a: ["Componente biótico, mas com forte influência antrópica (cultivado).", "Componente puramente abiótico.", "Componente social.", "Componente geológico."], 
              correct: 0 },
            { q: "Qual componente do meio ambiente é afetado pela **desflorestação**?", 
              a: ["Os componentes bióticos (árvores e animais) e abióticos (solo, água).", "Apenas a luz solar.", "Apenas o ar.", "Apenas a temperatura."], 
              correct: 0 },
            { q: "A **humidade** do ar é um fator que faz parte de qual componente?", 
              a: ["Componente abiótico.", "Componente biótico.", "Componente antrópico.", "Componente social."], 
              correct: 0 }
        ],
  },

5: {
    easy: [
        // Aulas 5.1 e 5.2: Políticas e Instrumentos
        { q: "Qual é o principal objetivo de uma 'Política Pública Ambiental' (Aula 5.1)?", 
          a: ["Definir regras e diretrizes para proteger o meio ambiente e promover o uso sustentável dos recursos.", "Aumentar a produção de petróleo e gás.", "Organizar festivais de música e cultura.", "Gerir o sistema de transporte rodoviário."], 
          correct: 0 },
        { q: "Um 'Instrumento de Gestão Ambiental' (Aula 5.2) serve para quê?", 
          a: ["Apoiar a implementação das políticas ambientais (ex: leis, fiscalização, licenças).", "Construir edifícios sem considerar o impacto.", "Promover a caça ilegal de espécies ameaçadas.", "Decorar escritórios com plantas."], 
          correct: 0 },
        { q: "Qual é o nome da lei mais importante em Angola que estabelece as bases da proteção ambiental (Aula 5.1)?", 
          a: ["Lei de Bases do Ambiente.", "Código Civil.", "Lei do Turismo.", "Estatuto do Funcionalismo Público."], 
          correct: 0 },
        // Aula 5.3: Licenciamento e Avaliação de Impacto Ambiental (AIA)
        { q: "O que significa a sigla AIA (Aula 5.3)?", 
          a: ["Avaliação de Impacto Ambiental.", "Associação de Investidores Angolanos.", "Análise da Infraestrutura Agrícola.", "Atividade de Interesse Artístico."], 
          correct: 0 },
        { q: "O Licenciamento Ambiental é o processo obrigatório para que tipo de atividade?", 
          a: ["Atividades que possam causar poluição ou degradação ambiental.", "Apenas atividades de leitura de livros.", "Apenas atividades de jardinagem doméstica.", "Venda de alimentos em mercados tradicionais."], 
          correct: 0 },
        { q: "Qual é a função básica da Avaliação de Impacto Ambiental (AIA)?", 
          a: ["Prever os efeitos que um projeto pode ter no meio ambiente antes de ser implementado.", "Calcular o lucro de um projeto após 10 anos.", "Determinar o número de trabalhadores necessários.", "Escolher as cores da construção."], 
          correct: 0 },
        // Aula 5.4: Áreas de conservação em Angola
        { q: "Qual é o objetivo principal de criar uma 'Área de Conservação' (Aula 5.4) em Angola, como um Parque Nacional?", 
          a: ["Proteger a biodiversidade, ecossistemas e espécies ameaçadas, como a Palanca Negra Gigante.", "Ser um local exclusivo para a exploração mineira.", "Permitir a construção livre de indústrias.", "Facilitar o desmatamento para agricultura."], 
          correct: 0 },
        { q: "Qual dos seguintes é um Parque Nacional em Angola?", 
          a: ["Parque Nacional da Quiçama.", "Parque Nacional do Porto.", "Parque Nacional da Restinga.", "Parque Nacional da Maianga."], 
          correct: 0 },
        { q: "O que é 'Ecoturismo' em Áreas de Conservação?", 
          a: ["Turismo que visa a apreciação da natureza e promove a conservação e o bem-estar das populações locais.", "Turismo de massa com grande impacto ambiental.", "Viagens de luxo sem contacto com a natureza.", "Visitas a grandes centros comerciais."], 
          correct: 0 },
        // Aula 5.5 e 5.6: Resíduos Sólidos
        { q: "A 'Gestão Integrada de Resíduos Sólidos' (GIRS - Aula 5.5) envolve quais etapas?", 
          a: ["Da produção de resíduos até à disposição final (recolha, tratamento e destino).", "Apenas a etapa de transporte do lixo.", "Somente a construção de aterros sanitários.", "Apenas a venda de materiais recicláveis."], 
          correct: 0 },
        { q: "O que é 'Segregação de Resíduos' (Aula 5.6)?", 
          a: ["Separar o lixo na origem (ex: em casa ou na escola) por tipo (plástico, papel, orgânico).", "Misturar todo o lixo numa única lixeira.", "Queimar o lixo na rua.", "Apenas o processo industrial de reciclagem."], 
          correct: 0 },
        { q: "Qual cor de contentor é tipicamente usada para a recolha de **vidro**?", 
          a: ["Verde.", "Amarelo.", "Azul.", "Vermelho."], 
          correct: 0 },
        // Aulas 5.7 e 5.8: Monitorização e Saneamento
        { q: "O que é 'Monitorização Ambiental' (Aula 5.7)?", 
          a: ["A medição e o acompanhamento contínuo dos parâmetros ambientais (ex: qualidade do ar, da água e do solo).", "A contagem de carros numa estrada.", "A organização de um evento desportivo.", "A publicidade de produtos."], 
          correct: 0 },
        { q: "Qual é o objetivo da 'Fiscalização Ambiental' (Aula 5.7)?", 
          a: ["Verificar se as empresas e cidadãos estão a cumprir a legislação ambiental e aplicar multas se necessário.", "Distribuir prémios às empresas.", "Aconselhar sobre moda.", "Organizar a agenda governamental."], 
          correct: 0 },
        { q: "Saneamento Básico (Aula 5.8) inclui quais serviços essenciais?", 
          a: ["Água potável, esgotos, drenagem de águas pluviais e gestão de resíduos sólidos.", "Apenas a construção de estradas.", "O fornecimento de eletricidade.", "Apenas a educação formal."], 
          correct: 0 },
        // Aula 5.8 (Continuação) e 5.9: Saúde e RSE
        { q: "A falta de Saneamento Básico (esgotos e água limpa) está diretamente ligada a que tipo de problemas?", 
          a: ["Problemas de saúde pública (doenças como cólera e malária).", "Aumento da fertilidade do solo.", "Melhoria da qualidade do ar.", "Diminuição do custo de vida."], 
          correct: 0 },
        { q: "O que significa 'Responsabilidade Socioambiental Empresarial' (RSE - Aula 5.9)?", 
          a: ["O compromisso voluntário das empresas com o desenvolvimento sustentável, para além das obrigações legais.", "Apenas pagar impostos.", "Obrigação de construir apenas um tipo de produto.", "Obrigação de fechar a empresa ao fim de um ano."], 
          correct: 0 },
        { q: "Um projeto de RSE (Aula 5.9) de uma empresa de Angola pode incluir:", 
          a: ["Financiamento de programas de Educação Ambiental ou reflorestamento.", "Exploração máxima de recursos sem controlo.", "Apenas a distribuição de lucros aos acionistas.", "A compra de carros de luxo para executivos."], 
          correct: 0 },
        // Aula 5.10: Certificações e Normas Ambientais
        { q: "Qual Norma Internacional (Aula 5.10) foca na Gestão Ambiental em empresas e é a mais conhecida no mundo?", 
          a: ["A família de normas ISO 14000.", "A norma ISO 9000 (Qualidade).", "O Código Penal Angolano.", "A Certificação de Bom Cozinheiro."], 
          correct: 0 },
        { q: "O que uma empresa demonstra ao obter uma 'Certificação Ambiental'?", 
          a: ["Que o seu sistema de gestão cumpre padrões internacionais de desempenho ambiental.", "Que a empresa vai fechar em breve.", "Que todos os seus produtos são orgânicos.", "Que ela não tem nenhuma obrigação legal."], 
          correct: 0 },
        { q: "Qual o principal benefício de uma empresa angolana adotar normas de gestão ambiental?", 
          a: ["Reduzir custos operacionais (água, energia, resíduos) e melhorar a imagem no mercado internacional.", "Aumentar a poluição local.", "Parar completamente a produção.", "Contratar apenas estrangeiros."], 
          correct: 0 },
        // Questões de Foco na Prática e Revisão
        { q: "Na segregação (Aula 5.6), que tipo de resíduo deve ser colocado no contentor para material **orgânico**?", 
          a: ["Restos de comida, cascas de frutas e borra de café.", "Garrafas de plástico e latas de refrigerante.", "Jornais e papelão.", "Pilhas e baterias."], 
          correct: 0 },
        { q: "Qual é a principal consequência da ausência de drenagem de águas pluviais (Aula 5.8) em Luanda?", 
          a: ["Inundações e acumulação de lixo nas ruas durante a época das chuvas.", "Diminuição do trânsito automóvel.", "Aumento do turismo de praia.", "Melhoria na cobertura de telemóvel."], 
          correct: 0 },
        { q: "O 'Termo de Responsabilidade Ambiental' é um instrumento que se enquadra em qual aula?", 
          a: ["Aula 5.2 - Instrumentos de gestão ambiental.", "Aula 5.9 - Responsabilidade social.", "Aula 5.4 - Áreas de conservação.", "Aula 5.1 - Políticas públicas."], 
          correct: 0 },
        { q: "Qual é o Parque Nacional angolano conhecido pela sua savana, que foi repovoado com a Palanca Negra Gigante?", 
          a: ["Parque Nacional de Cangandala.", "Parque Nacional da Mupa.", "Parque Nacional do Yona.", "Parque Nacional do Iona."], 
          correct: 0 },
        { q: "Quem é o responsável por fazer a 'Fiscalização Ambiental' em Angola (Aula 5.7)?", 
          a: ["As entidades de tutela e inspeção ambiental.", "Apenas os professores nas escolas.", "Os taxistas nas cidades.", "Qualquer cidadão sem formação."], 
          correct: 0 },
        { q: "Qual dos 5R's (Módulo 4) é fundamental para reduzir o trabalho da Gestão de Resíduos (Módulo 5)?", 
          a: ["Reduzir (o volume de lixo gerado na origem).", "Reciclar (que ocorre no final da cadeia).", "Repensar (apenas na mente).", "Recusar (apenas de vez em quando)."], 
          correct: 0 },
        { q: "Um 'Relatório de Sustentabilidade' que detalha os impactos ambientais da empresa é um exemplo de RSE de qual aula?", 
          a: ["Aula 5.9 - Responsabilidade socioambiental empresarial.", "Aula 5.10 - Certificações e normas.", "Aula 5.3 - Licenciamento.", "Aula 5.1 - Políticas públicas."], 
          correct: 0 },
        { q: "A 'Certificação do Lixo' (que lixo é perigoso ou não perigoso) é importante para a...", 
          a: ["Aula 5.5 - Gestão integrada de resíduos sólidos.", "Aula 5.3 - Licenciamento.", "Aula 5.8 - Saneamento básico.", "Aula 5.1 - Políticas públicas."], 
          correct: 0 },
        { q: "As 'Zonas de Proteção Parcial' em Angola (como uma Reserva Florestal) são exemplos de que conceito (Aula 5.4)?", 
          a: ["Áreas de Conservação.", "Zonas de Produção Industrial.", "Locais para Desportos Aquáticos.", "Áreas de Pastoreio Livre."], 
          correct: 0 },
    ],
    
    medium: [
        // Aulas 5.1 e 5.2: Políticas e Instrumentos
        { q: "Qual a diferença fundamental entre 'Política Ambiental' e 'Instrumento de Gestão Ambiental'?", 
          a: ["A Política é a diretriz ou intenção (o que fazer), e o Instrumento é a ferramenta prática (como fazer: legislação, fiscalização, etc.).", "A Política é sempre um documento internacional, e o Instrumento é sempre nacional.", "A Política só se aplica a empresas, e o Instrumento só se aplica a cidadãos.", "Não há diferença significativa; os termos são sinónimos."], 
          correct: 0 },
        { q: "Qual princípio da Lei de Bases do Ambiente de Angola estabelece que quem polui ou causa dano deve assumir os custos da reparação ou prevenção?", 
          a: ["Princípio do Poluidor-Pagador.", "Princípio da Precaução.", "Princípio da Transversalidade.", "Princípio da Responsabilidade Única."], 
          correct: 0 },
        { q: "O que são 'Normas de Emissão' (parte dos Instrumentos de Gestão)?", 
          a: ["Limites máximos permitidos de poluentes que podem ser lançados no ar, água ou solo por uma atividade.", "As regras de etiqueta num evento ambiental.", "A frequência com que uma rádio fala sobre o ambiente.", "As normas para a construção de estradas."], 
          correct: 0 },
        // Aula 5.3: Licenciamento e Avaliação de Impacto Ambiental (AIA)
        { q: "Qual é a principal função do 'Estudo de Impacto Ambiental' (EIA), que faz parte da AIA?", 
          a: ["Identificar, prever e avaliar os impactos positivos e negativos de um projeto e propor medidas de mitigação/compensação.", "Aprovar imediatamente o início de qualquer obra.", "Definir o preço final de um produto industrial.", "Medir a quantidade de chuva numa região."], 
          correct: 0 },
        { q: "Em Angola, o processo de Licenciamento Ambiental exige a obtenção de quais documentos principais?", 
          a: ["Licença Prévia, Licença de Instalação e Licença de Exploração.", "Carta de condução e bilhete de identidade.", "Certificado de casamento e de registo civil.", "Autorização de Viagem e Passaporte."], 
          correct: 0 },
        { q: "O 'Relatório de Impacto Ambiental' (RIMA) difere do EIA por ser um documento com qual característica?", 
          a: ["É a versão resumida e em linguagem clara do EIA, destinada à consulta pública e fácil compreensão.", "É um documento secreto para uso exclusivo do Governo.", "É um relatório anual de lucros da empresa.", "É um documento que só se aplica a projetos pequenos."], 
          correct: 0 },
        // Aula 5.4: Áreas de Conservação em Angola
        { q: "Qual é a classificação de Área de Conservação em Angola que permite um uso sustentável e controlado dos recursos, sendo mais flexível do que um Parque Nacional?", 
          a: ["Reserva Parcial de Caça ou Reserva Natural.", "Zona de Exploração Total.", "Área de Construção Livre.", "Zona de Produção Agrícola Intensiva."], 
          correct: 0 },
        { q: "Qual o principal desafio na gestão das Áreas de Conservação em Angola (ex: Quiçama, Iona)?", 
          a: ["A caça furtiva, a ocupação ilegal e a falta de recursos e pessoal técnico para a fiscalização.", "Excesso de turistas bem-comportados.", "A falta de chuva na floresta amazónica.", "A abundância de voluntários."], 
          correct: 0 },
        { q: "Qual a importância socioeconómica da gestão eficaz das áreas de conservação para as comunidades rurais próximas?", 
          a: ["Geração de empregos através do ecoturismo e conservação, e uso sustentável de recursos por estas comunidades.", "Apenas o isolamento das comunidades.", "Obrigar as comunidades a se mudarem para a cidade.", "Apenas a exploração de petróleo."], 
          correct: 0 },
        // Aula 5.5 e 5.6: Gestão e Segregação de Resíduos
        { q: "A 'hierarquia de gestão de resíduos' (Módulo 4 e 5) prioriza qual ação sobre a Reciclagem?", 
          a: ["A Redução (produzir menos lixo na origem).", "A Incineração (queima do lixo).", "O Aterro Sanitário (depósito final).", "A Segregação (separação)."], 
          correct: 0 },
        { q: "A segregação de resíduos em Angola, em particular o plástico (Aula 5.6), permite que material de alto valor seja transformado. Qual tipo de plástico é comumente reciclado para fabricar novos têxteis ou embalagens de bebidas?", 
          a: ["PET (Polietileno Tereftalato).", "PVC (Policloreto de Vinila).", "Isopor (Poliestireno Expandido).", "Borracha de Pneu."], 
          correct: 0 },
        { q: "O que são 'Resíduos Perigosos' na Gestão Integrada?", 
          a: ["Resíduos que apresentam risco à saúde pública ou ao ambiente (tóxicos, inflamáveis, corrosivos, etc.), como pilhas e lixo hospitalar.", "Apenas cascas de banana e restos de vegetais.", "Papel e papelão.", "Garrafas de água vazias."], 
          correct: 0 },
        // Aulas 5.7 e 5.8: Monitorização e Saneamento
        { q: "O que é um 'Parâmetro de Qualidade da Água' monitorado pelas autoridades angolanas?", 
          a: ["O nível de pH, a turbidez, a presença de coliformes fecais e de metais pesados.", "O sabor da água pura.", "A velocidade da corrente do rio.", "A cor do céu sobre a água."], 
          correct: 0 },
        { q: "Qual é o órgão público ou entidade em Angola responsável pela fiscalização do cumprimento da legislação ambiental (Aula 5.7)?", 
          a: ["O Ministério do Ambiente e órgãos específicos de inspeção.", "O Ministério da Cultura.", "A Associação Nacional de Futebol.", "O Banco Central de Angola."], 
          correct: 0 },
        { q: "Qual a relação entre o Saneamento Básico (Aula 5.8) e a mitigação das Mudanças Climáticas (Módulo 3)?", 
          a: ["Sistemas de tratamento de esgotos mais eficientes podem reduzir a emissão de gases de efeito estufa (como o metano).", "Não existe relação entre os dois.", "O saneamento aumenta o trânsito.", "O saneamento apenas afeta a poluição do ar."], 
          correct: 0 },
        // Aula 5.9 e 5.10: RSE e Normas
        { q: "Qual é o principal benefício da adoção da Responsabilidade Socioambiental Empresarial (RSE) para a imagem da empresa (Aula 5.9)?", 
          a: ["Melhora a reputação, aumenta a confiança dos consumidores e investidores e atrai talentos.", "Aumenta os custos sem qualquer retorno.", "Garante a impunidade legal.", "Permite que a empresa ignore a poluição."], 
          correct: 0 },
        { q: "O que significa 'Due Diligence Ambiental' no contexto empresarial (RSE)?", 
          a: ["Uma investigação detalhada dos riscos, passivos e conformidade ambiental de uma empresa antes de uma transação (compra, fusão, etc.).", "O processo de decoração dos escritórios.", "A organização de festas corporativas.", "A formação de equipas de futebol."], 
          correct: 0 },
        { q: "A ISO 14001 (Aula 5.10) exige que as organizações tenham uma 'Política Ambiental' e realizem o quê anualmente para garantir a melhoria contínua?", 
          a: ["Auditorias internas e externas (verificação de conformidade).", "Votações secretas entre funcionários.", "Distribuição de lucros aos clientes.", "Viagens de lazer para todos os gestores."], 
          correct: 0 },
        // Questões de Aplicação e Conhecimento Detalhado
        { q: "No contexto da Gestão de Resíduos em Angola, o que representa um 'Aterro Controlado' comparado a um 'Lixão' (Lixeira a céu aberto)?", 
          a: ["O Aterro Controlado é uma área que tem algum tratamento do lixo, mas é menos rigoroso que um Aterro Sanitário.", "São a mesma coisa: lixo espalhado por todo o lado.", "É um local onde apenas se armazena papel.", "É uma área onde todo o lixo é queimado imediatamente."], 
          correct: 0 },
        { q: "Qual documento legal angolano complementa a Lei de Bases do Ambiente, focando nos procedimentos para a Avaliação de Impacto Ambiental e Licenciamento?", 
          a: ["O Decreto Presidencial n.º 194/11 (ou legislação atualizada sobre AIA e Licenciamento).", "A Constituição da República de Angola.", "A Lei de Estrangeiros.", "O Código Comercial."], 
          correct: 0 },
        { q: "Em que bacia hidrográfica se insere o Parque Nacional de Quiçama?", 
          a: ["Na Bacia do Rio Cuanza.", "Na Bacia do Rio Cunene.", "Na Bacia do Rio Zambeze.", "Na Bacia do Rio Congo."], 
          correct: 0 },
        { q: "A 'Reserva Hídrica' é uma forma de gestão ambiental que se foca em quê?", 
          a: ["Na proteção das nascentes, cursos de água e áreas de recarga de aquíferos para garantir o abastecimento futuro.", "Na criação de lagos artificiais para lazer.", "Na construção de casas perto dos rios.", "Na exploração ilimitada de água."], 
          correct: 0 },
        { q: "Qual a diferença entre 'monitorização' e 'fiscalização' ambiental?", 
          a: ["Monitorização mede e acompanha (dados), Fiscalização verifica o cumprimento da lei (ação).", "Monitorização é feita por empresas, Fiscalização é feita pelo Governo.", "Monitorização é sempre cara, Fiscalização é sempre gratuita.", "Os termos são sinónimos."], 
          correct: 0 },
        { q: "O que é um 'Efluente' na gestão da poluição da água?", 
          a: ["O líquido residual que é descartado (esgoto, água industrial), que necessita de tratamento antes de ser devolvido ao ambiente.", "Um tipo de peixe.", "Um minério valioso.", "Um tipo de vegetação aquática."], 
          correct: 0 },
        { q: "A 'remediação de solos contaminados' é uma ação de gestão ambiental que faz parte de qual fase?", 
          a: ["Ações corretivas após a ocorrência de um dano ambiental.", "A fase de planeamento de um projeto.", "A fase de marketing de um produto.", "A fase de licenciamento inicial."], 
          correct: 0 },
        { q: "Qual a função do 'Plano de Gestão Ambiental' (PGA) que é exigido no processo de licenciamento?", 
          a: ["Detalhar as medidas e programas ambientais que a empresa ou projeto irá executar para prevenir, mitigar e monitorar impactos.", "Definir o número de horas de trabalho dos funcionários.", "Calcular o imposto sobre o lucro.", "Escolher o nome da empresa."], 
          correct: 0 },
        { q: "Para a Gestão Integrada de Resíduos (Aula 5.5), o conceito de 'Coleta Seletiva' refere-se ao quê?", 
          a: ["Recolha diferenciada de resíduos previamente segregados pelo gerador (em casa, escola, etc.).", "A recolha de todo o lixo misturado num só camião.", "A recolha de lixo apenas em áreas rurais.", "O transporte aéreo de resíduos."], 
          correct: 0 },
        { q: "Na Aula 5.10, uma 'Auditoria Ambiental' serve para...", 
          a: ["Avaliar o desempenho ambiental de uma organização e a sua conformidade legal, através de uma análise sistemática.", "Contar o dinheiro da empresa.", "Avaliar o desempenho desportivo.", "Organizar uma festa de final de ano."], 
          correct: 0 },
        { q: "O conceito de 'Pegada Hídrica' (similar à Pegada Ecológica, mas focado na água) é relevante para qual aula do Módulo 5?", 
          a: ["Aula 5.9 - Responsabilidade socioambiental empresarial (para medir e reduzir o uso de água).", "Aula 5.4 - Áreas de conservação.", "Aula 5.1 - Políticas públicas.", "Aula 5.7 - Fiscalização."], 
          correct: 0 },
        { q: "A obrigatoriedade de ter um 'Plano de Emergência Ambiental' é um requisito de qual Instrumento de Gestão?", 
          a: ["Licenciamento Ambiental (para responder a acidentes como derrames de produtos químicos).", "Saneamento Básico.", "Certificação ISO 14001.", "Fiscalização Ambiental."], 
          correct: 0 },
    ],

    hard: [
        // Aulas 5.1 e 5.2: Políticas e Instrumentos Complexos
        { q: "O conceito de 'Serviços Ambientais' ou 'Serviços dos Ecossistemas' (como a purificação da água pelo solo) é crucial nas políticas ambientais. O que significa a 'Pagamento por Serviços Ambientais' (PSA)?", 
          a: ["Um instrumento económico que remunera proprietários de terra ou comunidades por conservarem áreas que geram benefícios ambientais à sociedade.", "Apenas o pagamento de multas por poluição.", "Um imposto sobre a compra de produtos orgânicos.", "O pagamento de salários a funcionários públicos."], 
          correct: 0 },
        { q: "Qual é o principal desafio na implementação de 'Políticas Públicas Ambientais' eficazes em Angola, segundo especialistas?", 
          a: ["A fraca articulação intersetorial (falta de coordenação entre ministérios) e a limitada capacidade institucional para fiscalização e monitorização.", "O excesso de chuva em Luanda.", "A falta de interesse da população em jogar o EcoQuiz.", "A elevada taxa de analfabetismo entre os gestores."], 
          correct: 0 },
        { q: "Qual instrumento é fundamental para promover a participação pública e a transparência na tomada de decisões sobre projetos com impacto, conforme exigido na legislação angolana?", 
          a: ["A Consulta Pública, especialmente no processo de Avaliação de Impacto Ambiental (AIA).", "O voto secreto dos deputados.", "Apenas as reuniões privadas entre as empresas e o Governo.", "O uso de redes sociais para propaganda."], 
          correct: 0 },
        // Aula 5.3: Licenciamento e Avaliação de Impacto Ambiental (AIA)
        { q: "Em projetos de exploração de recursos naturais em Angola (petróleo, minerais), o que é o 'Plano de Encerramento e Abandono' e porque é exigido na Licença de Exploração?", 
          a: ["É o plano detalhado de como a empresa irá desativar, remediar e restaurar o local explorado após o fim da atividade.", "É o plano de férias dos gestores.", "O plano de marketing para o novo produto.", "O plano de construção da sede da empresa."], 
          correct: 0 },
        { q: "A 'Mitigação' e a 'Compensação' são medidas essenciais da AIA. Qual a diferença hierárquica entre elas?", 
          a: ["Mitigação é evitar ou reduzir o impacto negativo; Compensação é pagar ou criar um benefício equivalente por um dano que não pode ser evitado.", "Mitigação é sempre mais cara que a Compensação.", "Compensação é feita antes do projeto, Mitigação é feita depois.", "Não há diferença; os termos são usados de forma indiferente."], 
          correct: 0 },
        { q: "O que implica a 'Análise de Risco Ambiental' num processo de AIA complexo (ex: instalação de uma refinaria)?", 
          a: ["Identificar a probabilidade de acidentes e as suas consequências ambientais, e definir planos de emergência.", "Calcular o tempo que demorará a construir a refinaria.", "Aprovar as cores dos equipamentos.", "Determinar o preço do produto final."], 
          correct: 0 },
        // Aula 5.4: Áreas de Conservação em Angola
        { q: "O que é uma 'Zona Tampão' (Buffer Zone) no contexto de um Parque Nacional angolano (ex: Iona)?", 
          a: ["Uma área circundante ao parque onde são implementadas restrições de uso mais suaves para proteger o núcleo de conservação e envolver as comunidades.", "A zona mais perigosa para a vida selvagem.", "Uma área de exploração mineira intensiva.", "Um local onde é proibida a entrada de pessoas."], 
          correct: 0 },
        { q: "Em termos de conservação, o que se entende por 'Corredor Ecológico' e qual a sua relevância em Angola?", 
          a: ["Áreas que ligam fragmentos de habitat, permitindo o movimento e o fluxo genético de espécies (ex: entre o Okavango e os parques do Sul).", "Uma estrada pavimentada para turistas.", "Uma linha de transmissão de energia.", "Um local para construir casas isoladas."], 
          correct: 0 },
        { q: "Qual a diferença entre 'Reserva Integral' e 'Monumento Natural' em termos de gestão e uso?", 
          a: ["A Reserva Integral visa a proteção total e não permite visitação; o Monumento Natural protege elementos naturais específicos e pode permitir visitação controlada.", "O Monumento Natural é sempre maior que a Reserva.", "A Reserva Integral permite a caça.", "O Monumento Natural é apenas uma placa com um nome."], 
          correct: 0 },
        // Aula 5.5 e 5.6: Gestão de Resíduos Avançada
        { q: "O 'Tratamento Térmico' (Incineração) de resíduos perigosos (Aula 5.5) é uma opção de gestão. Qual o principal desafio ambiental associado a esta prática?", 
          a: ["A emissão de gases tóxicos e poluentes atmosféricos (ex: dioxinas e furanos) se o controlo de emissões for deficiente.", "O aumento do número de trabalhadores.", "A melhoria da qualidade do ar circundante.", "O baixo custo do processo."], 
          correct: 0 },
        { q: "Qual é o principal critério de classificação de um resíduo como 'Inerte' (ex: rochas, escombros) na Gestão de Resíduos Sólidos?", 
          a: ["O resíduo não sofre transformações físicas, químicas ou biológicas significativas ao longo do tempo (não se decompõe).", "O resíduo é sempre de cor preta.", "O resíduo pode ser totalmente dissolvido em água.", "O resíduo é muito leve."], 
          correct: 0 },
        { q: "O que é 'Aproveitamento Energético de Resíduos' (Waste-to-Energy)?", 
          a: ["A transformação de resíduos não recicláveis em energia elétrica ou calor através de processos como incineração controlada ou gaseificação.", "Apenas a produção de fertilizantes orgânicos.", "O uso de lixo para construir casas.", "A criação de esculturas com materiais descartados."], 
          correct: 0 },
        // Aulas 5.7 e 5.8: Monitorização e Saneamento Complexos
        { q: "O conceito de 'Passivo Ambiental' (Aula 5.7) está relacionado com qual fase da gestão?", 
          a: ["Danos ambientais históricos ou obrigações de reparação que a empresa ou o Estado têm pendentes (ex: solos contaminados por mineração antiga).", "Os lucros futuros de uma empresa.", "O número de empregados formados.", "A previsão do tempo para a próxima semana."], 
          correct: 0 },
        { q: "Qual é a função do 'Estudo de Dispersão de Poluentes Atmosféricos' (Aula 5.7) no licenciamento de uma indústria em Angola?", 
          a: ["Modelar como os poluentes emitidos pela fábrica se espalharão geograficamente na atmosfera e quais serão as concentrações em áreas sensíveis.", "Medir a velocidade do vento no local.", "Calcular o custo da eletricidade consumida.", "Avaliar o impacto do ruído."], 
          correct: 0 },
        { q: "A 'Fase de Pré-tratamento' no Saneamento Básico (Tratamento de Esgotos) tem como objetivo principal:", 
          a: ["Remover os sólidos grosseiros e areia para proteger os equipamentos da estação de tratamento.", "Eliminar todas as bactérias e vírus.", "Transformar o líquido em vapor.", "Adicionar produtos químicos para colorir a água."], 
          correct: 0 },
        // Aula 5.9 e 5.10: RSE e Normas de Alto Nível
        { q: "A 'Tripla Linha de Fundo' (Triple Bottom Line - TBL: Pessoas, Planeta, Lucro) é um princípio central da RSE (Aula 5.9). O que implica este conceito?", 
          a: ["Que o desempenho de uma empresa deve ser avaliado não só pelo lucro financeiro, mas também pelo seu impacto social e ambiental.", "Que a empresa deve ter apenas três funcionários.", "Que as empresas devem focar-se apenas no lucro a todo custo.", "Que a contabilidade deve ser feita em três moedas diferentes."], 
          correct: 0 },
        { q: "Qual a diferença entre a Certificação ISO 14001 (Sistema de Gestão Ambiental) e a Certificação de Rótulo Ecológico (Ecolabel)?", 
          a: ["A ISO 14001 certifica o processo de gestão da empresa; o Rótulo Ecológico certifica a performance ambiental do produto final (Aula 5.10).", "A ISO 14001 é um rótulo de produto e a Ecolabel é um rótulo de serviço.", "Os dois certificam o mesmo: a embalagem.", "A ISO 14001 só é usada na Europa."], 
          correct: 0 },
        { q: "O que significa 'Greenwashing' (Lavagem Verde) no contexto de RSE e marketing?", 
          a: ["A prática de fazer alegações falsas ou enganosas sobre o desempenho ambiental de um produto, serviço ou empresa, tentando parecer mais ecológica do que realmente é.", "A limpeza de parques e jardins com água da chuva.", "A pintura de edifícios com tintas ecológicas.", "Uma iniciativa legítima de reflorestamento."], 
          correct: 0 },
        // Questões Finais de Análise Crítica
        { q: "Qual a relação crítica entre a Aula 5.8 (Saneamento Básico) e a Aula 7.1 (Justiça Ambiental)?", 
          a: ["A falta de acesso a saneamento básico de qualidade (esgotos e água) é frequentemente um problema de justiça ambiental, afetando desproporcionalmente comunidades mais pobres e vulneráveis.", "Não há relação entre as duas aulas.", "O saneamento é um tema apenas de engenharia civil.", "A justiça ambiental só se aplica a grandes indústrias."], 
          correct: 0 },
        { q: "O que é 'Emissão Zero Líquida' (Net Zero Emission), um objetivo climático importante para a sustentabilidade em Angola (Módulo 7)?", 
          a: ["O equilíbrio entre a quantidade de gases de efeito estufa emitida e a quantidade removida da atmosfera (ex: por florestas, tecnologia).", "Não emitir lixo sólido.", "Zerar o número de acidentes de trabalho.", "Zerar o uso de água."], 
          correct: 0 },
        { q: "O que é o 'Licenciamento Único' simplificado para pequenos projetos (em alguns países), e qual o seu risco ambiental?", 
          a: ["A fusão de várias licenças numa só, com o risco de negligenciar a avaliação detalhada dos impactos ambientais.", "Um sistema que só aprova projetos grandes e caros.", "Um documento que proíbe a construção.", "Uma licença que só se aplica a estrangeiros."], 
          correct: 0 },
        { q: "Qual é o principal desafio ético (Módulo 7) associado à RSE (Aula 5.9)?", 
          a: ["Garantir que as ações de RSE não são apenas fachada (Greenwashing), mas sim integradas e relevantes para o núcleo da operação da empresa e o bem-estar social.", "Escolher o melhor logótipo.", "Obrigar os clientes a comprar mais.", "Pagar salários baixos para poupar."], 
          correct: 0 },
        { q: "O que é o 'Princípio da Precaução' na legislação ambiental (Aula 5.1)?", 
          a: ["Onde há ameaça de danos sérios ou irreversíveis, a falta de certeza científica total não deve ser usada como razão para adiar medidas preventivas eficazes.", "Obrigatoriedade de usar luvas ao manusear lixo.", "Proibir todos os projetos novos.", "Obrigação de plantar uma árvore por dia."], 
          correct: 0 },
        { q: "Na Gestão de Recursos Hídricos (Módulo 2), qual a importância do licenciamento da 'Captação de Água' em zonas de seca (Sul de Angola)?", 
          a: ["Garantir que a extração de água não comprometa o abastecimento de outras utilizações prioritárias (ex: consumo humano) e a sustentabilidade dos aquíferos.", "Apenas garantir que o proprietário paga impostos.", "Promover a irrigação ilimitada.", "Não tem importância, a água é inesgotável."], 
          correct: 0 },
        { q: "O que são 'Indicadores de Desempenho Ambiental' (IDAs) e para que servem na gestão (Aula 5.7)?", 
          a: ["São métricas quantificáveis (ex: consumo de água por produto, emissão de CO2) usadas para avaliar a eficácia do sistema de gestão ambiental da organização.", "São apenas as cores dos contentores.", "São as opiniões dos clientes sobre a empresa.", "São os títulos dos jornais de Angola."], 
          correct: 0 },
        { q: "O conceito de 'Responsabilidade Post-Consumo' (ou logística reversa) na gestão de resíduos obriga as empresas a fazer o quê?", 
          a: ["Estruturar o retorno dos seus produtos e embalagens após o uso pelo consumidor, para que sejam reciclados ou tenham o destino final adequado.", "Apenas vender mais produtos.", "Financiar equipas de futebol.", "Ignorar o que acontece ao produto depois de vendido."], 
          correct: 0 },
        { q: "A 'Avaliação Ambiental Estratégica' (AAE) difere da AIA (Aula 5.3) porque foca-se em quê?", 
          a: ["Na avaliação de planos, programas ou políticas (antes de se chegar a projetos específicos), garantindo a integração ambiental desde o nível mais alto de decisão.", "Apenas na avaliação de projetos muito pequenos.", "Na avaliação do impacto social de um projeto.", "Na avaliação do estado das estradas."], 
          correct: 0 },
        { q: "Qual o principal risco do 'Licenciamento por Adesão' (quando aplicável) para atividades de baixo impacto?", 
          a: ["O risco de a empresa declarar falsas informações de baixo impacto para evitar a fiscalização e a avaliação detalhada.", "O risco de o projeto ser demasiado lento.", "O risco de o Governo aprovar o projeto demasiado rápido.", "O risco de o custo do projeto ser muito alto."], 
          correct: 0 },
        { q: "A 'Educação Ambiental' (Módulo 1) é considerada um instrumento de gestão ambiental (Aula 5.2) porque...", 
          a: ["Promove a mudança de comportamento e a participação, que são essenciais para o sucesso de todas as políticas e ações ambientais.", "É uma ferramenta para ganhar dinheiro fácil.", "Não tem relação com a gestão ambiental.", "É apenas uma disciplina escolar."], 
          correct: 0 },
        { q: "O 'Fundo Ambiental de Angola' é um instrumento financeiro de gestão com o objetivo de...", 
          a: ["Angariar e gerir recursos financeiros para o financiamento de ações e projetos de proteção ambiental, incluindo em Áreas de Conservação.", "Financiar a construção de habitações de luxo.", "Financiar apenas a atividade de pesca.", "Financiar a importação de carros usados."], 
          correct: 0 },
    ],
},

// MÓDULO 6: EDUCAÇÃO AMBIENTAL PRÁTICA (Fácil e Intermédio Completos)
    6: {
        easy: [
            { q: "Qual é o primeiro passo essencial ao planear um projeto de Educação Ambiental numa comunidade?", 
              a: ["Fazer um diagnóstico para identificar o problema ambiental e as necessidades locais.", "Comprar todos os materiais didáticos antes de saber o tema.", "Escolher o nome do projeto e criar um logótipo.", "Pedir financiamento sem apresentar um plano."], 
              correct: 0 },
            { q: "O que deve ser um 'Objetivo' num projeto de EA (ex: M6.1)?", 
              a: ["Uma meta clara, mensurável e com prazo definido (ex: 'Reduzir o lixo em 20% em 6 meses').", "Um desejo vago sem data de conclusão.", "Uma lista de todas as pessoas que vão participar.", "O nome da pessoa responsável pelo projeto."], 
              correct: 0 },
            { q: "No planeamento, o que são as 'Atividades' (M6.1)?", 
              a: ["Os passos concretos e as ações específicas a serem realizadas (ex: workshops, campanhas de limpeza, palestras).", "O custo total do projeto.", "As leis que regem o ambiente.", "Os nomes dos participantes."], 
              correct: 0 },
            { q: "Qual a importância de ter um 'Cronograma' claro num projeto de EA?", 
              a: ["Organizar o tempo e garantir que o projeto é concluído dentro do prazo e na sequência correta.", "Apenas para impressionar os doadores.", "Para duplicar o trabalho realizado.", "Para evitar a participação da comunidade."], 
              correct: 0 },
            { q: "Qual metodologia incentiva os alunos a aprenderem fazendo, através da realização de um trabalho de campo específico?", 
              a: ["Aprendizagem Baseada em Projetos (PBL).", "Leitura passiva de manuais.", "Palestras longas e teóricas.", "Exames de múltipla escolha."], 
              correct: 0 },
            { q: "Um 'Workshop de Reciclagem Criativa' é um bom exemplo de metodologia em EA porque:", 
              a: ["Envolve a prática, a criatividade e a transformação de resíduos (mão na massa).", "É muito caro de implementar.", "Não exige a participação das pessoas.", "Foca apenas na teoria."], 
              correct: 0 },
            { q: "O que é uma 'Saída de Campo' (M6.2) em EA?", 
              a: ["Uma visita a um ecossistema, centro de reciclagem ou área poluída para observação direta e recolha de dados.", "Uma aula teórica em laboratório.", "Uma reunião com o presidente do município.", "Uma viagem de férias."], 
              correct: 0 },
            { q: "A 'Dramatização' ou o teatro (M6.2) em EA é útil para:", 
              a: ["Simular problemas ambientais e discutir soluções de forma interativa e emocional.", "Apenas para fazer rir o público.", "Para evitar falar sobre temas sérios.", "Para ensinar apenas a história."], 
              correct: 0 },
            { q: "O que significa fazer um 'Diagnóstico Ambiental Participativo' (DAP) no início de um projeto?", 
              a: ["Identificar os problemas e as causas na comunidade, contando com a voz e o conhecimento dos moradores locais.", "Contratar uma empresa externa para fazer todo o trabalho.", "Apenas recolher dados de poluição da Internet.", "Fazer um exame médico completo na população."], 
              correct: 0 },
            { q: "Qual tipo de informação é importante recolher num diagnóstico (M6.3)?", 
              a: ["Ocorrência de lixo, uso da água, desflorestamento local e perceção dos moradores sobre esses problemas.", "O preço da eletricidade na capital.", "O número de carros na estrada.", "As notas dos alunos em matemática."], 
              correct: 0 },
            { q: "Uma 'Entrevista com Líderes Comunitários' (M6.3) num DAP serve para quê?", 
              a: ["Compreender a dinâmica social, os valores culturais e os pontos de vista influentes sobre o ambiente local.", "Apenas para distribuir dinheiro.", "Para ensinar a história da aldeia.", "Para marcar uma festa."], 
              correct: 0 },
            { q: "Por que o diagnóstico é importante para a contextualização do projeto?", 
              a: ["Garante que o projeto aborda problemas reais e relevantes para aquela comunidade específica, aumentando o sucesso.", "Apenas para preencher documentos burocráticos.", "Para complicar o processo de planeamento.", "Para prolongar a duração do projeto."], 
              correct: 0 },
            { q: "Qual é uma vantagem de usar as redes sociais (ex: WhatsApp, Facebook) num projeto de EA em Angola?", 
              a: ["Permitir a disseminação rápida de informações e a mobilização de jovens para ações e eventos.", "Apenas publicar fotos de gatos.", "Apenas seguir celebridades internacionais.", "Aumentar o tempo gasto em atividades não-produtivas."], 
              correct: 0 },
            { q: "O que é um 'Infográfico' (M6.4) e por que é útil em EA?", 
              a: ["Uma representação visual de dados complexos que facilita a compreensão de temas (ex: reciclagem, alterações climáticas).", "Um tipo de música popular.", "Um documento legal complicado.", "Um tipo de planta."], 
              correct: 0 },
            { q: "Um 'Podcast' (M6.4) sobre a biodiversidade angolana pode ser uma ferramenta de EA porque:", 
              a: ["Permite disseminar conteúdo de áudio educativo de forma acessível, mesmo em áreas com Internet limitada ou baixa literacia.", "Só pode ser ouvido por especialistas.", "É muito caro de produzir.", "Só funciona em rádios antigas."], 
              correct: 0 },
            { q: "Por que procurar 'Parcerias' com empresas locais é importante para um projeto de EA (M6.5)?", 
              a: ["Permite obter recursos financeiros, materiais (ex: luvas, sacos) ou apoio logístico para as atividades.", "As empresas farão todo o trabalho sozinhas.", "Apenas para ter um logótipo no folheto.", "Não é necessário, pois o Governo faz tudo."], 
              correct: 0 },
            { q: "O que é o 'Voluntariado' no contexto de um projeto de EA (M6.5)?", 
              a: ["O trabalho ou a doação de tempo e esforço para o projeto de forma não remunerada, impulsionado pelo compromisso ambiental.", "Um tipo de emprego a tempo inteiro e pago.", "Um cargo de gestão numa ONG.", "A compra obrigatória de produtos."], 
              correct: 0 },
            { q: "Qual é a principal contribuição de uma Escola ou Universidade como parceira num projeto de EA?", 
              a: ["Fornecer conhecimento técnico, espaço físico para workshops e mobilizar alunos e professores para o voluntariado.", "Apenas dar notas aos participantes.", "Apenas imprimir certificados de participação.", "Gerir as finanças do projeto."], 
              correct: 0 },
            { q: "O 'Monitoramento' (M6.6) de um projeto de EA significa:", 
              a: ["Acompanhar de forma contínua as atividades para garantir que estão a ser realizadas conforme o planeado e corrigir desvios.", "Apenas contar o número de pessoas presentes.", "Ignorar os problemas que surgem.", "Fazer a avaliação apenas no final."], 
              correct: 0 },
            { q: "A 'Avaliação' (M6.6) de um projeto visa medir o quê?", 
              a: ["Se os objetivos propostos foram alcançados (ex: a redução de lixo, a mudança de comportamento).", "Se o tempo foi bem gasto.", "Se os participantes gostaram da comida.", "Se a equipa se divertiu durante o projeto."], 
              correct: 0 },
            { q: "Qual a importância de usar 'Indicadores' (M6.6) na avaliação?", 
              a: ["São unidades de medida que demonstram o progresso e o impacto do projeto de forma quantificável (ex: kg de lixo recolhido).", "São apenas decorações nos relatórios.", "São números que não têm significado.", "São palavras subjetivas sem valor de medição."], 
              correct: 0 },
            { q: "Uma 'Campanha de Limpeza de Praias' (M6.7) é uma ação prática de EA que promove o quê?", 
              a: ["Consciência sobre o lixo marinho e a responsabilidade coletiva na sua gestão.", "Apenas a oportunidade de fazer exercício.", "A poluição dos oceanos.", "O aumento do uso de plástico."], 
              correct: 0 },
            { q: "A 'Plantação de Árvores' (M6.7) nas cidades contribui diretamente para a EA ao:", 
              a: ["Envolver a comunidade na recuperação de áreas degradadas e no conhecimento da importância da arborização (sombreamento, ar puro).", "Aumentar o custo de vida nas cidades.", "Promover a construção de mais estradas.", "Diminuir a quantidade de água disponível."], 
              correct: 0 },
            { q: "O que é 'Segregação de Resíduos na Fonte' (M6.7) para um projeto de EA?", 
              a: ["Separar o lixo (orgânico, plástico, papel) na casa ou escola antes de ser recolhido, facilitando a reciclagem.", "Misturar todo o lixo numa única lixeira.", "Queimar o lixo em casa.", "Vender o lixo no mercado negro."], 
              correct: 0 },
            { q: "Qual é a característica essencial de um 'Líder Ambiental' (M6.8) eficaz na comunidade?", 
              a: ["Ser um exemplo de comportamento sustentável, inspirando e mobilizando outros com integridade.", "Ser a pessoa mais rica da comunidade.", "Ser a pessoa mais alta e forte.", "Ser alguém que nunca ouve a opinião dos outros."], 
              correct: 0 },
            { q: "O que é a 'Ética da Responsabilidade' (M6.8) num projeto de EA?", 
              a: ["A obrigação moral de responder pelas consequências das nossas ações no ambiente e nas futuras gerações.", "A obrigação de culpar os outros pelos problemas.", "A liberdade de fazer o que se quer sem pensar nas consequências.", "A obrigação de cumprir apenas as leis."], 
              correct: 0 },
            { q: "O uso de 'jogos educativos' e 'gincanas' (M6.2) em EA tem como objetivo principal:", 
              a: ["Tornar a aprendizagem sobre o ambiente divertida, interativa e memorável.", "Tornar a aprendizagem mais longa e chata.", "Apenas para premiar os melhores alunos.", "Para substituir completamente as aulas formais."], 
              correct: 0 },
            { q: "Qual o papel de um 'Recurso Educativo' (M6.4) num projeto de EA?", 
              a: ["Facilitar a comunicação de conceitos complexos e apoiar o educador na sua atividade pedagógica.", "Substituir o educador por completo.", "Complicar a compreensão do aluno.", "Apenas para preencher o tempo de aula."], 
              correct: 0 },
            { q: "Por que é fundamental que a 'Comunicação' (M6.5) de um projeto de EA seja clara e acessível?", 
              a: ["Para garantir que todos os membros da comunidade compreendam os objetivos, os benefícios e como participar nas ações.", "Para limitar a participação apenas a quem tem estudo avançado.", "Para que só o líder do projeto entenda.", "Para esconder informações importantes."], 
              correct: 0 },
            { q: "O que o princípio da 'Sustentabilidade' exige de um projeto de EA (M6.6)?", 
              a: ["Que ele tenha capacidade de gerar benefícios a longo prazo, mesmo após o fim do financiamento inicial.", "Que ele termine imediatamente após a primeira rodada.", "Que ele use o máximo de recursos possível.", "Que ele nunca seja avaliado."], 
              correct: 0 }
        ],
        medium: [
            { q: "Qual a diferença entre um 'Objetivo Geral' e um 'Objetivo Específico' no planeamento de um projeto de EA?", 
              a: ["O Objetivo Geral é amplo (ex: 'Melhorar a gestão de resíduos'); o Específico é detalhado, mensurável e focado na ação (ex: 'Capacitar 50 famílias em compostagem').", "O Objetivo Geral é medido em anos; o Específico, em dias.", "O Objetivo Geral é sempre sobre árvores; o Específico, sobre água.", "Não há diferença; os termos são sinónimos."], 
              correct: 0 },
            { q: "O que significa a sigla **SMART** no contexto da definição de objetivos de um projeto (M6.1)?", 
              a: ["Specific (Específico), Measurable (Mensurável), Achievable (Alcançável), Relevant (Relevante), Time-bound (Temporal).", "Simple, Monetary, Accurate, Reliable, Truthful.", "Social, Moral, Accessible, Responsible, True.", "Short, Medium, And, Right, Time."], 
              correct: 0 },
            { q: "Qual o erro mais comum na fase de 'Definição de Escopo' (M6.1) de um projeto de EA?", 
              a: ["Definir um escopo demasiado vasto ou ambicioso para os recursos e o tempo disponíveis.", "Definir um escopo muito pequeno e irrelevante.", "Não definir o orçamento com precisão.", "Não envolver a comunidade local."], 
              correct: 0 },
            { q: "O que são 'Resultados Esperados' num projeto de EA e como se diferenciam das 'Atividades'?", 
              a: ["Resultados são as mudanças e impactos concretos (os 'produtos' do projeto); Atividades são as ações necessárias para alcançá-los (o 'processo').", "Resultados são apenas financeiros; Atividades são sociais.", "Resultados são a parte teórica; Atividades são a parte prática.", "Os Resultados são definidos no fim; as Atividades no início."], 
              correct: 0 },
            { q: "A 'Cartografia Social' (M6.2) é uma metodologia participativa que tem como objetivo:", 
              a: ["Fazer com que a comunidade mapeie e visualize os seus problemas ambientais e recursos no território (ex: áreas poluídas, fontes de água).", "Criar um mapa de todas as casas da aldeia.", "Apenas ensinar geografia básica.", "Desenhar o mapa das estradas principais."], 
              correct: 0 },
            { q: "O que é um 'Role-Playing' (Jogo de Papéis) em EA e qual a sua utilidade?", 
              a: ["Simulação de situações de conflito ou decisão (ex: poluidor vs. ativista) para desenvolver empatia e diferentes perspetivas de solução.", "É apenas uma forma de entretenimento.", "Serve para criticar o governo.", "É um método de avaliação formal."], 
              correct: 0 },
            { q: "Qual o papel do 'Facilitador' (M6.2) numa metodologia participativa?", 
              a: ["Garantir que a discussão flua, que todos participem, e que se chegue a consensos, sem impor a sua própria visão ou solução.", "Falar a maior parte do tempo e dar todas as respostas.", "Apenas anotar o que é dito.", "Julgar se as ideias dos participantes estão certas ou erradas."], 
              correct: 0 },
            { q: "Em que consiste a metodologia de 'Trilha Ecológica Interpretativa' (M6.2)?", 
              a: ["Guiar os participantes por um caminho natural, oferecendo informações sobre as interconexões ecológicas e históricas de cada ponto.", "Apenas caminhar sem destino e sem objetivo.", "Fazer uma competição de velocidade na floresta.", "Medir a distância entre dois rios."], 
              correct: 0 },
            { q: "Qual a diferença entre 'Dados Qualitativos' e 'Dados Quantitativos' recolhidos no diagnóstico?", 
              a: ["Qualitativos são descrições, perceções, sentimentos (ex: entrevistas); Quantitativos são números e estatísticas (ex: toneladas de lixo, percentagens).", "Qualitativos são importantes; Quantitativos não são.", "Qualitativos são caros; Quantitativos são gratuitos.", "Qualitativos só são usados em Luanda; Quantitativos no interior."], 
              correct: 0 },
            { q: "O que se entende por 'Árvore de Problemas' (M6.3) como ferramenta de diagnóstico?", 
              a: ["Uma representação visual que desmembra um problema central em suas causas (raízes) e seus efeitos (copa).", "Um mapa das árvores de uma floresta.", "Um gráfico que mostra a evolução da poluição.", "Uma lista de todos os problemas da comunidade."], 
              correct: 0 },
            { q: "Na recolha de dados, o que é um 'Grupo Focal' (M6.3) e qual a sua vantagem?", 
              a: ["Uma reunião com um pequeno grupo de pessoas que partilham características (ex: jovens, mulheres) para discutir um tópico em profundidade, obtendo dados qualitativos ricos.", "Uma manifestação política.", "Uma assembleia geral aberta a todos.", "Uma apresentação formal de resultados."], 
              correct: 0 },
            { q: "Qual é o principal desafio ético (M6.3) na recolha de dados numa comunidade rural em Angola?", 
              a: ["Garantir o 'Consentimento Informado', a confidencialidade e a não exploração do conhecimento e da situação dos participantes.", "Garantir que todos os participantes sejam pagos.", "Garantir que a recolha de dados seja rápida.", "Garantir que o pesquisador seja de fora do país."], 
              correct: 0 },
            { q: "A produção de 'Manuais Contextualizados' (M6.4) em EA exige que o conteúdo seja:", 
              a: ["Ajustado à realidade cultural, linguística (incluindo línguas nacionais, se relevante) e aos ecossistemas específicos de Angola.", "Escrito apenas em Inglês ou Francês.", "Uma cópia exata de manuais estrangeiros.", "Totalmente focado em problemas de outros continentes."], 
              correct: 0 },
            { q: "O que é uma 'Kit de Sensibilização' (M6.4) e quais elementos deve incluir?", 
              a: ["Um conjunto de materiais práticos (ex: folhetos, cartazes, autocolantes, amostras) para uso em eventos e campanhas.", "Apenas o orçamento do projeto.", "A lista de presença dos participantes.", "O contrato de trabalho dos educadores."], 
              correct: 0 },
            { q: "Ao criar um 'material didático', deve-se priorizar o uso de que tipo de linguagem?", 
              a: ["Linguagem simples, clara, motivadora e apropriada ao nível de literacia e idade do público-alvo.", "Linguagem técnica e complexa.", "Linguagem académica e formal.", "Linguagem que só os especialistas entendem."], 
              correct: 0 },
            { q: "O 'Levantamento de Recursos' (M6.5) num projeto de EA não deve focar-se apenas no dinheiro. O que mais deve ser levantado?", 
              a: ["Recursos Humanos (voluntários, especialistas), Materiais (equipamento, transportes) e Institucionais (apoio, redes).", "Apenas a lista de doadores.", "Apenas o número de habitantes da cidade.", "Apenas os nomes dos concorrentes."], 
              correct: 0 },
            { q: "Qual é a principal responsabilidade do **Gestor de Logística** (M6.5) num projeto de limpeza comunitária?", 
              a: ["Assegurar o transporte, o armazenamento seguro de materiais (sacos, luvas) e a ligação com as autoridades para o destino final dos resíduos.", "Falar com a imprensa sobre o projeto.", "Fazer a avaliação final do impacto.", "Elaborar o currículo dos workshops."], 
              correct: 0 },
            { q: "Qual é o objetivo de ter um 'Memorando de Entendimento (MOU)' (M6.5) com um parceiro?", 
              a: ["Formalizar a parceria, definir claramente as responsabilidades, os recursos e as expectativas de cada parte.", "Apenas para trocar contactos.", "É um documento informal sem valor legal.", "Serve apenas para pedir dinheiro."], 
              correct: 0 },
            { q: "Qual a diferença entre 'Avaliação Intercalar' e 'Avaliação Final' de um projeto?", 
              a: ["Intercalar é feita no meio do projeto para corrigir o curso; Final é feita no fim para medir o impacto e o alcance dos objetivos.", "Intercalar foca-se apenas no dinheiro; Final foca-se nas pessoas.", "Intercalar é obrigatória; Final é opcional.", "Não há diferença; o momento é o mesmo."], 
              correct: 0 },
            { q: "O que é um 'Indicador de Impacto' (M6.6) num projeto de EA sobre água?", 
              a: ["Um indicador que mede a mudança a longo prazo (ex: Redução de 30% nas doenças hídricas na comunidade após 1 ano).", "O número de vezes que se falou sobre o projeto.", "O número de litros de água gastos.", "A lista de pessoas que beberam água."], 
              correct: 0 },
            { q: "A 'Sustentabilidade Financeira' de um projeto de EA (M6.6) refere-se a quê?", 
              a: ["A capacidade do projeto continuar as suas atividades e impactos sem depender exclusivamente do financiamento inicial após a conclusão.", "À falta total de financiamento.", "À capacidade de gastar o dinheiro o mais rápido possível.", "À obrigatoriedade de ser lucrativo."], 
              correct: 0 },
            { q: "Qual o principal aspeto educativo (para além da limpeza) de uma ação de 'Coleta Seletiva' (M6.7) numa escola?", 
              a: ["Demonstrar na prática a importância da separação na fonte, e desmistificar o processo de reciclagem, tornando-o um hábito.", "Apenas manter o pátio limpo.", "Criar mais lixeiras para misturar o lixo.", "Dar trabalho aos zeladores da escola."], 
              correct: 0 },
            { q: "Como a EA deve abordar a 'Manutenção' de árvores plantadas (M6.7)?", 
              a: ["Envolver a comunidade e os alunos na responsabilidade do cuidado a longo prazo (rega, poda, proteção) para garantir a sobrevivência.", "Plantando e abandonando.", "Contratando apenas especialistas estrangeiros para cuidar delas.", "Garantindo que a manutenção é feita por ninguém."], 
              correct: 0 },
            { q: "Qual a importância de um 'Estudo de Viabilidade' (M6.7) antes de iniciar um projeto de compostagem comunitária?", 
              a: ["Avaliar se a quantidade de resíduos orgânicos, o espaço disponível e a aceitação da comunidade justificam o esforço e garantem o sucesso.", "Apenas para saber quem mora perto.", "Para determinar a cor do contentor de compostagem.", "Para proibir a atividade."], 
              correct: 0 },
            { q: "O que é o conceito de 'Empoderamento Comunitário' (M6.8) na EA?", 
              a: ["Ajudar os membros da comunidade a adquirirem as habilidades e a confiança necessárias para tomarem as suas próprias decisões ambientais e liderarem a ação.", "Dar poder total a uma única pessoa da comunidade.", "Apenas fornecer dinheiro para a comunidade.", "Tirar toda a responsabilidade dos moradores."], 
              correct: 0 },
            { q: "Qual o papel da 'Transparência' (M6.8) na gestão de um projeto de EA?", 
              a: ["Divulgar de forma clara o uso dos fundos, os resultados alcançados e os desafios, construindo confiança com a comunidade e os parceiros.", "Esconder a informação financeira dos parceiros.", "Divulgar apenas os resultados positivos.", "Comunicar apenas verbalmente sem registo."], 
              correct: 0 },
            { q: "A 'Análise de Stakeholders' (M6.5) é crucial no planeamento para:", 
              a: ["Identificar quem será afetado pelo projeto (positiva ou negativamente) e quem deve ser envolvido no processo de decisão e parceria.", "Apenas identificar os concorrentes do projeto.", "Apenas identificar quem pode doar dinheiro.", "Apenas identificar quem vai trabalhar no projeto."], 
              correct: 0 },
            { q: "A 'Teoria da Mudança' (M6.1) em EA ajuda o planeador a entender qual relação?", 
              a: ["A relação lógica e causal entre as atividades, os resultados imediatos e o impacto final e a longo prazo que se deseja alcançar.", "A relação entre a idade do educador e o sucesso.", "A relação entre o custo e o tempo.", "A relação entre a poluição e a geografia."], 
              correct: 0 },
            { q: "Qual a importância do 'Feedback' (M6.6) contínuo dos participantes no monitoramento?", 
              a: ["Permite ajustar as metodologias e os materiais em tempo real, garantindo que o projeto atende às necessidades e é bem recebido.", "Serve apenas para dar elogios à equipa.", "Não tem impacto; o plano é fixo.", "É usado apenas para criticar os erros."], 
              correct: 0 },
            { q: "Um 'Estudo de Caso' local, como a seca no Cunene, é uma metodologia eficaz em EA porque...", 
              a: ["Contextualiza o problema, permitindo a análise aprofundada das causas e a cocriação de soluções relevantes para a realidade angolana.", "Apenas para ensinar história regional.", "Apenas para fazer um relatório para a UNESCO.", "Não permite a participação da comunidade."], 
              correct: 0 },
        ],
  },

        };


        let currentView = 'modules';
        let selectedModule = null;
        let selectedDifficulty = null;
        let selectedRound = null;
        let currentQuestionIndex = 0;
        let score = 0;
        let userScores = [];
        let shuffledQuestions = [];

        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        function shuffleAnswers(question) {
            const answers = [...question.a];
            const correctAnswer = answers[question.correct];
            
            const shuffled = shuffleArray(answers);
            
            const newCorrectIndex = shuffled.indexOf(correctAnswer);
            
            return {
                q: question.q,
                a: shuffled,
                correct: newCorrectIndex
            };
        }

        function loadScores() {
            const saved = localStorage.getItem('ecoquiz_scores');
            if (saved) {
                userScores = JSON.parse(saved);
            }
        }

        function saveScore(moduleId, difficulty, round, score, totalQuestions) {
            const scoreData = {
                module_id: moduleId,
                difficulty: difficulty,
                round: round,
                score: score,
                total_questions: totalQuestions,
                completed_at: new Date().toISOString()
            };
            
            userScores.push(scoreData);
            localStorage.setItem('ecoquiz_scores', JSON.stringify(userScores));
        }

        function renderModules() {
            currentView = 'modules';
            
            document.getElementById('app').innerHTML = `
                <div class="jogar-header">
                    <div class="jogar-icon">🎮</div>
                    <h1 class="jogar-title">Jogar</h1>
                    <p class="jogar-subtitle">Escolhe um módulo e testa os teus conhecimentos ambientais!</p>
                </div>
                <div class="cards-grid" id="modules-grid"></div>
            `;

        const grid = document.getElementById('modules-grid');
        modules.forEach(module => {
            const card = document.createElement('div');
            card.className = 'card module-card';
            
            card.innerHTML = `
                <span class="module-emoji emoji">${module.emoji}</span>
                <div class="module-title card-title">${module.title}</div>
            `;
            
            if (module.id === 8) {
                card.onclick = () => window.location.href = 'forca.html';
            } else {
                card.onclick = () => selectModule(module.id);
            }
            
            grid.appendChild(card);
        });
        }

        function selectModule(moduleId) {
            selectedModule = moduleId;
            currentView = 'difficulty';
            renderDifficultySelector();
        }

        function renderDifficultySelector() {
            currentView = 'difficulty';
            
            document.getElementById('app').innerHTML = `
                <div class="content-box">
                 <button class="back-btn" onclick="backToModules()">Voltar</button>
                <h2 class="content-title">Escolha a Dificuldade</h2>
                <div class="difficulty-buttons">
                    <button class="difficulty-btn easy" onclick="selectDifficulty('easy')">
                        😊 Fácil
                    </button>
                    <button class="difficulty-btn medium" onclick="selectDifficulty('medium')">
                        😐 Intermédio
                    </button>
                    <button class="difficulty-btn hard" onclick="selectDifficulty('hard')">
                        😤 Difícil
                    </button>
                </div>
                </div>
            `;
        }

        function selectDifficulty(difficulty) {
            selectedDifficulty = difficulty;
            currentView = 'rounds';
            renderRounds();
        }

        function getRoundStatus(round) {
            const roundScores = userScores.filter(s => 
                s.module_id === `module_${selectedModule}` && 
                s.difficulty === selectedDifficulty && 
                s.round === round
            );

            if (roundScores.length > 0) {
                const bestScore = Math.max(...roundScores.map(s => s.score));
                return {
                    status: 'completed',
                    icon: '✅',
                    label: 'Completa',
                    score: bestScore
                };
            }

            if (round === 1) {
                return {
                    status: 'active',
                    icon: '🎯',
                    label: 'Disponível',
                    score: null
                };
            }

            const previousRoundScores = userScores.filter(s => 
                s.module_id === `module_${selectedModule}` && 
                s.difficulty === selectedDifficulty && 
                s.round === round - 1
            );

            if (previousRoundScores.length > 0) {
                return {
                    status: 'active',
                    icon: '🎯',
                    label: 'Disponível',
                    score: null
                };
            }

            return {
                status: 'locked',
                icon: '🔒',
                label: 'Bloqueada',
                score: null
            };
        }

        function renderRounds() {
            currentView = 'rounds';

            const difficultyNames = {
                easy: 'Fácil',
                medium: 'Intermédio',
                hard: 'Difícil'
            };

            document.getElementById('app').innerHTML = `
            <div class="rounds-container">
                <button class="back-btn" onclick="backToDifficulty()">Voltar</button>
                <h2 class="content-title">Rodadas - Nível ${difficultyNames[selectedDifficulty]}</h2>
                <p class="section-subtitle">Complete cada rodada para desbloquear a próxima</p>
                <div class="rounds-grid" id="rounds-grid"></div>
            </div>
            `;

            const grid = document.getElementById('rounds-grid');

            for (let i = 1; i <= TOTAL_ROUNDS; i++) {
                const roundInfo = getRoundStatus(i);
                const card = document.createElement('div');
                card.className = `round-card ${roundInfo.status}`;
                
                let scoreDisplay = '';
                if (roundInfo.score !== null) {
                    scoreDisplay = `<div class="round-score">${roundInfo.score}/${QUESTIONS_PER_ROUND}</div>`;
                }

                card.innerHTML = `
                    <div class="round-icon">${roundInfo.icon}</div>
                    <div class="round-number">Rodada ${i}</div>
                    <div class="round-status">${roundInfo.label}</div>
                    ${scoreDisplay}
                `;

                if (roundInfo.status !== 'locked') {
                    card.onclick = () => startRound(i);
                }

                grid.appendChild(card);
            }
        }

        function startRound(round) {
            selectedRound = round;
            currentQuestionIndex = 0;
            score = 0;
            currentView = 'quiz';
            
            const originalQuestions = getQuestionsForRound();
            shuffledQuestions = originalQuestions.map(q => shuffleAnswers(q));
            
            renderQuiz();
        }

        function backToModules() {
            renderModules();
        }

        function backToDifficulty() {
            renderDifficultySelector();
        }

        function backToRounds() {
            renderRounds();
        }

        function getQuestionsForRound() {
            const allQuestions = questionsBank[selectedModule][selectedDifficulty];
            const startIndex = (selectedRound - 1) * QUESTIONS_PER_ROUND;
            return allQuestions.slice(startIndex, startIndex + QUESTIONS_PER_ROUND);
        }

    function renderQuiz() {
        currentView = 'quiz';
        const quizQuestions = getQuestionsForRound();
            const currentQuestion = shuffledQuestions[currentQuestionIndex];

        document.getElementById('app').innerHTML = `
            <div class="quiz-container">
                <button class="back-btn" onclick="backToRounds()">Voltar</button>
                <div class="question-number">Rodada ${selectedRound} - Pergunta ${currentQuestionIndex + 1} de ${quizQuestions.length}</div>
                <h2 class="question-text">${currentQuestion.q}</h2>
                <div class="answers-grid" id="answers-grid"></div>
                <button class="next-btn" id="next-btn" onclick="nextQuestion()" disabled>Próxima</button>
            </div>
        `;

            const answersGrid = document.getElementById('answers-grid');
            currentQuestion.a.forEach((answer, index) => {
                const btn = document.createElement('button');
                btn.className = 'answer-btn';
                btn.textContent = answer;
                btn.onclick = () => selectAnswer(index);
                answersGrid.appendChild(btn);
            });
        }

        function selectAnswer(selectedIndex) {
            const currentQuestion = shuffledQuestions[currentQuestionIndex];
            const buttons = document.querySelectorAll('.answer-btn');
            
            buttons.forEach((btn, index) => {
                btn.disabled = true;
                if (index === currentQuestion.correct) {
                    btn.classList.add('correct');
                }
                if (index === selectedIndex && index !== currentQuestion.correct) {
                    btn.classList.add('incorrect');
                }
            });

            if (selectedIndex === currentQuestion.correct) {
                score++;
            }

            document.getElementById('next-btn').disabled = false;
        }

        function nextQuestion() {
            currentQuestionIndex++;

            if (currentQuestionIndex < shuffledQuestions.length) {
                renderQuiz();
            } else {
                finishQuiz();
            }
        }

        function finishQuiz() {
            const totalQuestions = shuffledQuestions.length;

            saveScore(`module_${selectedModule}`, selectedDifficulty, selectedRound, score, totalQuestions);

            currentView = 'results';
            renderResults();
        }

        function renderResults() {
            currentView = 'results';
            const totalQuestions = QUESTIONS_PER_ROUND;
            const percentage = Math.round((score / totalQuestions) * 100);

            let emoji = '🎉';
            let message = 'Excelente trabalho!';
            if (percentage < 50) {
                emoji = '📚';
                message = 'Continue a estudar!';
            } else if (percentage < 80) {
                emoji = '👍';
                message = 'Bom trabalho!';
            }

            const isLastRound = selectedRound === TOTAL_ROUNDS;
            const nextRoundBtn = !isLastRound ? 
                `<button class="action-btn primary-btn" onclick="startRound(${selectedRound + 1})">Próxima Rodada</button>` : '';

            document.getElementById('app').innerHTML = `
                <div class="results-container">
                    <div class="results-emoji">${emoji}</div>
                    <h2 class="results-title">Rodada ${selectedRound} Concluída!</h2>
                    <div class="score-display">${score}/${totalQuestions}</div>
                    <p class="results-message">${message}<br>Pontuação: ${percentage}%</p>
                    <div class="action-buttons">
                        ${nextRoundBtn}
                        <button class="action-btn secondary-btn" onclick="backToRounds()">Ver Rodadas</button>
                        <button class="action-btn secondary-btn" onclick="backToModules()">Módulos</button>
                    </div>
                </div>
            `;
        }

        window.selectModule = selectModule;
        window.selectDifficulty = selectDifficulty;
        window.startRound = startRound;
        window.backToModules = backToModules;
        window.backToDifficulty = backToDifficulty;
        window.backToRounds = backToRounds;
        window.selectAnswer = selectAnswer;
        window.nextQuestion = nextQuestion;

        loadScores();
        renderModules();
