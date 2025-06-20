class Heroe{
    constructor(nombre, poder, genero){
        this.nombre = nombre
        this.poder = poder
        this.genero = genero
    }

    golpe(){
        console.log(`${this.nombre} tira puño`)
    }

    patada(){
        console.log(`${this.nombre} tira Patada`)
    }

    superPoder(){
        console.log(`${this.nombre} tirar poderr`)
    }
}


const aquaman = new Heroe("aquaman", "control del agua", "masculino")

aquaman.nombre = "casimiro"
aquaman.poder = "comer helado"
aquaman.genero = "indefinido"

// aquaman.golpe()
// aquaman.patada()
// aquaman.superPoder()

// console.log(aquaman.nombre)
// console.log(aquaman)

// DIFICULTAD EXTRA

class Pila{
    constructor(){
        this.items = []
    }

    agregar(elemento){
        return this.items.push(elemento)
    }

    eliminar(){
        return this.items.pop()
    }

    cantidadDeElementos(){
        return console.log(this.items.length)
    }

    imprimir(){
        return console.log(this.items)
    }
}

const pila = new Pila()

pila.agregar(1)
pila.agregar(2)
pila.agregar(3)
pila.agregar(4)
pila.imprimir()
pila.eliminar()
pila.cantidadDeElementos()
pila.imprimir()


class Cola{
    constructor(){
        this.items = []
    }

    agregar(elemento){
        return this.items.push(elemento)
    }

    eliminar(){
        return this.items.shift()
    }

    cantidadDeElementos(){
        return console.log(this.items.length)
    }

    imprimir(){
        return console.log(this.items)
    }
}

const cola = new Cola()

cola.agregar(1)
cola.agregar(2)
cola.agregar(3)
cola.agregar(4)
cola.imprimir()
cola.eliminar()
cola.cantidadDeElementos()
cola.imprimir()