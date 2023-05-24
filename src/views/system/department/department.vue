<template>
  <!-- 机构管理 -->
  <div class="department">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-input
          v-model="formInline.searchName"
          placeholder="请输入部门名称"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="search" icon="Search">查询</el-button>
        <el-button @click="resetting" icon="Close">重置</el-button>
        <el-button type="primary" @click="add" icon="Plus">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table
      :data="tableData"
      row-key="id"
      border
      default-expand-all
      style="width: 100%"
    >
      <el-table-column align="center" prop="name" label="登录用户" />
      <el-table-column align="center" prop="parentName" label="上级部门" />
      <el-table-column align="center" prop="deptCode" label="部门编码" />
      <el-table-column align="center" prop="deptPhone" label="部门电话" />
      <el-table-column align="center" prop="deptAddress" label="部门地址" />
      <el-table-column align="center" label="操作" width="200">
        <template #default="scope">
          <el-button type="primary" @click="edit(scope.row)" icon="Edit">
            编辑
          </el-button>
          <el-button type="danger" @click="delte(scope.row)" icon="Close">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗 -->
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="34%"
      :before-close="handleClose"
      destroy-on-close="true"
    >
      <el-form inline="true" :model="formInline1" :rules="rules">
        <el-form-item label="上级部门" @click="select">
          <el-input v-model="formInline1.parentName" />
        </el-form-item>
        <el-form-item label="部门名称">
          <el-input v-model="formInline1.name" />
        </el-form-item>
        <el-form-item label="部门编码">
          <el-input v-model="formInline1.deptCode" />
        </el-form-item>
        <el-form-item label="部门电话">
          <el-input v-model="formInline1.deptPhone" />
        </el-form-item>
        <el-form-item label="部门经理">
          <el-input v-model="formInline1.manager" />
        </el-form-item>
        <el-form-item label="部门电话">
          <el-input v-model="formInline1.deptAddress" />
        </el-form-item>
        <el-form-item label="部门序号">
          <el-input v-model="formInline1.orderNum" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="danger" @click="dialogVisible = false">
            取消
          </el-button>
          <el-button type="primary" @click="confirm"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>

    <el-dialog
      v-model="dialogVisible1"
      title="选择上级部门"
      width="20%"
      :before-close="handleClose"
      destroy-on-close="true"
    >
      <template #footer>
        <span class="dialog-footer">
          <el-button type="danger" @click="dialogVisible1 = false">
            取消
          </el-button>
          <el-button type="primary" @click="dialogVisible1 = false">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { getList, addList, getParent } from '@/api'
import { ElMessage } from 'element-plus'
import type { FormRules } from 'element-plus/lib/components/form/src/types.js'

const formInline = ref({
  searchName: ''
})

const tableData = ref([])
const page = ref({
  currentPage: 1,
  pageSize: 10
})
const getTable = async () => {
  try {
    const res: any = await getList('/department', page.value)
    // console.log(res)
    tableData.value = res.data
  } catch (e) {
    console.log(e)
  }
}
getTable()

const dialogVisible = ref(false)
const title = ref('新增部门')
const formInline1 = ref({
  parentName: '',
  deptCode: '',
  deptPhone: '',
  manager: '',
  deptAddress: '',
  orderNum: '',
  name: ''
})
const rules = reactive<FormRules>({
  parentName: [{ required: true, message: '请选择上级部门', trigger: 'blur' }],
  name: [{ required: true, message: '请输入部门名称', trigger: 'blur' }]
})

// 查询
const search = () => {}

// 重置
const resetting = () => {
  formInline.value.searchName = ''
}

// 新增
const add = () => {
  dialogVisible.value = true
  title.value = '新增部门'
}

// 关闭弹框
const handleClose = () => {
  dialogVisible.value = false
}

// 编辑
const edit = (e: any) => {
  dialogVisible.value = true
  title.value = '编辑部门'
  formInline1.value = e
}

// 删除
const delte = (e: any) => {
  console.log(e)
}

// 确认
const confirm = async () => {
  dialogVisible.value = false
  try {
    if (title.value == '新增部门') {
      const res = await addList('/department', formInline1.value)
      if (res) {
        return ElMessage({
          message: '添加成功',
          type: 'success'
        })
      }
    } else {
      const res = await addList('/department', formInline1.value)
      if (res) {
        return ElMessage({
          message: '添加成功',
          type: 'success'
        })
      }
    }
  } catch (e) {
    console.log(e)
  }
}

const dialogVisible1 = ref(false)

// 打开 选择 上级菜单
const select = () => {
  dialogVisible1.value = true
  getSelect()
}

const getSelect = async () => { 
  try {
    const res = await getParent('/department')
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}
</script>

<style lang="scss">
.el-dialog {
  .el-form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .el-input {
      width: 180px;
    }
  }
}
</style>
