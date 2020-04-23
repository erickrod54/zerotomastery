/**
 * el objetivo de esta clase es enfatizar el hecho de que cuando 
 * usamos el keyword "this" no importa como nuestro codigo este 
 * escrito(lexical scoping), lo que importa es como llamamos "()"
 *  a nuestra funcion ya que eso nos dara acceso a las funciones,
 *  variables, y data que queremos acceder correctamente
 * (siendo esto dynamic scope)
 * 
 * EL OBJETIVO DE ESTA CLASE ES ENFATIZAR EL HECHO DE QUE
 * CUANDO USAMOS EL KEYWORD "THIS" NO IMPORTA COMO NUESTRO
 * CODIGO ESTE ESCRITO (LEXICAL SCOPING), LO QUE IMPORTA
 * ES COMO LLAMAMOS "()" A NUESTRA FUNCION YA QUE ESO NOS 
 * DARA ACCESO A LAS (FUNCIONES, VARIABLES Y DATA) QUE 
 * QUEREMOS ACCEDER CORECTAMENTE (SIENDO ESTO SCOPE DINAMICO)
 * 
 * recuerdas lexycal scope que determina el acceso a las 
 * variables en nuestro variable enviroment, esto con el
 * ojeto this cambia puesto que ya no importa en el lugar
 * donde estan escritas nuestras variables sino "quien me 
 * esta llamando ?? (window.a -ejemplo-this clase 43-)"
 * y esto lo convierte en un scope dinamico
 * 
 /**
  *  1er ejercicio de scope dinamico usando el objeto "this":
  */

 /**1er ejercicio - lo probamos en javaConsole para que nos
  * de el resultado preciso recordar que repl tiene saveguards
  * que no nos generara los objetos a los cuales apunta "this" 
  * aunque la mayoria del tiempo funcionan bien
  * 
  * 
  * la razon por la que el resultado del scope chain de las
  * funciones a y b son window object es porque son funciones
  * no hay objeto a la izquierda mas que window (window.a(b()))
  * pero que sucede con c al observarlo vemos que es un objeto
  * entonces al hacer uso de el objeto "this" va a apuntar desde
  * la propiedad que se use en este caso 'hi: ' al objeto del
  * cual forma parte que seria el objeto 'c' (ver imagen
  * adjunta de 1er-ejercicio-resultado-explicado)
  * 
  */

 const a = function(){
    console.log('a', this)
    const b = function(){
        console.log('b', this)//a la izquierda de las funciones
                             //a y b en EC(execution context) 
                             //solo se encuentra window 
                             //object(global)

        const c = {// a partir de esta linea se dispara algo
                  //muy interesante que es la propiedad 'hi' 
                  //reflejando que pertenece(antes del punto 
                  //a la izquierda) a un objeto

            hi: function(){
            console.log('c', this)
        }}
        c.hi()
    }
    b()
} 

a()

/**si al probarlo da un error de "a identifier already declared"
 * es por la descripcion en el console.log 'a' /.... y hasta c
 cerrar la pestana para liberar la memoria*/

 /**
  * * 2do ejercicio de scope dinamico usando el objeto "this":
  * /** */

/**--------FUNCION ORIGINAL--------------- */

const obj = {
    name: 'Billy',
    sing(){ 
        console.log('a', this);
        var anotherFunc = function(){
            console.log('b', this)
        }
        anotherFunc()
    }
}

obj.sing()

/**dandonos como salida */
/**
 * 
 * a {name: "Billy", sing: ƒ}
 * b Window {parent: Window, opener: null, top: Window, length: 2, frames: Window, …}
 */

  /**
 * 
 * en este ejercicio podemos ver que aun estando 
 * "anotherFunction" dentro de sing(), "this" no nos
 * apunta hacia obj.sing, en cambio nos apunta hacia 
 * el objeto global window.. porque nos apunta al objeto
 * window?.. si en este caso anothetFunc se encuentra 
 * dentro de la funcion sing
 * 
 * el que anotherFunc muestre su "this" object como window
 * object y no como obj a donde pertenece sing, es porque
 * anotherFunc es llamado por sing()... no por el objeto obj
 * 
 * "no importa donde el codigo fue escrito(lexical scope),
 * lo que importa es donde es donde es llamado y por quien
 * (dinmyc scope)"
 * 
 * como podemos resolver este problema, usando el arrow
 * function, implementacion hecha en ES6 que lexicalmente
 * enlaza la funcion con el objeto que la contiene
 * (preguntara .. oye que objeto enlaza esto? ..)
 * 
  */
/**-----------------FUNCION MODIFICADA 1era solucion--------- */

const obj = {
    name: 'Billy',
    sing(){ 
        console.log('a', this);
        var anotherFunc = () => {
            console.log('b', this)
        }
        anotherFunc()
    }
}

obj.sing()

/**dandonos como resultado mediante la implementacion hecha en 
 * ES6 que lexicalmente enlaza la funcion con el objeto que la 
 * contiene
 * 
 * */

 /**
  * a {name: "Billy", sing: ƒ}
  * b {name: "Billy", sing: ƒ}
  * 
  */

/**-----------------FUNCION MODIFICADA 2da solucion--------- */

/** esta soclucion con bind un poco mas antigua funciona
 *  perfecto tmb*/

const obj = {
    name: 'Billy',
    sing(){ 
        console.log('a', this);
        var anotherFunc = function (){
            console.log('b', this)
        }
        return anotherFunc.bind(this)
    }
}

obj.sing()()

/**
 * 
 * resultandonos:
 * 
 * a {name: "Billy", sing: ƒ}
   b {name: "Billy", sing: ƒ}
 * 
 */

/**-----------------FUNCION MODIFICADA 3era solucion--------- */

const obj = {
    name: 'Billy',
    sing(){ 
        console.log(this);
//lo que hacemos es crear una referencia afuera de la funcion
        var self = this;
        var anotherFunc = function (){
//pasamos self como parametro  
            console.log(self)
        }
        return anotherFunc.bind(this)
    }
}

obj.sing()()

/**esta tercera solucion es muy aplicada cuando encontramos
 * codigo en jquery o en las primeras versiones de angular js
 */
/**
 * resultandonos:
 * 
 *  {name: "Billy", sing: ƒ}
 *  {name: "Billy", sing: ƒ}
 */

 /**
  * 
  * errores como estos, pueden ser solcucionados 
  * de estas 3 maneras antes de tener errores 
  * en la escritura de funciones
  * 
  * 1.- arrow function (enlaza al objeto).
  * 
  * 2.- bind (en el return de la funcion 
  *          hacemos el metodo bind sobre this)
  * 
  * 3.- hacemos referencia a this almacenandolo en una 
  *     variable y luego pasandolo por el scope de la funcion.
  */