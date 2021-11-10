/***************************************************************************************************************
*  
*   Objetivo: Determinar si un número entero introducido es par o impar
*             Crear para ello una función
*
*   Entrada : n
*
*   Salida  : El número n es (par|impar)
*
***************************************************************************************************************/
let n=prompt("di num");

function parimpar(n){
    if(n%2==0){
        document.write(n+" es par");
    }else{
        document.write(n+" no es par");
    }
}
parimpar(n);

const par=x=>x%2===0
const impar=x=>x%2===1