// Metodo Map
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
console.log("--- Metodo Map (Precio * 2) ---");
const products = [
    { nombre: "Computadora", precio: 1000, cantidad: 1 },
    { nombre: "Laptop", precio: 1500, cantidad: 2 },
    { nombre: "Tablet", precio: 800, cantidad: 1 },
    { nombre: "Smartphone", precio: 500, cantidad: 1 },
    { nombre: "Monitor", precio: 200, cantidad: 1 }
]

const newProductsprice = products.map((product) => {
    return {
        ...product,
        precio: product.precio * 2
    }
})
console.log("Map:", newProductsprice);

// Using For Loop
const newProductsPriceFor = [];
for (let i = 0; i < products.length; i++) {
    newProductsPriceFor.push({
        ...products[i],
        precio: products[i].precio * 2
    });
}
console.log("Map (For Loop):", newProductsPriceFor);


console.log("\n--- Metodo Map (Modificar Monitor) ---");
const newProductsqty = products.map((product) => {
    if (product.nombre === "Monitor") {
        return {
            ...product,
            cantidad: product.cantidad + 1
        }
    }
    return product
})
console.log("Map:", newProductsqty);

// Using While Loop
const newProductsqtyWhile = [];
let i = 0;
while (i < products.length) {
    if (products[i].nombre === "Monitor") {
        newProductsqtyWhile.push({
            ...products[i],
            cantidad: products[i].cantidad + 1
        });
    } else {
        newProductsqtyWhile.push(products[i]);
    }
    i++;
}
console.log("Map (While Loop):", newProductsqtyWhile);


// Metodo filter
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
console.log("\n--- Metodo Filter (Precio >= 1000) ---");
const newProductsfilter = products.filter((product) => {
    return product.precio >= 1000
})
console.log("Filter:", newProductsfilter);

// Using For Loop
const newProductsFilterFor = [];
for (let j = 0; j < products.length; j++) {
    if (products[j].precio >= 1000) {
        newProductsFilterFor.push(products[j]);
    }
}
console.log("Filter (For Loop):", newProductsFilterFor);


// Metodo find
// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
console.log("\n--- Metodo Find (Laptop) ---");
const newProductsfind = products.find((product) => {
    return product.nombre === "Laptop"
})
console.log("Find:", newProductsfind);

// Using Do...While Loop
let foundProduct = undefined;
let k = 0;
do {
    if (k < products.length && products[k].nombre === "Laptop") {
        foundProduct = products[k];
        break;
    }
    k++;
} while (k < products.length);
console.log("Find (Do...While Loop):", foundProduct);


// Metodo reduce
// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
console.log("\n--- Metodo Reduce (Sumar precios) ---");
const newProductsreduce = products.reduce((acc, product) => {
    return acc + product.precio
}, 0)
console.log("Reduce:", newProductsreduce);

// Using For Loop
let sum = 0;
for (let l = 0; l < products.length; l++) {
    sum += products[l].precio;
}
console.log("Reduce (For Loop):", sum);


// --- GENERATED METHODS ---

// Metodo forEach
// El método forEach() ejecuta la función indicada una vez por cada elemento del array.
console.log("\n--- Metodo ForEach (Imprimir nombres) ---");
console.log("forEach output:");
products.forEach((product) => {
    console.log(`- ${product.nombre}`);
});

// Using For Loop
console.log("forEach (For Loop) output:");
for (let m = 0; m < products.length; m++) {
    console.log(`- ${products[m].nombre}`);
}


// Metodo some
// El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
console.log("\n--- Metodo Some (¿Hay precio > 2000?) ---");
const hasExpensiveProduct = products.some(product => product.precio > 2000);
console.log("Some:", hasExpensiveProduct);

// Using While Loop
let hasExpensiveProductWhile = false;
let n = 0;
while (n < products.length) {
    if (products[n].precio > 2000) {
        hasExpensiveProductWhile = true;
        break;
    }
    n++;
}
console.log("Some (While Loop):", hasExpensiveProductWhile);


// Metodo every
// El método every() determina si todos los elementos en el array satisfacen una condición.
console.log("\n--- Metodo Every (¿Todos tienen cantidad > 0?) ---");
const allPositiveQty = products.every(product => product.cantidad > 0);
console.log("Every:", allPositiveQty);

// Using For Loop
let allPositiveQtyFor = true;
for (let o = 0; o < products.length; o++) {
    if (products[o].cantidad <= 0) {
        allPositiveQtyFor = false;
        break;
    }
}
console.log("Every (For Loop):", allPositiveQtyFor);


// Metodo includes (Primitive Array)
// El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
console.log("\n--- Metodo Includes (Lista de frutas) ---");
const fruits = ["Manzana", "Pera", "Uva", "Naranja"];
console.log("Frutas:", fruits);
const hasPera = fruits.includes("Pera");
console.log("Includes 'Pera':", hasPera);

// Using Do...While Loop
let hasPeraDoWhile = false;
let p = 0;
if (fruits.length > 0) {
    do {
        if (fruits[p] === "Pera") {
            hasPeraDoWhile = true;
            break;
        }
        p++;
    } while (p < fruits.length);
}
console.log("Includes (Do...While Loop):", hasPeraDoWhile);
