let autos = [
    { marca: "Chevrolet", precio: 10000 },
    { marca: "Toyota", precio: 15000 },
    { marca: "Mercedes-Benz", precio: 25000 },
    { marca: "Lamborghini", precio: 40000 }
];
//console.log(autos[0]);
//console.log(autos[1]);
//console.log(autos[2]);
let listaMarca = autos.map(auto => auto.marca).join(" , ");
alert("Bienvenido a ⚡ConfiRent")

let usuario = prompt("Selecciona: " + listaMarca)

function usuarios(){
    let eleccion = usuario

    if( eleccion === "Chevrolet"){
        alert(`Buena eleccion! El ${autos[0].marca} tiene un precio de: ${autos[0].precio}`)
        console.log("Vehiculo seleccionado con exito.")
    }
    else if(eleccion === "Toyota"){
        alert(`Buena eleccion! El ${autos[1].marca} tiene un precio de: ${autos[1].precio}`)
        console.log("Vehiculo seleccionado con exito.")
    }
    else if(eleccion === "Mercedes-Benz"){
        alert(`Buena eleccion! El ${autos[2].marca} tiene un precio de: ${autos[2].precio}`)
        console.log("Vehiculo seleccionado con exito.")
    }
    else if(eleccion === "Lamborghini"){
        alert(`Buena eleccion! El ${autos[3].marca} tiene un precio de: ${autos[3].precio}`)
        console.log("Vehiculo seleccionado con exito.")
    }
    else{
        alert("Marca no valida.")
        console.log("error.")
    }
}

usuarios()