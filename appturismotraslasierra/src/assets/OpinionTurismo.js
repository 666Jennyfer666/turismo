// Creo la funcion para capturar los datos de opinnion turismo//

// Capturando los valores de los campos del formulario
function capturardatosOpinionTurismo() {
    
    // Captura el valor del campo con el ID "nombre"
    var nombreUsuarioV = document.getElementById("nombre").value;
    // Captura el valor del campo con el ID "apellido"
    var apellidoUsuarioV = document.getElementById("apellido").value;
    // Captura el valor del campo con el ID "localidad"
    var localidadVisitada = document.getElementById("localidad").value;
    // Captura el valor del campo con el ID "atraccion"
    var atraccionVisitada = document.getElementById("atraccion").value; 
    // Captura el valor del campo con el ID "opinion"
    var opinionUsuarioV = document.getElementById("opinion").value; 

    // Validando que se hayan ingresado todos los campos obligatorios
    if (nombreUsuarioV == "") {
        // Alerta si el campo "nombre" está vacío
        alert("Por favor, ingresa tu nombre."); 
        // Establece el foco en el campo "nombre" para facilitar la corrección
        document.getElementById("nombre").focus(); 
    } else if (apellidoUsuarioV == "") {
        // Alerta si el campo "apellido" está vacío
        alert("Por favor, ingresa tu apellido."); 
        // Establece el foco en el campo "apellido" para facilitar la corrección
        document.getElementById("apellido").focus(); 
    } else if (localidadVisitada == "") {
        // Alerta si el campo "localidad" está vacío
        alert("Por favor, ingresa la localidad que visitaste."); 
        // Establece el foco en el campo "localidad" para facilitar la corrección
        document.getElementById("localidad").focus(); 
    } else if (atraccionVisitada == "") {
        // Alerta si el campo "atraccion" está vacío
        alert("Por favor, ingresa la atracción que visitaste."); 
        // Establece el foco en el campo "atraccion" para facilitar la corrección
        document.getElementById("atraccion").focus(); 
    } else if (opinionUsuarioV == "") {
        // Alerta si el campo "opinion" está vacío
        alert("Por favor, brinda tu opinión."); 
        // Establece el foco en el campo "opinion" para facilitar la corrección
        document.getElementById("opinion").focus(); 
    } else {
        // Imprimiendo los datos en la consola
        console.log("Nombre: " + nombreUsuarioV);
        console.log("Apellido: " + apellidoUsuarioV);
        console.log("Localidad visitada: " + localidadVisitada);
        console.log("Atracción visitada: " + atraccionVisitada);
        console.log("Opinión: " + opinionUsuarioV);

        // Limpiando los campos del formulario después de imprimir los datos
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("localidad").value = "";
        document.getElementById("atraccion").value = "";
        document.getElementById("opinion").value = "";
        // Establece el foco en el campo "nombre" para facilitar el ingreso de nuevos datos
        document.getElementById("nombre").focus(); 
    }
}
