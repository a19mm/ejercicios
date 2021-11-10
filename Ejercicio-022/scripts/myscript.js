/***************************************************************************************************************
*  
*   Objetivo: Solicitamos tres números al usuario e indicamos cual es el mayor
*
*
*   Entrada : numero1, numero2, numero3
*
*
*   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
*
*
***************************************************************************************************************/
let num1=prompt("Dime el primer número: ");
let num2=prompt("Dime el segundo número: ");
let num3=prompt("Dime el tercer número: ");

let max=num1;
if(num2>max)
    max=num2;
if(num3>max)
   max=num3;

//document.write("Has introducido tres números: "+num1+", "+num2+" y "+num3+". El mayor de ellos es "+max);
document.write(`Has introducido tres números: ${num1}, ${num2} y ${num3}. El mayor de ellos es ${max}`);

// Con el objeto Math
//let maximo=Math.max(num1,num2,num3)

// Con un array y el metodo reduce con una arrow function 
// let numeros=[num1,num2,num3]
// let maximo=numeros.reduce((anterior,actual)=>actual>anterior?actual:anterior)

