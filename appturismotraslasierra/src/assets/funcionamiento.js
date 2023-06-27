// Función que captura datos desde un cuadro de texto de formulario
function capturaDatosConsulta(){
    // Creé variables y le asigné lo que haya sido ingresado en el input o textarea (que lo encontré con su ID)
    var nombreApellidoUsuario = document.getElementById("nomusu").value;
    var emailUsuario = document.getElementById("emausu").value;
    var consultUsuario = document.getElementById("miTextarea").value;
    //Si no ingresan nada en el formulario o input, aparecerá una alerta
    if (nombreApellidoUsuario == "") {
        alert("El nombre es obligatorio digitarlo");
        document.getElementById("nomusu").focus();
    }else{
        if (emailUsuario=="") {
            alert("El e-mail es obligatorio digitarlo");
            document.getElementById("emausu").focus();
        }else {
            if (consultUsuario == "") {
                alert("La consulta es obligatoria digitarla");
                document.getElementById("miTextarea").focus();
            }
            else{
                // Imprimo los 
                console.log(nombreApellidoUsuario + " " + emailUsuario + " " + consultUsuario);
                document.getElementById("nomusu").value = "";
                document.getElementById("emausu").value = "";
                document.getElementById("miTextarea").value = "";
                document.getElementById("nomusu").focus();
            }
        }
    }
}

// Función que captura datos de Notificaciones desde un cuadro de texto de formulario
function capturaDatosNotificacion(){
    // Creé variables y le asigné lo que haya sido ingresado en el input o textarea (que lo encontré con su ID)
    var Nombrenot = document.getElementById("nomnot").value;
    var Apellidonot = document.getElementById("apenot").value;
    var Emailnot = document.getElementById("emailnot").value;
    var cajitacepcondi = document.getElementById("caja-aceptar")
    //Si no ingresan nada en el formulario o input, aparecerá una alerta
    if (Nombrenot == "") {
        alert("El nombre es obligatorio digitarlo");
        document.getElementById("nomnot").focus();
    }else{
        if (Emailnot=="") {
            alert("El e-mail es obligatorio digitarlo");
            document.getElementById("emailnot").focus();
        }else {
            if (Apellidonot == "") {
                alert("Es obligatorio completar el campo apellido");
                document.getElementById("apenot").focus();
            }
            else{
            }if (cajitacepcondi.checked == false)
            {
                alert("Es obligatorio aceptar los términos y condiciones");
                document.getElementById("caja-aceptar").focus();
            }
            else{
                // Imprimo los 
                console.log(Nombrenot + Apellidonot + " " + Emailnot + cajitacepcondi);
                document.getElementById("nomnot").value = "";
                document.getElementById("apenot").value = "";
                document.getElementById("emailnot").value = "";
                document.getElementById("caja-aceptar").focus();
            }
        }
    }
}