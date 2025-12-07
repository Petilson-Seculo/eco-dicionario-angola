/* ======================================================
   CONFIGURAÇÃO DA BASE DE DADOS OFFLINE (PWA READY)
====================================================== */

// URL do JSON hospedado no Netlify/Vercel
const DB_URL = "https://ecoquiz-angola.netlify.app/eco-dicionario.json";

// Chaves usadas no LocalStorage
const DB_KEY = "ecoDicionarioDB";
const VERSION_KEY = "ecoDBVersion";

// Variáveis globais
let currentTerms = [];
let currentVersion = 0;

// Elementos do DOM
const list = document.getElementById("dicList");
const lettersContainer = document.querySelector(".letters");
const searchInput = document.getElementById("searchInput");

/* ======================================================
   FUNÇÕES DE CACHE
====================================================== */

function loadFromCache() {
    const terms = localStorage.getItem(DB_KEY);
    const version = localStorage.getItem(VERSION_KEY);

    return {
        terms: terms ? JSON.parse(terms) : null,
        version: version ? Number(version) : 0
    };
}

function saveToCache(terms, version) {
    localStorage.setItem(DB_KEY, JSON.stringify(terms));
    localStorage.setItem(VERSION_KEY, version);
    console.log("💾 Cache atualizado! Versão:", version);
}

/* ======================================================
   FUNÇÃO PRINCIPAL — BUSCAR E RENDERIZAR
====================================================== */

async function fetchAndRenderTerms(forceUpdate = false) {
    const cache = loadFromCache();

    // 1️⃣ Se temos cache e não é atualização forçada → usa offline
    if (cache.terms && !forceUpdate) {
        currentTerms = cache.terms;
        currentVersion = cache.version;

        renderList("", "all");

        // Verificar atualizações em background
        if (navigator.onLine) checkServerUpdate();

        return;
    }

    // 2️⃣ Tentar buscar do servidor
    try {
        const response = await fetch(DB_URL + "?v=" + Date.now());
        const json = await response.json();

        currentTerms = json.ecoTerms;
        currentVersion = json.version || 0;

        saveToCache(currentTerms, currentVersion);

        renderList("", "all");

        if (forceUpdate) alert("Base de dados atualizada com sucesso!");

    } catch (error) {
        console.error("❌ Erro ao baixar base:", error);

        // 3️⃣ Falhou → tentar usar cache
        if (cache.terms) {
            currentTerms = cache.terms;
            renderList("", "all");
            alert("Sem internet — usando versão offline.");
        } else {
            list.innerHTML = `
            <div class="term">
                <div class="term-title">Erro de conexão</div>
                <div class="term-desc">Não foi possível carregar o dicionário. Verifique a internet.</div>
            </div>`;
        }
    }
}

/* ======================================================
   VERIFICAÇÃO AUTOMÁTICA DE NOVA VERSÃO
====================================================== */

async function checkServerUpdate() {
    try {
        const response = await fetch(DB_URL + "?check=" + Date.now());
        const json = await response.json();

        const serverVersion = json.version || 0;

        if (serverVersion > currentVersion) {
            console.log("🔥 Nova versão disponível!");
            saveToCache(json.ecoTerms, serverVersion);

            currentTerms = json.ecoTerms;
            currentVersion = serverVersion;

            alert("Uma nova versão do Eco Dicionário está disponível!");
        }

    } catch (e) {
        console.log("Não foi possível verificar atualização.");
    }
}

/* ======================================================
   RENDERIZAÇÃO DA LISTA
====================================================== */

function renderList(searchText, filterLetter) {
    const text = (searchText || "").toLowerCase();
    const letter = (filterLetter || "all").toUpperCase();

    list.innerHTML = "";

    currentTerms.forEach(item => {
        const starts = item.t[0].toUpperCase();

        if (letter !== "ALL" && starts !== letter) return;
        if (!item.t.toLowerCase().includes(text)) return;

        const div = document.createElement("div");
        div.className = "term";

        const highlighted = item.t.replace(
            new RegExp(text, "gi"),
            match => `<span class="highlight">${match}</span>`
        );

        div.innerHTML = `
            <div class="term-title">${highlighted}</div>
            <div class="term-desc">${item.d}</div>
        `;

        list.appendChild(div);
    });

    if (!list.hasChildNodes()) {
        list.innerHTML = `
        <div class="term">
            <div class="term-title">Nenhum termo encontrado</div>
            <div class="term-desc">Tenta outra palavra ou escolhe outra letra.</div>
        </div>`;
    }
}

/* ======================================================
   PESQUISA EM TEMPO REAL (DEBOUNCE)
====================================================== */

let debounceTimer = null;

searchInput.addEventListener("input", () => {
    if (debounceTimer) clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        const active = document.querySelector(".letter.active");
        const letter = active ? active.dataset.letter : "all";

        renderList(searchInput.value, letter);
    }, 150);
});

/* ======================================================
   FILTRO POR LETRAS (A–Z)
====================================================== */

document.querySelectorAll(".letter").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".letter")
            .forEach(l => l.classList.remove("active"));

        btn.classList.add("active");

        renderList(searchInput.value, btn.dataset.letter);
    });
});

/* ======================================================
   ATUALIZAÇÃO MANUAL (Opcional)
====================================================== */

function manualUpdate() {
    fetchAndRenderTerms(true);
}

/* ======================================================
   INICIALIZAÇÃO GERAL
====================================================== */

document.addEventListener("DOMContentLoaded", () => {
    fetchAndRenderTerms();
});
