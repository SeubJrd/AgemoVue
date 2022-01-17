import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import { svgSpritePlugin } from 'vue-svg-sprite'

Vue.config.productionTip = false

//Vue.use(svgSpritePlugin, {})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



