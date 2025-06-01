function Datos() {

document.querySelector("#registroForm").style.display = "none";
document.querySelector("#loginForm").style.display = "none";


const formContainer = document.getElementById("form");
if (formContainer) formContainer.style.display = "block";


const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
if (usuario) {
    const emailInput = document.getElementById("email");
    if (emailInput) emailInput.value = usuario.email || "";
    const nombreInput = document.getElementById("nombre");
    if (nombreInput) nombreInput.value = usuario.nombre || "";
}


const auto = JSON.parse(localStorage.getItem("autoSeleccionado"));
if (auto) {
    const img = document.getElementById("img");
    const mostrarModelo = document.getElementById("mostrarModelo");

    if (mostrarModelo) mostrarModelo.textContent = `${auto.marca || ""} ${auto.modelo || ""}`.trim();
    if (img) {
    img.src = auto.img || "";
    img.alt = `${auto.marca || ""} ${auto.modelo || ""}`.trim();
    }
}
}


function mostrarDatosReserva() {
    const datosGuardados = localStorage.getItem("datosFormulario");
    if (datosGuardados) {
    const datos = JSON.parse(datosGuardados);

    document.getElementById("mostrarNombre").textContent = datos.nombre || "";
    document.getElementById("mostrarApellido").textContent = datos.apellido || "";
    document.getElementById("mostrarEdad").textContent = datos.edad || "";
    document.getElementById("mostrarLicencia").textContent = datos.licencia || "";
    document.getElementById("mostrarDocumento").textContent = datos.documento || "";
    document.getElementById("mostrarCiudad").textContent = datos.ciudad || "";
    document.getElementById("mostrarTelefono").textContent = datos.telefono || "";
    document.getElementById("mostrarEmail").textContent = datos.email || "";
    document.getElementById("mostrarKms").textContent = datos.kms || "";
    document.getElementById("mostrarLugar").textContent = datos.lugar || "";
    document.getElementById("mostrarPersonas").textContent = datos.personas || "";
    document.getElementById("mostrarFecha").textContent = datos.fecha || "";
    document.getElementById("mostrarDuracion").textContent = datos.duracion || "";
    document.getElementById("mostrarTipo").textContent = datos.tipo || "";
} else {
    const mostrarReserva = document.getElementById("mostrarReserva");
    if (mostrarReserva) mostrarReserva.textContent = "No hay reserva cargada.";
}
}

document.addEventListener("DOMContentLoaded", () => {
const usuarioLogueado = localStorage.getItem("usuarioLogueado");

if (usuarioLogueado) {
    Datos();
    mostrarDatosReserva();

    const mostrarReserva = document.getElementById("mostrarReserva");
    if (mostrarReserva) mostrarReserva.style.display = "block";
} else {
    document.querySelector("#registroForm").style.display = "block";
    document.querySelector("#loginForm").style.display = "block";

    const formContainer = document.getElementById("form");
    if (formContainer) formContainer.style.display = "none";

    const mostrarReserva = document.getElementById("mostrarReserva");
    if (mostrarReserva) mostrarReserva.style.display = "none";
}
});


document.getElementById("registroForm").addEventListener("submit", function (e) {
e.preventDefault();

const nombre = document.getElementById("regNombre").value.trim();
const email = document.getElementById("regEmail").value.trim();
const password = document.getElementById("regPassword").value;

const errores = [];

if (validator.isEmpty(nombre)) {
    errores.push("El nombre es obligatorio.");
}

if (!validator.isEmail(email)) {
    errores.push("El email no es válido.");
}

if (validator.isEmpty(password)) {
    errores.push("La contraseña es obligatoria.");
} else if (
    !validator.isStrongPassword(password, {
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0,
    })
) {
    errores.push(
    "La contraseña debe tener al menos 6 caracteres, incluyendo mayúsculas, minúsculas y números."
    );
}

if (errores.length > 0) {
    Toastify({
    text: errores.join("\n"),
    duration: 4000,
    gravity: "top",
    position: "center",
    backgroundColor: "red",
    stopOnFocus: true,
    }).showToast();
} else {
    const usuario = {
    nombre,
    email,
    password,
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

    Toastify({
    text: "¡Registro exitoso!",
    duration: 3000,
    gravity: "top",
    position: "center",
    backgroundColor: "#4CAF50",
    stopOnFocus: true,
    }).showToast();

    this.reset();
}
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
e.preventDefault();

const email = document.getElementById("loginEmail").value.trim();
const password = document.getElementById("loginPassword").value;

const usuarioGuardadoJSON = localStorage.getItem("usuarioRegistrado");
if (!usuarioGuardadoJSON) {
    Toastify({
    text: "No hay usuarios registrados. Por favor regístrate primero.",
    duration: 3000,
    gravity: "top",
    position: "center",
    backgroundColor: "red",
    stopOnFocus: true,
    }).showToast();
    return;
}

const usuarioGuardado = JSON.parse(usuarioGuardadoJSON);
if (email === usuarioGuardado.email && password === usuarioGuardado.password) {
    Toastify({
    text: "¡Inicio de sesión exitoso!",
    duration: 3000,
    gravity: "top",
    position: "center",
    backgroundColor: "#4CAF50",
    stopOnFocus: true,
    }).showToast();

    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioGuardado));

    Datos();
    mostrarDatosReserva();

    
    document.getElementById("mostrarReserva").style.display = "block";
    document.querySelector("#registroForm").style.display = "none";
    document.querySelector("#loginForm").style.display = "none";
} else {
    Toastify({
    text: "Email o contraseña incorrectos.",
    duration: 3000,
    gravity: "top",
    position: "center",
    backgroundColor: "red",
    stopOnFocus: true,
    }).showToast();
}
});

document.getElementById("btnBorrarReserva").addEventListener("click", () => {
    localStorage.removeItem("datosFormulario");
    localStorage.removeItem("autoSeleccionado");


const mostrarReserva = document.getElementById("mostrarReserva");
if (mostrarReserva) {
    mostrarReserva.textContent = "Reserva borrada.";
}


document.getElementById("mostrarReserva").style.display = "none";
document.querySelector("#registroForm").style.display = "block";
document.querySelector("#loginForm").style.display = "block";

Toastify({
    text: "Reserva borrada correctamente.",
    duration: 3000,
    gravity: "top",
    position: "center",
    backgroundColor: "var(--color-precios)",
    stopOnFocus: true,
}).showToast();
});
