/* =================================================================

   Sección 3: Introducción a JavaScript moderno

   Temas puntuales de la sección

    - Generar la base sobre JavaScript
    - Constantes y variables Let
    - Template String
    - Objetos literales
    - Arreglos
    - Desestructruación * (sumamente importante)
    - Promesas
    - Fetch API
    - Ternarios
    - Async - Await

    El objetivo aquí es que tengamos las bases que nos ayuden a que podamos diferenciar fácilmente qué es propio de React y qué es propio de JavaScript. Estos conceptos y ejercicios nos ayudarán a suavizar la curva de aprendizaje de React.

================================================================= */

/* -----------------------------------------------------------------
 - Variables y constantes
----------------------------------------------------------------- */

// - En JavaScript podemos declarar variables usando las palabras reservadas: "var", "const" y "let"

// - Declarar una variable con la palabra reservada "const" significa que el valor de esa variable sera fijo ( constante ) y no podra ser reasginado

// const nombre = 'Tulio'
// nombre = 'Juanin' // Esto dara error

// - Declarar una variable con la palabra reservada "let" significa que el valor de esa variable no sera fijo y por lo tanto permitira ( let ) que pueda ser reasignado

// let valorDado = 5 // El valor de "valorDado" sera 5
// valorDado = 4 // El valor de "valorDado" sera reasignado a 4

// Asigar una declaracion de variable a una variable existente ya declarada dara error tanto con "const" y "let"
// const nombre ='Policarpo' // Esto dara error
// let valorDado = 6 // Esto dara error

// Asigar una declaracion de variable a una variable existente ya declarada con "var" no dara error y se sobreescribira el valor de la variable con la ultima declaracion

// var x = 1 // Acá "x" vale 1
// var x = 2 // Acá el valor de "x" fue reasignado a 2

// - Las variables declaradas con "let" y "const" se limitan a su "scope" a diferencia de "var"

// if ( true ) {
//  // - Esto es permitido por que la variable declaradas en el "scope" del "if" no son las mismas declarada afuera de el

//  const nombre = "Bodoque"
//  console.log( nombre ) // Bodoque

//  let valorDado = 10
//  console.log( valorDado ) // 10

// }

// console.log( nombre ) // Tulio
// console.log( valorDado ) // 4

/* -----------------------------------------------------------------
 - Template String
----------------------------------------------------------------- */

// const nombre = 'Tulio'
// const apellido = 'Triviño'

// // Forma tradicional
// // const nombreCompleto = nombre + ' ' + apellido

// // Template String
// const nombreCompleto = `${ nombre } ${ apellido }`

// console.log( nombreCompleto ) // Tulio Triviño

// // Mezclando la forma tradicional con template strings

// function getSaludo( nombre ) {
//   return 'Hola ' + nombre
// }

// console.log( `Este es un texto: ${ getSaludo( nombre ) }` )

/* -----------------------------------------------------------------
 - Objetos Literales
----------------------------------------------------------------- */

// - Los objetos son agrupaciones de datos que se componen de la estructura clave: valor y pueden contener adentro mas objetos e incluso funciones llamadas metodos. Poseen niveles dependiendo de si existen objetos como valor dentro de sus propiedades, por ejemplo en el objeto "persona", el nivel 1 es la declaracion propiamente tal del objeto y el nivel 2 vendria a ser todo lo que se encuentre dentro de la propiedad "direccion" ya que esta tiene como valor un objeto, y asi dependiendo de cuantos anidamientos de objetos se hayan declarado

// const persona = {
//   //Nivel 1
//   nombre: 'Tulio',
//   apellido: 'Triviño',
//   edad: 30,
//   direccion: {
//     // Nivel 2
//     ciudad: 'Titirilquen',
//     zip: 34562897,
//     lat: 14.3232,
//     lng: 34.9233321
//   }
// }

// - Podemos mostrar el objeto en consola de diferentes maneras:

// - De manera litera:
// console.log( persona )

// - Como asignacion de objeto:
// console.log({ persona: persona })

