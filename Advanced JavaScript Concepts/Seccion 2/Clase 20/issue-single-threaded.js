/**
 * 
 * El fallo de JavaScript al ser un single threaded language
 * y escribir codigo de manera sincrona(propio del lenguaje)
 * se vuelve muy dificil la tarea de programar en los casos
 * que tenemos tareas que corren por periodos largos de tiempo
 * dado que estas nos congelan el callstack y la memoria heap,
 * en casos aun que aun estando vacia no deja ejecutar ninguna otra
 * tarea
 * 
 * el ejemplo clasico para estas tareas, es la funcion
 * alert:
 * 
 * alert('Hello');
 * 
 * deja sin actividad(toda aplicacion java), sin escrol, sin
 * click en ningun icono
 * 
 * para solucionar esto hay una opcion de manejarlo y es
 * escribiendo codigo asincrono en runtime
 * 
 * 
 */