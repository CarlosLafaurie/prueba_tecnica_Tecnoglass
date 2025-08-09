# PelisTec

Aplicación web desarrollada con Vue 3 y Vite que permite buscar películas, explorar títulos destacados y visualizar información relevante usando la API de OMDb. Diseño moderno, responsive y con efectos visuales

---

## Funcionalidades principales

- Pantalla de carga animada al iniciar.
- Carrusel con películas destacadas.
- Búsqueda por título usando la API de OMDb.
- Resultados en tarjetas interactivas con acceso a trailers.
- Mensaje de error si no se encuentra la película.
- Navegación con barra superior y pie de página fijo.
- Fondo animado con partículas.

---

## Tecnologías utilizadas

- [Vue.js 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [OMDb API](https://www.omdbapi.com/)
- [Axios](https://axios-http.com/)
- [Boxicons](https://boxicons.com/)
- HTML5 + CSS3 (Scoped styles + animaciones SVG)

---

## Estructura del proyecto

pelistec/ 
├── public/ 
│ └── index.html 
├── src/ 
│   ├── assets/ 
│   └── main.css 
│   ├── components/ 
│   │   ├── NavBar.vue 
│   │   ├── AppBar.vue 
│   │   ├── SearchBar.vue 
│   │   ├── MovieCarousel.vue 
│   │   ├── MovieList.vue 
│   │   └── MovieCard.vue 
│   ├── views/ 
│   │   ├── Home.vue 
│   │   └── Loading.vue 
│   ├── services/ 
│   │   └── movieService.js 
│   ├── App.vue 
│   └── main.js 
└── .env

---

## Componentes

| Componente         |                    Función                                              |
|--------------------|-------------------------------------------------------------------------|
| `App.vue`          | Componente raíz que gestiona el flujo principal de la app               |
| `NavBar.vue`       | Barra de navegación con acceso a búsqueda e inicio                      |
| `AppBar.vue`       | Pie de página fijo con derechos de autor                                |
| `Loading.vue`      | Pantalla de carga animada al iniciar                                    |
| `MovieCarousel.vue`| Carrusel con las primeras 4 películas destacadas                        |
| `SearchBar.vue`    | Barra de búsqueda con binding bidireccional y eventos personalizados    |
| `MovieList.vue`    | Lista de resultados renderizada con tarjetas individuales               |
| `MovieCard.vue`    | Tarjeta interactiva con datos de la película y acceso a trailers        |
| `Home.vue`         | Vista inicial con películas populares                                   |

---

## API utilizada

Se utiliza la [OMDb API](https://www.omdbapi.com/) para obtener información de películas mediante tres funciones:

- `searchMovies`:    búsqueda por título.
- `getMovieById`:    búsqueda por ID.
- `getMovieByTitle`: búsqueda exacta por nombre.

---

## Variables de entorno

Clave de API defunida en el archivo `.env`:

```env
VITE_OMDB_API_KEY=clave_api

---

## Estilos y animaciones

- Fondo con gradiente oscuro para mejor estética.
- Partículas doradas animadas en forma de estrella SVG que flotan de fondo.
- Efectos hover en botones y tarjetas para la interacción.
- Diseño responsivo con `grid` y `flexbox`.

---

### Componente `App.vue`

Componente raíz de la aplicación. Maneja la estructura principal y la interacción entre los distintos módulos visuales y funcionales.

#### Funcionalidad   
- Muestra una pantalla de carga inicial (`Loading.vue`) antes de renderizar el contenido.
- Carga películas destacadas al montar el componente usando `getMovieByTitle`.
- Renderiza el carrusel de películas destacadas, barra de búsqueda, resultados, mensaje de error y vista inicial (`Home.vue`) según el estado de la búsqueda.
- Gestiona el estado de búsqueda (`searchTerm`), resultados (`movies`), destacados (`featuredMovies`) y errores (`notFound`).

---

### Componente `Home.vue`

Este componente muestra una sección de **películas destacadas** en la vista principal de la aplicación. Su propósito mostrar una selección de títulos populares al iniciar.

#### Funcionalidad

- ejecuta una petición simultánea (`Promise.all`) para obtener información de una lista predefinida de películas populares usando la función `getMovieByTitle` del servicio `movieService`.
- Filtra los resultados inválidos (`Response: "False"`) y los almacena en `featuredMovies`.
- Renderiza el componente `MovieList`, pasando como propiedad (`prop`) el arreglo de películas destacadas.

---

### Componente `MovieCard.vue`
 
Define una tarjeta para cada película, mostrando título, año, tipo y póster. Diseño interactivo que muestra la información de la pelicula al pasar el cursor.

#### Funcionalidad  
- Muestra el póster de la película si está disponible; si no, indica que no hay imagen.
- Al hacer clic en la tarjeta, abre una búsqueda de trailer en YouTube usando el título de la película.
- Usa efectos hover para revelar detalles y animaciones visuales.

--- 

### Componente `MovieList.vue`
 
Renderiza una cuadrícula de tarjetas de películas usando el componente `MovieCard`. Muestra los resultados de búsqueda o las películas destacadas.
Componente principal junto con el Search.

#### Funcionalidad 
- Recibe un arreglo de películas como propiedad (`movies`).
- Realiza la Busqueda y genera una tarjeta por cada película usando `v-for`.
- Utiliza `grid` para organizar las tarjetas de forma responsiva.

--- 

### Componente `SearchBar.vue`
 
Barra de búsqueda interactiva que permite al usuario ingresar el título de una película y ejecutar la búsqueda manualmente.
Componente principal.

#### Funcionalidad  
- Usa `v-model` con `modelValue` para vincular el término de búsqueda con el componente padre.
- Emite el evento `onSearch` al presionar Enter o hacer clic en el botón.
- Actualiza el valor del término de búsqueda mediante `update:modelValue`.
- Devuelve las peliculas destacada cuando se realiza una busqueda vacía

---

## Algunas consideraciones y deudas tecnicas

- Filtrado de resultados inválidos (`Response: "False"`).
- Peticiones concurrentes con `async/await`.
- Carrusel con imágenes estaticas.
- Acceso directo a trailers en YouTube.
- Diseño adaptable a distintos dispositivos.

---

## Project Setup

```sh
npm install

---

## Compile and Hot-Reload for Development

```sh
npm run dev

---

## Compile and Minify for Production

```sh
npm run build
