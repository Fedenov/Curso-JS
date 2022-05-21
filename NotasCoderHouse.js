//let datos = {nombre : "Pepe", edad : 25, precio : 99.90, series : ["Dark", "Mr Robot0", "Castlevania"]};
let nombre = "Pepe";
let precio = 25;
//let precio = 99.90;
//let series = ["Dark", "Mr Robot0", "Castlevania"];
//let favoritas = {["Dark", "2000", "Tom Cruise"], ["Mr Robot", "2002", "Will Smith"], ["Castlevania", "2004", "Angelina Jolie"]};


// FUNCIONES:
console.log("---- FUNCIONES ----")
function retornarNombreYApellido(nombre, apellido){
    return nombre + " " + apellido
}
let nombreYApellido = retornarNombreYApellido("Federico", "Novelli")
console.log(nombreYApellido)

function retornoArray(nombre, apellido){
    return [nombre, apellido]
    if (nombre){
        console.log("esto nunca se ejecuta")
    }
}
let [nomb, apell] = retornoArray("Fede", "Nov")
console.log(nomb, apell)


// CLOSURE:
console.log("---- CLOSURE ----")
function retornarClosure(nombre){
    let apellido = "Nove"
    return function(){
        console.log(nombre, apellido)
        return 1
    }
}
let nombYApell = retornarClosure("Fed")
console.log(retornarClosure())
console.log(nombYApell())


//INCRUSTACION:
console.log("---- INCRUSTACION ----")
let nombr = "Fede"
let apellid = "Nove"
let altura = "1.70"
let peso = 75
let nombreyApellido = `${nombr} ${apellid}`
console.log(nombreyApellido)
let ficha = `
    Nombre: ${nombr}
    Apellido: ${apellid}
    Altura: ${altura}
    Peso: ${peso}
`
console.log(ficha)

// CLASES:
console.log("---- CLASES ----")
class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    // METODOS:
    decirPersona(){
        console.log("Esta es la persona...")
    }
    repetirPersona(identidad){
        console.log(`La persona tiene la identidad ${identidad}`)
    }
    static valor = 150
}
const federico = new Persona("Federico", "Novelli", 20)
console.log(federico)
console.log(federico.repetirPersona("yo"))
console.log(Persona.valor)
