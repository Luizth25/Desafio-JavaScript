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

export const name = document.getElementById("name");
export const id = document.getElementById("id");
export const picture = document.getElementById("picture");
export const li = document.createElement("li");
export const a = document.createElement("a");
export const ul = document.getElementById("moveList");
