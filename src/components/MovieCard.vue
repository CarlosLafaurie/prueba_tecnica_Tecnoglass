<template>
  <div class="card" @click="openTrailer">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2>{{ movie.Title }}</h2>
        <p>{{ movie.Year }} - {{ movie.Type }}</p>
      </div>
    </div>
    <div class="face face2">
      <template v-if="showPoster">
        <img :src="movie.Poster" :alt="movie.Title" />
      </template>
      <template v-else>
        <div class="no-image">Imagen no encontrada</div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object
  },
  computed: {
    showPoster() {
      return (
        this.movie.Poster &&
        this.movie.Poster !== 'N/A' &&
        !this.movie.Poster.includes('Not Found')
      );
    }
  },
  methods: {
    openTrailer() {
      const query = encodeURIComponent(`trailer ${this.movie.Title}`);
      window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
    }
  }
};
</script>

<style scoped>
.card {
  position: relative;
  inline-size: 200px;
  block-size: 300px;
  margin: 0 auto;
  background: #000;
  border-radius: 15px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
.face {
  position: absolute;
  inset-block-end: 0;
  inset-inline-start: 0;
  inline-size: 100%;
  block-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s;
}
.face1 {
  box-sizing: border-box;
  padding: 20px;
  z-index: 2;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s;
}
.card:hover .face1 {
  opacity: 1;
  pointer-events: auto;
}
.face2 {
  transition: 0.5s;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;
  background: #000;
}
.card:hover .face.face2 {
  block-size: 60px;
}
.face2 img {
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
  border-radius: 15px;
}
.no-image {
  inline-size: 100%;
  block-size: 100%;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  border-radius: 15px;
}
.content h2 {
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  background-color: #fffc00;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.content p {
  color: #fff;
  margin-block-start: 10px;
  font-size: 1em;
}
</style>