<template>
  <div id="one">
    <h1>One List</h1>
    <ul>
      <li v-for="(product, index) in newProducts" :key="index">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">降价</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    /* newProducts() {
      return this.$store.getters.newProducts;
    } */
    ...mapGetters(["newProducts"])
  },
  methods: {
    /* reducePrice(amount) {
      this.$store.state.products.forEach(product => {
          product.price -= 1;
      })

      this.$store.commit("reducePrice");
      this.$store.dispatch("reducePrice",amount);
    } */
    ...mapActions(["reducePrice"])
  }
};
</script>

<style scoped>
#one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#one ul {
  padding: 0;
}
#one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>