<!-- html -->
<template>
  <i-pagination
    :total="200"
    :current="1"
    :pageSize="10"
    :activeColors="activeColors"
  ></i-pagination>
</template>

<!-- js -->
<script setup>
import { reactive } from "vue";
const state = reactive({
  activeColors: {
    background: "#014B88",
    hoverBackground: "#2684e1",
    borderColor: "#014B88",
    hoverBorderColor: "#005ba6",
    color: "#fff",
    hoverColor: "#fff",
  },
});
const { activeColors } = state;
</script>