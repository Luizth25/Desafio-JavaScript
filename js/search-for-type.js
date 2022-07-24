import { Home } from "./main.js";
document.querySelector(".Home").onclick = Home;

async function searchForType() {
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
      pokeName.innerHTML += `<li><a id="pokeInfo" href="./pokemon-details.html?id=${idcaught}">#${idcaught} ${pokeArray}</a></li>`;
    });
  } catch (error) {
    alert("Tipo não encontrado");
    window.location.reload(true);
  }
}
document.getElementById("searchForType").onclick = searchForType;
