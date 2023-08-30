/*
Realice un programa que permita calcular el volumen de un cubo conociendo la longitud de
sus tres lados (no tienen que ser iguales).
VC = L * L * L

Ahora realice el programa para que el usuario pueda ingresar números con decimales, la
respuesta debe ser mostrada con 3 decimales.
*/


//entrada de datos
/*
let number1 = parseFloat(prompt("Ingrese el valor de la primera variable:"));
let number2 = parseFloat(prompt("Ingrese el valor de la segunda variable:"));
let number3 = parseFloat(prompt("Ingrese el valor de la tercer variable:"));

let sum = number1 * number2 * number3;

console.log(`la multiplicacion de nuestras 3 variables es: ${sum}`);
*/

/*Realice un programa que permita calcular el área de un triángulo conociendo su base y su
altura.
AT = ( b * h ) / 2
Ahora realice el programa para que el usuario pueda ingresar números con decimales, la
respuesta debe ser mostrada con 3 decimales.*/

/*3. Realice un programa que permita calcular la altura de un cono conociendo el volumen y el
radio de su base.

vcono = 4;
R= 5
Vcono = ( 1 / 3 ) * ( PI * r^2 * h )
Entonces, al despejar la altura "h" de la formula tendríamos que:
h = ( 3 * Vcono ) / ( PI * r^2 )*/

/*let vcono = parseFloat(prompt("Ingrese el valor del volumen del cono:"));
let radio = parseFloat(prompt("Ingrese el valor del radio:"));
const PI = 3.1416;

let altura = ( 3 * vcono ) / ( PI * radio^2 );

document.write(`La altiura es:${altura}`)*/

/*
Realice un programa que, dada la edad de tres personas, calcule el promedio de edades
*/


//EL metodo toFixed nos da la oportunidad de redeondear un resultado ejemplo
/*let edad1 = parseFloat(prompt("Ingrese la edad de la primera persona:"));
let edad2 = parseFloat(prompt("Ingrese la edad de la segunda persona:"));
let edad3 = parseFloat(prompt("Ingrese la edad de la tercera persona::"));

let promedio = (edad1 + edad2 + edad3)/3;

document.write(`EL promedio de las edades es:${promedio.toFixed(2)}`);*/





/*Convertir una temperatura dada en grados Celsius a grados Fahrenheit, sabiendo que:
F = ( 9 / 5 ) * c + 32*/


let number1 = parseInt(prompt("Ingrese un numero de 3 cifras para invertir:"));

//Operaciones
let x=Math.floor(number1/100); //3
let a=number1%100;//21
let y=Math.floor(a/10);//2
let ra=a%10;//1

let numberInvertido = ra * 100 + y * 10 + x; //123

document.write(`EL numero invertido es: ${numberInvertido}`);