// - Lo anterior es igual a esto cuando el nombre del valor de la asignacion es igual al valor de la llave
// console.log({ persona })

// - Como una tabla con las columnas clave - valor
// console.table( persona )

// - Los objetos cuando son asignados a una variable se esta copiando la referencia en memoria del objeto y no se esta creando en si una copia del objeto
// const persona2 = persona

// - Para comprobar esto, solo hay que modificar una propiedad en "persona2" y nos daremos cuenta que tambien se ha modificado en "persona"

// persona2.nombre = 'Bodoque'

// console.log( persona2 )
// console.log( persona )

// - Una manera de poder copiar literalmente un objeto sin modificar la referencia es usando el operador "spread", eso si hay que considerar que este metodo solo funciona en el nivel 1 de un objeto, por ejemplo, en el objeto "persona" usando este metodo podremos crear un objeto nuevo usando como base las propiedades y valores de otro objeto y al cambiar algun valor del objeto nuevo creado con el operador "spread" no se modificara el valor del objeto original siempre y cuando esa propiedad este en el nivel 1 del objeto, esta forma de copiar se llama "shadow copy"

// const persona3 = { ...persona }

// Esto no sobreescribira el valor de "nombre" en "persona", debido a que la copia fue creada usando operador "spread" y la propiedad "nombre" se encuentra en el nivel 1
// persona3.nombre = 'Policarpio'

// console.log( persona3 )
// console.log( persona )

// En cambio si intentamos asignar un nuevo valor a una propiedad de nivel 2 creada a partir de otro objeto usando el metodo "spread", se modificara el valor original tambien

// persona.direccion.ciudad = 'Pelotillehue'

// console.log( persona3 )
// console.log( persona ) // Se sobreescribe

// - Una forma de hacer una copia profunda ( deep copy ) que considere todos los niveles, es usar este metodo
// const personaCopy = JSON.parse(JSON.stringify(persona))

// - Al cambiar el valor de una propiedad en el objeto copiado, este valor no sera reescrito en el objeto base que se uso como copia, debido a que fue copiado con el metodo anterior
// personaCopy.direccion.ciudad = 'Raccoon City'

// console.log( personaCopy )
// console.log( persona ) // No se sobreescribe

// - Actualmente existe otro metodo para hacer copias profundas de objetos llamado "structureCloned"

// const personaCopySC = structuredClone( persona )

// personaCopySC.direccion.ciudad = 'El eden'

// console.log( personaCopySC )
// console.log( persona ) // No se sobreescribe

/* -----------------------------------------------------------------
 - Arreglos
----------------------------------------------------------------- */

// - Los arreglos son una coleccion de informacion que se encuentra alojada en una misma variable. Se consideran como "objetos integrados" al igual que las "funciones" y "cadenas de texto"

// const arreglo = [ 1, 2, 3, 4]

// - El metodo push se utiliza para agregar uno o más elementos al final de un array, modificando el arreglo original

// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

// - Como los arreglos se consideran "objetos integrados" sus valores tambien son pasados por referencia, es decir, que si asignamos el valor del arreglo a otra variable e intentamos modificar algun valor de esa nueva variable, se modificara tambien el arreglo base
// let arreglo2 = arreglo

// - Al hacer "push" en el "arreglo2" tambien se hara el mismo "push" en "arreglo" ya que en realidad es el mismo arreglo pero con distintas referencias
// arreglo2.push( 5 )

// console.log( arreglo ) // [ 1, 2, 3, 4, 5 ]
// console.log( arreglo2 ) // [ 1, 2, 3, 4, 5 ]

// - Para poder crear un nuevo arreglo a partir de otro sin crear una referencia para que no se modifique el arreglo base podemos usar el operador "spread"

// let arreglo2 = [ ...arreglo, 5 ]

// console.log( arreglo ) // [ 1, 2, 3, 4 ]
// console.log( arreglo2 ) // [ 1, 2, 3, 4, 5 ]

// - Tambien podemos usar el metodo "stringify" y "parse" de JSON

