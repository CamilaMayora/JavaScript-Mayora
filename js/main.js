
const vehiculos = document.getElementById("auto")
const cartel = document.getElementById("cartel")
const ayuda = document.getElementById("ayuda")
const cartel2 = document.getElementById("cartelAyuda")
const cerrar1 = document.getElementById("cerrar-cartel")
const cerrar2 = document.getElementById("cerrar-cartel2")


function AbrirCartel (element, evento, accion){
    element.addEventListener(evento,  accion)
}

function CerrarCartel(element, evento, accion){
    element.addEventListener(evento,accion)
}


CerrarCartel(cerrar1, "click", () => {
    cartel.style.display  = "none"
})

CerrarCartel(cerrar2, "click", () => {
    cartel2.style.display  = "none"
})



AbrirCartel(vehiculos,  "click", () => {
    cartel.style.display = "block"
})

AbrirCartel(ayuda, "click", () => {
    cartel2.style.display = "block"
})

function Vehiculo(marca){
    const resultados = document.getElementById("resultados")
    const usuario = marca.toLowerCase()

    resultados.innerHTML=""

    if(Autos[usuario]){
        Autos[usuario].forEach(auto => {
            const info = 
        `<div>
        <div class="car-card">
        <h3 class="car-model"> ${auto.modelo}</h3>
        <p class="car-detail">Color: ${auto.color}</p>
        <p class="car-detail">Tipo: ${auto.tipo}</p>
        <p class="car-detail">Año: ${auto.año}</p>
        <p class="car-price">Precio: ${auto.precio}</p>
        <br>
        <a href="../html/login.html"class="boton"<button>Alquilar</button></a>
        </div>
        </div>`

        resultados.innerHTML += info
        })
    }else {
        resultados.innerHTML = "<p>No encontramos resultados...</p>"
    }
}

function Ayuda(marca){
const eleccion = marca.toLowerCase()
const resultado = document.getElementById("resultado")
resultado.innerHTML=""

if(Autos[eleccion]){
    Autos[eleccion].forEach(auto => {
        const info = 
    `<div class="cars-container">
    <div class="car-card">
    <h3  class="car-model"> ${auto.modelo}</h3>
    <p class="car-detail">Tipo: ${auto.tipo}</p>
    <p class="car-detail">Año: ${auto.año}</p>
    <p class="car-description">Descripcion: ${auto.descripcion}</p>
    <p class="car-price">Precio: ${auto.precio}</p>
    </div>
    </div>`
    resultado.innerHTML += info
    })
}else {
    resultado.innerHTML = "<p>No encontramos resultados...</p>"
}
}

function guardarDatos(){
    const name = document.getElementById('name')
    const number = document.getElementById('number')
    const date = document.getElementById('date')
    const nationality = document.getElementById('nationality')
    const city = document.getElementById('city')

    const resultado = document.getElementById('Alerta')

    resultado.innerHTML = ''

    const valor1 = name.value
    const valor2 = number.value
    const valor3 = date.value
    const valor4 = nationality.value
    const valor5 = city.value


    if(valor1 && valor2 && valor3 && valor4 && valor5){
        const data = {
            valor1: valor1,
            valor2: valor2,
            valor3: valor3,
            valor4: valor4,
            valor5: valor5
        }

        const dataJSON = JSON.stringify(data)

        localStorage.setItem('guardarDatos', dataJSON )

        const mensaje = 
            `
            <p class="mensajeExito">Formulario Enviado. En breve nos comunicaremos</p>
            <br>
            <p class="mensajeExito"> Gracias por confiar en ConfiRent </p>
            `
        

        resultado.innerHTML += mensaje
    }else{
        resultado.innerHTML = '<p class="mensajeError" >Revise el formulario y vuelva a intentarlo</p>'
    }
} 
