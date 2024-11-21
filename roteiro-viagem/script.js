document.getElementById("buscar").addEventListener("click", () => {
  const cidade = document.getElementById("cidade").value.trim();
  const preferencia = document.getElementById("preferencias").value;
  const resultados = document.getElementById("resultados");

  resultados.innerHTML = "";

  if (!cidade || !preferencia) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const sugestoes = {
    "Museus": [
      { nome: "Museu Histórico", cidade: "São Paulo" },
      { nome: "Museu de Arte Moderna", cidade: "Rio de Janeiro" }
    ],
    "Galerias de Arte": [
      { nome: "Galeria Nacional", cidade: "São Paulo" },
      { nome: "Galeria de Esculturas", cidade: "Belo Horizonte" }
    ],
    "Eventos Locais": [
      { nome: "Feira Cultural", cidade: "Curitiba" },
      { nome: "Festival de Música", cidade: "Salvador" }
    ],
    "Parques": [
      { nome: "Parque Barigui", cidade: "Curitiba" },
      { nome: "Parque Passaúna", cidade: "Curitiba" },
      { nome: "Parque Tanguá", cidade: "Curitiba" }
    ]
  };

  const recomendacoes = sugestoes[preferencia].filter(item => 
    item.cidade.toLowerCase() === cidade.toLowerCase()
  );

  if (recomendacoes.length === 0) {
    resultados.innerHTML = `<li>Nenhuma recomendação encontrada para "${preferencia}" em "${cidade}".</li>`;
  } else {
    recomendacoes.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.nome} - ${item.cidade}`;
      resultados.appendChild(li);
    });
  }
});


