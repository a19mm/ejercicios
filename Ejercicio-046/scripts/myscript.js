/***************************************************************************************************************
*  
*   Objetivo: Sumar vectores [1,2,3]+[2,3,4]=[3,5,7]
*             
*   Entrada : Dos grupos de números enteros separados por comas
*             Comprobar si son el mismo número de datos
*
*   Salida  : Muestra la suma de los vectores
*
*
***************************************************************************************************************/
let n=parseInt(prompt("Escribe la longitud del array: "));
let array=Array.from({length:n},()=>Math.floor(Math.random()*100));
let array2=Array.from({length:n},()=>Math.floor(Math.random()*100));


let ar3=[];
for(let i=0;i<array.length;i++){
    ar3[i]=array[i]+array2[i];
}
document.write("La suma de ["+array+"] y ["+array2+"] es de "+ ar3);

// Con metodos del array
//const suma=array.map((elemento,i)=>elemento+array2[i])
//document.write(`La suma de los vectores [${array.join(',')}] y [${array.join(',')}] es [${suma.join(',')}]`)