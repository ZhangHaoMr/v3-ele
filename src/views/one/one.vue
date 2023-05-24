<template>
  <!-- 首页 -->
  <div class="one">
    <div class="one_box" v-for="(item, index) in list" :key="index">
      <div>
        {{ item.title }}
      </div>
      <div>
        {{ item.text }}
      </div>
    </div>
  </div>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        vue、vue-element-admin开发小而完整的权限管理系统实战
      </div>
    </template>
    <div class="text item">
      <div>课程内容</div>

      主要讲解vue-element-admin在实际项目开发中的使用，包括登录流程、权限验证流程的讲解、动态菜单、动态路由、按钮权限的判断、token验证等;最终完成一个最小权限系统的开发，可以在此系统上进行功能的扩展开发;
    </div>
  </el-card>
</template>

<script lang="ts" setup>
const list = [
  {
    title: '0',
    text: '今日支付订单',
    color: '#00c0ef',
    textColor: '#3399ff'
  },
  {
    title: '0',
    text: '今日待发货',
    color: '#00c0ef',
    textColor: '#3399ff'
  },
  {
    title: '0',
    text: '今日已发货订单',
    color: '#00c0ef',
    textColor: '#3399ff'
  },
  {
    title: '0',
    text: '今日异常',
    color: '#dd4b39',
    textColor: '#c64333'
  }
]
</script>

<style lang="scss">
.one {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.one_box {
  width: 450px;
  height: 120px;
}
</style>
