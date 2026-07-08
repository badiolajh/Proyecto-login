//Esta funcion se encarga de validar que el correo no este vacio y que temga el formato solicitado
function ValidarCorreo() {
  let Vemail = document.forms["loginForm"]["femail"].value;
  let error = document.getElementById("errorEmail");
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;

  //Si el correo esta vacion manda una alerta
  if (Vemail == "") {
    error.textContent = "Debes ingresar un correo electronico";
    return false;
    //Si el correo no tiene el formato valido
  } else if (!regex.test(Vemail)) {
    error.textContent = "Debes ingresar un correo valido";
    return false;
  }

  //limpia el texto en caso de haber saltado el error
  error.textContent = "";
  return true;
}

//Valida que el input no este vacio y acepta Mayuscula, minusculas y Vocales acentuadas retornandotruw
function SoloLetras() {
  let Vletra = document.forms["loginForm"]["fnombre"].value;
  let error = document.getElementById("errorName");
  //Acepta mayusculas, minusculas,volcales acentuadas y tambien espacios
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  //si el campo esta vacio muestra el siguiente error
  if (Vletra == "") {
    error.textContent = "Debes ingresar tu nombre completo";
    return false;
    //si no conincide con el formato establecido muestra un error
  } else if (!regex.test(Vletra)) {
    error.textContent =
      "Debe contener mayusculas, minuscula o alguna vocal acentuada.";
    return false;
  } else {
    //borra el texto de error si fue escrito
    error.textContent = "";
    return true;
  }
}

function validarPassword() {
  let Vpass = document.forms["loginForm"]["fpassword"].value;
  let error = document.getElementById("errorPass");
  //Caracteres aceptados para la contraseña y tambien establece la longitud
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  //valida que no este vacio
  if (Vpass == "") {
    error.textContent = "Debes ingresar una contraseña.";
    return false;
    //Valida que tenga los caracteres admitidos
  } else if (!regex.test(Vpass)) {
    error.textContent =
      "El password debe contener mayusculas, minusculas, algun numero y algun caracter especial.";
    return false;
  }
  error.textContent = "";
  return true;
}

//Funcion para el boton, donde llamara a todas las funciones y si todo esta bien podras ingresar al sitio
function Calc() {
  if (!SoloLetras()) return;
  if (!ValidarCorreo()) return;
  if (!validarPassword()) return;

  // Guardar nombre y correo en localStorage
  let nombreUsuario = document.forms["loginForm"]["fnombre"].value;
  let correoUsuario = document.forms["loginForm"]["femail"].value;
  localStorage.setItem("nombreUsuario", nombreUsuario);
  localStorage.setItem("correoUsuario", correoUsuario);

  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  }).fire({
    icon: "success",
    title: "Inicio de sesión exitoso",
  });

  setTimeout(() => {
    window.location.href = "inicio.html";
  }, 1300);
}
