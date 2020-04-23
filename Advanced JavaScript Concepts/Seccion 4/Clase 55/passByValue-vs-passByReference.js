/**
 * Paso por Valor -Pass by Value(para datos primitivos)
 * 
 * el paso por valor se realiza en tipos de datos primitivos
 * supongamos que tenemos las variables 'a' y 'b' y la variable
 * a tiene un valor de 5(tipo de dato numerico), y a 'b' le 
 * asignamos la variable 'a' (en esta asignacion se hace el paso
 * por valor) en 'b' se hace una copia exacta(se allocate 
 * espacio de memoria para el valor de esta variable) 
 * del valor de 'a' y asi ejecutemos operaciones distintas 
 * sobre 'a' y 'b', ni el valor de 'a' va a ser afectado por 
 * el valor de 'b' ni viceversa (esto ocupa espacio de memoria),
 *  a la data que puede ser sometida al paso por data 
 * se denomina data inmutable(porque no puede ser desglozada 
 * ni cambiada, la unica forma de cambiarla es 
 * eliminandola de la memoria)
 * 
 */

 var a = 5;//data inmutable(porque no puede ser desglozada 
            //ni cambiada, la unica forma de cambiarla es 
            //eliminandola de la memoria)

 var b = a; //se hace una copia exacta(se allocate 
           //espacio de memoria para el valor de 
           //esta variable)

 b++;

 console.log(a)
 console.log(b)

 /**resultando  */

 5/**valor original de 'a' en su forma inmutable */
 6

 /**ejecutando operaciones distintas */

 var a = 5;
 var b = a;

 b++; //ejecutamos operaciones distintas 
 a--; //sobre 'a' y 'b', ni el valor de 'a' va a ser 
      //afectado por el valor de 'b' ni viceversa


 console.log(a)
 console.log(b)

/**resultando  */

4
6

 /**
  * Paso por referencia -Pass by reference (para objetos)
  * 
  * en el caso de los objetos se da un paso por referencia 
  * tenemos de nuevo las variables 'a' y 'b', e igualmente
  * se hace una copia (pero no del objeto con lo que contenga)
  * de la referencia de memoria donde se encuentra el objeto
  * "el lenguaje dice hey! aca se encuentra este objeto", a la 
  * data que puede ser sometida al paso por referencia se 
  * denomina data mutable(porque puede ser desglozada y cambiada)
  */
 
let obj1 = {name:'Yao', password: '123'};

let obj2 = obj1; //se hace una copia 
                //(pero no del objeto 
                //con lo que contenga)
               //de la referencia de memoria 
               //donde se encuentra el objeto a y b son el
               // mismo objeto por ende las cualquier 
               //operacion que se haga en uno afecta al otro

obj2.password = 'easypeassy'//cambiamos la 
                           //propiedad password en obj2

console.log(obj1)
console.log(obj2)

/**resultandonos como salida, que es la mutacion de la data
 * de obj2 a obj1 siendo el cambio del valor password para 
 * los dos
  */

/**
 * { name: 'Yao', password: 'easypeassy' }
 * 
 * { name: 'Yao', password: 'easypeassy' }
 */

 /**el hecho de que en la linea 70, cuando se hace la
  * copia de la referencia "let obj2 = obj1;" por un lado
  * es positivo porque se ahorra espacio en memoria
  * al no tener que ubicar espacio de memoria para un
  * nuevo objeto con su valor, imagina que tenemos
  * un objeto gigante o un array inmenso, nos ocuparia
  * demasiada memoria generar copias y copias de este.
  * pero a veces necesitaremos copiar un objeto, lo
  * haremos en el ejercicio nro 2
 */

 /**pero es algo con lo que tenemos que tener cuidado */
 
 /**-------------------EJERCICIO NRO 2-------------------- */

 /**----------------Ejercicio Original-------------------- */

 /**tenemos el siguiente array(recordemos que un array 
  * es un objeto tambien) */

 
  var c = [1,2,3,4,5]
 var d = c;

 d.push(187628761)//estamos anadiendo un item a d

console.log('array d: ', d)
console.log('array c: ',c)

