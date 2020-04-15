/**
 * 2 problemas importantes derivados del uso de variables 
 * globales:
 * 
 * 1.-"global variable pollution" -causa memory leak-
 * 2.-"variable collision" -variables se sobreescriben en EC-
 * 
 * basandonos en el hecho de que por el scope chain
 * todo scope local puede acceder a su global scope,
 * surge la pregunta
 * 
 * Porque no declaramos todas nuestras variables en nuestro 
 * global scope?
 * 
 * porque de alli vienen varios problemas importantes
 * esencialmente una caracteristica llamada "global variable 
 * pollution" que sucede cuando tenemos un memory leak al
 * dejar almacenar y almacenar variables en una memoria 
 * que debemos recordar es finita
 * 
 * 
 */
/**tenemos el siguiente archivo html con scripts incrustados */

<html>
<head>
    <title></title>
</head>
<body>
    <h1>HELLOOOO</h1>
<script>z = 1</script> /** esta linea es sobrescrita 
                       por la linea 27 */
<script>zz = 2</script>
<script>zzz = 3</script>
<script>z = 10000</script>/**porque esta linea sobrescribe 
                           la linea 23? */
   
</body>
</html>

/**esta sobreescritura sucede por algo llamado "variable collision"
 * esto describe el comportamiento de la sobreescritura de 
 * variables y esto pasa porque todo tiene acceso a todo y
 * todas estas etiquetas "script" se en encuentran en un mismo
 * execution context por esa razon se sobrescriben
 */