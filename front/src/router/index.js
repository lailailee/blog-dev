import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '../views/Home')
const Tag = () => import(/* webpackChunkName: "tag" */ '../views/Tag')
const Classify = () =>
  import(/* webpackChunkName: "about" */ '../views/Classify')
const TimeLine = () =>
  import(/* webpackChunkName: "about" */ '../views/TimeLine')

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
    path: '/classify',
    name: 'classify',
    component: Classify
  },
  {
    path: '/tag',
    name: 'tag',
    component: Tag
  },
  {
    path: '/timeLine',
    name: 'timeLine',
    component: TimeLine
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
