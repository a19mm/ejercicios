/***************************************************************************************************************
*  
*   Objetivo: Determinar si un número es o no primo empleando una función
*             Un número n es primo si sólo es divisible por 1 y por n
*
*   Entrada : numero entero
*
*   Salida  : El numero n (es|no es) primo
*
***************************************************************************************************************/

let numero=parseInt(prompt("Di un número: "));

let contador=0;
for(let i=1;i<=numero;i++){
    if (numero%i==0)
       contador++
}

if (contador===2)
    document.write("es primo")

// Con arrays y sus métodos
function esPrimo(n) {
    let numeros=Array.from({length:numero},()=>i+1)
    return numeros.filter((elemento)=>n%elemento===0).length===2
}
