/***************************************************************************************************************
*  
*   Objetivo: Adivina un número. Escojer aleatoriamente un número entero entre 1 y 100. Al abrir la página web 
*             debe ir solicitando números entre 1 y 100 hasta que el usuario acierte el número. 
*             Al finalizar el juego se indica mediante una ventana de alerta el número de intentos,
*             no teniendo en cuenta intentos en los que se introduce un dato incorrecto.
*
*   Entrada : un número entero (en cada intento)
*
*   Salida  : ! Has acertado ! Has necesitado XX intentos
*             ! Has fallado ! El número que tienes que adivinar es (mayor|menor)
*
***************************************************************************************************************/
let aleatorio=parseInt(Math.random()*100);
let numero=0;
let contador=0;

while(numero!=aleatorio){
    contador++;
    numero=prompt("Introduce un número");
    if(numero<aleatorio){
        alert("El número es más alto, sigue probando.");
    }else if(numero>aleatorio){
            alert("El número es más bajo, sigue probando");
    
    } else{
        alert("Correcto, has necesitado "+contador+" intentos");
    }
}