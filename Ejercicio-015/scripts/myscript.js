/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario una cadena de texto y mostrar el número de vocales
*
*
*   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
*
*
*   Salida  : Número de vocales (p.j: 8)
*
*
***************************************************************************************************************/
let cadena=prompt("Dime cadena de texto")
let vocales="aeiou"

let resultado=cadena.split('').map(el=>vocales.includes(el)?1:0).reduce((anterior,siguiente)=>anterior+siguiente);
//map devolve novo array cos elementos transformados
document.write("Número de vocales: "+resultado);