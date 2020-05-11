/**EL OBJETIVO DE ESTA CLASE ES HACER ENTENDER PORQUE HIGHER
 * ORDER FUNCTION SON UTILES
 * 
 * SON SIMPLEMENTE FUNCIONES QUE PUEDEN TOMAR FUNCIONES COMO
 * ARGUMENTO O FUNCIONES QUE PUEDEN RETORNAR OTRA FUNCION
 * 
 */

 /**digamos que tenemos el siguiente ejemplo donde tenemos 
  * que autenticar a los empleados de una empresa
  */

  /**1.-con esta primera manera 'diciendole exactamente que data
   * debe usar y la funcionalidad que debe usar' haciendo esto
   * que repitamos continuamente nuestro codigo, lo que evita 
   * que tengamos un codigo dry (rehusable code)
   */
  
function letAdamLogin(){
    let array = [];
    for(let i = 0; i<10000;i++){
      array.push(i)
    }
    return 'Access Granted to Adam'
  }

  //pero si tuviesemos un segundo empleado ..

  function letEvaLogin(){
    let array = [];
    for(let i = 0; i<10000;i++){
      array.push(i)
    }
    return 'Access Granted to Adam'
  }

  letAdamLogin()
  letEvaLogin()

   /**
    * 2.- lo mejoramos de esta segunda manera 'diciendole que data
    * debe usar', ahorrandonos unas cuantas lineas de codigo,
    * manteniendo nuestro codigo 'dry'
    */
   const giveAccessTo = (name) =>
   'Access Granted to ' + name;
   
  function letUserLogin(user){
    let array = [];
    for(let i = 0; i<10000;i++){
      array.push(i)
    }
    return giveAccessTo(user)
  }

/**'estamos diciendole que data debe usar' */
  letUserLogin('Adam')
  letUserLogin('Eva')

    /**
     * 3.-pero podemos mejorarlo de esta tercera manera 
     * 'diciendole 
     * exactamente que data y que funcionalidad debe usar' 
     * haciendo esta funcion generica flexible 'letPerson' 
     * que nos pide como parametros el 'level' que seria para 
     * un rol, el name y 'authenticate' que seria la 
     * funcionalidad que nos autentica a la persona detras 
     * de este rol*/
    
    const giveAccessTo = (name) =>
    'Access Granted to ' + name;
  
  function authenticate(person) {
    let array = [];
    // you can add checks here for person.level
    for (let i = 0; i < 50000; i++) {
      array.push(i)
    }
    return giveAccessTo(person.name)
  }
  
  function letPerson(person, fn) { // ++ We now tell the 
  //function what data to use when we call it not when 
  //we define it + tell it what to do.
    if (person.level === 'admin') {
      return fn(person)
    } else if (person.level === 'user') {
      return fn(person)
    }
  }
  
  function sing(person) {
    return 'la la la my name is ' + person.name
  }
  
  letPerson({level: 'user', name: 'Tim'}, sing)


  letPerson({level: 'admin', name:'Sara'}, sing )


