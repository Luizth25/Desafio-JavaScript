import { navegacaoHome } from "./main.js";
document.querySelector(".botaoHome").onclick = navegacaoHome;

async function buscaTipo() {
  const pokemonTipo = document.getElementById("pokemonTipo").value;
  const url = `https://pokeapi.co/api/v2/type/${pokemonTipo}`;
  try {
    const pokeTipo = await fetch(url);
    const data = await pokeTipo.json();
    const lista = data.pokemon;
    lista.forEach((pokeType) => {
      const pokeArray = pokeType.pokemon.name;
      const pokeUrl = pokeType.pokemon.url;
      const pokeNome = document.getElementById("pokeNome");
      const separaUrl = pokeUrl
        .split("/")
        .map((urlSepara) => String(urlSepara));
      const idSeparado = separaUrl.slice(6, 7);
      pokeNome.innerHTML += `<li><a># ${idSeparado} ${pokeArray}</a></li>`;
    });
  } catch (error) {
    alert("Tipo não encontrado");
    window.location.reload(true);
  }
}
document.getElementById("buscaTipo").onclick = buscaTipo;
