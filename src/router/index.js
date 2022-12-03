import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ejemplor from '../views/Ejemplor.vue'
import Ejemplo2 from '../views/Ejemplo2'
import Vit from '../views/Vit'
import Vfor from '../views/Vfor'
import Vnodel from '../views/Vnodel'
import Von from '../views/Von'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Ejemplor',
    component: Ejemplor
  },
  {
    path:'/Ejemplor',
    name:'Ejemplor',
    component: Ejemplor
  },
  {
    path:'/Ejemplo2',
    name:'Ejemplo2',
    component: Ejemplo2
  },
  {
    path:'/Vit',
    name:'Vit',
    component: Vit
  },
  {
    path:'/Vfor',
    name:'Vfor',
    component: Vfor
  },
  {
    path:'/Vnodel',
    name:'Vnodel',
    component: Vnodel
  },
  {
    path:'/Von',
    name:'Von',
    component: Von
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
