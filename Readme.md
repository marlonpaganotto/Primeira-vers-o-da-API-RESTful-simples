# 📚 API RESTful Simples com Node.js

Este é um projeto simples desenvolvido em Node.js que demonstra a criação de uma **API RESTful** e um **front-end básico** para interagir com as funcionalidades da API. O objetivo deste projeto é mostrar como funciona o Node.js e permitir que qualquer pessoa teste a aplicação facilmente.

## 🚀 Funcionalidades

- **Listar Notas:** A aplicação permite listar todas as notas registradas.
- **Adicionar Nota:** Permite adicionar uma nova nota.
- **Deletar Nota:** Permite deletar uma nota pelo ID.
- **Interface Simples:** Front-end básico em HTML, CSS e JavaScript para facilitar a interação com a API.

## 🛠️ Tecnologias Utilizadas

- **Node.js:** Back-end da aplicação.
- **Módulo HTTP:** Criação do servidor.
- **Módulo FS:** Manipulação de arquivos para armazenar as notas em um arquivo JSON.
- **HTML/CSS/JavaScript:** Interface simples para o usuário.

## 📂 Estrutura do Projeto

```
projeto/
├── index.js        # Arquivo principal do servidor
├── data.json       # Arquivo para armazenar as notas
├── index.html      # Página HTML para o front-end
├── style.css       # Estilo da página
└── script.js       # Lógica do front-end
```

## 📝 Pré-requisitos

- **Node.js** instalado (versão 14 ou superior).

## 📦 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Inicialize o projeto Node.js:**
   ```bash
   npm init -y
   ```

3. **Crie o arquivo `data.json`:**
   - Crie um arquivo `data.json` na raiz do projeto e adicione `[]` como conteúdo inicial:
     ```json
     []
     ```

## ▶️ Como Rodar o Projeto

1. **Inicie o servidor Node.js:**
   ```bash
   node index.js
   ```

2. **Acesse a aplicação no navegador:**
   - Abra o navegador e acesse: [http://localhost:3000](http://localhost:3000)

## 🔍 Como Usar

- **Adicionar Nota:** Digite uma nova nota no campo de texto e clique em "Adicionar Nota".
- **Listar Notas:** As notas são exibidas automaticamente na página.
- **Deletar Nota:** Clique no botão "Deletar" ao lado da nota para removê-la.

## 🌐 API Endpoints

| Método | Endpoint       | Descrição                   |
|--------|----------------|-----------------------------|
| GET    | `/notas`       | Retorna todas as notas      |
| POST   | `/notas`       | Adiciona uma nova nota      |
| DELETE | `/notas/:id`   | Deleta uma nota pelo ID     |

### 📋 Exemplo de Requisição POST

```json
{
  "texto": "Minha primeira nota"
}
```

### 📋 Exemplo de Resposta GET

```json
[
  {
    "id": 1,
    "texto": "Minha primeira nota"
  }
]
```

## 🛠️ Problemas Conhecidos

- O arquivo `data.json` armazena as notas em formato texto, o que não é ideal para grandes volumes de dados. Para projetos maiores, considere usar um banco de dados.

## 📚 Recursos Adicionais

- [Documentação Node.js](https://nodejs.org/en/docs/)
- [Guia para APIs RESTful](https://restfulapi.net/)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

---





