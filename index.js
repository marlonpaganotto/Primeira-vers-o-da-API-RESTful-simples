const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const DATA_FILE = "data.json";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Função para ler os dados do arquivo JSON
const readData = () => JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));

// Função para salvar os dados no arquivo JSON
const saveData = (data) => fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

// Criação do servidor HTTP
const server = http.createServer((req, res) => {
  // Habilitar CORS e cabeçalhos comuns
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Responder rapidamente a requisições OPTIONS
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Servindo o front-end
  if (req.url === "/" && req.method === "GET") {
    const htmlPath = path.join(__dirname, "index.html");
    const htmlContent = fs.readFileSync(htmlPath, "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlContent);
    return;
  }

  // Servindo o script.js e style.css
  if (req.url === "/script.js" && req.method === "GET") {
    const jsPath = path.join(__dirname, "script.js");
    const jsContent = fs.readFileSync(jsPath, "utf-8");
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(jsContent);
    return;
  }

  if (req.url === "/style.css" && req.method === "GET") {
    const cssPath = path.join(__dirname, "style.css");
    const cssContent = fs.readFileSync(cssPath, "utf-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(cssContent);
    return;
  }

  // Rota para listar todas as notas (GET /notas)
  if (req.method === "GET" && req.url === "/notas") {
    const notas = readData();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(notas));
    return;
  }

  // Rota para adicionar uma nova nota (POST /notas)
  if (req.method === "POST" && req.url === "/notas") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const novaNota = JSON.parse(body);
      const notas = readData();
      novaNota.id = notas.length ? notas[notas.length - 1].id + 1 : 1;
      notas.push(novaNota);
      saveData(notas);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Nota adicionada com sucesso!" }));
    });
    return;
  }

  // Rota para deletar uma nota pelo ID (DELETE /notas/:id)
  if (req.method === "DELETE" && req.url.startsWith("/notas/")) {
    const id = parseInt(req.url.split("/")[2]);
    const notas = readData();
    const index = notas.findIndex((nota) => nota.id === id);

    if (index !== -1) {
      notas.splice(index, 1);
      saveData(notas);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Nota deletada com sucesso!" }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Nota não encontrada!" }));
    }
    return;
  }

  // Rota não encontrada
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Rota não encontrada!" }));
});

// Iniciar o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
