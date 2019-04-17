<template>
  <div class="users">
    <ul>
      <li v-for="(user,index) in users" :key="index">
        <h2>{{ user.name }}</h2>
        <h3>{{ user.email }}</h3>
      </li>
    </ul>
    <button @click="del">删除</button>
    <ul>
      <li v-for="(user,index) in users" :key="index">
        <h2>{{ user.name }}</h2>
        <h3>{{ user.email }}</h3>
      </li>
    </ul>
    <button @click="del">删除</button>
  </div>
</template>

<script>
export default {
  name: "users",
  props: ['users'],
  data() {
    return {};
  },
  methods: {
      del: function(){
          this.users.pop();
      }
  }
};
</script>

<style scoped>
.users {
  width: 1200px;
  margin: 0 auto;
}
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
}
ul li {
  width: 300px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  border: 1px solid #666;
}
</style>