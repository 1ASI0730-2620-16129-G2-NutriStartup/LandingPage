// ======================================
// PROGRESO - VitaControl
// ======================================


// ===== Mostrar fecha actual =====

const fechaActual = new Date();

const opciones = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

const fechaTexto = fechaActual.toLocaleDateString("es-ES", opciones);

const subtitulo = document.querySelector(".topbar p");

if (subtitulo) {
    subtitulo.textContent = "Última actualización: " + fechaTexto;
}


// ===== Animación de las tarjetas =====

const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach((tarjeta) => {

    tarjeta.addEventListener("mouseenter", () => {

        tarjeta.style.transform = "translateY(-8px) scale(1.03)";

    });

    tarjeta.addEventListener("mouseleave", () => {

        tarjeta.style.transform = "translateY(0) scale(1)";

    });

});


// ===== Confirmar cierre de sesión =====

const cerrarSesion = document.querySelector(".bottom-menu a:last-child");

if (cerrarSesion) {

    cerrarSesion.addEventListener("click", function(e){

        const respuesta = confirm("¿Seguro que deseas cerrar sesión?");

        if(!respuesta){

            e.preventDefault();

        }

    });

}


// ===== Animación de aparición =====

window.addEventListener("load", ()=>{

    document.querySelectorAll(".card, .grafica").forEach((elemento, index)=>{

        elemento.style.opacity = "0";

        elemento.style.transform = "translateY(20px)";

        setTimeout(()=>{

            elemento.style.transition = "0.5s";

            elemento.style.opacity = "1";

            elemento.style.transform = "translateY(0)";

        }, index * 150);

    });

});


// ===== Mensaje motivacional aleatorio =====

const mensajes = [

    "💪 ¡Excelente trabajo! Sigue así.",

    "🥗 Cada pequeño cambio mejora tu salud.",

    "🚶 Un paso más cerca de tu objetivo.",

    "💧 Recuerda mantenerte hidratado.",

    "😄 Tu constancia dará resultados.",

    "🔥 Hoy es un buen día para entrenar."

];

const titulo = document.querySelector(".grafica h2");

if(titulo){

    titulo.addEventListener("click", ()=>{

        const numero = Math.floor(Math.random()*mensajes.length);

        alert(mensajes[numero]);

    });

}