<!-- html -->
<template>
  <i-space>
    <i-date
      v-model="dateVal"
      placeholder="请选择日期"
      format="yyyy年MM月dd日"
    ></i-date>
    <i-date
      v-model="dateVal"
      placeholder="请选择日期"
      format="yyyy/MM/dd"
    ></i-date>
    <i-date
      v-model="dateVal"
      placeholder="请选择日期"
      format="yyyy-MM-dd"
    ></i-date>
  </i-space>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>