<!-- html -->
<template>
  <i-switch v-model="switchVal" :showTipsText="true"></i-switch>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const switchVal = ref(false);
</script>