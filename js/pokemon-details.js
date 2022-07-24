import { name, id, picture } from "./module.js";
async function pokeDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const pokeParam = urlParams.get("id");
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeParam}`;
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
    return error;
  }
}
pokeDetail();
