function validarFormularioSumate() {
    //Obtener los valores
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim()
    let mensaje = document.getElementById("mensaje").value.trim()
    
    //Verificar si hay campos vacios
    if(nombre==="" || email==="" || mensaje===""){
        alert("Complete todos los campos del formulario.")
        return false
    }

    // Verificar si el nombre contiene solo caracteres alfabéticos (incluidos tildes del español) o espacios
    let nombreTest = /^[a-zA-ZÁÉÍÓÚáéíóúñ ]+$/.test(nombre);
    if(nombreTest===false){
      alert("ingrese un nombre válido con las letras del abecedario.")
      return false
    }

    //Si supera las validaciones
    alert("Formulario de contacto enviado con éxito!")
    return true
}
