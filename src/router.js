import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

Vue.use(Router);

export default new Router({
  routes: [
    {
        path: '/',
        name: 'landingpage',
        component: LandingPage
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
  ]
})
