<!-- html -->
<template>
  <i-date v-model="dateVal" @change="dateChange" placeholder="请选择日期"></i-date>
</template>

<!-- js -->
<script setup>
import { ref } from 'vue'
const dateVal = ref('')
const dateChange = (e) => {
  console.log(e)
}
</script>
