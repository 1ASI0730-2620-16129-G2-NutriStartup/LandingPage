// ======================================
// PERFIL - VitaControl
// ======================================

// Obtener elementos

const formulario = document.getElementById("perfilForm");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const edad = document.getElementById("edad");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const genero = document.getElementById("genero");

const nombreUsuario = document.getElementById("nombreUsuario");


// ================================
// Cargar datos guardados
// ================================

window.onload = function(){

    if(localStorage.getItem("nombre")){

        nombre.value = localStorage.getItem("nombre");
        correo.value = localStorage.getItem("correo");
        edad.value = localStorage.getItem("edad");
        altura.value = localStorage.getItem("altura");
        peso.value = localStorage.getItem("pesoPerfil");
        genero.value = localStorage.getItem("genero");

        nombreUsuario.textContent = localStorage.getItem("nombre");

    }

};


// ================================
// Guardar información
// ================================

formulario.addEventListener("submit",function(e){

    e.preventDefault();

    if(nombre.value==="" || correo.value===""){

        alert("Por favor complete los campos obligatorios.");

        return;

    }

    localStorage.setItem("nombre",nombre.value);
    localStorage.setItem("correo",correo.value);
    localStorage.setItem("edad",edad.value);
    localStorage.setItem("altura",altura.value);
    localStorage.setItem("pesoPerfil",peso.value);
    localStorage.setItem("genero",genero.value);

    nombreUsuario.textContent = nombre.value;

    alert("✅ Perfil actualizado correctamente.");

});