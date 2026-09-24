// ======================================
// OBJETIVOS - NutriApp
// ======================================

const formulario = document.querySelector(".goal-form");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    // Obtener datos

    const pesoActual = document.querySelector('input[placeholder="Ejemplo: 75"]').value;

    const pesoObjetivo = document.querySelector('input[placeholder="Ejemplo: 68"]').value;

    const objetivo = document.querySelectorAll("select")[0].value;

    const tiempo = document.querySelectorAll("select")[1].value;

    const actividad = document.querySelectorAll("select")[2].value;


    // Validar

    if(pesoActual==="" || pesoObjetivo===""){

        alert("⚠️ Complete todos los campos.");

        return;

    }


    // Guardar en LocalStorage

    localStorage.setItem("pesoActual", pesoActual);

    localStorage.setItem("pesoObjetivo", pesoObjetivo);

    localStorage.setItem("objetivo", objetivo);

    localStorage.setItem("tiempo", tiempo);

    localStorage.setItem("actividad", actividad);


    // Mensaje

    alert("✅ Objetivos guardados correctamente.");

});