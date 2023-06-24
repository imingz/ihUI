<!-- html -->
<template>
  <i-input v-model="value1" clearable>
    <template #btn>
      <i-button type="primary" leftIcon="m-icon-search">搜索</i-button>
    </template>
  </i-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'
  const value1 = ref('')
</script>