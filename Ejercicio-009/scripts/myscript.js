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

let num;

do{
num=prompt("Dame número entre 1 y 9: ");
}while (num<=0 || num>10);

for(let i=0;i<=10;i++){
   
    document.write(i+" x "+num+" = "+(num*i)+"<br>");
}