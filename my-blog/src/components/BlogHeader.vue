<template>
  <nav v-theme="'narrow'">
    <ul>
      <li>
        <router-link :to="{ name:'showBlog' }">首页</router-link>
      </li>
      <li>
        <router-link :to="'/addblog/' + false">写博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  margin: 0 auto;
  background: #eec1ea;
  padding: 20px;
  margin-bottom: 20px;
}
ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  text-decoration: none;
}
ul li {
    margin-right: 20px;
}
</style>
