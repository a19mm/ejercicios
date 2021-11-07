/***************************************************************************************************************
*  
*   Objetivo: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
*
*   Entrada : inicio, fin
*
*
*   Salida  : inicio², (inicio+1)², ..... (fin)²
*
*
***************************************************************************************************************/

let numero1, numero2;
do{
numero1=prompt("Dame el primer número: ");
numero2=prompt("Dame el segundo número: ");

}while (isNaN(numero1)&& isNaN(numero2))

let salida="";
for(let i=numero1;i<numero2;i++){
     salida= Math.pow(i, 2)+" ";
}
    document.write(salida);


//}
/*function leerDato(){
    let numero;
    do{
        numero=parseInt(prompt("dame numero"))

    }while (isNaN(numero))
    return numero
}
    let numero1=leerDato()
    let numero2=leerDato()*/

    
    
    /*while (isNaN(numero2)
    salida=""
    for(let i=numero1;i<=numero2;i++){
        salida=numero1*numero1+" "
    }
    console.log(salida)*/
