<!-- html -->
<template>
  <i-date v-model="dateVal" placeholder="请选择日期" type="year"> </i-date>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>