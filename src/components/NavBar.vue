<template>
  <nav class="navbar">
    <a class="nav-btn" href="/">
      <i class='bx bx-home-alt-2'></i> Inicio
    </a>
    <button class="nav-btn" @click="scrollToSearch">
      <i class='bx bx-search'></i> Buscar
    </button>
  </nav>
</template>

<script>
export default {
  methods: {
    scrollToSearch() {
      const searchBar = document.querySelector('.search-bar');
      if (searchBar) {
        searchBar.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  inline-size: 100vw;
  margin: 0 0 15px 0;
  background: #232526;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  position: sticky;
  inset-block-start: 0;
  z-index: 10;
}

.nav-btn {
  background: #FFC300;
  color: #232526;
  border: none;
  border-radius: 8px;
  padding: 8px 18px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  margin-inline-end: 12px;
}

.nav-btn:hover {
  background: #e1ac00;
  color: #fff;
}

.nav-btn i {
  font-size: 1.3em;
}
</style>