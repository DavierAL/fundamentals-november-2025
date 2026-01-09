// ============================================
// CALL STACK (PILA DE LLAMADAS) EN JAVASCRIPT
// ============================================

// El Call Stack es una estructura de datos fundamental que JavaScript usa
// para gestionar la ejecución de funciones. Funciona bajo el principio LIFO:
// "Last In, First Out" (Último en Entrar, Primero en Salir)

console.log("=== CALL STACK EN JAVASCRIPT ===\n");

// ============================================
// 1. EJEMPLO BÁSICO - ¿Cómo funciona el Call Stack?
// ============================================

console.log("--- EJEMPLO 1: Ejecución Básica ---\n");

// Definimos una función simple
function saludar() {
    console.log("Se ejecuta saludar...");
}

console.log("Primer console.log");
saludar();
console.log("Segundo console.log");

// VISUALIZACIÓN DEL CALL STACK:
// --------------------------------
// Paso 1: [main()] - El programa inicia
// Paso 2: [main(), console.log()] - Se ejecuta "Primer console.log"
// Paso 3: [main()] - console.log() termina y se quita del stack
// Paso 4: [main(), saludar()] - Se llama a saludar()
// Paso 5: [main(), saludar(), console.log()] - Se ejecuta console.log() dentro de saludar()
// Paso 6: [main(), saludar()] - console.log() termina
// Paso 7: [main()] - saludar() termina y se quita del stack
// Paso 8: [main(), console.log()] - Se ejecuta "Segundo console.log"
// Paso 9: [main()] - console.log() termina
// Paso 10: [] - El programa finaliza

console.log("\n");

// ============================================
// 2. EJEMPLO CON FUNCIONES ANIDADAS
// ============================================

console.log("--- EJEMPLO 2: Funciones Anidadas ---\n");

function funcionA() {
    console.log("1. Inicio de funcionA");
    funcionB();
    console.log("5. Fin de funcionA");
}

function funcionB() {
    console.log("2. Inicio de funcionB");
    funcionC();
    console.log("4. Fin de funcionB");
}

function funcionC() {
    console.log("3. Ejecutando funcionC");
}

console.log("Llamando a funcionA...");
funcionA();
console.log("Ejecución completada");

// VISUALIZACIÓN DEL CALL STACK:
// --------------------------------
// [main()]
// [main(), console.log()] - "Llamando a funcionA..."
// [main()]
// [main(), funcionA()] - Inicia funcionA
// [main(), funcionA(), console.log()] - "1. Inicio de funcionA"
// [main(), funcionA()]
// [main(), funcionA(), funcionB()] - Inicia funcionB
// [main(), funcionA(), funcionB(), console.log()] - "2. Inicio de funcionB"
// [main(), funcionA(), funcionB()]
// [main(), funcionA(), funcionB(), funcionC()] - Inicia funcionC
// [main(), funcionA(), funcionB(), funcionC(), console.log()] - "3. Ejecutando funcionC"
// [main(), funcionA(), funcionB(), funcionC()] - console.log termina
// [main(), funcionA(), funcionB()] - funcionC termina (pop)
// [main(), funcionA(), funcionB(), console.log()] - "4. Fin de funcionB"
// [main(), funcionA(), funcionB()]
// [main(), funcionA()] - funcionB termina (pop)
// [main(), funcionA(), console.log()] - "5. Fin de funcionA"
// [main(), funcionA()]
// [main()] - funcionA termina (pop)
// [main(), console.log()] - "Ejecución completada"
// [main()]
// [] - Programa finaliza

console.log("\n");

// ============================================
// 3. EJERCICIO: PREPARANDO POCIONES (Del texto proporcionado)
// ============================================

console.log("--- EJERCICIO: PREPARANDO POCIONES ---\n");

function prepararPocionMortifago() {
    console.log("Preparando la poción para los Mortífagos");
    añadirIngrediente("Lagrima de basilisco");
}

