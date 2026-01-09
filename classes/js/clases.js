// ============================================
// CLASES EN JAVASCRIPT
// ============================================

// Las clases en JavaScript son plantillas para crear objetos.
// Fueron introducidas en ES6 (ECMAScript 2015) como una sintaxis más clara
// para trabajar con programación orientada a objetos.

console.log("=== CLASES EN JAVASCRIPT ===\n");

// ============================================
// 1. CLASE BÁSICA - ANIMAL
// ============================================

// Definimos una clase usando la palabra clave 'class'
class Animal {
    // El constructor es un método especial que se ejecuta cuando creamos una nueva instancia
    // Es donde inicializamos las propiedades del objeto
    constructor(nombre, edad, tipo) {
        this.nombre = nombre;  // 'this' se refiere a la instancia actual
        this.edad = edad;
        this.tipo = tipo;
    }

    // Métodos de la clase - funciones que pueden ejecutar las instancias
    hacerSonido() {
        console.log(`${this.nombre} hace un sonido`);
    }

    // Método que retorna información del animal
    obtenerInfo() {
        return `${this.nombre} es un ${this.tipo} de ${this.edad} años`;
    }

    // Método para celebrar cumpleaños
    cumplirAnios() {
        this.edad++;
        console.log(`¡Feliz cumpleaños ${this.nombre}! Ahora tiene ${this.edad} años`);
    }
}

// ============================================
// 2. CREAR INSTANCIAS (Objetos a partir de la clase)
// ============================================

console.log("--- Creando Instancias de Animal ---");

// Creamos instancias usando la palabra clave 'new'
const animal1 = new Animal("Rex", 5, "perro");
const animal2 = new Animal("Miau", 3, "gato");
const animal3 = new Animal("Pelusa", 2, "conejo");

// Cada instancia es un objeto independiente con sus propias propiedades
console.log(animal1.obtenerInfo());  // Rex es un perro de 5 años
console.log(animal2.obtenerInfo());  // Miau es un gato de 3 años
console.log(animal3.obtenerInfo());  // Pelusa es un conejo de 2 años

animal1.hacerSonido();  // Rex hace un sonido
animal2.cumplirAnios(); // ¡Feliz cumpleaños Miau! Ahora tiene 4 años

console.log("\n");

// ============================================
// 3. HERENCIA - CLASES QUE EXTIENDEN OTRAS CLASES
// ============================================

// La herencia permite crear clases basadas en otras clases
// La clase hija hereda todas las propiedades y métodos de la clase padre

console.log("--- Herencia con Animales Específicos ---");

// Clase Perro que hereda de Animal
class Perro extends Animal {
    constructor(nombre, edad, raza) {
        // 'super' llama al constructor de la clase padre
        super(nombre, edad, "perro");
        this.raza = raza;  // Propiedad adicional específica de Perro
    }

    // Sobrescribimos el método hacerSonido (polimorfismo)
    hacerSonido() {
        console.log(`${this.nombre} dice: ¡Guau guau!`);
    }

    // Método específico de la clase Perro
    traerPelota() {
        console.log(`${this.nombre} (${this.raza}) está trayendo la pelota`);
    }
}

// Clase Gato que hereda de Animal
class Gato extends Animal {
    constructor(nombre, edad, colorPelaje) {
        super(nombre, edad, "gato");
        this.colorPelaje = colorPelaje;
    }

    // Sobrescribimos hacerSonido
    hacerSonido() {
        console.log(`${this.nombre} dice: ¡Miau miau!`);
    }

    // Método específico de Gato
    ronronear() {
        console.log(`${this.nombre} está ronroneando... purrr purrr`);
    }
}

// Creamos instancias de las clases heredadas
const perro1 = new Perro("Firulais", 4, "Golden Retriever");
const perro2 = new Perro("Max", 2, "Bulldog");
const gato1 = new Gato("Luna", 3, "Blanco");
const gato2 = new Gato("Simba", 5, "Naranja");

// Usamos métodos heredados
console.log(perro1.obtenerInfo());  // Heredado de Animal
perro1.hacerSonido();               // Sobrescrito en Perro
perro1.traerPelota();               // Específico de Perro

console.log(gato1.obtenerInfo());   // Heredado de Animal
gato1.hacerSonido();                // Sobrescrito en Gato
gato1.ronronear();                  // Específico de Gato

console.log("\n");

// ============================================
// 4. CLASES CON AUTOS - EJEMPLO COMPLETO
// ============================================

console.log("--- Clases con Autos ---");

class Auto {
    // Propiedades privadas (usando #) - solo accesibles dentro de la clase
    #kilometraje = 0;

    constructor(marca, modelo, anio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
        this.encendido = false;  // Estado inicial
    }

    // Métodos para encender y apagar
    encender() {
        if (!this.encendido) {
            this.encendido = true;
            console.log(`${this.marca} ${this.modelo} está encendido`);
        } else {
            console.log(`${this.marca} ${this.modelo} ya está encendido`);
        }
    }

    apagar() {
        if (this.encendido) {
            this.encendido = false;
            console.log(`${this.marca} ${this.modelo} está apagado`);
        } else {
            console.log(`${this.marca} ${this.modelo} ya está apagado`);
        }
    }

