//Implementa la función calcularDescuento que recibe un precio precioOriginal y un código de descuento codigoDescuento. Si el código es "DESCUENTO10", el descuento es del 10%. Si el código es "DESCUENTO20", el descuento es del 20%. Si no se proporciona un código válido, no se aplica ningún descuento. La función debe retornar el precio después del descuento.

function calcularDescuento(precioOriginal, codigoDescuento) {
    switch (codigoDescuento) {
        case "DESCUENTO10":
            return precioOriginal * 0.9;
        case "DESCUENTO20":
            return precioOriginal * 0.8;
        default:
            return precioOriginal;
    }
}

console.log(calcularDescuento(1000, "DESCUENTO10")); // 900
console.log(calcularDescuento(1000, "DESCUENTO20")); // 800
console.log(calcularDescuento(1000, "INVALIDO"));    // 1000


//Implementa la función esBisiesto que recibe un año y retorna true si el año es bisiesto y false si no es bisiesto.

//Un año es bisiesto si es divisible entre 4, excepto aquellos divisibles entre 100. Pero sí son bisiestos si son divisibles entre 400 (a pesar de ser divisibles entre 100).

function esBisiesto(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(esBisiesto(2020)); // true
console.log(esBisiesto(2012)); // true
console.log(esBisiesto(2015)); // false


//Implementa la función diasDelMes que recibe un número del 1 al 12 que representa un mes (enero es 1, febrero es 2, etc.) y un año. La función debe retornar la cantidad de días de ese mes, teniendo en cuenta si es un año bisiesto para febrero. (en los años bisiestos febrero tiene 29 días en lugar de 28).

function diasDelMes(mes, year) {
    switch (mes) {
        case 1:
            return 31;
        case 2:
            return esBisiesto(year) ? 29 : 28;
        case 3:
            return 31;
        case 4:
            return 30;
        case 5:
            return 31;
        case 6:
            return 30;
        case 7:
            return 31;
        case 8:
            return 31;
        case 9:
            return 30;
        case 10:
            return 31;
        case 11:
            return 30;
        case 12:
            return 31;
        default:
            return "Mes inválido";
    }
}

console.log(diasDelMes(2, 2020)); // 29
console.log(diasDelMes(2, 2021)); // 28
console.log(diasDelMes(4, 2020)); // 30