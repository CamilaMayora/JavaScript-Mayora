
const vehiculos = document.getElementById("auto")
const cartel = document.getElementById("cartel")
const ayuda = document.getElementById("ayuda")
const cartel2 = document.getElementById("cartelAyuda")
const cerrar1 = document.getElementById("cerrar-cartel")
const cerrar2 = document.getElementById("cerrar-cartel2")

const Autos ={
    chevrolet: [
        {
        modelo: 'Chevrolet Silverado',
        año: 2023,
        tipo: 'Pick-up',
        color: 'Negro',
        motor: '6.2L V8',
        descripcion: " Capacidad: 3-5 personas (doble cabina) Comodidad: Amplio espacio interior, asientos ergonómicos para viajes largos, pero posición de manejo más rígida típica de camionetas.",
        precio: 200
        },
        {
        modelo: 'Chevrolet Camaro',
        año: 2022,
        tipo: 'Deportivo',
        color: 'Rojo',
        motor: '6.2L V8',
        descripcion: " Capacidad: 4 personas (2+2, traseros ajustados), Comodidad: Asientos deportivos envolventes, baja altura de ingreso, poco espacio trasero (ideal para 2 adultos cómodos).",
        precio: 200
        },
        {
        modelo: 'Chevrolet Malibu',
        año: 2021,
        tipo: 'Sedán',
        color: 'Blanco',
        motor: '1.5L Turbo',
        descripcion:"Capacidad: 5 adultos (espacio generoso). Comodidad: Suspensión suave, amplio espacio para piernas en traseros, asientos acolchados (excelente para ciudad/carretera).",
        precio: 200
        },
        {
        modelo: 'Chevrolet Equinox',
        año: 2023,
        tipo: 'SUV',
        color: 'Azul',
        motor: '2.0L Turbo',
        descripcion:"Capacidad: 5 adultos (ó 7 en versión L). Comodidad: Altura elevada para fácil ingreso, asientos reclinables y buen espacio de carga (balance ciudad/viajes).",
        precio: 200
        },
    ],

    toyota: [
        {
        modelo: 'Toyota Camry',
        año: 2023,
        tipo: 'Sedán',
        color: 'Gris',
        motor: '2.5L I4',
        descripcion:"Capacidad: 5 adultos (espacio premium). Comodidad: Asientos ventilados disponibles,aislamiento acústico superior, suspensión adaptativa (el más lujoso de la línea)",        
        precio: 250
        },
        {
        modelo: 'Toyota Corolla',
        año: 2022,
        tipo: 'Sedán',
        color: 'Blanco',
        motor: '1.8L I4',
        descripcion:"Capacidad: 5 adultos (traseros algo justos). Comodidad: Asientos básicos pero ergonómicos, manejo ágil en ciudad (ideal para uso urbano).",
        precio: 250
        },
        {
        modelo: 'Toyota RAV4',
        año: 2023,
        tipo: 'SUV',
        color: 'Negro',
        motor: '2.5L I4',
        descripcion:" Capacidad: 5 adultos (versión híbrida disponible).Comodidad: Altura regulable, amplio campo visual, maletero de 580L (perfecto para familias activas).",
        precio: 250
        },
        {
        modelo: 'Toyota Tacoma',
        año: 2023,
        tipo: 'Pick-up',
        color: 'Azul',
        motor: '3.5L V6',
        descripcion:" Capacidad: 5 personas (Doble Cabina). Comodidad: Asientos reforzados para off-road, cabina insonorizada, versión TRD con suspensión especial para terrenos rudos.",
        precio: 250
        },
    ],
    
    mercedesbenz: [
        {
        modelo: 'Mercedes-Benz S-Class',
        año: 2023,
        tipo: 'Sedán',
        color: 'Plata',
        motor: '4.0L V8 Biturbo',
        descripcion:"Capacidad: 5 adultos (espacio ejecutivo). Comodidad: Asientos climatizados masajeadores, sistema de sonido Burmester 4D, suspensión Magic Body Control que lee el camino.",
        precio: 1000
        },
        {
        modelo: 'Mercedes-Benz E-Class',
        año: 2022,
        tipo: 'Sedán',
        color: 'Negro',
        motor: '3.0L I6 Turbo',
        descripcion:"Capacidad: 5 adultos. Comodidad: Asientos multicontorno con memoria, pantallas duales 12.3\", control de clima de 4 zonas y asistencia de conducción semi-autónoma.",
        precio: 1000
        },
        {
        modelo: 'Mercedes-Benz GLC',
        año: 2023,
        tipo: 'SUV',
        color: 'Blanco',
        motor: '2.0L I4 Turbo',
        descripcion:"Capacidad: 5 adultos (7 en versión L). Comodidad: Altura elevada para mejor visibilidad, techo panorámico, maletero de 550L y MBUX con realidad aumentada.",
        precio: 1000
        },
        {
        modelo: 'Mercedes-Benz A-Class',
        año: 2022,
        tipo: 'Hatchback',
        color: 'Azul',
        motor: '2.0L I4 Turbo',
        descripcion:"Capacidad: 5 adultos (compacto). Comodidad: Cabina digital widescreen, MBUX con reconocimiento de voz, asientos deportivos y manejo ágil para ciudad.",
        precio: 1000
        },
    ],

    lamborghini: [
        {
        modelo: 'Lamborghini Aventador',
        año: 2023,
        tipo: 'Deportivo',
        color: 'Amarillo',
        motor: '6.5L V12',
        descripcion:"Capacidad: 2 personas (configuración coupé). Comodidad: Asientos deportivos carbon fiber ajustables, modo Strada para conducción diaria y carrocería monocoque de fibra de carbono.",
        precio: 10000
        },
        {
        modelo: 'Lamborghini Huracán',
        año: 2022,
        tipo: 'Deportivo',
        color: 'Rojo',
        motor: '5.2L V10',
        descripcion:"Capacidad: 2 personas. Comodidad: Suspensión magnetorheológica, volante multifunción con modo ANIMA, y sistema de infoentretenimiento Lamborghini Connect.",
        precio: 10000
        },
        {
        modelo: 'Lamborghini Urus',
        año: 2023,
        tipo: 'SUV',
        color: 'Negro',
        motor: '4.0L V8 Biturbo',
        descripcion:"Capacidad: 5 adultos (lujo extremo). Comodidad: Asientos de piel premium con calefacción/ventilación, espacio para maletas de 616L y 4 modos de conducción (incluido Sabbia para arena).",
        precio: 10000
        },
        {
        modelo: 'Lamborghini Sián',
        año: 2022,
        tipo: 'Deportivo',
        color: 'Verde',
        motor: '6.5L V12 híbrido',
        descripcion:"Capacidad: 2 personas (edición limitada). Comodidad: Materiales exclusivos de personalización Ad Personam, tecnología supercapacitor y aerodinámica activa inteligente.",
        precio: 10000
        },
    ],
}

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
