<template>
  <div class="customers container">
    <alert v-if="message" :message="message"></alert>
    <h1 class="page-header">用户信息</h1>
    <input type="text" placeholder="请输入用户的姓名" v-model="search">
    <table class="table table-striped">
      <thead>
        <tr>
          <td>姓名</td>
          <td>年龄</td>
          <td>电话</td>
          <td>邮箱</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer,index) in filterCustomer" :key="index">
          <td>{{customer.name}}</td>
          <td>{{customer.age}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td>
            <router-link :to="'/detail/'+ customer.id" class="btn btn-default">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'customers',
  data () {
    return {
      customers:[],
      message: '',
      search: ''
    }
  },
  created() {
    if(this.$route.query.alert){
      this.message = this.$route.query.alert;
    }

    this.$axios.get('http://localhost:3000/users')
    .then((result) => {
      //console.log(result);
      this.customers = result.data;
    }).catch((err) => {
      //console.log(err);
    });
  },
  components: {
    Alert
  },
  computed: {
    filterCustomer(){
      return this.customers.filter(customer => {
        return customer.name.match(this.search);
      });
    }
  },
}
</script>

<style scoped>
table{
  text-align: center;
}

input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
