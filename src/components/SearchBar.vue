<template>
    <h2>Tienes alguna pelicula favorita? </h2>
  <div class="search-bar">
    <input
      v-model="searchTerm"
      @keyup.enter="search"
      placeholder="Buscar película..."
    />
    <button @click="search">
      <i class='bx bx-search'></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String
  },
  emits: ["update:modelValue", "onSearch"],
  computed: {
    searchTerm: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  },
  methods: {
    search() {
      this.$emit("onSearch");
    }
  }
};
</script>

<style scoped>
.search-bar {
  display: flex;
  gap: 10px;
  align-items: center;
  background: rgba(40, 40, 40, 0.7);
  padding: 12px 18px;
  border-radius: 12px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15);
  margin-block: 24px;
}

h2 {
  color: #FFC300;
  font-size: 1.8em;
  margin-block-end: 16px;
}

input {
  flex: 1;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  background: #232526;
  color: #fff;
  outline: none;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(60, 132, 206, 0.08);
}

input:focus {
  box-shadow: 0 0 0 2px #FFC300;
}

button {
  padding: 5px 5px;
  border: none;
  border-radius: 8px;
  background: #FFC300;
  color: #232526;
  font-size: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  box-shadow: 0 2px 8px rgba(60, 132, 206, 0.12);
}

button:hover {
  background: #e1ac00;
  color: #fff;
  transform: scale(1.07);
}

button i {
  font-size: 1.5em;
}
</style>
