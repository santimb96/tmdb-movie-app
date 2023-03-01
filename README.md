# [TDMB Movie App](https://tmdb-movie-app-santimb96.vercel.app) &middot; ![react](https://img.shields.io/badge/react-v18.2.0-informational) ![npm](https://img.shields.io/badge/npm-v9.0.5-informational) ![node](https://img.shields.io/badge/node-v16.17.0-informational) ![vercel](https://img.shields.io/badge/vercel-deployed-success)

TMDB Movie App es una aplicación la cual pretende mostrar películas y guardarlas como favoritas siguiendo los siguientes principios:

- **Interfaz limpia:** Una interfaz simple y limpia, la cual se centra en una buena experiencia de usuario, haiéndola intuitiva y eficaz tanto en dispositivos móviles como en escritorio.
- **Seguridad:** A pesar de no contar con un sistema _backend_, el registro e inicio del usuario cuenta con un sistema de encriptación que mantiene la contraseña segura.
- **_User experience_:** En todo momento se vela por una buena experiencia de usuario, haciéndola fácil y comprensible para cualquier tipo de usuario.

## Idea

La idea de la aplicación surge a raíz de una propuesta en una prueba técnica en la cual se especifican una serie de requisitos a cumplir pero con cierto grado de libertad a la hora de escoger temática, cómo y dónde.

Por lo tanto, pienso en la idea de realizar una aplicación básica de películas/series en la cual el usuario pueda buscar las que desee, así como recibir una lista completa _trending_. Además, ésta puede almacenar las que más le guste siempre y cuando esté registrado y autenticado en la aplicación.

Con el tiempo del que se dispone, se trata de realizar una aplicación que imite los procesos cliente/servidor convencionales, pero sin tener un servidor real. Por lo tanto, se hace uso de _cookies_ y _local storage_ para simular un sistema de autenticación y almacenamiento de datos.

## Vista previa

|                             Versión móvil                              |                            Solarized Ocean                             |
| :--------------------------------------------------------------------: | :--------------------------------------------------------------------: |
| <img src="https://i.imgur.com/SCdQI5f.png" width="225" height="400" /> | <img src="https://i.imgur.com/dn6yDwn.png" width="400" height="250" /> |
| <img src="https://i.imgur.com/OBsW5rR.png" width="225" height="400" /> | <img src="https://i.imgur.com/TvsRJBU.png" width="400" height="250" /> |
| <img src="https://i.imgur.com/IVTbHat.png" width="225" height="400" /> | <img src="https://i.imgur.com/ozB5oLU.png" width="400" height="350" /> |

## Instalación

Para instalar el proyecto en local, se ha de hacer lo siguiente:

- Clonar el repositorio este repositorio (https://github.com/santimb96/tmdb-movie-app.git)

- Instalar las dependencias del proyecto con el comando `npm install`.
- Ejecutar el proyecto con `npm run dev`.

## Tecnologías

Se han usado diversas teconologías en cuanto al _frontend_ y las que se encargan de "emular" el _backend_:

- **React:** Se ha usado React para el desarrollo del _frontend_ de la aplicación. Con esta librería pretendo facilitar el desarrollo de la aplicación, haciéndola escalable y fácil de mantener.
- **React Router:** Para la navegación entre páginas, uso React Router Dom, una librería que facilita la navegación entre páginas y comunmente usada para la sistemas _SPA_.

- **Contexts:** Los utilizo para mantener la información accesible en todos los componentes, como por ejemplo, datos que tiene que ver con el inicio de usuario.
- **Hooks:** Para la gestión de estados, uso los _hooks_ de React, los cuales me permiten mantener la información accesible y reactiva en los componentes como _inputs_, listas u objetos provenientes de la _API_.
- **Fetch:**: Uso esta librería nativa de JavaScript para hacer las peticiones a la _API_ de _TMDB_, haciendo uso de una _API_KEY_, una _URL_ base en donde hacer las peticiones, entre otros.
- **Bcryptjs:** Es un módulo que se suele utilizar mucho en Node.js, pero que sin embargo no funciona en entornos clientes como en el de React, por lo que esta variación es funcional para el entorno en el que estoy trabajando. Lo utilizo para cifrar las contraseñas tanto en registros como en inicios de sesión, así como para compararlas entre ellas para verificar la integridad de los datos.
- **Local Storage y Cookies:** Se usan para preservar la información; la primera opción, sobre todo, almacena la información del usuario como, por ejemplo, el usuario, contraseña y lista de favoritos entre otros; las _cookies_ se utilizan únicamente para poder implementar un sistema de _autologin_, el cual se ejecuta cada vez que se refresca cualquier página y permite identificar si el usuario continúa logueado o no.
- **Módulos CSS3:** En cuanto a la interfaz de usuario empleo las clásicas hojas de estilos con CSS, encapsulando cada componentte en un directorio para así hacerlo independiente y más fácil de mantener. Además, he utilizado los módulos de CSS para tratar los _classNames_ como objetos, haciéndolos más fáciles de identificar y reutilizar.
- **React Icons:** Para los iconos de la app utilizo este paquete el cual me proporciona infinidad de éstos para escoger e implementar. Es una utilizad muy popular en el entorno de _React_.

- **Material UI:** Se usa únicamente para realizar una _media query_ en un componente para así saber si renderizar un apartado en una secciñon u otra, estableciento un _width_ mínimo para que se muestre en un sitio u otro.

Otras teconologías que se han usado son:

- **Vercel:** Para el despliegue de la aplicación en la nube, se usa Vercel, un servicio de _hosting_ gratuito que permite desplegar aplicaciones _SPA_ de forma sencilla. Además, dispone de muchas facilidades en proyectos hechos en _Next.js_ y _React_.

- **GitHub:** Se utiliza para el control de versiones del proyecto, así como repositorio para el despliegue de la aplicación.

- **TMDB API:** Se usa para obtener la información de las películas. Es una _API_ que requiere de usuario autentiado para poder así obtener una serie de identificaciones que se usan para realizar las peticiones.

## Tiempo de desarrollo

He escogido un tiempo de desarrollo algo largo para poder realizar, en la medida de lo posible, una aplicación completa y bien diseñada. En ningún momento me he querido conformar con ninguno de los niveles, aunque sí que he tratado de ceñirme a la prueba aunque vaya acompañada de una 'sobredosis' de esteroides 😉.

Así pues, me ha llevado una semana de trabajo (no he estado 24/7 en la aplicación) en la que he aplicado conocimientos que tenía, código limpio y también nuevos aprendizajes que me llevo a casa.

## Documentación/Referencias

- [React](https://es.reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Material UI](https://material-ui.com/)
- [Vercel](https://vercel.com/)
- [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)
