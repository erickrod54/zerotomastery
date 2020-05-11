/**
 *
 * EL OBJETIVO DE ESTA CLASE ES SACAR A RELUCIR LAS 
 * CARACTERISTICAS DE LAS FUNCIONES COMO OBJETOS ESPECIALES
 * TAMBIEN LLAMADAS OBJETOS LLAMABLES OR CALLBACK OBJECTS
 * 
 * un objeto normal no tiene estas propiedades especiales y
   * es por esa razon que las funciones son objetos especiales
   * que conociendo estas caracteristicas podrian ser de gran
   * utilidad
   * 
   *  
 * Sobre las funciones:
 * 
 * las funciones en JavaScript son objetos, objetos que se pueden
 * llamar al crearse, cuando invocamos(Execution context) 
 * funciones, obtenemos dos parametros automaticamente:
 * 
 * 1.- Objeto "this".
 * 2.- Objeto "arguments" 
 * 
 * 
 */
/**las maneras de crear e invocar funciones que hemos visto 
 * son las sigiuientes:
 * 
 */

 /**1ERA MANERA DE INVOCAR  UNA FUNCION:*/
 
function one(){ // 1.- creamos la funcion
    return 1;
}

one()//2.- la invocamos

/**2DA MANERA DE INVOCAR  UNA FUNCION:(DENTRO DE UN OBJETO)*/

const obj = {
  two(){//1.- creamos la funcion dentro del objeto 
    return 2;
  }
}

obj.two()//2.- la invocamos como metodo de un objeto

/**3era MANERA DE INVOCAR  UNA FUNCION:(CON LOS METODOS 
 * PRE-BUILT DE JAVASCRIPT)*/

 function three(){ //1.- creamos la funcion
   return 3;
 }

 three.call()//2.- la llamamos con los metodos call() o apply() 

 /**4TA MANERA DE INVOCAR  UNA FUNCION:(MEDIANTE UN CONSTRUCTOR
  * DE FUNCIONES -se usa mucho en OOP-)*/

  const four = new Function('return 4')//1.- creamos la funcion

  four()// 2.- la llamamos

  /** cuando creamos una funcion creamos un objeto especial
   * que tiene unas propiedades especiales, 
   * 
   * 1.- cuando usamos los brackets '()' ejecuta la pieza
   * de codigo dentro de la funcion
   * 
   * 2.- la propiedad 'name', la cual es opcional recordemos
   * que tenemos las funciones anonimas
   * 
   * 3.- las propiedades que son los metodos call(), apply()
   * bind()
   *
   * un objeto normal no tiene estas propiedades especiales y
   * es por esa razon que las funciones son objetos especiales
   * que conociendo estas caracteristicas podrian ser de gran
   * utilidad 
   * 
   */