function prepararPocionAuror() {
    console.log("Preparando la poción para los Aurors");
    añadirIngrediente("Pluma de fénix");
    prepararPocionMortifago();
    añadirIngrediente("Escama de dragón");
}

function añadirIngrediente(ingrediente) {
    console.log("Añadiendo " + ingrediente);
    realizarHechizo();
}

function realizarHechizo() {
    console.log("Pronunciando hechizo para mezclar ingredientes");
}

console.log("Inicio de la preparación de pociones");
prepararPocionAuror();
console.log("Final de la preparación de pociones");

// VISUALIZACIÓN PASO A PASO DEL CALL STACK (EJERCICIO POCIONES):
// ----------------------------------------------------------------
// 1.  [main()]
// 2.  [main(), console.log(...)] - "Inicio de la preparación..."
// 3.  [main()]
// 4.  [main(), prepararPocionAuror()]
// 5.  [main(), prepararPocionAuror(), console.log(...)] - "Preparando... Aurors"
// 6.  [main(), prepararPocionAuror()]
// 7.  [main(), prepararPocionAuror(), añadirIngrediente("Pluma de fénix")]
// 8.  [main(), prepararPocionAuror(), añadirIngrediente(...), console.log(...)] - "Añadiendo Pluma de fénix"
// 9.  [main(), prepararPocionAuror(), añadirIngrediente(...)]
// 10. [main(), prepararPocionAuror(), añadirIngrediente(...), realizarHechizo()]
// 11. [main(), prepararPocionAuror(), añadirIngrediente(...), realizarHechizo(), console.log(...)] - "Pronunciando hechizo..."
// 12. [main(), prepararPocionAuror(), añadirIngrediente(...), realizarHechizo()]
// 13. [main(), prepararPocionAuror(), añadirIngrediente(...)] - realizarHechizo() termina
// 14. [main(), prepararPocionAuror()] - añadirIngrediente() termina
// 15. [main(), prepararPocionAuror(), prepararPocionMortifago()]
// 16. [main(), prepararPocionAuror(), prepararPocionMortifago(), console.log(...)] - "Preparando... Mortífagos"
// 17. [main(), prepararPocionAuror(), prepararPocionMortifago()]
// 18. [main(), prepararPocionAuror(), prepararPocionMortifago(), añadirIngrediente("Lagrima de basilisco")]
// 19. [main(), prepararPocionAuror(), prepararPocionMortifago(), añadirIngrediente(...), console.log(...)] - "Añadiendo Lagrima..."
// 20. [main(), prepararPocionAuror(), prepararPocionMortifago(), añadirIngrediente(...)]
// 21. [main(), prepararPocionAuror(), prepararPocionMortifago(), añadirIngrediente(...), realizarHechizo()]
// 22. [main(), prepararPocionAuror(), prepararPocionMortifago(), añadirIngrediente(...), realizarHechizo(), console.log(...)]
// 23. [main(), prepararPocionAuror(), prepararPocionMortifago(), añadirIngrediente(...), realizarHechizo()]
// 24. [main(), prepararPocionAuror(), prepararPocionMortifago(), añadirIngrediente(...)]
// 25. [main(), prepararPocionAuror(), prepararPocionMortifago()]
// 26. [main(), prepararPocionAuror()] - prepararPocionMortifago() termina
// 27. [main(), prepararPocionAuror(), añadirIngrediente("Escama de dragón")]
// 28. [main(), prepararPocionAuror(), añadirIngrediente(...), console.log(...)] - "Añadiendo Escama..."
// 29. [main(), prepararPocionAuror(), añadirIngrediente(...)]
// 30. [main(), prepararPocionAuror(), añadirIngrediente(...), realizarHechizo()]
// 31. [main(), prepararPocionAuror(), añadirIngrediente(...), realizarHechizo(), console.log(...)]
// 32. [main(), prepararPocionAuror(), añadirIngrediente(...), realizarHechizo()]
// 33. [main(), prepararPocionAuror(), añadirIngrediente(...)]
// 34. [main(), prepararPocionAuror()]
// 35. [main()] - prepararPocionAuror() termina
// 36. [main(), console.log(...)] - "Final de la preparación..."
// 37. [main()]
// 38. [] - Programa finaliza

