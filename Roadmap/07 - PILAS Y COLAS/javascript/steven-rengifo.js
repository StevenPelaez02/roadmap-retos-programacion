class Pila{ //LIFO last in, firts out
    constructor(){
        this.items = []
    }

    agregar(elemento){
        return this.items.push(elemento)
    }

    eliminar(){
        return this.items.pop()
    }

    mirar(){
        return this.items[this.items.length - 1]
    }

    vacio(){
        return this.items.length === 0
    }
}

const pila = new Pila()

// pila.agregar(1)
// pila.agregar(5)
// pila.agregar(10)
// pila.eliminar()
// console.log(pila.mirar())
// console.log(pila.vacio())
// console.log(pila)

class Cola{ //FIFO Firts in, firts out
    constructor(){
        this.items = []
    }

    agregar(elemento){
        return this.items.push(elemento)
    }

    eliminar(){
        return this.items.shift()
    }

    mirar(){
        return this.items[0]
    }

    vacio(){
        return this.items.length === 0
    }
}

const cola = new Cola()

// cola.agregar(10)
// cola.agregar(20)
// cola.agregar(30)
// cola.eliminar()
// console.log(cola.mirar())
// console.log(cola.vacio())
// console.log(cola)

// Dificultad Extra