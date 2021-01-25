<p align="center">
  <a title="Travel-In" target="_blank" href= "https://burgerqueen013.web.app/">
    <img  src="https://raw.githubusercontent.com/consuelogoche-1994/LIM013-fe-burger-queen/main/Burger-Queen/src/assets/img/burger1.png">
  </a>
</p>



# Burger Queen 🍔🍟🥪
### Made by [Katy H.](https://github.com/KatyLuHT) & [Goche C.](https://github.com/consuelogoche-1994)

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Definición del producto](#2-definición-del-producto)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Diseño de Interfaz de Usuario](#4-diseño-de-interfaz-de-usuario)
* [5. Test de usabilidad](#5-Test-de-usabilidad)
* [6. Objetivos de aprendizaje](#6-Objetivos-de-aprendizaje)
 
## 1. 🧐Resumen del proyecto 
El presente proyecto, **_TRAVEL IN_**, es una Red social destinada a personas interesadas en compartir sus experiencias de viajes, tips, recomendaciones y demás que puedan ser de utilidad para otros amantes de los viajes o que quieran iniciar en esta actividad. Esta red social te permitirá crear una cuenta de acceso y loguearse con ella; crear, editar, borrar, comentar y "likear" publicacciones, todo de forma dinámica.

<p align="center">
  <img  src="https://github.com/consuelogoche-1994/LIM013-fe-burger-queen/blob/main/Burger-Queen/src/assets/img/burgergif.gif?raw=true" alt="Travel-In">
</p>

## 2. 👩‍💻Definición del producto



## 3. 📝Historias de usuario

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


## Índices

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

[React](https://es.reactjs.org/), [Angular](https://angular.io/) y [Vue](https://vuejs.org/)
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las caractrísticas _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## 2. Resumen del proyecto

Esta vez tenemos un proyecto 100% por encargo. Si bien siempre puedes (y debes)
hacer sugerencias de mejoras y/o cambios, muchas veces trabajarás en proyectos
en los que primero hay que asegurarse de cumplir con lo requerido.

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente (a través de un
  _backend_ del que nos darán detalles más adelante).

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Esta es la información que tenemos del cliente:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural              |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> **Importante:** Los clientes pueden escoger entre hamburguesas de res,
> de pollo, o vegetariana. Además, por $ 1 adicional, pueden agregarle queso
> o huevo.
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
>el su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

## 3. Objetivos de aprendizaje

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

### React

* [ ] [`JSX`](https://es.reactjs.org/docs/introducing-jsx.html)
* [ ] [Componentes `class` y componentes `function`](https://es.reactjs.org/docs/components-and-props.html#function-and-class-components)
* [ ] `props`
* [ ] [Eventos en React.](https://es.reactjs.org/docs/handling-events.html)
* [ ] [Listas y keys.](https://es.reactjs.org/docs/lists-and-keys.html)
* [ ] [Renderizado condicional.](https://es.reactjs.org/docs/conditional-rendering.html)
* [ ] [Elevación de estados.](https://es.reactjs.org/docs/lifting-state-up.html)
* [ ] [`hooks`](https://es.reactjs.org/docs/hooks-intro.html)
* [ ] [`CSS` modules.](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
* [ ] [React Router.](https://reacttraining.com/react-router/web)

### Vue

* [ ] [Instancia de Vue.js.](https://es.vuejs.org/v2/guide/instance.html)
* [ ] [Datos y métodos.](https://es.vuejs.org/v2/guide/instance.html#Datos-y-Metodos)
* [ ] [Uso y creación de Componentes.](https://vuejs.org/v2/guide/components.html)
* [ ] [Props.](https://es.vuejs.org/v2/guide/components.html#Pasando-datos-a-componentes-secundarios-con-Props)
* [ ] Directivas ([v-bind](https://es.vuejs.org/v2/api/#v-bind) | [v-model](https://es.vuejs.org/v2/guide/forms.html))
* [ ] Renderizado condicional ([v-if](https://es.vuejs.org/v2/guide/conditional.html#v-if)
 | [v-else](https://es.vuejs.org/v2/guide/conditional.html#v-else))
* [ ] Iteraciones ([v-for](https://es.vuejs.org/v2/guide/list.html#Mapeando-una-matriz-a-elementos-con-v-for))
* [ ] Eventos ([v-on](https://es.vuejs.org/v2/guide/events.html))
* [ ] [Propiedades Computadas y Observadores.](https://es.vuejs.org/v2/guide/computed.html)
* [ ] [Router.](https://router.vuejs.org/guide/#html)
* [ ] [Clases y Estilos.](https://es.vuejs.org/v2/guide/class-and-style.html)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 4. Consideraciones generales

Este proyecto se debe "resolver" de forma individual.

Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja
hasta la historia que puedas en el tiempo especificado.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada.
En este proyecto Sí está permitido usar librerías o frameworks
(debes elegir entre [React](https://es.reactjs.org/), [Vue](https://vuejs.org/) o
[Angular](https://angular.io/)).

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**.

Necesitamos pensar bien en el aspecto UX de de quienes van a tomar los pedidos,
 el tamaño y aspecto de los botones, la visibilidad del estado actual del
 pedido, etc.

La aplicación desplegada debe tener 80% o más el las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_ y _branches_.

Este proyecto incluye un _boilerplate_ con el código necesario para arrancar con
la parte de backend ya resuelta. El _boilerplate_ incluye los siguientes
archivos/carpetas con la configuración de Fierbase (hosting y firestore):

```text
.
├── .editorconfig
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── README.md
└── README.pt-BR.md
```

Por otro lado, la parte de la interfaz no está incluida, por lo que, deberás
definir la estructura de carpetas y archivos que consideres necesaria. Puedes
guiarte de las convenciones del _framework_ elegido. Por ende, los _tests_ y el
_setup_ necesario para ejecutarlos, serán hechos por ti.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## 5. Criterios de aceptación mínimos del proyecto

### Definición del producto

El [_Product Owner_](https://youtu.be/r2hU7MVIzxs) nos
presenta este _backlog_ que es el resultado de su trabajo con el cliente hasta
hoy.

***

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

## 6. Pistas, tips y lecturas complementarias

### Primeros pasos

NOTA: Si estás haciendo el proyecto en equipo, estos pasos solo los necesita
hacer una persona por equipo. El resto de las integrantes del equipo después
podrán hacer sus propios _forks_ a partir del _fork_ principal de su equipo.

1. Haz un _fork_ de este repo (en GitHub).

2. Clona tu _fork_ en tu computadora:

   ```sh
   git clone git@github.com:<tu-usuario-de-github>/<cohortid>-burger-queen.git
   cd <cohortid>-burger-queen
   ```

3. Crea una rama a partir de `master` para empezar a trabajar. Por ejemplo:

   ```sh
   git checkout -b develop
   ```

4. Crea un proyecto en [Firebase](https://firebase.google.com/)

5. Habilita Firestore (_comenzar en modo bloqueado_) en sección de "Bases de
   Datos" de [Firebase console](https://console.firebase.google.com/).

6. Instala la [utilidad de línea de comando de Firebase](https://firebase.google.com/docs/cli?hl=es).
   Esta utilidad nos permitirá usar el comando `firebase` desde nuestra
   terminal. Ten en cuenta que el comando de instalación incluye la opción `-g`,
   lo cual significa que estamos instalando `firebase-tools` de forma _global_,
   con lo cual quedará disponible desde cualquier _lugar_ (es independiente de
   un proyecto en particular, no queda instalado en la carpeta `node_modules` de
   tu proyecto, si no globalmente, por lo tanto no importa desde qué carpeta
   ejecutes el siguiente comando de instalación).

   ```sh
   npm i -g firebase-tools
   ```

7. Iniciamos sesión con Firebase y agregamos entorno que usaremos para
   desplegar:

   ```sh
   firebase login
   firebase use --add

   # Una vez agregado el entorno (proyecto de firebase) puedes agregar otros y
   # listar los entornos configurados para esta carpeta con este comando
   firebase use
   ```

8. Llegado a este punto, ya puedes comenzar con la problemática del proyecto en
   sí. Te recomendamos como siguiente paso convertir el menú descrito por el
   cliente en una estructura que podamos poner en un archivo JSON para después
   _pintar_ en la pantalla.

### Despliegue

Cada framework incluye su propio _pipeline_ de _construcción_ o _build_. Con
esto nos referimos a que para _construir_ nuestro proyecto y producir un
_artefacto_ que podamos desplegar vamos a usar usar un script que normalmente
configuramos como una tarea de `npm-scrips` con el nombre `build` e invocamos
así:

```sh
npm run build
```

Una vez hayamos _construido_ la aplicación, tendremos un directorio que contiene
la app lista para desplegar. Dependiendo del framework que uses y tu
configuración en particular, esa carpeta puede tener un nombre distinto;
normalmente `build` o `dist`.

La herramienta de línea de comando de Firebase (`firebase-tools`) incluye un
comando que nos permite desplegar nuestro proyecto a Firebase:
`firebase deploy`. A la hora de ejecutar este comando, se usará la configuración
que tenemos en el archivo `firebase.json`. En ese archivo asegúrate de que la
_propiedad_ `public` del _objeto_ `hosting` tenga la ruta correcta a la carpeta
donde hemos _construido_ la aplicación. En este ejemplo es implemente `build`,
asumiendo que la carpeta `build` es una subcarpeta del directorio donde se
encuentra nuestro `firebase.json`.

```json
  ...
  "hosting": {
    "public": "build",
    ...
  },
  ...
```

Finalmente, estás lista para desplegar tu proyecto a Firebase :rocket::fire:!

```sh
firebase deploy
```

***

### :information_source: Nota para estudiantes que elijan React y `create-react-app`

Si tratas de usar [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html)
en el directorio del proyecto recibirás un error diciendo que hay archivos que
podrían presentar un conflicto. Para evitar este problema puedes crear una nueva
app usando `create-react-app` y de ahí _mezclarla_ con la carpeta del proyecto:

```sh
# Si estabas en la carpeta del proyecto, salimos a la carpeta de más arriba
cd ..

# Creamos una nueva aplicación con `create-react-app` en la carpeta
# `burger-queen-tmp`
npx create-react-app burger-queen-tmp

# Copiamos el _boilerplate_ del proyecto _encima_ de la aplicación creada con
# `create-react-app`
cp -r <cohort-id>-burger-queen/* burger-queen-tmp/

# Copiamos el contenido de la aplicación creada con `create-react-app` de vuelta
# al repo del proyecto (teniendo en cuenta el archivo _oculto_ `.gitignore`).
cp -r burger-queen-tmp/.gitignore burger-queen-tmp/* <cohort-id>-burger-queen/

# Ya podemos borrar la instalación _temporal_ y quedarnos solo con el repo del
# proyecto, con el que partimos.
rm -rf burger-queen-tmp

# Volvemos a entrar en el directorio del proyecto y ya deberíamos estar listas
# para comenzar.
cd <cohort-id>-burger-queen

# Para confirmar que todo fue bien arranca la aplicación con el siguinte comando
# y verifica que la interfaz se abre en el navegador.
yarn start
```

### Otros recursos

#### Frameworks / libraries

* [React](https://es.reactjs.org/)
* [Vue](https://vuejs.org/)
* [Angular](https://angular.io/)

#### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)

#### PWA

* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
* [offlinefirst.org](http://offlinefirst.org/)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [Cómo habilitar datos sin conexión - Firebase Docs](https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419)

#### Serverless

* [Qué es eso de serverless? - @PamRucinque en Medium](https://medium.com/@PamRucinque/qu%C3%A9-es-eso-de-serverless-f4f6c8949b87)
* [Qué es Serverless? | FooBar - YouTube](https://www.youtube.com/watch?v=_SYHUpLi-2U)
* [Firebase](https://firebase.google.com/)
* [Serverless Architectures - Martin Fowler](https://www.martinfowler.com/articles/serverless.html)
