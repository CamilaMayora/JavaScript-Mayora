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
    <p><strong>Descripción:</strong> ${auto.descripcion}</p>
    <p><strong>Precio:</strong> <span class="precio">$${auto.precio}</span></p>
    <button class= "boton">Lo quiero</button>
  </div>
`;

      contenedor.appendChild(tarjeta);

    });
  });
})
.catch(err => console.error('Error cargando JSON:', err));










