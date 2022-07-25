import { name, id, picture, back } from "./module.js";
document.getElementById("back").onclick = back;
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
    const move = data.moves.slice(0, 5);
    move.forEach((movePoke) => {
      const moves = movePoke.move.name;
      const li = document.createElement("li");
      const p = document.createElement("p");
      const pokeMove = document.createTextNode(moves);
      const ul = document.querySelector("ul");
      p.appendChild(pokeMove);
      li.appendChild(p);
      ul.appendChild(li);
    });
  } catch (error) {
    return error;
  }
}
pokeDetail();
