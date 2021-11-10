/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros desde 0 hasta ese numero
*
*
*   Entrada : numero entero n
*
*
*   Salida  : 0,1,2,3,4,5,....,n
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

//let numero=parseInt(prompt("número: "))

let numero=leerEntero("Número: ")

let salida=""
for(let i=0;i<=numero;i++){ 
    salida+=i+" "
}

document.write(salida)