console.log("\n");

// ============================================
// 4. RECURSIÓN Y EL CALL STACK
// ============================================

console.log("--- EJEMPLO 4: Recursión (Factorial) ---\n");

// La recursión ocurre cuando una función se llama a sí misma
// Esto crea múltiples "frames" de la misma función en el stack

function factorial(n) {
    console.log(`Calculando factorial de ${n}`);

    // Caso base: detiene la recursión
    if (n === 0 || n === 1) {
        console.log(`Caso base alcanzado: ${n}! = 1`);
        return 1;
    }

    // Llamada recursiva
    const resultado = n * factorial(n - 1);
    console.log(`Retornando ${n}! = ${resultado}`);
    return resultado;
}

const resultadoFactorial = factorial(5);
console.log(`\nResultado final: 5! = ${resultadoFactorial}`);

// VISUALIZACIÓN DEL CALL STACK PARA factorial(5):
// -------------------------------------------------
// [main(), factorial(5)]
// [main(), factorial(5), factorial(4)]
// [main(), factorial(5), factorial(4), factorial(3)]
// [main(), factorial(5), factorial(4), factorial(3), factorial(2)]
// [main(), factorial(5), factorial(4), factorial(3), factorial(2), factorial(1)]
// 
// Caso base alcanzado, ahora empieza a "desenrollarse" (pop):
// [main(), factorial(5), factorial(4), factorial(3), factorial(2)] - return 1
// [main(), factorial(5), factorial(4), factorial(3)] - return 2
// [main(), factorial(5), factorial(4)] - return 6
// [main(), factorial(5)] - return 24
// [main()] - return 120

console.log("\n");

// ============================================
// 5. EJEMPLO DE RECURSIÓN: CUENTA REGRESIVA
// ============================================

console.log("--- EJEMPLO 5: Cuenta Regresiva Recursiva ---\n");

function cuentaRegresiva(numero) {
    console.log(numero);

    // Caso base
    if (numero <= 0) {
        console.log("¡Despegue! 🚀");
        return;
    }

    // Llamada recursiva
    cuentaRegresiva(numero - 1);
}

cuentaRegresiva(5);

// CALL STACK:
// [main(), cuentaRegresiva(5)]
// [main(), cuentaRegresiva(5), cuentaRegresiva(4)]
// [main(), cuentaRegresiva(5), cuentaRegresiva(4), cuentaRegresiva(3)]
// [main(), cuentaRegresiva(5), cuentaRegresiva(4), cuentaRegresiva(3), cuentaRegresiva(2)]
// [main(), cuentaRegresiva(5), cuentaRegresiva(4), cuentaRegresiva(3), cuentaRegresiva(2), cuentaRegresiva(1)]
// [main(), cuentaRegresiva(5), cuentaRegresiva(4), cuentaRegresiva(3), cuentaRegresiva(2), cuentaRegresiva(1), cuentaRegresiva(0)]
// Ahora todas se van "quitando" (pop) del stack hasta quedar vacío

console.log("\n");

// ============================================
// 6. STACK OVERFLOW - ¡Cuidado con la recursión infinita!
// ============================================

console.log("--- EJEMPLO 6: Stack Overflow (Comentado por seguridad) ---\n");

// ⚠️ ¡ADVERTENCIA! El siguiente código causaría un Stack Overflow
// porque la recursión nunca termina. Lo dejamos comentado.

/*
function recursionInfinita() {
  console.log("Esta función se llama infinitamente...");
  recursionInfinita(); // No hay caso base, ¡nunca para!
}

// ¡NO EJECUTES ESTO!
// recursionInfinita();
*/

