/***************************************************************************************************************
*  
*   Objetivo: Mostrar la serie de fibonacci hasta el número indicado por el usuario
*             Cada elemento de la serie se calcula sumando los dos anteriores. Se empieza con 0 y 1
*
*   Entrada : n
*
*
*   Salida  : 0,1,2,3,5,8,13,....
*
*
***************************************************************************************************************/

function leerEntero(msg) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0)
    return parseInt(numero)
}

// Iterativa
let numero=leerEntero("Dame el número de secuencia: ")
let a=0
let b=1
let fibonacci
let contador=2

let salida=""
if (numero===0)
   salida="0"
else {
    if (numero===1) {
        salida="0,1"
    } else {
        salida="0,1"
        while (contador<numero) {
            fibonacci=a+b
            a=b
            b=fibonacci
            salida+=fibonacci
            contador++    
        }
    }
}

document.write(salida)

// Recursiva ???