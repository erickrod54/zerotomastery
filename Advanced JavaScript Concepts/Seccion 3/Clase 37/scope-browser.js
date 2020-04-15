/**
 * en esta leccion podremos verificar graficamente 
 * el scope de cualquier cosa que cualquier cosa 
 * que hagamos desde el java console del navegador
 * (esta probado en chrome dev)
 * 
 * en este caso declaramos una funcion a en el javaConsole
 * 
 *  function a(){}
 * 
 * y procedemos a verificar su scope llamando al objeto
 * window(en el caso de nodejs global), buscamos la funcion
 * que definimos en este caso 'a', y al desplegarlo entre
 * todo lo que nos aparecera buscamos la seccion llamada 
 * scopes... dandonos como resultado
 * 
 * [[Scopes]]: Scopes[1]
0: Global {parent: Window,
     opener: null, top: Window, length: 2, frames: Window, …}
 * 
 */
/**
 * 
 * tenemos type: glopal ... porque el scope de la funcion global
 * esta apuntando al global type o el objeto window en este caso
 * 
 * cool no?
 */