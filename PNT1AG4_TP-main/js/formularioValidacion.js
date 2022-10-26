function formularioValidacion() {
    var mensaje = document.getElementById('mensaje');
    var email = document.getElementById('mail');
    var fecha = document.getElementById('fecha');
    var telefono = document.getElementById('telefono');
    var nombre = document.getElementById('nombre');
    var cantidad = document.getElementById('comensales');

    console.log("debug")
    if (ValidacionEmail(email) && ValidaMensaje(mensaje) && ValidaCantidad(cantidad) && ValidaFecha(fecha) && ValidaNumero(telefono) && ValidaLetra(nombre)) {
        alert("Formulario enviado correctamente");
    }
}

function ValidaMensaje(mensaje) {
    var result = false;
    if(mensaje.length > 500) {
        alert("Escriba un mensaje mas corto")
    }else {
        result = true;
    }
    return result;
}

function ValidaLetra(nombre) {
    var letras = /^[A-Za-z]+$/;
    var result = false;

    if (nombre.value.match(letras)) {
        result= true;
    }
    else {
        alert('Ingresaste un caracter inválido!');
        nombre.focus(); //marca el cursor titilando
    }
    return result;
}


function ValidacionEmail(email) {
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


function ValidaNumero(telefono) {
    var numero = /^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
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

function ValidaFecha(fecha) {
    var numero = /^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var Date = new Date(fecha).getDay();
    var result = false;

    if (fecha.value.match(numero)) {
        alert("Fecha inválida!");
        result= true;
    }else if(Date == 1){
        alert("Estamos cerrados los lunes!");  
    }
    return result;
}


function ValidaCantidad(cantidad) {
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