alert("Bienvenido a ⚡ConfiRent")

const menuOpciones = [
    { id: 1, nombre: "Elegir auto"},
    { id: 2, nombre: "Ayuda para buscar auto"},
    { id: 3, nombre: "Salir"}
];

let listaMenu = menuOpciones.map(menu => `${menu.id}. ${menu.nombre}`).join
("\n")

const autos = [
    { marca: "Chevrolet", precio: 10000 },
    { marca: "Toyota", precio: 15000 },
    { marca: "Mercedes-Benz", precio: 25000 },
    { marca: "Lamborghini", precio: 40000 }
];

function menu() {
    let elegir;

    do {
        elegir = parseInt(prompt("Selecciona una opción:\n" + listaMenu));

        if (elegir === 1) {
            Autoseleccionado();
        } else if (elegir === 2) {
            Ayuda();
        } else if (elegir === 3) {
            alert("¡Gracias por usar ConfiRent! 🚗❤️");
            console.log("Operación finalizada");
            break;
        } else {
            alert("Opción no válida. Intenta de nuevo.");
        }

    } while (true); 
}



function Autoseleccionado(){
    let listaMarca = autos.map(auto => auto.marca).join(" , ");
    let usuario = prompt("Selecciona: " + listaMarca)
    const eleccion = usuario
    let pasajeros = parseInt(prompt("Indique numero de pasajeros:")) 
    let dinero = parseInt(prompt("Indique Presupuesto:"))

    if( eleccion === "Chevrolet" && pasajeros <=7 && dinero <=45000 ){
        alert(`Buena eleccion! El ${autos[0].marca} tiene un precio de:\n ${autos[0].precio} x dia \ny un maximo de 7 pasajeros`)
        console.log("Vehiculo seleccionado con exito.")
    }
    else if(eleccion === "Toyota" && pasajeros <=8 && dinero <=45000  ){
        alert(`Buena eleccion! El ${autos[1].marca} tiene un precio de:\n ${autos[1].precio} x dia\n y un maximo de 8 pasajeros`)
        console.log("Vehiculo seleccionado con exito.")
    }
    else if(eleccion === "Mercedes-Benz" && pasajeros <=8 && dinero <=45000 ){
        alert(`Buena eleccion! El ${autos[2].marca} tiene un precio de:\n ${autos[2].precio}x dia\n y un maximo de 8 pasajeros`)
        console.log("Vehiculo seleccionado con exito.")
    }
    else if(eleccion === "Lamborghini" && pasajeros ===2 && dinero >=45000 ){
        alert(`Buena eleccion! El ${autos[3].marca} tiene un precio de:\n ${autos[3].precio}x dia \ny un maximo de 2 pasajeros`)
        console.log("Vehiculo seleccionado con exito.")
    }
    else{
        alert("Error, intentalo otra vez")
        console.log("error.")
    }
}
 
menu()

function Ayuda(){
    alert("Te ayudamos a buscar el auto que mas se adapte a tus necesidades. \n Estas listo?")

    let Nombre = prompt("ingresa tu nombre:")
    while (!Nombre){
        Nombre = prompt("Campo vacio, intente otra vez:")
    }

    let Numfamiliar = prompt("Numero de cantidad de personas:")
    while (isNaN(Numfamiliar) || Numfamiliar <= 0){
        Numfamiliar = parseInt(prompt("Número inválido, intenta otra vez:"));
    }

    let Presupuesto = parseInt(prompt("Presupuesto a gastar:"))
    while (isNaN(Presupuesto) || Presupuesto <= 0){
        Presupuesto = parseInt(prompt("Presupuesto inválido, intenta otra vez:"));
    }

    let autorecomendado 

    if(Numfamiliar <= 5 && Presupuesto == 10000){
        autorecomendado = alert(`La mejor opcion es ${autos[0].marca} modelos como: 
            \n Spark
            \n Onix
            \n Aveo
            \n S10
            \n Silverado 
            \n con capacidad hasta 5 personas estos modelos se vuelven la mejor opcion`)

    } else if (Numfamiliar > 5 && Numfamiliar <=7 && Presupuesto == 10000){
        autorecomendado = alert(`La mejor opcion es ${autos[0].marca} modelos 
            como: 
            \n Tracker
            \n Equinox
            \n Traverse 
            \n con capacidad hasta 7 personas estos modelos se vuelven la mejor opcion`)

    } else if(Numfamiliar <= 5 && Presupuesto >= 10000 && Presupuesto <= 20000){
        autorecomendado = alert(`La mejor opcion es ${autos[1].marca} modelos 
        como: 
        \n Yaris
        \n Corolla
        \n Camry 
        \n con capacidad hasta 5 personas estos modelos se vuelven la mejor opcion`)

    } else if(Numfamiliar > 5 && Numfamiliar <= 8 && Presupuesto >= 10000 && Presupuesto <= 20000){
        autorecomendado = alert(`La mejor opcion es ${autos[1].marca} modelos 
        como: 
        \n RAV4
        \n Highlander
        \n Land Cruiser 
        \n con capacidad hasta 8 personas estos modelos se vuelven la mejor opcion`)

    }else if(Numfamiliar <= 5 && Presupuesto > 20000 && Presupuesto < 30000){
        autorecomendado = alert(`La mejor opcion es ${autos[2].marca} modelos 
        como: 
        \n Clase A, B, C, E, S 
        \n con capacidad hasta 5 
        personas estos modelos se vuelven la mejor opcion. Estos son autos elegantes, cómodos y generalmente usados como sedanes de lujo`)

    } else if(Numfamiliar >= 5 && Numfamiliar <= 8 && Presupuesto > 20000 && Presupuesto <= 35000){
        autorecomendado = alert(`La mejor opcion es ${autos[2].marca} modelos 
        como:
        \n GLA, GLB, GLC, GLE
        \n Mercedes-Benz Vito, Clase V, Sprinter
        \n con capacidad hasta 8 personas estos modelos se vuelven la mejor opcion. Estas son ideales para familias grandes o uso comercial`)

    } else if(Numfamiliar == 2 && Presupuesto > 45000){
        autorecomendado = alert(`La mejor opcion es ${autos[3].marca} modelos 
        como: 
        \n Huracan
        \n Aventador
        \n Revuelto
        \n Gallardo
        \n Urus
        \n Los Lamborghini son autos deportivos de lujo, diseñados principalmente para 2 personas.`)

    } else{
        alert("No pudimos encontrar un auto para tus necesidades, lo sentimos. ConfiRent❤️")
    }

    alert(`Hola ${Nombre}!👋Esperamos que la informacion te sea de ayuda`)
    
}

