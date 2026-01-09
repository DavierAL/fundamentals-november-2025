// ============================================
// MANEJO DE ERRORES EN JAVASCRIPT
// try...catch...finally y throw
// ============================================

// ============================================
// 1. PROBLEMA: Código SIN manejo de errores
// ============================================

console.log("=== Ejemplo 1: Sin manejo de errores ===\n");

// Si descomentas este código, el programa "morirá" inmediatamente
// console.log("Antes del error");
// console.log(variableInexistente); // ReferenceError: variableInexistente is not defined
// console.log("Después del error"); // <-- Esta línea NUNCA se ejecutará

console.log("✅ El código comentado arriba causaría que el programa se detenga\n");

// ============================================
// 2. SOLUCIÓN: try...catch básico
// ============================================

console.log("=== Ejemplo 2: try...catch básico ===\n");

console.log("Antes del try");

try {
    // Bloque TRY: Código que PODRÍA lanzar un error
    console.log("Intentando acceder a variable inexistente...");
    console.log(variableInexistente); // <-- Esto lanzará un error
    console.log("Esta línea nunca se ejecuta"); // <-- No se ejecuta porque ya se lanzó el error
} catch (error) {
    // Bloque CATCH: Se ejecuta SOLO si hay un error en try
    console.log("❌ Se detectó un error:", error.message);
}

// El programa CONTINÚA ejecutándose
console.log("Después del try...catch");
console.log("✅ El programa sigue vivo!\n");

// ============================================
// 3. EL OBJETO ERROR
// ============================================

console.log("=== Ejemplo 3: Objeto Error ===\n");

try {
    // Intentamos usar una variable que no existe
    console.log(saludo);
} catch (error) {
    // El parámetro 'error' es un objeto con información sobre el error
    console.log("Propiedades del objeto Error:");
    console.log("  - Tipo (name):", error.name); // ReferenceError
    console.log("  - Mensaje (message):", error.message); // saludo is not defined
    console.log("  - Stack trace (stack):");
    console.log(error.stack); // Muestra dónde ocurrió el error
}

console.log();

// ============================================
// 4. CATCH SIN PARÁMETRO
// ============================================

console.log("=== Ejemplo 4: catch sin parámetro ===\n");

try {
    console.log(otraVariableInexistente);
} catch {
    // Si NO necesitas información del error, puedes omitir el parámetro
    console.log("❌ Ocurrió un error, pero no necesito los detalles");
}

console.log();

// ============================================
// 5. try...catch FUNCIONA DE MANERA SÍNCRONA
// ============================================

console.log("=== Ejemplo 5: try...catch es SÍNCRONO ===\n");

// PROBLEMA: try...catch NO captura errores en código ASÍNCRONO
console.log("Antes del setTimeout");

try {
    // setTimeout es ASÍNCRONO, el callback se ejecuta después
    setTimeout(() => {
        console.log(errorEnCallback); // <-- Error dentro del callback
    }, 1000);
} catch (error) {
    // ❌ Este catch NO capturará el error del setTimeout
    console.log("Este catch NO se ejecutará");
}

console.log("Después del setTimeout");
console.log("⚠️  El error se lanzará en 1 segundo y NO será capturado\n");

// SOLUCIÓN: Poner el try...catch DENTRO del callback
setTimeout(() => {
    try {
        console.log("Intentando dentro del callback...");
        console.log(errorEnCallback);
    } catch (error) {
        console.log("✅ Error capturado DENTRO del callback:", error.message);
    }
}, 2000);

// ============================================
// 6. LANZANDO ERRORES CON throw
// ============================================

console.log("\n=== Ejemplo 6: Lanzar errores con throw ===\n");

function saludar(nombre) {
    // Validación: el nombre es OBLIGATORIO
    if (nombre === undefined || nombre === "") {
        // Lanzamos un error manualmente con throw
        throw new TypeError("El parámetro 'nombre' es requerido");
    }

    console.log("Hola " + nombre);
}

// Caso 1: Llamada correcta
try {
    saludar("Codeable"); // ✅ Funciona correctamente
} catch (error) {
    console.log("Error:", error.message);
}

// Caso 2: Llamada sin parámetro
try {
    saludar(); // ❌ Lanza un error
} catch (error) {
    console.log("❌ Error capturado:", error.message);
}

console.log();

// ============================================
// 7. TIPOS DE ERRORES EN JAVASCRIPT
// ============================================

console.log("=== Ejemplo 7: Tipos de errores ===\n");

// JavaScript tiene varios tipos de errores derivados de Error:

// 1. Error genérico
const error1 = new Error("Error genérico");
console.log("Error genérico:", error1.name, "-", error1.message);

