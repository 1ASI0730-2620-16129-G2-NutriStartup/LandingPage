const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#nav-menu");
const loginModal = document.querySelector("#loginModal");
const registerModal = document.querySelector("#registroModal");

function setModal(modal, open) {
    if (!modal) return;
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("modal-open", open);
    if (open) modal.querySelector("input")?.focus();
}

function abrirLogin() {
    setModal(registerModal, false);
    setModal(loginModal, true);
}

function cerrarLogin() {
    setModal(loginModal, false);
}

function abrirRegistro() {
    setModal(loginModal, false);
    setModal(registerModal, true);
}

function cerrarRegistro() {
    setModal(registerModal, false);
}

menuToggle?.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    navMenu?.classList.toggle("is-open", open);
});

navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        menuToggle?.setAttribute("aria-expanded", "false");
        menuToggle?.setAttribute("aria-label", "Abrir menú");
    });
});

document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target !== modal) return;
        setModal(modal, false);
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    cerrarLogin();
    cerrarRegistro();
});

document.querySelector("#register-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#register-name").value.trim();
    const email = document.querySelector("#register-email").value.trim();
    localStorage.setItem("nombre", name);
    localStorage.setItem("correo", email);
    window.location.href = "dashboard.html";
});

document.querySelector("#login-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#login-note").textContent = "El inicio de sesión aún no está conectado.";
});

document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#form-note").textContent = "El formulario aún no está conectado para recibir consultas.";
});
