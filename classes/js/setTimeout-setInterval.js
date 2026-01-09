// ============================================
// PLANIFICACIÓN EN JAVASCRIPT
// setTimeout y setInterval
// ============================================

// ============================================
// 1. EJEMPLO BÁSICO DE setTimeout
// ============================================

console.log("=== Ejemplo 1: setTimeout básico ===");

function saludar(nombre = "mundo") {
    console.log("Hola " + nombre);
}

// setTimeout ejecuta la función UNA SOLA VEZ después del tiempo especificado
// Sintaxis: setTimeout(función, milisegundos)
// 1000 milisegundos = 1 segundo
setTimeout(saludar, 1000); // Se ejecutará después de 1 segundo

console.log("Esta línea se ejecuta INMEDIATAMENTE, antes del setTimeout");

// ============================================
// 2. setTimeout CON ARGUMENTOS
// ============================================

console.log("\n=== Ejemplo 2: setTimeout con argumentos ===");

// Forma 1: Usando parámetros adicionales de setTimeout
setTimeout(saludar, 2000, "Codeable");
// El tercer parámetro y siguientes se pasan como argumentos a la función

// Forma 2: Usando una función flecha (MÁS COMÚN)
setTimeout(() => saludar("JavaScript"), 3000);
// Esta es la forma más flexible y común de pasar argumentos

// ============================================
// 3. CANCELAR UN setTimeout (clearTimeout)
// ============================================

console.log("\n=== Ejemplo 3: Cancelar setTimeout ===");

function mensajeImportante() {
    console.log("¡Este mensaje nunca se mostrará!");
}

// Guardamos el ID del temporizador
const timerId = setTimeout(mensajeImportante, 4000);

// Cancelamos el temporizador ANTES de que se ejecute
clearTimeout(timerId);
console.log("Temporizador cancelado con clearTimeout");

// ============================================
// 4. setInterval BÁSICO
// ============================================

console.log("\n=== Ejemplo 4: setInterval básico ===");

let contador = 0;

// setInterval ejecuta la función REPETIDAMENTE cada X milisegundos
// IMPORTANTE: Siempre guarda el ID para poder detenerlo después
const intervalId = setInterval(() => {
    console.log("Contador:", contador);
    contador++;

    // Detenemos el intervalo cuando llega a 5
    if (contador >= 5) {
        clearInterval(intervalId);
        console.log("Intervalo detenido");
    }
}, 1000); // Se ejecuta cada 1 segundo

// ============================================
// 5. EJEMPLO PRÁCTICO: TEMPORIZADOR DE CUENTA REGRESIVA
// ============================================

console.log("\n=== Ejemplo 5: Cuenta regresiva ===");

function cuentaRegresiva(segundos) {
    console.log(`\nIniciando cuenta regresiva desde ${segundos}...`);

    let tiempo = segundos;

    // Mostramos el número inicial inmediatamente
    console.log(tiempo);

    const intervalo = setInterval(() => {
        tiempo--;

        if (tiempo > 0) {
            console.log(tiempo);
        } else {
            console.log("¡TIEMPO TERMINADO! 🎉");
            clearInterval(intervalo); // Detenemos el intervalo
        }
    }, 1000);
}

// Descomentar la siguiente línea para probar la cuenta regresiva
// cuentaRegresiva(5);

// ============================================
// 6. EJEMPLO PRÁCTICO: RELOJ SIMPLE
// ============================================

console.log("\n=== Ejemplo 6: Reloj simple ===");

function mostrarHora() {
    const ahora = new Date();
    const tiempo = ahora.toLocaleTimeString();
    console.log("Hora actual:", tiempo);
}

// Descomentar para ver el reloj en acción (muestra la hora cada segundo)
// const relojId = setInterval(mostrarHora, 1000);

// Para detener el reloj después de 5 segundos:
// setTimeout(() => {
//   clearInterval(relojId);
//   console.log("Reloj detenido");
// }, 5000);

// ============================================
// 7. SETINTERVAL CON CLEARINTERVAL
// ============================================

