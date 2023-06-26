<!-- html -->
<template>
  <i-dropdown title="下拉菜单" :options="dorpoptions"></i-dropdown>
</template>

<!-- js -->
<script setup>
import { reactive } from "vue";
const state = reactive({
  dorpoptions: [
    { label: "菜单1", icon: "i-icon-file" },
    { label: "菜单2", icon: "i-icon-keyboard-9" },
    { label: "菜单3", icon: "i-icon-link" },
    { label: "菜单4", icon: "i-icon-file" },
  ],
});
const { dorpoptions } = state;
</script>