<template>
  <div v-theme:bg="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="请输入搜索内容">
    <div v-for="(blog,index) in filterBlogs" class="single-blog" :key="index">
      <router-link :to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>{{blog.content | intercept}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    //http://jsonplaceholder.typicode.com/posts
    this.$axios
      .get("https://myblog-dc524.firebaseio.com/posts.json")
      // .get("https://leancloud.cn:443/1.1/classes/Blogs?limit=10&&order=-updatedAt")
      .then((result) => {
        //console.log(result);
        let data = result.data;
        let blogArray = [];
        for (var key in data) {
          //console.log(key);
          data[key].id = key;
          blogArray.push(data[key]);
        }
        this.blogs = blogArray;
        //console.log(this.blogs)
      }).catch((err) => {
        console.log(err);
      });;
  },
  computed: {
    filterBlogs() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  filters: {
    "to-uppercase": function(val) {
      return val.slice(0, 1).toUpperCase() + val.slice(1);
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
      }
    }
  }
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}

#show-blogs a {
  color: #444;
  text-decoration: none;
}

input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
