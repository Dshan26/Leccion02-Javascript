/*1. Realice un programa que permita calcular el número de pulsaciones que debe tener una
persona por cada 10 segundos de ejercicio aeróbico; la fórmula que se aplica cuando el sexo
es femenino es:
• Núm. pulsaciones = (220 - edad) / 10
Y si el sexo es masculino:
• Núm. pulsaciones = (210 - edad) / 10*/

let edad=parseInt(prompt("Ingrese su edad: "))
let sexo=prompt("Por favor ingrese su sexo: ")

if(sexo === 'femenino' || sexo=== 'Femenino'){
    let pulsaciones = (220 - edad) / 10;
    document.write(`Su numero de pulsaciones es:${pulsaciones}`)
}else if(sexo === 'masculino' || sexo=== 'Masculino'){
    let pulsaciones2 = (210 - edad) / 10;
    document.write(`Su numero de pulsaciones es:${pulsaciones2}`)
}