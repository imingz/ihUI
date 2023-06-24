<!-- html -->
<template>
  <i-space>
    <i-input v-model="value1" leftIcon="m-icon-search"></i-input>
    <i-input v-model="value2" rightIcon="m-icon-calendar"></i-input>
  </i-space>
</template>

<!-- js -->
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
  const value2 = ref('')
</script>