<!-- html -->
<template>
  <i-date v-model="dateVal" disabled placeholder="请选择日期"> </i-date>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>