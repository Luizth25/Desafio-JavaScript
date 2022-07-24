import { Home, name, id, picture } from "./module.js";
document.querySelector(".Home").onclick = Home;
async function searchPokemon() {
  const pokemon = document.getElementById("pokemon").value;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  try {
    const pokeResponse = await fetch(url);
    const data = await pokeResponse.json();
    const img = data.sprites.front_default;
    picture.setAttribute("src", img);
    id.innerHTML = "#" + data.id;
    name.innerHTML = data.name;
    const move = data.moves;
    const pokeMovi = move.map(
      (moviment) => `<li><p>${moviment.move.name}</p></li>`
    );
    const moves = pokeMovi.slice(0, 5).join("");
    const moveList = document.getElementById("moveList");
    moveList.innerHTML = moves;
  } catch (error) {
    alert("ID ou nome não encontrado");
    window.location.reload(true);
  }
}
document.getElementById("searchPokemon").onclick = searchPokemon;
