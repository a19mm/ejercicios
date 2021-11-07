/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el porcentaje de acierto en un examen tipo test y muestra la cualificación según la nota
*             según la siguiente tabla
*
*                Cualificación    Porcentaje
*                     A             90-100
*                     B             80-90
*                     C             70-79
*                     D             60-69
*                     F             0-59
*
*   Entrada : nota
*
*
*   Salida  : El examen se cualifica con un XXX
*
*
***************************************************************************************************************/



let porcentaje=parseFloat(prompt("Dame porcentaje de aciertos")) //Convertirlo directamente a un parseFloat

switch(porcentaje){
        case ">= 90 && <=100":
             console.log("A")
        break;
        case ">=80 && <90":
             console.log("B");
        break;
       
        case ">=70 && <80":
            console.log("C");

        case ">=60 && <70":
             console.log("D");

            default:
                console.log("F")
}