console.log("\n=== Ejemplo 7: setInterval con clearInterval ===");

let contadorAvanzado = 0;

// Iniciamos un intervalo
const miIntervalo = setInterval(() => {
    console.log("Ejecución #", contadorAvanzado++);
}, 2000);

// Programamos que se detenga después de 5 segundos
setTimeout(() => {
    clearInterval(miIntervalo);
    console.log("Intervalo detenido después de 5 segundos");
}, 5000);

// ============================================
// 8. ¿RETRASO CERO? - Explicación del concepto
// ============================================

console.log("\n=== Ejemplo 8: ¿Retraso cero? ===");

console.log("Antes de la planificación");

// Aunque el retraso es 0, esta función NO se ejecuta inmediatamente
// Se coloca en la "cola de tareas" y se ejecuta DESPUÉS del código síncrono
setTimeout(() => console.log("Tarea programada con delay 0"), 0);

console.log("Después de la planificación");
console.log("Mucho después de la planificación");

/* 
ORDEN DE EJECUCIÓN ESPERADO:
1. "Antes de la planificación"
2. "Después de la planificación"  
3. "Mucho después de la planificación"
4. "Tarea programada con delay 0"  <-- Se ejecuta al FINAL

¿POR QUÉ?
Porque JavaScript primero ejecuta todo el código síncrono (normal),
y DESPUÉS ejecuta las funciones asíncronas (como setTimeout),
sin importar que el delay sea 0.

Esto está relacionado con el "Event Loop" que veremos más adelante.
*/

// ============================================
// 9. EJEMPLO PRÁCTICO: NOTIFICACIÓN CON RETRASO
// ============================================

console.log("\n=== Ejemplo 9: Sistema de notificaciones ===");

function mostrarNotificacion(mensaje, tipo = "info") {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${tipo.toUpperCase()}: ${mensaje}`);
}

// Simular notificaciones que llegan en diferentes momentos
setTimeout(() => mostrarNotificacion("Tienes un nuevo mensaje", "info"), 1500);
setTimeout(() => mostrarNotificacion("Actualización disponible", "warning"), 2500);
setTimeout(() => mostrarNotificacion("Operación completada", "success"), 3500);

// ============================================
// 10. EJEMPLO PRÁCTICO: ANIMACIÓN DE TEXTO
// ============================================

console.log("\n=== Ejemplo 10: Animación de texto ===");

function escribirTexto(texto, velocidad = 100) {
    console.log("\n"); // Línea en blanco
    let indice = 0;

    const intervalo = setInterval(() => {
        // Mostramos el texto carácter por carácter
        if (indice < texto.length) {
            process.stdout.write(texto[indice]); // Escribe sin salto de línea
            indice++;
        } else {
            console.log("\n"); // Salto de línea al final
            clearInterval(intervalo);
        }
    }, velocidad);
}

// Descomentar para ver la animación
// escribirTexto("Hola, estoy aprendiendo JavaScript! 🚀", 50);

// ============================================
// 11. PATRÓN COMÚN: REINTENTOS CON setTimeout
// ============================================

console.log("\n=== Ejemplo 11: Reintentos automáticos ===");

function intentarConexion(intento = 1, maxIntentos = 3) {
    console.log(`Intento de conexión #${intento}...`);

    // Simulamos una conexión que puede fallar (aleatorio)
    const exito = Math.random() > 0.7; // 30% de probabilidad de éxito

    if (exito) {
        console.log("✅ ¡Conexión exitosa!");
    } else if (intento < maxIntentos) {
        console.log("❌ Falló. Reintentando en 2 segundos...");
        setTimeout(() => intentarConexion(intento + 1, maxIntentos), 2000);
    } else {
        console.log("❌ Falló después de todos los intentos");
    }
}

// Descomentar para probar el sistema de reintentos
intentarConexion();

// ============================================
// 12. DIFERENCIA ENTRE setTimeout RECURSIVO Y setInterval
// ============================================

console.log("\n=== Ejemplo 12: setTimeout recursivo vs setInterval ===");

