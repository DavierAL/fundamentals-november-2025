console.log("Hola desde JS")
const h1Element = document.querySelector("h1");

const container = document.querySelector(".container");
const parrafo = document.createElement("p");
parrafo.textContent = "Hola desde JS";
parrafo.className = "parrafo";

container.appendChild(parrafo);
console.log(parrafo)