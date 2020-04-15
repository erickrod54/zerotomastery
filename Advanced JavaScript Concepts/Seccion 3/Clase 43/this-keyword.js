/**
 *  "this" is the object of a function is property of
 * 
 * "this" es el objeto del que la funcion es una propiedad
 * 
 * tenemos el ejemplo de crear una funcion "a" en el java
 * console y le pedimos que nos haga el console.log de "this"
 * y si este es propiedad directamente de window que objeto
 * crees que nos arrojara??
 * 
 * nos arrojara el objeto window - ver ejemplo-this - adjunto
 * 
 * pero aqui viene la pregunta para que seria util? si 
 * al apuntarnos al objeto global crearia confusion
 * 
 * bueno aqui viene la respuesta con este sencillo ejemplo
 * 
 */

 /**1 er ejercicio */

 const obj = {
     name: 'Billy',
     sing: function(){
         return 'lalala ' + this.name //esta funcion es 
                                     //propiedad de obj
                                    //si hacemos this.name
    //nos dara acceso a la variable name de obj dandonos
    //el increible poder y ventaja de no tener que modificar
    //nada en nuestra funcion al querer modificar el nombre
    // solo cambiamos 'Billy' por lo que queramos en obj
    //directamente sin tocar la function dentro de sing
     }
 }

 obj.sing()

 /**1 er ejercicio con una modificacion -codigo limpio- */

 /**tambien puedes cambiarlo a la nueva sintaxis y funcionara
  * se vera mas limpio
  */
 const obj = {
    name: 'Billy',
    sing(){// el cambio es en esta linea
        return 'lalala ' + this.name //esta funcion es 
                                    //propiedad de obj
                                   //si hacemos this.name
   //nos dara acceso a la variable name de obj dandonos
   //el increible poder y ventaja de no tener que modificar
   //nada en nuestra funcion al querer modificar el nombre
   // solo cambiamos 'Billy' por lo que queramos en obj
   //directamente sin tocar la function dentro de sing
    }
}

obj.sing()

/**vamos a darle mas utilidad, digamos que solo necesitamos
 * modificar una parte muy pequena del codigo, anadirle un
 * signo de exlamacion a la cancion
 * 
 */

 const obj = {
     name: 'Billy',
     sing(){
         return 'lalala ' + this.name
     },
     singAgain(){
         return this.sing() + '!' //aqui en esta linea mediante
     }                            //el uso de 'this' nos da 
                                  //acceso a sing -MISMO CODIGO
                                  //MULTIPLES OBJETOS-
 }

 obj.singAgain()

 /**
  * y cual es la meta del programador ahorrar lineas de 
  * codigo al no repetir cosas que ya habia escrito
  */

  /**
   * ASI DESCUBRIMOS EL PROPOSITO DE LA CREACION DE THIS
   * 
   * 1.- DARNOS ACCESO A LAS PROPIEDADES DE LOS OBJETOS
   * DE LOS CUALES LA FUNCION ES UNA PROPIEDAD PARA USARLOS
   * COMO SI ESTUVIESEN EN SU SCOPE LOCAL
   * 
   * 2.- PODEMOS EJECUTAR EL MISMO CODIGO PARA MULTIPLES 
   * OBJETOS
   */
  /**
   * vamos a dejar mas claro la tulizacion de un mismo 
   * codigo para multiples objetos que seria el segundo
   * proposito de la creacion de this
   * 
   */

/**codigo de Andrei */

function importantPerson(){
    console.log(this.name+'!')
}

const name = 'Sunny';

const obj1 = {
    name : 'Cassy',
    importantPerson: importantPerson
}

const obj2 = {
    name : 'Jacob',
    importantPerson:importantPerson
}

importantPerson()

/**codigo de Andrei modificado -da los resultados del video
 * puesto que esta afectada el scope chain por la linea
 * de codigo 107 al uso de const- */

function importantPerson(){
    console.log(this.name+'!')
}

var name = 'Sunny';

const obj1 = {
    name : 'Cassy',
    importantPerson: importantPerson
}

const obj2 = {
    name : 'Jacob',
    importantPerson:importantPerson
}

importantPerson()

 /**puedes probarlo en https://repl.it/repls/FastLinearBackup */