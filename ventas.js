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
    let sueldoBase = parseFloat(document.getElementById('txtSueldoBase').value) || 0;
    let numVentas = parseFloat(document.getElementById('txtVentas').value) || 0;
    let precioProducto = parseFloat(document.getElementById('txtPrecio').value) || 0;
    let tipoVenta = document.getElementById('tipoVenta').value;

    let comisionBase = 0.08; // 8% base
    let bonificacion = 0;

    // Aplicar bonificación según tipo de venta
    switch(tipoVenta) {
        case 'premium':
            bonificacion = 0.05;
            break;
        case 'corporativa':
            bonificacion = 0.07;
            break;
        case 'recurrente':
            bonificacion = 0.09;
            break;
        default:
            bonificacion = 0;
    }

    let tasaFinal = comisionBase + bonificacion;
    let totalVentas = numVentas * precioProducto;
    let comision = totalVentas * tasaFinal;
    let total = sueldoBase + comision;

    // Mostrar resultados
    document.getElementById('spSueldoBase').textContent = '$' + sueldoBase.toLocaleString('es-ES');
    document.getElementById('spComision').innerHTML = '$' + comision.toLocaleString('es-ES') + 
        ` <small>(${ (tasaFinal*100).toFixed(1)}%)</small>`;
    document.getElementById('spTotal').textContent = '$' + total.toLocaleString('es-ES');
}