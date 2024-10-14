<template>
  <main id="app">
    <div class="header overlay">
      <h1>Lista de Produto</h1>
      <SearchBar @search="updateSearchQuery"/>
    </div>
    <ProductList :search-query="searchQuery"/>
  </main>
</template>

<script>
import ProductList from './components/ProductList.vue'
import SearchBar from './components/SearchBar.vue';


export default {
  name: 'App',
  components: {
    ProductList,
    SearchBar
  },
  data() {
    return {
      searchQuery: ''
    }
  },

  methods: {
    updateSearchQuery(query) {
      this.searchQuery = query
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.header {
  background-image: url('https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
  position: relative;
}

.overlay {
  border-image: linear-gradient(hsl(240 100% 50% / .3), hsl(0 100% 50% / .3)) fill 1;
}

.header h1 {
  color: #fff;
  margin: auto;
  padding: 20px 0 20px 0;
}
</style>
