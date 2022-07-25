import { home } from "./module.js";
document.querySelector(".home").onclick = home;

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
      const separateUrl = pokeUrl
        .split("/")
        .map((urlSeparate) => String(urlSeparate));
      const idcaught = separateUrl.slice(6, 7);
      const ul = document.getElementById("pokeName");
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `./pokemon-details.html?id=${idcaught}`;
      const text = document.createTextNode(`#${idcaught}-${pokeArray}`);
      ul.appendChild(li);
      li.appendChild(a);
      a.appendChild(text);
    });
  } catch (error) {
    alert("Tipo não encontrado");
    window.location.reload(true);
  }
}
document.getElementById("searchForType").onclick = searchForType;
