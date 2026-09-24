function abrirLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function cerrarLogin() {
    document.getElementById("loginModal").style.display = "none";
}

function abrirRegistro() {
    document.getElementById("registroModal").style.display = "flex";
}

function cerrarRegistro() {
    document.getElementById("registroModal").style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {

    const login = document.getElementById("loginModal");
    const registro = document.getElementById("registroModal");

    if (event.target === login) {
        login.style.display = "none";
    }

    if (event.target === registro) {
        registro.style.display = "none";
    }
};

// ===============================
// REGISTRO
// ===============================

const btnRegistro = document.getElementById("btnRegistro");

btnRegistro.addEventListener("click", function () {

    const nombre = document.querySelector('#registroModal input[type="text"]').value;
    const correo = document.querySelector('#registroModal input[type="email"]').value;
    const contraseña = document.querySelector('#registroModal input[type="password"]').value;

    if (nombre === "" || correo === "" || contraseña === "") {

        alert("Por favor complete todos los campos.");
        return;

    }

    // Guardar datos para usarlos en el Dashboard
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("correo", correo);

    // Redirigir al Dashboard
    window.location.href = "dashboard.html";

});