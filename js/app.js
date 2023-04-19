import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll(".inputs");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

const formulario = document.querySelector('form[name="formulario-contacto"]');

function enviar(event) {
  event.preventDefault();

  // Validar los campos del formulario antes de enviarlo
  inputs.forEach((input) => {
    valida(input);
  });

  // Si todos los campos son válidos, enviar el formulario
  if (formulario.checkValidity()) {
    fetch('/', {
      method: 'POST',
      body: new FormData(formulario),
    })
      .then(() => {
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        formulario.reset();
      })
      .catch(() => {
        alert('Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
      });
  }
}

formulario.addEventListener('submit', enviar);
