<template>
  <div class="home">
    <h2>Películas Destacadas</h2>
    <MovieList :movies="featuredMovies" />
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
import { getMovieByTitle } from "@/services/movieService";

export default {
  components: { MovieList },
  data() {
    return {
      featuredMovies: [],
     popularTitles: [
      "The Shawshank Redemption",
      "The Dark Knight",
      "Spider-Man: No Way Home",
      "Avengers: Infinity War",
      "Avengers: Endgame",
      "Avatar",
      "Star Wars: Episode V - The Empire Strikes Back",
      "Star Wars: Episode VII – The Force Awakens",
      "The Lord of the Rings: The Fellowship of the Ring",
      "The Lord of the Rings: The Two Towers",
      "The Lord of the Rings: The Return of the King",
      "Titanic",
      "The Matrix",
      "Interstellar",
      "Schindler's List",
      "Pulp Fiction",
      "The Good, the Bad and the Ugly",
      "Forrest Gump",    
      "Fight Club",
      "Inception",   
      "One Flew Over the Cuckoo’s Nest",
      "12 Angry Men",
      "The Godfather",
      "The Godfather Part II",  
      ]
    };
  },
  async mounted() {
    const promises = this.popularTitles.map(title => getMovieByTitle(title));
    const results = await Promise.all(promises);
    this.featuredMovies = results.filter(movie => movie && movie.Response !== "False");
  }
};
</script>

<style scoped>
.home {
  margin-block-start: 1%;
  margin-block-end: 2%;
  margin-inline-start: 0.5%;
  margin-inline-end: 0.5%;
}
h2 {
  color: #FFC300;
  font-family: Open Sans;
  font-size: 1.8em;
  margin-block-end: 16px;
}
</style>
