<template>
  <div id="two">
    <h1>Two List</h1>
    <ul>
      <li v-for="(product, index) in newProducts" :key="index">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    newProducts() {
      return this.$store.getters.newProducts;
    }
  }
};
</script>

<style scoped>
#two {
  background: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}

#two ul {
  padding: 0;
  list-style-type: none;
}

#two li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}

.price {
  font-weight: bold;
  color: #860ce8;
  display: block;
}
</style>
