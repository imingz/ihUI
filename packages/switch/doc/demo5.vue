<!-- html -->
<template>
  <i-switch
    v-model="switchVal"
    :showTipsText="true"
    closeColor="#ec3437"
    activeColor="#09b63d"
  ></i-switch>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const switchVal = ref(false);
</script>