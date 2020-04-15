// JavaScript inicialmente no habia sido 
// concebido como un lenguaje capaz de 
// soportar modulos y la evolucion de este 
// hacia esa finalidad no fue sino hasta 
// ES6 + WEBPACK

// para esto andrei lo visualizo como una piramide


// ES6 + WEBPACK

// en es6 webpack tenemos dos caracteristicas exportar 
// e importar en js1 puedo etener una funcion y exportarla 

// js1

export const add = (a,b) => a + b;

// de esta primera forma se pueden importar multiples 
// funciones 

// or 

export default function add() {
    return a + b;
}

// de esta segunda forma unicamente se puede exportar una
// funcion  

// js2

import { add } from './add';

// de esta primera forma unicamente se puede importar una
// funcion 

// or 

import add from './add';

// y webpack tiene un archivo de configuracion para lograr
// este paquete de modulos 

module.exports = {
    entry:'/app/main.js',
    output:{
        path:'./dist', 
        filename:'bundle.js'
    }
}

// y como vemos aqui se genera la salida que seria 'bundle.js'

<script src="bundler.js"></script>

// de esta segunda forma se puede exportar multiples 
// funciones 

// Browserrify

// BROWSERFY USA ALGO LLAMADO COMMON JS LO CUAL NOS PERMITE
// USAR CIERTO TIPO DE SINTAXIS PARA CREAR UN paquete de 
// módulos EN EL CUAL TENDRIA DOS ARCHIVOS

// js1 que adiciona una funcion
module.exports = function add(a,b){
    return a + b;
}

// js2 que requiere esa funcion y la adiciona 

var add = require("./add");

// para al final crear un solo archivo que contiene toda 
// la funcionalidad javascript en nuestro html

<script src="bundler.js"></script>

// IIFE (Ejecucion inmediata de funciones)

// este intento lo que hace es envolver la funcion entre 
// parentesis para inidicar un nivel de prioridad en su 
// evaluacion y ejecucion

// js1 first file loaded

var myApp = {}

// j2

(function(){
    myApp.add = function(a,b) {
        return a + b;
    }
})();

// AQUI RESUELVE EL PROBLEMA THE GLOBAL POLLUTION NAMESPACE
// PORQUE EN CIERTA FORMA REDUCE EL NAMESPACE POLLUTION 
// A SOLO UNO EN ESTE CASO myApp QUE SERIA EL UNICO 
// EN ESTAR EN EL WINDOW OBJECT, YA QUE TODO LO INCLUIDO
// EN PARENTESIS TIENE SU PROPIO SCOPE Y AL SER EJECUTADO
// SE DESCARTA

// PERO AUN ASI MANTIENE EL SIGUIENTE PROBLEMA 

// EL PROBLEMA ES LACK OF DEPENDENCY RESOLUTION/PILA DE 
// RESOLUCION DE DEPENDENCIAS PUESTO QUE DEBEN ESTAR APROPIADAMENTE
// ORDENADAS PARA QUE EL CODIGO FUNCIONE COMO SE ESPERA QUE 
// FUNCIONE

// Script Tags

// el siguiente intento para eliminar los problemas anteriores 
// fue el uso de script tags un ejemplo de script tags seria 
// el siguiente
// los casos mas frecuentes en el uso de estas es con jquery o
// bootrap

<script type="text/javascript" src="./1.js"></script>
<script type="text/javascript" src="./2.js"></script>
<script type="text/javascript" src="./3.js"></script>
<script type="text/javascript" src="./4.js"></script>

// AQUI RESUELVE EL PROBLEMA DEL CODIGO MEZCLADO EN EL HTML 
// E INTENTA HACER UN ESFUERZO PARA QUE SEA REHUSABLE

// PERO AUN ASI TIENE 3 PROBLEMAS IMPORTANTES

// EL PRIMER PROBLEMA ES QUE CUANDO QUERAMOS REHUSAR EL CODIGO 
// AUN DEBEMOS ESTAR PENDIENTES DE COPIAR EL TAG EN LA UBICACION
// EN LA QUE QUERAMOS USARLO

// EL SEGUNDO PROBLEMA ES LACK OF DEPENDENCY RESOLUTION/PILA DE 
// RESOLUCION DE DEPENDENCIAS PUESTO QUE DEBEN ESTAR APROPIADAMENTE
// ORDENADAS PARA QUE EL CODIGO FUNCIONE COMO SE ESPERA QUE 
// FUNCIONE

// Y FINALMENTE EL 3CER PROBLEMA ES THE GLOBAL POLLUTION NAMESPACE
// SIGUE HEREDANDO EL PROBLEMA DEL INLINE SCRIPT PUESTO QUE TODAS 
// LAS VARIABLES ESTAN EN EL WINDOW OBJECT Y NOS PUEDE GENERAR 
// ERRORES AL INTENTAR REHUSAR VARIABLES

// Inline Script 

// un  ejemplo de este seria el siguiente
// en el que tenemos mezclado nuestro javascript 
// en nuestro archivo html

<script type="text/javascript">
function a(){
    alert('a')
}
function b(){
    alert('b')
}
function c(){
    alert('c')
}
function d(){
    alert('d')
}
</script>

// EL PRINCIPAL PROBLEMA DE ESTE ES LA PILA DE 
// REUSABILIDAD DE CODIGO PUESTO QUE SI QUISIERAMOS 
// REHUSAR EL CODIGO TENDRIAMOS QUE COPIARLO Y PEGARLO 
// EN CADA UBICACION QUE QUERAMOS USARLO

// EL SEGUNDO PROBLEMA SERIA THE POLLUTION OF THE GLOBAL
// NAMESPACE ESTO SIGNIFICA QUE AL USAR UNA VARIABLE POR EJEMPLO
// 'A' AL TENER ESTA UN ESPACIO DE MEMORIA YA ASIGNADO, NO SE 
// PUEDE USAR NUEVAMENTE AHORA IMAGINA EN UN GRUPO DE TRABAJO 
// NUMEROSO CON MILES Y MILES DE SCRIPT 