<template>
  <div class="detail container">
    <h1 class="page-header">
      {{ customer.name }}
      <span class="pull-right">
        <router-link :to="'/add/'+ customer.id" class="btn btn-primary">编辑</router-link>
        <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">年龄：{{ customer.age }}</li>
      <li class="list-group-item">电话：{{ customer.phone }}</li>
      <li class="list-group-item">邮箱：{{ customer.email }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: {}
    };
  },
  created() {
    this.$axios
      .get("http://localhost:3000/users/" + this.$route.params.id)
      .then(result => {
        //console.log(result);
        this.customer = result.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    deleteCustomer(id) {
      this.$axios
        .delete("http://localhost:3000/users/" + id)
        .then(result => {
          console.log(result);
          this.$router.push({ path: "/", query: { alert: "删除成功！" } });
        })
        .catch(err => {});
    }
  }
};
</script>