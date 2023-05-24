<template>
  <tab :propList="propList" url="/sysLog" :form="page" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getList } from '@/api'
import tab from '@/baseUI/table'

const tableData = ref([])

const page = ref({
  currentPage: 1,
  pageSize: 10
})

const getTable = async () => {
  try {
    const res: any = await getList('/sysLog', page.value)
    console.log(res)
    tableData.value = res.data.records
  } catch (e) {
    console.log(e)
  }
}
getTable()

const propList = [
  {
    prop: 'userName',
    label: '登录用户'
  },
  {
    prop: 'title',
    label: '执行操作'
  },
  {
    prop: 'requestUri',
    label: '请求URL'
  },
  {
    prop: 'ipNum',
    label: 'IP'
  },
  {
    prop: 'ipRegion',
    label: '地址'
  }
]
</script>
