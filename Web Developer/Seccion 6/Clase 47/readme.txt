CSS Cheat Sheet - hoja de trucos

Reference - Referencia

*https://www.w3schools.com/cssref/css_selectors.asp
*https://css-tricks.com/almanac/

Cascading Style Sheets
at the most basic level it
indicates that the order of CSS
rules matter

-

Las Hojas de estilo en cascada
al mas basico nivel nos indica
que las reglas de CSS importan

-------- @AndreiNeagoie-------

Selectors --- Selectores

1- .class (first exersice - mediante el uso del selector clase
           haremos bordes punteados para todos los parrafos
           -la clase es un buen elemento para agregar un mismo estilo
           a un grupo de elementos y se puede usar multiples veces
           @AndreiNeagoie -)

2- # id (Second exercise - el id es un selectorparecido a .class pero
        a diferencia de este solo se puede usar el mismo id una vez -
        mediante el uso del selector #id se le dara un estilo a los parrafos)

3-  *   (Third exercise - asterisco o star no se usa muy a menudo pero simboliza
         todos los elementos -mediante el uso del selector * haremos este
         ejemplo alineando el texto-)

4- element (fourth exercise - el elemento es la forma clasica de asignar
           propiedades, se coloca el elemento ya sea body, h2, p u otro
           luego se coloca la propiedad a asignar ejemplo:

           p{
             color: pink;
           }

           )
5- element, element ( fifht exercise - el elemento 1 y 2 tienen las mismas
                    propiedades)
6-element element  (sixth exercise - el segundo elemento tiene que estar
                    dentro del primero para poder tomar las propiedades del estilo)
7-element > element (seventh exercise - el segundo elemento es  hijo del primero y toma
                    el css que se le indique)
8-element + element (eight exercise - toma css exactamente el segundo elemento despues
                    del primero)

                    Los divertidos:

9- :hover (ninth exercise - aplica el estilo cuando el puntero del mouse pasa sobre el elemento)
10-:last-child (tenth exercise - aplica el estilo al primer hijo -el ejemplo se hara con webtext en la hoja css-)
11-:first-child (eleventh exercise - aplica el estilo al ultimo hijo -el ejemplo se hara con webtext en la hoja css -)
12- !important (twelveth exercise- no recomendada - esta propiedad rescribe las reglas de css, impone un estilo sobre otros)

MUY IMPORTANTE

Cuando los selectores tienen exito en cascada (css) depende de 3 cosas

1- especificidad - cuan especifico es encabezado para aplicar css? -esto tiene un puntaje, hay una calculadora para esto
                                                                    https://specificity.keegan.st/-

2-importancia - se refiere al uso de la etiqueta !important el cual hace que se aplique el css

3- Source order u Orden de Origen - Cual etiqueta link esta primero? -se tomara el estilo de la primera hoja de estilo css-
