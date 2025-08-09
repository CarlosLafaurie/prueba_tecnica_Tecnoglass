<template>
  <div>
    <NavBar />
    <Loading v-if="loading" @loaded="loading = false" />
    <div v-else class="container">
      <MovieCarousel v-if="featuredMovies.length" :movies="featuredMovies" />
      <SearchBar v-model="searchTerm" @onSearch="fetchMovies" />
      <div v-if="notFound" class="not-found">
        Película no encontrada o mal escrita
      </div>
      <Home v-if="!movies.length && !notFound" />
      <MovieList :movies="movies" v-if="movies.length" />
    </div>
    <AppBar />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MovieCarousel from "@/components/MovieCarousel.vue";
import Home from "@/views/Home.vue";
import SearchBar from "@/components/SearchBar.vue";
import MovieList from "@/components/MovieList.vue";
import Loading from "@/views/Loading.vue";
import { searchMovies, getMovieByTitle } from "@/services/movieService";
import AppBar from "./components/AppBar.vue"; 

export default {
  components: { Home, SearchBar, MovieList, Loading, MovieCarousel, NavBar, AppBar },
  data() {
    return {
      searchTerm: "",
      movies: [],
      featuredMovies: [],
      loading: true,
      notFound: false
    };
  },
  async mounted() {
    const popularTitles = [
      "Spider-Man: No Way Home",
      "The Dark Knight",
      "Avengers: Endgame",
      "Fight Club"
    ];
    const promises = popularTitles.map(title => getMovieByTitle(title));
    const results = await Promise.all(promises);
    this.featuredMovies = results.filter(movie => movie && movie.Response !== "False");
  },
  methods: {
    async fetchMovies() {
      if (!this.searchTerm.trim()) {
        this.movies = [];
        this.notFound = false;
        return;
      }
      const result = await searchMovies({ searchTerm: this.searchTerm });
      this.movies = result;
      this.notFound = Array.isArray(result) && result.length === 0;
    }
  }
};
</script>

<style>
.container {
  padding-block-end: 60px;
}

.not-found {
  color: #FFC300;
  font-size: 1.2em;
  text-align: center;
  margin: 24px 0;
}
</style>
