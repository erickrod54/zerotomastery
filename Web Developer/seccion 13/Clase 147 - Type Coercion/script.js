// TIPO DE COERCION (Tipo de coerción)

// type coercion o tipo de coercion es una caracteristica
// de los lenguajes que permite convertir cierto 
// tipo de dato a otro y es algo nativo, se presenta 
// en validaciones en caso concreto con JavaScript 
// funciona con operadores 'triple equals ===' lo hace EXACTO 
// Y PREDICTIVO Y ES LA RECOMENDACION DE ANDREI
// y 'two equals ==' lo hace coercitivo y esto si no se maneja 
// bien puede generar muchos bugs 

// 1er ejemplo

1 == '1'

true

// esto es una comparacion de un numero entero 
// a un string y justamente se hace coercitivo
// con 'two equals ==' porque trata convertir 
// cierto tipo de dato a otro para pasar la 
// validacion 

// LA CORRECION se realiza cuando comparamos con
// 'triple equals ==='  que no es mas que decir 
// 'haz explicitamente lo que indico y dame la 
// comparacion exacta de los valores'

1 === '1'

false

// 2do ejemplo de coercion 

if (1){
    console.log(5)
 }

 5
// en este caso la coercion se presenta porque el lenguaje 
// convierte a 1 en un tipo de dato booleano que seria 'true'

 if (0){
    console.log(5)
 }

undefined
// en este caso la coercion se presenta porque el lenguaje 
// convierte a 0 en un tipo de dato booleano que seria 'false'

// SOBRE LA REFERENCIA para type coercion y es relativamente 
// nuevo una funcion para validaciones que se llama Object.is()
// y tiene que ver con el concepto negative zero en JavaScript

-0 === +0

true

// si notamos estamos usando 'triple equals ==='  
// que no es mas que decir 'haz explicitamente lo 
// que indico y dame la comparacion exacta de los valores'

// LA CORRECION a esto la hariamos con Object.is()
// Y porque es importante esto, porque funciona
// bastante similar al 'triple equals ===' y sirve 
// para manejar comparaciones como '-0 === +0'

Object.is(-0, +0)

false

// asi como tambien comparaciones como NaN (Not a Number)

NaN === NaN

false

// LA CORRECION

Object.is(NaN, NaN)

true

