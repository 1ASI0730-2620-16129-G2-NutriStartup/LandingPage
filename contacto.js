// ======================================
// CONTACTO - NutriApp
// ======================================

// Obtener elementos

const formulario = document.getElementById("contactForm");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");


// ================================
// Cargar última consulta
// ================================

window.onload = function(){

    if(localStorage.getItem("contactoNombre")){

        nombre.value = localStorage.getItem("contactoNombre");
        correo.value = localStorage.getItem("contactoCorreo");
        asunto.value = localStorage.getItem("contactoAsunto");
        mensaje.value = localStorage.getItem("contactoMensaje");

    }

};


// ================================
// Validación del correo
// ================================

function correoValido(email){

    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return expresion.test(email);

}


// ================================
// Enviar formulario
// ================================

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    if(

        nombre.value.trim()==="" ||
        correo.value.trim()==="" ||
        asunto.value.trim()==="" ||
        mensaje.value.trim()===""

    ){

        alert("⚠️ Complete todos los campos.");

        return;

    }

    if(!correoValido(correo.value)){

        alert("⚠️ Ingrese un correo electrónico válido.");

        return;

    }


    // Guardar consulta

    localStorage.setItem("contactoNombre",nombre.value);
    localStorage.setItem("contactoCorreo",correo.value);
    localStorage.setItem("contactoAsunto",asunto.value);
    localStorage.setItem("contactoMensaje",mensaje.value);


    alert("✅ Su mensaje fue enviado correctamente. Nos pondremos en contacto con usted.");


    formulario.reset();

});