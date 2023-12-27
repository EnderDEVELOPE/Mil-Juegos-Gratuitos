document.addEventListener('DOMContentLoaded', function () {
    const toggleArrow = document.getElementById('toggleArrow');
    const contactoContent = document.querySelector('.contacto-content');
  
    toggleArrow.addEventListener('click', function () {
      contactoContent.style.display = (contactoContent.style.display === 'none' || contactoContent.style.display === '') ? 'block' : 'none';
    });
  });

  function enviarCorreo() {
    // Obtener el valor del campo de correo electrónico
    var email = document.getElementById("email").value;
  
    // Simular el envío de correo electrónico (esto debe hacerse en un servidor backend en una aplicación real)
    console.log("Correo electrónico enviado a: " + email);
  
    // Limpiar el campo de correo electrónico
    document.getElementById("email").value = "";
  
    // Mostrar un mensaje de agradecimiento
    alert("¡Gracias por su visita!");
  }

  function animarJuego(elemento) {
    elemento.style.transform = "scale(1.1)";
  }
  
  function resetearAnimacion(elemento) {
    elemento.style.transform = "scale(1)";
  }
  
  function enviarCorreo() {
    var email = document.getElementById("email").value;
    console.log("Correo electrónico enviado a: " + email);
    document.getElementById("email").value = "";
    alert("¡Gracias por su visita!");
  }
  