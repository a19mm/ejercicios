/***************************************************************************************************************
*  
*   Objetivo: Imprimir en la consola de depuración la suma de los números enteros entre 1 y n, donde n es un dato 
*             solicitado al usuario. Comprobar si esa suma coincide con n*(n+1)/2
*
*   Entrada : n
*
*   Salida  : La suma de 1+2+3+...n es XXXX
*
***************************************************************************************************************/

let numero=parseInt(prompt("di numero"));
document.write("La suma de: ");
let suma=0;
for(let i=1;i<=numero;i++){
    document.write(i+", ");
suma+=i;
}
document.write(" es "+suma);

let resultado= numero*(numero+1)/2;
if(suma == resultado){
    document.write("<br>Coincide. "+resultado);
}else{
    document.write("non coincide");
}

// Con arrays
/*
function leerEntero(msg) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0)
    return parseInt(numero)
}

let n=leerEntero("Sumar los numeros entre 1 y ....: ")
(Array.from({length:n},()=>i+1).reduce((anterior,actual)=>anterior+actual)=== n*(n+1)/2)?document.write("<br>Coincide. "+resultado):document.write("non coincide");
*/