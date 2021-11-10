/***************************************************************************************************************
*  
*   Objetivo: Generar los n primeros números perfectos
*
*
*   Entrada : número entero n
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

function leerEntero(msg) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<1)
    return parseInt(numero)
}

// Con arrays y sus métodos
function esPerfecto(n) {
    let numeros=Array.from({length:numero-1},()=>i+1)
    return numeros.filter(elemento=>n%elemento===0).reduce((anterior,actual)=>anterior+actual)===n
}

let n=leerEntero("Numeros perfectos hasta el...: ")
const numerosPerfectos=Array.from({length:n},()=>i+1).filter(elemento=>esPerfecto(elemento))
document.write(`<p>Los números perfectos hasta el ${n} son:</p><p>${numerosPerfectos.join(" ")}</p>`)