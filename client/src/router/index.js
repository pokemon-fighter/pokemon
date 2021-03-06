import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CharacterSelect from '../views/CharacterSelect.vue'
import Welcome from '../views/Welcome.vue'
import Battle from '../views/Battle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
<<<<<<< HEAD
    path: '/rooms',
    name: 'rooms',
    component: () =>
      import(/* webpackChunkName: "rooms" */ '../views/Rooms.vue')
  },
  {
    path: '/wait',
    name: 'wait',
    component: () => import(/* webpackChunkName: "wait" */ '../views/Wait.vue')
  },
  {
    path: '/CharacterSelect',
    name: 'CharacterSelect',
    component: CharacterSelect
  },
  {
    path: '/Welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/Battle',
    name: 'Battle',
    component: Battle
  },
  {
=======
>>>>>>> c7df00112b8d6ffa55fbb20aea03623028687b6e
    path: '/play',
    name: 'play',
    component: () => import('../views/Play.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
