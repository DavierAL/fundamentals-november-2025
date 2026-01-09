// for of -> arreglos y string
const palabra = " Codeable"
//for of
for (const letra of palabra) {
    console.log(letra)
}
console.log("====================")
for (let i = 0; i < palabra.length; i++) {
    console.log(palabra[i])
}

const arrayFruits = ["manzana", "banana", "naranja", "uva"];
for (const fruit of arrayFruits) {
    console.log(fruit)
}

// For in -> iterar entre propiedades de un objeto
const persona = {
    name: "Davier",
    age: 23,
    isDeveloper: true
}


const productos = [

    { id: 1, nombre: 'Laptop', precio: 800 },
    { id: 2, nombre: 'Mouse', precio: 25 },
    { id: 3, nombre: 'Teclado', precio: 60 },
    { id: 4, nombre: 'Monitor', precio: 300 }

];

// Usa for...of para:
// 1. Crear un array solo con los nombres de los productos
// 2. Calcular el precio total de todos los productos

let productonombre = [];
let precioTotal = 0;
for (let producto of productos) {
    productonombre.push(producto.nombre);
    precioTotal += producto.precio;
}
console.log(productonombre);
console.log(precioTotal);

const peliculas = [
    { titulo: 'El Padrino', año: 1972, generos: ['drama', 'crimen'] },
    { titulo: 'Pulp Fiction', año: 1994, generos: ['crimen', 'drama'] },
    { titulo: 'El Señor de los Anillos', año: 2001, generos: ['aventura', 'fantasía'] }

];


// Usa for...of para iterar sobre películas
for (const pelicula of peliculas) {
    console.log("pelicula")
    for (const propiedad in pelicula) {
        console.log(`${propiedad}:`, pelicula[propiedad])
    }
}

// Metodos en datos primitivos
let letras = "Codeable";
let numeros = 20;
let booleano = true;
let indefinido = undefined;
let nulo = null;