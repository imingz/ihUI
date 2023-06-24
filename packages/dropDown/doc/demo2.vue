<!-- html -->
<template>
  <i-space>
    <i-dropdown title="默认大小" :options="dorpoptions"></i-dropdown>
    <i-dropdown
      title="小一点的"
      :options="dorpoptions"
      size="small"
    ></i-dropdown>
    <i-dropdown
      title="更小点的"
      :options="dorpoptions"
      size="mini"
    ></i-dropdown>
  </i-space>
</template>

<!-- js -->
<script setup>
import { reactive } from "vue";
const state = reactive({
  dorpoptions: [
    { label: "菜单1" },
    { label: "菜单2" },
    { label: "菜单3" },
    { label: "菜单4" },
    { label: "菜单5" },
  ],
});
const dropchange = (item, index) => {
  console.log(item, index);
};
const { dorpoptions } = state;
</script>