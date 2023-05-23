<template>
  <div class="login">
    <div class="login_box">
      <h4>系统登陆</h4>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-form-item prop="password">
          <el-input size="large" v-model="ruleForm.password" />
        </el-form-item>
        <el-form-item prop="username">
          <el-input size="large" v-model="ruleForm.username" show-password />
        </el-form-item>
        <el-form-item prop="code">
          <el-col :span="16">
            <el-input size="large" v-model="ruleForm.code" />
          </el-col>
          <el-col :span="8">
            <img :src="imgUrl" @click="getImg" alt="" />
          </el-col>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="submitForm"> 登录 </el-button>
      <el-button @click="resetForm">取消</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { postImg, getLogin, getInfo, getMenu } from '@/api'
import { useRouter } from 'vue-router'

const router = useRouter()

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = ref({
  username: 'admin',
  password: '1234',
  code: ''
})
const imgUrl = ref<any>('')

const rules = reactive<FormRules>({})

// 获取验证码
const getImg = async () => {
  try {
    const res: any = await postImg()
    console.log(res, '123')
    let blob = new Blob([res], { type: 'image/png' })
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
  try {
    const res: any = await getLogin(ruleForm.value)
    // console.log(res)
    localStorage.setItem('token', res.token)
    const info: any = await getInfo()
    const menu: any = await getMenu()
    localStorage.setItem('info', JSON.stringify(info.data))
    localStorage.setItem('menu', JSON.stringify(menu.data))
    // console.log('info', info)
    // console.log('menu', menu)
    router.push('/')
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
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_box {
    width: 450px;
    height: 350px;
    text-align: center;
    padding: 20px 35px;
    box-shadow: inset;
    .el-form-item {
      display: flex;
      img {
        width: 110px;
        height: 40px;
      }
    }
  }
}
.el-button {
  width: 48%;
}
</style>
