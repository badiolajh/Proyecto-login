const menu = document.getElementById("menu");
const btn_menu = document.getElementById("btn-menu");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main")
const inicio = document.getElementById("btn-inicio");
const usuarios = document.getElementById("btn-usuarios");
const productos = document.getElementById("btn-productos");
const informes = document.getElementById("btn-informes");
const configuracion = document.getElementById("btn-configuracion");


btn_menu.addEventListener('click', ()=>{
    sidebar.classList.toggle('menu-toggle');
    menu.classList.toggle('menu-toggle');
    main.classList.toggle('menu-toggle');
});

// -----------------------------
// Lógica para sidebar y secciones
const botonesSidebar = [inicio, usuarios, productos, informes, configuracion];
const secciones = ["inicio", "usuarios", "productos", "informes", "configuracion"];

// Submenu de usuarios en el sidebar
const submenuUsuarios = document.getElementById("submenu-usuarios");
const btnUsuarios = document.getElementById("btn-usuarios");
const btnCaptura = document.getElementById("btn-captura");
const btnListado = document.getElementById("btn-listado");

function limpiarSeleccionSubmenuUsuarios() {
    btnCaptura.classList.remove("seleccionado");
    btnListado.classList.remove("seleccionado");
}

function mostrarSeccion(idSeccion, botonSeleccionado, limpiarSubmenu = true) {
    // Ocultar todas las secciones
    secciones.forEach(sec => {
        document.getElementById(sec).style.display = (sec === idSeccion) ? "block" : "none";
    });

    // Quitar clase 'seleccionado' de todos los botones principales
    botonesSidebar.forEach(btn => btn.classList.remove("seleccionado"));

    // Quitar seleccionados de sub-botones de usuarios (solo si corresponde)
    if (limpiarSubmenu) {
        limpiarSeleccionSubmenuUsuarios();
    }

    // Agregar clase 'seleccionado' al botón actual
    botonSeleccionado.classList.add("seleccionado");
}

inicio.addEventListener( 'click', (e)=>{
    e.preventDefault();
    //logica para poner la clase 'seleccionado' en el elemento
    // y quitarlo del resto de elementos del sidebar
    mostrarSeccion("inicio", inicio);
});

usuarios.addEventListener( 'click', (e)=>{
    e.preventDefault();
    //logica para poner la clase 'seleccionado' en el elemento
    // y quitarlo del resto de elementos del sidebar
    // Nota: aquí no limpiamos los sub-botones
    mostrarSeccion("usuarios", usuarios, false);
});

productos.addEventListener( 'click', (e)=>{
    e.preventDefault();
    mostrarSeccion("productos", productos);
});

informes.addEventListener( 'click', (e)=>{
    e.preventDefault();
    mostrarSeccion("informes", informes);
});

configuracion.addEventListener( 'click', (e)=>{
    e.preventDefault();
    mostrarSeccion("configuracion", configuracion);
});

// Inicial: mostrar solo Inicio
mostrarSeccion("inicio", inicio);


// Mostrar/ocultar submenu
btnUsuarios.addEventListener("click", (e) => {
    e.preventDefault();
    submenuUsuarios.style.display = submenuUsuarios.style.display === "block" ? "none" : "block";
});

// Mostrar subsecciones dentro de Usuarios
btnCaptura.addEventListener("click", (e) => {
    e.preventDefault();
    // Mostrar sección Usuarios y subsección Captura
    mostrarSeccion("usuarios", usuarios, false);
    document.getElementById("usuarios-captura").style.display = "block";
    document.getElementById("usuarios-listado").style.display = "none";

    // Marcar tanto el botón principal como el secundario
    usuarios.classList.add("seleccionado");
    btnCaptura.classList.add("seleccionado");
    btnListado.classList.remove("seleccionado");
});

btnListado.addEventListener("click", (e) => {
    e.preventDefault();
    // Mostrar sección Usuarios y subsección Listado
    mostrarSeccion("usuarios", usuarios, false);
    document.getElementById("usuarios-captura").style.display = "none";
    document.getElementById("usuarios-listado").style.display = "block";

    // Marcar tanto el botón principal como el secundario
    usuarios.classList.add("seleccionado");
    btnListado.classList.add("seleccionado");
    btnCaptura.classList.remove("seleccionado");
});


// -----------------------------
// Validaciones adicionales para el formulario de captura

// Validación de número de control (6 dígitos)
function validarNumeroControl() {
    let control = document.forms["loginForm"]["fcontrol"].value;
    let error = document.getElementById("errorControl");
    const regex = /^\d{6}$/;

    if (!regex.test(control)) {
        error.textContent = "El número de control debe tener exactamente 6 dígitos.";
        return false;
    }
    error.textContent = "";
    return true;
}

// Validación de edad (mayor o menor de edad)
function validarEdad() {
    let fecha = document.forms["loginForm"]["fnacimiento"].value;
    if (!fecha) return null;

    let nacimiento = new Date(fecha);
    let hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad >= 18 ? "El alumno es mayor de edad." : "El alumno es menor de edad.";
}

// Manejo del formulario de captura
const formUsuario = document.getElementById("formUsuario");
formUsuario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Usar funciones de utileria.js
    if (!SoloLetras()) return;
    if (!ValidarCorreo()) return;
    if (!validarPassword()) return;
    if (!validarNumeroControl()) return;

    // Validar edad y mostrar modal
    let mensajeEdad = validarEdad();
    if (mensajeEdad) {
        document.getElementById("mensajeEdad").textContent = mensajeEdad;
        let modal = new bootstrap.Modal(document.getElementById("modalEdad"));
        modal.show();
    }

    // Resetear formulario después de mostrar modal
    formUsuario.reset();
});


// inicio de sesion guardada en local store
const nombreUsuario = localStorage.getItem("nombreUsuario") || "Usuario";
const correoUsuario = localStorage.getItem("correoUsuario") || "correo@ejemplo.com";

document.getElementById("nombre-usuario").textContent = nombreUsuario;
document.getElementById("correo-usuario").textContent = correoUsuario;

const cerrarSesion = document.getElementById("cerrar-sesion");
cerrarSesion.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear(); // limpiar datos de sesión
    window.location.href = "login.html"; // redirigir al login
});
