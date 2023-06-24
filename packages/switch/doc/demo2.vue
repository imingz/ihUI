<!-- html -->
<template>
  <i-switch v-model="switchVal" disabled></i-switch>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const switchVal = ref(true);
</script>