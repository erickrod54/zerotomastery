/**
 * en el siguiente ejemplo podemos observar lo poderoso de usar
 * let y const para hacer block scoping y tambien las razones de
 *  porque en algunos casos seguiremos usando var para que nos
 * de acceso al scope chain
 * 
 * en este ejercicio tal cual como esta escrito el scope
 * chain para acceso a las variables esta intacto
 * 
 *function loop(){
     for (var i = 5; i < 5; i++){
         console.log(i) // aqui nos imprime desde 1 -4
     }
     console.log('final', i)//al salir de la condicion 
                           //nos imprime final 5
 } 

 loop()
 *
 */

 function loop(){
     for (var i = 5; i < 5; i++){
         console.log(i)
     }
     console.log('final', i)
 }

 loop()

 /**y esto nos da el resultado esperado: */

 0
1
2
3
4
final 5

/**pero que tal si cambiamos var por let.. scope blocking */

function loop(){
    for (let i = 0; i < 5; i++){
        console.log(i)
    }
    console.log('final', i)/**
    porque estamos tratando de acceder a 'i' fuera de su block
  * scope '{ }' y i sigue almacenado en memoria pero  el motor
  * de javaScript no nos permite utilizarlo */
}

loop()

/**
 * 
 * nos da como resultado
 */

 /**
  * 
0
1
2
3
4
ReferenceError: i is not defined
    at loop (/home/runner/FastLinearBackup/index.js:5:27)
    at /home/runner/FastLinearBackup/index.js:8:2
    at Script.runInContext (vm.js:131:20)
    at Object.<anonymous> (/run_dir/interp.js:156:20)
    at Module._compile (internal/modules/cjs/loader.js:1156:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1176:10)
    at Module.load (internal/modules/cjs/loader.js:1000:32)
    at Function.Module._load (internal/modules/cjs/loader.js:899:14)
  */
 /**
  * porque estamos tratando de acceder a 'i' fuera de su block
  * scope '{ }' y i sigue almacenado en memoria pero  el motor
  * de javaScript no nos permite utilizarlo
  *
  */