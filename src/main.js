import Vue from 'vue'
import App from './App.vue'
import './assets/css/main.styl'
import './plugins'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    // Nuestra función
    init () {
      store.dispatch('oauth/getToken')
    }
  },
  // Hook created
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
