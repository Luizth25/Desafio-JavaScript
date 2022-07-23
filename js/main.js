// Botões de navegação da pagina HOME
export function navegarNomeID() {
  window.location.href = "busca-nome-ID.html";
}

export function navegarTipo() {
  window.location.href = "busca-tipo.html";
}

//Botão que faz a função de voltar para HOME
export function navegacaoHome() {
  window.location.href = "home.html";
}

//Função que faz a busca dos pokemons
export async function buscaPokemon() {
  const pokemon = document.getElementById("pokemon").value;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  try {
    const pokeResposta = await fetch(url);
    const data = await pokeResposta.json();
    const name = document.getElementById("name");
    const id = document.getElementById("id");
    const move1 = document.getElementById("move1");
    const move2 = document.getElementById("move2");
    const move3 = document.getElementById("move3");
    const move4 = document.getElementById("move4");
    const move5 = document.getElementById("move5");
    const img = data.sprites.front_default;
    document.getElementById("picture").setAttribute("src", img);
    id.innerHTML = "#" + data.id;
    name.innerHTML = data.name;
    move1.innerHTML = `<p>${data.moves[0].move.name}</p>`;
    move2.innerHTML = `<p>${data.moves[1].move.name}</p>`;
    move3.innerHTML = `<p>${data.moves[2].move.name}</p>`;
    move4.innerHTML = `<p>${data.moves[3].move.name}</p>`;
    move5.innerHTML = `<p>${data.moves[4].move.name}</p>`;
  } catch (error) {
    alert("ID ou nome não encontrado");
    window.location.reload(true);
  }
}
