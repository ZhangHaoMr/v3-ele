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
      component: () => import('@/views/home/home.vue'),
      redirect: 'one',
      children: [
        {
          path: '/one',
          name: 'one',
          component: () => import('@/views/one/one.vue')
        },
        {
          path: '/department',
          component: () => import('@/views/system/department/department.vue'),
          meta: {
            title: '机构管理'
          }
        },
        {
          path: '/userList',
          component: () => import('@/views/system/userList/userList.vue'),
          meta: {
            title: '用户管理'
          }
        },
        {
          path: '/roleList',
          component: () => import('@/views/system/userList/userList.vue'),
          meta: {
            title: '角色管理'
          }
        },
        {
          path: '/menuList',
          component: () => import('@/views/system/menuList/menuList.vue'),
          meta: {
            title: '权限管理'
          }
        },
        {
          path: '/goodCategory',
          component: () => import('@/views/goodCategory/goodCategory.vue'),
          meta: {
            title: '分类管理'
          }
        },
        {
          path: '/systemCode',
          component: () =>
            import('@/views/systenConfig/systemCode/systemCode.vue'),
          meta: {
            title: '日志管理'
          }
        },
        {
          path: '/document',
          component: () => import('@/views/systenConfig/document/document.vue'),
          meta: {
            title: '接口文档'
          }
        }
      ]
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

// function addRoutes(menus: any) {
//   // console.log(menus);
//   // 定义一个变量，用来保存是否添加新的路由
//   let hasNewRoutes = false

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const findRoute = (arr: any) => {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     arr.forEach((item: any) => {
//       // console.log(item);
//       const a = asyncRoutes.find((it) => it.path === item.frontpath)
//       // console.log(a);

//       if (a && !router.hasRoute(a.path)) {
//         router.addRoute('home', a)
//         hasNewRoutes = true
//       }
//       if (item.children && item.children.length > 0) {
//         findRoute(item.children)
//       }
//     })
//   }
//   findRoute(menus)
//   return hasNewRoutes
// }
// const menus = JSON.parse(localStorage.getItem('menu') as string)
// // console.log(menus)
// addRoutes(menus)

export default router
