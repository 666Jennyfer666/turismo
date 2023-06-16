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