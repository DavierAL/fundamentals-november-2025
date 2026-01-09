function saludar() {
    return `Hola mi nombre es ${this.nombre}`
}

const persona1 = {
    nombre: "Simon",
    saludar: saludar
}

const persona2 = {
    nombre: "Micaela",
    saludar: saludar
}

console.log(persona1.saludar()); // Imprime: "Hola, mi nombre es Simon"
console.log(persona2.saludar()); // Imprime: "Hola, mi nombre es Micaela"