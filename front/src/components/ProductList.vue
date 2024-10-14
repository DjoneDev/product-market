<template>
  <section class="product-list">
    <div 
      v-for="product in filteredProducts" 
      :key="product.id" 
      class="product" 
      @click="handleProductClick(product)"
    >
      <img :src="product.image" alt="Product">
      <h2>
        {{ product.name }}
      </h2>
      <p>
        Preço: R$ {{ product.price.toFixed(2) }}
      </p>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductList',
  props: {
    searchQuery: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      products: []
    } 
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => 
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },

  mounted() {
    this.fetchProduct()
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await axios.get('http://localhost:3000/api/products')
        this.products = response.data;

        if(window.dataLayer) {
          window.dataLayer.push({
            event: 'produtos-carregados', 
            produtos: this.products.length
          }) 
        }
      } catch (error) {
        console.error('Erro ao buscar produtos:', error)
      }
    },
    handleProductClick(product) {
      if (window.dataLayer) {
        window.dataLayer.push({
          'event': 'product_click',
          'product_id': product.id,
          'product_name': product.name,
          'product_price': product.price
        });
      }
      // Adicione aqui qualquer outra lógica necessária ao clicar no produto
      console.log(`Produto clicado: ${product.name}`);
    }
  }
}
</script>


<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
}

.product {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 16px;
  text-align: center;
  background: #fff;
  border-radius: 8px;
  width: 200px;
  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.product:hover {
  transform: scale(1.05);
}

.product img {
  height: 200px;
  max-width: 100%;
  border-radius: 8px
}

</style>
