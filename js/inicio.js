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

inicio.addEventListener( 'click', ()=>{
    //logica para poner la clase 'seleccionado' en el elemento
    // y quitarlo del resto de elementos del sidebar
});

usuarios.addEventListener( 'click', ()=>{
    //logica para poner la clase 'seleccionado' en el elemento
    // y quitarlo del resto de elementos del sidebar
}); 



const cerrarSesion = document.getElementById("cerrar-sesion");

cerrarSesion.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear(); // limpiar datos de sesión
    window.location.href = "login.html"; // redirigir al login
});


// Submenu de usuarios en el sidebar
const submenuUsuarios = document.getElementById("submenu-usuarios");
const btnUsuarios = document.getElementById("btn-usuarios");
const btnCaptura = document.getElementById("btn-captura");
const btnListado = document.getElementById("btn-listado");

// Mostrar/ocultar submenu
btnUsuarios.addEventListener("click", (e) => {
    e.preventDefault();
    submenuUsuarios.style.display = submenuUsuarios.style.display === "block" ? "none" : "block";
});

// Mostrar subsecciones dentro de Usuarios
btnCaptura.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("usuarios-captura").style.display = "block";
    document.getElementById("usuarios-listado").style.display = "none";
});

btnListado.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("usuarios-captura").style.display = "none";
    document.getElementById("usuarios-listado").style.display = "block";
});




// inicio de sesion guardada en local store
// Simulación: valores guardados en login.html
// localStorage.setItem("nombreUsuario", "Juan Pérez");
// localStorage.setItem("correoUsuario", "jperez@gmail.com");

// const nombreUsuario = localStorage.getItem("nombreUsuario") || "Juan Pérez";
// const correoUsuario = localStorage.getItem("correoUsuario") || "jperez@gmail.com";

// document.getElementById("nombre-usuario").textContent = nombreUsuario;
// document.getElementById("correo-usuario").textContent = correoUsuario;

// // Cerrar sesión
// const cerrarSesion = document.getElementById("cerrar-sesion");
// cerrarSesion.addEventListener("click", (e) => {
//     e.preventDefault();
//     localStorage.clear();
//     window.location.href = "login.html";
// });
