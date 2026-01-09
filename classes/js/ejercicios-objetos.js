// const nombre = "Davier";
// const apellido = "López";
// const edad = 25;
// const tamano = 1.8;
// texto = `Hola mi nombre es ${nombre} ${apellido} tengo ${edad} años y mido ${tamano} metros`
// console.log(texto);
// const h3 = document.querySelector(".texto");
// h3.textContent = texto;

// // Ejercicio con prompt
// const nombre2 = prompt("Ingrese su nombre");
// const apellido2 = prompt("Ingrese su apellido");
// const edad2 = prompt("Ingrese su edad");
// const tamano2 = prompt("Ingrese su tamaño");
// texto2 = `Hola mi nombre es ${nombre2} ${apellido2} tengo ${edad2} años y mido ${tamano2} metros`
// console.log(texto2);
// h3.textContent = texto2Davier;

// Calcular el are de un rectangulo, sabiendo su largo y su ancho

let producto = {
    nombre: "Camisa",
    precio: 25,
    cantidad: 3
}
// Calcula el precio total(precio × cantidad) y agrega una nueva propiedad al objeto llamada total con ese valor.Muestra el objeto completo en consola.
producto.total = producto.precio * producto.cantidad;
console.log(producto);

let caja = {
  ancho: 10,
  alto: 25,
  profundidad: 5
}

const volumen = caja.ancho * caja.alto * caja.profundidad;
console.log('El volumen de la caja es: ' + volumen)

