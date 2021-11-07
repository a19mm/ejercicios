/***************************************************************************************************************
*  
*   Objetivo: Crear un array con objetos persona y determinar cuantos son mayores de edad
*             Devolver el promedio de edad total
*             Devolver el promedio de las personas mayores de edad
*             Devolver el promedio de las personas menores de edad
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
function leerEntero(){
    do{
        numero=prompt("Dame un num entero positivo");

    }while (isNaN(numero) || !Number.isInteger(parseFloat(numero)|| parseInt(numero)));
    return parseInt(numero);
}


const nombres=["ana","mario","eva","juan","susana","apu","margarita"]
const personas =Array.from({length:leerEntero()},()=>{return {nombre:nombres[Math.floor(Math.random()*nombres.length)],edad:Math.floor(Math.random()*100+1)}
}) //
console.log(personas.reduce((anterior,actual)=>{return {nombre:"",
                                                        edad:anterior.edad+actual.edad}}))
                                                        