console.log("Un Stack Overflow ocurre cuando el Call Stack se llena completamente.");
console.log("Esto pasa típicamente con recursión infinita (sin caso base).");
console.log("JavaScript lanzará un error: 'RangeError: Maximum call stack size exceeded'\n");

// ============================================
// 7. EJEMPLO PRÁCTICO: SUMA DE ARRAY CON RECURSIÓN
// ============================================

console.log("--- EJEMPLO 7: Sumar Array con Recursión ---\n");

function sumarArray(arr, indice = 0) {
    // Caso base: hemos llegado al final del array
    if (indice >= arr.length) {
        console.log("Caso base: fin del array");
        return 0;
    }

    console.log(`Sumando elemento en índice ${indice}: ${arr[indice]}`);

    // Suma el elemento actual + la suma del resto del array
    return arr[indice] + sumarArray(arr, indice + 1);
}

const numeros = [1, 2, 3, 4, 5];
const suma = sumarArray(numeros);
console.log(`\nSuma total: ${suma}`);

// CALL STACK PARA sumarArray([1,2,3,4,5]):
// -----------------------------------------
// [main(), sumarArray(arr, 0)] - elemento 1
// [main(), sumarArray(arr, 0), sumarArray(arr, 1)] - elemento 2
// [main(), sumarArray(arr, 0), sumarArray(arr, 1), sumarArray(arr, 2)] - elemento 3
// [main(), sumarArray(arr, 0), sumarArray(arr, 1), sumarArray(arr, 2), sumarArray(arr, 3)] - elemento 4
// [main(), sumarArray(arr, 0), sumarArray(arr, 1), sumarArray(arr, 2), sumarArray(arr, 3), sumarArray(arr, 4)] - elemento 5
// [main(), sumarArray(arr, 0), sumarArray(arr, 1), sumarArray(arr, 2), sumarArray(arr, 3), sumarArray(arr, 4), sumarArray(arr, 5)] - caso base
//
// Ahora se desenrolla:
// return 0 → return 5+0 → return 4+5 → return 3+9 → return 2+12 → return 1+14 = 15

console.log("\n");

// ============================================
// 8. RESUMEN DE CONCEPTOS CLAVE
// ============================================

console.log("--- RESUMEN: CALL STACK ---\n");

console.log(`
📚 CONCEPTOS CLAVE:

1. DEFINICIÓN:
   El Call Stack es una estructura LIFO (Last In, First Out)
   que JavaScript usa para gestionar la ejecución de funciones.

2. FUNCIONAMIENTO:
   - Cuando se llama a una función, se "empuja" (push) al stack
   - Cuando termina su ejecución, se "quita" (pop) del stack
   - El control regresa a la función que hizo la llamada

3. FRAME (Marco):
   Cada función en el stack tiene un "frame" con:
   - Nombre de la función
   - Argumentos recibidos
   - Variables locales
   - Punto de retorno en el código

4. RECURSIÓN:
   Una función se llama a sí misma
   - DEBE tener un caso base para detener la recursión
   - Sin caso base → Stack Overflow (desbordamiento de pila)

5. STACK OVERFLOW:
   Error que ocurre cuando el Call Stack se llena completamente
   - Típicamente causado por recursión infinita
   - Error: "RangeError: Maximum call stack size exceeded"

6. SINCRONÍA:
   JavaScript ejecuta código de manera síncrona (una cosa a la vez)
   El Call Stack procesa una función a la vez, de arriba hacia abajo

7. VISUALIZACIÓN:
   Imagina una pila de platos:
   - Agregas platos arriba (push)
   - Quitas platos desde arriba (pop)
   - No puedes quitar el plato de abajo sin quitar los de arriba primero
`);

console.log("=== FIN DEL TUTORIAL SOBRE CALL STACK ===");
