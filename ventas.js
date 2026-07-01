const VENTAS_BASE = 5;


function calcularComision(numeroVentas, precioProducto){
    let comision = 0;

    if (numeroVentas > VENTAS_BASE){
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.1);
    }
    return comision;
}
function calcular(){

    //recuperamos propiedades de las cajas de texto

    let cmpSueldoBase = document.getElementById("txtSueldoBase");
    let cmpVentas = document.getElementById("txtVentas");
    let cmpPrecio = document.getElementById("txtPrecio");
   
    //recuperamos el valor de la caja de texto

    let sueldoBaseStr = cmpSueldoBase.value;
    let ventasStr = cmpVentas.value;
    let precioStr = cmpPrecio.value;

    //convertimos el texto numeros 

    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseFloat(ventasStr);
    let precioProducto = parseFloat(precioStr);

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = comision + sueldoBase;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}