import Vue from 'vue'//import是ES6的语法，引入第三方模块
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
/*创建一个Vue实例,让它挂在在#app这个div上,让div上显示app这个组件*/
/*最终显示的内容都来自app这个组件*/
new Vue({
  el: '#app',
  router,
  template: '<App/>',//引入app这个组件
  components: { App }
})
