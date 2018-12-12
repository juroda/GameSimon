Para poder correr el programa
  - [npm install](#npm-install)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
 - [npm run eject](#npm-run-eject)
  
  Simon-Says o Simon-Dice es un juego para jugar con tres o más personas. Uno de los participantes es el llamado "Simón", es decir, el que dirige la acción. Los otros deben hacer lo que Simón dice.
Simon es el juego de memoria inspirado por Simon-Says. Es un juego electrónico creado en 1978 el cual tiene forma de disco y en una de sus caras se puede ver cuatro cuadrantes de diferentes colores. Siendo verde, rojo, azul y amarillo en su versión tradicional.
El juego de forma aleatoria ilumina los cuadrantes y cada que estos emite un sonido. Después de esperar la secuencia creada por el juego, el usuario debe ir introduciendo la misma en el orden que se habría hecho, ayudándose de su memoria visual y sonora. Cada vez que la secuencia sea introducida correctamente se pasará a un siguiente nivel, y el avance en el juego significa el aumento de dificultad. Ósea, si consigue pasar de nivel va a responder a una secuencia más larga con aumento de velocidad. Si la secuencia es introducida incorrectamente se debería volver a empezar.
Siendo esta la mecánica del juego se ha virtualizado y utilizado como base para la creación de este programa. Las herramientas utilizadas para la misma son:

•	El leguaje de etiquetas HTML

•	Lenguaje de estilo CSS3

•	Lenguaje de programación JavaScript

Sumándole la librería de React y diferentes dependencias como lo son

I.	Redux

II.	Color

III.	React-dom

IV.	React-icons

V.	React-redux

VI.	React-router

VII.	React-router-redux

VIII.	Redux-thunk

IX.	Reflexbox

X.	Styled-components

Ya que el repositorio en el cual se fue basado es del 2015, las versiones de cada dependencia es antigua y, comprensión de las actualizaciones para la concordancia con la aplicación llevo un tiempo y complicaciones opté por basarme completamente con las versiones ya puestas. En un futuro se actualizará la aplicación rearmándolo con las versiones actuales como corresponde.
La estructura dentro de la aplicación se puede encontrar de la siguiente manera:

Src:
Actions: Carpeta donde se encuentra documento con las acciones que funcionaran a la larga del proceso al momento de correr el juego

Audios: Carpeta donde estará los sonidos del disco y cada Pad del mismo.

Components: Carpeta en el cual encontraremos diferentes documentos con el diseño de cada sector, acá se implementa el CSS3 dentro de JavaScript y esto es posible gracias a la dependencia ‘styled-component’.

Reducers:  Carpeta con los documentos que son el contenedor predecible del estado del proyecto.

Screens: Carpeta contenedora de los documentos en los cuales ya veremos implementación de las actions, components, reducers. Dándole parte de la estructura que se visualiza en el navegador.

Utils: Carpeta en la cual se crearon documentos con la función de crear y tomar las acciones que se darán al momento de jugar con el disco.
constants.js:  Documento en el cual se exportan colores, ids a implementar para la identificación de los pads, links de redes para poder estructurarlos dentro del documento ‘index.js’ más general de todo el proyecto.

index.css: A pesar de haber utilizado ‘styled-component’ usamos un poco de el estilo en casacada para darle color y espaciado al cuerpo del HTML más el estilo de letras que se usa.

index.js: Vamos a combiner React con Redux. Necesitamos es encapsular nuestra aplicación con el componente Provider que trae react-redux. Este componente recibe un único parámetro llamado store el cual es la instancia del Store que usamos.

registerServiceWorker.js:  Un trabajador de servicio para servir los activos desde el caché local.
Obviamente se cuenta con más documentos de los cuales se depende, pero la explicación de esta da una mínima idea del cómo está organizado el código.
