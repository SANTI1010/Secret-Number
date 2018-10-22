
console.log("Adivina cuál es el número secreto");


var solucion = Math.floor(Math.random() * 100) + 1;

console.log("(La solucion es " + solucion + ")");

var seleccion = -1; 
var numeroIntentos = 0;


while ((seleccion !== solucion) && (numeroIntentos < 6)) {
    numeroIntentos++;
    seleccion = Number(prompt("Has realizado " + numeroIntentos + " intentos. Introduce un número:"));
    if (seleccion < solucion) {
        console.log("El número secreto es mayor que " + seleccion);
    } else if (seleccion > solucion) {
        console.log("El número secreto es menor que " + seleccion);
    }
}

if (seleccion === solucion) {
    console.log("¡Muy bien! La solucion era " + solucion);
    console.log("Has necesitado " + numeroIntentos + " intento(s)");
} else {
    console.log("Has perdido :( La solución era: " + solucion);
}