<template>
  <div class="mb-5 row">
    <div id="home" class="col-sm-12 text-center">
      <div class="content">
        <h1>欢迎大家品尝pizza!</h1>
        <h1>这里有你非常喜欢的pizza!</h1>
        <button @click="toRedirect" class="btn btn-success">Let's order!</button>
      </div>
    </div>
  </div>
</template>

<<script>
export default {
    methods:{
        toRedirect(){
            //跳转上一个页面
            //this.$router.go(-1);
            //跳转指定路径
            //this.$router.replace('/menu');
            //this.$router.replace({name:'menuLink'});
            //通过push进行跳转
            //this.$router.push('/menu');
            this.$router.push({name:'menuLink'});

        }
    }
}
</script>  

<style>
#home{
  background: url('../../src/assets/pizza.jpg') no-repeat center;
  background-size: 1110px 100%;
  height: 85vh;
  padding: 10%;
}
.content{
  max-width: 70vw;
  margin: 0 auto;
  background: #eee;
  padding: 20px 0;
  opacity: 0.8;
}
</style>