// 2. TypeError - Tipo de dato incorrecto
const error2 = new TypeError("Se esperaba un número, se recibió un string");
console.log("TypeError:", error2.name, "-", error2.message);

// 3. ReferenceError - Variable no definida
const error3 = new ReferenceError("Variable no existe");
console.log("ReferenceError:", error3.name, "-", error3.message);

// 4. SyntaxError - Sintaxis incorrecta
const error4 = new SyntaxError("Sintaxis inválida");
console.log("SyntaxError:", error4.name, "-", error4.message);

// 5. RangeError - Valor fuera de rango
const error5 = new RangeError("El valor debe estar entre 0 y 100");
console.log("RangeError:", error5.name, "-", error5.message);

console.log();

// ============================================
// 8. EJEMPLO PRÁCTICO: Validación de edad
// ============================================

console.log("=== Ejemplo 8: Validación de edad ===\n");

function verificarEdad(edad) {
    // Validación 1: La edad debe existir
    if (edad === undefined || edad === null) {
        throw new TypeError("La edad es requerida");
    }

    // Validación 2: La edad debe ser un número
    if (typeof edad !== "number") {
        throw new TypeError("La edad debe ser un número");
    }

    // Validación 3: La edad debe estar en un rango válido
    if (edad < 0 || edad > 150) {
        throw new RangeError("La edad debe estar entre 0 y 150");
    }

    // Si pasó todas las validaciones
    if (edad >= 18) {
        console.log("✅ Eres mayor de edad");
    } else {
        console.log("ℹ️  Eres menor de edad");
    }
}

// Pruebas
try {
    verificarEdad(25); // ✅ Válido
} catch (error) {
    console.log(`❌ ${error.name}: ${error.message}`);
}

try {
    verificarEdad("25"); // ❌ No es un número
} catch (error) {
    console.log(`❌ ${error.name}: ${error.message}`);
}

try {
    verificarEdad(200); // ❌ Fuera de rango
} catch (error) {
    console.log(`❌ ${error.name}: ${error.message}`);
}

try {
    verificarEdad(); // ❌ No se pasó el parámetro
} catch (error) {
    console.log(`❌ ${error.name}: ${error.message}`);
}

console.log();

// ============================================
// 9. try...catch...finally
// ============================================

console.log("=== Ejemplo 9: try...catch...finally ===\n");

function realizarTrabajo(causarError = false) {
    try {
        console.log("📋 Iniciando trabajo...");

        if (causarError) {
            throw new Error("¡Se cortó el cable incorrecto!");
        }

        console.log("✅ Trabajo completado exitosamente");
        return "Éxito";
    } catch (error) {
        console.log("❌ Error durante el trabajo:", error.message);
        return "Fallo";
    } finally {
        // Este bloque SIEMPRE se ejecuta, haya o no error
        console.log("🧹 Limpiando recursos... (finally)");
    }
}

console.log("--- Caso sin error ---");
let resultado1 = realizarTrabajo(false);
console.log("Resultado:", resultado1);

console.log("\n--- Caso con error ---");
let resultado2 = realizarTrabajo(true);
console.log("Resultado:", resultado2);

console.log();

// ============================================
// 10. finally SE EJECUTA INCLUSO CON return
// ============================================

console.log("=== Ejemplo 10: finally con return ===\n");

function procesoConReturn() {
    try {
        console.log("Procesando...");
        return "Retorno desde try";
        // Aunque hacemos return, finally SE EJECUTARÁ antes de salir
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        // Esto se ejecuta ANTES de que la función retorne
        console.log("✅ finally ejecutado (incluso con return)");
    }

    // Esta línea nunca se ejecuta porque ya hicimos return
    console.log("Esta línea nunca se ejecuta");
}

let resultado = procesoConReturn();
console.log("Resultado:", resultado);
console.log();

// ============================================
// 11. RE-LANZAR ERRORES (Re-throwing)
// ============================================

console.log("=== Ejemplo 11: Re-lanzar errores ===\n");

function procesarDatos(datos) {
    try {
        // Simulamos procesamiento
        if (datos === null) {
            throw new TypeError("Los datos no pueden ser null");
        }

        if (datos === "error-catastrofico") {
            throw new Error("Error catastrófico del sistema");
        }

        console.log("✅ Datos procesados:", datos);
    } catch (error) {
        // Solo manejamos errores CONOCIDOS
        if (error instanceof TypeError) {
            console.log("❌ Error conocido manejado:", error.message);
        } else {
            // Errores DESCONOCIDOS se re-lanzan
            console.log("⚠️  Error desconocido, re-lanzando...");
            throw error; // <-- Re-lanzamos el error
        }
    } finally {
        console.log("🧹 Limpieza ejecutada");
    }
}

