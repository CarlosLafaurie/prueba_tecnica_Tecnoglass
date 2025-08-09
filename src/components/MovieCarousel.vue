<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div
        v-for="(movie, idx) in firstMovies"
        :key="movie.imdbID"
        class="carousel-item"
        :class="{ active: idx === current }"
      >
        <img
          :src="customImages[idx]"
          :alt="movie.Title"
          class="carousel-img"
        />
        <div class="carousel-caption">
          <h3>{{ movie.Title }}</h3>
        </div>
      </div>
    </div>
    <button class="carousel-control prev" @click="prev">
      <span class="icon">&lt;</span>
    </button>
    <button class="carousel-control next" @click="next">
      <span class="icon">&gt;</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      current: 0,
      customImages: [
        "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/11/spider-man-no-way-home-new-poster-green-goblin-social-featured.jpg",
        "https://wallpapercave.com/wp/wp383267.jpg",
        "https://images8.alphacoders.com/100/1003220.png",
        "https://images3.alphacoders.com/602/602307.jpg"
      ]
    };
  },
  computed: {
    firstMovies() {
      return this.movies.slice(0, 4);
    }
  },
  methods: {
    prev() {
      this.current = (this.current - 1 + this.firstMovies.length) % this.firstMovies.length;
    },
    next() {
      this.current = (this.current + 1) % this.firstMovies.length;
    }
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  inline-size: 99%;
  block-size: 60vh;
  margin: 0 auto 2rem auto;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.25);
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;
}

h3 {
  font-size: 2em;
}

.carousel-inner {
  display: flex;
  inline-size: 100%;
  block-size: 100%;
  transition: transform 0.5s;
}

.carousel-item {
  inline-size: 100%;
  block-size: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.carousel-item.active {
  display: flex;
}

.carousel-img {
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.carousel-caption {
  position: absolute;
  inset-block-end: 12px;
  inset-inline-start: 0;
  inline-size: 100vw;
  text-align: center;
  color: #FFC300;
  font-size: 1.1em;
  background: rgba(0,0,0,0.5);
  padding: 8px 0;
  border-radius: 0 0 16px 16px;
}

.carousel-control {
  position: absolute;
  inset-block-start: 50%;
  transform: translateY(-50%);
  background: #FFC300;
  border: none;
  border-radius: 50%;
  inline-size: 38px;
  block-size: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  font-size: 1.5em;
  transition: background 0.2s;
}

.carousel-control.prev {
  inset-inline-start: 12px;
}
.carousel-control.next {
  inset-inline-end: 12px;
}
.carousel-control:hover {
  background: #e1ac00;
}
.icon {
  color: #232526;
  font-weight: bold;
}
</style>