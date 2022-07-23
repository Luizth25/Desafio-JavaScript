// Botões de navegação da pagina HOME
export function searchNameId() {
  window.location.href = "search-name-id.html";
}

export function searchType() {
  window.location.href = "search-for-type.html";
}

//Botão que faz a função de voltar para HOME
export function Home() {
  window.location.href = "home.html";
}

//Função que faz a busca dos pokemons
export async function searchPokemon() {
  const pokemon = document.getElementById("pokemon").value;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  try {
    const pokeResponse = await fetch(url);
    const data = await pokeResponse.json();
    const name = document.getElementById("name");
    const id = document.getElementById("id");
    console.log(data);
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

//Busca pokemons pelo tipo
export async function searchForType() {
  const pokemonsType = document.getElementById("pokemonsType").value;
  const url = `https://pokeapi.co/api/v2/type/${pokemonsType}`;
  try {
    const pokemonType = await fetch(url);
    const data = await pokemonType.json();
    const list = data.pokemon;
    list.forEach((pokeType) => {
      const pokeArray = pokeType.pokemon.name;
      const pokeUrl = pokeType.pokemon.url;
      const pokeName = document.getElementById("pokeName");
      const separateUrl = pokeUrl
        .split("/")
        .map((urlSeparate) => String(urlSeparate));
      const idcaught = separateUrl.slice(6, 7);
      pokeName.innerHTML += `<li><a id="pokeInfo" href="./pokemon-details.html?id=${idcaught}"># ${idcaught} ${pokeArray}</a></li>`;
    });
  } catch (error) {
    alert("Tipo não encontrado");
    window.location.reload(true);
  }
}

//Funçao que pega os detalhes do pokemon
export async function pokeDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const pokeParam = urlParams.get("id");
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeParam}`;
  try {
    const pokeResponse = await fetch(url);
    const data = await pokeResponse.json();
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
