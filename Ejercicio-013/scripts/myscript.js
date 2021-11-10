/***************************************************************************************************************
*  
*   Objetivo: Se solicita un número entero n entre 1 y 20 al usuario. Se mostrará una pirámide de la forma:
*
*               1
*               2 2
*               3 3 3
*               4 4 4 4
*                 ...
*               n n n n n n n (n veces)
*
*   Entrada : numero entero n
*
*
*   Salida  : La pirámide mostrada en el objetivo del ejercicio
*
*
***************************************************************************************************************/

function leerEntero(msg,limiteInferior) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0||parseInt(numero)<limiteInferior)
    return parseInt(numero)
}

let numero=leerEntero("Dame un número entero: ",1)
let salida="";

for(let i=1;i<=numero;i++){
    salida+="<p>";
    for(let j=1;j<=i;j++)
        salida+=i+" "; 
    salida+="</p>"
}
document.write(salida)

// Con arrays
/*
let salida
for(let i=1;i<=numero;i++)
   salida+="<p>"+Array.from({length:i},function () { return this.length}).join(" ")+"</p>"
document.write(salida)
*/