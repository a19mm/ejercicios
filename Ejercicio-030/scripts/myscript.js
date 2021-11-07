/***************************************************************************************************************
*  
*   Objetivo: Determinar cuantas vocales mayúsculas hay en una cadena introducida por el usuario y muestre 
*             el resultado por consola.
*
*   Entrada : cadena
*
*
*   Salida  : número de vocales mayúsculas
*
*
***************************************************************************************************************/
let cadena=prompt("Introduce una cadena: ");
let vocales="AEIOU"

let resultado=cadena.split('').map(el=>vocales.includes(el)?1:0).reduce((anterior,siguiente)=>anterior+siguiente);
document.write("La cadena "+cadena+" tiene "+resultado+" vocales mayúsculas")