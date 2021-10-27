import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EditorDash from '../views/EditorDash.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/editordash',
    name: 'EditorDash',
    component: EditorDash
  }
]

const router = new VueRouter({
  routes
})

export default router
