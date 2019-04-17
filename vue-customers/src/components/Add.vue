<template>
  <div class="add container">
    <alert v-if="alert" :message="alert"></alert>
    <h1 class="page-header">{{ title }}</h1>
    <form @submit="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" placeholder="name" class="form-control" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>年龄</label>
          <input type="text" placeholder="age" class="form-control" v-model="customer.age">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" placeholder="phone" class="form-control" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" placeholder="email" class="form-control" v-model="customer.email">
        </div>
        <button type="submit" class="btn btn-primary">确定</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./Alert";

export default {
  data() {
    return {
      customer: {},
      title: "",
      alert: ""
    };
  },
  components: {
    Alert
  },
  created() {
    if (this.$route.params.id != "false") {
      this.$axios
        .get("http://localhost:3000/users/" + this.$route.params.id)
        .then(result => {
          //   console.log(result);
          this.customer = result.data;
        })
        .catch(err => {
          //console.log(err);
        });
      this.title = "修改用户";
    } else {
      this.title = "添加用户";
    }
  },
  methods: {
    addCustomer(e) {
      e.preventDefault();
      //console.log(this.customer);
      if (this.$route.params.id != "false") {
        this.$axios
          .put(
            "http://localhost:3000/users/" + this.$route.params.id,
            this.customer
          )
          .then(result => {
            //console.log(result);
            this.$router.push({
              path: "/",
              query: { alert: "用户修改成功！" }
            });
          })
          .catch(err => {
            //console.log(err);
          });
      } else {
        if (
          !this.customer.name ||
          !this.customer.age ||
          !this.customer.phone ||
          !this.customer.email
        ) {
          this.alert = "内容不能为空！";
        }else{
            this.$axios
            .post("http://localhost:3000/users/", this.customer)
            .then(result => {
              //console.log(result);
              this.$router.push({
                path: "/",
                query: { alert: "用户添加成功！" }
              });
            })
            .catch(err => {
              //console.log(err);
            });
        }
      }
    }
  }
};
</script>

<style scoped>
</style>
