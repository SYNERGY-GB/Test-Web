# Prueba de admisión: Destrezas Web

Esta prueba está diseñada para medir tus destrezas en el área de la programación web. Para resolverla debes tener en cuenta que debes usar las siguientes tecnologías:

+ GIT
+ NPM
+ HTML5
+ CSS
+ JavaScript
+ Bootstrap
+ Angular.js
+ Gulp / Grunt
+ Restful Web Services

Tu tarea es realizar el `Front-End` de una aplicación web con el enfoque [`SPA`](https://en.wikipedia.org/wiki/Single-page_application) usando el framework [`Angular.js`](https://angularjs.org/).  Antes de comenzar, debes hacer los siguientes pasos:

+ Genera una llave SSH pública.

+ Agregala a tu cuenta de GitHub.

+ Usa la consola de GIT para clonar el repositorio con el siguiente comando git clone vía SSH.

+ Crea tu `branch` siguiendo este formato `admision/nombre-apellido`. Para hacerlo, debes ejecutar el siguiente comando en la consola GIT `git checkout -b admision/nombre-apellido`.

Particularmente, el `Front-End` estará basado en dos vistas las cuales serán explicadas a continuación.

## Refrescado automatizado del `browser`

En este punto, es necesario que utilices las herramientas [`gulp`](http://gulpjs.com/) o [`grunt`](http://gruntjs.com/) para que al editar y guardar los cambios en tus archivos `HTML`, `CSS` o `JavaScript` el `browser` refresque las vistas automáticamente sin que debas hacerlo manualmente presionando `F5`.

## Vista del `login`

### Maquetado

Como bien sabemos, en casi todas las aplicaciones web se tiene presente una vista para llevar a cabo el inicio de sesión. La idea es que maquetes esta vista usando [`Bootstrap`](http://getbootstrap.com/) y que sea lo más parecida a la siguiente imagen:

![`Login`](/assets/images/login-example.jpg)

### Implementación de la lógica de interfaz

En esta vista debes llevar a cabo lo siguiente:

+ Los campos de **nombre de usuario**, **contraseña** y **tipo** deben ser marcados como obligatorios. Si el usuario no ingresa alguno de ellos se debe mostrar un [`modal`](http://getbootstrap.com/javascript/#modals) indicando el campo faltante. En caso de faltar varios campos, sólo se indica el primero.

+ Al presionar el link de **recuperar contraseña** se debe mostrar un `alert` con el mensaje: "recuperar contraseña".

+ El campo **tipo** debe ser un [`dropdown`](http://getbootstrap.com/javascript/#dropdowns) cuyo valor por defecto debe ser "**Seleccione**" y las opciones serán "**V**", "**E**" y "**P**".

### POST `Login`

Debes consumir el servicio web `session` para crear una sesión en el servidor. Para ello, debes hacer una petición HTTP usando el verbo `POST` al siguiente URL `http://admision.synergy-gb.com:9998/session`. 

De la interfaz maquetada previamente junto con su lógica se deben suministrar las siguientes credenciales:

+ Usuario: synergy
+ Contraseña: synergy123
+ Tipo: V

Consecuentemente, se deben enviar en el `body` de la petición en formato JSON como se muestra a continuación: 

```json
{
    "username": "synergy",
    "password": "synergy123",
    "type": "V"
}
```

Este servicio responde un `StatusCode` 200 de HTTP junto con un JSON  cuya estructura es la siguiente:

```json
{
    "status": "ok",
    "cid": "2kj34h345"
}
```

 Donde el `status` debe ser "ok" y  `cid` el `cookie id` que debes usar en las peticiones posteriores. En caso de ingresar los datos de manera incorrecta, el servicio responderá un `StatusCode` 401 de HTTP y un `status` fallido como se muestra a continuación:

```json
{
    "status": "failed",
    "cid": null
}
```

## Vista del `timeline`

### Maquetado

El maquetado de esta vista se deja a tu creatividad aprovechando las bondades de [`Bootstrap`](http://getbootstrap.com/).

### GET `data`

Debes consumir el servicio web `data` obtener los datos del usuario del servidor. Para ello, debes hacer una petición HTTP usando el verbo `GET` al siguiente URL `http://admision.synergy-gb.com:9998/data` enviando por parámetros del `query string` el `cookie id` obtenido al iniciar sesión previamente. A forma de ejemplo, el URL para solicitar los datos debe ser de esta manera `http://admision.synergy-gb.com:9998/data?cid=k6lj87hj8`.

El JSON que vas a obtener como los datos de usuario tendrá una estructura similar a la siguiente:

```json
[
    {
        "id": 1,
        "name": "Chevy del 93'",
        "description": "Un carro con un valor sentimental gigante y muy bonito..."
    }
]

```

Por otro lado, en caso de que ocurra un error, el servicio responderá un `StatusCode` 500 de HTTP y un `status` fallido como se muestra a continuación:

```json
{
    "status": "failed"
}
```

###¡Finalmente!

Almacena tu código en el `branch` que creaste con tu nombre y apellido. Para ello, agrega los cambios, haz `commit` y luego haz `push`.