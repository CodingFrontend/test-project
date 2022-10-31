import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')
