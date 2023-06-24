<!-- html -->
<template>
  <i-switch v-model="switchVal" closeText="关闭" activeText="开启"></i-switch>
  <i-switch
    v-model="switchVal1"
    closeText="关闭"
    activeText="开启"
    textAlign="right"
  ></i-switch>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const switchVal = ref(true);
const switchVal1 = ref(true);
</script>