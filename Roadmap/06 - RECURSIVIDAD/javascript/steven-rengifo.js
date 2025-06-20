const conteo = (cont)=>{
    if(0 > cont){
        return
    }
    console.log(cont)
    return conteo(cont - 1)
}
// conteo(100)

// DIFICULTAD EXTRA

//  * - Calcular el factorial de un número concreto (la función recibe ese número).

const factorial = (fact) =>{
    if(fact < 1){
        return 1
    }
    return fact * factorial(fact - 1)
}

// console.log(factorial(3))

//  * - Calcular el valor de un elemento concreto (según su posición) en la 
// *   sucesión de Fibonacci (la función recibe la posición).

const fibonacci = (num) =>{

    if(num === 0) return 0
    if(num === 1) return 1
    
    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(5))