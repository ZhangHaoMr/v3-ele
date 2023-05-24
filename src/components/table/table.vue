<template>
  <div class="table">
    <tableContent :propList="propList" :form="form" :url="url"> </tableContent>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import tableContent from '@/baseUI/table'

defineProps({
  propList: {
    type: Object,
    redirect: true
  },
  url: {
    type: String,
    redirect: true
  },
  form: {
    type: Object
  }
})
</script>
