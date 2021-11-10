/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros pares desde 1 hasta 
*             ese numero. Realizarlo con los tres tipos de bucles.
*
*
*   Entrada : numero entero n
*
*
*   Salida  : 2,4,6,....,n   
*
*   Notas: La salida finalizará en n o n-1 dependiendo de si n es par o impar
*
***************************************************************************************************************/

function leerEntero(msg) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0)
    return parseInt(numero)
}

//let num=parseInt(prompt("Dime el número: "));

let numero=leerEntero("Dime el número: ")

for(let i=0;i<=num;i+=2){
    // Ou ben: if(i%2!=0) continue
    //salida +=i+" " 
        document.write(i+" ");
}

// Con while
/*
let i=2
while (i<=numero) {
   document.write(`${i} `)
   i+=2
}
*/

//Con do...while
/*
let i=2
if (numero>=2) {
    do {
        document.write(`${i} `)
        i+=2
    }  while (i<=numero)
}
*/