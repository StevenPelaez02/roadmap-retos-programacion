class Animal{
    constructor(raza, color, peligro){
        this.raza = raza
        this.color = color
        this.peligro = peligro
    }
}

class Perro extends Animal{
    constructor(raza, color, peligro, edad){
        super(raza, color, peligro)
        this.edad = edad
    }
    sonido(){
        return console.log("GUUAAUU GUUAAUU")
    }
}

class Gato extends Animal{
    constructor(raza, color, peligro, edad){
        super(raza, color, peligro)
        this.edad = edad
    }
    sonido(){
        return console.log("MIIAAUU MIIAAUU")
    }
}

const gato = new Gato("siames", "naranja", "muy peligroso") 
const perro = new Perro("pitbull", "gris", "no es peligroso", 3)

gato.color = "morado";
perro.peligro = "peligroso"

console.log(gato)
gato.sonido()
console.log(perro)
perro.sonido()


// DIFICULTAD EXTRA

class Empleado{
    constructor(nombre, identificador){
        this.nombre = nombre
        this.identificador = identificador
    }
}

class Programador extends Empleado{
    constructor(nombre, cargo, nivel){
        super(nombre, cargo)
        this.nombre = nombre
        this.cargo = cargo
        this.nivel = nivel
    }
}

class Gerente extends Empleado{
    constructor(nombre, cargo){
        super(nombre, cargo)
        this.nombre = nombre
        this.cargo = cargo
        this.cantTrabajadores = []
    }

    agregarEmpleado(empleado){
        this.cantTrabajadores.push(empleado)
    }
}

class GerenteDeProyecto extends Empleado{
    constructor(nombre, cargo){
        super(nombre, cargo)
        this.nombre = nombre
        this.cargo = cargo
        this.cantTrabajadores = []
    }

    agregarEmpleado(empleado){
        this.cantTrabajadores.push(empleado)
    }
}


const programador1 = new Programador("steven", "programador", "senior")
const gerente = new Gerente("carlos", "gerente de lenguajes")
const gerenteDeProyecto =  new GerenteDeProyecto("sebastian", "proyecto-web")

gerente.agregarEmpleado(["carlos", "thian", "casimiro"])
gerenteDeProyecto.agregarEmpleado(programador1)

console.log(programador1)
console.log(gerente)
console.log(gerenteDeProyecto)