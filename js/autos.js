async function cargarAutos() {
  try {
    const res = await fetch('../autos.JSON');
    if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

    const data = await res.json();
    const contenedor = document.getElementById('informacion');

    function procesarAutos(autos, callback) {
      autos.forEach(auto => callback(auto));
    }

    function crearYAgregarTarjeta(auto, marca) {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta-auto');

      tarjeta.innerHTML = `
        <img src="${auto.img}" alt="${auto.modelo}" class="imagen-auto" />
        <div class="informacion-auto">
          <h2 class="nombre-auto">${auto.modelo}</h2>
          <p><strong>Marca:</strong> ${marca}</p>
          <p><strong>Año:</strong> ${auto.año}</p>
          <p><strong>Tipo:</strong> ${auto.tipo}</p>
          <p><strong>Color:</strong> ${auto.color}</p>
          <p><strong>Motor:</strong> ${auto.motor}</p>
          <p><strong>Precio:</strong> <span class="precio">$${auto.precio}</span></p>
          <button class="boton btn-quiero">Lo quiero</button>
        </div>
      `;

      contenedor.appendChild(tarjeta);
    }

    Object.keys(data).forEach(marca => {
      const autos = data[marca];
      procesarAutos(autos, auto => crearYAgregarTarjeta(auto, marca));
    });

  } catch (error) {
    console.error('Error cargando autos:', error);

    Toastify({
      text: "Error al cargar los autos. Por favor, intentá más tarde.",
      duration: 4000,
      close: true,
      gravity: "top",
      position: "center",
      color: "#f1f1f1",
      backgroundColor: "rgb(136, 2, 2)",
    }).showToast();
  }
}

cargarAutos();

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("btn-quiero")) {
    const formContainer = document.getElementById("form");
    formContainer.style.display = "block";

    const tarjeta = e.target.closest(".tarjeta-auto");
    const imgSrc = tarjeta.querySelector(".imagen-auto").src;
    const modelo = tarjeta.querySelector(".nombre-auto").textContent;
    const marca = tarjeta.querySelector("p strong").nextSibling.textContent.trim();

    const infoParrafos = tarjeta.querySelectorAll(".informacion-auto p");
    let marcaTexto = '';
    infoParrafos.forEach(p => {
      if(p.textContent.includes("Marca:")) marcaTexto = p.textContent.replace("Marca:", "").trim();
    });

    const imgFormulario = document.getElementById("img");
    imgFormulario.src = imgSrc;
    imgFormulario.alt = modelo;

    const autoSeleccionado = {
      modelo,
      marca: marcaTexto,
      img: imgSrc
    }
    localStorage.setItem('autoSeleccionado', JSON.stringify(autoSeleccionado));
  }
});

function CerrarCartel(element, evento, accion){
  element.addEventListener(evento, accion)
}
const cartel = document.getElementById("form");
const cerrar1 = document.getElementById("cerrar-cartel");

CerrarCartel(cerrar1, "click", () => {
  cartel.style.display = "none"
});











