// Paso por valor

// son inmutables, esto quiere decir que no 
// podemos cambiarlos para lograr esto debemos
// removerlos y crearlos nuevamente en otro
// espacio de memoria 
// (tiene mucho que ver con los datos primitivos)

let a = 5;//el valor primitivo tiene una direccion asociada 
          // de meomoria
let b = a;//el valor primitivo tiene una direccion asociada 
          // de meomoria

b++;

console.log(a)
console.log(b)

// lo que hace b es referenciar el valor primitivo de a que es 5
// 'se copia el valor' y se coloca en en nuevo espacio 
// de memoria

5
6

// haciendo esto que a y b no tengan realmente ninguna conexion
// y esto es lo que hace 'paso por valor'

// AHORA VEAMOS COMO CAMBIA CON LOS OBJETOS 

let obj1 = {name: 'Yao', password: '123'}
let obj2 = obj1;
// esto quiere decir que cuando asignamos un objeto a otro 
// no estamos creando un espacio nuevo de memoria solo diciendo
// al objeto hey este es el espacio de memoria donde se encuentra
// este objeto

obj2.password = 'easypeasy'

console.log(obj1)
console.log(obj2)

{name: "Yao", password: "easypeasy"}
{name: "Yao", password: "easypeasy"}

// como podemos ver el password fue actualizado
// tanto en el objeto original obj1 como en el 
// objeto que lo esta referenciando obj2, lo cual 
// valida que hay una conexion entre ellos y es 
// que referencian el mismo espacio de memoria

// otro ejemplo

let c = [1,2,3,4,5];
let d = c;

d.push(185628761)
console.log(c)

// y al hacer esto vemos que modificamos el Array(objeto) 'c',
// ha sido cambiado pasando el valor por referencia de 'd'

(6) [1, 2, 3, 4, 5, 185628761]

// esto es realmente algo bueno porque ahorramos memoria
// en vez de andar copiando cosas imagina que c fuera un 
// objeto inmenso al copiarlo ocupariamos una cantidad 
// inmensa de recursos

// LA MANERA DE MANEJAR CORRECTAMENTE LA REFERENCIA EN LOS
// OBJETOS PARA HACER CAMBIOS INDEPENDIENTEMENTE ES POR MEDIO 
// DE METODOS COMO LA CLONACION(se copia el objeto completo) 
// O EL CONCAT(un metodo que rellena un array vacio con 
// el contenido de otro array)

let c = [1,2,3,4,5];
let d = [].concat(c);

d.push(185628761)
console.log(c)

console.log(c)

(5) [1, 2, 3, 4, 5]

console.log(d)

(6) [1, 2, 3, 4, 5, 185628761]

// de esta manera los resultados se muestran de manera
// indepiente en un objeto 'c' y un objeto 'd'

// otro ejemplo podria ser

let obj = {a: 'a', b: 'b', c: 'c'};

// supongamos que quiero copiar este objeto
// para tenerlo en otro lugar de la memoria

let clone = Object.assign({}, obj);

// ahora hacemos una modificacion en 'obj' para 
// validar que su clon permanece intacto

obj.c = 5;

console.log(clone)

{a: "a", b: "b", c: "c"}//como vemos el clone de obj no esta 
                        // afectado porque esta en nuevo lugar 
                        // de la memoria 
console.log(obj)

{a: "a", b: "b", c: 5} //y en el caso de obj termina 
                       //actualizo por esta linea 'obj.c = 5;'

// OTRA FORMA DE CLONAR Y ES UNA NUEVA CARACTERISTICA MAS
// LIMPIA ES DE LA SIGUIENTE MANERA

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;

console.log('este es el primer clon', clone)
console.log('este es el segundo clon', clone2)

// y en el resultado se puede apreciar que el clone 2
// se mantiene intacto

este es el primer clon {a: "a", b: "b", c: "c"}

este es el segundo clon {a: "a", b: "b", c: "c"}

// pero que pasaria si en el objeto que tenemos dentro a 
// otro objeto 

// para el caso de este objeto esta compuesto por 2 capas 
// distintas de memoria, la 1era capa para 'a y b', la segunda 
// capa para 'c'

let obj = {
    a: 'a', //1era capa de memoria  
    b: 'b', 
    c: {deep: 'try and copy me' //2da capa de memoria
}

};

// ahora haremos una actualizacion en 'obj'  para validar
// el estado de sus clones 

let obj = {
    a: 'a', 
    b: 'b', 
    c: {deep: 'try and copy me'

    }
};
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c.deep = 'hahahaha!';
//esta linea representa una modificacion
// a la segunda capa de memoria

console.log('este es el objeto', obj)
console.log('este es el primer clon', clone)
console.log('este es el segundo clon', clone2)

// y nos da como resultado

este es el objeto 
            {a: "a", b: "b", c: {…}}
            a: "a"
            b: "b"
            c: {deep: "hahahaha!"}
            __proto__: Object

este es el primer clon 
            {a: "a", b: "b", c: {…}}
            a: "a"
            b: "b"
            c: {deep: "hahahaha!"}
            __proto__: Object

este es el segundo clon 
            {a: "a", b: "b", c: {…}}
            a: "a"
            b: "b"
            c:
            deep: "hahahaha!"
            __proto__: Object
            __proto__: Object

// y se modifico 'c' en todos los objetos en el original
// y en todos sus clones, esto se debe a que los clones 
// son 'shallow clones' o clones superficiales y su 
// clonacion permanece intacta solo en el primer nivel 
// o capa de memoria ya en los niveles  o capas posteriores
// como es el caso de 'deep' esta propenso a actualizaciones

// COMO HARIAMOS 'DEEP CLONNING', DE LA SIGUIENTE MANERA

let obj = {
    a: 'a', 
    b: 'b', 
    c: {deep: 'try and copy me'

    }
};
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))
// lo que hace esta linea de superClone es convertir 
// todo nuestro 'obj' en una cadena y una vez 
// convertido, se vuelve a pasar a un objeto 

obj.c.deep = 'hahahaha!';

console.log('este es el objeto', obj)
console.log('este es el primer clon', clone)
console.log('este es el segundo clon', clone2)
console.log('este es superClone', superClone)

y nos da como resultado el siguiente

este es el objeto

        {a: "a", b: "b", c: {…}}
        a: "a"
        b: "b"
        c: {deep: "hahahaha!"}
        __proto__: Object

este es el primer clon

        {a: "a", b: "b", c: {…}}
        a: "a"
        b: "b"
        c: {deep: "hahahaha!"}
        __proto__: Object

este es el segundo clon

        {a: "a", b: "b", c: {…}}
        a: "a"
        b: "b"
        c: {deep: "hahahaha!"}
        __proto__: Object

este es superClone 

        {a: "a", b: "b", c: {…}}
        a: "a"
        b: "b"
        c: {deep: "try and copy me"}
        __proto__: Object

// gracias a superClone tenemos un clon intacto de 'obj'
// puesto que realiza un DEEP CLONNING sobre 'obj' 

// NOTA IMPORTANTE SOBRE DEEP CLONNING CON JSON TEN CUIDADO
// PORQUE SI SE REALIZA CON UN OBJETO MUY PROFUNDO TIENE 
// IMPLICACIONES EN EL RENDIMIENTO











