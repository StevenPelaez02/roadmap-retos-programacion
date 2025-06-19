let numero1 = 7 //por valor
let number2 = numero1 //por referencia
let arr1 = [10, 20] //por referencia
let arr2 = arr1 //por referencia

const porValor = (x)=>{
    let y = x
    console.log("lo que recibe la funcion: " + x)
    console.log("el valor asignado por referencia" + y)
    y = 15
    x = 15
    console.log("el valor de Y luego de ser modificado: " + y)
    console.log("el valor de X luego de ser modificado: " + x)
}

const porReferencia = (arr1) =>{
    let arr = arr1
    console.log("valor del arr que se paso por referencia: " + arr)
    console.log("valor del arr1 que recibio la funcion: " + arr1)
    arr.push(300)
    arr1.push(30)
    console.log("valor del arr que se paso por referencia y fue modificado" + arr) //como es por referencia ambos apuntan al mismo array
    console.log("valor del arr1 que recibio la funcion y fue modificado" + arr1) //como es por referencia ambos apuntan al mismo array
}

porValor(10)
porReferencia(arr1)

// DIFICULTAD EXTRA

let var1 = 10
let var2 = 20

let array1 = [10, 20, 30, 40, 50]
let array2 = ["hola", "soy", "steven"]

const programa1 = (Parametro1, Parametro2) =>{
    let temp = Parametro1
    Parametro1 = Parametro2
    Parametro2 = temp
    return {Parametro1, Parametro2}
}

const programa2 = (Parametro1, Parametro2) =>{
    let temp = Parametro1
    Parametro1.pop()
    Parametro1 = Parametro2
    Parametro2 = temp
    return [Parametro1, Parametro2]
}

let resultados = programa1(var1, var2)
let resultadosVar1 = resultados.Parametro1
let resultadosVar2 = resultados.Parametro2

console.log("resultados original: " + var1 + " El retornado: " + resultadosVar1)
console.log("resultados original: " + var2 + " El retornado: " + resultadosVar2)

let resultados2 = programa2(array1, array2)

let resultados2Array1 = resultados2[0]
let resultados2Array2 = resultados2[1]


console.log("resultados original: " + array1 + " El retornado: " + resultados2Array1)
console.log("resultados original: " + array2 + " El retornado: " + resultados2Array2)