<template>
  <div v-theme:bg="'narrow'" id="blog">
    <h1 v-if="blog.title">{{ blog.title | to-uppercase}}</h1>
    <article>内容：{{ blog.content }}</article>
    <p>作者：{{ blog.author }}</p>
    <p>分类：</p>
    <ul v-for="(category,index) in blog.categories" :key="index">
      <li>{{ category }}</li>
    </ul>
    <button @click="deleteBlog">删除</button>
    <router-link :to="'/addBlog/' + id">
      <button>编辑</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$axios
      .get("https://myblog-dc524.firebaseio.com/posts/"+ this.id +".json")
      .then(result => {
        //console.log(result);
        this.blog = result.data;
      });
  },
  filters: {
    "to-uppercase": function(val) {
      return val.slice(0, 1).toUpperCase() + val.slice(1);
    }
  },
  methods: {
    deleteBlog(){
      axios
      .delete("https://myblog-dc524.firebaseio.com/posts/"+ this.id +".json")
      .then(result => {
        //console.log(result);
        this.$router.push('/');
      });
    }
  }
};
</script>

<style scoped>
#blog {
  margin: 0 auto;
  padding: 20px;
}
</style>
