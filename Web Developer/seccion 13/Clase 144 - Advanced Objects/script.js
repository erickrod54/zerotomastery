// REFERENCE TYPES

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

// hacemos las siguientes evaluaciones

object1 === object2

true  //cierto porque son el mismo objeto 
// imagina que tenemos el valor de object1 
// en una caja, y lo que hacemos con object2 
// no es una asignacion ... recordemos que estamos
// trabjando con estructuras de datos, con 
// object2 estamos "referenciando" a object1
// cualquiera que sea su contenido... si el contenido 
// de object1 cambia, la evaluacion de arriba 
// sera verdadera porque sigue referenciando a la caja 1

object1.value = 15;

object1 === object2

true

// pero si se cambia la referencia la evaluacion 
// sera falsa porque object2 seguira referenciando 
// la antigua referencia de object1

object1 = { value: 15 };

object1 === object2

false 

// IMPORTANTE - LA DIFERENCIA ENTRE TIPOS DE DATOS PRIMITIVOS
// Y LOS NO PRIMITIVOS ES QUE LOS PRIMEROS SON DEFINIDOS POR 
// EL LENGUAJE DE PROGRAMACION Y LOS DATOS NO PRIMITIVOS SON 
// DEFINIDOS (CREADOS) POR EL PROGRAMADOR 

// IMPORTANTE - UN ARRAY ES UN OBJETO

// CONTEXT vs SCOPE

// scope (alcance) se crea cuando se colocan los
// curley brackets como seria el ejemplo de una 
// funcion

function b() {
    let a = 4;//esta linea en particular vive con 
              //el universo de b
}

// si tratamos de imprimir el valor desde afuera del scope 
// de la funcion dara el siguiente error 

// console.log(a)
// VM1572:1 Uncaught ReferenceError: a is not defined
//     at <anonymous>:1:13

// simplemente porque a no existe fuera del universo de la
// funcion b 

// LA DIFERENCIA CON CONTEXT ES LA SIGUIENTE

// El 'contexto' te dice dónde estamos dentro del objeto.
// el ejemplo de abajo es en el contexto del javaconsole

console.log(this)

VM1705:1 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

// this esta haciendo referencia al conexto del 
// objeto que lo contiene en este caso seria window object
// validando lo expuesto podemos evaluarlo

console.log(this === window)
VM1773:1 true


// Entonces, lo que significa "this" es el entorno de 
// objeto en el que estamos ahora, la mejor manera de 
// pensarlo es

// ¿Qué hay a la izquierda del punto?

this.alert("hello")

window.alert("hello")

alert("hello")

// los resultados de las lineas anteriores son el mismo 
// un alert hello... porque "this" es el entorno de 
// objeto en el que estamos ahora (por ahora window)
// this referencia al objeto en el que estamos ahora

const object4 = {
    a: function(){
        console.log(this);
    }
}

object4.a()//llamamos la funcion a del objeto 4

    VM1916:3 
    {a: ƒ}
    a: ƒ ()
    arguments: null
    caller: null
    length: 0
    name: "a"
    prototype: {constructor: ƒ}
    __proto__: ƒ ()
    [[FunctionLocation]]: VM1916:2
    [[Scopes]]: Scopes[2]
    __proto__: Object

// y nos muestra el objeto con sus 2 scopes 
// este objeto completo es la referencia de "this"

// INSTANTIATION

// 'instanciación' es cuando haces una copia de un objeto
// y reutilizar el código.

//por ejemplo 

// Imagina que estás creando un gran juego 
// multijugador en línea, y este juego tendrá muchos jugadores.

class Player{
    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player{
    // creamos la clase wizard esta a su vez 
    // tendra tmb su propio constructor 
    constructor(name, type){
        super(name,type)
        // en el scope del constructor 
        // invocamos con super el name y el 
        // type de la clase player 
    }
    // y creamos un nuevo metodo para la clase wizard
    play() {
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

// en estas dos lineas estamos instanciando el objeto
// wizard con dos jugadores con name y type totalmente 
// distintos

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// y las respuestas serian 

wizard1.introduce()
VM1990:8 Hi I am Shelly, I'm a Healer

wizard1.play()
VM1990:17 WEEEEE I'm a Healer

wizard2.introduce()
VM1990:8 Hi I am Shawn, I'm a Dark Magic

wizard2.play()
VM1990:17 WEEEEE I'm a Dark Magic

// ahora veamos los contextos con this

class Player{
    constructor(name, type){
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player{
 
    constructor(name, type){
        super(name,type)
        console.log('wizard', this);
        // el console log siempre debe ir despues 
        // del llamado a super
    }
    play() {
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');

// y nos arroja como resultado los contextos 


player Wizard {}
        name: "Shelly"
        type: "Healer"
        __proto__: Player
        
wizard Wizard {name: "Shelly", type: "Healer"}
        name: "Shelly"
        type: "Healer"
        __proto__: Player