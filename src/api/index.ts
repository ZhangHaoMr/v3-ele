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

// 获取列表数据
export const getList = (url: string, data?: any) => {
  return service.request({
    url: `${url}/list`,
    method: 'GET',
    params: data
  })
}

// 添加数据
export const addList = (url: string, data?: any) => {
  return service.request({
    url: `${url}`,
    method: 'post',
    data
  })
}

// 获取上级菜单
export const getParent = (url: string) => {
  return service.request({
    url: `${url}/parent`,
    method: 'GET'
  })
}
