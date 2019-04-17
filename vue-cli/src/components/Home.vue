<template>
  <div id="app">
    <app-header @contentChange="updataContent($event)" :content="content"></app-header>
    <users :users="users"></users>
    <app-footer @contentChange="updataContent($event)" :content="content"></app-footer>
  </div>
</template>

<script>
//局部
import Header from "./Header";
import Users from "./Users";
import Footer from "./Footer";

export default {
  name: "App",
  data() {
    return {
      content: "传值",
      users: []
    };
  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/users')
    .then((result) => {
      this.users = result.body;
    }).catch((err) => {
      console.warn(err);
    });
  },
  components: {
    "app-header": Header,
    users: Users,
    "app-footer": Footer
  },
  watch: {
    content: function(newContent, oldContent) {
      console.log(newContent, oldContent);
    }
  },
  methods: {
    updataContent: function(content) {
      this.content = content;
    }
  }
};
</script>

<style scoped>
h1 {
  color: brown;
}
</style>
