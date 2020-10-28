import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '../views/Home')
const Tag = () => import(/* webpackChunkName: "tag" */ '../views/Tag')
console.log('sdsds')
const Classify = () => import(/* webpackChunkName: "about" */ '../views/Home')
const Home = () => import(/* webpackChunkName: "about" */ '../views/Home')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
