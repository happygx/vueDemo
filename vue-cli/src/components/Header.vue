<template>
  <div class="header">
    <h1 @click="changeContent">{{ title }}{{ content }}</h1>
  </div>
</template>

<script>
export default {
  name: "app-header",
  props: ["content"],
  data() {
    return {
      title: "Vue Demo"
    };
  },
  methods: {
    changeContent: function() {
      //this.newContent = 'change';
      this.$emit("contentChange", "子组件传值");
    }
  },
//   beforeCreate() {
//     alert("beforeCreate：组件实例化之前执行");
//   },
//   created() {
//     alert("created：组件实例化完毕，但页面还没显示");
//   },
//   beforeMount() {
//     alert("beforeMount：组件挂载前，页面仍未显示，但虚拟DOM已经配置完毕");
//   },
//   mounted() {
//     alert("mounted：组件挂载完成，页面显示");
//   },
//   beforeUpdate() {
//     alert("beforeUpdate：组件更新前，页面仍未显示，但虚拟DOM已经配置完毕");
//   },
//   updated() {
//     alert("updated：组件更新完成，页面显示");
//   },
//   beforeDestroy() {
//     alert("beforeDestroy：组件销毁前");
//   },
//   destroyed() {
//     alert("destroyed：组件已经销毁");
//   }
};
</script>

<style scoped>
.header {
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background: aqua;
  box-sizing: border-box;
}
</style>