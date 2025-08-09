<template>
  <div v-if="show" class="loading-screen">
    <div class="loading-content">
      <h2>Entrando a PelisTec...</h2>
      <img src="https://i.gifer.com/ZZ5H.gif" alt="Cargando..." class="loading-gif" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = false;
      this.$emit('loaded');
    }, 1200);
  }
};
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  background: rgba(40, 40, 40, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-content {
  text-align: center;
  color: #FFC300;
  font-size: 2em;
}

.loading-gif {
  margin-block-start: 24px;
  inline-size: 64px;
  block-size: 64px;
}
</style>