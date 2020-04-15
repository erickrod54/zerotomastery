/**
 * //AL USAR EL ARGUMENTOS KEYWORD NOS ENCONTRAMOS CON VARIOS 
 * //PROBLEMAS DERIVADOS DE USAR EL OBJETO ARGUMENTS CON METODOS 
 * //PROPIOS DE UN ARRAY CUANDO ESTO NO ES UN ARRAY, ES UN 
 * //OBJETO... PERO HAY SOLUCION PARA ESTO PORQUE EN LAS NUEVAS 
 * //VERSIONES DE JAVA SE CREARON NUEVOS METODOS PARA PODER 
 * //CONVERTIR AL OBJETO ARGUMENTS EN UN ARRAY ESTE METODO 
 * //SE LLAMA "array.from" para hacer el ejemplo usaremos el
 * //array de la clase anterior:
 * 
 * 
 * 
 * //GENERALMENTE ESTA CARACTERISTICA ENTRE OTROS USOS 
 * //VA A SER MUY UTIL PARA TRABAJAR OBJETOS ARGUMENTS 
 * //COMO ARRAY EN ITERACIONES O CICLOS REPETITIVOS
 * 
 * 
 */
/**en esta funcion tenemos arguments solo como un objeto
 * realmente no es un array y el hecho de manejarlo como tal
 * le haria mas dificil al compilador optimizar nuestro 
 * codigo, incluso podria hacerlo lento
 * 
 */

function marry(person1, person2)
{
    console.log('arguments', arguments)
    return `${person1} is now married to ${person2}`
}

marry('Tim','Tina')

/**esta es la funcion modificada con esta nueva tecnica
 * llamada array.from
 */

function marry(...args) //cambiamos la manera en que se reciben
                        //los argumentos de esta 
                        //manera pasaran 'Tim', y 'Tina'
                        // sin problemas
{
    console.log('arguments', args)//tambien aqui se cambia
    console.log(Array.from(arguments))
             //-y a esto- si le damos 'arguments' 
             //sea lo que haya alli va a convertir un array de lo 
             //que sea que le demos .. jaja nos dara un array,
             // no es maravilloso ?
      //me refiero array.from
    return `${args[0]} is now married to ${args[1]}`
    //tambien en esta linea cambia puesto que person1 y person2
    //no estan declarados, por lo que los llamamos directamente
    //por sus posiciones en el array
}

//dandonos como resultado

arguments [ 'Tim', 'Tina' ] //hermoso array :)
[ 'Tim', 'Tina' ]
Tim is now married to Tina