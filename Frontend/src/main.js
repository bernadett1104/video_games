import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import RouteConfig from './config/routes.js'

const router = new VueRouter({
    routes: RouteConfig
});

Vue.use(VueResource);
Vue.use(VueRouter);

class users {
    constructor(firstname = null, lastname = null, gender = null, email = null) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.gender = gender;
    }
}


Vue.config.productionTip = false

Vue.prototype.$loginServer = "http://localhost:3000"

let x =new Vue({
    router,
    data(){
        return {
            token: null,
            user: new users()
        }
    },
    created(){
        if (this.$route.path !== "/"){
            this.$router.push({
                path: "/"
            });
        }
    },
    render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
    let loggedIn = x.$data.token
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!loggedIn) {
            next({
                path: '/login'
            })
        } else {
            next()
        }
    } else {
        next()
    }
});