/***************************************************************************************************************
*  
*   Objetivo: Solicitaremos un número mientras no esté entre 1 y 9. 
*             Cuando ya esté entre 1 y 9, mostraremos la tabla de multiplicar de ese número
*
*   Entrada : numero     1 < numero < 9
*
*   Salida  : 1 x numero = numero
*             2 x numero = ....
*             3 x numero = ....
*                   ....
*             9 x numero = ....
*
*   Nota: Formatea la salida en el documento HTML empleando *         una tabla con 4 columnas y nueve filas
*
***************************************************************************************************************/

function leerEntero(msg,limiteInferior,limiteSuperior) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0||(parseInt(numero)<limiteInferior&&parseInt(numero)>limiteSuperior))
    return parseInt(numero)
}

let num=leerEntero("Dame número entre 1 y 9: ",1,9);
let salida="<table>"
for(let i=0;i<=10;i++)
    //document.write(i+" x "+num+" = "+(num*i)+"<br>");
    salida+=`<tr><td>${i}</td><td>x</td><td>${num}</td><td>=</td><td>${num*i}</td></tr>`
salida+="</table>"

document.write(salida)