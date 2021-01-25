<p align="center">
  <a title="Travel-In" target="_blank" href= "https://burgerqueen013.web.app/">
    <img  src="https://raw.githubusercontent.com/consuelogoche-1994/LIM013-fe-burger-queen/main/Burger-Queen/src/assets/img/burger1.png">
  </a>
</p>



# Burger Queen 🍔🍟🥪
### Made by [Katy H.](https://github.com/KatyLuHT) & [Goche C.](https://github.com/consuelogoche-1994)>Burger Queen project
### Link a aplicación  [Burger Queen](https://burgerqueen013.web.app/)

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Definición del producto](#2-definición-del-producto)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Diseño de Interfaz de Usuario](#4-diseño-de-interfaz-de-usuario)
* [5. Test de usabilidad](#5-Test-de-usabilidad)
* [6. Objetivos de aprendizaje](#6-Objetivos-de-aprendizaje)
 
## 1. 🧐Resumen del proyecto 
El presente proyecto, **_BURGER QUEEN_**, es una plicación responsive diseñada con Angular, Sass, consumo de Apis entre otras tecnologías de desarrollo web, para la toma de pedidos y el envió de los mismos a cocina, así como también el historial de las ventas realizadas.

<p align="center">
  <img  src="https://github.com/consuelogoche-1994/LIM013-fe-burger-queen/blob/main/Burger-Queen/src/assets/img/burgergif.gif?raw=true" alt="Travel-In">
</p>

## 2. 👩‍💻Definición del producto

El proyecto se inspiro en algunas cadenas de comida, tales como , Burger King, McDonald's, Bembos, etc. Estas cadenas de comida nos dieron una visión general del negocio, lo cual nos sirvió como punto de partida para comenzar con nuestro diseño y flujo de información.

La aplicación y su desarrollo se hicieron basándonos en los requerimientos e historias de usuario planteadas, cuenta con una sección en donde se muestran los diferentes platillos y bebidas disponibles, es mesero podra seleccionar los productos que desee el cliente, para el caso de las hamburguesas podrá agregar el tipo de carne y los adicionales, también podra visualizar las ordenes que se encuentran listas para entregar. El cocinero podrá visualizar las ordenes que le envié el mesero así como también marcar como listo las ordenes que termine de preparar.
La aplicación también cuenta con un apartado de historial en donde podrán visualizar todos los pedidos realizados.
* **_Home_** Interfaz donde se listan todo el menú.
* **_orderDetail_** Interfaz que muestra el resumen del pedido.
* **_orders_** Interfaz para que el cocinero vea todas las ordenes a preparar.
* **_readyOrders_** Interfaz para que el mesero visualice todas las ordenes preparadas y listas para ser entregadas.
* **_historyOrders_** Historial de Pedidos Entregados


## 3. 📝Historias de usuario

### Definición del producto

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario)

* Anotar nombre de cliente.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

***

## 4. 🚀Diseño de Interfaz de Usuario
A continuación presentamos un layout (diseño) de la vista en formato tablet.


    
## 5. 📈Test de usabilidad
Gracias al Feedback recibido por parte de nuestros usuarios, compañeras y coaches, pudimos iterar varias veces antes de llegar a nuestra versión final. Tomándose en cuenta principalmente:

* En la sección de **Profile**, se diseñaron la fotos de perfil y portada del usuario similares a las empleadas por Facebook, para que los usuarios se sientan familiarizados con nuestra red social.
* Se implementó un botón *Scroll up* tanto en la sección de **Home** como **Profile** para que el usuario pueda desplazarse rápidamente hacia la parte superior de la página luego de revisar las diversas publicaciones.
* Se subrayaron las pestañas de **Home** y **Profile** para que el usuario sepa la sección en la que se encuentra.
* En la sección **Home** al colocar el puntero del mouse en el nombre de un usuario que ha publicado, aparecerá una ventana emergente con información extra de dicho usuario, datos como país y cumpleaños, así también se apreciará de un mayor tamaño la foto de perfil, ello con la finalidad que los usuarios editen su información en la sección profile.
* Paleta de colores que vincule a viajes.
* Diseño interactivo en todas sus presentaciones. 

## 6. Objetivos de aprendizaje

El objetivo principal de este proyecto es aprender a construir una _interfaz web_
usando el _framework_ elegido (React, Vue o Angular). Todos estos frameworks de
Front-end atacan el mismo problema: **cómo mantener la interfaz y el estado sincronizados**.
Así que esta experiencia espera familiarizarte con el concepto de _estado de pantalla_,
y cómo cada cambio sobre el estado se va a ir reflejando en la interfaz (por ejemplo,
cada vez que agregamos un _producto_ a un _pedido_, la interfaz debe actualizar
la lista del pedido y el total).

A continuación puedes ver los objetivos de aprendizaje de este proyecto:

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [ ] [Uso de Media Queries.](https://developer.mozilla.org/es/docs/CSS/Media_queries)

### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [ ] Manipular objects (key | value)
* [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.
* [ ] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [ ] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y Github

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)
* [ ] Organización en Github (projects | issues | labels | milestones)

### Firebase

* [ ] [Firestore.](https://firebase.google.com/docs/firestore)
* [ ] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
* [ ] [Firebase security rules.](https://firebase.google.com/docs/rules)
* [ ] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user)
 | [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))

### Angular

* [ ] [Components & templates.](https://angular.io/guide/architecture-components#introduction-to-components)
* [ ] [Directivas estructurales (ngIf / ngFor)](https://angular.io/guide/template-syntax#built-in-structural-directives)
* [ ] [@Input | @Ouput](https://angular.io/guide/component-interaction#component-interaction)
* [ ] [Creación y uso de servicios.](https://angular.io/guide/architecture-services#providing-services)
* [ ] [Manejos de rutas.](https://angular.io/guide/router)
* [ ] [Creación y uso Observables.](https://angular.io/guide/observables-in-angular)
* [ ] [Uso de HttpClient.](https://angular.io/guide/http)
* [ ] [Estilos de componentes (ngStyle / ngClass)](https://angular.io/guide/template-syntax#built-in-directives)


### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.
