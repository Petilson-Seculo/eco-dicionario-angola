const modules = [
        // Módulos principais do quiz e o Jogo da Forca
        { id: 1, title: "Fundamentos da Educação Ambiental", emoji: "📘" },
        { id: 2, title: "Componentes do Meio Ambiente", emoji: "🌍" },
        { id: 3, title: "Problemas Ambientais", emoji: "⚠️" },
        { id: 4, title: "Ecologia e Sustentabilidade", emoji: "🌿" },
        { id: 5, title: "Gestão Ambiental", emoji: "🛠️" },
        { id: 6, title: "Educação Ambiental Prática", emoji: "🌱" },
        { id: 7, title: "Temas Ambientais Avançados", emoji: "🌍" },
        { id: 8, title: "Jogo da Forca", emoji: "🔤" }
    ];

    const TOTAL_ROUNDS = 10;
    const QUESTIONS_PER_ROUND = 3;

    // Banco de Perguntas (Conteúdo do quiz original)
    const questionsBank = {
        1: {
            easy: [
                { q: "O que significa educação ambiental?", a: ["Ensinar sobre o meio ambiente", "Estudar matemática", "Aprender idiomas", "Fazer exercícios"], correct: 0 },
                { q: "Qual é o objetivo da educação ambiental?", a: ["Proteger a natureza", "Ganhar dinheiro", "Construir edifícios", "Vender produtos"], correct: 0 },
                { q: "Quem deve aprender sobre o meio ambiente?", a: ["Todas as pessoas", "Apenas adultos", "Apenas crianças", "Apenas professores"], correct: 0 },
                { q: "A educação ambiental é importante para:", a: ["Cuidar do planeta", "Jogar videogames", "Ver televisão", "Dormir mais"], correct: 0 },
                { q: "Onde podemos aprender educação ambiental?", a: ["Na escola e em casa", "Apenas no cinema", "Só na internet", "Nunca aprendemos"], correct: 0 },
                { q: "O que devemos fazer com o lixo?", a: ["Separar e reciclar", "Jogar na rua", "Queimar tudo", "Esconder"], correct: 0 },
                { q: "As plantas são importantes porque:", a: ["Produzem oxigênio", "Fazem barulho", "Comem animais", "Poluem o ar"], correct: 0 },
                { q: "Poupar água é:", a: ["Muito importante", "Desnecessário", "Impossível", "Proibido"], correct: 0 },
                { q: "O que é consciência ambiental?", a: ["Cuidar da natureza", "Destruir florestas", "Poluir rios", "Desperdicar recursos"], correct: 0 },
                { q: "Reciclar ajuda a:", a: ["Reduzir lixo", "Aumentar poluição", "Gastar mais", "Destruir natureza"], correct: 0 },
                { q: "Animais precisam de:", a: ["Habitat saudável", "Poluição", "Lixo", "Destruição"], correct: 0 },
                { q: "Educação ambiental começa:", a: ["Em qualquer idade", "Aos 50 anos", "Nunca", "Só para adultos"], correct: 0 },
                { q: "Proteger o ambiente é tarefa de:", a: ["Todos nós", "Apenas governo", "Ninguém", "Só cientistas"], correct: 0 },
                { q: "Florestas são importantes para:", a: ["Vida no planeta", "Fazer fogo", "Construir tudo", "Nada"], correct: 0 },
                { q: "Desperdício de recursos:", a: ["Deve ser evitado", "É bom", "É necessário", "Não importa"], correct: 0 },
                { q: "Água limpa é essencial para:", a: ["Saúde e vida", "Poluir", "Desperdicar", "Contaminar"], correct: 0 },
                { q: "Ar puro depende de:", a: ["Menos poluição", "Mais fumaça", "Queimadas", "Fábricas sujas"], correct: 0 },
                { q: "Cuidar da natureza significa:", a: ["Preservar recursos", "Destruir tudo", "Não fazer nada", "Poluir mais"], correct: 0 },
                { q: "Energias limpas são:", a: ["Melhores para ambiente", "Mais poluentes", "Impossíveis", "Caras demais"], correct: 0 },
                { q: "Biodiversidade significa:", a: ["Variedade de vida", "Um animal só", "Extinção", "Poluição"], correct: 0 },
                { q: "Respeitar a natureza é:", a: ["Dever de todos", "Opcional", "Desnecessário", "Impossível"], correct: 0 },
                { q: "Plantar árvores ajuda:", a: ["O meio ambiente", "A poluir", "A destruir", "Nada"], correct: 0 },
                { q: "Lixo no mar prejudica:", a: ["Vida marinha", "Nada", "Ajuda peixes", "É bom"], correct: 0 },
                { q: "Educação ambiental ensina:", a: ["Respeito pela natureza", "Poluir", "Desperdicar", "Destruir"], correct: 0 },
                { q: "Consumo consciente é:", a: ["Comprar o necessário", "Comprar tudo", "Desperdicar", "Gastar sempre"], correct: 0 },
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
                { q: "Dimensão da educação ambiental:", a: ["Social, ecológica e política", "Apenas econômica", "Só tecnológica", "Unicamente científica"], correct: 0 },
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
                { q: "Qual perspectiva enriquece EA?", a: ["Saberes tradicionais", "Apenas ciência ocidental", "Só tecnologia", "Unicamente economia"], correct: 0 },
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
                { q: "Qual epistemologia fundamenta EA holística?", a: ["Pensamento sistêmico", "Reducionismo", "Mecanicismo", "Dualismo"], correct: 0 },
                { q: "Conceito de 'biorregionalismo' propõe:", a: ["Gestão baseada em ecossistemas", "Divisão política tradicional", "Centralização administrativa", "Globalização cultural"], correct: 0 },
                { q: "EA pós-moderna questiona:", a: ["Metanarrativas universais", "Pluralidade de saberes", "Diversidade cultural", "Múltiplas verdades"], correct: 0 },
                { q: "Qual teórico desenvolveu 'ecologia profunda'?", a: ["Arne Naess", "Rachel Carson", "Al Gore", "Vandana Shiva"], correct: 0 },
                { q: "EA decolonial critica:", a: ["Eurocentrismo epistemológico", "Saberes locais", "Conhecimento tradicional", "Pluralismo"], correct: 0 },
                { q: "Qual conceito liga EA e justiça social?", a: ["Racismo ambiental", "Neutralidade política", "Tecnocracia", "Meritocracia"], correct: 0 },
                { q: "Qual metodologia usa narrativas na EA?", a: ["Storytelling ecológico", "Exposição tradicional", "Memorização", "Exercícios repetitivos"], correct: 0 },
                { q: "Conceito de 'commons' se refere a:", a: ["Bens comuns da humanidade", "Propriedade privada", "Mercado livre", "Privatização"], correct: 0 },
                { q: "EA ecofeminista relaciona:", a: ["Dominação de mulheres e natureza", "Apenas questões de gênero", "Só problemas ambientais", "Isolamento de lutas"], correct: 0 },
                { q: "Qual abordagem integra EA e arte?", a: ["Ecopedagogia estética", "Cientificismo puro", "Racionalismo técnico", "Positivismo lógico"], correct: 0 },
                { q: "Conceito de 'dívida ecológica' foi proposto por:", a: ["Movimentos do Sul Global", "Países do Norte", "Corporações", "Bancos mundiais"], correct: 0 },
                { q: "EA antirracista deve:", a: ["Combater injustiça ambiental", "Ser neutra", "Ignorar desigualdades", "Manter privilégios"], correct: 0 },
                { q: "Qual paradigma a EA sistêmica adota?", a: ["Pensamento complexo", "Linear causal", "Reducionista", "Fragmentado"], correct: 0 },
                { q: "EA insurgente propõe:", a: ["Resistência a modelos hegemônicos", "Conformidade", "Adaptação passiva", "Aceitação acrítica"], correct: 0 },
                { q: "Conceito de 'transição ecológica' envolve:", a: ["Mudança civilizatória profunda", "Ajustes superficiais", "Manutenção do sistema", "Crescimento verde"], correct: 0 },
                { q: "Qual epistemologia valoriza EA indígena?", a: ["Cosmologias relacionais", "Dualismo cartesiano", "Antropocentrismo", "Universalismo"], correct: 0 },
                { q: "EA para decrescimento questiona:", a: ["Paradigma do crescimento ilimitado", "Economia estacionária", "Limites planetários", "Suficiência"], correct: 0 },
                { q: "Qual conceito une EA e democracia?", a: ["Cidadania ecológica ativa", "Representação formal", "Voto apenas", "Delegação passiva"], correct: 0 }
            ]
        }
    };

    // Lógica para duplicar perguntas para os módulos 2 a 7
    for (let i = 2; i <= 7; i++) {
        questionsBank[i] = JSON.parse(JSON.stringify(questionsBank[1]));
    }
    // Placeholder para o Jogo da Forca
    questionsBank[8] = { easy: [] };


    let currentView = 'modules';
    let selectedModule = null;
    let selectedDifficulty = null;
    let selectedRound = null;
    let currentQuestionIndex = 0;
    let score = 0;
    let userScores = [];

    // =========================================
    // ===== LÓGICA DE SCORE E LOCAL STORAGE =====
    // =========================================

    function loadScores() {
        const saved = localStorage.getItem('ecoquiz_scores');
        if (saved) {
            userScores = JSON.parse(saved);
        }
    }

    function saveScore(moduleId, difficulty, round, score, totalQuestions) {
        const scoreData = {
            module_id: `module_${moduleId}`,
            difficulty: difficulty,
            round: round,
            score: score,
            total_questions: totalQuestions,
            completed_at: new Date().toISOString()
        };
        
        userScores.push(scoreData);
        localStorage.setItem('ecoquiz_scores', JSON.stringify(userScores));
    }

    // =========================================
    // ===== FUNÇÕES DE NAVEGAÇÃO DA NAVBAR =====
    // =========================================
    
    /**
     * Adiciona o listener de evento para o botão hamburger.
     * Deve ser chamado uma vez após o carregamento do DOM.
     */
    function setupNavbarToggle() {
        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('menu');

        if (hamburger && menu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                menu.classList.toggle('active');
            });

            // Opcional: Fechar o menu ao clicar num link
            const menuLinks = menu.querySelectorAll('a');
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    menu.classList.remove('active');
                });
            });
        }
    }


    // =========================================
    // ===== FUNÇÕES DE RENDERIZAÇÃO DE TELA (AJUSTADAS) =====
    // =========================================

    function renderModules() {
        currentView = 'modules';
        
        // Renderiza apenas o conteúdo de 'jogar' dentro do #app
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
        if (moduleId === 8) return; 

        selectedModule = moduleId;
        currentView = 'difficulty';
        renderDifficultySelector();
    }

    /**
     * RENDERIZAÇÃO AJUSTADA: Botão Voltar está AGORA dentro do .content-box
     */
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
        const moduleIdKey = `module_${selectedModule}`; 
        
        const roundScores = userScores.filter(s => 
            s.module_id === moduleIdKey && 
            s.difficulty === selectedDifficulty && 
            s.round === round
        );

        if (roundScores.length > 0) {
            const bestScore = Math.max(...roundScores.map(s => s.score));
            return { status: 'completed', icon: '✅', label: 'Completa', score: bestScore };
        }

        if (round === 1) {
            return { status: 'active', icon: '🎯', label: 'Disponível', score: null };
        }

        const previousRoundScores = userScores.filter(s => 
            s.module_id === moduleIdKey && 
            s.difficulty === selectedDifficulty && 
            s.round === round - 1
        );

        if (previousRoundScores.length > 0) {
            return { status: 'active', icon: '🎯', label: 'Disponível', score: null };
        }

        return { status: 'locked', icon: '🔒', label: 'Bloqueada', score: null };
    }

    /**
     * RENDERIZAÇÃO AJUSTADA: Botão Voltar está AGORA dentro do .rounds-container
     */
    function renderRounds() {
        currentView = 'rounds';

        const difficultyNames = { easy: 'Fácil', medium: 'Intermédio', hard: 'Difícil' };

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

    /**
     * RENDERIZAÇÃO AJUSTADA: Botão Voltar está AGORA dentro do .quiz-container,
     * antes do conteúdo da pergunta.
     */
    function renderQuiz() {
        currentView = 'quiz';
        const quizQuestions = getQuestionsForRound();
        const currentQuestion = quizQuestions[currentQuestionIndex];

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
        const quizQuestions = getQuestionsForRound();
        const currentQuestion = quizQuestions[currentQuestionIndex];
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
        const quizQuestions = getQuestionsForRound();
        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
            renderQuiz();
        } else {
            finishQuiz();
        }
    }

    function finishQuiz() {
        const quizQuestions = getQuestionsForRound();
        const totalQuestions = quizQuestions.length;

        saveScore(selectedModule, selectedDifficulty, selectedRound, score, totalQuestions);

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

    // =========================================
    // ===== INICIALIZAÇÃO =====
    // =========================================

    // Exportação das funções para uso global (necessário para os botões onclick)
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
    
    // Configura o toggle do menu após o DOM estar pronto
    document.addEventListener('DOMContentLoaded', setupNavbarToggle);
