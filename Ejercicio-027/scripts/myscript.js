/***************************************************************************************************************
*  
*   Objetivo: Cuando vemos el pronóstico del tiempo en Estados Unidos no nos enteramos muy bien si va
*             a hacer frio o calor. Crear un script Javascript que solicite una temperatura en grados
*             Fahrenheit y la convierta a grados Celsius. El script puede realizar un comentario sobre el
*             tiempo dependiendo de si la temperatura Celsius es superior o igual a 25 grados, inferior a
*             10 o inferior cero grados. Ten en cuenta que la temperatura Celsius se calcula a través de
*             Celsius = (5/9) * (Fahrenheit-32)
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
let faren=parseInt(prompt("Dime los grados Fahrenheit: "));

let celsius= (5/9)*(faren-32);

/*if (celsius=>25){
    document.write("La temperatura a Celsius es de "+celsius+");

}else if(celsius<10 && celsius>0){
    document.write("La temperatura es de "+celsius+");

}else if(celsius<0){
    document.write("La temperatura es de "+celsius+");
    
}*/
switch(true){
    case (celsius>=25&&celsius>10):
        document.write("agradable"+celsius);
    break;
        case (celsius<=10 && celsius>=0):
            document.write("fresco"+celsius);
            break;
            case(celsius<0):
            document.write("frío"+celsius)
            break;
}