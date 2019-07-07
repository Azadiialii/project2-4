import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
import MyProjects from './components/MyProjects'
import BrowseProjects from './components/BrowseProjects'
import BrowseUsers from './components/BrowseUsers'
import projectView from './components/projectView'

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
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/myprojects',
        name: 'myprojects',
        component: MyProjects
    },{
        path: '/browseprojects',
        name: 'broswseprojects',
        component: BrowseProjects
    },{
        path: '/browseusers',
        name: 'browseusers',
        component: BrowseUsers
    },{
        path: '/project/:project_id',
        name: 'project',
        component: projectView,
        props: true
    },
  ]
})
