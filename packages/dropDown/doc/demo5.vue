<!-- html -->
<template>
  <i-space>
    <i-dropdown title="下拉菜单" :options="dorpoptions">
      <template #Img>
        <img src="src/assets/logo.png" alt="" />
      </template>
    </i-dropdown>

    <i-dropdown
      title="下拉菜单"
      :options="dorpoptions"
      @change="dropchange"
      size="small"
    >
      <template #Img>
        <img src="src/assets/logo.png" alt="" />
      </template>
    </i-dropdown>

    <i-dropdown
      title="下拉菜单"
      :options="dorpoptions"
      @change="dropchange"
      size="mini"
    >
      <template #Img>
        <img src="src/assets/logo.png" alt="" />
      </template>
    </i-dropdown>
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
const { dorpoptions } = state;
</script>