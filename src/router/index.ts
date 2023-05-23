import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/login/login.vue')
    }
  ]
})

router.beforeEach((to, form) => {
  if (localStorage.getItem('token')) {
    if (to.path == '/login') {
      return '/home'
    } else {
      return
    }
  } else {
    if (to.path == '/login') {
      return
    } else {
      return '/login'
    }
  }
})

export default router
