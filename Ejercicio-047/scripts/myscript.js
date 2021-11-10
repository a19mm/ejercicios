/***************************************************************************************************************
*  
*   Objetivo: Sumar dos matrices bidimensionales
*
*
*
*   Entrada : 
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

function aleatorio(min,max){
    return Math.floor(min+(max-min)*Math.random())
}

function representaMatriz(matriz) {
   // Falta por comprobar
   let salida="<table border>"
   matriz.forEach(fila=>{
       salida+="<tr>"
       fila.forEach(col=>{
           salida+=`<td>${col}</td>`
       })
       salida+="</tr>"
   })
   salida+="</table>"
   return salida
}

let filas=leerEntero("Numero de filas: ")
let columnas=leerEntero("Numero de columnas: ")

let matriz1=Array.from({length:filas},()=>Array.from({length:columnas},()=>aleatorio(-100,100)));
let matriz2=Array.from({length:filas},()=>Array.from({length:columnas},()=>aleatorio(-100,100)));

let suma=matriz1.map((fila,i)=>fila.map((col,j)=>col+matriz2[i][j]))

document.write(`<p>La suma de las matrices</p>`)
document.write(`<p>${representaMatriz(matriz1)}</p>`)
document.write(`<p>y</p>`)
document.write(`<p>${representaMatriz(matriz2)}</p>`)
document.write(`<p>es:</p>`)
document.write(`<p>${representaMatriz(suma)}</p>`)