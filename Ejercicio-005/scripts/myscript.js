/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página dos números enteros y mostrar en la página HTML el resultado de 
*             sumarlos, restarlos, multiplicarlos y dividirlos
*
*
*   Entrada : Dos números enteros: numero1, numero2
*
*
*   Salida  : La suma de numero1 y numero2 es: numero1+numero2 
*             La resta de numero1 y numero2 es: numero1-numero2 
*             El producto de numero1 y numero2 es: numero1*numero2 
*             La division de numero1 entre numero2 es: numero1/numero2 
*
*   Notas   : Ten en cuenta que la división entre los números puede dar un número con muchos decimales
*             ¿Cómo podemos limitar el número de decimales que se mostrarán?
*
***************************************************************************************************************/
// let num1=parseInt(prompt("Dame el primer número"))
// let num2=parseInt(prompt("Dame el segundo "))
// document.write("La suma de "+num1+"y "+num2+" es "+(num1+num2)) 
// document.write("La resta de "+num1+"y "+num2+" es "+(num1-num2))
// document.write("La multiplicación de "+num1+"y "+num2+" es "+(num1*num2))

//

let a=prompt("Di número 1")
let b= prompt("Di número 2")

function suma(a,b){
  
    let resultado=a+b;
    return resultado;
}
function resta(a,b){
    
    let resultado=a-b;
    return resultado;
}

function multi(a,b){
 
    let resultado=a*b;
    return resultado;
}
function div(a,b){
  
    let resultado=parseInt(a/b);
    return resultado;
}

document.write(a+" + "+b+" = "+suma(a,b));
document.write("<br>"+a+" - "+b+" = "+resta(a,b));
document.write("<br>"+a+" * "+b+" = "+multi(a,b));
document.write("<br>"+a+" / "+b+" = "+div(a,b));

