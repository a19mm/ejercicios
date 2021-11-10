/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el valor de los catetos de un triángulo rectángulo y calcula la hipotenusa del
*             triángulo empleando el teorema de Pitágoras (hipotenusa=raiz_cuadrada(catetoA²+catetoB²))
*
*   Entrada : catetoA, catetoB
*
*
*   Salida  : La hipotenusa del triángulo con catetos catetoA y catetoB es XXXX
*
*
***************************************************************************************************************/
let catetoA=prompt("Dime el cateto A")
let catetoB=prompt("Dime el cateto B")

let hipotenusa=Math.sqrt(Math.pow(catetoA, 2)+Math.pow(catetoB, 2));
document.write("La hipotenusa del triángulo con catetos"+catetoA+" y "+catetoB+" es "+hipotenusa+".");

// Con arrow function
//let calcularHipotenusa=(a,b)=>Math.sqrt(Math.pow(catetoA, 2)+Math.pow(catetoB, 2));
//document.write(`La hipotenusa del triángulo con catetos ${catetoA} y ${catetoB} es ${calcularHipotenusa(a,b)}.`);
