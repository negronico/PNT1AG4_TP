function formularioValidacion() {
    const mensajeLargo = 50;
    var mensaje = document.getElementById('mensaje');
    var email = document.getElementById('mail');
    var fecha = document.getElementById('fecha');
    var telefono = document.getElementById('telefono');
    var nombre = document.getElementById('nombre');
    var cantidad = document.getElementById('comensales');
    

    if (validaLetra(nombre) && validacionEmail(email) && validaNumero(telefono) && validaFecha(fecha) && validaCantidad(cantidad)) {
        alert("Formulario enviado correctamente");
    }
}

function validaLetra(nombre) {
    var letras = /^[A-Za-z]+$/;
    var result = false;

    if (nombre.value.match(letras)) {
        result= true;
    }
    else {
        alert('Ingresaste un nombre inválido!');
        nombre.focus(); //marca el cursor titilando
    }
    return result;
}


function validacionEmail(email) {
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var result = false;

    if (email.value.match(mail)) {
        result= true;
    }
    else {
        alert("Ingresaste un email inválido!");
        email.focus();
    }
    return result;
}


function validaNumero(telefono) {
    var numero = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;
    var result = false;

    if (telefono.value.match(numero)) {
        result= true;
    }
    else {
        alert("Ingresaste un teléfono inválido!");
        telefono.focus();
    }
    return result;
}

function validaFecha(fecha) {
    var numero = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
    var date = new Date();
    var fechaDeHoy = date.toISOString().split('T')[0];
    var result = false;
    
    if (!(fecha.value.match(numero))) {
        alert("Fecha inválida!");
    } else if (fecha.value < fechaDeHoy){
        alert("Fecha anterior a la actual!")
    }else{
        result= true;  
    }
    return result;
}


function validaCantidad(cantidad) {
    var min = 1;
    var max = 10;
    var result = false;

    if (cantidad.value >= min && cantidad.value <= max) {
        result= true;
    }
    else {
        alert("Ingrese cantidad entre 1 y 10!");
        cantidad.focus();
    }
    return result;
}



