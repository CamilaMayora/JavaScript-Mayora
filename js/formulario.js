const form = document.getElementById('formularioAlquiler');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const errores = [];

  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const edad = parseInt(document.getElementById('edad').value);
  const licencia = document.getElementById('licencia').value.trim();
  const documento = document.getElementById('documento').value.trim();
  const ciudad = document.getElementById('ciudad').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const email = document.getElementById('email').value.trim();
  const kms = parseInt(document.getElementById('kms').value);
  const lugar = document.getElementById('lugar').value.trim();
  const personas = parseInt(document.getElementById('personas').value);
  const fecha = document.getElementById('fecha').value;
  const duracion = parseInt(document.getElementById('duracion').value);
  const tipo = document.getElementById('tipo').value;



  /* ! Validaciones con validator.js */

  if (!validator.isAlpha(nombre, 'es-ES', { ignore: ' ' })) 
    errores.push("Nombre inválido.");

  if (!validator.isAlpha(apellido, 'es-ES', { ignore: ' ' })) 
    errores.push("Apellido inválido.");

  if (isNaN(edad) || edad < 18) 
    errores.push("Debe tener al menos 18 años.");

  if (!validator.isAlphanumeric(licencia)) 
    errores.push("Licencia inválida.");

  if (!validator.isNumeric(documento) || documento.length < 7 || documento.length > 9) 
    errores.push("Documento inválido.");

  if (!validator.isAlpha(ciudad, 'es-ES', { ignore: ' ' })) 
    errores.push("Ciudad inválida.");

  if (!validator.isMobilePhone(telefono, 'es-AR')) 
    errores.push("Teléfono inválido.(Recuerda el +54)");

  if (!validator.isEmail(email)) 
    errores.push("Email inválido.");

  if (isNaN(kms) || kms < 1) 
    errores.push("Kilómetros inválidos.");

  if (!validator.isAlpha(lugar, 'es-ES', { ignore: ' ' })) 
    errores.push("Lugar inválido.");

  if (isNaN(personas) || personas < 1) 
    errores.push("Cantidad de personas inválida.");

  if (!validator.isDate(fecha)) 
    errores.push("Fecha inválida.");

  if (isNaN(duracion) || duracion < 1) 
    errores.push("Duración inválida.");

  if (!tipo) errores.push("Seleccioná un tipo de viaje.");

  const errorDiv = document.getElementById('errorMensaje');
  errorDiv.innerHTML = '';
  if (errores.length > 0) {
    errores.forEach(err => {
      const p = document.createElement('p');
      p.textContent = err;
      errorDiv.appendChild(p);
    });
  } else {
    const datosFormulario = {
        nombre,
        apellido,
        edad,
        licencia,
        documento,
        ciudad,
        telefono,
        email,
        kms,
        lugar,
        personas,
        fecha,
        duracion,
        tipo
      };

      localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario));

      
    Toastify({
        text: "¡Formulario enviado con éxito!",
        duration: 4000, 
        close: true,    
        gravity: "top", 
        position: "center", 
        backgroundColor: "linear-gradient(to right, #1F3B4D, #f1f1f1)",
      }).showToast();
  }
});
