<template>
  <div class="aside">
    <header>
      <img
        src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png"
        alt=""
      />
      <div>Vue Element Admin</div>
    </header>
    <el-menu
      active-text-color="#409eff"
      background-color="#304156"
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      text-color="#fff"
      unique-opened
      router
    >
      <el-menu-item index="/one">
        <el-icon><document /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu v-for="item in menus" :key="item.path" :index="item.path">
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item
          v-for="chil in item.children"
          :key="chil.path"
          :index="chil.path"
        >
          {{ chil.meta.title }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
const menus = JSON.parse(localStorage.getItem('menu') as string)
</script>

<style lang="scss">
.aside {
  width: 100%;
  height: 100%;
  header {
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #2b2f3a;
    color: #fff;
    img {
      width: 32px;
      height: 32px;
    }
  }
  .el-menu {
    height: calc(100% - 50px);
    border-right: 0;
  }
}
</style>
