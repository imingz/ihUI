<!-- html -->
<template>
  <i-space :inline="false">
    <i-checkbox
      v-model="checkboxVal"
      :options="checkOptions"
      custoiColor="#09b63d"
    ></i-checkbox>
    <i-checkbox
      v-model="checkboxVal"
      :options="checkOptions"
      custoiColor="#25B0F8"
    ></i-checkbox>
  </i-space>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const checkboxVal = ref([]);
const state = reactive({
  checkOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "英国", value: "yingguo" },
    { label: "德国", value: "deguo" },
    { label: "法国", value: "faguo" },
  ],
});
const { checkOptions } = state;
</script>