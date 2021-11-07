/***************************************************************************************************************
*  
*   Objetivo: Solicitamos el número de caramelos y el número de niños, y calcule
*             cuantos caramelos tocan por niño y cuantos sobran. 
*
*   Entrada : nCaramelos, nPeques
*
*
*   Salida  : Debe mostrar el resultado por consola de depuración con un mensaje como
*                   El número de caramelos por niño es: XXXX
*                   El número de caramelos que sobran es: YYYY
*
***************************************************************************************************************/
let caramelos=parseInt(prompt("Dime el número de caramelos"));
let peques=parseInt(prompt("Dime el número de niños"));
let sobran=caramelos%peques;
let caen=caramelos/peques;
document.write("Cada niño recibe "+caen+" caramelos<br>");
document.write("En total sobran "+sobran+" caramelos.");
