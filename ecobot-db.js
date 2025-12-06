
/* --- Seletores principais --- */
const toggle = document.getElementById("chatToggle");
const chat = document.getElementById("chatWindow");
const close = document.getElementById("closeChat");
const send = document.getElementById("sendMessage");
const input = document.getElementById("userMessage");
const msgs = document.getElementById("chatMessages");
const clear = document.getElementById("clearChat");

/* --- Abrir / Fechar --- */
toggle.onclick = () => {
    chat.style.display = (chat.style.display === "flex") ? "none" : "flex";
};
close.onclick = () => chat.style.display = "none";

/* --- Limpar conversa --- */
clear.onclick = () => {
    if (confirm("Tens a certeza que queres limpar a conversa?")) {
        msgs.innerHTML = `
            <div class="bubble botMsg">
                <b>EcoBot:</b> Conversa limpa com sucesso 🧹✨<br>
                Posso ajudar-te com outra dúvida ambiental? 🌿
            </div>`;
    }
};

/* --- Função para adicionar mensagens --- */
function append(who, text, cls) {
    const div = document.createElement("div");
    div.className = `bubble ${cls}`;
    div.innerHTML = `<b>${who}:</b> ${text}`;
    msgs.appendChild(div);
    msgs.scrollTo({ top: msgs.scrollHeight, behavior: "smooth" });
}

