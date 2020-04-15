/**
 * METODOS PARA MANIPULAR EL KEYWORD "this"
 * (estos 3 metodos se ven mucho para entrevistas
 * de desarrolladores senior)
 * 
 * 1.-call()
 *   
 * tiene el poder de copiar metodos de otros objetos, en
 * el objeto que queramos puede manejar lista de argumentos
 *    
 * 2.-apply()
 * 
 * tiene el poder de copiar metodos de otros objetos, en
 * el objeto que queramos, el tipo de datos que puede manejar
 * mejor son arrays o parametros
 * 
 * 
 * 3.-bind
 * 
 * el bind es como una curita.. el nos guarda cierto tipo
 * de contexto o function o scope jeje eso arruina un poco
 * toda la discucion sobre el scope chain pero puede ser
 * util para casos donde necesitemos almacenar un contexto
 * para un uso porterior
 * 
 * PROBAREMOS ESTOS 3 METODOS EN EL EJERCICIO A CONTINUACION
 * SE LLAMA WIZARD AND ARCHER
 * 
 * Ejericicio del wizard y El Archer (usamos El metodo heal 
 * propio del wizard (en el variable environment del wizard) 
 * copiandolo al archer para que tambien pueda curarse

 * 1.-call() - sobre wizard

 call() es el metodo nativo por el cual se hace la invocacion/llamada de cualquier funcion

       a.call() es igual a()

 */

 const wizard ={
     name: 'Merlin', 
     health: 100, 
     heal(){
         return this.health = 100;
        }
    }

    wizard.heal()

const archer = {
    name: 'Robin Hood', 
    health: 30
}

console.log(archer) //antes de copiar el metodo desde wizard
wizard.heal.call(archer)
console.log(archer)//despues de copiar el metodo desde wizard

/**
 * dandonos como resultado:
 * 
 * { name: 'Robin Hood', health: 30 }
   { name: 'Robin Hood', health: 100 }//lo sube a 100 por heal()
 */

/**ahora call tambien puedo pasarle parametos
 * modificamos:
 */

const wizard ={
    name: 'Merlin', 
    health: 100, 
    heal(num1,num2){//pasamos parametros
        return this.health += num1 + num2;//sumamos y acumulamos
       }
   }

   wizard.heal()

const archer = {
   name: 'Robin Hood', 
   health: 30
}

console.log(archer) //antes de copiar el metodo desde wizard
wizard.heal.call(archer, 50, 30)//pasamos los valores
console.log(archer)//despues de copiar el metodo desde wizard


/**nos da como resultado: *
 * 
 * { name: 'Robin Hood', health: 30 }
   { name: 'Robin Hood', health: 110 }// 50+30+30
 * 
 */

/**2.-apply() 
 * 
 * 
 */

const wizard ={
    name: 'Merlin', 
    health: 100, 
    heal(num1,num2){
        return this.health += num1 + num2;
       }
   }

   wizard.heal()

const archer = {
   name: 'Robin Hood', 
   health: 30
}

console.log(archer) 
wizard.heal.apply(archer, [100, 30])//hace exactamente lo mismo
console.log(archer)     //pero en el caso de tomar parametros .. 
                      //toma un array de parametros o una lista


/**elegir entre los dos es de conveniencia a que nos va mejor
 * para manejar la data si tenemos array o solo parametros
 */

/**
 * 3.-bind
 * 
 *  con bind podemos guardar una function con sus parametros
 * para un uso futuro
 */

const wizard ={
    name: 'Merlin', 
    health: 100, 
    heal(num1,num2){
        return this.health += num1 + num2;
       }
   }

   wizard.heal()

const archer = {
   name: 'Robin Hood', 
   health: 30
}

console.log(archer) 
const healArcher = wizard.heal.bind(archer, 100, 30)//lo 
                   //almacenamos en una variable para futuro uso
healArcher()//aqui lo usamos de esta forma
console.log(archer)     
                      
/**nos arroja el siguiente resultado
 * 
 * { name: 'Robin Hood', health: 30 }
  { name: 'Robin Hood', health: 160 }
 */