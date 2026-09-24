// ===============================
// Dashboard NutriApp
// ===============================

// Mostrar saludo según la hora
const usuario = localStorage.getItem("nombre");

if (usuario) {

    document.querySelector(".user span").textContent = usuario;

    document.querySelector(".topbar h1").innerHTML =
        "¡Bienvenido, " + usuario + "! 👋";

}
const saludo = document.querySelector(".topbar h1");

const hora = new Date().getHours();

if (hora < 12) {

    saludo.innerHTML = "☀️ Buenos días";

} else if (hora < 18) {

    saludo.innerHTML = "🌤️ Buenas tardes";

} else {

    saludo.innerHTML = "🌙 Buenas noches";

}


// ===============================
// Recomendaciones del día
// ===============================

const recomendaciones = [

    "🥗 Consume al menos 5 porciones de frutas y verduras.",

    "💧 Bebe 2 litros de agua durante el día.",

    "🚶 Camina al menos 30 minutos.",

    "😴 Duerme entre 7 y 8 horas.",

    "🍎 Evita bebidas azucaradas hoy.",

    "🧘 Tómate 10 minutos para relajarte."

];

const recomendacion = document.querySelector(".panel p");

const numero = Math.floor(Math.random() * recomendaciones.length);

recomendacion.innerHTML = recomendaciones[numero];


// ===============================
// Tarjetas animadas
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


// ===============================
// Confirmar cerrar sesión
// ===============================

const cerrar = document.querySelector(".bottom-menu a:last-child");

cerrar.addEventListener("click",function(e){

    const respuesta = confirm("¿Deseas cerrar sesión?");

    if(!respuesta){

        e.preventDefault();

    }

});


// ===============================
// Fecha actual
// ===============================

const opciones = {

    weekday:"long",

    year:"numeric",

    month:"long",

    day:"numeric"

};

const fecha = new Date().toLocaleDateString("es-ES",opciones);

const subtitulo = document.querySelector(".topbar p");

subtitulo.innerHTML = "Hoy es " + fecha;