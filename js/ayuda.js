fetch('../autos.JSON')
.then(res => res.json())
.then(data => {

    const contenedor = document.getElementById('contenedor')

Object.keys(data).forEach(marca => {
    const autos = data[marca];

    autos.forEach(Info => {
    const info = document.createElement('div')
    info.classList.add('info-card')

    info.innerHTML= `
    <div>
    <img src="${Info.img}" alt="${Info.modelo}" class="imagen" />
    <h2> ${Info.modelo} </h2>
    <p><strong>Motor:</strong> ${Info.motor}</p>
     <p><strong>Tipo:</strong> ${Info.tipo}</p>
    <p><strong>Descripción:</strong> ${Info.descripcion}</p>
    </div>
    `


    contenedor.appendChild(info);

    });
  });
})
.catch(err => console.error('Error', err))