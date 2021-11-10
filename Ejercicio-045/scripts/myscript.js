/***************************************************************************************************************
*  
*   Objetivo: Mostrar los elementos comunes y no comunes de dos arrays de longitud n
*             Crear tres funciones: 
*                1.- Devuelve un array con los elementos comunes en los arrays
*                1.- Devuelve en un array los elementos del
*                    primer array que están en el segundo array
*                2.- Devuelve en un array los elementos del
*                    primer array que no están en el segundo array
*       
*             Rellenar los arrays con númeos aleatorios entre -100 y 100
*
*   Entrada : La longitud del array (numero entero n)
*
*   Salida  : Los elementos del Array1
*             Los elementos del Array2
*             Los arrays tienen XX elementos comunes: los elementos comunes
*             En el primer array no hay los siguientes elementos del segundo array: ...
*             En el segundo array no hay los siguientes elementos del primer array: ....
*
***************************************************************************************************************/

function leerEntero(msg) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<1)
    return parseInt(numero)
}

function aleatorio(min,max){
    return Math.floor(min+(max-min)*Math.random())
}

// Con arrays y sus métodos
let n=leerEntero("Numero de elementos de los arrays: ")

const vector1=Array.from({length:n},()=>aleatorio(-100,100))
const vector2=Array.from({length:n},()=>aleatorio(-100,100))

// Elementos comunes a vector1 y vector2
const comunes=vector1.filter(elemento=>vector2.includes(elemento))

// Elementos de vector1 que no estan en vector2
const diferencia=vector1.filter(elemento=>!vector2.includes(elemento))

document.write(`<p>Los elementos de vector1 son: ${vector1.join('')}</p>`)
document.write(`<p>Los elementos de vector2 son: ${vector2.join('')}</p>`)
document.write(`<p>Los elementos comunes de vector1 y vector2 son: ${comunes.join('')}</p>`)
document.write(`<p>Los elementos de vector1 que no estan en vector2 son: ${diferencia.join('')}</p>`)




