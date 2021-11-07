/***************************************************************************************************************
*  
*   Objetivo: Solicita un texto y una palabra.
*
*
*   Entrada : cadenas de texto: texto, palabra
*
*
*   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
*
*
***************************************************************************************************************/
let cadena=prompt("dime cadena");
let palabra =prompt("ahora palabra");


let indice=cadena.indexOf(palabra);
document.write(indice);

 