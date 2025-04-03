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

let usuario = prompt("Selecciona: " + listaMarca)

function usuarios(){
    let eleccion = usuario

    if( eleccion === "Chevrolet"){
        console.log(`Buena eleccion! El ${autos[0].marca} tiene un precio de: ${autos[0].precio}`)
    }
    else if(eleccion === "Toyota"){
        console.log(`Buena eleccion! El ${autos[1].marca} tiene un precio de: ${autos[1].precio}`)
    }
    else if(eleccion === "Mercedes-Benz"){
        console.log(`Buena eleccion! El ${autos[2].marca} tiene un precio de: ${autos[2].precio}`)
    }
    else if(eleccion === "Lamborghini"){
        console.log(`Buena eleccion! El ${autos[3].marca} tiene un precio de: ${autos[3].precio}`)
    }
    else{
        console.log("Marca no valida.")
    }
}

usuarios()