// Caso 1: Error conocido (TypeError)
try {
    procesarDatos(null);
} catch (error) {
    console.log("Este catch externo NO se ejecuta");
}

console.log();

// Caso 2: Error desconocido (Error genérico) - se re-lanza
try {
    procesarDatos("error-catastrofico");
} catch (error) {
    console.log("🚨 Catch externo capturó el error re-lanzado:", error.message);
}

console.log();

// ============================================
// 12. EJEMPLO PRÁCTICO: Dividir números
// ============================================

console.log("=== Ejemplo 12: División segura ===\n");

function dividir(a, b) {
    try {
        // Validaciones
        if (typeof a !== "number" || typeof b !== "number") {
            throw new TypeError("Ambos parámetros deben ser números");
        }

        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }

        const resultado = a / b;
        console.log(`✅ ${a} ÷ ${b} = ${resultado}`);
        return resultado;
    } catch (error) {
        console.log(`❌ Error en división: ${error.message}`);
        return null;
    } finally {
        console.log("  Operación de división finalizada");
    }
}

dividir(10, 2);    // ✅ Válido
dividir(10, 0);    // ❌ División por cero
dividir("10", 2);  // ❌ Tipo incorrecto

console.log();

// ============================================
// 13. EJEMPLO PRÁCTICO: Parsear JSON
// ============================================

console.log("=== Ejemplo 13: Parsear JSON de forma segura ===\n");

function parsearJSON(jsonString) {
    try {
        // JSON.parse puede lanzar un SyntaxError si el string no es JSON válido
        const objeto = JSON.parse(jsonString);
        console.log("✅ JSON parseado exitosamente:", objeto);
        return objeto;
    } catch (error) {
        // Si el JSON es inválido, capturamos el error
        console.log("❌ Error al parsear JSON:", error.message);
        return null;
    }
}

// Caso 1: JSON válido
parsearJSON('{"name": "Codeable", "type": "bootcamp"}');

// Caso 2: JSON inválido
parsearJSON('{name: "Codeable"}'); // Sintaxis incorrecta (las claves deben estar entre comillas)

// Caso 3: No es JSON
parsearJSON("Hola mundo");

console.log();

// ============================================
// 14. EJEMPLO PRÁCTICO: Leer archivo simulado
// ============================================

console.log("=== Ejemplo 14: Simulación de lectura de archivo ===\n");

function leerArchivo(nombreArchivo) {
    const archivosDisponibles = {
        "datos.txt": "Contenido del archivo datos.txt",
        "config.txt": "Contenido del archivo config.txt"
    };

    try {
        console.log(`📂 Abriendo archivo: ${nombreArchivo}`);

        // Simulamos verificación de existencia
        if (!archivosDisponibles[nombreArchivo]) {
            throw new Error(`El archivo '${nombreArchivo}' no existe`);
        }

        // Simulamos lectura del archivo
        const contenido = archivosDisponibles[nombreArchivo];
        console.log(`✅ Archivo leído: ${contenido}`);

        return contenido;
    } catch (error) {
        console.log(`❌ Error al leer archivo: ${error.message}`);
        return null;
    } finally {
        // Siempre cerramos el archivo (simulado)
        console.log(`🔒 Cerrando archivo: ${nombreArchivo}\n`);
    }
}

leerArchivo("datos.txt");      // ✅ Existe
leerArchivo("inexistente.txt"); // ❌ No existe

// ============================================
// 15. PATRONES DE USO DE finally
// ============================================

console.log("=== Ejemplo 15: Usos comunes de finally ===\n");

// Uso 1: Cerrar conexiones
function conectarBaseDatos() {
    console.log("🔌 Conectando a la base de datos...");

    try {
        // Simulamos operación en BD
        console.log("📊 Ejecutando consulta...");
        // throw new Error("Error de conexión"); // Descomenta para simular error
        console.log("✅ Consulta exitosa");
    } catch (error) {
        console.log("❌ Error en la BD:", error.message);
    } finally {
        // Siempre cerramos la conexión, haya o no error
        console.log("🔒 Cerrando conexión a la base de datos");
    }
}

conectarBaseDatos();

console.log();

// Uso 2: Limpieza de recursos
function procesarImagen() {
    console.log("🖼️  Cargando imagen en memoria...");

    try {
        console.log("🎨 Aplicando filtros...");
        // Procesamiento...
        console.log("✅ Imagen procesada");
    } catch (error) {
        console.log("❌ Error:", error.message);
    } finally {
        // Liberamos la memoria siempre
        console.log("🧹 Liberando memoria de la imagen");
    }
}

