<!-- html -->
<template>
  <i-space>
    <i-input v-model="value1" leftIcon="i-icon-search"></i-input>
    <i-input v-model="value2" rightIcon="i-icon-calendar"></i-input>
  </i-space>
</template>

<!-- js -->
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
  const value2 = ref('')
</script>