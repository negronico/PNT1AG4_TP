function formularioValidacion() {

    var asunto = document.getElementById("asunto");
    var mensaje = document.getElementById("message");
    var email = document.getElementById("mail");
    var cantidad = document.getElementById("comensales");

    if (ValidacionEmail(email) && ValidaMensaje(mensaje) && ValidaTexto(asunto) && ValidaCantidad(cantidad)) {
        alert("Enviado correctamente");
    }
}
//no esta funcionando el length
function ValidaMensaje(msg) {
    if(msg.length > 500) {
        alert("Escriba un mensaje mas corto")
        return false;
    }
    if(msg.length < 0) {
        alert("Escriba un mensaje")
        return false;
    }
    return true;
}

function ValidaTexto(nombre) {
    var letras = /^[A-Za-z]+$/;

    if (nombre.value.match(letras)) {
        return true;
    }
    else {
        alert('Ingresa un texto valido');
        nombre.focus(); //marca el cursor titilando
        return false;
    }
}


function ValidacionEmail(email) {
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.match(mail)) {
        return true;
    }
    else {
        alert("Ingresa un email valido");
        email.focus();
        return false;
    }
}


function ValidaNumero(telefono) {
    var numero = /^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if (telefono.value.match(numero)) {
        return true;
    }
    else {
        alert("Ingresaste un teléfono invalido!");
        telefono.focus();
        return false;
    }
}


function ValidaCantidad(cantidad) {
    var min = 1;
    var max = 10;


    if (cantidad.value >= min && cantidad.value <= max) {
        return true;
    }
    else {
        alert("Ingrese cantidad entre 1 y 10!");
        cantidad.focus();
        return false;
    }
}


