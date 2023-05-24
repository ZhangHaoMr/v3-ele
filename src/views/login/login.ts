import { ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { postImg, getLogin, getInfo, getMenu } from '@/api'
import { useRouter } from 'vue-router'

const ruleForm = ref({
  username: 'admin',
  password: '1234',
  code: ''
})
const imgUrl = ref<any>('')

// 获取验证码
const getImg = async () => {
  try {
    const res: any = await postImg()
    console.log(res, '123')
    const blob = new Blob([res], { type: 'image/png' })
    console.log(blob, 'blob')
    const url = window.URL.createObjectURL(blob)
    console.log(url)
    imgUrl.value = url
  } catch (e) {
    console.log(e)
  }
}
getImg()

// 登录
const submitForm = async () => {
  const router = useRouter()
  try {
    const res: any = await getLogin(ruleForm.value)
    // console.log(res)
    if (res) localStorage.setItem('token', res.token)
    const info: any = await getInfo()
    const menu: any = await getMenu()
    if (info != undefined && menu != undefined) {
      localStorage.setItem('info', JSON.stringify(info.data))
      localStorage.setItem('menu', JSON.stringify(menu.data))
      router.push('/home')
    } else {
      return alert('验证码错误')
    }
  } catch (e) {
    console.log(e)
  }
}

// 取消
const resetForm = () => {
  ruleForm.value = {
    password: '',
    username: '',
    code: ''
  }
}

export { resetForm, submitForm, imgUrl, ruleForm, getImg }
