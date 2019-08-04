import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import firebase from 'firebase'

import Recepies from './components/Recepies.vue'
import Home from './components/Home.vue'
import NewPlan from './components/NewPlan.vue'

import '../src/styles/app.scss'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/recepies',
            name: 'Recepies',
            component: Recepies
        },
        {
            path: '/new',
            name: 'NewPlan',
            component: NewPlan
        }
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')


Vue.config.productionTip = false
