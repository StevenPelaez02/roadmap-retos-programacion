let cadena = "hola soy steven"
let bools
let cont

cadena = cadena.toLowerCase() //Para convertir todo a minuscula
cadena = cadena.toUpperCase() //para convertir todo a mayuscula
cadena.length //Para mirar el tamaño del string
cadena = cadena.concat(" jajaja") //Para agregar mas contenido al string
cadena.toString() //Para convertir a string
bools = cadena.includes("HOLA") //Para mirar sin incluye lo que le decimos
bools = cadena.startsWith("HO") //Para mirar si la cadena comienza con lo que le pasemos
bools = cadena.endsWith("jaja") //Para mirar si la cadena termina con lo que le pasemos
cadena.trim() //Para eliminar espacios en blanco al inicio y final
cadena.trimStart() //para eliminar los espacios al inicio
cadena.trimEnd() //Para eliminar los espacios al final
cont = cadena.indexOf("E") //Busca la primera vez lo que le pasemos y nos devuelve el indice
cont = cadena.lastIndexOf("E") //Busca la ultima vez lo que le pasemos y nos devuelve el indice 
cadena.substring(1,6) //nos muestra la cadena desde uno menos del indice indicado
cadena = cadena.replace("HOLA", "hola") //Busca la primera palabra y si esta la reemplaza por la segunda que le pasamos
cadena.split(" ") //Donde encuentre lo que le pasemos lo corta y nos devuelve un array con cada uno de ellos
cadena = cadena.padEnd(30, ".") //El primer parametro es la cantidad de caracteres que queremos y el segundo es con lo que lo queremos rellenar (se rellena al final del string)
cadena = cadena.padStart(40,".") //El primer parametro es la cantidad de caracteres que queremos y el segundo es con lo que lo queremos rellenar (se rellena al incio del string)
cadena.slice(1, 5) //EL primer parametro es el indice donde vamos a comenzar y el segundo es hasta donde queremos que se muestre o que nos devulvea (nos devuelve uno menos del segundo indice indicado)

console.log(cadena)
console.log(bools)
console.log(cont)
console.log()
console.log()
console.log()

// DIFICULTAD EXTRA

// * Crea un programa que analice dos palabras diferentes y realice comprobaciones
// * para descubrir si son:
// * - Palíndromos
// * - Anagramas
// * - Isogramas

let palabra1 = "anilina"
let contador = (palabra1.length - 1)
let bool = false

for (let i = 0; i < palabra1.length; i++) {
    if(palabra1[i] === palabra1[contador]){
        bool = true
    } else {
        console.log("no es un palindromo")
        break
    }
    contador--
}
if(bool) console.log("es un palindromo")

//ANAGRAMA

let palabra2 = "gato"
let palabra3 = "gota"

const arr1 = palabra2.toLowerCase().split("").sort().join()
const arr2 = palabra3.toLowerCase().split("").sort().join()

if(arr1 === arr2) console.log("es un anagrama")
else console.log("no es un anagrama")

//ISOGRAMA

bool= false
contador = 0
palabra1 = "luz"

for (let i = 0; i < palabra1.length; i++) {
    for (let j = 0; j < palabra1.length; j++) {
        if((palabra1[j] === palabra1[i])){
            contador++
        }
    }
    if(contador > palabra1.length){
        console.log("no es un isograma")
        break
    }
}
if(contador === palabra1.length) console.log("es un isograma")

