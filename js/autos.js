fetch('../autos.JSON')
.then(res => res.json())
.then(data => {
  const contenedor = document.getElementById('informacion');

  Object.keys(data).forEach(marca => {
    const autos = data[marca];

    autos.forEach(auto => {
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
    <button class= "boton btn-quiero">Lo quiero</button>
  </div>
`;

      contenedor.appendChild(tarjeta);

    });
  });
})
.catch(err => console.error('Error cargando JSON:', err));


document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("btn-quiero")) {
    const formContainer = document.getElementById("form");
    formContainer.style.display = "block";

    const imagen = document.getElementById("imagen")
    const tarjeta = e.target.closest(".tarjeta-auto");
    const imgSrc = tarjeta.querySelector(".imagen-auto").src;

    img.src = imgSrc;
    imagen.style.display = "block";
  }
});






function CerrarCartel(element, evento, accion){
    element.addEventListener(evento,accion)
}
const cartel = document.getElementById("form")
const cerrar1 = document.getElementById("cerrar-cartel")

CerrarCartel(cerrar1, "click", () => {
    cartel.style.display  = "none"
})












