<!-- html -->
<template>
  <i-button @click="openDrawer">基本使用</i-button>
  <i-drawer
    v-model="drawerShow"
    title="基本使用"
    @confirm="confirmFn"
    @cancel="cancelFn"
  >
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </i-drawer>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
import iMessage from "../../message/index.js"; //此处为本地示例，请使用import {iMessage} from "ih-ui";引入
const drawerShow = ref(false);
const openDrawer = () => {
  drawerShow.value = true;
};
const confirmFn = () => {
  iMessage({ text: "确认事件" });
};
const cancelFn = () => {
  iMessage({ text: "取消事件" });
};
</script>