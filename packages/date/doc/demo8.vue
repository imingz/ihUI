<!-- html -->
<template>
  <i-space>
    <i-date
      v-model="dateVal"
      placeholder="请选择日期"
      customActiveColor="#09b63d"
    >
    </i-date>

    <i-date
      v-model="dateVal"
      placeholder="请选择日期"
      customActiveColor="#f57b29"
    >
    </i-date>
  </i-space>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>