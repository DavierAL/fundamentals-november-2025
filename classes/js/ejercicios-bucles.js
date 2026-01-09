//Escribe una función llamada sumaHastaN que reciba un número n y retorne la suma de todos los números desde 1 hasta n.
console.log("Ejercicio1==================================")
function sumaHastaN(n) {
    let acumulador = 0;
    for (let i = 1; i <= n; i++) {
        acumulador += i;
        console.log(i)
    } return acumulador;
}

console.log(sumaHastaN(5)); // 15 (1 + 2 + 3 + 4 + 5)
console.log(sumaHastaN(10)); // 55 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)

//Implementa la función tablaMultiplicar que reciba un número y muestre en la consola su tabla de multiplicar del 1 al 10.
console.log("Ejercicio2==================================")
function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ` + i * numero)
    }
}

tablaMultiplicar(5);

//Escribe una función llamada contarLetra que reciba un string y una letra, y retorne cuántas veces aparece esa letra en el string.

//Tip: Es posible acceder a cada letra de un string usando corchetes [] y pasando la posición de la letra a la que deseas acceder:
console.log("Ejercicio3==================================")
function contarLetra(texto, letra) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contador++;
        }
    }

    return contador;
}

console.log(contarLetra("banana", "a")); // 3

//Crea una función paresHastaN que reciba un número n e imprima todos los números pares desde 2 hasta n. (imprime uno a la vez)
console.log("Ejercicio4==================================")
function paresHastaN(n) {
    for (let i = 2; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

paresHastaN(10);

//Implementa la función cuentaRegresiva que reciba un número y muestre en la consola la cuenta regresiva desde ese número hasta 1.
console.log("Ejercicio5==================================")
function cuentaRegresiva(numero) {
    for (let i = numero; i >= 1; i--) {
        console.log(i)
    }
}

cuentaRegresiva(5);

//Escribe una función llamada contarVocales que reciba un string y retorne cuántas vocales contiene.

//Tip: Utiliza el mecanismo para acceder a cada letra de un string explicado arriba.
console.log("Ejercicio6==================================")
function contarVocales(texto) {
    let contador = 0;
    let vocales = "aeiouAEIOU";

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }

    return contador;
}

console.log(contarVocales("banana")); // 3

//Crea una función fibonacciHastaN que reciba un número n e imprima los primeros n números de la serie de Fibonacci.
console.log("Ejercicio7==================================")
function fibonacciHastaN(n) {
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        console.log(a);

        let siguiente = a + b;

        a = b;
        b = siguiente;
    }
}

fibonacciHastaN(5);

//Implementa la función factores que reciba un número e imprima todos los números que son factores de ese número.
console.log("Ejercicio8==================================")
function factores(numero) {
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            console.log(i);
        }
    }
}

factores(12);
// Imprime:
// 1
// 2
// 3
// 4
// 6
// 12

//Escribe una función primosHastaN que reciba un número n e imprima todos los números primos desde 2 hasta n.
console.log("Ejercicio9==================================")
function primosHastaN(n) {
    for (let i = 2; i <= n; i++) {
        let esPrimo = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }

        if (esPrimo) {
            console.log(i);
        }
    }
}

console.log(primosHastaN(10));

console.log("Ejercicio10==================================")
// La conjetura dice lo siguiente:

// Empieza con cualquier número entero positivo.
// Si es par, divídelo entre 2, pero si es impar, multiplícalo por 3 y súmale 1.
// Repite el proceso con el resultado obtenido en el paso anterior.
// Eventualmente llegarás al número 1, independientemente del número inicial.
// Implementa la función collatz que reciba un número y retorne el número de pasos necesarios para llegar a 1 según la conjetura de Collatz.

function collatz(numero) {
    let pasos = 0;
    while (numero !== 1) {
        console.log(numero)
        if (numero % 2 === 0) {
            numero = numero / 2; 
        } else {
            numero = (numero * 3) + 1;
        }
        
        pasos++; 
    }

    console.log("pasos:")
    return pasos;
}

console.log(collatz(6)); // 8 (6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1)