<template>
  <div class="header">
    <div class="header_left">
      <el-icon size="24"><Fold /></el-icon>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header_right">
      <el-icon><Search /></el-icon>
      <el-icon><FullScreen /></el-icon>
      <el-icon><Printer /></el-icon>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img
            src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
            alt=""
          />
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu @command="handleCommand">
            <el-dropdown-item divided command="个人中心">
              个人中心
            </el-dropdown-item>
            <el-dropdown-item divided command="数据还原">
              数据还原
            </el-dropdown-item>
            <el-dropdown-item divided command="退出登录">
              退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
  <div class="tags">
    <el-tag
      class="mx-1"
      effect="dark"
      closable
      type="success"
      label="Tag 2"
      color="#42b983"
    >
      首页
    </el-tag>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'

const handleCommand = (e: string) => {
  if (e == '退出登录') {
    localStorage.clear()
    router.push('/login')
  }
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  padding: 0 10px;
  .header_left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
  .header_right {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-dropdown:hover {
    border: 0 !important;
  }
  :focus {
    outline: 0;
  }
  .el-dropdown-link {
    img {
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }
  }
}
.tags {
  padding: 2px 10px;
  border-bottom: 2px solid #ccc;
  box-shadow: #ccc;
}
</style>
