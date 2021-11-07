/***************************************************************************************************************
*  
*   Objetivo: Crear un array con n números aleatorios entre 1 y 100. Emplea para ello la función
*             random() del objeto Math. Mostrar por consola cual es el mayor, el menor y la media.
*
*   Entrada : n
*
*
*   Salida  : el mayor, el menor y la media de los números del array
*
*
***************************************************************************************************************/


let mayor=0;
let menor=0;
function dato(){
    return Math.floor(Math.random()*100) 
}
const vector=Array.from({length:10},dato)

document.write("El mayor del array ")
for(let i=0;i<vector.length;i++){
    document.write(vector[i]+" ")
    if(vector[i]>mayor)
    mayor=vector[i]
    
} document.write("es "+mayor)

document.write("<br> El menor del array ")
for(let i=0;i<vector.length;i++){
    document.write(vector[i]+" ")
    if(vector[i]<=menor)
    menor=vector[i]
    
} document.write("es "+menor)

document.write("<br> Media dos números ")
let media=vector.reduce((anterior, actual)=>anterior+actual/vector.length);
document.write(media);