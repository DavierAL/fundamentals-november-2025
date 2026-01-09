function farewell() {
    console.log("Adios!")
}

const person = {
    name: "Davier",
    age: 23,
    isDev: true,
    address: {
        country: "Venezuela",
        state: "Aragua"
    },
    greet: function () {
        console.log("Hola");
    },

    farewell: farewell,
}
    ;
console.log(person.name);
person.greet;

const car = {
    color: "blue",
    accelerate() {
        console.log(true);
    }
};


const calculadara = {

    validar(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            console.error("Error: Ambos argumentos deben ser números.");
            return false;
        }
        return true;
    },
    suma(a, b) {
        
        if (this.validar(a, b)) {
            return a + b;
        }
    },

    resta(a, b) {
        return a - b
    },

    multiplica(a, b) {
        return a * b
    },

    divide(a, b) {
        return a / b
    }
}

console.log(calculadara.suma("s", 5));