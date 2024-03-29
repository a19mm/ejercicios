/***************************************************************************************************************
*  
*   Objetivo: Solicitamos al usuario su peso (en kg) y su estatura (en metros). Calculamos el índice de masa 
*             corporal, lo almacene en una variable y muestre por pantalla la frase "Tu índice de masa corporal 
*             es <imc>", donde <imc> corresponde al indice de masa corporal redondeado con dos decimales e indique
*             si hay riesgo de enfermedad coronaria.
*
*             El índice de masas corporal es el cociente entre el peso del individuo en kilos y el cuadrado de su
*             estatura en metros.        
*
*             El riesgo de que una persona sugra enfermedades coronarias depende de su edad y su índice de masa
*             corporal:
*                               Edad<45     Edad>=45
*                   IMC<=22.0    bajo         medio
*                   IMC>=22.0    medio        alto
*
*   Entrada : peso, estatura
*
*
*   Salida  : "Tu índice de masa corporal es <imc>. Tienes un riesgo ..... de enfermedad coronaria"
*
*
***************************************************************************************************************/

let peso=prompt("Di peso");
let alt=prompt("Di altura");
let edad=prompt("Di edad");
let salida="";
let imc=peso/(Math.pow(alt, 2));
imc=imc.toFixed(2);

switch(true){
    case (imc<=22.0 && edad<45):
    salida= "Tu índice de masa corporal es "+imc+". Tienes un riesgo bajo de enfermedad coronaria";
    break;
    case (imc<=22.0 && edad>=45):
    salida= "Tu índice de masa corporal es "+imc+". Tienes un riesgo medio de enfermedad coronaria";
    break;
    case (imc>=22.0 && edad<45):
    salida= "Tu índice de masa corporal es "+imc+". Tienes un riesgo medio de enfermedad coronaria";
    break;
    case (imc<=22.0 && edad>=45):
    salida= "Tu índice de masa corporal es "+imc+". Tienes un riesgo alto de enfermedad coronaria";
    break;
}

document.write(salida);