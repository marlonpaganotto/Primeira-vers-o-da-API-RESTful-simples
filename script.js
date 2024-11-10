const API_URL = 'http://localhost:3000/notas';

// Seleciona elementos do DOM
const notaForm = document.getElementById('nota-form');
const notaTexto = document.getElementById('nota-texto');
const notasLista = document.getElementById('notas-lista');

// Função para listar todas as notas
const listarNotas = async () => {
  const response = await fetch(API_URL);
  const notas = await response.json();
  notasLista.innerHTML = '';

  notas.forEach((nota) => {
    const li = document.createElement('li');
    li.textContent = nota.texto;
    
    // Botão para deletar a nota
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Deletar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => deletarNota(nota.id);

    li.appendChild(deleteBtn);
    notasLista.appendChild(li);
  });
};

// Função para adicionar uma nova nota
const adicionarNota = async (texto) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ texto }),
  });
  listarNotas();
  notaTexto.value = '';
};

// Função para deletar uma nota
const deletarNota = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  listarNotas();
};

// Evento de envio do formulário
notaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = notaTexto.value;
  if (texto) {
    adicionarNota(texto);
  }
});


listarNotas();
