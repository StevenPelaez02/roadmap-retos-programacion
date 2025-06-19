let numeros = [23, 4324, 432, 32, 21, 243, 213, 12]

numeros.push(23, 21) //agregamos elementos al final del array
numeros.pop() //eliminamos el ultimo elemento del array
numeros.reverse() // nos da el array de manera inversa
numeros.unshift(0) //agregamos un nuevo elemento al inicio
numeros.sort() //nos ordena el array de menor a mayo
numeros[1] = 2 // en la posicion 1 cambiamos un elemento del array

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]) //imprimimos todo el array
}

let palabras = ["hola", "steven", "como", "estas"]

palabras.sort() //ordenamos de manera alfabetica
palabras.unshift("jajaja") //agregamos uno mas al incio
palabras.push("zzz") // agregamos uno al final del array
palabras.pop() // eliminamos el ultimo elemento
palabras.splice(0,1,"aaaa") // desde la posicion 0 eliminamos 1 elemento y a partir de esa posicion agregamos uno nuevo
palabras.reverse() //invertimos el array

for (let i = 0; i < palabras.length; i++) {
    console.log(palabras[i]) //imprimimos todo el array
}

let matriz =[[1, 2, 3], 
            [4, 5, 6]]

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]) //imprimimos toda la matriz
    }
}

for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" ")) //imprimimos la matriz por filas y separadas por un espacio
}

let persona = {
    nombre: "steven",
    apellido: "rengifo",
    edad: "22"
}

persona.nombre = "casimiro" //cambiamos el nombre del array asociativo
persona.edad = "55" // cambiamos la edad
persona.apellido = "xxx" // cambiamos el apellido
persona["estudio"] = "universidad" // agregamos una nueva propiedad 
delete persona.estudio //eliminamos la propiedad en este caso (estudio)
console.log(persona)

// DIFICULTAD EXTRA

// Crea una agenda de contactos por terminal.
//  * - Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
//  * - Cada contacto debe tener un nombre y un número de teléfono.
//  * - El programa solicita en primer lugar cuál es la operación que se quiere realizar, y a continuación
//  *   los datos necesarios para llevarla a cabo.
//  * - El programa no puede dejar introducir números de teléfono no númericos y con más de 11 dígitos.
//  *   (o el número de dígitos que quieras)
//  * - También se debe proponer una operación de finalización del programa.
//  */

var agenda = [
    {nombre: "steven", numero: 12345},
    {nombre: "casimiro", numero: 65543},
    {nombre: "rrr", numero: 97783}
]

console.log("")
console.log("")
console.log("")

const busqueda = ()=>{
    let nombre = prompt("nombre del contacto")
    let encontrado = false
    for (let i = 0; i < agenda.length; i++) {
        if(nombre === agenda[i].nombre){
            console.log(`nombre: ${agenda[i].nombre} numero: ${agenda[i].numero}`)
            encontrado = true
            break
        }
    }
    if(!encontrado){
            console.log("el contacto no se encuentra en tu agenda")
        }
}

const insercion = ()=>{
    let nombre = prompt("nombre del nuevo contacto")
    let numero = prompt("numero del nuevo contacto")
    agenda.push({nombre: nombre, numero: numero})
}
const actualizacion = ()=>{
    let nombre = prompt("nombre del contacto")
    let encontrado = false
    for (let i = 0; i < agenda.length; i++) {
        if(nombre === agenda[i].nombre){
            nombre = prompt("escriba el nombre nuevo:")
            let numero = parseInt(prompt("digite el nuevo numero"))
            agenda[i].nombre = nombre
            agenda[i].numero = numero
            encontrado = true
            break
        }
    }
    if(!encontrado){
            console.log("el contacto no se encuentra en tu agenda")
        }
}
const eliminacion = ()=>{
    let nombre = prompt("nombre del contacto")
    let encontrado = false
    for (let i = 0; i < agenda.length; i++) {
        if(nombre === agenda[i].nombre){
            delete agenda[i]
            encontrado = true
        }
    }
    if(!encontrado){
            console.log("el contacto no se encuentra en tu agenda")
        }
}

const listar = ()=>{
    for (let i = 0; i < agenda.length; i++) {
        console.log(agenda[i])
    }
}


do{
    var eleccion = parseInt(prompt(`que deseas realizar
            1. busqueda de algun contacto
            2. agregar un contacto nuevo
            3. actualizar algun contacto
            4. eliminar algun contacto
            5. listar agenda
            0. salir`))
    switch(eleccion){
        case 1: busqueda();
                break;
        case 2: insercion()
                break
        case 3: actualizacion()
                break
        case 4: eliminacion()
                break
        case 5: listar()
                break
        case 0: break
        default: break
    }
}while(eleccion !== 0)