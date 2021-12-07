let nombre;
let opcion;

nombre = prompt("Hola cuál es tu nombre?: ");
opcion = prompt("Te gustan los gatitos?, escribe 'si' o 'no'");

console.log( opcion.toLowerCase() == 'si')
// condición booleana se refiere a dos opciones VERDADERO O FALSO (TRUE O FALSE)

//  no == si es Falso (false)
//  si == si es veradero (true)

let velocidad = 100; // asignacion =
velocidad == 200; // comparacion ==

if ( opcion.toLowerCase() == 'si') {
    // evalua si la condición es verdadera
    alert('Hola ' + nombre + ' a mi también me gustan los gatitos')
} else {
    // si la condición es falsa
    alert('Hola ' + nombre + 'con lo que has escrito, me doy cuenta que no te gustan los gatitos')
}










































// // var, let, const
// let nombre = "Miguel";
// nombre = "Andres";
// const PI = 3.14;