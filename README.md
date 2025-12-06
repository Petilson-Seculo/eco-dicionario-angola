# eco-dicionario-angola
Eco Dicionário sobre terminologias ambientais. 

O Eco Dicionário é uma ferramenta digital open-source, totalmente estática e acessível offline, criada para disponibilizar terminologias ambientais relevantes para o espaço lusófono — com foco especial em Angola e na sustentabilidade regional.

O objetivo é facilitar a compreensão de conceitos ambientais por estudantes, professores, jornalistas, investigadores e pelo público em geral.

📌 Status do Projeto
Funcionalidade	Estado	Plataforma
Site Estático (Web)	✅ Publicado	Netlify / Vercel (em breve)
Pesquisa e Filtragem (Web)	✅ Completo	—
Base de Dados Offline	🛠️ Em Desenvolvimento	Mobile App / PWA
App Mobile (WebView)	📋 Planeado	Google Play / App Store
✨ Funcionalidades

O Eco Dicionário oferece recursos rápidos, leves e totalmente executados no navegador:

🔍 Pesquisa Dinâmica: Filtragem instantânea de termos enquanto o utilizador digita.

🔠 Filtro por Letra: Navegação rápida de A a Z.

📥 Modo Offline (Offline-First):
Após o primeiro carregamento, toda a base de dados é guardada no LocalStorage, permitindo uso offline.

🔄 Atualização Manual:
Botão dedicado que força o fetch da última versão do data.json hospedado.

🛠️ Tecnologias Utilizadas

HTML5 – Estrutura base

CSS3 – Interface leve e responsiva

JavaScript Puro – Lógica de pesquisa, caching e sincronização offline

JSON – Base de dados (data.json)

O projeto é totalmente estático e não requer backend.

🚀 Como Executar Localmente

Clone o repositório

git clone https://github.com/Petilson-Seculo/eco-dicionario-angola.git


Entre na pasta

cd eco-dicionario


Execute no navegador
Basta abrir o ficheiro:

Eco-dicionario.html


Não é necessário servidor local — funciona diretamente como ficheiro estático.

🌐 Hospedagem e Deploy

Este projeto suporta Deploy Contínuo (CD).

Plataformas recomendadas:

Netlify

Vercel

Processo:
Ao conectar o repositório, qualquer push feito para o branch main atualiza automaticamente a versão publicada.

📱 Roadmap

 Finalizar mecanismo Offline-First com Service Worker (modo PWA completo)

 Gerar pacotes mobile via PWABuilder (.AAB e .IPA)

 Publicar nas lojas Google Play e Apple App Store

 Adicionar página interna "Sobre o Projeto"

 Adicionar favoritos / termos guardados

 Implementar modo escuro (Dark Mode)

🤝 Contribuindo

Contribuições são bem-vindas!
Sinta-se livre para abrir:

Issues 💬

Pull Requests 🔧

Sugestões de novas funcionalidades 🌱

📬 Contato

Petilson Seculo
📧 petilsonseculo8@gmail.com

Projeto iniciado em Dezembro de 2025.
