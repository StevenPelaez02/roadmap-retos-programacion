function x(nombre){
    nombre = 6
    return nombre
}

const funcion = () =>{
    console.log("Hola Mundo")
}

const funcion2 = () =>{

    // function var(){
            //este tipo de funcion no la deja crean dentro de otra
    // }

    const xx = () =>{
        console.log("Este tipo de funcion flecha si la deja crear dentro de otra funcion")
    } 
}

let steven = 8//variable local
camilo // o (var camilo) variable global

if( steven == 8){
    let local = 6
    var global = 5
    console.log(local)
    console.log(global)
}
console.log(local) //esta no se deberia mostrar ya que como es local y al estar creada dento de un bloque solo pertenece alli
console.log(global) //esta de lo contrario no importa donde se declare siempre va a funcionar

const numeros = (para1, para2) =>{
    
    for(let i = 1; i <= 100; i++){
        if((i % 3) === 0){
            console.log(para1)
        }
        else if((i % 5) === 0){
            console.log(para2)
        }
        else if(((i % 3) === 0) && ((i % 5) === 0))
            console.log(para1 + para2)
    }
    return x
}