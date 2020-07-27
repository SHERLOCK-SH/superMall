import Vue from 'vue'
import VueRouter from 'vue-router'

//import Home from '../views/home/Home'
//import Category from '../views/category/Category'
//import Cart from '../views/cart/Cart'
//import Profile from '../views/profile/Profile'
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')

Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
export default  new VueRouter({
  routes,
  mode: 'history'
})


