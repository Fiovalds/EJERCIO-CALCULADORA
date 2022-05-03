
//Objetos de tipo funcion
const f2 = function() {
    console.log("F3!")
}


const f3 = function(num, f) {
    console.log("F3!" + num)
    f()
}


const f1 = function() {
//function f1() {
let numero = 10
let nombre= "Edgard"
let esJueves = true
let numeroDecimal = 10.4

const diaSemana = "Jueves"
const dias = ["lunes",12,true] //arreglos

//objetos Javascript (Diccionarios)
const persona = {
    nombre : "Edgard",
    edad : 27
    }

    console.log(dias[0])//dias[0] //par aacceder a los valores de un elemento mediante indice

    console.log(persona.edad)//par aacceder a los valores de un objeto mediante un punto

    //para modificar arreglos u objetoss por mas q le metas cons, son mutables
    dias[0] = "Martes"
    console.log(dias[0])

    persona.nombre = "Angel"
    console.log(persona.nombre)
    
}

//se ejecuta la funcion 
//f1()
f3(236,f2)

//nulos
let variable = null
variable = 10

//undefined -> no se recomienda usar
let vairbale2 = undefined
let variable3;
console.log(variable3)