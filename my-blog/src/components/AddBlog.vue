<template>
  <div id="add-blog" v-theme:bg="'narrow'">
    <h2>添加博客</h2>
    <form action>
      <label for>博客标题</label>
      <br>
      <input type="text" v-model="blog.title">
      <br>
      <label for>博客内容</label>
      <br>
      <textarea name id cols="30" rows="10" v-model="blog.content"></textarea>
      <br>

      <div id="checkboxes">
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label for>Vue.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label for>Node.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label for>React.js</label>
      </div>

      <select v-model="blog.author" id>
        <option v-for="(author,index) in authors" :key="index">{{author}}</option>
      </select>
      <br>

      <button @click.prevent="submit">保存博客</button>
    </form>
    <hr>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题: {{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">{{category}}</li>
      </ul>
      <p>作者: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "addBlog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["aaa", "bbb", "ccc"]
    };
  },
  created() {
    if (this.id != "false") {
      //firebase
      //.get("https://myblog-dc524.firebaseio.com/posts/" + this.id + ".json")
      //leancloud
      this.$axios
        .get("https://myblog-dc524.firebaseio.com/posts/" + this.id + ".json")
        .then(result => {
          //console.log(result);
          this.blog = result.data;
        });
    }
  },
  methods: {
    submit() {
      if (this.id == "false") {
        //console.log(this.blog);
        //firebase
        this.$axios
          .post("https://myblog-dc524.firebaseio.com/posts.json", this.blog)
          //leancloud
          // .post("https://leancloud.cn/1.1/classes/Blogs", this.blog)
          .then(result => {
            // console.log(result);
            this.$router.push("/");
          })
          .catch(err => {
            console.log(err);
          });

        var Blog = AV.Object.extend("Blog");
        var blog = new Blog();
        blog.save(this.blog).then(function(object) {
          alert(object);
        });
      } else {
        axios
          .put(
            "https://myblog-dc524.firebaseio.com/posts/" + this.id + ".json",
            this.blog
          )
          .then(result => {
            //console.log(result);
            this.$router.push("/");
          })
          .catch(err => {
            //console.log(err);
          });
      }
    }
  }
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  padding: 20px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}

textarea {
  height: 200px;
}

#checkboxes label {
  display: inline-block;
  margin-top: 0;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

button {
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}
</style>