    // Método para conducir (incrementa kilometraje privado)
    conducir(km) {
        if (this.encendido) {
            this.#kilometraje += km;
            console.log(`Has conducido ${km} km. Kilometraje total: ${this.#kilometraje} km`);
        } else {
            console.log("¡Primero debes encender el auto!");
        }
    }

    // Getter - permite acceder a propiedades privadas de forma controlada
    get kilometraje() {
        return this.#kilometraje;
    }

    // Setter - permite modificar propiedades de forma controlada (con validación)
    set nuevoColor(color) {
        console.log(`Cambiando color de ${this.color} a ${color}`);
        this.color = color;
    }

    // Método estático - se llama en la clase, no en instancias
    static compararAnios(auto1, auto2) {
        if (auto1.anio > auto2.anio) {
            return `${auto1.marca} ${auto1.modelo} es más nuevo`;
        } else if (auto1.anio < auto2.anio) {
            return `${auto2.marca} ${auto2.modelo} es más nuevo`;
        } else {
            return "Ambos autos son del mismo año";
        }
    }

    // Método normal que retorna información
    obtenerDetalles() {
        return `${this.marca} ${this.modelo} (${this.anio}) - Color: ${this.color}`;
    }
}

// Creamos instancias de Auto
const auto1 = new Auto("Toyota", "Corolla", 2020, "Rojo");
const auto2 = new Auto("Honda", "Civic", 2022, "Azul");
const auto3 = new Auto("Ford", "Mustang", 2023, "Negro");

console.log(auto1.obtenerDetalles());
console.log(auto2.obtenerDetalles());

// Probamos los métodos
auto1.encender();
auto1.conducir(50);
auto1.conducir(30);
console.log(`Kilometraje de ${auto1.marca}: ${auto1.kilometraje} km`);  // Usando getter

// Usamos setter para cambiar color
auto1.nuevoColor = "Verde";
console.log(auto1.obtenerDetalles());

// Método estático - se llama directamente en la clase, NO en instancias
console.log(Auto.compararAnios(auto1, auto2));
console.log(Auto.compararAnios(auto2, auto3));

console.log("\n");

// ============================================
// 5. HERENCIA CON AUTOS - AUTO ELÉCTRICO
// ============================================

console.log("--- Auto Eléctrico (Herencia) ---");

class AutoElectrico extends Auto {
    constructor(marca, modelo, anio, color, capacidadBateria) {
        super(marca, modelo, anio, color);
        this.capacidadBateria = capacidadBateria;  // kWh
        this.nivelBateria = 100;  // Porcentaje
    }

    // Sobrescribimos el método conducir para consumir batería
    conducir(km) {
        if (this.encendido) {
            const consumo = km * 0.2;  // 0.2% de batería por km
            if (this.nivelBateria >= consumo) {
                super.conducir(km);  // Llamamos al método padre
                this.nivelBateria -= consumo;
                console.log(`Batería restante: ${this.nivelBateria.toFixed(1)}%`);
            } else {
                console.log("¡Batería insuficiente! Necesitas recargar");
            }
        } else {
            console.log("¡Primero debes encender el auto!");
        }
    }

    // Método específico de auto eléctrico
    recargar() {
        console.log("Recargando batería...");
        this.nivelBateria = 100;
        console.log("Batería cargada al 100%");
    }

    // Sobrescribimos obtenerDetalles para incluir info de batería
    obtenerDetalles() {
        return `${super.obtenerDetalles()} - Batería: ${this.capacidadBateria}kWh (${this.nivelBateria}%)`;
    }
}

const tesla = new AutoElectrico("Tesla", "Model 3", 2024, "Blanco", 75);
console.log(tesla.obtenerDetalles());
tesla.encender();
tesla.conducir(100);
tesla.conducir(200);
tesla.conducir(300);  // Aquí no tendrá batería suficiente
tesla.recargar();
tesla.conducir(100);  // Ahora sí funcionará

console.log("\n");

// ============================================
// 6. RESUMEN DE CONCEPTOS
// ============================================

console.log("--- RESUMEN DE CONCEPTOS ---");
console.log(`
1. CLASE: Plantilla para crear objetos (Animal, Auto, etc.)

2. INSTANCIA: Objeto creado a partir de una clase usando 'new'
   Ejemplo: const perro = new Perro("Max", 3, "Bulldog");

3. CONSTRUCTOR: Método especial que inicializa las propiedades
   Se ejecuta automáticamente al crear una instancia

4. THIS: Referencia al objeto actual dentro de la clase

5. MÉTODOS: Funciones definidas dentro de la clase
   Ejemplo: hacerSonido(), conducir(), etc.

6. HERENCIA (extends): Permite que una clase herede de otra
   Ejemplo: class Perro extends Animal

7. SUPER: Llama al constructor o métodos de la clase padre
   Ejemplo: super(nombre, edad, "perro");

8. POLIMORFISMO: Sobrescribir métodos heredados
   Ejemplo: hacerSonido() en Perro vs Animal

9. GETTERS/SETTERS: Controlan el acceso a propiedades
   get kilometraje() {...}
   set nuevoColor(color) {...}

10. MÉTODOS ESTÁTICOS: Se llaman en la clase, no en instancias
    static compararAnios(auto1, auto2) {...}
    Auto.compararAnios(auto1, auto2);

11. PROPIEDADES PRIVADAS (#): Solo accesibles dentro de la clase
    #kilometraje = 0;
`);

console.log("=== FIN DEL TUTORIAL ===");
