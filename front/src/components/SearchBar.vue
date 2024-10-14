<template>
    <div>
        <input 
            type="text" 
            placeholder="Buscas produtos..."
            v-model="searchQuery"
            @input="filterProducts"
            class="search-input"
        />
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchQuery: ''
        }
    },

    methods: {
        filterProducts() {
            this.$emit('search', this.searchQuery)

        if(window.dataLayer) {
          window.dataLayer.push({
            event: 'clique-busca', 
            searchQuery: this.searchQuery
          }) 
        }
        }
    }
} 
</script>

<style scoped>
.search-input {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    margin: 20px auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

</style>
