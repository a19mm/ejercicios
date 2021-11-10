/***************************************************************************************************************
*  
*   Objetivo: Determinar si un número es perfecto o no a través de una función
*             Un número es perfecto cuando el número es igual a la suma de sus divisores.
*
*   Entrada : entero n
*
*
*   Salida  : El número n (es|no es) perfecto !
*
*
***************************************************************************************************************/
let n=parseInt(prompt("di numero"));
let suma=0;
for(let i=1;i<n;i++){
    if (n%i==0)
    suma=suma+i;
}
if (suma==n){
    document.write("Es perfecto")
}
else{
    document.write("No es perfecto")
}

/*
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

let n=leerEntero("Numero: ")
let salida
if (esPerfecto(n))
    salida=`El numero ${n} es perfecto`
else
    salida=`El numero ${n} no es perfecto`

document.write(salida)
*/