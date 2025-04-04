alert("Bienvenido a ⚡ConfiRent")

const menuOpciones = [
    { id: 1, nombre: "Elegir auto"},
    { id: 2, nombre: "Ayuda para buscar auto"},
    { id: 3, nombre: "Salir"}
];

let listaMenu = menuOpciones.map(menu => `${menu.id}. ${menu.nombre}`).join
("\n")

const autos = [
    { marca: "Chevrolet", precio: 10000, maxpasajeros:7 },
    { marca: "Toyota", precio: 15000, maxpasajeros:8 },
    { marca: "Mercedes Benz", precio: 25000, maxpasajeros:8  },
    { marca: "Lamborghini", precio: 40000, maxpasajeros:2 }
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



function Autoseleccionado() {
    let listaMarca = autos.map(auto => `\n ${auto.marca} Máx: ${auto.maxpasajeros} pasajeros `).join(",\n");
    
    let usuario = prompt("Selecciona una marca de auto:" + listaMarca);
    if (!usuario) {
        alert("No ingresaste una marca. Intenta de nuevo.");
        return;
    }

    let eleccion = usuario.toUpperCase();
    let pasajeros = parseInt(prompt("Indique número de pasajeros:"));
    let dinero = parseInt(prompt("Indique presupuesto:"));

    if (isNaN(pasajeros) || isNaN(dinero)) {
        alert("Entrada inválida. Asegúrate de ingresar valores numéricos.");
        return;
    }

    let autoSeleccionado = autos.find(auto => auto.marca.toUpperCase() === eleccion);

    if (!autoSeleccionado) {
        alert("Marca no encontrada. Inténtalo de nuevo.");
        return;
    }

    if (pasajeros <= autoSeleccionado.maxpasajeros && dinero >= autoSeleccionado.precio) {
        alert(`Buena elección! \nEl ${autoSeleccionado.marca} tiene un precio de ${autoSeleccionado.precio} x día y un máximo de ${autoSeleccionado.maxpasajeros} pasajeros.`);
        console.log("Vehículo seleccionado con éxito.");
    } else {
        alert("No cumple con los requisitos de pasajeros o presupuesto. Intenta de nuevo.");
        console.log("Error.");
    }
}


menu()

function Ayuda(){
    alert("Te ayudamos a buscar el auto que mas se adapte a tus necesidades. \n Estas listo?")

    let Nombre = prompt("ingresa tu nombre:")
    while (!Nombre){
        Nombre = prompt("Campo vacio, intente otra vez:")
    }

    let Numfamiliar = prompt("Numero de cantidad de personas(maximo 8):")
    while (isNaN(Numfamiliar) || Numfamiliar <= 0){
        Numfamiliar = parseInt(prompt("Número inválido, intenta otra vez:"));
    }

    let Presupuesto = parseInt(prompt("Presupuesto a gastar (minimo 10000):"))
    while (isNaN(Presupuesto) || Presupuesto <= 0){
        Presupuesto = parseInt(prompt("Presupuesto inválido, intenta otra vez:"));
    }

    let autorecomendado 

    if(Numfamiliar <= 5 && Presupuesto <= 10000000){
        autorecomendado = alert(`La mejor opcion es ${autos[0].marca} modelos como: 
            \n Spark
            \n Onix
            \n Aveo
            \n S10
            \n Silverado 
            \n con capacidad hasta 5 personas estos modelos se vuelven la mejor opcion`)

    } else if (Numfamiliar > 5 && Numfamiliar <=7 && Presupuesto <= 10000000){
        autorecomendado = alert(`La mejor opcion es ${autos[0].marca} modelos 
            como: 
            \n Tracker
            \n Equinox
            \n Traverse 
            \n con capacidad hasta 7 personas estos modelos se vuelven la mejor opcion`)

    } else if(Numfamiliar <= 5 && Presupuesto >= 15000000 && Presupuesto <= 20000000){
        autorecomendado = alert(`La mejor opcion es ${autos[1].marca} modelos 
        como: 
        \n Yaris
        \n Corolla
        \n Camry 
        \n con capacidad hasta 5 personas estos modelos se vuelven la mejor opcion`)

    } else if(Numfamiliar > 5 && Numfamiliar <= 8 && Presupuesto >= 15000000 && Presupuesto <= 20000000){
        autorecomendado = alert(`La mejor opcion es ${autos[1].marca} modelos 
        como: 
        \n RAV4
        \n Highlander
        \n Land Cruiser 
        \n con capacidad hasta 8 personas estos modelos se vuelven la mejor opcion`)

    }else if(Numfamiliar <= 5 && Presupuesto > 20000000 && Presupuesto <= 30000000){
        autorecomendado = alert(`La mejor opcion es ${autos[2].marca} modelos 
        como: 
        \n Clase A, B, C, E, S 
        \n con capacidad hasta 5 
        personas estos modelos se vuelven la mejor opcion. Estos son autos elegantes, cómodos y generalmente usados como sedanes de lujo`)

    } else if(Numfamiliar >= 5 && Numfamiliar <= 8 && Presupuesto > 30000000 && Presupuesto <= 40000000){
        autorecomendado = alert(`La mejor opcion es ${autos[2].marca} modelos 
        como:
        \n GLA, GLB, GLC, GLE
        \n Mercedes-Benz Vito, Clase V, Sprinter
        \n con capacidad hasta 8 personas estos modelos se vuelven la mejor opcion. Estas son ideales para familias grandes o uso comercial`)

    } else if(Numfamiliar == 2 && Presupuesto > 100000000){
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

