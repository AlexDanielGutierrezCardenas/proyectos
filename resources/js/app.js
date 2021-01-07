import  Vue from 'vue'
require('./bootstrap');
window.Vue = require('vue')
Vue.component('hola',require('./components/login.vue').default)
Vue.component('holas',require('./components/style.css').default)
new Vue({
    el:"#app"
})
