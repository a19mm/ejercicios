/***************************************************************************************************************
*  
*   Objetivo: Determinar si in número es perfecto o no a través de una función
*             Un número es perfecto cuando el número es igual a la suma de sus divisones.
*
*   Entrada : entero n
*
*
*   Salida  : El número n (es|no es) perfecto !
*
*
***************************************************************************************************************/
let n=parseInt(prompt("di numero"));
let suma=0;
for(let i=1;i<n;i++){
    if (n%i==0)
    suma=suma+i;
}
if (suma==n){
    document.write("Es perfecto")
}
else{
    document.write("No es perfecto")
}