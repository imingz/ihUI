<!-- html -->
<template>
  <i-input v-model="password" type="password" showPassword placeholder="请输入密码"></i-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'
  const password = ref('')
</script>