// let arreglo2 = JSON.parse(JSON.stringify( arreglo ))

// arreglo2.push( 5 )

// console.log( arreglo ) // [ 1, 2, 3, 4 ]
// console.log( arreglo2 ) // [ 1, 2, 3, 4, 5 ]

// - O el metodo "structureClone"

// let arreglo2 = structuredClone( arreglo )

// arreglo2.push( 5 )

// console.log( arreglo ) // [ 1, 2, 3, 4 ]
// console.log( arreglo2 ) // [ 1, 2, 3, 4, 5 ]

// - O el metodo mas utilizado para crear arreglos a partir de otros sin modificar la copia original, utilizando el metodo "map". Este metodo crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos

// let arregloMap = arreglo.map(( x ) => { return x })
// let arregloMap = arreglo.map( x => x )

// arregloMap.push( 5 )

// console.log( arreglo ) // [ 1, 2, 3, 4 ]
// console.log( arregloMap ) // [ 1, 2, 3, 4, 5 ]

/* -----------------------------------------------------------------
 - Funciones
----------------------------------------------------------------- */

// - Funcion tradicional
// const saludar = function ( nombre ) {
//   return `Hola, ${ nombre }`
// }

// - Funcion de flecha
// const saludar = ( nombre ) => {
//   return `Hola, ${ nombre }`
// }

// - Funcion de flecha con sintaxis minificada
// const saludar = nombre => `Hola, ${ nombre }`

// console.log( saludar( 'Goku' ))

// - Algo interesante de las funciones de flecha, es que podemos generar return implicitos usando ()

// - Con return explicito
// const getUserExplicito = () => {
//   return {
//     uid: 'ABC123',
//     username: 'abc123',
//   }
// }

// - Con return implicito
// const getUserImplicito = () => ({
//   uid: 'ABC123',
//   username: 'abc123',
// })

// console.log( getUserExplicito() )
// console.log( getUserImplicito() )

// - Tarea
// - 1. Tranformen a una funcion de flecha
// - 2. Tiene que retornar un objeto implicito
// - 3. Probar

// function getUsuarioActivo( nombre ) {
//   return {
//     uid: 'ABC567',
//     username: nombre,
//   }
// }

// const getUsuarioActivo = ( nombre ) => ({
//   uid: 'ABC567',
//   username: nombre,
// })

// const usuarioActivo = getUsuarioActivo( 'Vegeta' )
// console.log( usuarioActivo )

/* -----------------------------------------------------------------
 - Desestructuracion de Objetos
----------------------------------------------------------------- */

// - La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables

// const titere = {
//   nombre: 'Tulio',
//   edad: 30,
//   clave: 'Animador'
// }

// - Con la desestructuracion podemos extraer las propiedades con sus respectivos valores de la siguente manera:
// const { nombre, edad, clave } = titere

// - Como observacion, no es importante el orden de extracion:
// const { clave, nombre, edad } = titere

// console.log( nombre, edad, clave )

// - Podemos asignar alias a los nombres de las propiedades de la siguente manera
// const { clave:propiedad, nombre, edad } = titere

// console.log( nombre, edad, propiedad )

// - Podemos setear valores nuevos en las propiedades desestructuradas si estos son "undefined"
// const { clave, nombre , apellido = 'Triviño', edad } = titere

// console.log( nombre, edad, clave, apellido )

// - Tambien podemos combinar asignacion de alias con valor por defecto
// const { clave, nombre , apellido:lastname = 'Triviño', edad } = titere

// console.log( nombre, edad, clave, lastname )

// - Desestructuracion en funciones:
// const retornaTitere = ( usuario ) => {

//   const { edad, clave, nombre } = usuario

//   console.log( edad, clave, nombre )

// }

// retornaTitere( titere )

// - Desestructuracion en el parametro de la funcion:
// const retornaTitere = ({ edad, clave, nombre }) => {

//   console.log( edad, clave, nombre )

// }

// retornaTitere( titere )

