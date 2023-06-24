<!-- html -->
<template>
  <i-space :inline="false">
    <i-radio
      v-model="radioVal"
      :options="radioOptions"
      custoiColor="#09b63d"
    ></i-radio>
    <i-radio
      v-model="radioVal"
      :options="radioOptions"
      custoiColor="#25B0F8"
    ></i-radio>
  </i-space>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const radioVal = ref("zhongguo");
const state = reactive({
  radioOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "英国", value: "yingguo" },
    { label: "德国", value: "deguo" },
    { label: "法国", value: "faguo" },
  ],
});
const { radioOptions } = state;
</script>