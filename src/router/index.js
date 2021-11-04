import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EditorDash from '../views/EditorDash.vue'
import JournalLog from '../views/JournalLog.vue'
import Calendar from '../views/Calendar' 

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
  },
  {
    path: '/log',
    name: 'JournalLog',
    component: JournalLog
  },
  {
    path: '/calendar',
    name: 'Calender',
    component: Calendar
  },
  // {
  //   path: '/inspiration',
  //   name: 'Inspiration',
  //   component: Inspiration
  // },
  // {
  //   path: '/benefits',
  //   name: 'Benefits',
  //   component: Benefits
  // }
]

const router = new VueRouter({
  routes
})

export default router
