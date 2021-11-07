/***************************************************************************************************************
*  
*   Objetivo: Pedimos reiteradamente cadenas al usuario hasta que la cadena de texto introducida es "cancelar". 
*
*
*   Entrada : cadenas de texto
*
*
*   Salida  : Cada cadena introducida se muestra en un párrafo del documento HTML
*
*
***************************************************************************************************************/
let cadena;
let salida=""
do{
    cadena=prompt("Dame una cadena de texto")
    if(cadena!="cancelar")
    salida+=cadena+"<br> "
}while(cadena!="cancelar")

document.write(salida);