// Opción A: setInterval (intervalo fijo)
// El intervalo NO espera a que termine la función
let contadorA = 0;
const intervalA = setInterval(() => {
    console.log("Con setInterval:", contadorA++);
    if (contadorA >= 3) clearInterval(intervalA);
}, 1000);

// Opción B: setTimeout recursivo (más controlado)
// Espera a que termine la función antes de programar el siguiente
let contadorB = 0;
function ejecutarConTimeout() {
    console.log("Con setTimeout recursivo:", contadorB++);

    if (contadorB < 3) {
        setTimeout(ejecutarConTimeout, 1000); // Programa el siguiente
    }
}
// setTimeout(ejecutarConTimeout, 1000);

// ============================================
// 13. EJEMPLO REAL: POLLING (Consultar datos periódicamente)
// ============================================

console.log("\n=== Ejemplo 13: Polling - Consultar estado ===");

// Simula verificar el estado de un proceso cada X tiempo
function verificarEstadoProceso() {
    let verificaciones = 0;
    const maxVerificaciones = 5;

    const intervalo = setInterval(() => {
        verificaciones++;

        // Simulamos un proceso que se completa aleatoriamente
        const completado = Math.random() > 0.6;

        if (completado) {
            console.log(`✅ Proceso completado después de ${verificaciones} verificaciones`);
            clearInterval(intervalo);
        } else if (verificaciones >= maxVerificaciones) {
            console.log("⏱️ Tiempo máximo alcanzado");
            clearInterval(intervalo);
        } else {
            console.log(`⏳ Verificación ${verificaciones}: Proceso aún en curso...`);
        }
    }, 1500); // Verifica cada 1.5 segundos
}

// Descomentar para probar el polling
// verificarEstadoProceso();

// ============================================
// 14. BUENAS PRÁCTICAS Y CONSEJOS
// ============================================

/*
✅ BUENAS PRÁCTICAS:

1. SIEMPRE guarda el ID cuando uses setInterval
   - Para poder detenerlo con clearInterval
   - Evita fugas de memoria

2. Limpia los temporizadores cuando ya no los necesites
   - En componentes de React: usa useEffect cleanup
   - En aplicaciones: limpia al cerrar/destruir

3. Usa setTimeout recursivo si necesitas garantizar que:
   - Una ejecución termine antes de la siguiente
   - El tiempo entre ejecuciones sea exacto

4. Ten en cuenta que setTimeout/setInterval NO son precisos:
   - El retraso es el MÍNIMO, no el tiempo exacto
   - JavaScript puede estar ocupado haciendo otras cosas

5. Para animaciones, considera usar requestAnimationFrame
   - Más eficiente que setInterval para animaciones visuales
   - Se sincroniza con la tasa de refresco del navegador

❌ ERRORES COMUNES:

1. Olvidar guardar el ID y no poder cancelar el temporizador
2. No limpiar los intervalos (causa fugas de memoria)
3. Asumir que el delay 0 ejecuta inmediatamente
4. Usar setInterval para tareas que pueden tardar más que el intervalo
*/

// ============================================
// EJERCICIOS PROPUESTOS
// ============================================

/*
EJERCICIO 1: Cronómetro
Crea una función que cuente segundos hacia adelante y se detenga a los 10 segundos

EJERCICIO 2: Semáforo
Simula un semáforo que cambie entre Verde (5s), Amarillo (2s), Rojo (5s)

EJERCICIO 3: Recordatorio
Crea un sistema que muestre recordatorios a intervalos (por ejemplo, cada 3 segundos)
y permita agregar nuevos recordatorios

EJERCICIO 4: Temporizador Pomodoro
Implementa un temporizador Pomodoro (25 min trabajo, 5 min descanso)
(Para pruebas rápidas, usa segundos en lugar de minutos)
*/

console.log("\n=== FIN DE LOS EJEMPLOS ===");
console.log("💡 Tip: Descomenta los ejemplos que quieras probar");
console.log("💡 Ejecuta con: node setTimeout-setInterval.js");
