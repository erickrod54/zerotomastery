/**
 * Ejercicio "this" keyword 
 * 
 * el objetivo de este ejercicio es arreglar la funcion para
 * que pueda mostrar la salida que es el nombre del personaje
 * 'Simon'
 */

 /***---------------------Original Code ------------------ */

 const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };
  const giveMeTheCharacterNOW = character.getCharacter;
   
  //How Would you fix this?
  console.log('?', giveMeTheCharacterNOW()); 
  //this should return 'Simon' bud doesn't

  /**resolve question mark ? */

 /***---------------------Modified Code ------------------ */

 const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };
  
  /**in this line bellow i keep the functionality during 
   * the Execution Context*/
  const giveMeTheCharacterNOW = character.getCharacter()
  
  /**in this i just print the functionality that i kept before*/
  console.log(giveMeTheCharacterNOW)

  /**
   * resolve 'Simon'
   */
  

  /**----------Previous Lines Explanation ----------------- */
  /**
   * //------in this line i can't keep the funcionality cause
   * //character.getCharacter doesn't have brackets and thats
   * //why with this line bellow i can't open an execution 
   * //context

    const giveMeTheCharacterNOW = character.getCharacter;
   
  //How Would you fix this?

  //in this line if don't have previously an open execution 
  //context you can't visualize anything

  console.log('?', giveMeTheCharacterNOW()); 
  //this should return 'Simon' bud doesn't
   */

/**----------------Courious Issue------------------------ */

/**if you try the original code on Chrome Java Console 
 * you will get a link of amazon
*/

/**-----------------------This------------------------------
 * 
 * ? https://images-na.ssl-images-amazon.com/images/I/51AZ-Jz5kmL.
 * _RC%7C516fcOUE-HL.css,01evdoiemkL.css,01K+Ps1DeEL.css,31pdJv9
 * iSzL.css,01W6EiNzKkL.css,11UGC+GXOPL.css,21LK7jaicML.css,
 * 11L58Qpo0GL.css,21kyTi1FabL.css,01ruG+gDPFL.css,01YhS3Cs-hL.
 * css,21GwE3cR-yL.css,019SHZnt8RL.css,01wAWQRgXzL.css,21bWcRJYNIL.
 * css,11WgRxUdJRL.css,01dU8+SPlFL.css,11ocrgKoE-L.css,01SHjPML6tL.
 * css,111-D2qRjiL.css,01QrWuRrZ-L.css,310Imb6LqFL.css,01piEq-AdwL.
 * css,11Z1a0FxSIL.css,01cbS3UK11L.css,21mOLw+nYYL.css,01L8Y-JFEhL.
 * css_.css?AUIClients/AmazonUI#us.not-trident
 * 
 */

 /**thats a "query string"  with the question mark "?" on the 
  * console log that link with url on google relating 'Simon'
  * with an article on amazon.com
 */

 /**
  * LA SOLUCION DE ANDREI... EL HACE BIND EN EL SCOPE DE CHARACTER
  * Y YA FUE JEJEJE.. ES MUCHO MEJOR, SIEMPRE HAY QUE UTILIZAR BIND
  */

 const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };

  const giveMeTheCharacterNOW = character.getCharacter.bind(character);
  
  
  console.log('?', giveMeTheCharacterNOW());

  /**
   * con esta linea 101 -.bind(character); -, reconstruye el enlace en el
   *  scope chain de this.name hacia el objeto character resultando 
   * abrir execution context con la variable en la cual le hacemos 
   * el bind giveMeTheCharacterNOW, pudiendose usar limpiamente en el
   * console.log
   * 
   * console.log('?', giveMeTheCharacterNOW());
   */