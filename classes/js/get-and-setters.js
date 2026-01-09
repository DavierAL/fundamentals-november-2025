const persona = {
  nombre: "Simon",
  apellido: "Grau",
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  }
};
 
console.log(persona.nombreCompleto);  // Simon Grau