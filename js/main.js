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
    let img = data.sprites.front_default;
    document.getElementById("picture").setAttribute("src", img);
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("id").innerHTML = "#" + data.id;
    document.getElementById("move1").innerHTML = data.moves[0].move.name;
    document.getElementById("move2").innerHTML = data.moves[1].move.name;
    document.getElementById("move3").innerHTML = data.moves[2].move.name;
    document.getElementById("move4").innerHTML = data.moves[3].move.name;
    document.getElementById("move5").innerHTML = data.moves[4].move.name;
  } catch (error) {
    alert("ID ou nome não encontrado");
    window.location.reload(true);
  }
}
