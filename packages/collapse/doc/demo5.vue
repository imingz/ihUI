<!-- html -->
<template>
  <i-space>
    <i-input v-model="value1"  placeholder="默认大小"></i-input>
    <i-input v-model="value2"  placeholder="小的" size="small"></i-input>
    <i-input v-model="value3"  placeholder="更小的" size="mini"></i-input>
  </i-space>
</template>

<!-- js -->
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
  const value2 = ref('')
  const value3 = ref('')
</script>