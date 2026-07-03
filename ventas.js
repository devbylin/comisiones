const VENTAS_BASE = 5;

// ==================== NUEVA FUNCIÓN DE VALIDACIÓN ====================
function validarInput(id) {
    const input = document.getElementById(id);
    const errorDiv = document.getElementById("error" + id.charAt(3).toUpperCase() + id.slice(4));
    
    let valor = input.value.trim();
    let esValido = true;
    let mensaje = "";

    input.classList.remove("error-input");

    if (valor === "") {
        mensaje = "Este campo no puede estar vacío";
        esValido = false;
    } 
    else if (isNaN(valor) || valor.includes(" ")) {
        mensaje = "Solo se permiten números";
        esValido = false;
    }
    else if (id === "txtVentas" && valor.length > 5) {
        mensaje = "Máximo 5 dígitos permitidos";
        esValido = false;
    }

    if (!esValido) {
        errorDiv.textContent = mensaje;
        input.classList.add("error-input");
    } else {
        errorDiv.textContent = "";
    }

    return esValido;
}

function calcularComision(numeroVentas, precioProducto){
    let comision = 0;

    if (numeroVentas > VENTAS_BASE){
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.1);
    }
    return comision;
}
function validarVentas(){

        let numeroVentasStr = recuperarTexto("txtVentas")

        if(numeroVentasStr.length > 5) {
        alert("MAXIMO 5 CARACTERES")
        return false;
    }else{
        return true;
    }
}
// ==================== FUNCIÓN CALCULAR (MODIFICADA) ====================
function calcular() {
    const esSueldoValido = validarInput("txtSueldoBase");
    const esVentasValido = validarInput("txtVentas");
    const esPrecioValido = validarInput("txtPrecio");

    if (!esSueldoValido || !esVentasValido || !esPrecioValido) {
        return;
    }

    //convertimos el texto a números
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = comision + sueldoBase;

    document.getElementById("spSueldoBase").textContent = sueldoBase.toFixed(2);
    document.getElementById("spComision").textContent = comision.toFixed(2);
    document.getElementById("spTotal").textContent = total.toFixed(2);
}