// Usar deconstruccion como retorno de una funcion:
// const useContext = ({ clave, edad }) => {

//   return {
//     nombreClave: clave,
//     anios: edad,
//     latlng: {
//       lat: 14.1232,
//       lng: -12.3232
//     }
//   }

// }

// - Desestructuracion de objetos aninados:
// const { nombreClave, anios, latlng:{ lat , lng } } = useContext( titere )

// console.log( nombreClave, anios, lat , lng  )

/* -----------------------------------------------------------------
 - Desestructuracion de Arreglos
----------------------------------------------------------------- */

// - Al igual que en los Objetos, los Arreglos pueden ser desestructurados:

// const personajes = [ 'Goku', 'Vegeta', 'Trunks' ]

// const [ p1, p2, p3 ] = personajes

// console.log( p1, p2, p3 )

// - Si tenemos un arreglo donde solo necesitamos desestructurar un valor en especifico podemos hacerlo usando el indice con la notacion de {}, por ejemplo para acceder al valor 'Trunks' de indice 2 haremos lo siguiente:

// const { 2: p3 } = personajes

// console.log( p3 )

// - Desestructurando el retorno de una funcion
// const retornaArreglo = () => {
//   return [ 'ABC', 123 ]
// }

// const [ letras, numeros ] = retornaArreglo()
// console.log( letras, numeros )

// - Tarea
// - 1. El primer valor del arr se llamara nombre
// - 2. El segundo valor del arr se llamara setNombre

// const useState = ( valor ) => {
//   return [ valor, () => { console.log( 'Hola Mundo' ) } ]
// }

// const [ nombre, setNombre ] = useState( 'Goku' )

// console.log( nombre )

// setNombre()

/* -----------------------------------------------------------------
 - Promesas
----------------------------------------------------------------- */

// - Las promesas representan la eventual finalización (o falla) de una operación asincrónica y su valor resultante. Las promesas por naturaleza son asincronas y primero se va a ejecutar todo el codigo que es sincrono y luego el resultado de las promesas

// const promesa = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     // - Una vez que pasen los 2 segundos si deseo ejecutar algo llamo al metodo "resolve"
//     resolve('Aparezco 2 segundos despues')
//   }, 2000);

// })

// - Para ejecutar algo despues de la ejecucion de la promesa, llamamos la promesa y accedemos al metodo "then", que puede recibir como parametro el metodo "resolve", es decir que se completo de manera correcta la ejecucion de la promesa

// promesa.then(( mensaje ) => {
//   console.log( mensaje )
// })

// Tarea
// 1. Importar el metodo "getHeroesById" del archivo import.js
// 2. Obtener un heroe mediante el id usando una promesa

// import { getHeroesById } from './import'

// const promesa = new Promise((resolve, reject) => {

//   // - Despues de dos segundos, se mostrara el resultado de "getHeroesById"
//   setTimeout(() => {
//     const heroe = getHeroesById(3)
//     // - Si la promesa fue resuelta de manera correcta accedo al metodo "resolve" y le envio el "heroe" como argumento para poder capturarlo en el metodo "then" como parametro
//     resolve( heroe )
//     // - Si la promesa fue resuelta de manera incorrecta accedo al metodo "reject" capturando el error y este metodo puedo capturarlo con el metodo "catch" de la promesa
//     // reject( 'No se pudo encontrar el heroe' )
//   }, 2000);

// })

// promesa
//   .then(( heroe ) => console.log( heroe ))
//   .catch( (err) => console.warn( err ) )

// - Crear una promesa y a esa promesa mandarle el id del heroe a buscar y dependiendo del resultado evaluar el "resolve" y el "reject", para capturar el resultado con "then" o "catch"

// const getHeroesByIdAsync = ( id ) => {

//   return new Promise((resolve, reject) => {

//     setTimeout(() => {

//       const heroe = getHeroesById( id )
//       heroe !== undefined ? resolve( heroe ) : reject( 'No se pudo encontrar el heroe' )

//     }, 2000);

//   })

// }

