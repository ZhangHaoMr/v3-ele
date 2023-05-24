<template>
  <div class="login">
    <div class="login_box">
      <h4>系统登陆</h4>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        class="demo-ruleForm"
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
import { resetForm, submitForm, imgUrl, ruleForm, getImg } from './login'
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
