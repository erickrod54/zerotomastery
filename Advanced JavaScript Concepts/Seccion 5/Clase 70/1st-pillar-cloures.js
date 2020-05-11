/**EL OBJETIVO DE ESTA CLASE ES COMPRENDER EL TEMA DE CLOUSURES
 * QUE ES EL PRIMER PILAR DE JAVASCRIPT, 'CLOUSURES' ESTA BASADO:
 * 
 * 1.- EN HOF FUNCIONES QUE RETORNAN FUNCIONES O FUNCIONES QUE 
 * RETORNAN DATA O QUE RETORNAN AMBAS COSAS Y 
 * 
 * 2.- TAMBIEN ES DERIVADO DE LEXICAL SCOPE (DEPENDIENDO DE 
 * DONDE ESCRIBAMOS EL CODIGO, SE CONECTA MEDIANTE EL SCOPE 
 * CHAIN A LA MEMORIA HEAP LOGRANDO RETENER LA DATA AUN 
 * CUANDO EL SWIPE ALGORITH DE JAVA -GARBAGE COLLECTOR- 
 * LIBERE LA MEMORIA, EL ALGORITHMO EVALUARA QUE ESTA ESCRITO 
 * EN FORMA DE CLOSURE Y VACIARA EL VARIABLE ENVIROMENT DE LA 
 * FUNCION, PERO GUARDARA LAS VARIABLES PARA SER REHUSADAS EN 
 * EL FUTURO MANTENIENDO NUESTRO CODIGO DRY)
 *  
 * demostramos este proceso en el siguiente ejercicio:
 */

function a(){//1.- se crea la funcion, con el primer dato 
             //'grandpa'
   let grandpa = 'grandpa'
   return function b(){//2.- al retornar la funcion 'b', 
                       //garbage collector limpia de la 
                       //memoria heap la funcion 'a' y 
                       //se crea el segundo dato 
                       //'father'
    let father = 'father'
    return function c(){//3.- al retornar la funcion 'c', 
                        //garbage collector limpia de la 
                        //memoria heap la funcion 'b' y 
                        //se crea el tercer dato 
                        //'son', y aqui sucede el 'closure' 
                        //(caracteristica de javascript)
                        //los datos 'grandpa' > 'father' > 'son'
                        //permanecen guardados en la memoria
                        //y son utilizados por la funcion 'c'
      let son = 'son'
      return `${grandpa} > ${father} > ${son}`
    }
  }
 }

