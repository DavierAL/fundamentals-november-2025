const nota = 18;
if (nota > 15) {
    console.log("Alumno regular")
}

//Operador ternario
const estaLloviendo = true ? "Si esta lloviendo" : "No esta lloviendo";
console.log(estaLloviendo);

// Switch case
const diaSemana = 1
if (diaSemana === 1) {
    console.log("Lunes")
} else if (diaSemana === 2) {
    console.log("Martes")
} else if (diaSemana === 3) {
    console.log("Miercoles")
} else if (diaSemana);

switch (diaSemana) {
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;
    case 7:
        console.log("Domingo")
        break;
    case 8:
        console.log("Numero incorrecto")
        break;
}

function validarEdad(edad) {
    console.log(edad)
    if (!isNaN(edad)) {
        if (edad >= 18) {
            return "Es mayor de edad"
        } else {
            return "Es menor de edad"
        }
    } else {
        alert("Ingresa un numero correcto")
    }

}

const edad = parseInt(prompt("Ingresa tu edad"))
alert(validarEdad(edad))

