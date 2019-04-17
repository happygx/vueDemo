<template>
  <div id="app">
    <one></one>
    <two></two>
  </div>
</template>

<script>
import One from "./components/One";
import Two from "./components/Two";

export default {
  name: "app",
  components: {
    One,
    Two
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
