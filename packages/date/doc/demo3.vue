<!-- html -->
<template>
  <i-space>
    <i-date v-model="dateVal" placeholder="请选择日期"> </i-date>
    <i-date v-model="dateVal" placeholder="请选择日期" size="small"> </i-date>
    <i-date v-model="dateVal" placeholder="请选择日期" size="mini"> </i-date>
  </i-space>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>