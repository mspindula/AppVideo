# 🎬 Video App

Aplicação web desenvolvida para praticar a integração entre **Front-end React** e **Back-end Node.js com Express**.

O projeto possui uma API responsável por fornecer uma lista de vídeos e um servidor Express configurado para também disponibilizar a aplicação Front-end em ambiente de produção.

---

## 🚀 Funcionalidades

- 🎥 Listagem de vídeos através de uma API
- 🔌 API REST utilizando Express
- ⚛️ Integração com aplicação React
- 🌐 Servidor Node.js
- 📦 Servir arquivos estáticos do Front-end
- 🔄 Suporte a Single Page Application (SPA)
- 🛣️ Fallback de rotas para o `index.html`
- ⚙️ Separação entre ambiente de desenvolvimento e produção

---

## 🛠️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| **Node.js** | Runtime do Back-end |
| **Express** | Criação do servidor e API |
| **React** | Desenvolvimento do Front-end |
| **JavaScript** | Linguagem principal |
| **Path** | Manipulação de caminhos de arquivos |
| **REST API** | Comunicação entre Front-end e Back-end |

---

## 🧠 Arquitetura

O funcionamento básico da aplicação:

| Etapa | Processo | Descrição |
|---|---|---|
| **1** | 👤 Usuário | Acessa a aplicação através do navegador |
| **2** | ⚛️ React | Renderiza a interface do usuário |
| **3** | 🔌 API | React solicita os vídeos através de `/api/videos` |
| **4** | 🟢 Express | Recebe a requisição e processa a rota |
| **5** | 🎬 Dados | O servidor retorna os IDs dos vídeos |
| **6** | 🌐 Produção | Express também disponibiliza os arquivos do Front-end |

---

## 📡 API

### `GET /api/videos`

Retorna a lista de vídeos disponíveis.

### Exemplo de resposta

.JSON
[
  "26Tsb_l36I4",
  "xK30Iabee_o",
  "0caNFGsKoKw",
  "tLu5G9VjCyo",
  "lpaYqRpBaUU"
]
