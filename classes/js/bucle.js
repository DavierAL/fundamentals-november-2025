console.log("==========For==============")
const numero = 20;
for (let i = 0; i <= numero; i++) {
    if (i % 2 == !0) {
        continue
    } else {
        console.log("es par")
    }
}
console.log("===========While===============")
//While
const number = 20;
let index = 0;

while (index <= number) {
    if (index % 2 == 0) {
        console.log(`Index es par ${index}`)
    }
    index++;
}
console.log("============Do While===============")
//Do While
const num = 20;
let a = 0;

while (a <= num) {
    if (index % 2 == 0) {
        console.log(`Index entro una vez ${a}`)
    }
    a++;
}


let n = parseInt(prompt("Ingrese un numero entre el 5 al 10"))
while (n <= 5 || n >= 10){
    n = parseInt(prompt("numero invalido, Ingresa entre 5 al 10"))
}
