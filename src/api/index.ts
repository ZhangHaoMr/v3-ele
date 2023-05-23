import { service } from '@/service'

// 获取验证码
export const postImg = () => {
  return service.request({
    url: '/sysUser/image',
    method: 'POST',
    responseType: 'blob'
  })
}

// 登录
export const getLogin = (data: any) => {
  return service.request({
    url: '/user/login',
    method: 'POST',
    data
  })
}

// 获取用户信息
export const getInfo = () => {
  return service.request({
    url: 'sysUser/getInfo',
    method: 'GET'
  })
}

// 获取侧边栏
export const getMenu = () => {
  return service.request({
    url: 'sysUser/getMenuList',
    method: 'GET'
  })
}
