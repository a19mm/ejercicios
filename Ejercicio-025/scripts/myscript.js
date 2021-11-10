/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número tras otro al usuario hasta que ingresamos el númoer 0 (que no se tendrá en cuenta)
*             Una vez terminada la lectura de números se informará cuál fue el mayor de los números
*
*   Entrada : numero1, numero2, numero3,.....
*
*
*   Salida  : El mayor de numero1, numero2, numero3,....
*
*
***************************************************************************************************************/
let numero;
let array=[];
var mayor=0;

do{
    numero=prompt("Dime un número");
    array.push(numero);
} while(numero!==0)

// Cuando se mete el cero, hay que quitarlo
array.pop()

document.write("El mayor de ")
for(let i=0;i<array.length;i++){
    document.write(array[i]+" ")
    if(array[i]>mayor){
        mayor=array[i]
        
    }
} document.write("es el "+mayor)

// Con el metodo reduce y una arrow function

// let maximo=array.reduce((anterior,actual)=>actual>anterior?actual:anterior)
// document.write(`El mayor de ${array.join(',')} es ${maximo}`)

// Con la libreria Math

// let maximo=Math.max(...array)
// document.write(`El mayor de ${array.join(',')} es ${maximo}`)
