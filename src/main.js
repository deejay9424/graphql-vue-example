import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: main => main(App)
}).$mount('#app')
