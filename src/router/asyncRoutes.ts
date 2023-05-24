const asyncRoutes: any[] = [
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
  }
]

export default asyncRoutes
