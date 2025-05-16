import Swal from "sweetalert2";

export function alertaRedireccion(redireccion, mensaje, ruta) {
  let timerInterval;
  Swal.fire({
    title: mensaje,
    html: "Será redireccionado en <b></b> milisegundos.",
    timer: 1500,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      redireccion(ruta);
    },
  });
}

export function alertaError() {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Usuario no encontrado",
    footer: "Por favor ingresa tus datos correctamente",
  });
}

export function alertaExistente() {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "El correo ya esta registrado",
    footer: "Por favor ingresa un correo diferente",
  });
}

export function generarToken() {
  let token = "token_" + Math.random().toString(36).substring(2) + "-" + Math.random().toString(36).substring(2);
  return token;
}

export function alertaGeneral(redireccion, mensaje, ruta) {
    Swal.fire({
        title: mensaje,
        icon: "info",
        confirmButtonText: "Ok",
    }).then(() => {
        if (ruta) {
            redireccion(ruta);
        }
    });
}