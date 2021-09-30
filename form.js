document.getElementById('formulario').addEventListener('submit',checkUserName); // tomo el formulario y creo una funcion que validara el nombre de usuario.
// falta implementar expreciones regulares para hacer una validacion alfanumerica.
function checkUserName(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value
    
    if(usuario.length > 30) {
        console.log('excede numero de caracteres');
        return true;
    }
    else if(usuario.length == "") {
        console.log('debe llenar el campo para continuar');
    }else {
        console.log('todo bien')
    }
    this.submit();
    
}

// validando correo
document.getElementById('formulario').addEventListener('submit', checkCorreo);

function checkCorreo(valor) {
    valor.preventDefault();
    var correo = document.getElementById('email').value

    if(correo.length == '') {
        alert('debe diligencia campo de correo');        
    }else {
        return true;
    }
    this.submit();  

}


//validando contraseña, falta la validacion de que tenga por lo menos una mayuscula 
document.getElementById('formulario').addEventListener('submit',checkContraseña);
function checkContraseña(valor) {
    valor.preventDefault()
    var espacios = false;
    var cont = 0;
    var contraseña = document.getElementById('contraseña').value
    if(contraseña.length < 7) {
        alert('la contraseña debe contener minimo 8 caracteres');
    }else{
        return true;
    }
    this.submit();
}
// falta por validar el string que se ingresa contiene almenos una Mayuscula


//Comparacion de las contraseñas falta implementar la funcion checkConfimContraseña(valor1,valor2)
function checkConfimContraseña(valor1,valor2) {
    //Escribe aqui el codigo para comparar el valor de la primera contraseña con la segunda.
}









 