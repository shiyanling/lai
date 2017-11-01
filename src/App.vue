<!--一个.vue的文件就是一个vue组件-->
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/><!--指的是路由下的数据-->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/*组件的样式*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
