/***************************************************************************************************************
*  
*   Objetivo: Generar los primeros n números primos 
*
*
*   Entrada : número entero n
*
*
*   Salida  : 1 2 3 5 7 ....
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
function esPrimo(n) {
    let numeros=Array.from({length:numero},()=>i+1)
    return numeros.filter(elemento=>n%elemento===0).length===2
}

let n=leerEntero("Numeros primos hasta el...: ")
const numerosPrimos=Array.from({length:n},()=>i+1).filter((elemento)=>esPrimo(elemento))
document.write(`<p>Los números primos hasta el ${n} son:</p><p>${numerosPrimos.join(" ")}</p>`)