// getHeroesByIdAsync( 1 )
//   .then( heroe => console.log( 'Heroe', heroe ) )
//   .catch( err => console.warn( err ) )

// getHeroesByIdAsync( 1 )
//   .then( console.log )
//   .catch( console.warn )

/* -----------------------------------------------------------------
 - Fetch API
----------------------------------------------------------------- */

// const apiKey = ''

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)

// peticion
//   .catch( console.warn )
//   // - Peticion con promesas encadenadas
//   // .then( resp => {
//   //   resp.json().then( data => {
//   //     console.log( data )
//   //   })
//   // })
//   // - Peticion con multiples "then" sin encadenar (mas legible, con mejor mantencion)
//   .then( resp => resp.json() )
//   .then( ({ data }) => {

//     const { url } = data.images.original

//     const img = document.createElement('img')
//     img.src = url

//     document.body.appendChild( img )

//   })

/* -----------------------------------------------------------------
 - Async / Await
----------------------------------------------------------------- */

// - Promesa estandar:
// const getImagenPromesa = () => {
//     return new Promise((resolve, reject) => {
//         resolve('http:salkdlksjfldk.com')
//     })
// }

// - Promesa estandar minificada:
// const getImagenPromesa = () => new Promise( resolve => resolve('http:salkdlksjfldk.com') )

// - Promesa creada con "Async/Await"
// const getImagenPromesa = async () => {
//     return 'http:salkdlksjfldk.com'
// }

// getImagenPromesa().then( console.log )

// - La palabra reservada "Async" permite convertir el resultado de una funcion en una promesa
// - La palabra reservada "Await" permite trabajar el codigo de la promesa como si este fuera "sincrono"
// - "Async" puede trabajar sin "Await", pero "Await" no puede ser declarado si no se encuentra dentro de una funcion "Async"

// const apiKey = ''

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)

// peticion
//   .catch( console.warn )

//   .then( resp => resp.json() )
//   .then( ({ data }) => {

//     const { url } = data.images.original

//     const img = document.createElement('img')

//     img.src = url

//     document.body.appendChild( img )

//   })

// Tarea: convertir la funcion anterior con "Async/Await"

// const getImagenPromesa = async () => {

//   const apiKey = ''

//   // - Con la palabra reservada "await" declaramos que se tiene que ejecutar una promesa antes de que el codigo se siga ejecutando, esto quiere decir que javascript no ejecutara la linea siguiente de codigo hasta que se complete el resultado de "fetch" (promesa) ya que fue declarado con "await"
//   const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)

//   const { data } = await resp.json()

//   const { url } = data.images.original

//   const img = document.createElement('img')

//   img.src = url

//   document.body.appendChild( img )

// }

// getImagenPromesa()

// - En una funcion con "Async/Await" para capturar los errores se debe usar la sentencia "Try/Catch"

// const getImagenPromesa = async () => {

//   try {

//     const apiKey = ''
//     const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
//     const { data } = await resp.json()
//     const { url } = data.images.original
//     const img = document.createElement('img')

//     img.src = url
//     document.body.appendChild( img )

//   } catch (err) {

//     console.error(err)

//   }

// }

// getImagenPromesa()

/* -----------------------------------------------------------------
 - Operador condicional ternario
----------------------------------------------------------------- */

const activo = true

// let mensaje = ''

// if ( activo ) {
//   mensaje = 'Activo'
// } else {
//   mensaje = 'Inactivo'
// }

// - Lo mismo se puede hacer de la siguiente manera con el Operador condicional ternario:
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo'

// - Si solo necesitamos validar una condicion si es verdadera usamos el operador && (AND)

  // - Si activo es "true" "mensaje" tendra el valor de 'Activo'
  // const mensaje = ( activo === true ) && 'Activo'

  // - Lo anterior se puede simplificar de la siguiente manera:
  // const mensaje = activo && 'Activo'

  // - Si activo es "false" "mensaje" tendra el valor de "false":
  // const mensaje = !activo && 'Activo'

console.log( mensaje )


