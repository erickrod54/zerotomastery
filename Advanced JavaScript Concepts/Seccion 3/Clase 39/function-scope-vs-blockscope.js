/**
 * function scope vs block scope
 * 
 * 
 * recuerda que el scope determina a que 
 * variables tenemos acceso
 * 
 * function scope
 * 
 * if (5 > 4){
 *      var secret = '12345'
 * }
 * digamos que hacemos una declaracion if, javaScript
 * hace la funcionalidad scope podemos acceder a la
 * variable secret gracias a esta caracteristica de javaScript
 * 
 */

 if (5 > 4){
     var secret = '12345'
 }

 secret

 /**dandonos como resultado */

 Hint: hit control+c anytime to enter REPL.
12345

/**gracias a la funcionalidad nativa de scope */

/**pero que sucede si quisieras hacer block scoping 
 * o block scope, para eso ES6 introdujo el uso de let
 * y const en vez de var */

if (5 > 4){
    let secret = '12345'
}

secret

/**dandonos como resultado */

/**
 * ReferenceError: secret is not defined
    at /home/runner/FastLinearBackup/index.js:6:1
    at Script.runInContext (vm.js:133:20)
    at Object.<anonymous> (/run_dir/interp.js:156:20)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js
 


 */

 /**solo lo puedes acceder desde el block scope */