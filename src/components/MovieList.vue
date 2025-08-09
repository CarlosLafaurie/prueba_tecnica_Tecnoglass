<template>
  <div class="movie-list">
    <MovieCard v-for="m in movies" :key="m.imdbID" :movie="m" />
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

export default {
  props: {
    movies: Array
  },
  components: { MovieCard }
};
</script>

<style scoped>
.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  margin-block-start: 20px;
}
</style>
