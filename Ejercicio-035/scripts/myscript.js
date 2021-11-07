/***************************************************************************************************************
*  
*   Objetivo: Juan y su familia se fueron en vacaciones a 3 restaurantes diferentes. Las facturas fueron de
*             XX, YY y ZZ euros. Para darle al camarero una propina justa Juan se otorgará un 20% de la factura 
*             como propina si la factura es menor de 50 euros, 15% si esta entre 50 y 200 euros y 10% si es mayor 
*             de 200 euros. 
*
*   Entrada : Tres valores reales que representa las facturas, p.ej.: 124, 48, 268 euros
*
*
*   Salida  : Mostrar por consola el valor de cada factura con el valor apropiado de propina
*
*
***************************************************************************************************************/
//porcentaje= 1,10*faculta
/*let f1=parseFloat(prompt("dime factura 1"));
let f2=prompt("dime factura 2");
let f3=prompt("dime factura 3");
salida="";

switch(true){
case (f1>200):
    let prop1=f1*0.1;
    salida="El valor de la propina 1 es "+prop1;
    break;
    case (f1<50):
    let prpo2=0.20*f1;
    salida="el valor de la propina 1 es "+prpo2;
    break;
    case (f1>=50 || f1<=200):
        let prop3=f1*0.15;
        salida="El valor de la propina 1 es "+prop3;
    break;
       
} document.write(salida); 
switch(true){
    case (f2>200):
        let pro1=f2*0.1;
        salida="El valor de la propina 2 es "+pro1;
        break;
        case (f2<=50):
            let pro2=0.20*f2;
            salida="el valor de la propina 2 es "+pro2;
            break;
            case (f2>50 || f2<=200):
                let pro3=0.20*f2;
                salida="el valor de la propina 2 es "+pro3;
                break;
}
document.write("<br>"+salida); 
switch(true){
    case (f3>200):
        let pro1=f3*0.1;
        salida="El valor de la propina 3 es "+pro1;
        break;
        case (f3<=50):
            let pro2=0.20*f3;
            salida="el valor de la propina 3 es "+pro2;
            break;
            case (f3>50 || f3<=200):
                let pro3=0.20*f3;
                salida="el valor de la propina 3 es "+pro3;
                break;
}
document.write("<br>"+salida);

/*if(f1>200){
    let prop1=f1*0.1;
    salida="El valor de la propina es "+prop1;
}else if(f1<50){
    let prop2=0.20*f1;
    salida="el valor es "+prop2;
}else if (f1>=50 || f1<=200){
    let prop3=f1*0.15;
    salida="El valor de la propina es "+prop3;
}
document.write(salida);
if(f2>200){
    let pro1=f2*0.1;
    salida="El valor de la propina es "+pro1;
}else if(f2<50){
    let pro2=0.20*f1;
    salida="el valor es "+pro2;
}else if (f2>=50 || f1<=200){
    let pro3=f2*0.15;
    salida="El valor de la propina es "+pro3;
}

document.write(salida);*/


const factura1={
    
    resutaurante: "restaurante1",
    cantidad: 124
}
const factura2={
    restaurante:"res2",
    cantidad:46
}
const factura3={
    restaurante:"res3",
    cantidad:268
}
function calcularDescuento(cantidad){ //en funcion de la cantidad que devuelva el descuento
    switch(true){
        case cantidad<50: 
        return parseFloat(0.2*cantidad.toFixed(2));
        case cantidad>=50 && cantidad<200:
            return 0.15*cantidad.toFixed(2);
            break;
        default: return 0.1*cantidad.toFixed(2);
    }

}
const facturas=[factura1,factura2,factura3]; 
for (f of facturas){ //para cada una de las facturas?
console.log('El restaurante ${f.restaurante}+ hace un descuento de $´{f.cantidad+calcularDescuento(f.cantidad)}');
}

