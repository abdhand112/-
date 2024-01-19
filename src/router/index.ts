import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    redirect:'gzt',
    component: () => import('../views/AboutView.vue'),
    children:[
      {
        path: '/ykgl',
        name: 'ykgl',
        component: () => import('../views/ykglView.vue')
      },
      {
        path: '/gzt',
        name: 'gzt',
        component: () => import('../views/gztView.vue')
      }
    ]
  },
  {
    path: '/goodadd',
    name: 'goodadd',
    component: () => import('../views/goodaddView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (!token && to.path != '/') {
    next('/')
  } else if (token && to.path == '/') {
    next('/about')
  } else {
    next()
  }
})
export default router
