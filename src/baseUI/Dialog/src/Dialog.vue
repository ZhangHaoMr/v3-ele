<template>
  <el-dialog
    :model-value="dialogVisible"
    title="新增"
    width="610px"
    :before-close="handleClose"
  >
    <div class="content">
      <slot name="content">
        <fo v-bind="buttons" :formItem="formData"> </fo>
      </slot>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close" type="danger">取消</el-button>
        <el-button type="primary" @click="handle"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref } from "vue";
import fo from "@/baseUI/form";

const props = defineProps({
  dialogVisible: {
    type: Boolean,
    required: true,
    default: false
  },
  modelConfig: {
    type: Object
  },
  formData: {
    type: Object,
    default: null
  }
});

// console.log("modelConfig", props.modelConfig);

const formItems = props?.modelConfig?.formProps?.filter(
  (item: any) => item.prop
);
// console.log(formItems);
const formOrigin: any = {};
for (const key of formItems) {
  formOrigin[key.prop] = "";
}

const formData = ref<any>(props?.formData || formOrigin);

const buttons = {
  showSearch: false,
  showDelete: false,
  showPlus: false,
  ...props.modelConfig
};

const emit = defineEmits(["close", "add"]);

const handleClose = () => {
  emit("close");
};

const close = () => {
  emit("close");
};

const handle = () => {
  emit("add");
  emit("close");
};
</script>

<style>
.el-dialog__footer {
  border-top: 1px solid #ccc;
}
</style>
