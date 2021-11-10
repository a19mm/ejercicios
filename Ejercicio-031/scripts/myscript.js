/***************************************************************************************************************
*  
*   Objetivo: Calcula la suma de los pares y de los impares de elementos de n elementos de un array generados
*             aleatoriamente entre 1 y 10.
*
*
*   Entrada : n
*
*
*   Salida  : Los elementos pares del array son: x1, x2, x3, ...
*             Los elementos impares del array son: x1, x2, x3, ...
*             La suma de los elementos pares del array es: XXXX
*             La suma de los elementos impares del array es: YYYY
*
***************************************************************************************************************/

function leerEntero(msg) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0)
    return parseInt(numero)
}

function aleatorio(min,max){
    return Math.floor(min+(max-min)*Math.random())
}

let n=leerEntero("Número de elemntos aleatorios: ")

const vector=Array.from({length:n},()=>aleatorio(1,10))
let pares=vector.filter(elemento=>elemento%2===0)
let impares=vector.filter(elemento=>elemento%2===1)
let sumaPares=pares.reduce((anterior,actual)=>anterior+actual)
let sumaImpares=impares.reduce((anterior,actual)=>anterior+actual)

document.write(`Los elementos del array son: ${vector.join(',')}`)
document.write(`Los elementos pares del array son: ${pares.join(',')}`)
document.write(`Los elementos impares del array son: ${impares.join(',')}`)
document.write(`La suma de los elementos pares del array son: ${sumaPares}`)
document.write(`La suma de los elementos impares del array son: ${psumaImpares}`)
