async function pokeDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const pokeParam = urlParams.get("id");
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeParam}`;
  try {
    const pokeResponse = await fetch(url);
    const data = await pokeResponse.json();
    const name = document.getElementById("name");
    const id = document.getElementById("id");
    const img = data.sprites.front_default;
    document.getElementById("picture").setAttribute("src", img);
    id.innerHTML = "#" + data.id;
    name.innerHTML = data.name;
    const move = data.moves;
    const movi = move.map(
      (moviment) => `<li><p>${moviment.move.name}</p></li>`
    );
    const movimento = movi.slice(0, 5).join("");
    const ul = document.getElementById("moveList");
    ul.innerHTML = movimento;
  } catch (error) {
    return error;
  }
}
pokeDetail();
