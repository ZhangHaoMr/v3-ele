<template>
  <el-container>
    <el-aside width="210px">
      <Aside />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
        <tags />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Aside from './components/aside.vue'
import Header from './components/header.vue'
import tags from './components/tags.vue'
</script>

<style lang="scss">
.el-container {
  height: 100%;
}
.el-header {
  padding: 0;
}
</style>