/**
 * 
 * pero cuando se anade un elemento en 'd' muta en 'c' al
 * igual como pasa con los objetos
 * 
 * array d:  [ 1, 2, 3, 4, 5, 187628761 ]
*  array c:  [ 1, 2, 3, 4, 5, 187628761 ]

 */

 /**----------------Ejercicio Modificado-------------------- */
 
 /**pero como hacemos la copia en el caso de los array
  * para poderlos modificar de manera independiente uno
  * de otro.. facil vaciando el array que queremos copiar
  * 'c' en un array nuevo ' [] ' almacedao en la variable 
  */
 var c = [1,2,3,4,5]

 var d = [].concat(c);/**vaciamos el array 'c' en un array
                      //vacio, que se encuentra asignado 
                      //a una variable 'd', haciendo asi 
                      //la copia exacta de la data de 'c' a 
                      'd'*/
 d.push(187628761)
 console.log('array d: ', d)
 console.log('array c: ',c)

 /**
  * permitiendonos la copia hecha con el metodo concat en la 
  * linea 143 ' var d = [].concat(c); ' que cualquier operacion
  * que hagamos en uno u otro, no mute y afecte la modificacion
  * a ambos array, sino que nos resulte en los dos resultados
  * distintos:
  * 
  * array d:  [ 1, 2, 3, 4, 5, 187628761 ]
  * array c:  [ 1, 2, 3, 4, 5 ]
  */

  /**------------------Ejecicio NRO 3 --------------------- */

  /**ahora digamos que queremos hacer una copia exacta con
   * objetos ya esto cambia un poco la forma de hacerlo, y hay
   * dos tipos de copias, una superficial (shallow) y una 
   * profunda(deep)
   * 
   * 
   */

   /***------------3.1 - shallow clonning object---------- */

   /**esta copia del objeto se hace a nivel superfical
    * que seria en la first layer - primera capa de las
    * propiedades del objeto
    */

   let obj = {a: 'a', b: 'b' , c:'c'};

   let clone = Object.assign({}, obj);/**esta linea es super
                                     //importante porque hace 
                                     //las veces de '[].concat(c)' 
                                     //en el ejercicio anterior.
                                    // Lo que hace 
                                    //'Object.assign({}, obj);'
   //es proporcionarnos un objeto vacio, donde lo llenaremos
   //con las propiedades, funciones, y data que este en el objeto
   //que le indiquemos como segundo parametro */

   clone.c = 5;
   
   console.log('objeto original obj1: ', obj)
   
   console.log('clone de obj1: ', clone)
   
     /**la linea del Object.assign tambien puede ser escrita de
    * de la siguiente manera {...obj} funcionara exactamente 
    * igual, esto se adopto en es6 y es mas limpio el codigo
    * 
    */

   let obj = {a: 'a', b: 'b' , c:'c'};
   let clone = {...obj};// igual a escribir 
                       //Object.assign({}, obj);
   
   clone.c = 5;
   
   console.log('objeto original obj1: ', obj)
   
   console.log('clone de obj1: ', clone)

   /***------------3.2 - deep clonning object---------- */

   /**
    * recordemos que para el shallow clonning (copia en la primera
    * capa)  tenemos dos alternativas ambas llegan al mismo 
    * resultad (linea 205 'let clone = {...obj}' y linea 182 
    * 'let clone = Object.assign({}, obj);') ahora tenemos 
    * deep cloning object, una de nuestras propiedades tiene 
    * almacenado un objeto creando una segunda capa de datos
    * .. como podriamos manipular datos en la segunda capa?
    * ...lo veremos a continuacion
    * 
    * 
    */

   let obj = 
   {
   a: 'a', 
   b: 'b' , 
   c:{
    deep: 'try and copy me'    
   }
};
   let clone = Object.assign({}, obj);
   let clone2 = {...obj};
   
   obj.c = 5;
   
   console.log('objeto original obj1: ', obj)
   console.log('clone de obj1: ', clone)
   console.log('clone2 de obj1: ', clone2)

   /**
    * resultandonos en el clone y clone2 el cambio en
    * 'c' y obj aun tiene el valor de '5', pero en este 
    * ejercicio de arriba tenemos cambios en la primera
    * capa aun 'linea 240 obj.c = 5;'
    * 
* objeto original obj1:  { a: 'a', b: 'b', c: 5 }
* clone de obj1:  { a: 'a', b: 'b', c: { deep: 'try and copy me' } }
* clone2 de obj1:  { a: 'a', b: 'b', c: { deep: 'try and copy me' } }

    * que sucede cuando modificamos la propiedad de 'c' que es
    * un objeto (linea 240):
    */

   let obj = 
   {
   a: 'a', 
   b: 'b' , 
   c:{
    deep: 'try and copy me'    
   }
};
   let clone = Object.assign({}, obj);
   let clone2 = {...obj};
   
   obj.c.deep = 'hahahahahha';
   
   console.log('objeto original obj1: ', obj)
   console.log('clone de obj1: ', clone)
   console.log('clone2 de obj1: ', clone2)

/**dando como resultado 
 * 
objeto original obj1:  { a: 'a', b: 'b', c: { deep: 'hahahahahha' } }
clone de obj1:  { a: 'a', b: 'b', c: { deep: 'hahahahahha' } }
clone2 de obj1:  { a: 'a', b: 'b', c: { deep: 'hahahahahha' } }
*/

/**me cambia los 3 objetos los dos clones y a obj dejando sin
 * utilidad las implementacion Object.assign y {...obj}
 * que podemos hacer para resolver esto, y la solucion es 
 * en usar JSON(al usar este metodo de deep clonning estamos
 * expuestos a experimentar problemas de rendimiento):
 * 
 */

let obj = 
{
a: 'a', 
b: 'b' , 
c:{
 deep: 'try and copy me'    
}
};
let clone = Object.assign({}, obj);
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'hahahahahha';

console.log('objeto original obj1: ', obj)
console.log('clone de obj1: ', clone)
console.log('clone2 de obj1: ', clone2)
console.log('(deep clone) Super clone de obj1: ', superClone)

/**dandonos como resultado
 *
 * 
 *  
objeto original obj1:  { a: 'a', b: 'b', c: { deep: 'hahahahahha' } }
clone de obj1:  { a: 'a', b: 'b', c: { deep: 'hahahahahha' } }
clone2 de obj1:  { a: 'a', b: 'b', c: { deep: 'hahahahahha' } }
(deep clone) Super clone de obj1:  { a: 'a', b: 'b', c: { deep: 'try and copy me' } }
 */

 /**viendo esto, con JSON hacemos copia de la primera y segunda
  * capa de datos (considerandose un deep clonning de obj)
  */

