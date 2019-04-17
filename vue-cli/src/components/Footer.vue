<template>
  <div class="footer">
    <h1 @click="changeContent">{{ Copyright }}{{ content }}</h1>
  </div>
</template>

<script>
export default {
  name: "app-header",
  props: ["content"],
  data() {
    return {
      Copyright: "Copyright"
    };
  },
  methods: {
    changeContent: function() {
      //this.content = "change";
      this.$emit("contentChange", "子组件传值");
    }
  }
};
</script>

<style scoped>
.footer {
  width: 1200px;
  margin: 20px auto 0;
  padding: 20px;
  text-align: center;
  color: aqua;
  box-sizing: border-box;
  background: #666;
}
</style>