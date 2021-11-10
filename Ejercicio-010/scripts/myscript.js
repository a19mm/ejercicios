/***************************************************************************************************************
*  
*   Objetivo: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
*
*   Entrada : inicio, fin
*
*
*   Salida  : inicio², (inicio+1)², ..... (fin)²
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

let numero1=leerEntero("Dame el primer número: ")
let numero2=leerEntero("Dame el segundo número: ")

do{
    numero2=leerEntero("Dame el segundo número: ")
} while (numero2<numero1)

let salida="";
for(let i=numero1;i<=numero2;i++){
     salida+=Math.pow(i, 2)+" ";
}
document.write(salida);

// Con arrays
/*
   let numeros=Array.from({length:numero2-numero1+1},()=>i+numero1)
   document.write(numeros.map(elemento=>Math.pow(elemento,2)).join(", "))
*/

