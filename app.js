$(document).ready(function () {
  // Configuração do autocomplete
  $("#language-input").autocomplete({
    source: dados.map((linguagem) => linguagem.titulo),
  });

  // Pesquisa e exibição de resultados
  $("#search-button").on("click", function () {
    const linguagemSelecionada = $("#language-input").val();
    const resultadoDiv = $("#resultado-pesquisa");

    const linguagem = dados.find(
      (dado) => dado.titulo === linguagemSelecionada
    );

    if (linguagem) {
      resultadoDiv.html(`
        <div class="item-resultado">
          <h2>${linguagem.titulo}</h2>
          <p class="descricao-meta">${linguagem.descricao}</p>
          <p class="descricao-meta">Ano de lançamento: ${linguagem.anoLancamento}</p>
          <p><a href="${linguagem.linkOficial}" target="_blank">Site Oficial</a></p>
          <p><a href="${linguagem.exemploUso}" target="_blank">Exemplo de Uso</a></p>
          <p><a href="${linguagem.roadmap}" target="_blank">RoadMap</a></p>
          
        </div>
      `);
    } else {
      resultadoDiv.html("<p>Selecione uma linguagem válida.</p>");
    }
  });
});