/* --- Base de conhecimento local (mantida exatamente como pediste) --- */
const localDatabase = [
  {
        keywords: ["o que é a sus-tech", "sus tech", "sobre a sus-tech", "sus-tech"],
    answer: "A *Sus-TECH* é uma start-up verde que actua na intersecção entre Engenharia, Saúde Ocupacional, Sustentabilidade e Tecnologia, oferecendo soluções inovadoras para empresas e instituições que buscam alinhar crescimento económico, responsabilidade socioambiental e eficiência operacional."
  },
  {
    keywords: ["quem criou", "fundador", "criou a sus-tech", "quem fez a sus-tech"],
    answer: "A *Sus-TECH* foi fundada por *Petilson Seculo*, engenheiro ambiental e entusiasta de tecnologia sustentável, com experiência em segurança ocupacional e inovação tecnológica."
  },
  {
    keywords: ["missão", "objetivo", "proposito da sus-tech"],
    answer: "🎯 *Missão da Sus-TECH:* Promover soluções sustentáveis e inteligentes que integrem engenharia, meio ambiente, saúde ocupacional e tecnologia, assegurando excelência técnica, inovação contínua e impacto positivo."
  },
  {
    keywords: ["visão", "meta", "sonho da sus-tech"],
    answer: "🌍 *Visão da Sus-TECH:* Ser reconhecida como referência nacional e internacional em engenharia sustentável e inovação tecnológica, contribuindo para um futuro mais seguro, eficiente e ambientalmente responsável."
  },
  {
    keywords: ["valores", "princípios", "ética", "sustentabilidade"],
    answer: "💚 *Valores da Sus-TECH:* Sustentabilidade, Inovação, Ética, Transparência, Excelência Técnica, Valorização Humana e Impacto Social Positivo."
  },
  {
    keywords: ["contacto", "telefone", "email", "contato", "contactos"],
    answer: "📩 Podes contactar a *Sus-TECH* pelo e-mail *sus-tech@hotmail.com* ou pelo telefone *+244 925 430 567*."
  },

  // 🟢 Sustentabilidade e meio ambiente
  {
    keywords: ["recicla", "reciclagem", "reciclar", "lixo"],
    answer: "♻️ A reciclagem transforma resíduos em novos produtos, reduzindo a poluição e economizando energia. Separa o lixo seco (papel, vidro, plástico) do orgânico!"
  },
  {
    keywords: ["água", "rios", "lagos", "chuva", "agua"],
    answer: "💧 A água é um recurso essencial. Economiza fechando a torneira e reutilizando a água da chuva para regar plantas ou lavar pisos."
  },
  {
    keywords: ["energia", "solar", "elétrica", "eólica"],
    answer: "🔆 A energia solar e eólica são limpas e renováveis. Instalar painéis solares é uma ótima forma de proteger o planeta!"
  },
  {
    keywords: ["aquecimento", "clima", "mudanças climáticas", "efeito estufa"],
    answer: "🌡️ O aquecimento global é causado pelo aumento dos gases de efeito estufa. Reduz o consumo de combustíveis fósseis e planta árvores sempre que puder!"
  },
  {
    keywords: ["árvore", "plantar", "floresta", "reflorestamento", "planta"],
    answer: "🌳 Plantar árvores ajuda a purificar o ar, proteger o solo e combater o aquecimento global. Cada árvore conta!"
  },
  {
    keywords: ["poluição", "ar", "solo", "oceano", "mar"],
    answer: "🌍 A poluição afeta o solo, o ar e os mares. Evita o descarte incorreto de lixo e apoia projetos de limpeza ambiental!"
  },

  // 🟡 Educação e consciência ambiental
  {
    keywords: ["educação", "sustentabilidade", "consciência", "meio ambiente"],
    answer: "📚 A educação ambiental é o primeiro passo para a mudança. Compartilha conhecimento e incentiva boas práticas todos os dias!"
  },

  // 🔵 Sobre o EcoQuiz Angola
  {
    keywords: ["ecoquiz", "angola", "jogo", "quiz"],
    answer: "🇦🇴 O *EcoQuiz Angola* é um projeto educativo que promove a consciência ambiental através de jogos e desafios. Aprende brincando sobre sustentabilidade!"
  },
  {
    keywords: ["projeto", "objectivo", "missão ecoquiz"],
    answer: "🎯 O objetivo do *EcoQuiz Angola* é despertar o interesse dos jovens pela proteção ambiental e inspirar atitudes sustentáveis em todo o país."
  },

  // 🟣 Sobre o Criador
  {
    keywords: ["criador", "fundador", "quem criou", "autor"],
    answer: "👨‍💻 O *EcoBot* e o *EcoQuiz Angola* foram idealizados por *Petilson Seculo*, estudante de Engenharia Ambiental, apaixonado por tecnologia e sustentabilidade."
  },
  {
    keywords: ["petilson seculo", "sus-tech", "startup", "petilson"],
    answer: "🚀 *Petilson Seculo* é o fundador da *Sus-TECH*, uma startup que une tecnologia e sustentabilidade. Slogan: “Criando soluções para um Futuro Sustentável”."
  }



];

/* --- Resposta offline --- */
async function getMockResponse(q) {
    await new Promise(r => setTimeout(r, 1600 + Math.random()*600));
    q = q.toLowerCase();
    for (const item of localDatabase) {
        if (item.keywords.some(k => q.includes(k))) return item.answer;
    }
    return "Boa pergunta! 🌍 Queres um exemplo prático relacionado?";
}

/* --- Enviar Mensagem (online + fallback offline) --- */
send.onclick = async () => {
    const text = input.value.trim();
    if (!text) return;

    append("Tu", text, "userMsg");
    input.value = "";

    const thinking = document.createElement("div");
    thinking.className = "bubble botMsg";
    thinking.innerHTML = "<b>EcoBot:</b> 💭 Está a pensar...";
    msgs.appendChild(thinking);
    msgs.scrollTo({ top: msgs.scrollHeight, behavior: "smooth" });

    try {
        const res = await fetch("http://localhost:3000/api/ecobot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: text })
        });
        const data = await res.json();
        thinking.innerHTML = `<b>EcoBot:</b> ${data.reply || "Desculpa 🌿, não consegui responder."}`;
    } catch {
        thinking.innerHTML = `<b>EcoBot:</b> ${await getMockResponse(text)}`;
    }
};