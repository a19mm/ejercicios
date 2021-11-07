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
    
} while(numero!=0)

document.write("El mayor de ")
for(let i=0;i<array.length;i++){
    document.write(array[i]+" ")
    if(array[i]>mayor){
        mayor=array[i]
        
    }
} document.write("es el "+mayor)