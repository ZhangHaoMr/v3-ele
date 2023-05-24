<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="form">
    <el-form
      :inline="true"
      :align="align"
      :model="formData"
      class="demo-form-inline"
    >
      <template v-for="item in formProps" :key="item.label">
        <el-form-item
          v-if="item.type == 'select'"
          :label="item.lable"
          prop="region"
        >
          <el-select v-model="formData[item.prop]" v-bind="item">
            <el-option
              v-for="opt in item.options"
              :key="opt.lable"
              v-bind="opt"
            />
          </el-select>
        </el-form-item>
        <el-form-item v-else-if="item.type == 'radio'" :label="item.lable">
          <el-radio-group v-model="formData[item.prop]" class="ml-4">
            <el-radio
              v-for="(ite, ind) in item.options"
              :key="ind"
              :value="ite.value"
              :label="ite.lable"
            >
              {{ ite.lable }}
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-else :label="item.lable">
          <el-input
            v-model="formData[item.prop]"
            :placeholder="item.placeholder"
          />
        </el-form-item>
      </template>
      <el-form-item>
        <el-button v-if="showSearch" icon="Search" @click="Search">
          查询
        </el-button>
        <el-button
          v-if="showDelete"
          :icon="deleteIcon"
          style="color: red"
          @click="Close"
        >
          重置
        </el-button>
        <el-button v-if="showPlus" icon="Plus" type="primary" @click="Plus">
          新增
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { formConfig } from "@/views/layout/fee/feePark/config/form-config";
import { defineProps, ref, defineEmits, watch, defineExpose } from "vue";
import { addList } from "@/api/layout";
const props = defineProps({
  formItem: {
    type: Object,
    redirect: true
  },
  modelValue: {
    type: Object
  },
  formProps: {
    type: Array,
    redirect: true,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => []
  },
  align: {
    type: String,
    default: ""
  },
  showSearch: {
    type: Boolean,
    default: true
  },
  showDelete: {
    type: Boolean,
    default: true
  },
  showPlus: {
    type: Boolean,
    default: true
  },
  deleteIcon: {
    type: String,
    default: "Close"
  }
});

const emit = defineEmits(["update:modelValue", "search", "Plus", "add"]);

const formItems = props?.formProps?.filter((item: any) => item.prop);
// console.log(formItems);
const formOrigin: any = {};
for (const key of formItems) {
  formOrigin[key.prop] = "";
}

const formData = ref({ ...props.modelValue });
// console.log(formData.value);

watch(
  () => props.modelValue,
  (newVal: any) => {
    console.log("newVal", newVal);
    emit("update:modelValue", newVal);
  }
);

// 搜索
const Search = () => {
  emit("search", formData.value);
};

// 重置
const Close = () => {
  for (const key in formOrigin) {
    formData.value[key] = "";
  }
};

// 添加
const Plus = () => {
  // alert("添加");
  emit("Plus");
};

const add = (url: string) => {
  try {
    for (const key in formOrigin) {
      if (formData.value[key] !== "") {
        const res = addList(url, formData.value);
        console.log(res);
        Close();
        Search();
      }
    }
  } catch (e) {
    console.log(e);
  }
};

defineExpose({
  add
});
</script>

<style lang="scss">
.form {
  width: 100%;
}
.el-form-item asterisk-left {
  margin-right: 0px !important;
}
.el-form--inline .el-form-item {
  margin-right: 5px !important;
}
.el-form-item__label {
  font-weight: 800;
  color: #606266;
}
.el-form-item__label {
  width: 80px;
}
</style>
