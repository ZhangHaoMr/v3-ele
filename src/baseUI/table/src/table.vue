<!-- eslint-disable no-undef -->
<template>
  <el-table
    border
    :data="tableData"
    style="width: 100%"
    row-key="menuId"
    default-expand-all
    height="460"
  >
    <template v-for="item in propList" :key="item.id">
      <el-table-column v-bind="item">
        <template #default="scope">
          <slot :name="item.slotName" :row="scope.row">
            {{ scope.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script lang="ts" setup>
import { getList } from '@/api'
import { defineProps, ref } from 'vue'

const props = defineProps({
  propList: {
    type: Array,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  form: {
    type: Object
  }
})
const tableData = ref([])
// console.log(props.form);

const getTableList = async () => {
  try {
    const res: any = await getList(props.url, props.form)
    tableData.value = res.data.records || res.data
  } catch (e) {
    console.log(e)
  }
}
getTableList()

// eslint-disable-next-line no-undef
defineExpose({
  getTableList
})
</script>

<style lang="scss">
.el-pagination {
  margin-top: 10px;
}
</style>
