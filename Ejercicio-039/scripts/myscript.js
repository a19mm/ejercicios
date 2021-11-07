/***************************************************************************************************************
*  
*   Objetivo: Determinar en un texto el número de palabras, la primera palabra y la última
*
*   Entrada : una cadena
*
*   Salida  : Se muestra el texto(cadena) introducido por el usuario
*             Número de palabras: XXX
*             Primera palabra: YYYYY
*             Última palabra: ZZZZZ
*             Palabras ordenadas de la a a la z: AAA BBBB CCCC DDDD
*             Palabras ordenadas de la z a la a: ZZZ YYYY WWWW 
*
***************************************************************************************************************/
let cadena=prompt("Introduce una cadena: ");
let palabras =cadena.split(" ").length;

let array=cadena.split(" ");
let uno=array[0];
let dos=array[(array.length-1)];
array.sort();
document.write("Número de palabras: "+palabras+"<br>");
document.write("Primera palabra: "+uno);
document.write("<br>Última palabra: "+dos)
document.write("<br>Palabras ordenadas alfabéticamente: "+array);