procesarImagen();

console.log();

// ============================================
// 16. EJEMPLO COMPLEJO: Sistema de login
// ============================================

console.log("=== Ejemplo 16: Sistema de login ===\n");

function iniciarSesion(usuario, contrasena) {
    const intentosMaximos = 3;
    let intentoActual = 0;

    try {
        console.log(`🔐 Iniciando sesión para: ${usuario}`);

        // Validación de parámetros
        if (!usuario || !contrasena) {
            throw new TypeError("Usuario y contraseña son requeridos");
        }

        // Simulación de verificación
        if (usuario !== "admin" || contrasena !== "1234") {
            intentoActual++;
            throw new Error(`Credenciales incorrectas (Intento ${intentoActual}/${intentosMaximos})`);
        }

        // Login exitoso
        console.log("✅ Sesión iniciada exitosamente");
        return { exito: true, token: "abc123xyz" };

    } catch (error) {
        console.log(`❌ ${error.name}: ${error.message}`);

        if (intentoActual >= intentosMaximos) {
            console.log("🚫 Cuenta bloqueada por múltiples intentos fallidos");
        }

        return { exito: false, error: error.message };
    } finally {
        console.log("📝 Registro de intento de login guardado");
        console.log();
    }
}

// Pruebas
iniciarSesion("admin", "1234");      // ✅ Correcto
iniciarSesion("admin", "incorrecto"); // ❌ Contraseña incorrecta
iniciarSesion("", "1234");           // ❌ Usuario vacío

// ============================================
// BUENAS PRÁCTICAS Y CONSEJOS
// ============================================

/*
✅ BUENAS PRÁCTICAS:

1. Sé específico con los tipos de error
   - Usa TypeError para problemas de tipo
   - Usa RangeError para valores fuera de rango
   - Usa Error genérico solo cuando no hay un tipo más específico

2. Proporciona mensajes de error claros
   - ❌ "Error en función"
   - ✅ "El parámetro 'edad' debe ser un número positivo"

3. No captures errores que no puedes manejar
   - Solo captura errores que puedas resolver o comunicar útilmente
   - Re-lanza errores desconocidos

4. Usa finally para limpieza de recursos
   - Cerrar archivos
   - Cerrar conexiones a BD
   - Liberar memoria
   - Detener temporizadores

5. No abuses de try...catch
   - No lo uses para controlar flujo normal del programa
   - Úsalo solo para situaciones excepcionales

6. try...catch en código asíncrono
   - En callbacks: Pon try...catch DENTRO del callback
   - En Promises: Usa .catch() o try...catch con async/await
   - En async/await: Envuelve await en try...catch

❌ ERRORES COMUNES:

1. Intentar capturar errores asíncronos con try...catch síncrono
2. No proporcionar información útil en mensajes de error
3. Capturar errores pero no hacer nada con ellos (catch vacío)
4. No limpiar recursos cuando ocurre un error
5. Usar try...catch para validaciones simples (usar if en su lugar)
*/

// ============================================
// EJERCICIOS PROPUESTOS
// ============================================

/*
EJERCICIO 1: Calculadora robusta
Crea una función calculadora(a, b, operacion) que:
- Valide que a y b sean números
- Valide que operacion sea una de: '+', '-', '*', '/'
- Maneje división por cero
- Use try...catch...finally apropiadamente

EJERCICIO 2: Validador de email
Crea una función validarEmail(email) que:
- Lance TypeError si email no es string
- Lance Error si email no contiene '@'
- Lance Error si email no tiene dominio después de '@'
- Retorne true si el email es válido

EJERCICIO 3: Constructor de usuario
Crea una función crearUsuario(datos) que:
- Valide que datos.nombre existe y es string
- Valide que datos.edad existe, es número y está entre 0-150
- Valide que datos.email es válido (reutiliza ejercicio 2)
- Use finally para registrar el intento de creación
- Retorne el objeto de usuario o null si hay error

EJERCICIO 4: Retry con errores
Crea una función ejecutarConReintentos(funcion, maxIntentos) que:
- Ejecute la función pasada como parámetro
- Si falla, reintente hasta maxIntentos veces
- Use try...catch para capturar errores
- Retorne el resultado o lance el error final si todos los intentos fallan
*/

console.log("=== FIN DE LOS EJEMPLOS ===");
console.log("💡 Tip: Modifica los ejemplos para experimentar");
console.log("💡 Ejecuta con: node manejo-errores.js");
