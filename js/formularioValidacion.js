function formularioValidacion() {

    var nombre = document.registracion.nombre;
    var apellido = document.registracion.apellido;
    var comensales = document.registracion.comensales;
    var telefono = document.registracion.telefono;
    var email = document.registracion.email;

    if (ValidaLetra(nombre)) {
        if (ValidaLetra(apellido)) {
            if (ValidaCantidad(comensales)) {
                if (ValidaNumero(telefono)) {
                    if (ValidacionEmail(email)) {

                    }
                }
            }
        }
    }
    return false;
}


function ValidaLetra(nombre) {
    var letras = /^[A-Za-z]+$/;

    if (nombre.value.match(letras)) {
        return true;
    }
    else {
        alert('Ingresaste un caracter invalido!');
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
        alert("Ingresaste un email invalido!");
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


